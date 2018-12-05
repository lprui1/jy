//引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new IndexModel()   //实例化
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',   /*姓名 */
    card:'',    /*身份证号*/
    tel:'',     /*手机号 */
    education:'', /*学历 */
    sex:'',     /*性别 */
    time:new Date(),
    zsls:'',    /*招生老师 */
    array: ['小学','初中', '高中', '大学', '其他'],
    arr: ['男', '女'],
    index: 0,     /*学历 */
    indexs: 0,    /*性别 */
    date: '',
    time: '12:01'
  },
  /**去查看预报名学生列表 */
  look:function(e) {
    wx.redirectTo({
      url: '../predictionlist/predictionlist',
    })
  },
  /**日期 */
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log(e)
    this.setData({
      index: Number(e.detail.value)+1
    })
    if (this.data.index == 1) {
      this.setData({
        education: '小学'
      })
    } else if (this.data.index == 2) {
      this.setData({
        education:'初中'
      })
    }else if (this.data.index == 3) {
      this.setData({
        education: '高中'
      })
    }else if (this.data.index == 4) {
      this.setData({
        education: '大专'
      })
    } else if (this.data.index == 5) {
      this.setData({
        education: '其他'
      })
    }
  },
  /*bindPickersex */
  bindPickersex:function (e) {
    this.setData({
      indexs: Number(e.detail.value) + 1
    })
    console.log(this.data.indexs)
    if (this.data.indexs == 1) {
      this.setData({
        sex: '男'
      })
    }else if(this.data.indexs == 2) {
      this.setData({
        sex: '女'
      })
    }
  },
  /*用户名 */
  username:function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  /*身份证号*/
  cards:function(e) {
    this.setData({
      card:e.detail.value
    })
    if(this.data.card.length == 0){
      wx.showToast({
        title: '  不能为空',
        icon:'success',
        duration:1500
      })
    }else if(this.data.card.length == 18) {
      wx.showToast({
        title: '身份证号正确',
        icon: 'success',
        duration: 1500
      })
    }else if(this.data.card.length != 18) {
      wx.showToast({
        // title: '',
        title: '身份证号为18位',
        icon: 'success',
        duration: 1500
      })
    }
  },
  /*手机号*/
  tels: function (e) {
    this.setData({
      tel: e.detail.value
    })
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(this.data.tel.length == 0) {
      wx.showToast({
        title: '手机号不能为空',
        icon:'success',
        duration:1500
      })
    }else if(this.data.tel.length < 11) {
      wx.showToast({
        title: '手机号为11位',
        icon:'success',
        duration:1500
      })
    }else if(!myreg.test(this.data.tel)){
      wx.showToast({
        title: '手机格式有误',
        icon:'success',
        duration:1500
      })
    }else{
      wx.showToast({
        title: '手机号正确',
        icon:'success',
        duration:1500
      })
    }
  },
  /**招生老师 */    
  teas: function(e) {
    this.setData({
      zsls:e.detail.value
    })
  },
  /*提交信息 */
    submess:function (e) {
      index.request({
        url:'studentadd?username=' + this.data.username + '&card=' + this.data.card + '&education=' + this.data.index + '&tel=' + this.data.tel + '&sex=' + this.data.indexs+'&date='+this.data.date+'&zsls='+this.data.zsls,
        success: (res) => {
          console.log(res)       
          if(res.status == 100) {
            // setTimeout
            wx.redirectTo({
              url: '../predictionlist/predictionlist',
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