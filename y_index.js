
//轮播图
// var timer;
// var i = 0;
// var is = false; //标志符

// $(function () {
//     showTimer();

//     //计时器函数
//     function showTimer() {
//         timer = setInterval(function () {
//             showAnimate();
//             if (!is) {
//                 i++;
//             } else {
//                 i--
//             }
//         }, 3000)
//     }

//     //动画函数
//     function showAnimate() {
//         // $("p").eq(i).addClass("a").siblings().removeClass("a");
//         $(".inSide").animate({
//             left: -i * 950 + "px"
//         }, 600, function () {
//             if (i == 2) {
//                 is = true;
//             }
//             if (i == 0) {
//                 is = false
//             }
//         });
//     }

// })
// 
$(function(){
            var timer;
            var i = 1;
            var is = false; //标志符
                showTimer();
                function showAnimate(){
                    $(".inSide").animate({
                        left: -i * 950 + "px"
                        },
                        500, function() {

                           i++
                           if(i==4){i=1;  $(".inSide").css('left', '0');}                                     
                    });
                }

                function showTimer(){
                timer = setInterval(function () {
                        showAnimate();

                },3000)}
                    $(".inSide").hover(function() {
                         clearInterval(timer);
                    }, function() {
                        showTimer();
                    });
                //幻灯片结束    
// 图片转动开始
            
            
            setInterval(function(){
                var random=Math.round(Math.random()*4);
                var random1=Math.round(Math.random()*4);
                    setTimeout(function(){$(".x_xz_img").eq(random).css('transform', 'rotateY(180deg)');},2000);
         setTimeout(function(){$(".y_second_bottom_left_div").eq(random).css('transform', 'rotateY(90deg)');},1500);
         setTimeout(function(){$(".y_second_bottom_left_div").eq(random).css('transform', 'rotateY(0deg)');},6000)
         setTimeout(function(){$(".x_xz_img").eq(random).css('transform', 'rotateY(90deg)');},5500)
            },8000)

         

         


 
 

// 图片转动结束







})