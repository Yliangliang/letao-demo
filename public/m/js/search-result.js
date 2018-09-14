
var keyword =getParamsByUrl(location.href,'keyword');
//当前页面
var page =1;

var html = "";

$(function(){
//    根据用户输入的关键字获取搜索结果
//    1. 获取到地址栏中用户输入的搜索关键字
//    2.用关键字去调取搜索接口
//    3.将搜索的结果展示在页面中



    $.ajax({
        url:'/product/queryProduct',
        type:'get',
        data:{
            page:1,
            pageSize:6,
            proName:keyword
        },
        success:function(response){
            if(response.data.length>0){
                html =template('searchTpi',response);
                $('#search-box').html(html);

                //告诉上拉加载组件当前数据加载完毕
                This.endPullupToRefresh(false);
            }else{
                //告诉上拉加载组件当前数据加载完毕
                This.endPullupToRefresh(false);
            }

        }

    });

    mui.init({
        pullRefresh : {
            container: '#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up : {
                height:50,//可选.默认50.触发上拉加载拖动距离
                auto:true,//可选,默认false.自动上拉加载一次
                contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });


});
function getParamsByUrl(url, name){
    var params = url.substr(url.indexOf('?')+1);
    var param = params.split('&');
    for(var i = 0;i<param.length;i++){
        var current = param[i].split('=');
        if(current[0]==name){
            return current[1];
        }
    }
    return null;
}