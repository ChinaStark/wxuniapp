// app.js


const utils= require('./utils/util')
wx.cloud.init()
const db = wx.cloud.database().collection("applicationForm")
App({
  onLaunch(){
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      
      success: res => {
        let _this = this
        db.where({    
           StuName : this.userInfo.StuName,
           pwd : this.userInfo.pwd
        }).get({
        success : res => {
           
          
          _this.userInfo.id = res.data[0]._id    
          _this.userInfo.StuName = res.data[0].StuName       
          _this.userInfo.ClassName = res.data[0].ClassName     
          _this.userInfo.Sed_CollageName = res.data[0].Sed_CollageName
          _this.userInfo.deparment = res.data[0].deparment     
          _this.userInfo.stu_Id = res.data[0].stu_Id        
          _this.userInfo.permisson = res.data[0].permisson      
          _this.userInfo.status = res.data[0].status        
          _this.userInfo.adjust = res.data[0].adjust
          console.log('succes')
        if(_this.userInfo.StuName !== ''){
           
          _this.userInfo.loginistrue = 1
        }
      }
      
    })
    
    console.log(this.userInfo)
      
      },
      
      
    })
    wx.cloud.init({
      env: 'cloud1-5gny5k5k1dae764d',
      //traceUser: true,
    })
  },
  globalData: {
     password : '',
     name : ''
  },
  userInfo: {
    id              : '',
    openid          : '',
    StuName         : '',
    ClassName       : '',
    Sed_CollageName : '',
    deparment       : '',
    stu_Id          : '',
    permisson       : '',
    status          : '',
    adjust          : '',
    pwd             : '',
    loginistrue     : '',
  },
    
})
