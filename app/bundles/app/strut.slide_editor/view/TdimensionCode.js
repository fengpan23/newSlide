define(['libs/backbone', 'j_qrcode'],
function(Backbone, J_qrcode) {
	return Backbone.View.extend({
		className: 'tdimensionCode',
		events: {
//			"click": "_tdimensionCode"
			"mouseenter .codeContainer" : "_targetShow",
			"mouseleave": "_targetHide"
		},

		_targetHide: function() {
			this.$el.find('.codeContainer').show();
			this.$el.find('canvas').hide();
//			this.$el.qrcode("title");
//			if(this.$el.is(":hidden")){
//				this.$el.show(1000);
//				this.$el.animate({left: "135px"}, 1000, function() {
//					$(this).find("i").removeClass("icon-chevron-right").addClass("icon-chevron-left");
//					$(window).resize();
//				});
//			}else{
//				this.$el.hide(1000);
//				this.$el.animate({left: "0px"}, 1000, function() {
//					$(this).find("i").removeClass("icon-chevron-left").addClass("icon-chevron-right");
//					$(window).resize();
//				});
//			}
		},
		_targetShow: function() {
			this.$el.find('.codeContainer').hide();
			if(!this.$el.has('canvas')[0]){
				this.$el.qrcode("appdev.xlpt.com:5858");
			}
			this.$el.find('canvas').show();
		},

		render: function() {
			//'<div id="CodeContainer"></div>'
			this.$el.html('<div class="codeContainer"></div>');
			return this;
		},

		constructor: function TdimensionCode() {
			Backbone.View.prototype.constructor.call(this);
		}
	});
});
