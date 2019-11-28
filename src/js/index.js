

define(['jquery' , '../server/main' , './modules/head' , './modules/banner' , './modules/goods'],function($ , { getBannerData , getGoodsData , isLogin } , { headInit } , { bannerInit } , { goodsInit }){


    //首页Banner操作
    getBannerData().then(function(res){
        bannerInit(res);
    });

    getGoodsData('goods').then(function(res){
        goodsInit('goods' , res);
    });


    getGoodsData('listen').then(function(res){
        goodsInit('listen' , res);
    });


    getGoodsData('phone').then(function(res){
        goodsInit('phone' , res);
    });
    getGoodsData('phone_big').then(function(res){
        goodsInit('phone_big' , res);
    });
    getGoodsData('head').then(function(res){
        headInit('head' , res);
    });

    //是否登录

    // isLogin().then(function(res){
    //     console.log( res );
    // });

});