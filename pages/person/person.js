// pages/demo02/demo02.js
const app = getApp();
Page({
  data: {
    imgUrls:[
      "https://tenfei01.cfp.cn/creative/vcg/nowater800/new/VCG211333326657.jpg?x-oss-process=image/format,webp",
      "https://tenfei04.cfp.cn/creative/vcg/nowater800/new/VCG211333326660.jpg?x-oss-process=image/format,webp",
      "https://alifei02.cfp.cn/creative/vcg/nowater800/new/VCG211333326658.jpg?x-oss-process=image/format,webp"
     ],
    StuName : '',
    ClassName : '',
    stuid : '',
    deparment : '',
    Sed_collage : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
     
    this.setData({
      StuName : app.userInfo.StuName,
      ClassName : app.userInfo.ClassName,
      stuid : app.userInfo.stu_Id,
      deparment : app.userInfo.deparment,
      Sed_collage : app.userInfo.Sed_CollageName
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
    this.onLoad()
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

  },
  
   
})

