
let logo = 1
let switchAllChecked = false
let Name =''
let Class= ''
let CollageName =''
let stuId = ''
let adjust = ''
let depart =  ''
let per = ''
let pwd = ''
const app = getApp()
const db = wx.cloud.database().collection('applicationForm')

// pages/password/password.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit:function(e){
    // console.log(e);
    var oldpwd=e.detail.value.oldpwd;
    var newpwd = e.detail.value.newpwd;
    var newpwd2 = e.detail.value.newpwd2;
    
    if(oldpwd=='' || newpwd=='' || newpwd2==''){
      wx.showToast({
        title: '密码不能为空',
        icon:'none',
        duration:1000
      })
    }else if(newpwd!=newpwd2){
      wx.showToast({
        title: '两次输入不一致',
        icon: 'none',
        duration: 1000
      })
    }else{
      db.doc(app.userInfo.id).update({
        data:{
          StuName : Name,
          ClassName : Class,
          Sed_CollageName : CollageName,
          deparment : depart,
          stu_Id : stuId,
          permisson : per,
          status : 1,
          adjust : switchAllChecked,
          pwd : newpwd2
        },
        success: (res) => {
          console.log(res);
            app.userInfo.pwd = newpwd2
            wx.showToast({
              title: 'success',
                
            })
            setTimeout(function () { wx.navigateBack({
              delta: 0,
            })
            }, 1000) 
         
        }
      })
    }
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    Name = app.userInfo.StuName,
      Class = app.userInfo.ClassName,
      adjust = app.userInfo.adjust,
      depart = app.userInfo.deparment,
      CollageName = app.userInfo.Sed_CollageName
      stuId = app.userInfo.stu_Id,
      per = app.userInfo.permisson
      pwd = app.userInfo.pwd
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