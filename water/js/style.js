/**
 * Created by Administrator on 2017/5/15.
 */
/*right*/
$(".g_btnone").click(function () {
    $(".g_content").fadeToggle();

})

$(".contentlast").click(function () {
    $(".g_content").fadeOut();
    /* css("display","none"*/
})
/*  角色管理 */
$(".systemtotal").click(function () {
    $(".system").slideToggle();
})
$(".organizetotal").click(function () {
    $(".organize").slideToggle();
})


