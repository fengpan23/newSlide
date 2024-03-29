define(['./ComponentView',
        'tantaman/web/widgets/RightMenu',
        './Mixers'],
	function(ComponentView, RightMenu, Mixers) {

		/**
		 * @class ImageView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: "component imageView",
			tagName: "div",

			/**
			 * Initialize Image component view.
			 */
			initialize: function() {
				ComponentView.prototype.initialize.apply(this, arguments);
				if (this.model.get("imageType") === "SVG") {
					this.scale = Mixers.scaleByResize;
					this.model.off("change:scale", this._setUpdatedTransform, this);
					this.model.on("change:scale", Mixers.scaleChangeByResize, this);
				}
				this.model.on('change:uri', this._urlChanged, this);
				this.model.on('change:opacity', this._opacityChanged, this);
				
				this._rightMenu = this._rightMenu.bind(this);
				this.$el.on("contextmenu", this._rightMenu);
			},

			/**
			 * Render element based on component model.
			 *
			 * @returns {*}
			 */
			render: function() {
				var $img,
					_this = this;
				ComponentView.prototype.render.call(this);

				var url = this.model.getURL();
				if (url) {
					$img = $('<img src="' + url + '"></img>');
				} else {
					$img = $("<img></img>");
				}
				
				$img.load(function() {
					return _this._finishRender($(this));
				});
				$img.error(function() {
					return _this.remove();
				});
				
				this.$img = $img;
				return this.$el;
			},
			
			_rightMenu: function(e) {
				var menu = new RightMenu({model: this.model});
				if(menu){
					menu.render();
					menu.show(e);
					return false;
				}else{
					return ture;
				}
			},
			
			_opacityChanged: function() {
				this.$content.css("opacity", this.model.get('opacity'));
			},

			_urlChanged: function(model, url) {
				this.$img.attr('src', url);
			},

			/**
			 * Do the actual rendering once image is loaded.
			 *
			 * @param {jQuery} $img
			 * @returns {*}
			 * @private
			 */
			_finishRender: function($img) {
				var height, naturalHeight, naturalWidth, scale, width;
				if(this.model.get("height")){
					naturalHeight = this.model.get("height");
					if(this.model.get("width")){
						naturalWidth = this.model.get("width");
					}
				}else{
					naturalWidth = $img[0].naturalWidth;
					naturalHeight = $img[0].naturalHeight;
				}
				
				if (this.model.get("imageType") === "SVG") {
					$img.css({
						width: "100%",
						height: "100%"
					});
					scale = this.model.get("scale");
					if (scale && scale.width) {
						this.$el.css({
							width: scale.width,
							height: scale.height
						});
					} else {
						width = Math.max(naturalWidth, 50);
						height = Math.max(naturalHeight, 50);
						// this.$el.css({
						//   width: width,
						//   height: height
						// });
						this.model.set("scale", {
							width: width,
							height: height
						});
					}
				} else {
					this.origSize = {
						width: naturalWidth,
						height: naturalHeight
					};
					$img[0].width = naturalWidth;
					$img[0].height = naturalHeight;
					if(!(this.model.get('width') || this.model.get('height'))){
						if(naturalWidth > 768 || naturalHeight > 576){
							var loxm = (naturalWidth / 768) > (naturalHeight / 576) ? (768 / naturalWidth) : (576 / naturalHeight);
							var scale = {
									x: loxm,
									y: loxm
							};
							
							scale.width = scale.x * naturalWidth;
							scale.height = scale.y * naturalHeight;
							this.model.set("scale", scale);
							this.model.set('width', naturalWidth);
							this.model.set('height', naturalHeight);
						}
					}
					this._setUpdatedTransform();
				}
				$img.bind("dragstart", function(e) {
					e.preventDefault();
					return false;
				});
				this.$content.append($img);
				this.$content.css({opacity: this.model.get('opacity')});
				if (this.model.get("imageType") === "SVG") {
					$img.parent().addClass("svg");
					return $img.parent().parent().addClass("svg");
				}
			}
		});
	});