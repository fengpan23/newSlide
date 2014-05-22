define(['libs/backbone',
		'tantaman/web/widgets/MediaBar'],

	function(Backbone, MediaBar) {
		'use strict';

		/**
		 * @class ComponentButton
		 * @augments Backbone.View
		 */
		return Backbone.View.extend({
			className: 'modeBtn',
			tagName: 'div',
			/**
			 * Returns list of events, tracked by this view.
			 *
			 * @returns {Object}
			 */
			events: {
				'click': '_clicked'
			},

			/**
			 * Initialize ComponentButton.
			 */
			initialize: function() {
				this._modal = new MediaBar(this.options);
				this._itemImported = this._itemImported.bind(this);
			},

			/**
			 * React on button click.
			 * @private
			 */
			_clicked: function() {
				var $actView = this._modal.render(this.options);
				$('.right_body').append($actView);
				this._modal.show(this._itemImported);
			},

			/**
			 * Add imported component to the slide.
			 * @private
			 */
			_itemImported: function(src) {
				this.options.editorModel.addComponent({
					src: src,
					type: this.options.componentType
				});
			},

			/**
			 * Render the button.
			 *
			 * @returns {*}
			 */
			render: function() {
				this.$el.html('<i class="' + this.options.icon + ' icon-white"></i></br>' + this.options.name);
				this.$el.addClass(this.options.componentClass);
				return this;
			},

			constructor: function ComponentButton() {
				Backbone.View.prototype.constructor.apply(this, arguments);
			}
		});
	});