define(function() {
	return {
		cut: function(img, sx, sy, swidth, sheight, x, y, width, height) {
//			img	规定要使用的图像、画布或视频。
//			sx	可选。开始剪切的 x 坐标位置。
//			sy	可选。开始剪切的 y 坐标位置。
//			swidth	可选。被剪切图像的宽度。
//			sheight	可选。被剪切图像的高度。
//			x	在画布上放置图像的 x 坐标位置。
//			y	在画布上放置图像的 y 坐标位置。
//			width	可选。要使用的图像的宽度。（伸展或缩小图像）
//			height	可选。要使用的图像的高度。（伸展或缩小图像）
			var hScale = img.naturalHeight/img.height;
			var wScale = img.naturalWidth/img.width;
			
			var oCanvas = document.createElement("canvas");
			oCanvas.width = swidth * wScale;
			oCanvas.height = sheight * hScale;
			
			var ctx = oCanvas.getContext("2d");
			
//			var oImg = new Image();
//			oImg.src = src;
			ctx.drawImage(img, sx * wScale, sy * hScale, swidth * wScale, sheight * hScale, 0, 0, swidth * wScale, sheight * hScale);
			
			try {
				return oCanvas.toDataURL();
			} catch (e) {
				// TODO: handle exception
				return e.message; 
			}
		}
	};
});