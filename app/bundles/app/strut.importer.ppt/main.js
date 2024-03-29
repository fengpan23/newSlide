define(['tantaman/web/widgets/Message'],
function(Message) {
	'use strict';
	
	var message = new Message();
	
	var importer = {
		import: function(file, editorModel, next) {
			
			if (file.type === "application/vnd.ms-powerpoint") {
				var form = new FormData();
				var xhr = new XMLHttpRequest();
				
				form.append('file', file);
				xhr.open('POST', "ppt");
				
				xhr.setRequestHeader('Authorization', 'Client-ID ' + this.clientId);
				xhr.onreadystatechange = function() {
          		  	if (xhr.readyState === 4) {
          		  		console.log(xhr);
          		  		if(xhr.responseText){
          		  			editorModel.importPresentation(JSON.parse(xhr.responseText));
          		  		}else{
          		  			message.show({error: '文件转换失败 ! 请与管理员联系。'});
          		  		}
          		  	}else{
          		  		console.log('XMLHttp open error: ' + xhr.readyState);
          		  	}
				};
				xhr.send(form);
			} else {
				next();
			}
		}
	};

	return {
		initialize: function(registry) {
			registry.register({
				interfaces: 'strut.importer'
			}, importer);
		}
	};
});