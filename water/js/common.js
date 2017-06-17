/**
 * Created by Administrator on 2017/5/6.
 */
$(".nav_list").click(function () {

    $(this).parent().find(".menu").slideToggle();
})
$(".mymenu1").click(function () {

    $(this).find(".submenu1").slideToggle();
})
$(".mymenu2").click(function () {

    $(this).find(".submenu2").slideToggle();
})



$(".nav-justified li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
})

