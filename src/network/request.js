import axios from 'axios'

export function request(config){
    const instance = axios.create({//axios创建实例
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 3000
    });

    axios.interceptors.request.use(config =>{//客户端请求拦截
        return config;
    }, err => {
        console.log(err);
    });

    axios.interceptors.response.use(res => {//服务器响应拦截
        return res.data
    }, err => {
        console.log(err)
    });

    return instance(config)

}

export function request2(config){
    const instance2 = axios.create({
        baseURL: '/test',
        timeout: 3000
    })

    axios.interceptors.request.use(config =>{//客户端请求拦截
        console.log(config);
        return config;
    }, err => {
        console.log(err);
    });

    axios.interceptors.response.use(res => {//服务器响应拦截
        return res.data
    }, err => {
        console.log(err)
    });

    return instance2(config)

}
export function request3(config){
    const instance3 = axios.create({//axios创建实例
        baseURL: '/clothes',
        timeout: 9000
    });

    axios.interceptors.request.use(config =>{//客户端请求拦截
        return config;
    }, err => {
        console.log(err);
    });

    axios.interceptors.response.use(res => {//服务器响应拦截
        return res.data
    }, err => {
        console.log(err)
    });

    return instance3(config)

}
export function request4(config){
    const instance = axios.create({//axios创建实例
        baseURL: '/it',
        timeout: 3000
    });

    axios.interceptors.request.use(config =>{//客户端请求拦截
        return config;
    }, err => {
        console.log(err);
    });

    axios.interceptors.response.use(res => {//服务器响应拦截
        return res.data
    }, err => {
        console.log(err)
    });

    return instance(config)

}

export function requestLocal(config){
    const instance = axios.create({
        baseURL: '/local'
    });

    return instance(config)
}