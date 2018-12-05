//引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new IndexModel()   //实例化
Page({
  /**
   * 页面的初始数据
   */
  data: {
    messlist:[],
    val:'',
    inputShowed: false,
    inputVal: ""
  },
  put:function(e){
    this.setData({
      val: e.detail.value
    })
    wx.request({
      url: 'http://3w.houbowang.com/json/student.php?uu=' + this.data.val,
      success: (res) => {
        if(res.data == ''){
          wx.showToast({
            title: '没有此人',
          })
        }else if(res){
          this.setData({
            messlist: res.data
          })
        }
      }
    })
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