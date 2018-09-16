$(function(){
//注册
//    1.给注册按钮天剑点击事件
//2.获取到用户注册的信息
//3.对用户输入的信息做验证
//4.调用注册接口 实现注册功能
//5.给出提示 告诉用户是否注册成功
//6.跳转到登录页面
 $('#register-btn').on('tap',function(){
     var username =$('[name="username"]').val();
     var mobile =$('[name="mobile"]').val();
     var password =$('[name="password"]').val();
     var againPass =$('[name="againPass"]').val();
     var vCode =$('[name="vCode"]').val();

     if(!username){
         alert("请输入用户名");
         return;
     }
     if(mobile.length<11){
         alert("请输入正确的手机号码");
         return;
     }
     if(againPass!==password){
         alert("两次输入的密码不一样");
         return;
     }
     $.ajax({
         url:'/user/register',
         type:'post',
         data:{
             username:username,
             password:password,
             mobile:mobile,
             vCode:vCode
         },
         success:function(res){
             alert("注册成功");
             setTimeout(function(){
                 location.href="login.html"
             },2000)
         }
     })

 });
     //获取验证码
     //1.给获取验证码添加点击事件
     //2.调用接口获取验证码
     //3.将验证码输出到控制台

     $('#getCode').on('click',function(){
         $.ajax({
             url:'/user/vCode',
             type:'get',
             success:function(res){
                 console.log(res);
             }

         })
     })









});

