define(['jquery'], function ($) {

    function goodsInit(type, data) {
        // console.log(type, data);
        var $parent = $(`.${type}`);


        if (type == "phone" || type == "listen") {
            // console.log(type , data)
            var tmp2 = `
            ${
                data.goods_list.map((v,i)=>{
                    return `
                    <li>
                        <a href="./detail.html?type=${type}&id=${v.goodsId}" target="_blank">
                            <img src="${v.goodsImg}" alt="">
                            <div>
                                <h2>${v.goodsName}</h2>
                                <p>${v.goodsDescribe}</p>
                                <span>¥${v.goodsPrice}</span>
                            </div>
                        </a>
                    </li>
                            `
                }).join('').repeat(2)
            }
            `;

            $parent.html(tmp2)
        } else if (type == "goods") {
            // var $parent = $(".goods");

            var tmp = `
                    ${
                        data.goods_list.map((v,i)=>{
                            return `
                                    <li>
                                        <a href="./detail.html?type=${type}&id=${v.goodsId}" target="_blank">
                                            <div>
                                                <img src="${v.goodsImg}" alt="">
                                                <h3>${v.goodsName}</h3>
                                                <p>${v.goodsDescribe}</p>
                                            </div>
                                        </a>
                                    </li>`;
                        }).join('')
                    }
            `;
            $parent.html(tmp);
        }else if(type == "phone_big"){
            var tmp3 = `
            ${
                data.goods_list.map((v,i)=>{
                    return `
                    <li>
                        <a href="./detail.html?type=${type}&id=${v.goodsId}" target="_blank">
                            <div>
                                <h2>${v.goodsName}</h2>
                                <p>${v.goodsDescribe}</p>
                                <span>¥${v.goodsPrice}</span>
                                <img src="${v.goodsImg}" alt="">
                            </div>
                        </a>
                    </li>
                            `
                }).join('')
            }
            `;
            $parent.html(tmp3);

        }
    }
    return {
        goodsInit
    }

});