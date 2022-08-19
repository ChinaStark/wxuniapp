const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
  
module.exports = {
  formatTime
}



function getUserData(){
  let  _this = this;
  db.where({
    _openid : 'oouPS4otSJgVZYDmc2_i_-4ygvYs'
  }).get({
    success : res => {
      this.setData({
        _this:res.data[0].StuName
      })
     // console.log(res.data[0].StuName)
    }
  })
}