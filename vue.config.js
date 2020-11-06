module.exports={//每次修改config都要重新run serve
    configureWebpack:{
        resolve:{
            alias:{
                'common': '@/common',
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network'
            }
        }
    },
    devServer: {
      // open: true,//自动打开网页
      // port: 8080,
      proxy: {//设置代理解决跨域请求问题
        '/test': {//用/test来替代'https://a.huodong.mi.com'
          target: 'https://a.huodong.mi.com', // 请求地址
          // changeOrigin: true,//是否允许跨域，vuecli3默认为true，所以这里不需要再写
          pathRewrite: {
            '^/test': ''//但是实际上目标路径（'https://a.huodong.mi.com/flashsale/getslideshow'中并不包含/test，
                        //所以/test要重写为空。
                        //简言之就是，我用/test替代了目标服务器地址但是我不能作为请求路径的一部分
          }
        },
        '/clothes': {
          target: 'https://list.mogu.com',
          pathRewrite:{
            '^/clothes': ''
          }
        },
        '/it':{
          target: 'https://cnodejs.org',
          pathRewrite:{
            '^/it': ''
          }
        },
        '/local':{
          target: 'http://127.0.0.1',
          pathRewrite:{
            '^/local': ''
          }
        }
      }
    }
}