Page({
  data: {
    firstArray: [],
    secondArray: [],
    hidden: false,
    rate:''
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    
    let item=JSON.parse(options.json);
    console.log(item);
    requestData(this, options.json);
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
})

function requestData(that, json) {

  var d = json;
   console.log(json);
   console.log(d);
  wx.request({
    url: 'https://land.guanweiming.com/preset/compute', 
    //url: 'https://192.168.0.82/preset/compute',
    method: 'POST',
    data: d,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      var a = res.data.data.firstArray;
      var b = res.data.data.secondArray;
      var r = res.data.data.rate;
      console.log(res.data.data);
      that.setData({
        hidden: true,
        firstArray: a,
        secondArray: b,
        rate:r,
      })
    }


  })

}
