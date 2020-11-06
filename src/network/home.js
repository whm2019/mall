import {request, request2, request3, request4, requestLocal} from './request'

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