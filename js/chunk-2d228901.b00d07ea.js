(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" Submit ")])])])},i=[],n=a("1da1"),s=a("5530"),o=(a("96cf"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("d9e2"),a("2f62")),u=a("4cce"),c=a("2fa3"),m={data:function(){return{id:0,image:"",name:"",email:""}},computed:Object(s["a"])({},Object(o["b"])(["currentUser"])),watch:{currentUser:function(e){if(-1!==e.id){var t=this.$route.params.id;this.setUser(t)}}},created:function(){if(-1!==this.currentUser.id){var e=this.$route.params.id;this.setUser(e)}},beforeRouteUpdate:function(e,t,a){if(-1!==this.currentUser.id){var r=e.params.id;this.setUser(r),a()}},methods:{setUser:function(e){var t=this.currentUser,a=t.id,r=t.image,i=t.name,n=t.email;a.toString()===e.toString()?(this.id=a,this.name=i,this.email=n,this.image=r):this.$router.push({name:"not-found"})},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.user.image="";else{var a=window.URL.createObjectURL(t[0]);this.user.image=a}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,i,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,t.name){a.next=4;break}return c["a"].fire({icon:"warning",title:"您尚未填寫姓名"}),a.abrupt("return");case 4:return r=e.target,i=new FormData(r),a.next=8,u["a"].update({userId:t.id,formData:i});case 8:if(n=a.sent,s=n.data,"error"!==s.status){a.next=12;break}throw new Error(s.message);case 12:t.$router.push({name:"user",params:{id:t.id}}),a.next=19;break;case 15:a.prev=15,a.t0=a["catch"](0),console.error(a.t0.message),c["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 19:case"end":return a.stop()}}),a,null,[[0,15]])})))()}}},l=m,d=a("2877"),f=Object(d["a"])(l,r,i,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d228901.b00d07ea.js.map