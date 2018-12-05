//导入封装好的http.js
import { HTTP } from '../utils/http.js'

//通过extends继承父类（也可以实例化后调用） ES6用法
class IndexModel extends HTTP {
  getDataList(sCallBack) {
    //封装后的请求调用
    this.request({
      url:'',
      success: (res) => {
        sCallBack(res)
      }
    })
  }
}

//导出
export { IndexModel }