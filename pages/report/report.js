//引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new IndexModel()   //实例化
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportlist:[]
  },
  /*详情 */
  more:function (id) {
    let goodsId = id.currentTarget.dataset.goodsid
    wx.navigateTo({
      url: '../reportdetail/reportdetail?id=' + goodsId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    index.request({
      url: 'wenzhangapi',
      success: (res) => {
        this.setData({
          reportlist: res.list.data
        })
        // WxParse.wxParse('article', 'html', article, this, 5)
      }
    })
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