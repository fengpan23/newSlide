define(
function() {
	function SearchModal(options) {
		this.$el = $('<div class="modal hide"></div>');
		this._okClicked = this._okClicked.bind(this);
		this._focus = this._focus.bind(this);
		this._search = this._search.bind(this);
		this.download = this.download.bind(this);
		this.audition = this.audition.bind(this);
		this.hide = this.hide.bind(this);
		this.$el.on('click', '.ok', this._okClicked);
		this.$el.on('click', '.icon-play', this.audition);
		this.$el.on('click', '.icon-download', this.download);
		this.$el.on('hidden', this.hide);
		this.options = options;
		this.render();
		this.$el.modal({
			show: false
		});
		this.mlistTemplete = JST['tantaman.web.widgets/SearchList'];
		this.$mlist = $('<div style="max-height:260px;overflow:auto;"></div>');
	}

	SearchModal.prototype = {
		render: function() {
			this.$el.html(
				JST['tantaman.web.widgets/SearchBar'](this.options));
			this.$input = this.$el.find('input');
			this.$input.on('focus', this._focus);
			this.$input.on('keyup', this._search)
			
			this.$errors = this.$el.find('.errors');
			$('#modals').append(this.$el);
			return this;
		},
		
		audition: function(e) {
		    this.$mlist.find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
			var song = $(e.currentTarget).addClass('icon-pause').attr('data-song');
			var singer = $(e.currentTarget).attr('data-singer');
    		var src = "http://box.baidu.com/widget/flash/song.swf?name="+ song +"&artist="+ singer +"&autoPlay=true&loop=true";
    		this.$mlist.find('iframe')[0].src = src;
			// var _this = this;
			// this.getMusciInfo(mId, function(musicInfo) {
				// var songLink = musicInfo.data.songList[0].songLink;
				// console.log(songLink);
// //				$('body').append('<audio autoplay="autoplay" src="'+ musicInfo.data.songList[0].songLink +'"></audio>');
				// _this.$mlist.find('ifrema')[0].src = songLink;
// //				_this.$mlist.find('audio')[0].play();
			// });
		},
		
		download: function(e) {
//			var mId = $(e.currentTarget).attr('data-id');
//			this.getMusciInfo(mId, function(musicInfo) {
//				var songLink = musicInfo.data.songList[0].songLink;
//				var temp = document.createElement('iframe');
//				temp.document.location = songLink;
//			});
		},
		
		getMusciInfo: function(mId, cb) {
			$.ajax({
				url: "/transpond/BaiduMusicInfo",
//				type: "GET",
				data: {mId: mId}
//				context: document.body
			}).done(function(mess) {
				console.log(mess);
				cb(mess);
//				$(this).addClass( "done" );
			});
		},
		
		listRender: function(data) {
			this.$mlist.empty();
			var _this = this;
//			for(ls in data){
//				this.$mlist.append(this.mlistTemplete(data));
//			}
//			for(ls in data){
//				$(this.mlistTemplete(data[ls])).on('canplay', function(e) {
//					_this.$mlist.append(this);
//				});
//			}
			this.$mlist.append(this.mlistTemplete(data));
			this.$el.find('.modal-body').append(this.$mlist);
		},
		
		_search: function(e) {
			var _this = this;
			var inputName = this.$input.val().replace(/\s+/g,'');
			if(inputName.length > 0){
				$.ajax({
					url: "/transpond/BaiduMusicSearch",
	//				type: "GET",
					data: {mName: inputName}
	//				context: document.body
				}).done(function(mess) {
					_this.listRender(mess);
					console.log(mess);
	//				$(this).addClass( "done" );
				});
			}
		},

		show: function(cb, value) {
			this.cb = cb;
			if (value)
				this.$input.val(value);
			this.$errors.html('');
			this.$el.modal('show');
			this.$input.focus();
		},
		
		_focus: function() {
			if(this.$input.val().indexOf('presentation-') === 0){
				this.$input.val('')
			}
		},

		hide: function() {
			this.$el.modal('hide');
		},

		_okClicked: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var input = this.$input.val();
			var result = this.cb(input);
			if (result == true)
				this.hide();
			else {
				this.$errors.html(JST['tantaman.web.widgets/List'](result));
			}
		}
	};

	return SearchModal;
});