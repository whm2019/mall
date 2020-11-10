import {request, request2, request3, request4, requestLocal, requestVideos, requestImg} from './request'

export function getHomeMutidata(){
    return request({
        url: '/home/mutidata'
    })
}

export function getHomeContent(){
    return request2({
        url: '/flashsale/getslideshow'
    })
}

export function getHomeClothes(){
    return request3({
        url: '/book/clothing'
    })
}

export function getHomeIt(){
    return request4({
        url: '/topic/5378720ed6e2d16149fa16bd'
    })
}

export function getHomeExp(){
    return requestLocal({
        url: '/examp2.json'
    })
}
export function getHomeShop(){
    return requestLocal({
        url: '/shopping.json'
    })
}

export function getHomeVideos(){
    return requestVideos({
        url: '/todayVideo'
    })
}

export function getImg(){
    return requestImg({
        url: '/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&word=%E5%A3%81%E7%BA%B8&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=0&latest=0&copyright=0&cs=1705581946,4177791147&os=3092380308,906356246&simid=4087421280,717844758&pn=0&rn=1&di=24310&ln=30&fr=&fmq=1567133149621_R&fm=&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined'
    })
}