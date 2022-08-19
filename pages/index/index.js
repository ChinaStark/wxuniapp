// index.js
// 获取应用实例
let switchAllChecked = false
let Name =''
let Class= ''
let CollageName =''
let stuId = ''
let adjust = ''
let depart =  ''
let pwddd = ''
const db = wx.cloud.database().collection("applicationForm")
Page({

  
  data: {
    
    UserName : '',
    motto: '奇点小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  bindData(e){
    depart = e.detail.value
    
  },

  handeCollage(e){
    CollageName = e.detail.value
  },
  handeId(e){
    stuId = e.detail.value
  },
  changeFalse(){
    switchAllChecked = false; 
  },
  changeIf(e){
    switchAllChecked = !switchAllChecked
  },
  handeName (event) {
    Name =  event.detail.value
    
  
  },
  handpwd(e){
    pwddd = e.detail.value
  },
  handeClass(event){
    Class = event.detail.value
  },
  handadd(){
    if(Name !== '' && Class !== '' &&CollageName!== '' &&depart!== '' &&stuId!== '' && pwddd !== ''){
       
      db.add({
        data:{
          StuName : Name,
          ClassName : Class,
          Sed_CollageName : CollageName,
          deparment : depart,
          stu_Id : stuId,
          permisson : 0,
          status : 1,
          adjust : switchAllChecked,
          pwd : pwddd
        },
        success(res){
          wx.showToast({
            title: '成功'
          })
          
          
          console.log('succes')
        },
        fail(res){
          console.log('fail')
        }
      })
      setTimeout(function () { wx.navigateBack({
        delta: 0,
      })
      }, 1000) 
    }else{
      wx.showModal({
        confirmColor:'red',
        cancelColor: 'green',
        title :'警告',
        content:'请将信息输入完全'
      })
    }
    
    
  },
  onPullDownRefresh: function () {
    this.onLoad()
},
  getUserData(){
    let  _this = this;
    db.where({
      _openid : app.userInfo.openid
        }).get({
      success : res => {
        this.setData({
          UserName:res.data[0].StuName
        })
        
      }
    })
  },
   
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})




