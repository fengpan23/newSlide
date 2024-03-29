define(['strut/editor/EditorView',
        'strut/editor/EditorModel',
        'lls/LargeLocalStorage',
        'lls/contrib/URLCache'],
function(EditorView, EditorModel, lls, URLCache) {
	var registry = null;
	var editModel = null;


	function restoreLastPresentation(model) {
		var storageInterface = registry.getBest('strut.StorageInterface');
		var exitsaveData = localStorage.getItem('strut-exitsave');
		var restorePromise;
		if (exitsaveData && exitsaveData !== '') {
			try {
				var exitSavedPres = JSON.parse(exitsaveData);
				restorePromise = restoreExitSave(exitSavedPres, exitsaveData, storageInterface);
			} catch(e) {
				console.error(e);
			}
		}

		if (restorePromise) {
			restorePromise.then(function() {
				importPresentation(exitSavedPres);
			}, function(err) {
				loadPresentation();
			}).done();
		} else {
			loadPresentation();
		}

		function loadPresentation() {
			if (sessionMeta.lastPresentation != null) {
				storageInterface.load(sessionMeta.lastPresentation).then(importPresentation)
				.catch(function(err) {
					console.log(err);
				});
			}
		}

		function importPresentation(pres) {
			if (pres)
				model.importPresentation(pres);
		}
	}

	function restoreExitSave(exitSavedPres, exitsaveData, storage) {
		var promise = storage.store(exitSavedPres.filename, exitsaveData, {json: false});
		localStorage.setItem('strut-exitsave', '');
		return promise;
	}

	function initializeStorage() {
		console.log('Initializing storage');
		// TODO: should we force our provider
		// to whatever the user used last?
		var storage = new lls({size: 75 * 1024 * 1024, name: 'strut'});
		storage = URLCache.addTo(storage);
		storage.urlCache = storage.pipe.getHandler('URLCache');

		// TODO: some sort of spinner or loading indication
		// while we get the storage interface ready.

		storage.initialized.then(function(capacity) {
			storage.name = "Local";
			storage.id = "largelocalstorage";
			storage.ready = function() { return true; };
			storage.bg = function() {};

			registry.register({
				interfaces: 'tantaman.web.StorageProvider'
			}, storage);

			if (window.__requiresStorageConversion) {
				// convert and delete past presentations
				console.log('Requires conversion');
			}
		});

		return storage.initialized;
	}

	function loadEditor() {
		var model = new EditorModel(registry);
    	var editor = new EditorView({model: model, registry: registry});
    	editor.render();
		$('body').append(editor._header.render().$el);
    	$('body').append(editor.$el);
		$('body').append(editor._footer.render().$el);
    	return model;
	}

	var editorStartup = {
		run: function(deck) {
			while(!editModel){
				editModel = loadEditor();
			}
			if(deck){
				initializeStorage().then(function() {
					editModel.importPresentation(deck);
					$(window).unload(function() {
//						window.location.hash = '';  //Remove the url parameter to prevent refreshed pull database data
						localStorage.setItem('Strut_sessionMeta', JSON.stringify(window.sessionMeta));
					});
				}, function(err) {
					// Just continue with LocalStorage?
					// fail?
					console.error(err);
				}).done();
			}else{
				initializeStorage().then(function() {
					restoreLastPresentation(editModel);
					$(window).unload(function() {
						localStorage.setItem('Strut_sessionMeta', JSON.stringify(window.sessionMeta));
					});
				}, function(err) {
					// Just continue with LocalStorage?
					// fail?
					console.error(err);
				}).done();
			}
		}
	};

	var welcome = {
		run: function() {
			// If no previous presentation was detected, show the welcome screen.
		}
	};

	return {
		initialize: function(reg) {
			registry = reg;
			registry.register({
				interfaces: 'strut.StartupTask'
			}, editorStartup);

			registry.register({
				interfaces: 'strut.StartupTask'
			}, welcome);
		}
	};
});