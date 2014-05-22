define(["./ComponentView", "tantaman/web/widgets/VideoControl", './Mixers'],
	function(ComponentView, VideoControl, Mixers) {
		var Html5, Youtube, result, types;

		/**
		 * @class audioView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: "component audioView",

			/**
			 * Initialize audioView component view.
			 */
			initialize: function() {
				ComponentView.prototype.initialize.apply(this, arguments);
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
			
			/**
			 * Do the actual rendering once video is loaded.
			 *
			 * @param {jQuery} $img
			 * @returns {*}
			 * @private
			 */
			_finishRender: function($video) {
				var height, naturalHeight, naturalWidth, scale, width;
				$img.bind("dragstart", function(e) {
					e.preventDefault();
					return false;
				});
				this.$content.append($img);
			}
		});
	});