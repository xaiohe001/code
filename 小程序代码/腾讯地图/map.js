var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords: '',
    msg: '',
    markers: [],
    lists: [],
    show: false,
    lon: 113.65,
    lat: 34.76,
    tabs: ['购物','住宿','医疗','休闲']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'O7YBZ-LM7L3-EAJ3A-3RR36-FVPXQ-QUFKJ'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  getWords(e) {
    // console.log(e.detail.value)
    // this.setData({
    //   msg: e.detail.value
    // })
    this.setData({
      keywords: e.detail.value
    })
    this.getMessage()
  },

  search() {
    // this.setData({
    //   keywords: this.data.msg
    // })
    // this.getMessage()
  },

  getMessage() {
    var that=this
    qqmapsdk.getSuggestion({
      keyword: that.data.keywords,
      page_size: 20,
      success: function(res) {
        console.log(res)
        var marks=[]
        if(res.data.length) {
          that.setData({
            show: true
          })
        }
          for(var i=0; i<res.data.length; i++) {
            marks.push({
              title: res.data[i].title,
              id: res.data[i].id,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng,
              iconPath: '../../assets/images/marker.png',
              width: 30,
              height: 30
            })
          }
          that.setData({
            lists: marks
          })
      }
    })



    // qqmapsdk.search({
    //   keyword: this.data.keywords,
    //   location: '34.76,113.65',
    //   page_size: 20,
    //   success: function (res) {
    //       console.log(res);
    //       var marks=[]
    //       for(var i=0; i<res.data.length; i++) {
    //         marks.push({
    //           title: res.data[i].title,
    //           id: res.data[i].id,
    //           latitude: res.data[i].location.lat,
    //           longitude: res.data[i].location.lng,
    //           iconPath: '../../assets/images/marker.png',
    //           width: 40,
    //           height: 40
    //         })
    //       }
    //       that.setData({
    //         markers: marks
    //       })
    //   },
    //   fail: function (res) {
    //       console.log(res);
    //   }
    // })
  },

  getmark(e) {
    console.log(1111,e.currentTarget.dataset.item)
    this.data.markers.push(e.currentTarget.dataset.item)
    this.setData({
      show: false,
      markers: this.data.markers,
      lon: e.currentTarget.dataset.item.longitude,
      lat: e.currentTarget.dataset.item.latitude
    })
  },

  getItem(e) {
    var that=this
    qqmapsdk.search({
      keyword: e.currentTarget.dataset.item,
      location: that.data.lat+','+that.data.lon,
      page_size: 20,
      success: function (res) {
          console.log(res);
          var marks=[]
          for(var i=0; i<res.data.length; i++) {
            marks.push({
              title: res.data[i].title,
              id: res.data[i].id,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng,
              iconPath: '../../assets/images/marker.png',
              width: 40,
              height: 40
            })
          }
          that.setData({
            markers: marks
          })
      },
      fail: function (res) {
          console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.getMessage()
    var _this=this
    console.log(qqmapsdk)
    qqmapsdk.direction({
      from: {
        latitude: '34.76',
        longitude: '113.65'
      },
      to: {
        latitude: '34.709010809',
        longitude: '113.509210405'
      },
      success: function(res) {
        console.log(123,res)
        var ret = res;
        var coors = ret.result.routes[0].polyline, pl = [];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr = 1000000;
        for (var i = 2; i < coors.length; i++) {
          coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        }
        //将解压后的坐标放入点串数组pl中
        for (var i = 0; i < coors.length; i += 2) {
          pl.push({ latitude: coors[i], longitude: coors[i + 1] })
        }
        console.log(pl)
        //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
        _this.setData({
          // latitude:pl[0].latitude,
          // longitude:pl[0].longitude,
          polyline: [{
            points: pl,
            color: '#FF0000DD',
            width: 4
          }]
        })
      }
    })
    
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