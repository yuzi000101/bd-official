// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'yuzi',
    userInfo: null,
    isShow: true
  },
  handleClick(){
    wx.switchTab({
      url: '/pages/list/list',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
  },

  //获取用户数据
  getUserInfo() {
    //获取用户数据
    wx.getUserInfo({
      success: (result) => {
        this.setData({
          userInfo: result.userInfo
        })
      },
      fail: (res) => {
        console.log('获取用户数据失败')
      },
    })
    //判断用户是否授权
    wx.getSetting({
      success: (result) => {
        if (result.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          })
        } else {
          this.setData({
            isShow: true
          })
        }
      }
    })
  },

  handleGetUserInfo(result) {
    if (result.detail.rawData) {
      this.getUserInfo()
    }
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