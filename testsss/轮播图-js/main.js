/**
 * Created by liuyujing on 16/10/7.
 */
(function () {

    var imageDatas;
    var imageIndex = 0;
    var curImageView;
    var timer;

    /*
    * 创建图片视图
    * */
    function createCorouselImageView(imageUrl,linkUrl) {
        var backgroundImageView = document.createElement("div");
        backgroundImageView.className = "backgroundImageView";

        var eventView = document.createElement("a");
        eventView.href = linkUrl;
        backgroundImageView.appendChild(eventView);

        var imageView = document.createElement("img");
        imageView.src = imageUrl;
        eventView.appendChild(imageView);

        return backgroundImageView;
    }

    //轮播视图的数组
    function loadImageViews() {
        var imageViews = [];
        for (var i=0;i<imageDatas.length;i++){
            var info = imageDatas[i];
            imageViews.push(createCorouselImageView(info["imageUrl"],info["linkUrl"]));
        }

        return imageViews;
    }

    function initCorouselImageView() {

        imageIndex = 0;
        curImageView = loadImageViews()[imageIndex];
        var carouselContent = document.getElementById("carouselContent");
        carouselContent.appendChild(curImageView);

    }

    function next() {
        var contentView = document.getElementById("carouselContent");
        contentView.removeChild(document.getElementsByClassName("backgroundImageView")[0]);
        imageIndex++;
        imageIndex = imageIndex===imageDatas.length?0:imageIndex;
        curImageView = loadImageViews()[imageIndex];
        contentView.appendChild(curImageView);
    }

    function pre() {
        var contentView = document.getElementById("carouselContent");
        contentView.removeChild(document.getElementsByClassName("backgroundImageView")[0]);
        imageIndex--;
        imageIndex = imageIndex===-1?imageDatas.length-1:imageIndex;
        curImageView = loadImageViews()[imageIndex];
        contentView.appendChild(curImageView);

    }

    function restartTimer() {
        if (timer){
            clearInterval(timer);
        }
        timer = setInterval(function () {
            next();
        },3000);
    }

    function addListeners() {
        document.querySelector("#carousel .preButton").onclick = function () {
            pre();
        };
        document.querySelector("#carousel .nextButton").onclick = function () {
            next();
        }
    }

    function init() {
        imageDatas = [{imageUrl:"images/1.jpg",linkUrl:"http://baidu.com"},{imageUrl:"images/2.jpg",linkUrl:"http://baidu.com"},{imageUrl:"images/3.jpg",linkUrl:"http://baidu.com"},{imageUrl:"images/4.jpg",linkUrl:"http://baidu.com"},{imageUrl:"images/5.jpg"},{imageUrl:"images/6.jpg",linkUrl:"http://baidu.com"},{imageUrl:"images/7.jpg",linkUrl:"http://baidu.com"}];

        initCorouselImageView();
        addListeners();
        restartTimer();
    }

    init();

})();



/*
* 轮播图
* 界面：
*     1.图片内容
*     2.上一页 下一页切换的部分
*           定义一个表示是哪一个元素的标识
*
*     （3.页面指示的圆点）
*     （4.切换的效果）
*     （5.鼠标到轮播图中 停止定时器 鼠标移除的时候开启）
*     （6.点击轮播图 调到指定页面）
*
* 逻辑：
*     自动播放：
*           1.一排图片 依次显示在 轮播图的内容上 其他超出的部分隐藏
*           2.当到最后一个图片的时候  切换到第一张
*     按钮控制：
*           1.下一张 ++
*           2.上一张 --
*           （当到0或者最后一张的时候判断）
*
* */

