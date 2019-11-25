define(['jquery'],function($){

    function goodsInit( type , data){
        //console.log( type , data );
        var $parent = $(`#${type}`);
        var tmp = `
            <h2>${data.title}</h2>
            <ul class="clearfix">
                ${
                    data.goods_list.map((v,i)=>{
                        return `
                                <li>
                                    <a href="./detail.html?type=${type}&id=${v.goodsId}" target="_blank">
                                        <div><img src="${v.goodsImg}" alt=""></div>
                                        <h3>${v.goodsName}</h3>
                                        <p>¥${v.goodsPrice}</p>
                                    </a>
                                </li>`;
                    }).join('').repeat(3)
                }
            </ul>
        `;
        $parent.html(tmp);
    }

    return {
        goodsInit
    }

});