var resultArr = ['海洋温泉门票','谢谢参与','海景房','星悦假期套票','星赏假期套票','林志颖签名书','海泉湾公仔','谢谢参与','梦幻剧场门票','神秘岛门票','谢谢参与','明星海报'];
var prizeBol = false;
$('.button').on('touchstart',function(){
	if(prizeBol){return}
	var  prizeNum = randFn(36,47);
	$('.carwrap').css({'transform':'rotate('+prizeNum*30+'deg)'})
	prizeBol = true;
    setTimeout(function() {
		$('.part13').show();
		if(prizeNum==37||prizeNum==43||prizeNum==46){$('.part16').show();$('.part13').hide();
		}else{
//				$('.part13_p2').html('恭喜获得：'+resultArr[prizeNum-36]);
				$('.part13_img').attr('src','img/part13/zp'+(prizeNum-36)+'.png');			
		}
	},3000)
	$('.write').on('touchstart',function(){
		$('.part13').hide();
			$('.part14').show();	
			$('.part14_p3').on('touchstart',function(){
				$('.part14').hide();
				$('.part15').show();
			})	
	})
	
})
function randFn(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}