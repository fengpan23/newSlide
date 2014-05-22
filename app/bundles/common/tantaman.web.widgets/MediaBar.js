define(['libs/backbone', 'libs/imgup'],
function(Backbone, Imgup) {

	var loadTimes = 0;
	var searchTag = '背景'
	return Backbone.View.extend({
		className: "mediaBar",
		events: {
			'click .close': 'hidden',
			'click input[type="submit"]': 'search',
			'keydown input[type="text"]': 'inEnter',
			'change input[type="file"]': 'fileChosen',
		},
		initialize: function() {
			this._renderMusicList = this._renderMusicList.bind(this);
			this._scrollLoad = this._scrollLoad.bind(this);
			this._autoLoad = this._autoLoad.bind(this);
			this.inEnter = this.inEnter.bind(this);
		},
		show: function(cb) {
			this.cb = cb;
			this.$el.parent().show();
			this._autoLoad(searchTag);
		},

		inEnter: function(e){
			var theEvent = window.event || e; 
			var code = theEvent.keyCode || theEvent.which; 
			if (code === 13) {
				this.$submit.click();
			}
		},

		_scrollLoad: function(){
			if(this.$search_list[0].scrollTop + this.$search_list.height() >= this.$search_list[0].scrollHeight){
				loadTimes += 1;
				this._searchImage(this.$text.val() || searchTag, loadTimes);
			}
		},

		search: function(){
			loadTimes = 0;
			var tag = this.$text.val();
			//判断searchTag是否相同
			if(tag && tag !== searchTag){
				searchTag = tag;
				this.$search_list.html('');
				this._autoLoad(searchTag);
			}
		},

		_autoLoad: function(tag){
			console.log(this.$search_list.height());
			console.log(this.$search_list[0].scrollHeight);	

			if(this.$search_list.height() + 4 > this.$search_list[0].scrollHeight) {
				this._searchImage(tag || searchTag);
				loadTimes += 1;
			};
		},

		_searchImage: function(Stag, st){
			var start = loadTimes * 8 || 0;
			var _this = this;
			$.ajax({
				url: "/transpond/GoogleImageSearch",
//				type: "GET",
				data: {
					tag: Stag,
					start: start
					},
				beforeSend: function(){
					_this.$imageLoding.show();
				}
//				context: document.body
			}).done(function(mess) {
				// console.log(mess);
				if(!mess.responseData){
					return false;
				}
				_this._renderMusicList(mess.responseData.results);
				_this._autoLoad();
				// cb(mess.data);
			}).fail(function(){
				alert('fail');
				return false;
			}).always(function() {
			    _this.$imageLoding.hide();
			});
		},

		_renderMusicList: function(list){
			var templet = JST["tantaman.web.widgets/MediaListBar"](list);
			this.$search_list.append(templet);
		},

		_dragover: function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.originalEvent.dataTransfer.dropEffect = 'copy';

			this.$droparea.addClass('active');
		},

		_dragleave: function(e) {
			this.$droparea.removeClass('active');
		},

		_drop: function(e) {
			this.$droparea.removeClass('active');
			e.stopPropagation();
			e.preventDefault();
			var f = e.originalEvent.dataTransfer.files[0];

			this._fileChosen(f);
		},

		fileChosen: function(e) {
			var f, reader,
				_this = this;
			f = e.target.files[0];

			this._fileChosen(f);
		},

		_fileChosen: function(f) {
			if (!f.type.match('image.*')){
				return;
			}

			var _this = this;
			var reader = new FileReader();
			reader.onload = function(e) {
				_this.src = e.target.result; // reader's return value after read.
				_this.cb(_this.src);
            };
            // run after file selected, because e.target block thread
            reader.readAsDataURL(f);
		},
		hidden: function() {
			this.$el.parent().hide();
		},
		render: function() {
			this.$el.html(JST["tantaman.web.widgets/MediaBar"](this.options));

			// this.$input = this.$el.find('input[type="file"]');
			this.$text = this.$el.find('input[type="text"]');
			this.$submit = this.$el.find('input[type="submit"]');
			this.$search_list = this.$el.find('.search_list');
			this.$imageLoding = this.$el.find('.imageLoding');

			this.$search_list.on('scroll', this._scrollLoad);
			return this.$el;
		},
		constructor: function mediaBar() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});
