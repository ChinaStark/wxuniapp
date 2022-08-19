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
        let _code = res.code
        let _this= this
        
          wx.request({

            url: 'https://api.weixin.qq.com/sns/jscode2session',  
          
            data: {
          
              appid: 'wx1b24912398143220' , 
          
              secret: '7608b71fb1e92a9e425ad2963bf138ca',
               
              js_code:_code
             }, 
          
            header: { 
          
              'content-type': 'application/json'
          
            }, 
          
            success: function(res) { 
              _this.userInfo.openid  = res.data.openid;
              console.log(res.data) 
          
            }
          
          })

       
        db.where({
          _openid : _this.userInfo.openid
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

        
      }
    })
        
      
      },
      
      
    })
    wx.cloud.init({
      env: 'cloud1-5gny5k5k1dae764d',
      //traceUser: true,
    })
  },
  globalData: {
    
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
  },
    
})
