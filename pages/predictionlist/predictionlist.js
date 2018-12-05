//引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new IndexModel()   //实例化
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prelist:[],
    prelists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    index.request({
      url: 'studentapi',
      success: (res) => {
        this.setData({
          prelist: res.list.data
        })
        this.data.prelist.map(item => {
          if(item.sex == 1) {
            item.sex = '男'
          }else if(item.sex == 2) {
            item.sex = '女'
          }
          if (item.education == 1) {
            item.education = '小学'
          } else if (item.education == 2) {
            item.education = '初中'
          } else if (item.education == 3) {
            item.education = '高中'
          } else if (item.education == 4) {
            item.education = '大学'
          } else if (item.education == 5) {
            item.education = '其他'
          }
        })
        this.setData({
          prelists: this.data.prelist
          // prelists: 
        })
        // this.data.prelists = this.data.prelist
        // console.log(this.data.prelists)
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