// pages/detail/detail.js
// 引入模拟数据
let datas = require('../../datas/list-data')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: null,
    index: null,
    isCollected: false,
    isMusicPlay: false
  },


  handleCollected() {
    let isCollected = !this.data.isCollected
    let index = this.data.index
    console.log(isCollected)
    this.setData({
      isCollected
    })
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx: wx.showToast({
      title,
      icon: 'success',
    })

    //存储数据
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        let obj = datas.data
        obj[index] = isCollected
        wx.setStorage({
          data: obj,
          key: 'isCollected',
          success: () => {}
        })
      }
    })
  },


  //处理音乐
  handleMusicPlay() {
    let isMusicPlay = !this.data.isMusicPlay
    let {
      dataUrl,
      title
    } = this.data.detailObj.music
    this.setData({
      isMusicPlay
    })
    if (isMusicPlay) {
      wx.getBackgroundAudioManager().play({
        dataUrl,
        title
      })
    } else {
      wx.getBackgroundAudioManager().pause()
    }
  },

  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到QQ空间', '分享到微博']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index
    this.setData({
      detailObj: datas.list_data[index],
      index
    })

    //根据本地存储判断用户是否收藏过当前文章
    let detailStorage = wx.getStorageSync('isCollected')
    //用户第一次进入页面初始化本地存储
    if (!detailStorage) {
      wx.setStorage({
        data: {},
        key: 'isCollected',
      })
    }
    //判断用户是否收藏过
    if (detailStorage[index]) {
      this.setData({
        isCollected: true
      })
    }

    //监听音乐播放
    wx.getBackgroundAudioManager().onPlay(() => {
      console.log('音乐暂停')
      this.setData({
        isMusicPlay: false
      })
    })
    //监听音乐暂停
    wx.onBackgroundAudioPause(() => {
      console.log('音乐暂停')
      this.setData({
        isMusicPlay: false
      })
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