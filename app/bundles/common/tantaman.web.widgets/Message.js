define(['libs/backbone',
        'css!styles/widgets/Message.css'],
function(Backbone) {
	return Backbone.View.extend({
		className: "message",

		events: {
			'click': '_dispose',
		},
		
		show: function(mess) {
			this.render(mess);
			
			var self = this;
			this.$el.fadeIn(1000, function() {
				$('body').find('.modal-backdrop').remove();
				self.timeout = setTimeout(function() {
					self._dispose();
				}, 5000);
			});
//			if(this.slideWell.$el.is(":hidden")){
//				this.slideWell.$el.show(1000);
//				this.$el.animate({left: "135px"}, 1000, function() {
//					$(this).find("i").removeClass("icon-chevron-right").addClass("icon-chevron-left");
//					$(window).resize();
//				});
//			}else{
//				this.slideWell.$el.hide(1000);
//				this.$el.animate({left: "0px"}, 1000, function() {
//					$(this).find("i").removeClass("icon-chevron-left").addClass("icon-chevron-right");
//					$(window).resize();
//				});
//			}
		},

		render: function(mess) {
			this.template = JST['tantaman.web.widgets/Message'];
			console.log(this.template(mess));
			this.$el.empty();
			this.$el.html(this.template(mess));
//			this.$mess = this.$el.find('.mutual_mess');
			$('body').append(this.$el);
			return this;
		},

		_dispose: function() {
			clearTimeout(this.timeout);
			var self = this;
			this.$el.fadeOut(2000, function() {
				self.$el.remove();
			});
		},

		constructor: function Message() {
			Backbone.View.prototype.constructor.call(this);
		}
	});
});