/**
 * Created by Administrator on 2017/5/20.
 */
/*mydate*/
$(".mydate").css("font-size","12px");
function getDateWeek()
{
    todayDate = new Date();
    date = todayDate.getDate();
    month= todayDate.getMonth() +1;
    year= todayDate.getYear();
    var dateweek = "今天是:";
    if(navigator.appName == "Netscape")
    {
        dateweek = dateweek + (1900+year) + "年" + month + "月" + date + "日 ";
    }
    if(navigator.appVersion.indexOf("MSIE") != -1)
    {
        dateweek = dateweek + year + "年" + month + "月" + date + "日 ";
    }
    switch(todayDate.getDay())
    {
        case 0:dateweek += "星期日";break;
        case 1:dateweek += "星期一";break;
        case 2:dateweek += "星期二";break;
        case 3:dateweek += "星期三";break;
        case 4:dateweek += "星期四";break;
        case 5:dateweek += "星期五";break;
        case 6:dateweek += "星期六";break;
    }
    return dateweek;
}

$(".mydate").html(getDateWeek());

/*clock*/
var clock;


$(document).ready(function() {
    clock = $('.clock').FlipClock({
        clockFace: 'TwelveHourClock'
    });
});