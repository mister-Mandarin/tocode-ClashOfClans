(function(){"use strict";var t={7123:function(t,e,i){var a=i(9242),l=i(3396);const r={class:"wrapper"},n={class:"wrapper-content"},s={class:"container"},o={class:"view-sm isCenter"};function u(t,e,i,a,u,c){const d=(0,l.up)("Header"),p=(0,l.up)("router-view"),v=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(d),(0,l._)("div",n,[(0,l._)("section",null,[(0,l._)("div",s,[(0,l._)("div",o,[(0,l.Wm)(p)])])])]),(0,l.Wm)(v)])}var c=i(7139);const d={class:"navbar"},p={class:"container"},v={class:"navbar-content"},f={class:"navbar-list"},m=(0,l._)("li",{style:{width:"40px"}},[(0,l._)("a",{href:"https://github.com/mister-Mandarin/tocode-ClashOfClans",target:"_blank"},[(0,l._)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",alt:"GitHub"})])],-1);function g(t,e,i,a,r,n){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("header",d,[(0,l._)("div",p,[(0,l._)("div",v,[(0,l.Wm)(s,{class:"navbar-logo",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(r.title),1)])),_:1}),(0,l._)("ul",f,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.links,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.alias,class:"navbar-item"},[(0,l.Wm)(s,{to:t.url,class:"navbar-link"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t.title),1)])),_:2},1032,["to"])])))),128)),m])])])])}const h={dev:!0},w=(h.dev,{title:"Clash of Clans"}),b=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}];var _={data(){return{title:w.title,links:b}}},k=i(89);const y=(0,k.Z)(_,[["render",g]]);var U=y;const W={class:"footer"},D={class:"container"},z={class:"navbar-list"};function j(t,e,i,a,r,n){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("footer",W,[(0,l._)("div",D,[(0,l._)("ul",z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.links,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.alias,class:"navbar-item"},[(0,l.Wm)(s,{to:t.url,class:"navbar-link"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t.title),1)])),_:2},1032,["to"])])))),128))])])])}var C={data(){return{links:b}}};const S=(0,k.Z)(C,[["render",j]]);var O=S,H={components:{Header:U,Footer:O}};const Z=(0,k.Z)(H,[["render",u]]);var q=Z,x=i(678);function P(t,e,i,a,r,n){const s=(0,l.up)("UiCardStats"),o=(0,l.up)("ui-card"),u=(0,l.up)("slide"),d=(0,l.up)("navigation"),p=(0,l.up)("carousel");return(0,l.wg)(),(0,l.j4)(p,{settings:r.settings,breakpoints:r.breakpoints},{addons:(0,l.w5)((()=>[(0,l.Wm)(d)])),default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.items,(t=>((0,l.wg)(),(0,l.j4)(u,{class:"card__wrapper",key:t.id},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{name:`${t.lvl} lvl`,title:t.title,"image-url":t.img,link:"/"+t.alias},{aboutPers:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t.descr),1)])),characteristics:(0,l.w5)((()=>[(0,l.Wm)(s,{info:t.info},null,8,["info"])])),_:2},1032,["name","title","image-url","link"])])),_:2},1024)))),128))])),_:1},8,["settings","breakpoints"])}const M={class:"card"},A={key:0,class:"card-img__wrapper"},G=["src","alt"],R={class:"card-name"},T={class:"card-title"},Y={class:"card-body"},I=(0,l.Uk)("О персонаже ");function K(t,e,i,a,r,n){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",M,[i.imageUrl?((0,l.wg)(),(0,l.iD)("div",A,[(0,l._)("img",{src:i.imageUrl,alt:i.title,class:"card-img"},null,8,G)])):(0,l.kq)("",!0),(0,l._)("span",R,(0,c.zw)(i.name),1),(0,l._)("span",T,(0,c.zw)(i.title),1),(0,l._)("div",Y,[(0,l.WI)(t.$slots,"aboutPers"),i.link?((0,l.wg)(),(0,l.j4)(s,{key:0,style:{display:"block","margin-top":"20px","text-decoration":"underline"},to:i.link},{default:(0,l.w5)((()=>[I])),_:1},8,["to"])):(0,l.kq)("",!0)]),(0,l.WI)(t.$slots,"characteristics")])}var $={props:{name:{type:String,required:!0},title:{type:String,required:!0},imageUrl:{type:String,required:!1},link:{type:String}}};const E=(0,k.Z)($,[["render",K]]);var F=E;const V=[{title:"Barbarian",url:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/barbarian.png"},{title:"Archer",url:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/archer.png"},{title:"Giant",url:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/giant.png"},{title:"Goblin",url:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/goblin.png"},{title:"Wizard",url:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/wizard.png"}];var B=[{id:1,alias:"barbarian",title:V[0].title,descr:"Варвар — одетый в килт шотландский воин с сердитым, готовым к бою выражением лица, жаждущим разрушения. У него убийственно желтые подковообразные усы.",img:V[0].url,lvl:12,info:[{title:"Обучение",value:"20 с"},{title:"Скорость",value:"16"},{title:"Цена",value:"150"}]},{id:2,alias:"archer",title:V[1].title,descr:"Лучница — женщина-воин с острым взглядом. На ней короткое светло-зеленое платье, накидка с капюшоном, кожаный ремень и небольшой мешочек.",img:V[1].url,lvl:23,info:[{title:"Обучение",value:"25 с"},{title:"Скорость",value:"24"},{title:"Цена",value:"300"}]},{id:3,alias:"giant",title:V[2].title,descr:"Медленные, устойчивые и мощные Гиганты — массивные воины, которые поглощают огромное количество урона. Покажите им башню или пушку, и вы увидите, как вырвется их ярость!",img:V[2].url,lvl:34,info:[{title:"Обучение",value:"2 с"},{title:"Скорость",value:"12"},{title:"Цена",value:"2250"}]},{id:4,alias:"goblin",title:V[3].title,descr:"Эти надоедливые маленькие существа видят только одно: ДОБЫЧА! Они быстрее пружинной ловушки, а их жажда ресурсов безгранична.",img:V[3].url,lvl:45,info:[{title:"Обучение",value:"30 с"},{title:"Скорость",value:"32"},{title:"Цена",value:"100"}]},{id:5,alias:"wizard",title:V[4].title,descr:"Волшебник ужасен на поле боя. Объедините его с некоторыми из его товарищей и обрушьте концентрированные разрушительные взрывы на что угодно, землю или небо!",img:V[4].url,lvl:56,info:[{title:"Обучение",value:"5 м"},{title:"Скорость",value:"16"},{title:"Цена",value:"3800"}]}];const N={class:"card-stats"},J={class:"stat-value"},L={class:"stat"};function Q(t,e,i,a,r,n){return(0,l.wg)(),(0,l.iD)("div",N,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.info,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"one-third"},[(0,l._)("div",J,(0,c.zw)(t.value),1),(0,l._)("div",L,(0,c.zw)(t.title),1)])))),128))])}var X={props:{info:{type:Array}}};const tt=(0,k.Z)(X,[["render",Q]]);var et=tt,it=i(1658),at={components:{UiCardStats:et,UiCard:F,card:F,Carousel:it.lr,Slide:it.Mi,Navigation:it.W_},data(){return{items:B,settings:{itemsToShow:3,wrapAround:!0,snapAlign:"center"},breakpoints:{300:{itemsToShow:1},700:{itemsToShow:2}}}}};const lt=(0,k.Z)(at,[["render",P]]);var rt=lt;const nt={class:"md-body"},st=(0,l.uE)('<h1>История релизов.</h1><div><h2>🍏 Release v1.3</h2><h3>Ревью после проверки ДЗ:</h3><ul><li>Настроен .editorconfig и eslint в WebStorm</li><li>Файлы не переименовывал по стандарту arbnb</li><li>В Readme добавил идеальный вариант работы 404 редиректа от преподавателя</li><li>Публикую итоговый вариант на GitHub Pages</li></ul></div><div><h2>🎈 Release v1.2</h2><h3>Выполнены домашние задания:</h3><ul><li> Простое - вынести в отдельный UI компонент характеристики персонажа </li><li> Сложное - настроить редирект на страницу 404 при переходе на несуществующую страницу </li><li>Добавил иконку на гит репозиторий, чтоб было</li></ul><br></div><div><h2>🐬 Release v1.0</h2><h3> Сделано на курсе самостоятельно после просмотров уроков или реже параллельно с преподавателем: </h3><ul><li>Vue-Router в связке Vue.js 3</li><li>Динамические маршруты</li><li>Установка своих тем поврех своего шаблона vue cli</li><li> Понимание того, как работают темы для фреймворков по типу Material UI </li><li>Критерии выбора библиотеки</li><li> Разбор библиотек и взгляд &quot;изнутри&quot;. Полное понимание того, как пишутся библиотеки </li><li>Слайдер с персонажами</li></ul></div><p> Сделано на курсе <a style="color:#ffffff;" href="https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/?r=l0j">Vue.js 3 С нуля до результата</a></p>',5),ot=[st];function ut(t,e){return(0,l.wg)(),(0,l.iD)("div",nt,ot)}const ct={},dt=(0,k.Z)(ct,[["render",ut]]);var pt=dt;const vt=(0,l._)("h1",{class:"title"},"Страница не найдена! Ошибка 404",-1),ft={class:"button"},mt=(0,l.Uk)("Вернуться на главную");function gt(t,e){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[vt,(0,l._)("div",ft,[(0,l.Wm)(i,{class:"btn btnPrimary",to:"/"},{default:(0,l.w5)((()=>[mt])),_:1})])],64)}const ht={},wt=(0,k.Z)(ht,[["render",gt]]);var bt=wt;const _t={class:"wrapper-person"},kt=["src","alt"],yt={class:"title",style:{color:"white"}},Ut={class:"button"},Wt=(0,l.Uk)("К персонажам");function Dt(t,e,i,a,r,n){const s=(0,l.up)("UiCardStats"),o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",_t,[(0,l._)("div",null,[(0,l._)("img",{src:r.item.img,alt:r.item.title},null,8,kt),(0,l._)("h1",yt,(0,c.zw)(r.item.title),1),(0,l._)("p",null,(0,c.zw)(r.item.descr),1)]),(0,l.Wm)(s,{info:r.item.info},null,8,["info"]),(0,l._)("div",Ut,[(0,l.Wm)(o,{class:"btn btnPrimary",to:"/"},{default:(0,l.w5)((()=>[Wt])),_:1})])])}var zt={components:{UiCardStats:et},data(){return{item:null}},created(){const t=this.$route.params.person,e=B.find((function(e){return e.alias===t}));this.item=e}};const jt=(0,k.Z)(zt,[["render",Dt]]);var Ct=jt;const St=(0,x.r5)(),Ot=(0,x.p7)({history:St,routes:[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:pt},{path:"/:person",name:"person",component:Ct,beforeEnter(t){const e=t.params.person,i=B.find((function(t){return t.alias===e}));if(!i)return{name:"404"}}},{path:"/:pathMatch(.*)*",name:"404",component:bt}]});var Ht=Ot;const Zt=(0,a.ri)(q);Zt.use(Ht),Zt.mount("#app")}},e={};function i(a){var l=e[a];if(void 0!==l)return l.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,a,l,r){if(!a){var n=1/0;for(c=0;c<t.length;c++){a=t[c][0],l=t[c][1],r=t[c][2];for(var s=!0,o=0;o<a.length;o++)(!1&r||n>=r)&&Object.keys(i.O).every((function(t){return i.O[t](a[o])}))?a.splice(o--,1):(s=!1,r<n&&(n=r));if(s){t.splice(c--,1);var u=l();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,l,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var l,r,n=a[0],s=a[1],o=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(l in s)i.o(s,l)&&(i.m[l]=s[l]);if(o)var c=o(i)}for(e&&e(a);u<n.length;u++)r=n[u],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},a=self["webpackChunktocode_clash_of_clans"]=self["webpackChunktocode_clash_of_clans"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(7123)}));a=i.O(a)})();