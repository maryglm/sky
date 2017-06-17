/**
 * Created by maryguo on 2017/6/2.
 */
$(function () {
    window.onload=ajaxLoad("home.html","myCnt");//默认页面
/*   $(".content li").click(function () {//菜单栏点击后效果
       $(this).children("a").addClass("leftactive");
       if($(this).siblings("li").children("a").hasClass("leftactive")){

          $(this).siblings("li").children("a").removeClass("leftactive");
           $(this).parent().parent().siblings().children().children().children("a").removeClass("leftactive");
       }
   })*/

})
$(".item2").on("click",function () {//点击左侧菜单刷新右侧内容

    ajaxLoad('right.html','myCnt');
})

/*加载右侧内容*/
function ajaxLoad(myUl,myId) {
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            document.getElementById(myId).innerHTML=xmlhttp.responseText;
            if(myId=="myPopup"){
                document.getElementById("myPopup").style.display="block";
            }
        }
    }
    xmlhttp.open("GET",myUl,true);
    xmlhttp.send();
}
function myClose() {
    document.getElementById("myPopup").style.display="none";
}