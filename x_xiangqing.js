$(function(){
document.cookie="commodityid=1";


		$("#x_color span").click(function() {
			$(this).css('borderColor', 'rgb(255,85,119)').siblings('span').css('borderColor', '#999');;
		});
		$("#x_size span").click(function() {
			$(this).css('borderColor', 'rgb(255,85,119)').siblings('span').css('borderColor', '#999');;
		});
		$(".x_smallimg").hover(function() {
			var i=$(this).index();
			$("#x_bigimg").children().get(0).src="../img/x_bigimg"+i+".jpg"
			$(this).css('borderColor', 'rgb(239,47,35)').siblings('.x_smallimg').css('borderColor', 'white');

		}, function() {
			
		});
    $.get("http://115.159.52.215:8080/mogu/servlet/CommodityInfoController",{method:"searchinfo",s_class:1},function (data) {

    	var num=eval(data);
    	//var str=num[21].s_color;
		/*alert(typeof num[21].s_color )
		var j=JSON.parse(num[21].s_color)
		console.log(num[21])
		alert(j)

		var s="[{ff:'1'},{fd:'1'},{fs:{c1:'45',c2:'65'}}]"
          var ls=eval(s)
		console.log(ls)*/


		var i=Math.round(Math.random()*20)





        $("#cutprice").text("￥"+num[i].s_price);
		$("#title").text(num[i].s_name);
		$("#x_count").children("span").text(num[i].s_stock)
       $("#x_color").children("span").eq(0).text(num[21].s_color.c2)
    })













})