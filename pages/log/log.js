//引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new IndexModel()   //实例化
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hint:'',   /*提示 */
    username:'',  /*用户名 */
    tel:'',     /*手机号*/
    password:''    /*密码*/   
  },
  /*用户名 */
  usernames: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  /*手机号  */
  tels: function (e) {
    this.setData({
      tel: e.detail.value
    })
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.tel.length == 0) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'success',
        duration: 1500
      })
    }else if (!myreg.test(this.data.tel)) {
      wx.showToast({
        title: '手机格式有误',
        icon: 'success',
        duration: 1500
      })
    }else{
      wx.showToast({
        title: '手机号正确',
        icon: 'success',
        duration: 1500
      })
    }
  },
  /*密码 */
  passwords: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  /*提交 */       
  sub: function (e) {
    index.request({
      url: 'api/login',
      method: 'POST',
      data: { username: this.data.username, tel: this.data.tel, password: this.data.password },
      success: (res) => {
        console.log(res)
        if (res.status === 200) {
          wx.showToast({
            title: res.message,
            icon: 'success',
            duration: 1500
          })
          wx.navigateTo({
            url: '../index/index',
          })
        } else if (res.status === 201) {
          wx.showToast({
            title: res.message, 
            icon: 'success',
            duration: 1500
          })
        } else if (res.status === 202) {
          wx.showToast({
            title: res.message,
            icon: 'success',
            duration: 1500
          })
        }
        else if (res.status === 204) {
          wx.showToast({
            title: res.message,
            icon: 'success',
            duration: 1500
          })
        }else if (res.status === 300) {
          wx.showToast({
            title: res.message,
            icon: 'success',
            duration: 1500
          })
        }
      }
    })
    // let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    // if (this.data.tel == '') {
    //   wx.showToast({
    //     title: '请输入手机号',
    //     icon: 'success',
    //     duration: 1500
    //   })
    // } else if (this.data.tel == 11) {
    //   wx.showToast({
    //     title: '手机号格式只能正确!',
    //     icon: 'success',
    //     duration: 1500
    //   })
    // } else if (!myreg.test(this.data.tel)) {
    //   wx.showToast({
    //     title: '手机号格式错误  !',
    //     icon: 'success',
    //     duration: 1500
    //   })
    // }else if(myreg.test(this.data.tel)){
      
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})