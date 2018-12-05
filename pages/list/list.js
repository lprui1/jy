  //引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new  IndexModel()   //实例化
Page({
  /*详情*/
  details: function(e) {
    let goodsId = e.currentTarget.dataset.goodsid
    console.log(goodsId)
    wx.navigateTo({
      url: '../detail/detail?goodsId=' + goodsId,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    title:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    if(options.tiao == 'tongzhi') {
      index.request({
        url:'api/shows?key= c56d0e9a7ccec67b4ea131655038d604',
        success: (res) => {
          this.setData({
            list: res.list.list.data,
            title:'集团通知'
          })
        }
      })
    }else if (options.tiao == 'news') {
      index.request({
        url: 'xinwenapi',
        success: (res) => {
          this.setData({
            list: res.list.data,
            title: '集团新闻'
          })
        }
      })
    } else if (options.tiao == 'huodong') {
      index.request({
        url: 'api/select?key= c56d0e9a7ccec67b4ea131655038d604',
        success: (res) => {
          this.setData({
            list: res.list.list.data,
            title: '优惠活动'
          })
        }
      })
    } else if (options.tiao == 'zc'){
      index.request({
        url: 'zhengceapi',
        success: (res) => {
          this.setData({
            list: res.list.data,
            title: '政策制度'
          })
        }
      })
    }
    // if()
    // this.setData({
      // tiao:''
    // })
    /*集团通知 */
    // index.request({
    //   url: 'xinwenapi',
    //   success: (res) => {
    //     // console.log(res)
    //     this.setData({
    //       list: res.list.data,
    //       title:'集团通知'
    //     })
    //   }
    // })
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