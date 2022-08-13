(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a916162"],{6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),r("td",[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.isAdmin?"admin":"user"))]),r("td",[t.currentUser.id!==e.id?r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v(" "+t._s(e.isAdmin?"set as user":"set as admin")+" ")]):t._e()])])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v(" # ")]),r("th",{attrs:{scope:"col"}},[t._v(" Email ")]),r("th",{attrs:{scope:"col"}},[t._v(" Role ")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v(" Action ")])])])}],s=r("1da1"),i=r("5530"),c=(r("96cf"),r("d9e2"),r("d3b7"),r("25f0"),r("d81d"),r("e04c")),u=r("be6c"),o=r("2fa3"),d=r("2f62"),l={components:{AdminNav:c["a"]},data:function(){return{users:[]}},computed:Object(i["a"])({},Object(d["b"])(["currentUser"])),created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].users.get();case 3:if(r=e.sent,n=r.data,"error"!==n.status){e.next=7;break}throw new Error(n.message);case 7:t.users=n.users,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0.message),o["a"].fire({icon:"error",title:"無法取得會員資料，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},toggleUserRole:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.userId,a=t.isAdmin,r.prev=1,r.next=4,u["a"].users.update({userId:n,isAdmin:(!a).toString()});case 4:if(s=r.sent,c=s.data,"error"!==c.status){r.next=8;break}throw new Error(c.message);case 8:e.users=e.users.map((function(t){return t.id===n?Object(i["a"])(Object(i["a"])({},t),{},{isAdmin:!t.isAdmin}):t})),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](1),console.error(r.t0.message),o["a"].fire({icon:"error",title:"無法更新會員角色，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}}},m=l,f=r("2877"),v=Object(f["a"])(m,n,a,!1,null,null,null);e["default"]=v.exports},be6c:function(t,e,r){"use strict";r("b0c0");var n=r("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,r=t.name;return n["b"].put("/admin/categories/".concat(e),{name:r})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))}},restaurants:{get:function(){return n["b"].get("/admin/restaurants")},getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,r=t.formData;return n["b"].put("/admin/restaurants/".concat(e),r)},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))}},users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,r=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:r})}}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),i=s("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],s=r("2877"),i={},c=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4a916162.135f48a4.js.map