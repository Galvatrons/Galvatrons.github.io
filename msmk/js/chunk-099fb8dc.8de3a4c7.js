(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-099fb8dc"],{"52a8":function(t,l,e){},a67d:function(t,l,e){"use strict";e.r(l);var n=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("header",[e("span",[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(l){return t.lwh_go()}}})],1),e("p",[t._v("信息填写")]),e("span",{on:{click:t.lwh_save}},[t._v("保存")])]),e("div",{staticClass:"lwh_main"},["昵称"==this.$route.query.tit?e("div",[e("div",{staticClass:"lwh_cont"},[t._v(" "+t._s(t.lwh_val)+" ")])]):t._e(),"性别"==this.$route.query.tit?e("div",t._l(t.lwh_sixValue,(function(l,n){return e("div",{key:n,staticClass:"lwh_cont",class:{lwh_sixDef:n==t.lwh_sixIndex},on:{click:function(e){return t.lwh_sixBtn(l,n)}}},[t._v(" "+t._s(l)+" ")])})),0):t._e(),"学科"==this.$route.query.tit?e("div",t._l(t.lwh_grade,(function(l,n){return e("div",{key:n,staticClass:"lwh_cont"},[e("van-checkbox",{attrs:{shape:"square"},on:{click:t.lwh_gradeBtn},model:{value:l.flag,callback:function(e){t.$set(l,"flag",e)},expression:"item.flag"}},[t._v(t._s(l.cont))])],1)})),0):t._e()])])},s=[],i={name:"",components:{},props:{},data(){return{lwh_val:null,lwh_sixcont:null,lwh_sixValue:["男","女"],lwh_sixIndex:null,lwh_grade:[{cont:"语文",flag:!1},{cont:"数学",flag:!1},{cont:"英语",flag:!1},{cont:"物理",flag:!1},{cont:"化学",flag:!1},{cont:"生物",flag:!1},{cont:"信息技术",flag:!1}]}},created(){},mounted(){this.lwh_btn()},update(){},methods:{lwh_btn(){console.log(this.$route.query),this.lwh_val=this.$route.query.item},lwh_go(){this.$router.go(-1)},lwh_sixBtn(t,l){this.lwh_sixIndex=l,this.lwh_sixcont=t},lwh_gradeBtn(){let t=this.lwh_grade.filter(t=>t.flag);console.log(t),this.lwh_sixcont=t.map(t=>{if(t.flag)return t.cont}).join(","),console.log(this.lwh_sixcont)},lwh_save(){this.$store.commit("lwh_saveBtn",{type:this.$route.query.tit,value:this.lwh_sixcont}),this.$router.go(-1)}},filter:{},computed:{},watch:{}},o=i,a=(e("de31"),e("2877")),c=Object(a["a"])(o,n,s,!1,null,"395b1045",null);l["default"]=c.exports},de31:function(t,l,e){"use strict";var n=e("52a8"),s=e.n(n);s.a}}]);
//# sourceMappingURL=chunk-099fb8dc.8de3a4c7.js.map