/* 
* @Author: Marte
* @Date:   2016-10-30 19:13:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-04-12 18:19:06
*/
var Goods={
    init:function(){
        this.getData();
    },
    dataLoad:function(data){
        if (!data) {return};
        console.log(data);
        var html="";
        for(var i=0;i<data.length;i++){
            html +='<div class="item">'+
                        '<p class="title">'+data[i].title+'</p>'+
                        '<p class="much">'+data[i].price+'</p>'+
                    '</div>';
        }
        $(".list").html(html);
    },
    getData:function(){
        var _this = this;
        $.ajax({
            url: 'index.json',
            type: 'POST',
            dataType: 'json',
            // data: {param1: 'value1'},//传给后端的数据
            success:function(json){
                console.log(json);
                if (json.result == 'success' && json.data) {
                    var data = json.data;
                    _this.dataLoad(data);
                };
            },
            error:function(json){

            },
        });

    }
};
Goods.init();
