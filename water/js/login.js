/**
 * Created by Administrator on 2017/6/7.
 */
$(".mylogin").on("click",function () {
    login();
})
$(".mylogin").on("keydown",function () {
    if(event.keyCode == 13){
        login();
    }
})
$("#uName").blur(function () {
    myname();
})
$("#uPass").blur(function () {
    mypass();
})
function login() {
    if(!myname()){
        return false;
    }else if (!mypass()) {
        return false;
    }
    $.ajax({
        url:'<%=path%>/sysuserLogin',
        type:'post',
        dataType:'text',
        data : $('#myForm').serialize() ,
        /* data:{name:$('#username').val(),
         pass:$('#password').val(),
         status:statu}, */
        success:function(data){
            if(data == 'failed'){
                alert("账号或密码错误请重新输入");
                $("#password").val("").focus(); // 清空并获得焦点
            }else if(data == 'success'){
                //alert('success')
                window.location.href = "<%=path%>/main.jsp";
            }
        },
        error:function(){
            alert('数据连接失败');
        }
    });
    return true;
}


/*用户名验证*/
function myname(){
    var uName = $("#uName").val();
    if (uName == "" || uName == null) {
        $("#nametip").html("&#10008用户名不能为空");
        $("#nametip").css({"color":"#fff","display":"block","top":"10px","left":"300px"});
        return false;
    }
    $("#nametip").css("display","none");
    return true;
}
/*密码验证*/
function mypass(){
    var uPass = $("#uPass").val();
    if (uPass == "" || uPass == null) {

        $("#passtip").html("&#10008密码不能为空");
        $("#passtip").css({"color":"#fff","display":"block","top":"90px","left":"300px"});
        return false;
    }
    $("#passtip").css("display","none");
    return true;
}
