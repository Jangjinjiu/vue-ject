new Vue({
    el:"#vue-app",
    data:{
        name:"米斯特吴",
        job:"web开发",
        website:"http://www.thenewstep.com",
        websiteTag:"<a href='http://www.thenewstep.com'>Thenewstep</a>"
    },
    methods:{
        greet:function(time){
            // this.data.name
            return ' Good ' + time+ " " +this.name+"!";
        }
    }
});
/**
 * el:element  需要获取的元素，一定是html中的根容器元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data-binding:给属性绑定对应的值
 */