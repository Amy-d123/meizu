

define(['jquery'] , function($){

    $banner_imgs=$('#banner').find('.banner_imgs')
    $banner_dots=$('#banner').find('.banner_dots')

    function bannerInit(data){
        // bannerInit()
        // console.log(data)
        let banner_list = data.banner_list;
        let tmp = ` 
            ${
                banner_list.map((v,i)=>{
                    if(i==0){
                        return `
                        <li class="active"><a href="${v.imgLink}"><img src="${v.imgUrl}"></a></li>
                        `;
                    }else{
                        return `
                            <li><a href="${v.imgLink}"><img src="${v.imgUrl}"></a></li>
                        `
                    }
                }).join('')
            }
        `;
        $banner_imgs.html(tmp)
    }
    return{
        bannerInit
    }
})