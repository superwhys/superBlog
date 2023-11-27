"use strict";(self["webpackChunksuperBlog"]=self["webpackChunksuperBlog"]||[]).push([[252],{2597:function(t,e,i){i.d(e,{Z:function(){return h}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"baseRight"},[e("router-link",{staticClass:"baseRightTitle",attrs:{to:t.toEndPoint}},[t._t("rightModuleTitle")],2),e("div",{staticClass:"baseRightMain"},[t._t("rightModuleMain")],2)],1)},s=[],o={name:"baseMainRightModule",props:{toEndPoint:{type:String,default:"#"}}},l=o,r=i(1001),a=(0,r.Z)(l,n,s,!1,null,"b040862c",null),h=a.exports},6356:function(t,e,i){i.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tagsModule"},[e("base-main-right-module",{attrs:{"to-end-point":"/tag"},scopedSlots:t._u([{key:"rightModuleTitle",fn:function(){return[t._v(" FEATURED TAGS ")]},proxy:!0},{key:"rightModuleMain",fn:function(){return[e("all-tags-module")]},proxy:!0}])})],1)},s=[],o=i(2428),l=i(2597),r=i(41),a={name:"tagsModule",components:{AllTagsModule:r.Z,BaseMainRightModule:l.Z,TagItem:o.Z}},h=a,c=i(1001),d=(0,c.Z)(h,n,s,!1,null,"774ab97b",null),u=d.exports},3681:function(t,e,i){i.r(e),i.d(e,{default:function(){return $}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"postPage"},[e("base-page",{scopedSlots:t._u([{key:"blogHeaderImgInnerShow",fn:function(){return[e("div",{staticClass:"imgTitle flyInFromTop"},[t._v(" "+t._s(t.postItem.title)+" ")]),e("div",{staticClass:"imgTag flyInFromTop"},t._l(t.postItem.metaData.tags,(function(t){return e("tag-item",{key:t,staticStyle:{"margin-left":"5px",color:"white"},attrs:{text:t,"to-end-point":"/tag/"+t}})})),1)]},proxy:!0},{key:"blogLeftMainShow",fn:function(){return[e("v-md-preview",{ref:"preview",staticClass:"flyInFromBottom",staticStyle:{"text-align":"left"},attrs:{text:t.postItem.postContent}}),e("tags-module"),e("blog-comments")]},proxy:!0},{key:"blogRightMainShow",fn:function(){return[e("div",{staticClass:"anchor flyInFromBottom"},[e("div",{staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold","padding-bottom":"15px"}},[t._v(" - CATALOG ")]),t._l(t.titles,(function(i){return e("div",{staticClass:"anchorItem",class:{highlight:i.highlight},style:{padding:`5px 0 10px ${20*i.indent}px`},on:{click:function(e){return t.handleAnchorClick(i)}}},[e("a",{staticStyle:{cursor:"pointer"}},[t._v(t._s(i.title))])])}))],2)]},proxy:!0}])})],1)},s=[],o=i(5958),l=i(4190);function r(t,e,i,n){return(0,l.W)({url:`/post/${t}/${e}/${i}/${n}`})}var a=i(133),h=i(2428),c=i(41),d=i(6356),u=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"text-align":"start"},attrs:{id:"gitalk-container"}})},g=[],m={name:"blogComments",mounted(){const t=new Gitalk({clientID:"f10cc349c493295d54b8",clientSecret:"c3512c2c2de6f4041cd394dfcc88292c7c673eec",repo:"blog-posts",owner:"superwhys",admin:["superwhys"],id:this.parseString(decodeURIComponent(location.pathname)),title:this.parseString(decodeURIComponent(location.pathname)),distractionFreeMode:!1});t.render("gitalk-container")},methods:{parseString(t){const e=t.split("/"),i=e[3],n=e[4],s=e[5],o=e[6];return`${i}-${n}-${s}-${o}`}}},p=m,f=i(1001),y=(0,f.Z)(p,u,g,!1,null,"19e65179",null),v=y.exports,x={name:"blogPage",components:{BlogComments:v,TagsModule:d.Z,AllTagsModule:c.Z,TagItem:h.Z,BasePage:o.Z},data(){return{year:"",month:"",day:"",name:"",titles:[],mdToc:[],postItem:new a.lj({})}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},created(){this.year=this.$route.params.year,this.month=this.$route.params.month,this.day=this.$route.params.day,this.name=this.$route.params.name;const t=`/${this.year}/${this.month}/${this.day}/${this.name}`;let e=this.$store.getters.getPost(t);if(console.debug(e),void 0!==e)return this.postItem=e,void this.$nextTick((()=>{this.findTitles()}));r(this.year,this.month,this.day,this.name).then((t=>{console.debug(t),t.data&&(this.postItem=new a.lj(t.data),this.$nextTick((()=>{this.findTitles()})))}))},methods:{handleScroll(){const t=this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");let e=null,i=-1/0;for(let n of t){const t=n.getBoundingClientRect(),s=t.top;s<80&&s>i&&(i=s,e=n)}e&&this.highlightTitle(e.innerText)},highlightTitle(t){this.titles=this.titles.map((e=>({...e,highlight:e.title===t})))},findTitles(){this.$nextTick((()=>{const t=this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6"),e=Array.from(t).filter((t=>!!t.innerText.trim()));if(!e.length)return void(this.titles=[]);const i=Array.from(new Set(e.map((t=>t.tagName)))).sort();this.titles=e.map((t=>({title:t.innerText,lineIndex:t.getAttribute("data-v-md-line"),indent:i.indexOf(t.tagName)}))),console.debug(this.titles),this.titles[0].highlight=!0}))},handleAnchorClick(t){const{lineIndex:e}=t,i=this.$refs.preview.$el.querySelector(`[data-v-md-line="${e}"]`);i&&window.scrollTo({top:i.offsetTop-60,behavior:"smooth"})}}},T=x,b=(0,f.Z)(T,n,s,!1,null,"bad01e2c",null),$=b.exports}}]);