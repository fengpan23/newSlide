define(['libs/backbone',
		'strut/header/view/HeaderView',
		'strut/footer/view/FooterView',
		'./CustomBgStylesheet',
		'tantaman/web/widgets/InputRequestModal',
		'lang'],
function(Backbone, Header, Footer, CustomBgStylesheet, InputRequestModal, lang) {
	return Backbone.View.extend({
		className: 'body_container',
		initialize: function() {
			this._header = new Header({model: this.model.get('header')});
			
			this._footer = new Footer({model: this.model._deck});

			this.model.on('change:activeMode', this._modeChanged, this);
			this.model.on('newPresentationDesired', this._newPresentationDesired, this);

			this._customBgSheet = new CustomBgStylesheet(this.model);

			this._filenameInput = new InputRequestModal({
				title: lang.new_presentation,
				prompt: lang.name,
				oktext: lang.create_presentation
			});

			$('#modals').append(this._filenameInput.render().$el);
		},

		render: function() {
			this.$el.empty();
			var activeMode = this.model.get('activeMode');
			if (activeMode)
				this.$el = activeMode.view.render().$el;
			else
				this._renderNoMode();
			return this;
		},

		_newPresentationDesired: function(num) {
			var self = this;
			this._filenameInput.show(function(name) {
				// TODO: alos check to see if another
				// presentation with that name exists?
				if (self.model.validKey(name)) {
					self.model.createPresentation(name);
					return true;
				}
					
				return {
					errors: lang.invalid_filename
				};
			}, 'presentation-' + num);
		},

		_modeChanged: function(undefined, mode) {
			this._footer.dispose();
			this.$el.append(mode.view.render().$el);
			this.$el.append(this._footer.render().$el);
		},

		_renderNoMode: function() {
			this.$el = $('<div class="alert alert-error">No modes available.  Did some plugins fail to load?</div>');
		}
	});
});
