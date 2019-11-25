
//发起所有ajax的底层工具，统一管理的页面、拿到banner的数据
define(['jquery' , '../server/main' , './modules/banner'] , function($, {getBannerData} , {bannerInit}) {

    // 首页banner操作
    getBannerData().then(function(res){
        // console.log(res)
        bannerInit(res)
    })


})