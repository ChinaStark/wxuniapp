// pages/demo03/demo03.js
const app = getApp();

const db = wx.cloud.database().collection("applicationForm")
Page({

  data:{
     isShow:'',
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
 
  onLoad: function () {
     let _this = this
   // console.log(app.userInfo)
   setTimeout(function () {
    console.log(app.userInfo.permisson)
    if(app.userInfo.permisson !== 1){
      _this.setData({
        isShow :false 
      })
    }else{
        _this.setData({
        isShow :true 
      })
    }
  }, 1000) //延迟时间 这里是1秒
    
  },  
  resiger(){
    if(app.userInfo.status !== 1){
      wx.navigateTo({
      url: '../index/index',
    })
    }else{
      wx.showModal({
        confirmColor:'red',
        cancelColor: 'green',
        title :'警告',
        content:'亲爱的'+app.userInfo.StuName+'你已经注册过了'
      })
    }
    
  },
  serach(){
    wx.navigateTo({
      url: '../stu/stu',
    })
    
  },
  onShow(){
  app.onLaunch();
}
})

