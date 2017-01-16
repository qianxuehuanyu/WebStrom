window.onload=function(){
function changeScale(img,fatherEle){
	var newImg = new Image();
	newImg.src = img.src;
	// console.log(newImg);
	// newImg.width = 100;
//	 newImg.height = 100;
	
	console.log(newImg.src);
	console.log(img.src);
	console.log(newImg.width);
	var fatherWidth = parseInt(fatherEle.style.width);
	if(newImg.width!==fatherWidth){
		var scale = fatherWidth/newImg.width;
		newImg.width *= scale;
		newImg.height *= scale;
	}
	console.log(newImg);
	return newImg;
	
}

var fatherElement = document.getElementById("content");
var initialImage = document.createElement("img");
initialImage.src = "image/2.jpg";
console.log(initialImage);
fatherElement.appendChild(changeScale(initialImage,fatherElement));




}





/*
function scaleForWidth(img,superEle) {
        //newImg 调整新创建好的图片元素的尺寸
        var newImg = new Image();
        newImg.src = img.src;
       

        //得到父元素的宽
        var superEleWidth = parseFloat(superEle.style.width);

    //    判断图片和父元素 的宽 是不相同的
        if (superEleWidth != newImg.width){
            var scale = superEleWidth/newImg.width;
            newImg.width *= scale;
            newImg.height *= scale;
        }

        return newImg;
    }
var image = document.createElement("img");
    image.src = "image/2.jpg";
    console.log(image.width);
    var superEle = document.getElementById("content");
    superEle.appendChild(scaleForWidth(image,superEle));
*/