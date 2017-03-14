//    踏板宽高位置自适应
function adp() {
    sW = canvas.width/100;
    sH = canvas.height/100;
    $("#left").css({"top":sH*75,"left":sW*20});
    $("#right").css({"top":sH*75,"left":sW*57});
    $("#myCar").css({"top":sH*55,"left":sW*40});
    $("#text").css({"top":sH*5.5,"left":sW*18,"font-size":28*imgScale+"px"});
    $("#speed").css({"top":sH*75,"left":sW*82});
    $(".line").css({"top":sH*48,"left":sW*9});$(".ready").css({"top":sH*40});
//  $("#left img").css({"width":sW*20});
//  $("#right img").css({"width":sW*20});
    $("#myCar img").css({"width":sW*15});
    $("#timer img").css({"width":sW*40});
    $("#speed img").css({"width":sW*15});
}

//    碰撞检测
function crashTest(obj1,obj2){	
	var l1 = obj1.x;
	var r1 = obj1.x+obj1.w;
	var t1 = obj1.y; 
	var b1 = obj1.y+obj1.h;
	var l2 = obj2.offset().left;
	var r2 = obj2.offset().left + obj2.width();
	var t2 = obj2.offset().top; 
	var b2 = obj2.offset().top + obj2.height();
	if (l1<r2&&r1>l2&&t1<b2&&b1>t2){return true;}else{return false;}
}

//    随机数
function rand(min,max) {
    return parseInt(Math.random()*(max-min+1)+min);
}

//    游戏结束
function gameOver() {
    gameoverBol = true;
    $(".line").removeClass("fadeOutDownBig").addClass("fadeInDownBig");
      if (score>=10) {
    		$(".invite").show();
    		}else{ $(".again").show()};
    $("#boss").hide();
    $("#myCanvas").hide();
    alert(openid,username,headimgurl);
    $.ajax({
        url:"http://liuchanglc.applinzi.com/0405/insert.php",
        data:{
            openid:openid,
            username:username,
            headimgurl:headimgurl,
            score:score
        },
        success:function (data){
        var arr = JSON.parse(data);
        for (var i=0; i<arr.length; i++){
            var divObj = document.createElement("div");
            divObj.innerHTML = "<img class='part07_img4' src='"+arr[i].headimgurl+"' /><span>"+arr[i].username+"</span><span>"+arr[i].score+"</span>";
           $('.part07_in').append(divObj);
        }
        }
    });      
}