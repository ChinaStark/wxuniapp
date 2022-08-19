const app = getApp()

Page({
  data: {
    phone: '',
    password: '',
    success: false,
    text: ''
 
  },
 
  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
  // 登录 
  login: function () {
    var that = this;   
 
    var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
    if (that.data.phone.length == 0) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        duration: 1000
      })
    } else if (that.data.password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 1000
      })
    }else {
      
      app.userInfo.StuName = that.data.phone,
      app.userInfo.pwd = that.data.password
      app.onLaunch()

      setTimeout(function () {
        if(app.userInfo.loginistrue === 1){
          wx.showToast({
          title: '登陆成功！！！',
          icon: 'loading',
          duration: 1500
        })
        wx.navigateBack({
          delta: 0,
        })
        }else{
          wx.showToast({
            title: '登陆失败！！！',
            icon: 'loading',
            duration: 1500
          })
        }
         }, 500) //延迟时间 这里是1秒
      
        
 
 
    }
  },
    
 
})