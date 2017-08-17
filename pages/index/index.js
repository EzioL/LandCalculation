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
      },  {
        id: 'huiqian',
        name: '回迁',
        open: false,
      }, {
        id: 'qita',
        name: '其他',
        open: false,
      },{
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
    resData:{
    },
    basic: {
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
      mianji: 0,
      danjia: '',
      sum: 0
    },
    xiezi: {
      array: [],
      index: 0,
      biaozhun: {},
      mianji: 0,
      danjia: '',
      sum: 0
    },
    gongyu: {
      array: [],
      index: 0,
      biaozhun: {},
      mianji: 0,
      danjia: '',
      sum: 0
    },
    huiqian: {
      mianji: 0,
      danjia: '',
      sum: 0
    },
    qita: {
      mianji: 0,
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
      renfang_count: 0,
      renfang_danjia: '',
      renfang_sum: 0,
      chucang_count: 0,
      chucang_danjia: '',
      chucang_sum: 0,
    },
    tiaozheng: {
      zhuzhai: '',
      chanpin: '',
    },
    heji: {
      mianji: 0,
      sum: 0,
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
    g.biaozhun = g.array[d.index];
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
  //其他调整
  qitaZhuZhaiInput: function (e) {
    var qt = this.data.tiaozheng;
    qt.zhuzhai = e.detail.value;
    this.setData({
      tiaozheng: qt
    });
    dataCompute(this)
  },
   qitaChanPinInput: function (e) {
    var qt = this.data.tiaozheng;
    qt.chanpin = e.detail.value;
    this.setData({
      tiaozheng: qt
    });
    dataCompute(this)
  },
  //合计



})
function dataCompute(that) {
  var res = that.data.resData;

  var b = that.data.basic;
  var z = that.data.zhuzhai;
  var ds = that.data.dishang;
  var xz = that.data.xiezi;
  var gy = that.data.gongyu;
  var dx = that.data.dixia;

  ds.mianji = b.jirong * ds.peibi.value /100;
  z.mianji = ( b.jirong - ds.mianji - xz.mianji -gy.mianji ) *1.03;
  z.sum = z.mianji * z.danjia / 10000;

  var 住宅人防车位面积 = z.mianji * 0.08;
  var 住宅人防车位个数 = 住宅人防车位面积 / res.area_defense;
  住宅人防车位个数 = parseInt(住宅人防车位个数 + 0.5);
 
  var 住宅产权车位个数 = z.mianji / z.biaozhun.value * dx.peibi.value * 0.01 -住宅人防车位个数;
  住宅产权车位个数 = parseInt(住宅产权车位个数 + 0.5);
  var 住宅产权车位面积 = 住宅产权车位个数 * res.area_parking * (100 -res.ratio_parking_area) / 100;

  var 商业人防车位面积 = (ds.mianji + xz.mianji + gy.mianji ) * 0.08;
  var 商业人防车位个数 = parseInt(商业人防车位面积 / res.area_defense +0.5);

  var 商业产权车位个数 = (gy.mianji + ds.mianji + xz.mianji) / 100 - 商业人防车位个数;
  商业产权车位个数 = parseInt(商业产权车位个数 + 0.5);
  var 商业产权车位面积 = 商业产权车位个数 * res.area_parking;

  var 住宅储藏室面积 = 0;
  if (b.rongji > 2.4) {
    住宅储藏室面积 = 2* z.mianji / b.jirong * b.zhandi * b.midu * 0.01;
  }else{
    住宅储藏室面积 = 1* z.mianji / b.jirong * b.zhandi * b.midu * 0.01;
  }


  dx.chanquan_count = 住宅产权车位个数 + 商业产权车位个数;

  if (z.biaozhun.name == '尊享系') {
     dx.chanquan_danjia = '35';
  }else{
     dx.chanquan_danjia = '30';
  }
  dx.chanquan_sum = dx.chanquan_count * dx.chanquan_danjia;

  dx.renfang_count = 住宅人防车位个数 + 商业人防车位个数;
  if (z.biaozhun.name == '尊享系') {
     dx.renfang_danjia = '32';
  }else{
     dx.renfang_danjia = '27';
  }

  dx.renfang_sum = dx.renfang_count * dx.renfang_danjia;

  dx.chucang_count = 住宅储藏室面积;
  console.log("住宅储藏室面积-->"+ dx.chucang_count );
  if (isNaN(dx.chucang_count)) {
      dx.chucang_count = 0;
  }
  if (z.biaozhun.name == '尊享系') {
     dx.chucang_danjia = '7000';
  }else{
     dx.chucang_danjia = '6000';
  }
  dx.chucang_sum = dx.chucang_count * dx.chucang_danjia/10000;

  var hq = that.data.huiqian;
  var qt = that.data.qita;
  
  var hj = that.data.heji;
  console.log("住宅储藏室面积2-->"+ dx.chucang_count );

  hj.mianji = z.mianji + ds.mianji + xz.mianji + gy.mianji + hq.mianji + qt.mianji  + dx.chanquan_count + dx.renfang_count + dx.chucang_count;;
  hj.sum = z.sum + ds.sum + xz.sum + gy.sum + hq.sum + qt.sum  + dx.chanquan_sum+ dx.renfang_sum + dx.chucang_sum;
  that.setData({
    dishang:ds,
    zhuzhai:z,
    dixia:dx,
    heji:hj,
  });
     
}



function requestData(that) {
  wx.request({
    url: 'https://land.guanweiming.com/preset',
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function (res) {
      // success
  // console.log(res.data.data);
      var res = res.data.data;
      var z1 = that.data.zhuzhai;
      z1.array = res.standard_house;
      z1.biaozhun = z1.array[z1.index];
      console.log(z1.array);
      var d = that.data.dishang;
      d.array =res.ratio_product;
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

      that.setData({
        resData:res,
        zhuzhai: z1,
        dishang: d,
        xiezi:x,
        gongyu:g,
        dixia:dx,
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



