define(["./ComponentView", "tantaman/web/widgets/VideoControl", './Mixers'],
	function(ComponentView, VideoControl, Mixers) {
		/**
		 * @class audioView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: "component audioView",
			
			events: function() {
                var myEvents, parentEvents;
                parentEvents = ComponentView.prototype.events();
                myEvents = {
                    "mouseenter": "getFocus",
                    "click": "audioPlay"
                };
                return _.extend(parentEvents, myEvents);
            },

			/**
			 * Initialize audioView component view.
			 */
			initialize: function() {
				ComponentView.prototype.initialize.apply(this, arguments);
			},
			
			getFocus: function(){
			    this.model.set("selected", true, { multiselect: true });
			},
            
            audioPlay: function(){
                return true;
            },
			/**
			 * Render element based on component model.
			 *
			 * @returns {*}
			 */
			render: function() {
				ComponentView.prototype.render.call(this);
	
				var $frame, scale;
                $frame = $('<iframe src="'+ this.model.getURL() +'" width="50px" height="50px" frameborder="0" scrolling="auto">');
                var scale = this.model.get('scale');
                this.$el.css({
                    width: 60,
                    height: 60
                });
                this.$el.find(".content").append($frame);
                this.$el.find(".label").hide();
				return this.$el;
			}
		});
	});