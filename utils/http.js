//导入config.js
import {config,func} from '../config/config.js'

//根据返回的状态码code值，给予对应的提示
const tips = {
  1:'抱歉，出错了',
  1005:'appKey无效',
  3000:'期刊不存在'
}

//ES6封装方法  class类型名封装
class HTTP {
  request(params) { //params是形参，是每个请求接口要传入的对象
    if(!params.method) {
      params.method = 'GET'   //如果没有在视图的js中传method那就默认为GET方法
    }
    wx.request({
      url: config.api_base_url + params.url,  //相同部分和每个不同接口的拼接
      method:params.method,   //请求方法
      data:params.data,   //请求参数
      header: {
        'content-type':'application/json',     //默认的类型
        'appkey':config.appKey  //config.js中其它相同的部分
      },
      success:(res) => {    //第一种返回的状态sucss
        let code = res.statusCode.toString()  //根据返回的code值来判断
        
        if(code.startsWith('2')){   //判断code值为2开头的参数接口才成功
          params.success(res.data)
        }else{  //否则返回其它的参数为错误
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      //fail
      fail: (err) => {  //第二种返回的状态fail，只有在断网或者没有请求成功的情况下出来
        this._show_error(1)
      }
    })
  }
  //报错处理  私有方法（根据情况而定，给页面的提示）
  _show_error(error_code) {
    if(!error_code) error_code = 1
    wx.showToast({
      title: tips[error_code],
      icon:'none',
      duration:2000
    })
  }
}




//导出
export {HTTP}