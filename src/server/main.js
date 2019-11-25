

define(['jquery'] , function($){

    function getBannerData(){
        return $.ajax('../mock/banner.json')
    }
    return{
        getBannerData
    }

})