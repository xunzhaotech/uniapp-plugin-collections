(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0597":function(e,n,i){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},c=[];i.d(n,"a",function(){return t}),i.d(n,"b",function(){return c})},2221:function(e,n,i){"use strict";i.r(n);var t=i("0597"),c=i("e5e8");for(var s in c)"default"!==s&&function(e){i.d(n,e,function(){return c[e]})}(s);var o=i("2877"),a=Object(o["a"])(c["default"],t["a"],t["b"],!1,null,null,null);n["default"]=a.exports},3135:function(e,n,i){"use strict";(function(e){i("4b3f"),i("921b");t(i("66fd"));var n=t(i("2221"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("6e42")["createPage"])},"667c":function(e,n,i){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i("e07c"),s=i("aa2d"),o={data:function(){return{devices:[],currDev:null,connId:"",piaojuText:""}},onLoad:function(){},methods:{destroyed:function(){console.log(e("destroyed----------"," at pages/index/index.vue:33")),""!=this.connId&&t.closeBLEConnection({deviceId:this.connId,success:function(n){console.log(e(n," at pages/index/index.vue:38"))}})},searchBle:function(){var n=this;console.log(e("initBule"," at pages/index/index.vue:46")),t.openBluetoothAdapter({success:function(i){console.log(e("打开 蓝牙模块"," at pages/index/index.vue:49")),console.log(e(i," at pages/index/index.vue:50")),n.onDevice(),t.getBluetoothAdapterState({success:function(i){console.log(e(i," at pages/index/index.vue:54")),i.available?(i.discovering&&n.stopFindBule(),console.log(e("开始搜寻附近的蓝牙外围设备"," at pages/index/index.vue:61")),t.startBluetoothDevicesDiscovery({success:function(n){console.log(e(n," at pages/index/index.vue:64"))}})):console.log(e("本机蓝牙不可用"," at pages/index/index.vue:69"))}})}})},onDevice:function(){console.log(e("监听寻找到新设备的事件---------------"," at pages/index/index.vue:77"));var n=this;t.onBluetoothDeviceFound(function(i){console.log(e("--------------new-----------------------"+JSON.stringify(i)," at pages/index/index.vue:81"));var t=JSON.parse(JSON.stringify(i));console.log(e(t.devices[0].name+"  "+t.devices[0].deviceId," at pages/index/index.vue:83"));var c=t.devices[0].name;if("未知设备"!=c){var s=t.devices[0].deviceId;n.devices.push({name:c,deviceId:s,services:[]})}})},stopFindBule:function(){console.log(e("停止搜寻附近的蓝牙外围设备---------------"," at pages/index/index.vue:101")),t.stopBluetoothDevicesDiscovery({success:function(n){console.log(e(n," at pages/index/index.vue:104"))}})},onConn:function(n){var i=this;console.log(e("连接蓝牙---------------"+n.deviceId," at pages/index/index.vue:110"));var c=n.deviceId;t.createBLEConnection({deviceId:c,complete:function(t){"createBLEConnection:ok"==t.errMsg?(console.log(e("连接蓝牙-["+n.name+"]--成功"," at pages/index/index.vue:116")),i.connId=c,i.currDev=n,setTimeout(function(){i.getBLEServices(c)},2e3)):console.log(e(t," at pages/index/index.vue:123")),i.stopFindBule()}})},getBLEServices:function(n){var i=this,c=n;console.log(e("获取蓝牙设备所有服务(service)。---------------"," at pages/index/index.vue:135")),t.getBLEDeviceServices({deviceId:c,complete:function(n){console.log(e(n," at pages/index/index.vue:141"));for(var s=function(){console.log(e(n.services[o].uuid," at pages/index/index.vue:145"));var s=n.services[o].uuid;t.getBLEDeviceCharacteristics({deviceId:c,serviceId:s,success:function(n){var t=JSON.parse(JSON.stringify(n));console.log(e("deviceId = ["+c+"]  serviceId = ["+s+"]"," at pages/index/index.vue:155"));for(var o=0;o<t.characteristics.length;o++)if(1==t.characteristics[o].properties.write){var a=t.characteristics[o].uuid;for(var r in console.log(e(" deviceId = ["+c+"]  serviceId = ["+s+"] characteristics=["+a," at pages/index/index.vue:159")),i.devices)if(i.devices[r].deviceId==c){i.devices[r].services.push({serviceId:s,characteristicId:a});break}console.log(e(JSON.stringify(i.devices)," at pages/index/index.vue:172"))}}})},o=0;o<n.services.length;o++)s()},fail:function(n){console.log(e(n," at pages/index/index.vue:185"))}})},senBlData:function(n,i,c,s){console.log(e("************deviceId = ["+n+"]  serviceId = ["+i+"] characteristics=["+c+"]"," at pages/index/index.vue:191"));var o=Array.from(s);function a(n,i){for(var t={},c=0,s=0;s<n.length;s+=i)t[c]=n.slice(s,s+i),c++;return console.log(e(t," at pages/index/index.vue:200")),t}var r=a(o,20);function d(s,o){var a=s[o];if("undefined"!=typeof a){console.log(e("第【"+o+"】次写数据"+a," at pages/index/index.vue:210"));for(var r=new ArrayBuffer(a.length),u=new DataView(r),v=0;v<a.length;v++)u.setUint8(v,a[v]);t.writeBLECharacteristicValue({deviceId:n,serviceId:i,characteristicId:c,value:r,success:function(e){d(s,o+1)}})}}var u=0;d(r,u)},senBleLabel:function(){var e=this.currDev.deviceId,n=this.currDev.services[0].serviceId,i=this.currDev.services[0].characteristicId,t=c.jpPrinter.createNew();t.setSize(40,30),t.setGap(2),t.setCls(),t.setText(50,10,"TSS24.BF2",1,1,"打印测试"),t.setQR(50,50,"L",5,"A","977767937@qq.com"),t.setPagePrint(),this.senBlData(e,n,i,t.getData())},senBleLabel2:function(){var e=this.currDev.deviceId,n=this.currDev.services[0].serviceId,i=this.currDev.services[0].characteristicId,t=s.jpPrinter.createNew();t.init(),t.setText(this.piaojuText),t.setPrintAndFeedRow(1),this.senBlData(e,n,i,t.getData())}}};n.default=o}).call(this,i("0de9")["default"],i("6e42")["default"])},e5e8:function(e,n,i){"use strict";i.r(n);var t=i("667c"),c=i.n(t);for(var s in t)"default"!==s&&function(e){i.d(n,e,function(){return t[e]})}(s);n["default"]=c.a}},[["3135","common/runtime","common/vendor"]]]);