(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],d=0,h=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},n=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"745a7277"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=o[t]=[e,s]}));e.push(a[2]=s);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}o[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Вход")]),a("router-link",{attrs:{to:"/reg"}},[t._v("Регистрация")])],1),a("router-view")],1)},n=[],r=(a("034f"),a("2877")),i={},c=Object(r["a"])(i,o,n,!1,null,null,null),l=c.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"home"},[a("meta",{attrs:{name:"viewport",content:"width=device-width, user-scalable=no"}}),a("div",{staticClass:"box"},[a("p",{staticStyle:{"margin-top":"6% !important"}},[t._v("Время до пенсии")]),a("div",{staticStyle:{position:"absolute",left:"50%",right:"50%",top:"-3%",bottom:"50%"}},[a("div",{staticClass:"hourglass"})])]),a("div",{attrs:{id:"wrapper"}},[a("p",[t._v("Вход")]),a("form",{attrs:{id:"signin",method:"",action:"",autocomplete:"off",onsubmit:"return false"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"user",name:"user",placeholder:"имя"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"pass",name:"pass",placeholder:"пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{attrs:{type:"submit"},on:{click:t.doLogin}},[t._v("")]),a("p",{staticStyle:{}},[t._v("Нет аккаунта? "),a("a",{attrs:{href:"#"},on:{click:t.GoToReg}},[t._v("Регистрация")])]),t.Logged?t._e():a("p",{staticStyle:{color:"#ca2929"}},[t._v("Ошибка авторизации")])])])])])},h=[],p={name:"Home",data:()=>({username:"",password:"",Logged:!0}),components:{},methods:{GoToReg(){this.$router.push({path:"reg"})},async doLogin(){const t={name:this.username,password:this.password};try{await this.$store.dispatch("login",t)?(this.Logged=!0,console.log("ПРАВИЛЬНО"),await this.$store.dispatch("fetchInfo",this.username)?(console.log("Yes sex"),this.$router.push({path:"pro"})):(console.log("No sex"),this.$router.push({path:"col"}))):(this.Logged=!1,console.log("НеПРАВИЛЬНО"))}catch(e){console.log("Not logined")}}}},m=p,v=Object(r["a"])(m,u,h,!1,null,null,null),f=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"home"},[a("div",{staticClass:"box"},[a("p",[t._v("Время до пенсии")]),a("div",{staticStyle:{position:"absolute",left:"50%",right:"50%",top:"-3%",bottom:"50%"}},[a("div",{staticClass:"hourglass"})])]),a("div",{attrs:{id:"wrapper"}},[a("p",[t._v("Регистрация")]),a("form",{attrs:{id:"signin",method:"",action:"",autocomplete:"off",onsubmit:"return false"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.RegUsername,expression:"RegUsername"}],attrs:{type:"text",id:"user",name:"user",placeholder:"username"},domProps:{value:t.RegUsername},on:{input:function(e){e.target.composing||(t.RegUsername=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.RegPassword,expression:"RegPassword"}],attrs:{type:"password",id:"pass",name:"pass",placeholder:"password"},domProps:{value:t.RegPassword},on:{input:function(e){e.target.composing||(t.RegPassword=e.target.value)}}}),a("button",{attrs:{type:"submit"},on:{click:t.doRegister}},[t._v("")]),a("p",[t._v("Есть аккаунт? "),a("a",{attrs:{href:"#"},on:{click:t.GoToReg}},[t._v("Вход")])]),a("p",{staticStyle:{color:"#ca2929 !important"}},[t._v(t._s(t.text))])])])])])},y=[],b={name:"Home",data:()=>({RegUsername:"",RegPassword:"",text:""}),components:{},methods:{GoToReg(){this.$router.push({path:"/"})},async doRegister(){const t={name:this.RegUsername,password:this.RegPassword};try{await this.$store.dispatch("register",t)?(this.text="Регистрация прошла успешно",await this.$store.dispatch("fetchInfo",this.RegUsername),this.$router.push({path:"col"})):this.text="Такой аккаунт уже существует"}catch(e){console.log("Not Registered")}}}},w=b,_=Object(r["a"])(w,g,y,!1,null,null,null),x=_.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("p",[t._v("Выберите пол")]),a("div",{staticStyle:{margin:"6% 10% 5%",display:"inline-flex"}},[a("div",{staticStyle:{width:"36vw"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"one",value:"Мужской"},domProps:{checked:t._q(t.picked,"Мужской")},on:{change:function(e){t.picked="Мужской"}}}),a("label",{attrs:{for:"Мужской"}},[t._v("Мужской")])]),a("div",{staticStyle:{width:"36vw"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",id:"two",value:"Женский"},domProps:{checked:t._q(t.picked,"Женский")},on:{change:function(e){t.picked="Женский"}}}),a("label",{attrs:{for:"Женский"}},[t._v("Женский")])])]),a("br"),a("p",[t._v("Выберите дату рождения")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.datum,expression:"datum"}],staticStyle:{"background-color":"#d3deea",color:"#6e7887",border:"5px solid #6e7887","border-radius":"14px",padding:"4px",margin:"16px",width:"40%"},attrs:{type:"date",id:"BirthDate"},domProps:{value:t.datum},on:{input:function(e){e.target.composing||(t.datum=e.target.value)}}}),a("hr"),a("p",{staticStyle:{position:"absolute",color:"#d80101 !important",left:"23%",right:"25%",top:"40%",bottom:"50%",width:"50%",height:"6%"}},[t._v(t._s(t.error))]),a("button",{staticClass:"bac",on:{click:t.LogOut}},[t._v("Выйти")]),a("button",{on:{click:t.TurnBack}},[t._v("Рассчитать")])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Head"}},[a("h1",{staticStyle:{"margin-top":"8% !important"}},[t._v("Введите свои данные:")])])}],k={name:"Home",data:()=>({picked:"",datum:"",year:"",month:"",day:"",error:""}),components:{},computed:{name(){try{return this.$store.getters.Name}catch(t){console.log(t)}}},methods:{LogOut(){this.$router.push({path:"/"})},async TurnBack(){if(""==this.picked)this.error="Выберите пол";else if(""==this.datum)this.error="Выберите дату";else{this.year=this.datum[0]+this.datum[1]+this.datum[2]+this.datum[3],this.month=this.datum[5]+this.datum[6],this.day=this.datum[8]+this.datum[9];const e={name:this.name,year:this.year,month:this.month,day:this.day,sex:this.picked};try{await this.$store.dispatch("AddInformation",e)}catch(t){console.log(t)}this.$router.push({path:"/pro"})}}}},S=k,C=Object(r["a"])(S,$,L,!1,null,null,null),O=C.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[t.Loading?a("div",{staticClass:"box",staticStyle:{"background-color":"#d3deea",width:"96vw",height:"97vh"}},[a("div",{staticStyle:{position:"absolute",left:"50%",right:"50%",top:"50%",bottom:"50%"}},[a("div",{staticClass:"hourglass"})])]):t._e()]),a("div",[a("br"),t.Lyear<0?a("div",[t._v("Вы уже на пенсии.")]):a("div",[a("div",[a("p",[t._v("До пенсии: ")]),a("br"),a("div",{staticStyle:{display:"flex"}},[a("p",{staticClass:"Chisla"},[t._v(t._s(t.Lyear))]),a("h2",[t._v(t._s(t.nameyear))]),a("p",{staticClass:"Chisla"},[t._v(t._s(t.Lmonth))]),a("h2",[t._v(t._s(t.namemonth))]),a("p",{staticClass:"Chisla"},[t._v(t._s(t.Lday))]),a("h2",[t._v(t._s(t.nameday))])])])]),a("hr"),a("button",{staticClass:"bac",staticStyle:{"margin-top":"62vh !important"},on:{click:t.LogOut}},[t._v("Выйти")]),a("button",{staticStyle:{"margin-top":"62vh !important"},on:{click:t.Change}},[t._v("Изменить данные")])])],1)},R=[],N={name:"Home",data:()=>({name:"",year:0,month:0,day:0,sex:0,bYear:"",nameyear:"",namemonth:"",nameday:"",Loading:!1,Lyear:0,Lmonth:0,Lday:0}),async mounted(){this.Start()},methods:{async Start(){this.Loading=!0,this.name=this.$store.getters.Name,await this.$store.dispatch("Updateresult",this.name),this.year=await this.$store.getters.year,this.month=await this.$store.getters.month,this.day=await this.$store.getters.day,this.sex=await this.$store.getters.sex,console.log("ALLRRES",name,this.year,this.month,this.day,this.sex),await this.Count(),this.text()},text(){let t=this.Lyear%100;t>=5&&t<=20?this.nameyear="лет":(t%=10,this.nameyear=1==t?"год":t>=2&&t<=4?"года":"лет");let e=this.Lmonth%10;this.namemonth=1==e?"месяц":2==e||3==e||4==e?"месяца":"месяцев";let a=this.Lday%10;this.nameday=1==a?"день":2==a||3==a||4==a?"дня":"дней"},diffBetweenDateAndCurrentDate(t,e,a){console.log(t,e,a);let s=new Date;console.log(s);let o=t-s.getFullYear(),n=e-s.getMonth(),r=a-s.getDate()-1;if(r<=0&&n--,n<=0&&(n+=12,o--),r<=0){let t=!1;o%100!=0&&o%4==0&&(t=!0),r+=2==n&&t?29:2!=n||t?n<=7&&n%2==0?30:n<=7&&n%2!=0||n>7&&n%2==0?31:30:28}this.Lyear=o,this.Lmonth=n,this.Lday=r},defaultPension(t,e,a,s){s?t<1960?(e+=60,a+=6):t<1961?(e+=61,a+=6):e+=t<1962?63:t<1963?64:65:t<1964?(e+=55,a+=6):t<1965?(e+=56,a+=6):e+=t<1966?58:t<1967?59:60,a>12&&(e++,a-=12),this.bYear=t,this.year=e,this.month=a},async Count(){console.log("WOWOWW");let t=!1;t="Мужской"==this.sex;let e=Number.parseInt(this.year),a=Number.parseInt(this.year),s=Number.parseInt(this.month);this.defaultPension(e,a,s,t),this.diffBetweenDateAndCurrentDate(this.year,this.month,this.day),this.Loading=!1},LogOut(){this.$router.push({path:"/"})},Change(){this.$router.push({path:"/col"})}}},j=N,I=Object(r["a"])(j,P,R,!1,null,null,null),E=I.exports;s["a"].use(d["a"]);const D=[{path:"/",name:"Home",component:f},{path:"/reg",name:"reg",component:x},{path:"/col",name:"col",component:O},{path:"/pro",name:"pro",component:E},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],T=new d["a"]({routes:D});var U=T,A=a("2f62"),Y=a("260b"),H={actions:{async register({dispatch:t},{name:e,password:a}){try{Y["a"].database();const t=(await Y["a"].database().ref("/users").once("value")).val();return console.log(t),t.hasOwnProperty(""+e)?(console.log("NeOKEY"),0):(console.log("OKEY"),await Y["a"].database().ref(`/users/${e}/info`).update({password:a}),1)}catch(s){}},async login({dispatch:t,commit:e},{name:a,password:s}){try{console.log("1"+a+" ; "+s);const t=(await Y["a"].database().ref(`/users/${a}/info/password`).once("value")).val();return t!=s?(console.log("НЕПРАВИЛЬНО"),0):(console.log("ПРАВИЛЬНО"),1)}catch(o){throw o}}}},M={state:{Name:{},year:0,month:0,day:0,sex:""},mutations:{setName(t,e){t.Name=e},setYear(t,e){t.year=e},setMonth(t,e){t.month=e},setDay(t,e){t.day=e},setSex(t,e){t.sex=e},clearName(t){t.Name={}}},actions:{async fetchInfo({dispatch:t,commit:e},a){try{const t=(await Y["a"].database().ref("/users/"+a).once("value")).val();return e("setName",a),t.info.hasOwnProperty("sex")?1:0}catch(s){}}},getters:{Name:t=>t.Name,year:t=>t.year,month:t=>t.month,day:t=>t.day,sex:t=>t.sex}},B={actions:{async AddInformation({dispatch:t},{name:e,year:a,month:s,day:o,sex:n}){try{await Y["a"].database().ref(`/users/${e}/info`).update({year:a,month:s,day:o,sex:n})}catch(r){}}}},G={actions:{async Updateresult({dispatch:t,commit:e},a){try{const t=(await Y["a"].database().ref(`/users/${a}/info/year`).once("value")).val();console.log(t),e("setYear",t);const s=(await Y["a"].database().ref(`/users/${a}/info/month`).once("value")).val();e("setMonth",s);const o=(await Y["a"].database().ref(`/users/${a}/info/day`).once("value")).val();e("setDay",o);const n=(await Y["a"].database().ref(`/users/${a}/info/sex`).once("value")).val();e("setSex",n)}catch(s){}}}};s["a"].use(A["a"]);var W=new A["a"].Store({state:{},mutations:{},actions:{},modules:{auth:H,info:M,addInfo:B,updateResult:G}});a("ea7b"),a("66ce");let q;s["a"].config.productionTip=!1,Y["a"].initializeApp({apiKey:"AIzaSyDxX-R_-6HtlprC940yGLUw0RSWnNLVfnY",authDomain:"pensioner-fcadf.firebaseapp.com",databaseURL:"https://pensioner-fcadf-default-rtdb.firebaseio.com",projectId:"pensioner-fcadf",storageBucket:"pensioner-fcadf.appspot.com",messagingSenderId:"1002826954206",appId:"1:1002826954206:web:cfc730c6a676521bb5194f"}),Y["a"].auth().onAuthStateChanged(()=>{q||(q=new s["a"]({router:U,store:W,render:t=>t(l)}).$mount("#app"))})},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.b2e0f94b.js.map