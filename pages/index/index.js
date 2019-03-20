//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开启你的甜蜜之旅',
    nickName:'Miso',
  },
  //事件处理函数
  onViewTap: function() {
    wx.navigateTo({
      url: '../view/view',
    })
    // wx.redirectTo({
    //   url: '../view/view'
    // })
  }
})
