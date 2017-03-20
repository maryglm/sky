$(function(){
		// 登录栏开始:
		// $("#x_service").mouseenter(function() {
		// 	$(".u_nofr").show();	
		// });
		// 	$("#x_service").mouseleave(function() {
		// 		$(".u_nofr").mouseenter(function() {
		// 			console.log(22)
		// 			$(this).show();
		// 				clearTimeout(timer);
		// 		});
		// 			var timer=setTimeout(function(){$(".u_nofr").hide();},300)
		// 	});
		// 	$(".u_nofr").mouseleave(function() {
		// 		$(this).hide();
		// 	});
		
		// $("#x_myshop").mouseenter(function() {
		// 	$(".u_nofr1").show();	
		// });
		// 	$("#x_myshop").mouseleave(function() {
		// 		$(".u_nofr1").mouseenter(function() {
		// 			console.log(22)
		// 			$(this).show();
		// 				clearTimeout(timer);
		// 		});
		// 			var timer=setTimeout(function(){$(".u_nofr1").hide();},300)
		// 	});
		// 	$(".u_nofr1").mouseleave(function() {
		// 		$(this).hide();
		// 	});


// 幻灯片开始:
(function(){
	var timer;
	var i=5;
	function show(){
		i++;
		if(i==6){i=0;}
		if(i==5){
			$("#persent100").css('background','rgb(254,160,148)');
		}if (i==4) {
			$("#persent100").css('background','rgb(249,160,190)');
		}if (i==3) {
			$("#persent100").css('background','rgb(150,226,223)');
		}if (i==2) {
			$("#persent100").css('background','rgb(252,224,197)');
		}if (i==1) {
			$("#persent100").css('background','rgb(10,94,136)');
		}if (i==0) {
			$("#persent100").css('background','rgb(112,225,191)');
		}
		$("#x_huandengpian li").eq(i).css('background',"rgb(255,0,119)");
		$("#x_huandengpian li").eq(i).siblings().css('background','white');
		$("#x_huandengpian").children().eq(i).fadeIn(400);
		$("#x_huandengpian").children().eq(i).siblings().not("[id=x_child_li]").fadeOut(400);	
	}
	function showtime(){
		timer=setInterval(show,4000);
	}
	showtime();

	$(".x_child_h").hover(function() {
		clearTimeout(timer);
	}, function() {
		showtime();
	});
	$("#x_huandengpian li").hover(function() {
		
		clearTimeout(timer);
		i=$(this).index();
		if(i==5){
			$("#persent100").css('background','rgb(254,160,148)');
		}if (i==4) {
			$("#persent100").css('background','rgb(249,160,190)');
		}if (i==3) {
			$("#persent100").css('background','rgb(150,226,223)');
		}if (i==2) {
			$("#persent100").css('background','rgb(252,224,197)');
		}if (i==1) {
			$("#persent100").css('background','rgb(10,94,136)');
		}if (i==0) {
			$("#persent100").css('background','rgb(112,225,191)');
		}
		$(this).css('background',"rgb(255,0,119)");
		$(this).siblings().css('background','white');
		$("#x_huandengpian").children().eq(i).stop().fadeIn(400);
		$("#x_huandengpian").children().eq(i).siblings().not("[id=x_child_li]").stop().fadeOut(400);
	}, function() {
		showtime();
	});
})();

//幻灯片结束:


//菜单栏开始
(function(){
			var i;
			$("#x_menu_ul li").hover(function() {
				i=$(this).index();
				$(this).css('background', 'white').siblings().css('background', 'rgb(236,249,249)');;
			}, function() {
				$(this).css('background', 'rgb(236,249,249)');
			});
				$("#x_menu_ul").mouseover(function() {
					$("#x_child_menu").show();
					$(".x_child_menu_c div").eq(i).show().siblings().hide();
				});
				$("#x_menu_ul").mouseout(function() {
					$("#x_child_menu").mouseenter(function() {
						$(".x_child_menu_c div").eq(i).show().siblings().hide();
					});
					$("#x_child_menu").mouseleave(function() {
						$(this).hide();
					});
				});
              })()



//菜单栏结束

























// 幻灯片结束:
	//收索开始
	$("#searchinfobtn").click(function () {

        var sclass=	$("#x_logo_inputlpf").val();

        document.cookie="searchinfo="+sclass;
        location.href="search.html";

    })

	//收索结束





































































































































})