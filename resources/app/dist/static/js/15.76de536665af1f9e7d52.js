webpackJsonp([15],{"/GZJ":function(t,e){},NKer:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("CaOM"),o={name:"auth",data:function(){return{tablePageTotal:1,tableData:[],tableFormData:{user_id:Object(i.a)().config.userId,build_id:this.$BuildId,page:1},newDialogVisible:!1,newLoading:!1,newFormData:{user_id:Object(i.a)().config.userId,build_id:this.$BuildId,add_role:{role_name:"",role_state:"1",summary:""}},editDialogVisible:!1,editLoading:!1,editFormData:{user_id:Object(i.a)().config.userId,build_id:this.$BuildId,edit_role:{role_id:"",role_name:"",summary:"",role_state:""}},authList:Object(i.a)().list.auth,authTreeKeys:[],authDialogVisiable:!1,authLoading:!1,authFormData:{user_id:Object(i.a)().config.userId,build_id:this.$BuildId,edit_roleRight:{role_id:"",role_bigRight:"",role_smallRight:"",role_authorize:""}},authTreeProps:{children:"children",label:"label"},deleteFormData:{user_id:Object(i.a)().config.userId,build_id:this.$BuildId,delete_role:{role_id:"",role_name:""}}}},mounted:function(){this.tableUpdate()},methods:{tableUpdate:function(){var t=this;this.$http({method:"post",url:this.$Api+"/GOSSystem/getRoleInfo",params:this.tableFormData}).then(function(e){1===e.data.result&&(t.tableData=e.data.role_list,t.tablePageTotal=e.data.total_page)}).catch(function(e){t.$notify({title:"ERROR",message:""+e,duration:2e3,type:"error"})})},tablePageChange:function(t){this.tableUpdate()},newDialog:function(){this.newDialogVisible=!0,this.newFormData.add_role={role_name:"",role_state:"1",summary:""}},newRole:function(){var t=this;this.newFormData.add_role.role_name?(this.newLoading=!0,this.$http({method:"post",url:this.$Api+"/GOSSystem/addRoleInfo",params:this.newFormData}).then(function(e){t.newLoading=!1,1===e.data.result?(t.$notify({title:"成功",message:e.data.msg,duration:2e3,type:"success"}),t.newDialogVisible=!1,t.tableUpdate()):t.$notify({title:"添加失败",message:e.data.msg,duration:2e3,type:"error"})}).catch(function(e){t.newLoading=!1,t.$notify({title:"ERROR",message:""+e,duration:2e3,type:"error"})})):this.$message({title:"注意",message:"角色名称不能为空",duration:2e3,type:"warning"})},editDialog:function(t,e){e.cancelBubble=!0,this.editDialogVisible=!0,this.editFormData.edit_role={role_id:t.role_id,role_name:t.role_name,role_state:t.role_state,summary:t.summary}},edit:function(){var t=this;this.editFormData.edit_role.role_name?(this.editLoading=!0,this.$http({method:"post",url:this.$Api+"/GOSSystem/editRoleInfo",params:this.editFormData}).then(function(e){t.editLoading=!1,1===e.data.result?(t.editLoading=!1,t.editDialogVisible=!1,t.$notify({title:"成功",message:e.data.msg,duration:2e3,type:"success"}),t.tableUpdate()):t.$notify({title:"编辑失败",message:e.data.msg,duration:2e3,type:"error"})}).catch(function(e){t.editLoading=!1,t.$notify({title:"ERROR",message:""+e,duration:2e3,type:"error"})})):this.$message({title:"注意",message:"角色名称不能为空",duration:2e3,type:"warning"})},authDialog:function(t,e){var a=t.role_bigRight,i=t.role_smallRight,o=0;for(e.cancelBubble=!0,this.authDialogVisiable=!0,this.authTreeKeys=[],this.authFormData.edit_roleRight={role_id:t.role_id,role_bigRight:t.role_bigRight,role_smallRight:t.role_smallRight,role_authorize:1};a;)1&a&&11!=o&&this.authTreeKeys.push(o),o++,a>>=1;for(o=0;i;)1&i&&this.authTreeKeys.push(o+1e3),o++,i>>=1;void 0!==this.$refs.authListTree&&this.$refs.authListTree.setCheckedKeys(this.authTreeKeys)},authTreeCheck:function(t,e){t.id>=1e3?e?this.authFormData.edit_roleRight.role_smallRight|=1<<t.id-1e3:this.authFormData.edit_roleRight.role_smallRight&=~(1<<t.id-1e3):e?this.authFormData.edit_roleRight.role_bigRight|=1<<t.id:this.authFormData.edit_roleRight.role_bigRight&=~(1<<t.id)},auth:function(){var t=this;this.authFormData.edit_roleRight.role_smallRight?this.authFormData.edit_roleRight.role_bigRight|=2048:this.authFormData.edit_roleRight.role_bigRight&=-2049,this.authLoading=!0,this.$http({method:"post",url:this.$Api+"/GOSSystem/editRoleRight",params:this.authFormData}).then(function(e){t.authLoading=!1,1===e.data.result?(t.authDialogVisiable=!1,t.$notify({title:"成功",message:e.data.msg,duration:2e3,type:"success"}),t.tableUpdate()):t.$notify({title:"编辑失败",message:e.data.msg,duration:2e3,type:"error"})}).catch(function(e){t.authLoading=!1,t.$notify({title:"ERROR",message:""+e,duration:2e3,type:"error"})})},del:function(t,e){var a=this;e.cancelBubble=!0,this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.deleteFormData.delete_role={role_id:t.role_id,role_name:t.role_name},a.$http({method:"post",url:a.$Api+"/GOSSystem/deleteRoleInfo",params:a.deleteFormData}).then(function(t){1===t.data.result?(a.$notify({type:"success",title:"成功!",message:t.data.msg,duration:2e3}),a.tableUpdate()):a.$notify({type:"error",title:"删除失败",message:t.data.msg,duration:2e3})}).catch(function(t){a.$notify({title:"ERROR",message:""+t,duration:2e3,type:"error"})})}).catch(function(){})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("div",{staticClass:"main-padding stor-var"},[a("div",{staticClass:"auth-row"},[a("p",{staticClass:"back-title"},[t._m(0),t._v(" "),a("el-button",{attrs:{round:"",icon:"el-icon-plus",size:"small"},on:{click:t.newDialog}},[t._v("新增记录")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"100%"}},[a("el-table-column",{attrs:{label:"编号",prop:"role_id",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"role_name",label:"角色名称",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"summary",label:"角色描述",align:"center",width:""}}),t._v(" "),a("el-table-column",{attrs:{label:"角色状态",align:"center",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.role_state?a("span",{staticStyle:{color:"red"}},[t._v("已禁用")]):1==e.row.role_state?a("span",[t._v("已启用")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"授权状态",align:"center",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.role_authorize?a("span",{staticStyle:{color:"red"}},[t._v("未授权")]):1==e.row.role_authorize?a("span",[t._v("已授权")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"280px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){t.editDialog(e.row,a)}}},[a("i",{staticClass:"back-i-bulr"}),t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",round:""},on:{click:function(a){t.authDialog(e.row,a)}}},[a("i",{staticClass:"back-i-yellow"}),t._v("授权")]),t._v(" "),a("el-button",{attrs:{size:"mini",round:"",type:"info"},on:{click:function(a){t.del(e.row,a)}}},[a("i",{staticClass:"back-i-red"}),t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.tableFormData.page,"page-count":t.tablePageTotal,layout:"prev, pager, next, slot, jumper"},on:{"current-change":t.tablePageChange,"update:currentPage":function(e){t.$set(t.tableFormData,"page",e)}}},[a("span",{staticClass:"el-pagination__total page-count-padding"},[t._v("共"+t._s(t.tablePageTotal)+"页")])])],1)],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"新增角色","append-to-body":!0,"lock-scroll":!0,modal:!0,"close-on-click-modal":!1,visible:t.newDialogVisible,width:"30%",top:"30vh"},on:{"update:visible":function(e){t.newDialogVisible=e}}},[a("el-form",{ref:"newFormData",attrs:{model:t.newFormData,"label-width":"80px"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{model:{value:t.newFormData.add_role.role_name,callback:function(e){t.$set(t.newFormData.add_role,"role_name",e)},expression:"newFormData.add_role.role_name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.newFormData.add_role.summary,callback:function(e){t.$set(t.newFormData.add_role,"summary",e)},expression:"newFormData.add_role.summary"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色状态"}},[a("el-radio-group",{model:{value:t.newFormData.add_role.role_state,callback:function(e){t.$set(t.newFormData.add_role,"role_state",e)},expression:"newFormData.add_role.role_state"}},[a("el-radio",{attrs:{label:"1"}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:"0"}},[t._v("禁用")])],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.newDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.newLoading,size:"small",round:""},on:{click:t.newRole}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"角色编辑","append-to-body":!0,"lock-scroll":!0,modal:!0,"close-on-click-modal":!1,visible:t.editDialogVisible,width:"30%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[a("el-form",{ref:"editFormData",attrs:{model:t.editFormData,"label-width":"80px"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{model:{value:t.editFormData.edit_role.role_name,callback:function(e){t.$set(t.editFormData.edit_role,"role_name",e)},expression:"editFormData.edit_role.role_name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.editFormData.edit_role.summary,callback:function(e){t.$set(t.editFormData.edit_role,"summary",e)},expression:"editFormData.edit_role.summary"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"角色状态"}},[a("el-radio-group",{model:{value:t.editFormData.edit_role.role_state,callback:function(e){t.$set(t.editFormData.edit_role,"role_state",e)},expression:"editFormData.edit_role.role_state"}},[a("el-radio",{attrs:{label:1}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:0}},[t._v("禁用")])],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{right:""},on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.editLoading},on:{click:t.edit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"角色授权","append-to-body":!0,"lock-scroll":!0,modal:!0,"close-on-click-modal":!1,visible:t.authDialogVisiable,width:"30%"},on:{"update:visible":function(e){t.authDialogVisiable=e}}},[a("p",[t._v("菜单授权")]),t._v(" "),a("el-tree",{ref:"authListTree",attrs:{data:t.authList,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"","default-checked-keys":t.authTreeKeys,props:t.authTreeProps},on:{"check-change":t.authTreeCheck}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{right:""},on:{click:function(e){t.authDialogVisiable=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.authLoading},on:{click:t.auth}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i"),this._v("角色信息表")])}]};var r=a("Z0/y")(o,l,!1,function(t){a("/GZJ")},"data-v-993629c8",null);e.default=r.exports}});
//# sourceMappingURL=15.76de536665af1f9e7d52.js.map