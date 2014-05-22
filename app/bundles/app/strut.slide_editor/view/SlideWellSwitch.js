define(['libs/backbone'],
function(Backbone) {
	return Backbone.View.extend({
		className: 'slideWellSwitch',
		events: {
			click: "_switchSlideWell"
		},

		_switchSlideWell: function() {
			if(this.slideWell.$el.is(":hidden")){
				this.slideWell.$el.show(1000);
				$('.center_body').animate({left: "155px"}, 1000, function() {
					$(window).resize();
				});
			}else{
				this.slideWell.$el.hide(1000);
				$('.center_body').animate({left: "0px"}, 1000, function() {
					$(window).resize();
				});
			}
		},

		render: function() {
			this.$el.html(JST['strut.slide_editor/Switch']);
			return this;
		},

		constructor: function SlideWellSwitch(slideWell) {
			this.slideWell = slideWell;
			Backbone.View.prototype.constructor.call(this);
		}
	});
});
