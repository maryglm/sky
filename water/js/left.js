/*鼠标滑动一定距离的菜单效果*/
$(document).scroll(function() {
    var top=$(this).scrollTop();
    console.log(top);

    if(top>90) {
        $(".sidebar").css("top","0");
    }
    if(top<90) {
        $(".sidebar").css("top","90px");
    }
})

/*左侧导航下拉收缩效果*/
$(".title .item1").click(function(){
    $(this).next(".content").slideToggle();
    $(this).find("span").toggleClass("glyphicon glyphicon-chevron-down");
    $(this).find("span").toggleClass("glyphicon glyphicon-chevron-right");
})

/*返回上一页*/
$(".btnback").click(function () {
    window.history.back();
})


/*随机数的生成*/
var produce = function ()
{
    var array1 = "ABCDEFGHIJKMNPQRSTUVWXYZ".split ("");
    var array2 = "123456789".split ("");
    var str = "A";
    for ( var i = 0; i < 4; i++)
    {
        str += array2[Math.floor (Math.random () * array2.length)];
    }
    for ( var i = 0; i < 4; i++)
    {
        str += array1[Math.floor (Math.random () * array1.length)];
    }
    var reg = /^\d$/;
    var now = new Date;
    var m = now.getMonth () + 1;
    var d = now.getDate();
    m = reg.test(m) ? "0" + m : m;
    d = reg.test(d) ? "0" + d : d;
    str += now.getFullYear () + m + d;
    return str;
};
/* $(".myradom").click(function () {*/

$(".ordernum").html(produce ());
/*   })*/