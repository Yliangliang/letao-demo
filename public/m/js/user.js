var userInfo = null;
$.ajax({
    url:'/user/queryUserMessage',
   type:'get',
    async:false,
    success:function(res){
        console.log(res);
        if(res.error && res.error==400){
            location.href="login.html";
        }
        userInfo=res;
    }
});



$(function(){
    /**
     * �˳���¼
     * 1.��ȡ���˳���¼��ť����ӵ���¼�
     * 2.�����˳���¼�ӿ�ʵ�� �˳���¼
     * 3.����˳��ɹ� ��ת����ҳ
     */
   $('#logout').on('tap',function(){
       $.ajax({
           url:'/user/logout',
           type:'get',
           success:function(res){
               if(res.success){
                   mui.toast("�˳���¼�ɹ�");
                   setTimeout(function(){
                       location.href="index.html";
                   },2000)
               }
           }
       })
   });
    //��ȡ�û���Ϣ ����Ҫ�����û�Ϊ��¼������

    //ƴ��ģ��
    var html = template('userTpl',userInfo);
    //չʾ�û���Ϣ
    $('#userInfoBox').html(html);



});