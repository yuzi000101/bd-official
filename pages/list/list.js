// pages/list/list.js
let datas = require('../../datas/list-data')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: []
  },
  //点击轮播图跳转
  carouselToDetail(event){
    let index = event.target.dataset.index  //target表示触发事件的元素
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },
  //点击列表跳转
  toDetail(event) {
    let index = event.currentTarget.dataset.index  //currentTarget表示当前的元素
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
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