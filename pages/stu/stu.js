// pages/dmeo04/demo04.js


const db = wx.cloud.database().collection("applicationForm")
let datas = ''
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studata:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let _this = this
    
    db.where({
      deparment : app.userInfo.deparment
    }).get({
      success : res => {

        console.log(res.data)
        let datas = res.data
        _this.setData({
          studata : datas
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