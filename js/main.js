/*
* @Author: Andersen
* @Date:   2016-03-13 16:10:25
* @Last Modified by:   Andersen
* @Last Modified time: 2016-04-15 13:31:01
*/
$('.load > p').html("正在加载");
// 页面加载完成
window.onload = function() {
	// 移除非法广告
	$('script,iframe,object').remove();
};
$(document).ready(function() {
// jquery开始
        // 初始
        if (!$.support.leadingWhitespace) {
        	$('.load > i').removeClass('notched circle');
        	$('.load > i').removeClass('loading');
        	$('.load > i').addClass('thumbs outline down');
        	$('.load > i').html("<h1>Loser</h1>");
        	$('.load > h2').html("使用老旧IE浏览器的咸鱼没有浏览高端网页的资格<h5>IE 6-8 这些天诛地灭的古老版本不被支持，你可以升级到IE9以上,或者使用：Firefox，opera，safari和带有webkit内核的国产浏览器</h5>");
        	$('.main').remove();
        }else{
        	$('.load > h2').html("加载完成");
        	$('.load').fadeOut(400,function() {
        		$('.load').remove();
        		$('.main').fadeIn(300);
        	});
        };
        // 载入动画
        	setTimeout(function () {
        		ks(true);
        	}, 1400);
        mainBodySize(false);
        // //窗口变更自适应
        $(window).resize(function(){
            mainBodySize(a);
        });
// 菜单按钮点击事件
	var a = false;
$('.nav > .menu-btn').click(function() {
	$('.nav > .menu-btn > .btn').toggleClass('active');
	$('.nav').toggleClass('active');
	$('.logo').toggleClass('active');
	if (a == true) {
		a = false;
	} else {
		a = true;
	};
	mainBodySize(a);
});
// 菜单工具提示
$('.menu-list > .btn')
  .popup({
    inline   : false,
    hoverable: true,
    position : 'right center',
    variation:'inverted',
    transition:'horizontal flip',
    delay: {
      show: 100,
      hide: 200
    }
	});
//主体部分尺寸控制
    function mainBodySize (wind) {
        var mainBody = $('.main-body');
        if (wind == true) {
        	mainBody.width($('.main').width()-50);
        	mainBody.removeClass('active');
        	$('.nav-bg').removeClass('active');
        } else {
        	mainBody.width($('.main').width()-200);
        	mainBody.addClass('active');
        	$('.nav-bg').addClass('active');
        };
    };
// 滚动监听
	$(window).scroll(function() {
		var winPos = $(window).scrollTop();
		var pos1 = $('#box1').offset().top;
		var pos1x = $('#box1x').offset().top;
		var pos2 = $('#box2').offset().top;
		var pos3 = $('#box3').offset().top;
		var pos4 = $('#box4').offset().top;
		if (winPos <= pos1) {
			$('.nav').addClass('nav-blur');
			//载入动画
			setTimeout(function () {
				ks(true);
			}, 1400);
		}else{
			$('.nav').removeClass('nav-blur');
			ks(false);
		};
		if (winPos <= pos1) {
			$('.menu-list > .btn').removeClass('active');
			$('#menu1').addClass('active');
		};
		if (winPos >= pos2 && winPos <= pos3) {
			$('.menu-list > .btn').removeClass('active');
			$('#menu2').addClass('active');
		};
		if (winPos >= pos3-10 && winPos <= pos4-10) {
			$('.menu-list > .btn').removeClass('active');
			$('#menu3').addClass('active');
		};
		if (winPos >= pos4-10) {
			$('.menu-list > .btn').removeClass('active');
			$('#menu4').addClass('active');
		};
	});
	$('.menu-list > .btn').click(function() {
		var menu = $(this).data('box');
			if (menu != "") {
				$('html,body').animate({scrollTop:$(menu).offset().top}, 400);
			};
	});
	// msgbox
	function msgBox(id,toggle) {
		$(id)
		.modal('setting', 'closable', false)
	  .modal({
	  	onHide:function() {
				$('.main').removeClass('blur');
	  	}
	  })
		.modal(toggle);
		$('.main').addClass('blur');
	};
	// download
	$('#dlBtn').click(function() {
		msgBox('#dlBox','show');
	});
	// 开始按钮
	$('.down-btn').click(function() {
		$('html,body').animate({scrollTop:$('#box2').offset().top}, 800);
	});
	// 卡片Hover事件
	$('.img-box .card .image').dimmer({
	  on: 'hover'
	});
	// 卡片翻页
	$('.img-btn-1').click(function() {
		var a;
		var i = 1;
		var t3 = window.setInterval(function(){
				a='#box2 .shape'+i;
				$(a).shape('flip over','.side2');
				i++;
				if (i>3) {
					window.clearInterval(t3);
				};
			}, 240);
	});
	// 卡片详情
	$('#box2 .shape .button').click(function() {
		var title  = $(this).data('title');
		$('#works-show img').attr('src', $(this).data('imgsrc'));
		$('#works-show .header h4').html(title);
		// 弹出框
		setTimeout(function () {
			$('#works-show')
		  .modal({
		  	onHide:function() {
					$('.main').removeClass('blur');
		  	}
		  })
		  .modal('show');
			$('.main').addClass('blur');
		}, 10);
		// 等待图片加载完成
		// $('#works-show img').load(function() {
		// 	alert('wanc');
		// });
	});
// jquery结束
});
	// 首页动画开始
	function ks(e){
		var t1;
		var t2;
		if (e == true) {
			// 载入动画
			$('.text-border-t').addClass('active');
			$('.text-border-b').addClass('active');
			$('.text-hader').addClass('text-in1');
			setTimeout(function () {
				$('.text-border-l').addClass('active');
				$('.text-border-r').addClass('active');
				$('.text-hader').addClass('text-in2');
			}, 1400);
			// 副标题
			setTimeout(function () {
				$('.text-box > h3').addClass('text-in1');
					setTimeout(function () {
						$('.text-box > h3').addClass('text-in2');
						var i = 0;
						var z = 4;//循环数量控制
						var x = 1;
						t2 = window.setInterval(function(){
								i = i+1;
								var c1 = '.down-' + i;
								// var c2;
								// if (i==1) {
								// 	c2 = '.down-' + z;
								// } else {
								// 	c2 = '.down-' + (i-1);
								// }
								if (x!=1) {
									$(c1).removeClass('active');
								} else {
									$(c1).addClass('active');
								};
								// $(c2).toggleClass('active');
								if (i == z) {
									i=0;
									x=~x;
								};
						}, 400);
						setTimeout(function (){
							$('.down-btn').addClass('active');
						}, 1600);
					},800);
			}, 2400);
			// 一闪而过的白色高光
			setTimeout(function () {
				t1 = window.setInterval(function() {
					$('.text-hader em').animate({
						left: 1300
						},1600, function() {
						$('.text-hader em').css('left', '-800px');
					});
				},1800);
			}, 1400);
		} else {
			// 清除动画
			$('.text-border-t').removeClass('active');
			$('.text-border-b').removeClass('active');
			$('.text-hader').removeClass('text-in1');
			$('.text-border-l').removeClass('active');
			$('.text-border-r').removeClass('active');
			$('.text-hader').removeClass('text-in2');
			$('.text-box > h3').removeClass('text-in1');
			$('.text-box > h3').removeClass('text-in2');
			$('.down-btn').removeClass('active');
			$('.text-box li i').removeClass('active');
			window.clearInterval(t1);
			window.clearInterval(t2);
		}
	};
	// $.fn.extend({
	// 	imgLoad:function (callback) {
	// 			      var timer = setInterval(function() {
	// 			          if ($(this).complete) {
	// 			              callback($(this))
	// 			              clearInterval(timer)
	// 			          }
	// 			      }, 50)
 //  					};
	// });

