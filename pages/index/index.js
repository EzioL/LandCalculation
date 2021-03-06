//index.js
Page({
  data: {

    list: [
      {
        id: 'basic',
        name: '基础信息',
        open: false,
      }, {
        id: 'zhuzhai',
        name: '可售住宅',
        open: false,

      }, {
        id: 'dishang',
        name: '底商',
        open: false,
      }, {
        id: 'xiezi',
        name: '写字楼',
        open: false,
      }, {
        id: 'gongyu',
        name: '公寓',
        open: false,
      }, {
        id: 'huiqian',
        name: '回迁',
        open: false,
      }, {
        id: 'qita',
        name: '其他',
        open: false,
      }, {
        id: 'dixia',
        name: '地下部分',
      }, {
        id: 'tiaozheng',
        name: '其他调整项',
      }, {
        id: 'heji',
        name: '合计',
      }
    ],
    resData: {
    },
    basic: {
      array: [],
      index: 0,
      project: {},
      zhandi: '',
      rongji: '',
      jirong: '',
      midu: '',
      dijia: '',
      jirong_sum: 0,
    },
    zhuzhai: {
      array: [],
      index: 0,
      biaozhun: {},
      mianji: 0,
      danjia: '',
      sum: 0
    },
    dishang: {
      array: [],
      index: 0,
      peibi: {},
      mianji: '',
      danjia: '',
      sum: 0
    },
    xiezi: {
      array: [],
      index: 0,
      biaozhun: {},
      mianji: '',
      danjia: '',
      sum: 0
    },
    gongyu: {
      array: [],
      index: 0,
      biaozhun: {},
      mianji: '',
      danjia: '',
      sum: 0
    },
    huiqian: {
        zaojia: '',
      mianji: '',
      danjia: '',
      sum: 0
    },
    qita: {
        zaojia: '',
      mianji: '',
      danjia: '',
      sum: 0
    },
    dixia: {
      array: [],
      index: 0,
      peibi: {},
      chanquan_count: 0,
      chanquan_danjia: '',
      chanquan_sum: 0,
      chanquan_mianji: 0,
      renfang_count: 0,
      renfang_danjia: '',
      renfang_sum: 0,
      renfang_mianji: 0,
      chucang_count: 0,
      chucang_danjia: '',
      chucang_sum: 0,
      chucang_mianji: 0,
      danjia: ''
    },
    tiaozheng: {
      zhuzhai: '',
      chanpin: '',
    },
    heji: {
      mianji: '',
      sum: 0,
    },
    resData:{

    },
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    requestData(this);
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

  basicPickerSelected: function (e) {
    var b = this.data.basic;
    b.index = e.detail.value;
    b.project = b.array[b.index];
    this.setData({
      basic: b
    });
    dataCompute(this)
  },

  zhandiInput: function (e) {
    var b = this.data.basic;
    b.zhandi = e.detail.value;
    b.jirong = b.zhandi * b.rongji;
    b.jirong_sum = b.jirong * b.dijia / 10000;
    this.setData({
      basic: b
    })
    dataCompute(this)
  },

  rongjiInput: function (e) {
    var b = this.data.basic;
    b.rongji = e.detail.value;
    b.jirong = b.zhandi * b.rongji;
    b.jirong_sum = b.jirong * b.dijia / 10000;
    this.setData({
      basic: b
    })
    dataCompute(this)
  },
  miduInput: function (e) {
    var b = this.data.basic;
    b.midu = e.detail.value;
    b.jirong_sum = b.jirong * b.dijia / 10000;
    this.setData({
      basic: b
    })
    dataCompute(this)
  },

  dijiaInput: function (e) {
    var b = this.data.basic;
    b.dijia = e.detail.value;
    b.jirong_sum = b.jirong * b.dijia / 10000;
    this.setData({
      basic: b
    })
    dataCompute(this)
  },

  zhuzhaiPickerSelected: function (e) {
    var z = this.data.zhuzhai;
    z.index = e.detail.value;
    z.biaozhun = z.array[z.index];
    this.setData({
      zhuzhai: z
    });
    dataCompute(this)
  },

  zhuzhaiMianjiInput: function (e) {
    var z = this.data.zhuzhai;
    z.mianji = e.detail.value;
    z.sum = z.mianji * z.danjia / 10000;
    this.setData({
      zhuzhai: z
    });
    dataCompute(this)
  },

  zhuzhaiDanjiaInput: function (e) {
    var z = this.data.zhuzhai;
    z.danjia = e.detail.value;
    z.sum = z.mianji * z.danjia / 10000;
    this.setData({
      zhuzhai: z
    });
    dataCompute(this)
  },

  //底商
  dishangPickerSelected: function (e) {
    var d = this.data.dishang;
    d.index = e.detail.value;
    d.peibi = d.array[d.index];
    this.setData({
      dishang: d
    });
    dataCompute(this)
  },

  dishangMianjiInput: function (e) {
    var d = this.data.dishang;
    d.mianji = e.detail.value;
    d.sum = d.mianji * d.danjia / 10000;
    this.setData({
      dishang: d
    });
    dataCompute(this)
  },

  dishangDanjiaInput: function (e) {
    var d = this.data.dishang;
    d.danjia = e.detail.value;
    d.sum = d.mianji * d.danjia / 10000;
    this.setData({
      dishang: d
    });
    dataCompute(this)
  },

  //写字楼
  xieziPickerSelected: function (e) {
    var x = this.data.xiezi;
    x.index = e.detail.value;
    x.biaozhun = x.array[x.index];
    this.setData({
      xiezi: x
    });
    dataCompute(this)
  },

  xieziMianjiInput: function (e) {
    var x = this.data.xiezi;
    x.mianji = e.detail.value;
    x.sum = x.mianji * x.danjia / 10000;
    this.setData({
      xiezi: x
    });
    dataCompute(this)
  },

  xieziDanjiaInput: function (e) {
    var x = this.data.xiezi;
    x.danjia = e.detail.value;
    x.sum = x.mianji * x.danjia / 10000;
    this.setData({
      xiezi: x
    });
    dataCompute(this)
  },

  //公寓
  gongyuPickerSelected: function (e) {
    var g = this.data.gongyu;
    g.index = e.detail.value;
    g.biaozhun = g.array[g.index];
    this.setData({
      gongyu: g
    });
    dataCompute(this)
  },

  gongyuMianjiInput: function (e) {
    var g = this.data.gongyu;
    g.mianji = e.detail.value;
    g.sum = g.mianji * g.danjia / 10000;
    this.setData({
      gongyu: g
    });
    dataCompute(this)
  },

  gongyuDanjiaInput: function (e) {
    var g = this.data.gongyu;
    g.danjia = e.detail.value;
    g.sum = g.mianji * g.danjia / 10000;
    this.setData({
      gongyu: g
    });
    dataCompute(this)
  },

  //回迁
  huiqianMianjiInput: function (e) {
    var hq = this.data.huiqian;
    hq.mianji = e.detail.value;
    hq.sum = hq.mianji * hq.danjia / 10000;
    this.setData({
      huiqian: hq
    });
    dataCompute(this)
  },
  huiqianDanjiaInput: function (e) {
    var hq = this.data.huiqian;
    hq.danjia = e.detail.value;
    hq.sum = hq.mianji * hq.danjia / 10000;
    this.setData({
      huiqian: hq
    });
    dataCompute(this)
  },
  huiqianZaojiaInput: function (e) {
    var hq = this.data.huiqian;
    hq.zaojia = e.detail.value;
    this.setData({
      huiqian: hq
    });
    dataCompute(this)
  },

  //其他

  qitaMianjiInput: function (e) {
    var qt = this.data.qita;
    qt.mianji = e.detail.value;
    qt.sum = qt.mianji * qt.danjia / 10000;
    this.setData({
      qita: qt
    });
    dataCompute(this)
  },
  qitaDanjiaInput: function (e) {
    var qt = this.data.qita;
    qt.danjia = e.detail.value;
    qt.sum = qt.mianji * qt.danjia / 10000;
    this.setData({
      qita: qt
    });
    dataCompute(this)
  },
  qitaZaojiaInput: function (e) {
    var qt = this.data.qita;
    qt.zaojia = e.detail.value;
    this.setData({
      qita: qt
    });
    dataCompute(this)
  },
  //地下部分
  dixiaPickerSelected: function (e) {
    var dx = this.data.dixia;
    dx.index = e.detail.value;
    dx.peibi = dx.array[dx.index];
    this.setData({
      dixia: dx
    });
    dataCompute(this)
  },
  chanquanDanjiaInput: function (e) {
    var dx = this.data.dixia;
    dx.chanquan_danjia = e.detail.value;
    this.setData({
      dixia: dx
    });
    dataCompute(this)
  },
  renfangDanjiaInput: function (e) {
    var dx = this.data.dixia;
    dx.renfang_danjia = e.detail.value;
    this.setData({
      dixia: dx
    });
    dataCompute(this)
  },
  chucangDanjiaInput: function (e) {
    var dx = this.data.dixia;
    dx.chucang_danjia = e.detail.value;
    this.setData({
      dixia: dx
    });
    dataCompute(this)
  },


  //其他调整
  tiaozhengZhuZhaiInput: function (e) {
    var qt = this.data.tiaozheng;
    qt.zhuzhai = e.detail.value;
    console.log("qt.zhuzhai-----" + qt.zhuzhai);
    this.setData({
      tiaozheng: qt
    });
    dataCompute(this)
  },
  tiaozhengChanPinInput: function (e) {
    var qt = this.data.tiaozheng;
    qt.chanpin = e.detail.value;
    this.setData({
      tiaozheng: qt
    });
    dataCompute(this)
  },
  //合计
  onItemClick: function (event) {
    var json = {};
    var b = this.data.basic;
    var z = this.data.zhuzhai;
    var ds = this.data.dishang;
    var xz = this.data.xiezi;
    var gy = this.data.gongyu;
    var hq = this.data.huiqian;
    var qt = this.data.qita;
    var tz = this.data.tiaozheng;
    var dx = this.data.dixia;
    var hj = this.data.heji;
    var res = this.data.resData;

    json.c1 = b.project.value;
    json.d5 = b.jirong;
    json.d26 = tz.zhuzhai;
    json.f26 = tz.chanpin;
    json.c12 = ds.peibi.value;

    json.d30 = z.mianji;
    json.d31 = ds.mianji;
    json.d32 = xz.mianji;
    json.d33 = gy.mianji;
    json.d34 = hq.mianji;
    json.d35 = qt.mianji;
    json.d36 = 0;
    json.d37 = 0;
    json.d38 = dx.renfang_mianji  +  dx.chanquan_mianji +dx.chucang_mianji ;

    json.f7  = b.jirong_sum;
    json.f10 = z.sum;
    json.f27 = hj.sum;

    json.e30 = res.standard_house2[z.index].value;
    json.e31 = res.business_price;
    json.e32 = xz.biaozhun.value;
    json.e33 = gy.biaozhun.value;
    json.e34 = hq.zaojia;
    json.e35 = qt.zaojia;
    json.e36 = 0;
    json.e37 = 0;
    json.e38 = dx.danjia;

  let str=JSON.stringify(json);
    var targetUrl = "/pages/show/show" +
      "?json=" + str;
    wx.navigateTo({
      url: targetUrl
    });
  },


})
function dataCompute(that) {
  var res = that.data.resData;

  var b = that.data.basic;
  var z = that.data.zhuzhai;
  var ds = that.data.dishang;
  var xz = that.data.xiezi;
  var gy = that.data.gongyu;
  var dx = that.data.dixia;
  var hq = that.data.huiqian;
  var qt = that.data.qita;


  ds.mianji = b.jirong * ds.peibi.value / 100;
  z.mianji = (b.jirong - ds.mianji - xz.mianji - gy.mianji - hq.mianji -qt.mianji) * 1.03;
  z.sum = z.mianji * z.danjia / 10000;

  var 住宅人防车位面积 = z.mianji * 0.08;
  var 住宅人防车位个数 = 住宅人防车位面积 / res.area_defense;
  住宅人防车位个数 = parseInt(住宅人防车位个数 + 0.5);

  var 住宅产权车位个数 = z.mianji / z.biaozhun.value * dx.peibi.value * 0.01 - 住宅人防车位个数;
  住宅产权车位个数 = parseInt(住宅产权车位个数 + 0.5);
  var 住宅产权车位面积 = 住宅产权车位个数 * res.area_parking * (100 - res.ratio_parking_area) / 100;

  var 商业人防车位面积 = (ds.mianji*1.0 + xz.mianji*1.0 + gy.mianji*1.0) * 0.08;
  var 商业人防车位个数 = parseInt(商业人防车位面积 / res.area_defense + 0.5);

  var 商业产权车位个数 = (gy.mianji*1.0 + ds.mianji*1.0 + xz.mianji*1.0) / 100 - 商业人防车位个数;
  商业产权车位个数 = parseInt(商业产权车位个数 + 0.5);
  var 商业产权车位面积 = 商业产权车位个数 * res.area_parking;

  var 住宅储藏室面积 = 0;
  if (b.rongji > 2.4) {
    住宅储藏室面积 = 2 * z.mianji / b.jirong * b.zhandi * b.midu * 0.01;
  } else {
    住宅储藏室面积 = 1 * z.mianji / b.jirong * b.zhandi * b.midu * 0.01;
  }

  dx.chanquan_count = 住宅产权车位个数 + 商业产权车位个数;

  dx.renfang_mianji = 住宅人防车位面积 + 商业人防车位面积;
  dx.chanquan_mianji  = 住宅产权车位面积 + 商业产权车位面积;
  dx.chucang_mianji = 住宅储藏室面积;

  if (z.biaozhun.name == '尊享系') {
    dx.chanquan_danjia = '22';
  } else {
    dx.chanquan_danjia = '20';
  }
  dx.chanquan_sum = parseInt(dx.chanquan_count * dx.chanquan_danjia);

  dx.renfang_count = 住宅人防车位个数 + 商业人防车位个数;
  if (z.biaozhun.name == '尊享系') {
    dx.renfang_danjia = '19';
  } else {
    dx.renfang_danjia = '17';
  }

  dx.renfang_sum = dx.renfang_count * dx.renfang_danjia;

  dx.chucang_count = 住宅储藏室面积;

  if (isNaN(dx.chucang_count)) {
    dx.chucang_count = 0;
  }
  if (z.biaozhun.name == '尊享系') {
    dx.chucang_danjia = '7000';
  } else {
    dx.chucang_danjia = '6000';
  }
  dx.chucang_sum = dx.chucang_count * dx.chucang_danjia / 10000;

  

  var hj = that.data.heji;
/*  console.log("z.mianji-->" + z.mianji);
console.log("ds.mianji-->" + ds.mianji);
console.log("xz.mianji-->" + xz.mianji);
console.log("gy.mianji-->" + gy.mianji);
console.log("hq.mianji-->" + hq.mianji);
console.log("qt.mianji-->" + qt.mianji);
console.log("dx.chanquan_count-->" + dx.chanquan_count);
console.log("dx.renfang_count-->" + dx.renfang_count);
console.log("dx.chucang_count-->" + dx.chucang_count);*/
  hj.mianji = parseInt(z.mianji*1.0 + ds.mianji*1.0 + xz.mianji*1.0 + gy.mianji*1.0 + hq.mianji*1.0 + qt.mianji*1.0 + dx.chanquan_count*1.0 + dx.renfang_count*1.0 + dx.chucang_count*1.0);

  hj.sum = parseInt(z.sum*1.0 + ds.sum*1.0 + xz.sum*1.0 + gy.sum*1.0 + hq.sum*1.0 + qt.sum*1.0 + dx.chanquan_sum*1.0 + dx.renfang_sum*1.0 + dx.chucang_sum*1.0);

   console.log("hj.mianji-->" + hj.mianji);
  that.setData({
    dishang: ds,
    zhuzhai: z,
    dixia: dx,
    heji: hj,
    resData:res,
  });

}



function requestData(that) {
  wx.request({
    url: 'https://land.guanweiming.com/preset',
    //url: 'https://192.168.0.82/preset',
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function (res) {
      // success
      // console.log(res.data.data);
      var res = res.data.data;
      var b = that.data.basic;
      b.array = res.type_project;
      b.project = b.array[b.index];


      var z1 = that.data.zhuzhai;
      z1.array = res.standard_house;
      z1.biaozhun = z1.array[z1.index];

      var d = that.data.dishang;
      d.array = res.ratio_product;
      d.peibi = d.array[d.index];

      var x = that.data.xiezi;
      x.array = res.standard_office;
      x.biaozhun = x.array[x.index];

      var g = that.data.gongyu;
      g.array = res.standard_flat;
      g.biaozhun = g.array[x.index];

      var dx = that.data.dixia;
      dx.array = res.ratio_parking;
      dx.peibi = dx.array[dx.index];
      dx.danjia = res.underground_price;

      that.setData({
        resData: res,
        basic: b,
        zhuzhai: z1,
        dishang: d,
        xiezi: x,
        gongyu: g,
        dixia: dx,
        //hidden: true
      });
      console.log(that.data.zhuzhai.array);
    },
    fail: function (res) {
      // fail
      console.log("fail");
    },
    complete: function (res) {
      // complete
    }
  })
}



