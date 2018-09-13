webpackJsonp([16],{PtB5:function(e,t){},v8Ul:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("fjIZ"),l=a("TgUw"),i=a("CaOM"),s={name:"the-car-log",data:function(){var e=this;return{tableData:[],dataTimePickerOptions1:{disabledDate:function(t){var a=!1;return e.userQuery.end_time&&(a=t.getTime()>new Date(e.userQuery.end_time)),a||t.getTime()>new Date}},dataTimePickerOptions2:{disabledDate:function(t){var a=!1;return e.userQuery.start_time&&(a=t.getTime()<new Date(e.userQuery.start_time)),a||t.getTime()>new Date}},userQuery:{build_id:this.$BuildId,car_type:0,floor_id:0,area_id:0,start_time:0,end_time:0,page:1},floorAreasQuery:{build_id:this.$BuildId},startTime:null,endTime:null,endTimeDisable:!1,floorSelectedIndex:0,areaSelectedIndex:0,tablePageTotal:0,tablePageSize:Object(i.a)().config.pageItemSize,tableExportName:Object(i.a)().config.tableExportName,tableDateFormat:Object(i.a)().config.tableDateFormat,tableExportDateFormat:Object(i.a)().config.tableExportDateFormat,tableDisplayDateFormat:Object(i.a)().config.tableDisplayDateFormat,htmlDateFormat:Object(i.a)().config.htmlDateFormat,tableFieldList:{carTypes:Object(i.a)().list.carTypes,floorAreas:[{floor_name:"不限",area_list:[{area_name:"不限"}]}]},tableFiledArray:{sheetHeaderTitles:Object(i.a)().list.sheetHeaderTitles,sheetHeaderFields:Object(i.a)().list.sheetHeaderFields},requestUrl:{tableDataUrl:Object(i.a)().url.stopDailyLog,floorAreaListUrl:Object(i.a)().url.floorAreaList}}},created:function(){var e=new Date,t=new Date;e.setMilliseconds(0),e.setSeconds(0),e.setMinutes(0),e.setHours(0),this.startTime=Object(r.a)(e,this.tableDateFormat),this.endTime=Object(r.a)(t,this.tableDateFormat),this.getFloorAreaList()},mounted:function(){},watch:{startTime:function(e){this.userQuery.start_time=e},endTime:function(e){this.userQuery.end_time=e}},computed:{floorSelect:{get:function(){return this.floorSelectedIndex},set:function(e){e!=this.floorSelectedIndex&&(this.userQuery.floor_id=this.tableFieldList.floorAreas[e].floor_id,this.floorSelectedIndex=e,this.areaSelectedIndex=0,this.userQuery.area_id=this.tableFieldList.floorAreas[e].area_list[0].area_id)}},areaSelect:{get:function(){return this.areaSelectedIndex},set:function(e){e!=this.areaSelectedIndex&&(this.userQuery.area_id=this.tableFieldList.floorAreas[this.floorSelectedIndex].area_list[e].area_id,this.areaSelectedIndex=e)}}},methods:{search:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.queryData()})},exports:function(){var e=this,t=new FormData;for(var a in this.userQuery.page=0,this.userQuery)t.append(a,this.userQuery[a]);this.$http.post(this.$Api+this.requestUrl.tableDataUrl,t,{dataType:"json"}).then(function(t){if(200==t.status){var a=t.data;if(void 0!==a.result&&1==a.result){var i=a.record_list,s=[],o=e.tableExportName+Object(r.a)(new Date,e.tableExportDateFormat);for(var n in i)s[n]={car_type:e.tableFieldList.carTypes[i[n].car_type].car_type_name,in_time:Object(r.a)(i[n].in_time,e.tableDateFormat),out_time:Object(r.a)(i[n].out_time,e.tableDateFormat),stop_time:e.secondTimeConvert(i[n].stop_time),floor_name:i[n].floor_name,area_name:i[n].area_name,carpos_name:i[n].carpos_name,car_number:i[n].car_number};Object(l.a)(e,e.tableFiledArray.sheetHeaderTitles,e.tableFiledArray.sheetHeaderFields,s,o)}}else e.$message({message:"导出getStopDailyLog失败："+t.status,duration:2e3,type:"error"})}).catch(function(t){e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})},handleCurrentChange:function(e){this.queryData()},secondTimeConvert:function(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),r=e%3600%60;return(t=t<10?"0"+t:t)+":"+(a=a<10?"0"+a:a)+":"+(r=r<10?"0"+r:r)},formatTime:function(e,t){return Object(r.a)(e,this.tableDateFormat).split(" ")[t]},formatMinute:function(e,t,a){return this.secondTimeConvert(a)},getFloorAreaList:function(){var e=this,t=new FormData;for(var a in this.floorAreasQuery)t.append(a,this.floorAreasQuery[a]);this.$http.post(this.$Api+this.requestUrl.floorAreaListUrl,t,{dataType:"json"}).then(function(t){if(200==t.status){var a=t.data;if(void 0!==a.result&&1==a.result){var r=Object(i.a)().util.floorAreaListAppendNull(a.floor_list);e.tableFieldList.floorAreas=r,e.userQuery.floor_id=r[0].floor_id,e.userQuery.area_id=r[0].area_list[0].area_id,e.queryData()}}else e.$message({message:"获取floorAreaList失败："+t.status,duration:2e3,type:"error"})}).catch(function(t){e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})},queryData:function(){var e=this,t=new FormData;for(var a in this.userQuery)t.append(a,this.userQuery[a]);this.tableData=[],this.$http.post(this.$Api+this.requestUrl.tableDataUrl,t,{dataType:"json"}).then(function(t){if(200==t.status){var a=t.data;void 0!==a.result&&1==a.result&&(e.tableData=a.record_list,e.tablePageTotal=a.total_page)}else e.$message({message:"获取getStopDailyLog失败："+t.status,duration:2e3,type:"error"})}).catch(function(t){e.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"the-car-query"},[a("div",{staticClass:"state-from",staticStyle:{display:"flex"}},[a("el-form",{ref:"userQuery",attrs:{model:e.userQuery,"label-width":"80px"}},[a("el-form-item",{staticStyle:{width:"200px",float:"left"},attrs:{label:"停车类型"}},[a("el-col",{attrs:{span:20}},[a("el-select",{staticClass:"input-round",attrs:{size:"small"},model:{value:e.userQuery.car_type,callback:function(t){e.$set(e.userQuery,"car_type",t)},expression:"userQuery.car_type"}},e._l(e.tableFieldList.carTypes,function(e){return a("el-option",{attrs:{label:e.car_type_name,value:e.car_type_id}})}))],1)],1),e._v(" "),a("el-form-item",{staticClass:"data-item",staticStyle:{width:"450px",float:"left"},attrs:{label:"停车时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticClass:"input-round",staticStyle:{width:"100%"},attrs:{editable:!1,size:"small",type:"datetime",placeholder:"开始时间",format:e.tableDisplayDateFormat,"value-format":e.htmlDateFormat,"picker-options":e.dataTimePickerOptions1,"prefix-icon":"el-icon-date",clearable:!1},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1),e._v(" "),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:1}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticClass:"input-round",staticStyle:{width:"100%"},attrs:{disabled:e.endTimeDisable,editable:!1,size:"small",type:"datetime",placeholder:"结束时间",format:e.tableDisplayDateFormat,"value-format":e.htmlDateFormat,"picker-options":e.dataTimePickerOptions2,"prefix-icon":"el-icon-date",clearable:!1},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"data-item",staticStyle:{float:"left"},attrs:{label:"车区"}},[a("el-col",{attrs:{span:8}},[a("el-select",{staticClass:"input-round",staticStyle:{"border-radius":"25px"},attrs:{size:"small",placeholder:"请选择楼层"},model:{value:e.floorSelect,callback:function(t){e.floorSelect=t},expression:"floorSelect"}},e._l(e.tableFieldList.floorAreas,function(e,t){return a("el-option",{attrs:{label:e.floor_name,value:t}})}))],1),e._v(" "),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:1}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-select",{staticClass:"input-round",attrs:{size:"small",placeholder:"请选择区域"},model:{value:e.areaSelect,callback:function(t){e.areaSelect=t},expression:"areaSelect"}},e._l(e.tableFieldList.floorAreas[e.floorSelectedIndex].area_list,function(e,t){return a("el-option",{attrs:{label:e.area_name,value:t}})}))],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search",round:""},on:{click:function(t){e.search("userQuery")}}}),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small",round:""},on:{click:e.exports}},[e._v("导出")])],1)],1)],1)]),e._v(" "),a("div",{staticClass:"main-car-padding"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"100%"}},[a("el-table-column",{attrs:{align:"center",label:"停车类型",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.car_type?a("span",[e._v("正常")]):2==t.row.car_type?a("span",{staticStyle:{color:"red"}},[e._v("超时车")]):3==t.row.car_type?a("span",{staticStyle:{color:"red"}},[e._v("过夜车")]):4==t.row.car_type?a("span",{staticStyle:{color:"red"}},[e._v("违停车")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"进入车辆时间",align:"center",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"time-cell-span"},[e._v(e._s(e.formatTime(t.row.in_time,0)))]),e._v(" "),a("span",{staticClass:"time-cell-span"},[e._v(e._s(e.formatTime(t.row.in_time,1)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"驶出车辆时间",align:"center",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"time-cell-span"},[e._v(e._s(e.formatTime(t.row.out_time,0)))]),e._v(" "),a("span",{staticClass:"time-cell-span"},[e._v(e._s(e.formatTime(t.row.out_time,1)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{formatter:e.formatMinute,prop:"stop_time",label:"停放时长",align:"center",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"floor_name",label:"楼层",align:"center",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"area_name",label:"车区",align:"center",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"carpos_name",label:"车位",align:"center",width:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"car_number",label:"车牌号",align:"center",width:""}})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.userQuery.page,"page-size":e.tablePageSize,"page-count":e.tablePageTotal,layout:"prev, pager, next, slot, jumper"},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.userQuery,"page",t)}}},[a("span",{staticClass:"el-pagination__total page-count-padding"},[e._v("共"+e._s(e.tablePageTotal)+"页")])])],1)],1)])},staticRenderFns:[]};var n=a("vSla")(s,o,!1,function(e){a("PtB5")},"data-v-e888fcae",null);t.default=n.exports}});
//# sourceMappingURL=16.6f71bf39a4b8f5b80e77.js.map