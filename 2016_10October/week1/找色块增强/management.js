/**
 * Created by Administrator on 2016/10/9 0009.
 */




(function(){
    //控制界面
    function controlView() {
        //创建控制视图的背景图
        var controlBackgroundView = document.createElement("div");
        controlBackgroundView.id = "controlBackgroundView";
        document.body.appendChild(controlBackgroundView);

        //显示等级的元素
        var levelTitle = document.createElement("h1");
        levelTitle.id = "levelTitle";
        levelTitle.textContent = "等级:"+level+"级";
        controlBackgroundView.appendChild(levelTitle);

        //    难度的按钮
        var degreeBackgroundView = document.createElement("ul");
        controlBackgroundView.appendChild(degreeBackgroundView);
        var degreeTitles = ["易","中","难"];
        for (var i=0;i<degreeTitles.length;i++){
            var item = document.createElement("li");
            item.textContent = degreeTitles[i];
            degreeBackgroundView.appendChild(item);
            //默认选择的难度
            if (i===degreeTitles.length-1){
                item.style.background = "#25aeff";
                preSelectedItem = item;
            }
            item.onclick = function () {
                if(isPlaying){
                    alert("正在游戏中不可调节难度！");
                    return;
                }
                //设置选择难度 不透明度的初始值
                switch (this.textContent){
                    case "难":
                        opacity = 1.0;
                        opacitySpace = 0.3;
                        break;
                    case "中":
                        opacity = 0.8;
                        opacitySpace = 0.5;
                        break;
                    case "易":
                        opacity = 0.8;
                        opacitySpace = 0.7;
                        break;
                    default:
                }

                //重新加载界面
                finish();

                preSelectedItem.style.background = "#ffffff";
                this.style.background = "#25aeff";
                preSelectedItem = this;
            }
        }

        //    步数
        var stepTitle = document.createElement("p");
        stepTitle.textContent = "步数:"+step+"步";
        stepTitle.id = "stepTitle";
        controlBackgroundView.appendChild(stepTitle);
    }
    window.controlView=controlView;

})();