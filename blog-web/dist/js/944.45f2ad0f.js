"use strict";(self["webpackChunksuperBlog"]=self["webpackChunksuperBlog"]||[]).push([[944],{4272:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"postPage"},[e("base-page",{scopedSlots:t._u([{key:"blogHeaderImgInnerShow",fn:function(){return[e("div",{staticClass:"imgTitle"},[t._v(" "+t._s(t.postItem.title)+" ")]),e("div",{staticClass:"imgTag"},t._l(t.postItem.metaData.tags,(function(t){return e("tag-item",{key:t,staticStyle:{"margin-left":"5px",color:"white"},attrs:{text:t,"to-end-point":"/tag/"+t}})})),1)]},proxy:!0},{key:"blogLeftMainShow",fn:function(){return[e("v-md-preview",{ref:"preview",staticStyle:{"text-align":"left"},attrs:{text:t.postItem.postContent}})]},proxy:!0},{key:"blogRightMainShow",fn:function(){return[e("div",{staticClass:"anchor"},[e("div",{staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold","padding-bottom":"15px"}},[t._v(" - CATALOG ")]),t._l(t.titles,(function(i){return e("div",{staticClass:"anchorItem",class:{highlight:i.highlight},style:{padding:`5px 0 10px ${20*i.indent}px`},on:{click:function(e){return t.handleAnchorClick(i)}}},[e("a",{staticStyle:{cursor:"pointer"}},[t._v(t._s(i.title))])])}))],2)]},proxy:!0}])})],1)},s=[],o=i(6480),r=i(4190);function a(t,e,i,n){return(0,r.W)({url:`/post/${t}/${e}/${i}/${n}`})}var l=i(133),h=i(2428),d={name:"blogPage",components:{TagItem:h.Z,BasePage:o.Z},data(){return{year:"",month:"",day:"",name:"",titles:[],mdToc:[],postItem:new l.lj({})}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},created(){this.year=this.$route.params.year,this.month=this.$route.params.month,this.day=this.$route.params.day,this.name=this.$route.params.name;const t=`/${this.year}/${this.month}/${this.day}/${this.name}`;let e=this.$store.getters.getPost(t);if(console.debug(e),void 0!==e)return this.postItem=e,void this.$nextTick((()=>{this.findTitles()}));a(this.year,this.month,this.day,this.name).then((t=>{console.debug(t),t.data&&(this.postItem=new l.lj(t.data),this.$nextTick((()=>{this.findTitles()})))}))},methods:{handleScroll(){const t=this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");for(let e of t){const t=e.getBoundingClientRect();if(t.top>=60&&t.top<=window.innerHeight){this.highlightTitle(e.innerText);break}}},highlightTitle(t){this.titles=this.titles.map((e=>({...e,highlight:e.title===t})))},findTitles(){this.$nextTick((()=>{const t=this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6"),e=Array.from(t).filter((t=>!!t.innerText.trim()));if(!e.length)return void(this.titles=[]);const i=Array.from(new Set(e.map((t=>t.tagName)))).sort();this.titles=e.map((t=>({title:t.innerText,lineIndex:t.getAttribute("data-v-md-line"),indent:i.indexOf(t.tagName)})))}))},handleAnchorClick(t){const{lineIndex:e}=t,i=this.$refs.preview.$el.querySelector(`[data-v-md-line="${e}"]`);i&&window.scrollTo({top:i.offsetTop-60,behavior:"smooth"})}}},c=d,m=i(1001),p=(0,m.Z)(c,n,s,!1,null,"6f26dd58",null),g=p.exports}}]);