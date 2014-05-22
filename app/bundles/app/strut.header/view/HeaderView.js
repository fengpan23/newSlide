define(['libs/backbone',
		'strut/logo_button/LogoView',
		'strut/presentation_generator/view/PreviewButton',
		'./ThemeProviderView',
//		'./Tablets',
		'css!styles/header/header.css'],
function(Backbone, LogoView, PreviewButton, ThemeProviderView, Tablets, empty) {
	return Backbone.View.extend({
		className: 'header_container',

		initialize: function() {
			this._template = JST['strut.header/Header'];
			this._logoButton = new LogoView({editorModel: this.model.editorModel()});
			this._previewButton = 
				new PreviewButton({editorModel: this.model.editorModel()});
			this._themeProviderView = new ThemeProviderView(this.model.editorModel());

			this.model.editorModel().on('change:activeMode', this._modeChanged, this);

//			this._tablets = new Tablets(this.model.editorModel());
		},

		_modeChanged: function(model, value) {
			if (value.id == 'overview') {
				this.$el.find('.create-comp-buttons').addClass('hidden');
			} else {
				this.$el.find('.create-comp-buttons').removeClass('hidden');
			}
		},

		// TODO: need to respond to addition/removal of
		// create component buttons
		render: function() {
			this.$el.html(this._template());
		
			this.$el.find('.header_left').append(this._logoButton.render().$el);
			this.$el.find('.header_left').append(this._previewButton.render().$el);
			
			var $createCompButtons = this.$el.find('.header_center > div');
			this.model.get('createCompButtons').forEach(function(button) {
				$createCompButtons.append(button.render().el);
			}, this);
			
			//$createCompButtons.append(this._themeProviderView.render().$el);
			
			var $modeButtons = this.$el.find('.mode-buttons');
			this.model.get('modeButtons').forEach(function(button) {
				$modeButtons.append(button.render().el);
			}, this);

			

			//var $generatorButton = this.$el.find('.preview-generator-button');
			

//			this._tablets.render();
//			this.$el.append(this._tablets.$el);

			return this;
		},

		constructor: function HeaderView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});