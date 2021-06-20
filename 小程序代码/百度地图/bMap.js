// pages/bMap/bMap.js
var bmap = require('../../utils/bmap-wx.min.js'); 
var wxMarkerData = []; 
var BMap;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    show: false,
    msg: '',
    keywords: '',
    markers: [], 
    lon: 113.65,
    lat: 34.76,
    tabs: ['购物','住宿','医疗','休闲']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    BMap = new bmap.BMapWX({ 
        ak: 'KjaqmvEVscylpGRmAhnDQoCWFutvpGB1' 
    }); 
  },

  getWords(e) {
    // console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
    this.getMessage()
  },

  getmark(e) {
    this.setData({
      show: false,
      msg: e.currentTarget.dataset.item.title,
      lon: e.currentTarget.dataset.item.longitude,
      lat: e.currentTarget.dataset.item.latitude
    })
  },

  getMessage() {
    var that=this
    BMap.suggestion({ 
        query: that.data.msg, 
        success: function(res) {
          console.log(res)
          var marks=[]
          for(var i=0; i<res.result.length; i++) {
            marks.push({
              title: res.result[i].name,
              id: res.result[i].uid,
              latitude: res.result[i].location.lat,
              longitude: res.result[i].location.lng,
              iconPath: '../../assets/images/marker.png',
              width: 30,
              height: 30
            })
          }
          that.setData({
            markers: marks,
            lon: marks[0].longitude,
            lat: marks[0].latitude,
            show: true,
            lists: marks
          })
          console.log(that.data.markers)
        }
    }); 
  },

  search() {
    this.setData({
      keywords: this.data.msg
    })
    this.getMessage()
  },

  getItem(e) {
    var that=this
    BMap.search({ 
      "query": e.currentTarget.dataset.item, 
      "location": '34.76,113.65',
      success: function(res) {
        console.log(res.wxMarkerData)
        var marks=[]
        for(var i=0; i<res.wxMarkerData.length; i++) {
          marks.push({
            title: res.wxMarkerData[i].title,
            id: res.wxMarkerData[i].id,
            latitude: res.wxMarkerData[i].latitude,
            longitude: res.wxMarkerData[i].longitude,
            iconPath: '../../assets/images/marker.png',
            width: 30,
            height: 30
          })
        }
        that.setData({
          markers: marks
        })
        console.log(that.data.markers)
      }, 
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../assets/images/marker.png'
    }); 
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