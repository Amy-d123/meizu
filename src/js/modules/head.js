

define(['jquery'] , function($){
    $head_nav = $('.head_nav')
    // $head_nav_li = $head_nav.find('li')
    // console.log($head_nav_li)
    $meizu_header_sub_warp = $('.meizu-header-sub-warp')
    $meizu_header_sub = $('.meizu-header-sub')
    $meizu_head_sub = $(".meizu_head_sub")
    $head_logo = $('.head_logo')
    $head = $('#head')
    function headInit(type , data){
        // console.log(type)
        // if(type=="head"){
            
        // }else if(type=="head2"){
        //     type=="listen"
        // }
            let tmp4 = `
            ${
                data.goods_list.map((v,i)=>{
                    return `
                        <li>
                            <a href="./detail.html?type=${type}&id=${v.goodsId}" target="_blank">
                                <img src="${v.goodsImg}" alt="">
                                ${v.goodsName}
                                <p>${v.goodsPrice}</p>
                            </a>
                        </li>
                    `;
                }).join('')
            }
        `
        $meizu_head_sub.html(tmp4)
        
        headBind()

    }
    function headBind(){
        $head_nav.on('mouseover' , 'li' , function(){
            $head_nav.find('li').css('color' , '#515151')
            $(this).css({
                color : '#00b9f2'
            });
            $head_logo.attr('src' , '../../static/logo_hover.png')
            $head.css('background' , 'white')
            $meizu_header_sub_warp.css("background" , "white");
            $meizu_header_sub.attr('class' , "meizu-header-sub container meizu-header-sub-show")
            $meizu_header_sub.css('opacity' , '1')
        });
        $meizu_header_sub.on('mouseleave', function(){
            $(this).css({
                color : ''
            });
            $head.css('background' , '')
            $head_nav.find('li').css('color' , '')
            $meizu_header_sub_warp.css("background" , "");
            $meizu_header_sub.attr('class' , "meizu-header-sub container")
            $meizu_header_sub.css('opacity' , '')

        });

    }
    return {
        headInit
    }
    // $head_nav_li 
    // let tmp = `
    //     <div>
    //         <ul>
    //             <li>
    //                 <img src="" alt="">
    //                 <em></em>
    //                 <span></span>
    //             </li>
    //         </ul>
    //     </div>
    // `
})



// define(['jquery'],function($){

//     $banner_imgs = $('#banner').find('.banner_imgs');
//     $banner_dots = $('#banner').find('.banner_dots');

//     function bannerInit(data){
//         //console.log(data);
//         let banner_list = data.banner_list;
//         let tmp = `
//             ${
//                 banner_list.map((v,i)=>{
                    
//                    return `<li><a href="${v.imgLink}"><img src="${v.imgUrl}"></a></li>`;
                    
//                 }).join('')
//             }
//         `;
//         let tmp2 = `
//             ${
//                 banner_list.map((v,i)=>{
//                     if(i==0){
//                         return `<li></li>`;
//                     }
//                     else{
//                         return `<li class="active"></li>`;
//                     }
//                 }).join('')
//             }
//         `;
//         $banner_imgs.html(tmp);
//         $banner_dots.html(tmp2);
//         bannerBind();
//     }

//     function bannerBind(){
//         $banner_dots.on('mousedown','li',function(){
//             $(this).attr('class','').siblings().attr('class','active');
//             $banner_imgs.find('li').eq( $(this).index() ).fadeIn().siblings().fadeOut();
//         });
//     }

//     return {
//         bannerInit
//     }

// });