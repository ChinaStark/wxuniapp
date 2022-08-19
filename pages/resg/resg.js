// pages/demo03/demo03.js
const app = getApp();
 
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
   
    console.log(app.userInfo)
  //   setTimeout(function () {
  //   if(app.userInfo.permisson !== 1){
  //     _this.setData({
  //       isShow :false 
  //     })
  //   }else{
  //       _this.setData({
  //       isShow :true 
  //     })
  //   }
  // }, 1000) //延迟时间 这里是1秒
    
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
    if(app.userInfo.permisson === 1){
      wx.navigateTo({
      url: '../stu/stu',
    })
    }else{
      wx.showModal({
        confirmColor:'red',
        cancelColor: 'green',
        title :'警告',
        title: '你还不是社团干部',
         
      })
    }
    
    
  },
  loginself(){
    console.log(app.userInfo.StuName)
    if(app.userInfo.loginistrue === 1){
      wx.showModal({
        confirmColor:'red',
        cancelColor: 'green',
        title :'警告',
        content:'亲爱的'+app.userInfo.StuName+'你已经登陆过了'
      })
    }else{
      wx.navigateTo({
      url: '../login/login',
    })
    }
    
    
  },
  onShow(){
   
},
fun(){
  wx.showToast({
    title: '暂未开放，期待你的加入',
    icon: 'loading',
    duration: 1500
  })
}

})

