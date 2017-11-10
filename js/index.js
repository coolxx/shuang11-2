$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('.nav-show').click(function () {
		$('.nav img').animate({'top':0},300)
    })
	$('.nav img').click(function () {
		$(this).animate({'top':'-150px'},300)
    })
	//main1选项卡
	$('.m1-btn-box li').each(function (index) {
		$(this).click(function () {
			$('.m1-btn-box li').removeClass('act1').eq(index).addClass('act1');
			$('.m1-show-box').hide().eq(index).show()
        })
    })
    //main2选项卡
    $('.m2-btn-box li').each(function (index) {
        $(this).click(function () {
            $('.m2-btn-box li').removeClass('act2').eq(index).addClass('act2');
            $('.m2-show-box').hide().eq(index).show()
        })
    })
    //右侧
    $('.qr-right').click(function () {
        $('.qr-right-show').show()
    })
    $('.qr-right-show').click(function () {
        $(this).hide()
    })
})