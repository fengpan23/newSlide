define(["./Menu",
        "strut/deck/ComponentCommands",
    	"tantaman/web/undo_support/CmdListFactory",
    	"lang"],
function(Menu, ComponentCommands, CmdListFactory, lang) {
	
	var undoHistory = CmdListFactory.managedInstance('editor');
	
	function TextBoxMenu(options) {
		var menulist = [{
			title: lang.bgOpacity,
			hander: this._adjustOpacity,
			model: options.model
		},{
			title: lang.save_as,
			hander: this._saveAs,
			model: options.model,
			$currenttarge: options.$target
		}];
		
		this.$el = $('<ul class="rightmenu"></ul>');
		
		options.model.bind('adjustOpacity:hide', this._hideAdjustOpacity, this);
		
		for(var li in menulist){
			this.$el.append(new Menu(menulist[li]));
		}
	}

	TextBoxMenu.prototype = {
		render: function() {
			return this;
		},
		
		_saveAs: function() {
//			var imgURL = "http://www.qi9.cn/uploadfiles/2012-02/20122207561446701.jpg";
//			var oPop = window.open(imgURL,"","width=1, height=1, top=5000, left=5000");
//			for(; oPop.document.readyState != "complete"; ){ 
//				if (oPop.document.readyState == "complete")
//					break;
//				}
//			oPop.document.execCommand("SaveAs");
//			oPop.close();
		},
		
		_adjustOpacity: function() {
			var initOpacity = (this.model.get('opacity') >= 0) ? this.model.get('opacity') : 1;
			var self = this;
		    $( "#slider-range-min" ).slider({
			      range: "min",
			      value: 100 - initOpacity * 100,
			      min: 0,
			      max: 100,
			      slide: function(event, ui ) {
			    	  //opacity: 0.4
//			    	  console.log("slide value: " + ui.value);
			    	  $( "#amount" ).val(ui.value + "%");
			    	  self.model.set('opacity', 1 - ui.value/100);
			      },
			      change: function(event, ui) {
//			    	  console.log("change value: " + ui.value);
			    	  self.model.set('opacity', 1 - ui.value/100);
			    	  var cmd = ComponentCommands.Opacity(initOpacity, self.model);
			    	  undoHistory.push(cmd);
			      }
		    });
		    $( "#amount" ).val($( "#slider-range-min" ).slider( "value" ) + "%");
			$('.adjustOpacity').show();
		},
		
		_hideAdjustOpacity: function() {
			if(!$('.adjustOpacity').is(":hidden")){
				$("#slider-range-min").slider("destroy");
				$('.adjustOpacity').hide();
			}
		}
	};

	return TextBoxMenu;
});