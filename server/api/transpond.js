var http = require('http');
var config = require('./config.json');
var xmlreader = require('xml2js').parseString;  

exports.bMusicInfo = function(req, resXM) {
	console.log(req.query.mId);
	
	var url = "http://ting.baidu.com/data/music/links?songIds=" + req.query.mId;
	http.get(url, function(res) {
		var info = ''
		res.on('data', function (chunk) {
			info += chunk
		}).on('end', function() {
			var data = JSON.parse(info);
//			console.log(data);
			resXM.send(data);
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
			resXM.send(e.message);
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
		resXM.send(e.message);
	});
};

exports.bMusic = function(req, resXM) {
	console.log(req.query.mName);
	
	var url = "http://mp3.baidu.com/dev/api/?tn=getinfo&ct=0&word="+ req.query.mName +"&ie=utf-8&format=json";
	http.get(url, function(res) {
		var info = ''
		res.on('data', function (chunk) {
			info += chunk
		}).on('end', function() {
			var data = JSON.parse(info);
//			console.log(data);
			resXM.send(data);
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
			resXM.send(e.message);
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
		resXM.send(e.message);
	});
	
	//http://box.zhangmen.baidu.com/x?op=12&count=1&title=$$$
//	var url = "http://box.zhangmen.baidu.com/x?op=12&count=1&title="+ req.query.mName +"$$$";
//	http.get(url, function(res) {
//		
////		console.log('STATUS: ' + res.statusCode);
////		console.log('HEADERS: ' + JSON.stringify(res.headers));
//		var info = ''
//		res.on('data', function (chunk) {
//			info += chunk
//		}).on('end', function() {
////			console.log('end:' + info);
//			xmlreader(info, function(err, data){
//				var result = [];
//			    if(err){
//			        console.log(err)  
//			        return;  
//			    }
//			    console.log(data.result.count);
//			    if(data.result.count > 0){
//				    console.log(data.result.url);
//				    for(uri in data.result.url){
//				    	var mInfo = data.result.url[uri];
//				    	var src0 = mInfo.encode[0];
////				    	console.log(src0.substring(0, src0.lastIndexOf('/') + 1) + mInfo.decode[0]);
//				    	result.push({src: src0.substring(0, src0.lastIndexOf('/') + 1) + mInfo.decode[0]});
//				    }
//			    }else{
//			    	console.log("not find");
//			    }
//			    resXM.send(result);
//			});
//		}).on('error', function(e) {
//			console.log("Got error: " + e.message);
//			resXM.send(e.message);
//		});
//	}).on('error', function(e) {
//		console.log("Got error: " + e.message);
//		resXM.send(e.message);
//	});
};

exports.lxUser = function(req, resXM) {
	var info = '';
	
	req.addListener('data', function(chunk){
		info += chunk;  
	}).addListener('end', function(){
	  	var data = JSON.parse(info);
	  	console.log(data);
	  	var url = "http://" + data.domain + "/index.php?option=com_lxedu&task=api.profileDisplay&format=json&id=" + data.lxid;
    	
	  	console.log(url);
    	http.get(url, function(res) {
    		var info = ''
			res.on('data', function (chunk) {
				info += chunk
			}).on('end', function() {
				console.log('end:' + info);
				resXM.send(info);
			}).on('error', function(e) {
				console.log("Got error: " + e.message);
				resXM.send(e.message);
			});
    	}).on('error', function(e) {
    		console.log("Got error: " + e.message);
    		resXM.send(e.message);
    	});
	});
}

exports.transpond = function(req, resXM) {
	var info = '';
	
	req.addListener('data', function(chunk){
	      info += chunk;  
	   }).addListener('end', function(){
	  	var data = JSON.parse(info);
	  	
	  	console.log(data.domain);
	  	if(config.CN_Domain.indexOf(data.domain) >= 0){
//	  		console.log(config.CN_Domain + " config.CN_Domain");
			var path = config.CN + '&id=' + data.deckId + '&filename=' + data.filename + '&picture=' + data.picture.replace(/\+/g,"%2B");
	    	
			var url = "http://" + data.domain + path;
	    	
	    	console.log(url);
	    	http.get(url, function(res) {
	    		console.log("Got response: " + res.statusCode);
	    	}).on('error', function(e) {
	    		console.log("Got error: " + e.message);
	    	});
	  	}else if(config.BN_Domain.indexOf(data.domain) >= 0){
//	  		console.log(config.BN_Domain + " config.BN_Domain");
	  		var post_data = JSON.stringify({
		  		"cid" : data.deckId,
//		  		"name": data.filename, //Chinese sent wrong
		  		"base64": data.picture.substring(data.picture.indexOf(',') + 1),
		  		"user" : "lxpt",
		  		"password": "milu2008"
		  	});
	  		console.log(post_data);
			var str_length = function(str) {
			    return str.replace(/[^\x00-\xff]/g, "aa").length;
			}; 
			console.log(post_data.length);
			console.log(str_length(post_data));
			
			var post_options = {
	    			  host: data.domain,
	    			  path: config.BN,
	    			  method: 'POST',
	    			  headers: {
//	    		          'Content-Type': 'application/x-www-form-urlencoded'
	    		          "content-Type": "application/json; charset=UTF-8",
//	    		          "Content-Length": post_data。length
	    		          "Content-Length": str_length(post_data)
//	    		          "Transfer-Encoding": "chunked"
	    		      }
	    		};
			
			var post_req = http.request(post_options, function(res) {
//				console.log('STATUS: ' + res.statusCode);
//				console.log('HEADERS: ' + JSON.stringify(res.headers));
//				res.setEncoding('utf8');
					var info = ''
					res.on('data', function (chunk) {
						info += chunk
					}).on('end', function() {
						console.log('end:' + info);
						resXM.send(info);
					}).on('error', function(e) {
						console.log("Got error: " + e.message);
					});
				});
//			 console.log(post_data);
			  // post the data
			post_req.write(post_data);
			post_req.end();
	  	};
	}).addListener('error', function(e) {
		console.log("Got error: " + e.message);
	});
};
