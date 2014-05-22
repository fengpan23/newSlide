define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["strut.etch_extension/align"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \n	class=\"btn btn-small etch-";
  if (stack1 = helpers.button) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-align-";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i></a>";
  return buffer;
  });

this["JST"]["strut.etch_extension/colorChooser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"color-chooser colorpicker etch-";
  if (stack1 = helpers.button) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  });

this["JST"]["strut.etch_extension/defaultButton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \n	class=\"btn btn-small etch-";
  if (stack1 = helpers.button) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (stack1 = helpers.display) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.display; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a>";
  return buffer;
  });

this["JST"]["strut.etch_extension/fontFamilySelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\n	<button class=\"btn btn-inverse dropdown-toggle btn-small fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></button>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">\n		<li>	\n				<a class=\"宋体\" href=\"#\" data-value=\"'宋体', sans-serif\">宋体</a>\n				<a class=\"楷体\" href=\"#\" data-value=\"'楷体', sans-serif\">楷体</a>\n				<a class=\"黑体\" href=\"#\" data-value=\"'黑体', sans-serif\">黑体</a>\n				<a class=\"魏碑\" href=\"#\" data-value=\"'魏碑', sans-serif\">魏碑</a>\n                  <a class=\"lato\" href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>\n                  <a class=\"leaguegothic\" href=\"#\" data-value=\"'League Gothic', sans-serif\">League Gothic</a>\n                  <a class=\"droidsansmono\" href=\"#\" data-value=\"'Droid Sans Mono', monospace\">Droid Sans Mono</a>\n                  <a class=\"ubuntu\" href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>\n                  <a class=\"abril\" href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>\n                  <a class=\"hammersmith\" href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>\n                  <a class=\"fredoka\" href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>\n                  <a class=\"gorditas\" href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>\n                  <a class=\"pressstart\" href=\"#\" data-value=\"'PressStart2P', cursive\">Press Start 2P</a>\n		</li>\n	</ul>\n</div>";
  });

this["JST"]["strut.etch_extension/fontSizeSelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\n	<button class=\"btn btn-small btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" title=\"Choose the font size\"><span class=\"text fontSizeReadout\">72</span>\n		<span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">\n		<li>\n                  <a href=\"#\" data-value=\"144\">144</a>\n                  <a href=\"#\" data-value=\"96\">96</a>\n                  <a href=\"#\" data-value=\"72\">72</a>\n			<a href=\"#\" data-value=\"64\">64</a>\n                  <a href=\"#\" data-value=\"48\">48</a>\n                  <a href=\"#\" data-value=\"36\">36</a>\n                  <a href=\"#\" data-value=\"24\">24</a>\n                  <a href=\"#\" data-value=\"16\">16</a>\n                  <a href=\"#\" data-value=\"12\">12</a>\n                  <a href=\"#\" data-value=\"8\">8</a>\n		</li>\n     	</ul>\n</div>";
  });

this["JST"]["strut.footer/Footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<img src=\"http://";
  if (stack1 = helpers.domain) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.domain; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.avatar) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program5(depth0,data) {
  
  
  return "Administartor";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    		<li class=\"about-link\">email： ";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n    	";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        	<li class=\"about-link\">上次修改时间： ";
  if (stack1 = helpers.last_modified) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_modified; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"container\">\r\n	<div style=\"float:left\" class=\"inline\">\r\n		";
  stack1 = helpers['if'].call(depth0, depth0.avatar, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n    <ul class=\"footer-links unstyled inline\">\r\n        <li class=\"about-link\">创建者： ";
  stack1 = helpers['if'].call(depth0, depth0.name, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.email, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n    <ul class=\"footer-title unstyled inline\">\r\n        <li>课件名： <strong>";
  if (stack1 = helpers.filename) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.filename; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong></li>\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.last_modified, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["strut.header/Header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n<div class=\"header_left\">\n</div>\n<div class=\"header_center\">\n	<div class=\"mode_group\"></div>\n</div>\n<div class=\"header_right\">\n\n</div>";
  return buffer;
  });

this["JST"]["strut.logo_button/Logo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"dropdown-toggle logo_dropdown\" data-toggle=\"dropdown\">\n</a>\n<ul class=\"dropdown-menu\"></ul>";
  });

this["JST"]["strut.presentation_generator.bespoke/BespokeTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<style>\n	";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</style>\n	<style>\n	";
  stack2 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customBackgrounds),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bgs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</style>\n	";
  stack2 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	<div id=\"main\" class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.isBGClass || depth0.isBGClass),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGClass", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "strut-surface ";
  if (stack2 = helpers.cannedTransition) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.cannedTransition; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n		<article class=\"innerBg\">\n			";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</article>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = self.invokePartial(partials.CustomBgStylesheet, 'CustomBgStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.surface) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.surface; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n				";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }
function program7(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n					<section class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"width: 1024px; height: 768px;\" data-bespoke-state=\"strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.determineSurface || depth1.determineSurface),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n						<div class=\"themedArea\">\n              			";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n              			</div>\n						";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n					</section>\n				";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n							";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n						";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator.handouts/HandoutsTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<style type=\"text/css\">\n";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</style>\n\n<div class=\"notes-handout\">\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"notes\">\n	Notes:\n</div>\n</div>\n";
  return buffer;
  }
function program3(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<div class=\"slide-and-notes\">\n<div class=\"slide ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer\" style=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.slideBGImg || depth1.slideBGImg),stack1 ? stack1.call(depth0, depth1, options) : helperMissing.call(depth0, "slideBGImg", depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n<div class=\"reveal themedArea\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/ComponentContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "rotate(";
  if (stack1 = helpers.rotate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "skewX(";
  if (stack1 = helpers.skewX) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skewX; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "skewY(";
  if (stack1 = helpers.skewY) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skewY; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px";
  return buffer;
  }

  buffer += "<div class=\"componentContainer ";
  if (stack1 = helpers.customClasses) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customClasses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"top: ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, depth0['y'], options) : helperMissing.call(depth0, "round", depth0['y'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px; left: ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, depth0['x'], options) : helperMissing.call(depth0, "round", depth0['x'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px; -webkit-transform: ";
  stack2 = helpers['if'].call(depth0, depth0.rotate, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewX, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewY, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; -moz-transform: ";
  stack2 = helpers['if'].call(depth0, depth0.rotate, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewX, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewY, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; transform: ";
  stack2 = helpers['if'].call(depth0, depth0.rotate, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewX, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewY, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; width: ";
  stack2 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; height: ";
  stack2 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ";\">\n";
  stack2 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<img src=\""
    + escapeExpression(((stack1 = depth1.uri),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"";
  if (stack2 = helpers.width) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.width; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" height=\"";
  if (stack2 = helpers.height) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.height; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"opacity: ";
  if (stack2 = helpers.opacity) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.opacity; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ";\"></img>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/ImpressTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n	<script>\n		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // Detect mobile browsers & use memory optimized styling if on mobile (hide all but the previous & next slides). Can prevent crashes when presentation contains many images and/or 3d elements.\n		  	var root = document.documentElement;\n			root.className += ' mobile';\n		} else {\n			var root = document.documentElement;\n			root.className += ' desktop';\n		}\n\n		function getPreviousSibling(element){\n			var p = element;\n			do p = p.previousSibling;\n			while (p && p.nodeType != 1);\n			return p;\n		}\n		\n		document.addEventListener('impress:stepleave',function(event){\n			prev = document.getElementsByClassName('prev')[0];\n			if(typeof prev != 'undefined')\n				prev.classList.remove('prev'); // Remove prev class from old prev slide\n			current = document.getElementsByClassName('active')[0]; // Get current slide\n			prev = getPreviousSibling(current); // Get prev slide\n			prev.className += ' prev'; // Mark prev slide with class\n		});\n	</script>\n\n	<style>\n		.step { display:none; } /* Start by not showing slides to prevent mobile Crash at the start */\n		.desktop .step { display:block; } /* Desktops should be able to handle all slides */\n		.step.active,.step.present,.step.active + .step,.step.prev { display:block; } /* Limit mobile to only show the current slide, the next slide, and the previous slide */\n	</style>\n";
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<style type=\"text/css\">\n";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</style>\n<style>\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customBackgrounds),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bgs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</style>\n";
  stack2 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<!-- This is a work around / hack to get the user's browser to download the fonts \n if they decide to save the presentation. -->\n<div style=\"visibility: hidden; width: 0px; height: 0px\">\n<img src=\"css/Lato-Bold.woff\" />\n<img src=\"css/HammersmithOne.woff\" />\n<img src=\"css/Droid-Sans-Mono.woff\" />\n<img src=\"css/Gorditas-Regular.woff\" />\n<img src=\"css/FredokaOne-Regular.woff\" />\n<img src=\"css/Ubuntu.woff\" />\n<img src=\"css/Ubuntu-Bold.woff\" />\n<img src=\"css/PressStart2P-Regular.woff\" />\n<img src=\"css/Lato-BoldItalic.woff\" />\n<img src=\"css/AbrilFatface-Regular.woff\" />\n<img src=\"css/Lato-Regular.woff\" />\n</div>\n\n<div class=\"fallback-message\">\n    <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>\n    <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>\n</div>\n\n<div class=\"bg ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.isBGClass || depth0.isBGClass),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGClass", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "strut-surface\">\n<div class=\"bg innerBg\">\n<div id=\"impress\">\n	";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	<div id=\"overview\" class=\"step\" data-state=\"strut-slide-overview\" data-x=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleX || depth0.scaleX),stack1 ? stack1.call(depth0, depth0.overviewX, options) : helperMissing.call(depth0, "scaleX", depth0.overviewX, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-y=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleY || depth0.scaleY),stack1 ? stack1.call(depth0, depth0.overviewY, options) : helperMissing.call(depth0, "scaleY", depth0.overviewY, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-scale=\"9\"></div>\n	";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = self.invokePartial(partials.CustomBgStylesheet, 'CustomBgStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.surface) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.surface; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program9(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			<div class=\"step\" data-state=\"strut-slide-";
  if (stack1 = helpers.index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.index; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.determineSurface || depth1.determineSurface),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-x=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleX || depth0.scaleX),stack1 ? stack1.call(depth0, depth0['x'], options) : helperMissing.call(depth0, "scaleX", depth0['x'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-y=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleY || depth0.scaleY),stack1 ? stack1.call(depth0, depth0['y'], options) : helperMissing.call(depth0, "scaleY", depth0['y'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" ";
  stack2 = helpers['if'].call(depth0, depth0.rotateX, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "  ";
  stack2 = helpers['if'].call(depth0, depth0.rotateY, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.rotateZ, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0['z'], {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.impScale, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n			<div class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"width: 1024px; height: 768px;\">\n			<div class=\"themedArea\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</div>\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</div>\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "data-rotate-x=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.toDeg || depth0.toDeg),stack1 ? stack1.call(depth0, depth0.rotateX, options) : helperMissing.call(depth0, "toDeg", depth0.rotateX, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "data-rotate-y=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.toDeg || depth0.toDeg),stack1 ? stack1.call(depth0, depth0.rotateY, options) : helperMissing.call(depth0, "toDeg", depth0.rotateY, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "data-rotate-z=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.toDeg || depth0.toDeg),stack1 ? stack1.call(depth0, depth0.rotateZ, options) : helperMissing.call(depth0, "toDeg", depth0.rotateZ, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-z=\"";
  if (stack1 = helpers['z']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['z']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-scale=\"";
  if (stack1 = helpers.impScale) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.impScale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.mobileVersion) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.mobileVersion; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.mobileVersion) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"hint\">\n    <p>Use a spacebar or arrow keys to navigate</p>\n</div>\n</div>\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/SVGContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; left: ";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; width: "
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px; height: "
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px;\">\n";
  stack2 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/SVGImage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<img src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 100%; height: 100%\"></img>\n</div>\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Shape"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.shapeSvg) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.shapeSvg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.shapeSvg) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/Table"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div class=\"antialias\" style=\"width:";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\">\r\n";
  if (stack1 = helpers.table) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.table; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n</div>\r\n</div>\r\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/TextBox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"antialias\" style=\"";
  stack1 = helpers['if'].call(depth0, depth0['new'], {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; width:";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; height:";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; background:";
  if (stack1 = helpers.background) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "; line-height:";
  if (stack1 = helpers.lineSpacing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lineSpacing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\">\n";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n</div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "display:none";
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/TransformContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "scale(";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['x']), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['x']), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ", ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['y']), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['y']), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"transformContainer\" style=\"-webkit-transform: ";
  stack1 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\n-moz-transform: ";
  stack1 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\ntransform: ";
  stack1 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<video controls>\n	<source src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"";
  if (stack1 = helpers.srcType) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.srcType; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" preload=\"metadata\"></source>\n</video>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/VideoXM"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<img src=\"img/video_snapshoot.png\" width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></img>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/WebFrame"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<iframe width=\"960\" height=\"768\" src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></iframe>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/WebFrameXM"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<img width=\"960\" height=\"768\" src=\"img/iframe_snapshoot.png\"></img>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/Youtube"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<object width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><param name=\"movie\" value=\"http://www.youtube.com/v/";
  if (stack2 = helpers.shortSrc) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.shortSrc; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&hl=en&fs=1\"><param name=\"allowFullScreen\" value=\"true\"><embed src=\"http://www.youtube.com/v/";
  if (stack2 = helpers.shortSrc) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.shortSrc; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&hl=en&fs=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></object>\n</div>\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/YoutubeContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; left: ";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">\n";
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.reveal/RevealTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <style type=\"text/css\">\n    ";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </style>\n  ";
  stack1 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  \n    <div class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.isBGClass || depth0.isBGClass),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGClass", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "reveal strut-surface\">\n      <div class=\"bg innerBg\">\n      <div class=\"slides\">\n        ";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n      </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.surface) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.surface; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program5(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n          <section class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"width: 1024px; height: 768px;\" data-state=\"strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.determineSurface || depth1.determineSurface),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n            <div class=\"themedArea\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </section>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n              ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		"
    + escapeExpression(((stack1 = ((stack1 = depth0.chosen),stack1 == null || stack1 === false ? stack1 : stack1.shortname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		"
    + escapeExpression(((stack1 = ((stack1 = depth0.chosen),stack1 == null || stack1 === false ? stack1 : stack1.displayName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	";
  return buffer;
  }

  buffer += "<div class=\"modeBtn\">\n	<i class=\"icon-play icon-white\"/></br>\n	<span class=\"chosen\">\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.chosen),stack1 == null || stack1 === false ? stack1 : stack1.shortname), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</span>\n</div>\n\n\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator/CustomBgStylesheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	.";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " {\n		background: ";
  if (stack1 = helpers.style) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.style; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n	}\n";
  return buffer;
  }

  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator/PerSlideSurfaceStylesheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	.strut-surface {\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	}\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	.slideContainer {\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	}\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGImg", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "isBGImg", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		.strut-surface > .strut-slide-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " {\n			/*this only works for bg images or custom bgs*/\n			/*for bg classes we'll have to introduce a data api*/\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		}\n		";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		.slideContainer.strut-slide-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " {\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		}\n		";
  return buffer;
  }

  buffer += "<style>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGImg", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "isBGImg", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</style>";
  return buffer;
  });

this["JST"]["strut.slide_components/Component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div class=\"content-scale\">\n	<div class=\"content\"></div>\n	"
    + "\n</div>\n<span class=\"downLabel label\"> \n	<span class=\"skewx\" data-delta=\"skewX\">↔</span>\n	<span class=\"align\" data-option=\"x\">↹</span>\n</span>\n<span class=\"leftLabel label\"> \n	<span class=\"align\" data-option=\"y\">↹</span>\n	<span class=\"skewy\" data-delta=\"skewY\">↔</span>\n</span>\n<span class=\"topLabel label rotate\" data-delta=\"rotate\">↻</span>\n<span class=\"scale label\" data-delta=\"scale\">↔</span>\n<span class=\"rightLabel label\" data-delta=\"width\" style=\"display: none;\">↔</span>\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\n";
  return buffer;
  });

this["JST"]["strut.slide_components/ShapesDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<li><a class=\"shape\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\"";
  if (stack2 = helpers.src) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.src; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" width=\"100%\" height=\"100%\"></img></a></li>\n";
  return buffer;
  }

  buffer += "<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-star icon-black\"></i>\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "lang", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<ul class=\"dropdown-menu horizontalDropdown\" role=\"menu\" style=\"min-width: 127px; width: 127px\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.shapes) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.shapes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.shapes) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["strut.slide_editor/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"btn-group iconBtns\">\n	<a class=\"btn btn-plast\">\n		<i class=\"icon-th-list icon-black\"></i>\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "slides", options) : helperMissing.call(depth0, "lang", "slides", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</a>\n</div>";
  return buffer;
  });

this["JST"]["strut.slide_editor/Switch"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"btn-plast\">\r\n	<i class=\"icon-pause icon-black\"></i>\r\n</a>\r\n";
  });

this["JST"]["strut.slide_editor/Tablets"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"tablets-content\">\n</div>\n<div class=\"tablets-toggle btn btn-plast\">\n	<span class=\"caret whiteCaret\"></span>\n</div>";
  });

this["JST"]["strut.slide_snapshot/SlideDrawer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, "Video WebFrame", options) : helperMissing.call(depth0, "renderComponent", depth0, "Video WebFrame", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }

  buffer += "<div class=\"themedArea\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["strut.slide_snapshot/SlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"overlay\"></div>\n<div class=\"slideDrawer slideContainer\"></div>\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\n<span class=\"badge badge-inverse\"> </span>";
  });

this["JST"]["strut.slide_snapshot/TransitionSlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-container\">\n	<div class=\"content\">\n		<div class=\"slideDrawer slideContainer\"></div>\n		<div class=\"back\"></div>\n		<div class=\"top\"></div><div class=\"bottom\"></div><div class=\"left\"></div><div class=\"right\"></div>\n	</div>\n</div>\n\n<div class=\"topLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateY\">↻Y</span>\n	<input type=\"text\" data-option=\"rotateY\" value=\"";
  if (stack1 = helpers.rotateY) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotateY; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></input>\n</div>\n<div class=\"leftLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateX\">↻X</span>\n	<input type=\"text\" data-option=\"rotateX\" value=\"";
  if (stack1 = helpers.rotateX) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotateX; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></input>\n</div>\n<div class=\"rightLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateZ\">↻Z</span>\n	<input type=\"text\" data-option=\"rotateZ\" value=\"";
  if (stack1 = helpers.rotateZ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotateZ; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></input>\n</div>\n<div class=\"positioningCtrls form-inline\">\n	<span class=\"label layer\">z</span>\n	<input class=\"position\" type=\"text\" data-option=\"z\" value=\"";
  if (stack1 = helpers['z']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['z']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n	<span class=\"label scales\">↔</span>\n	<input class=\"position\" type=\"text\" data-option=\"scale\" value=\"";
  if (stack1 = helpers.impScale) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.impScale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n</div>\n<span class=\"badge badge-inverse\"> </span>\n";
  return buffer;
  });

this["JST"]["strut.splash/Splash"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div></div>";
  });

this["JST"]["strut.storage/ProviderTab"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div></div>";
  });

this["JST"]["strut.storage/StorageModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	"
    + "\n	<div class=\"tabContent\" style=\"max-height: 370px; overflow: auto\">\n	</div>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  return buffer;
  });

this["JST"]["strut.themes/BackgroundChooserDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li><a class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " thumbnail\" alt=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a></li>\n			";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-adjust icon-black\"></i>\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "lang", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<ul class=\"dropdown-menu\" role=\"menu\">\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n</ul>\n";
  return buffer;
  });

this["JST"]["strut.themes/ColorChooserModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">Custom Color</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<input type='text' class=\"color-chooser pull-right\" />\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  });

this["JST"]["strut.themes/SurfaceChooserDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li><a class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " thumbnail\" alt=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a></li>\n			";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-tint icon-black\"></i>\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "lang", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<ul class=\"dropdown-menu\" role=\"menu\">\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n</ul>\n";
  return buffer;
  });

this["JST"]["strut.transition_editor/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"btn-group iconBtns\">\n	<a class=\"btn btn-plast\">\n		<i class=\"icon-th-large icon-black\"></i>\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "overview", options) : helperMissing.call(depth0, "lang", "overview", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</a>\n</div>";
  return buffer;
  });

this["JST"]["strut.transition_editor/CannedTransitions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li class=\"span4\">\n		<a href=\"#\" data-name=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"thumbnail";
  stack1 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<img src=\"";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"";
  if (stack1 = helpers.style) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.style; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></img>\n		</a>\n	</li>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<ul class=\"thumbnails\">\n	";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n<span class=\"bespoke-link\">\n	<a href=\"https://github.com/markdalgleish/bespoke.js\" target=\"_blank\">Bespoke.js</a>\n</span>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/CodeEditor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<textarea class=\"codeInput\">";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Save</a>\n	<a href=\"#\" class=\"btn btn-danger cancel\">Cancel</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/FileBrowser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n	<li data-fileName=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"><a>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " <button class=\"close pull-right\">×</button></a></li>\n	";
  return buffer;
  }

  buffer += "<div class=\"errors alert-error\"></div>\n<input type=\"text\" class=\"fileName\"></input>\n<ul class=\"nav nav-pills nav-stacked\">\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.files) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.files; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.files) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/InputRequestModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<div class=\"errors alert-error\"></div>\n	<form class=\"form-inline\">\n		<label>";
  if (stack1 = helpers.prompt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prompt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ":&nbsp;</label><input type=\"text\" />\n	</form>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/ItemImportModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "<div data-option=\"browse\" class=\"btn\">Browse</div>";
  }

function program3(depth0,data) {
  
  
  return "<div class=\"droparea\">Drag & Drop</div>";
  }

  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<div class=\"alert alert-error dispNone\">\n  		<button class=\"close\" data-dismiss=\"alert\">×</button>\n  		Please enter the correct address\n	</div>\n	<div class=\"form-inline\"><b>URL/File:&nbsp;&nbsp;&nbsp;&nbsp;</b><input type=\"text\" name=\"itemUrl\"></input>&nbsp;";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.browsable) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.browsable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	<input type=\"file\" style=\"display:none\"></input>\n	<h5>Preview:</h5>\n	<ul class=\"thumbnails\">\n		<li>\n			<div class=\"thumbnail\" style=\"width: 368px; height: 276px; position: relative;\">\n				";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.browsable) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.browsable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<";
  if (stack1 = helpers.tag) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tag; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " class=\"preview\" width=\"360\" height=\"268\" style=\"z-index: 1;\" src=\"\"></";
  if (stack1 = helpers.tag) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tag; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n			</div>\n			<div class=\"thumbnail imgcut dispNone\" style=\"width: 140px; height:105px; float: left;\">\n				<img class=\"preview\" style=\"margin: 0 auto; position: relative; z-index: 1;\" src=\"\">\n			</div>\n			<div class=\"progress active progress-striped dispNone\">\n  				<div class=\"bar\"></div>\n			</div>\n		</li>\n	</ul>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/List"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>";
  if (stack1 = helpers.errors) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.errors; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n	";
  return buffer;
  }

  buffer += "<ul>\n	";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/MediaBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"search_header\">\r\n	<button class=\"close\">×</button>\r\n	<h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n	<input type=\"file\" class=\"imgInput\" accept=\"image/*\"></input>\r\n</div>\r\n<div class=\"search_center\">\r\n	<h4>从网络中搜索";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n	<p>\r\n		<input type=\"text\" class=\"box\" title=\"在此输入搜索内容。\">\r\n		<input type=\"submit\" value=\"Go\" class=\"button\" title=\"搜索！\">\r\n	</p>\r\n	<div class=\"imageLoding\"></div>\r\n	<div class=\"search_list\"></div>\r\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/MediaListBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	<img src=\"";
  if (stack1 = helpers.tbUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.tbUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"115px\" height=\"115px\" tag=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n";
  return buffer;
  }

  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/Message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<div class=\"alert alert-success\">\r\n	";
  if (stack1 = helpers.success) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.success; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n</div>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<div class=\"alert alert-info\">\r\n	";
  if (stack1 = helpers.info) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.info; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n</div>\r\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<div class=\"alert alert-error\">\r\n	";
  if (stack1 = helpers.error) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n</div>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.success, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, depth0.info, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, depth0.error, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/PopoverTextbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <input type=\"textbox\" placeholder=\"custom1 custom2\"></input>\n<div>\n<a class=\"btn btn-plast ok\">Ok</a>\n<a class=\"btn btn-danger cancel\">Cancel</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/RightMenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"rightMenu\">\r\n</div>\r\n<div id=\"rightColorPicker\" style=\"display: none;\">\r\n	<input id=\"menuColorPicker\" style=\"display: none;\">\r\n</div>\r\n<div class=\"lineSpacing\" style=\"display: none;\">\r\n	<ul class=\"rightmenu\">\r\n		<li><a>1.0</a></li>\r\n		<li><a>1.5</a></li>\r\n		<li><a>2.0</a></li>\r\n		<li><a>normal</a></li>\r\n	</ul>\r\n</div>\r\n<div class=\"adjustOpacity\" style=\"display: none;\">\r\n	<p>\r\n		<label for=\"amount\">透明度:</label>\r\n		<input type=\"text\" id=\"amount\" style=\"border:0; color:#f6931f; font-weight:bold;\">\r\n	</p> \r\n	<div id=\"slider-range-min\"></div>\r\n</div>";
  });

this["JST"]["tantaman.web.widgets/SearchBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<div class=\"errors alert-error\"></div>\r\n	<form class=\"form-inline\">\r\n		<label>搜索网络歌曲：&nbsp;</label><input type=\"text\" />\r\n	</form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/SearchList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<li style=\"list-style-type:none; height: 30px;\">\r\n			<input name=\"lmusic\" type=\"radio\" value=\"\" />\r\n			"
    + "\r\n			";
  if (stack1 = helpers.song) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.song; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " —— ";
  if (stack1 = helpers.singer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.singer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n			<span class=\"pull-right\" style=\"margin-right: 50px;\">\r\n				<i class=\"icon-play icon-black\" data-id=\"";
  if (stack1 = helpers.song_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.song_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>&nbsp;&nbsp;&nbsp;&nbsp;\r\n				<i class=\"icon-download icon-black\" data-id=\"";
  if (stack1 = helpers.song_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.song_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>\r\n			</span>\r\n		</li>\r\n	";
  return buffer;
  }

  buffer += "<ul>\r\n	";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</ul>\r\n<audio src=\"\" autoplay=\"autoplay\">you browser not support</audio>\r\n\r\n";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/TabbedModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li class=\"providerTab\" data-provider=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><a>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<ul class=\"nav nav-tabs\">\n		";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</ul>\n	<div class=\"tabContent\">\n	</div>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/VideoControl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"caption\">This is HTML5 video with custom controls</div>\r\n<div class=\"control\">\r\n	<div class=\"topControl\">\r\n		<div class=\"videoProgress\">\r\n			<span class=\"bufferBar\"></span>\r\n			<span class=\"timeBar\"></span>\r\n		</div>\r\n		<div class=\"time\">\r\n			<span class=\"current\"></span> / \r\n			<span class=\"duration\"></span> \r\n		</div>\r\n	</div>\r\n	\r\n	<div class=\"btmControl\">\r\n		<div class=\"btnPlay btn\" title=\"Play/Pause video\"></div>\r\n		<div class=\"btnStop btn\" title=\"Stop video\"></div>\r\n		<div class=\"spdText btn\">Speed: </div>\r\n		<div class=\"btnx1 btn text selected\" title=\"Normal speed\">x1</div>\r\n		<div class=\"btnx3 btn text\" title=\"Fast forward x3\">x3</div>\r\n		<div class=\"btnFS btn\" title=\"Switch to full screen\"></div>\r\n		<div class=\"volume\" title=\"Set volume\">\r\n			<span class=\"volumeBar\"></span>\r\n		</div>\r\n		<div class=\"sound sound2 btn\" title=\"Mute/Unmute sound\"></div>\r\n	</div>\r\n	\r\n</div>\r\n<div class=\"loading\"></div>";
  });

this["JST"]["tantaman.web.widgets/Youku"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\r\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\r\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n</div>\r\n<div class=\"modal-body\" style=\"overflow: hidden\">\r\n	<div class=\"errors alert-error\"></div>\r\n	<form class=\"form-inline\">\r\n		<label>搜索网络歌曲：&nbsp;</label><input type=\"text\" />\r\n	</form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\r\n</div>";
  return buffer;
  });

return this["JST"];

});