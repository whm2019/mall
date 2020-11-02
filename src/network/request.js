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