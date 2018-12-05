//引入相应的请求接口models文件夹里的index.js
import { IndexModel } from '../../models/index.js'
let index = new IndexModel()   //实例化
Page({
  //查看更多1
  moreone:function(options) {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  //查看更多1
  moreone: function (options) {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  //查看更多1
  moreone: function (options) {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  //查看更多1
  moreone: function (options) {
    let tiao = options.currentTarget.dataset.tiao
    wx.navigateTo({
      url: '../list/list?tiao='+tiao,
    })
  },
  //点击十五个小标题
  LIST: function(options) {
    let dataid = options.currentTarget.dataset.id
    console.log(dataid)
    if(dataid == 0 || dataid == 1 || dataid == 2 || dataid == 3){
      wx.navigateTo({
        url: '../list/list?id='+dataid,
      })
    }else if(dataid == 4) {
      wx.navigateTo({
        url: '../job/job',
      })
    }else if(dataid == 5) {
      wx.navigateTo({
        url: '../organization/organization',
      })
    } else if (dataid == 6) {
      wx.navigateTo({
        url: '../stutentdetail/studentdetail',
      })
    }else if(dataid == 7) {
      wx.navigateTo({
        url: '../prediction/prediction',
      })
    }else if(dataid == 8){
      wx.navigateTo({
        url: '../find/find',
      })
    }else if(dataid == 14) {
      wx.navigateTo({
        url: '../report/report',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    newslist:[],    //集团新闻
    zclist:[],      //政策制度
    notice:[],      //集团通知
    activity:[],    //优惠活动
    grids: [
      {
        id:0,
        name:'集团信息',
        url:'../list/list',
        icon: 'icon-tongzhi1'
      },
      {
        id:1,
        name: '集团通知',
        url: '../list/list',
        icon: 'icon-tongzhi1'
      },
      {
        id: 2,
        name: '优惠活动',
        url: '../list/list',
        icon: 'icon-youhuihuodongx'
      },
      {
        id: 3,
        name: '政策制度',
        url: '../list/list',
        icon: 'icon-zhengcezhidu'
      },
      {
        id:4,
        name: '就业利好',
        url: '../job/job',
        icon: 'icon-jiuyebaozhang'
      },
      {
        id: 5,
        name: '组织结构',
        url: '../organization/organization',
        icon: 'icon-zuzhijiegou'
      },
      {
        id:6,
        name: '在校生查询',
        url: '../stutentdetail/studentdetail',
        icon: 'icon-chaxun1'
      },
      {
        id: 7,
        name: '预报名学生',
        url: '../prediction/prediction',
        icon: 'icon-mp-yubaoming'
      },
      {
        id: 8,
        name: '就业查询',
        url: '../find/find',
        icon: 'icon-chaxun1'
      },
      {
        id: 9,
        name: '业绩排名',
        icon: 'icon-paiming-copy'
      },
      {
        id: 10,
        name: '会议管理',
        icon: 'icon-huiyiguanli'
      },
      {
        id: 11,
        name:'工资查询',
        icon: 'icon-gongzichaxun'
      },
      {
        id: 12,
        name:'市场住宿',
        icon: 'icon-icon-'
      },
      {
        id: 13,
        name:'费用报销',
        icon: 'icon-feiyongbaoxiao'
      },
      {
        id:14,
        name:'投诉举报',
        url: '../report/report',
        icon: 'icon-tousujubao'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //集团通知
    index.request({
      url: 'api/shows',
      success: (res) => {
        if (res.list.list.data.length > 3) {
          res.list.list.data.length = 3
        }
        this.setData({
          notice: res.list.list.data
        })
      }
    }),
    //集团新闻
    index.request({
      url: 'xinwenapi',
      success: (res) => {
        if(res.list.data.length > 3) {
          res.list.data.length = 3
        }
        this.setData({
          newslist: res.list.data
        })
      }
    }),
    //优惠活动
    index.request({
      url:'api/select?key= c56d0e9a7ccec67b4ea131655038d604',
      success: (res) => {
        if (res.list.list.data.length > 3) {
          res.list.list.data.length = 3
        }
        this.setData({
          activity: res.list.list.data
        })
      }
    }),
    //政策制度
    index.request({
      url:'zhengceapi',
      success: (res) => {
        if (res.list.data.length > 3) {
          res.list.data.length = 3
        }
        this.setData({
          zclist:res.list.data
        })
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