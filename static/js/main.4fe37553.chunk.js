(this.webpackJsonpscholarship_academy=this.webpackJsonpscholarship_academy||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(86),a(87),a(11)),i=a(10),m=(a(54),a(170)),s=a(172),u=Object(m.a)((function(e){return{root:{margin:e.spacing(1),padding:"10px"},btn:{background:"white",color:"#747070",textShadow:"3px 2px 7px #5A4343 ",boxShadow:"3px 3px 20px #0000000",margin:"15px",width:"80%",height:"8vh",justifyContent:"center",alignItems:"center"}}}));function h(e){var t=u();return r.a.createElement(s.a,{variant:"contained",className:t.btn},e.name)}function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mainmenu"},r.a.createElement(o.b,{to:"/aboutyourself"},r.a.createElement(h,{name:"About Your Self"})),r.a.createElement(o.b,{to:"/onlinecounselling"},r.a.createElement(h,{name:"Online Counselling"})),r.a.createElement(o.b,{to:"/scholarship"},r.a.createElement(h,{name:"Scholarship"})),r.a.createElement(o.b,{to:"/learnonline"},r.a.createElement(h,{name:"Learn Online"})),r.a.createElement(o.b,{to:"/infovideos"},r.a.createElement(h,{name:"Info Videos"})),r.a.createElement(o.b,{to:"/mycourses"},r.a.createElement(h,{name:"My Courses"})),r.a.createElement(o.b,{to:"/liveinteractionclass"},r.a.createElement(h,{name:"Live Interaction Class"}))))}var E=a(173),d=a(174),g=a(176),b=a(175),f=a(69),y=a.n(f),v=Object(m.a)((function(e){return{root:{flexGrow:1},backButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function w(e){var t=v();return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{position:"static"},r.a.createElement(d.a,{className:t.Toolbar},r.a.createElement(b.a,{edge:"start",className:t.backButton,color:"inherit","aria-label":"menu",onClick:function(){return window.history.back()}},r.a.createElement(y.a,null)),r.a.createElement(g.a,{variant:"h6",className:t.title},e.title))))}function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Scholarship"}),r.a.createElement("div",{className:"",style:{padding:"50% 0"}},r.a.createElement(o.b,{to:"/germanyscholarship"},r.a.createElement(h,{name:"Germany"})),r.a.createElement(o.b,{to:"/italyscholarship"},r.a.createElement(h,{name:"Italy"})),r.a.createElement(o.b,{to:"/canadascholarship"},r.a.createElement(h,{name:"Canada"})),r.a.createElement(o.b,{to:"/russiascholarship"},r.a.createElement(h,{name:"Russia"}))))}var S=a(20),C=a(46);a(94);function F(){var e=Object(C.a)(),t=e.register,a=e.handleSubmit,l=Object(n.useState)(!1),c=Object(S.a)(l,2),o=c[0],i=c[1];console.log(o);var m=function(){if(document.getElementById("schCheckbox").checked)return i(!0);i(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"About Your Self"}),r.a.createElement("form",{className:"form",onSubmit:a((function(e){o?console.log(e):alert("please select country")})),autoComplete:"on"},r.a.createElement("label",{htmlFor:""},"Full Name*"),r.a.createElement("input",{type:"text",name:"FullName",ref:t({required:!0}),placeholder:"Enter Full Name"}),r.a.createElement("label",{htmlFor:""},"DOB*"),r.a.createElement("input",{type:"date",placeholder:"Enter Date Of Birth",name:"Enter Date Of Birth",ref:t({required:!0})}),r.a.createElement("label",{htmlFor:""},"10th Percentage*"),r.a.createElement("input",{type:"number",placeholder:"Enter 10th Percentage",name:"Enter 10th Percentage",ref:t({required:!0})}),r.a.createElement("label",{htmlFor:""},"12th Percentage*"),r.a.createElement("input",{type:"number",placeholder:"Enter 12th Percentage",name:"Enter 12th Percentage",ref:t({required:!0})}),r.a.createElement("label",{htmlFor:""},"Undergraduate Percentage"),r.a.createElement("input",{type:"number",placeholder:"Enter Undergraduate Percentage",name:"Undergraduate Percentage",ref:t}),r.a.createElement("label",{htmlFor:""},"Highest Qualification"),r.a.createElement("input",{type:"text",placeholder:"Enter Highest Qualification ",name:"Enter Highest Qualification ",ref:t}),r.a.createElement("hr",null),r.a.createElement("p",null,"What are you looking for ?*"),r.a.createElement("label",{htmlFor:"russiacheckbox"},"Scholarship in Russia",r.a.createElement("input",{type:"checkbox",placeholder:"Scholarship in Russia",name:"Scholarshipcountry",id:"schCheckbox",value:"Russia",ref:t,onChange:m})),r.a.createElement("label",{htmlFor:""},"Scholarship in Germany",r.a.createElement("input",{type:"checkbox",placeholder:"Scholarship in Germany ",name:"Scholarshipcountry",id:"schCheckbox",value:"Germany",ref:t,onChange:m})),r.a.createElement("label",{htmlFor:""},"scholarship in Italy",r.a.createElement("input",{type:"checkbox",placeholder:"Scholarship in Italy",name:"Scholarshipcountry",value:"Italy",id:"schCheckbox",ref:t,onChange:m})),r.a.createElement("label",{htmlFor:""},"All of the above",r.a.createElement("input",{type:"checkbox",placeholder:"All of the above",name:"Scholarshipcountry",value:"Russia,Germany,Italy",id:"schCheckbox",ref:t,onChange:m})),r.a.createElement("hr",null),r.a.createElement("p",null,"Which course are you intent to study ?"),r.a.createElement("label",{htmlFor:""},"Engineering",r.a.createElement("input",{type:"checkbox",placeholder:"Engineering",name:"Engineering",value:"Engineering",ref:t})),r.a.createElement("label",{htmlFor:""},"Medical",r.a.createElement("input",{type:"checkbox",placeholder:"Medical",name:"Medical",value:"Medical",ref:t})),r.a.createElement("label",{htmlFor:""},"Commerce",r.a.createElement("input",{type:"checkbox",placeholder:"Commerce",name:"Commerce",value:"Commerce",ref:t})),r.a.createElement("label",{htmlFor:""},"Management",r.a.createElement("input",{type:"checkbox",placeholder:"Management",name:"Management",value:"Management",ref:t})),r.a.createElement("label",{htmlFor:""},"Humanities",r.a.createElement("input",{type:"checkbox",placeholder:"Humanities",name:"Humanities",value:"Humanities",ref:t})),r.a.createElement("label",{htmlFor:""},"Others Course",r.a.createElement("input",{type:"text",placeholder:"Write course here",name:"Others",ref:t})),r.a.createElement("hr",null),r.a.createElement("label",{htmlFor:""},"Pincode*"),r.a.createElement("input",{type:"tel",placeholder:"Enter Your Pincode",name:"Enter Your Pincode",ref:t({required:!0})}),r.a.createElement("hr",null),r.a.createElement("p",null,"Upload your originally scanned documents"),r.a.createElement("label",{htmlFor:""},"10th"),r.a.createElement("input",{type:"file",placeholder:"10th",name:"10th",ref:t}),r.a.createElement("label",{htmlFor:""},"12th"),r.a.createElement("input",{type:"file",placeholder:"12th",name:"12th",ref:t}),r.a.createElement("label",{htmlFor:""},"Undergraduate Mark Sheet"),r.a.createElement("input",{type:"file",placeholder:"Undergraduate Mark Sheet",name:"Undergraduate Mark Sheets",ref:t}),r.a.createElement("label",{htmlFor:""},"GRE Score Card"),r.a.createElement("input",{type:"file",placeholder:"GRE Score Card",name:"GRE Score Card",ref:t}),r.a.createElement("label",{htmlFor:""},"GMAT Score Card"),r.a.createElement("input",{type:"file",placeholder:"GMAT Score Card",name:"GMAT Score Card",ref:t}),r.a.createElement("label",{htmlFor:""},"IELTS"),r.a.createElement("input",{type:"file",placeholder:"IELTS",name:"IELTS",ref:t}),r.a.createElement("label",{htmlFor:""},"Any Other Relevant Document"),r.a.createElement("input",{type:"file",placeholder:"Any Other Relevant Document",name:"Any Other Relevant Document",ref:t}),r.a.createElement("input",{className:"mb-2",type:"submit"})))}var x=Object(m.a)((function(e){return{btn:{margin:"15px",borderRadius:"20px"}}}));function I(e){var t=x();return r.a.createElement(s.a,{variant:"contained",color:"primary",className:t.btn,onClick:e.onClick},e.name)}function N(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"text-primary m-4"},e.title),r.a.createElement("p",{className:"text-primary"},"Fee - ",e.price))}var T=a(44),L=a.n(T);function M(e){return r.a.createElement("div",null,r.a.createElement(L.a,{style:{margin:"20px auto",alignItems:"center",justifyContent:"center",fontFamily:"Arial",border:"1px solid blue",backgroundColor:"white",padding:"10px"},number:"+91-988-702-0529",message:e.msg},e.btnName))}function G(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Learn Online"}),r.a.createElement(N,{title:"English",price:"4000-/",name:"fdkfj"}),r.a.createElement(M,{btnName:"Contact Now",msg:" i would like to join English course. let me know for more details"}),r.a.createElement("hr",null),r.a.createElement(N,{title:"GRE",price:"5000-/"}),r.a.createElement(M,{btnName:"Contact Now",msg:" i would like to join English course. let me know for more details"}),r.a.createElement("hr",null),r.a.createElement(N,{title:"GMAT",price:"6000-/"}),r.a.createElement(M,{btnName:"Contact Now",msg:" i would like to join English course. let me know for more details"}),r.a.createElement("hr",null),r.a.createElement(N,{title:"ILETS",price:"7000-/"}),r.a.createElement(M,{btnName:"Contact Now",msg:" i would like to join English course. let me know for more details"}),r.a.createElement("hr",null))}var A=Object(m.a)((function(e){return{root:{margin:e.spacing(1),paddingTop:"50%"},reactwhatsapp:{border:"none",backgroundColor:"white",width:"100%",padding:"0 0px"}}}));function O(){var e=A();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Online Counselling"}),r.a.createElement("div",{className:e.root},r.a.createElement(L.a,{className:e.reactwhatsapp,number:"+918947885580",message:"Welcome to Scholarship Academy"}," ",r.a.createElement(h,{name:"Free"})," "),r.a.createElement(o.b,{to:"/paidcounselling"},r.a.createElement(h,{name:"Paid"}))))}function P(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"InfoVideos"}),r.a.createElement("div",null,r.a.createElement("div",{className:" ",style:{padding:"50% 0"}},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT",target:"blank"},r.a.createElement(I,{name:"Germany Info Video"})),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example"},r.a.createElement(I,{name:"Italy  Info Videos"})),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example"},r.a.createElement(I,{name:"Canada Info Video"})),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=JcxWSyowE1Q&list=PLY3DMTGnFv2a0Sl1H5Qp0-X6Z8iurqSRT/#Intent;scheme=yourapp;package=com.yourapp.example"},r.a.createElement(I,{name:"Russia Info Video"})))))}function R(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Live Interaction Class"}),r.a.createElement(N,{title:"Live German Classes",price:"13000-/"}),r.a.createElement(M,{btnName:"Join Live Classes",msg:"Hello, I would like to join German Live class"}),r.a.createElement(N,{title:"Live English Classes",price:"14000-/"}),r.a.createElement(M,{btnName:"Join Live Classes",msg:"Hello, I would like to join English Live class"}),r.a.createElement(N,{title:"Live GRE Classes",price:"15000-/"}),r.a.createElement(M,{btnName:"Join Live Classes",msg:"Hello, I would like to join GRE Live class"}),r.a.createElement(N,{title:"Live GMAT Classes",price:"16000-/"}),r.a.createElement(M,{btnName:"Join Live Classes",msg:"Hello, I would like to join GMAT Live class"}),r.a.createElement(N,{title:"Live ILETS Classes",price:"17000-/"}),r.a.createElement(M,{btnName:"Join Live Classes",msg:"Hello, I would like to join ILETS Live class"}))}var j=a(177),H=a(178),W=a(180),U=a(179),q=Object(m.a)({root:{marginTop:"5px",maxWidth:"100%"},media:{height:140}});function D(e){var t=q();return r.a.createElement(j.a,{className:t.root},r.a.createElement(H.a,null,r.a.createElement(U.a,{className:t.media,image:e.img}),r.a.createElement(W.a,null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.description))))}var B=a(47),J=a.n(B);function Q(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"My Courses"}),r.a.createElement(D,{img:J.a,title:"Basic German Course",description:"From zero to able to speak, write and do basic communication you can learn from this course. design in a way that you can practice after each lesson"}),r.a.createElement(o.b,{to:"/englishcourse"},r.a.createElement(I,{name:"Start"})),r.a.createElement(D,{img:J.a,title:"IELTS",description:"From zero to able to speak, write and do basic communication you can learn from this course. design in a way that you can practice after each lesson"}),r.a.createElement(o.b,{to:"/englishcourse"},r.a.createElement(I,{name:"Start"})),r.a.createElement(D,{img:J.a,title:"GMAT",description:"From zero to able to speak, write and do basic communication you can learn from this course. design in a way that you can practice after each lesson"}),r.a.createElement(o.b,{to:"/englishcourse"},r.a.createElement(I,{name:"Start"})))}function Y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Online Counselling"}),r.a.createElement(N,{title:"One Hour - One Month",price:"1000rs"}),r.a.createElement(M,{btnName:"Chat with Expert",msg:"I am interested in taking one month counselling package. let me know for more information "}),r.a.createElement(N,{title:"Two Hour - Two Month",price:"2000rs"}),r.a.createElement(M,{btnName:"Chat with Expert",msg:"I am interested in taking one month counselling package. let me know for more information "}),r.a.createElement(N,{title:"Three Hour - Three Month",price:"3000rs"}),r.a.createElement(M,{btnName:"Chat with Expert",msg:"I am interested in taking one month counselling package. let me know for more information "}))}var z=a(70);function V(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Scholarship"}),r.a.createElement(z.a,{url:e.url,width:"100%",height:"1000px",id:"myId",className:"myClassname",position:"relative"}))}function Z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{url:"https://scholarships365.info/daad-scholarship-2020"}))}function X(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{url:"https://www.scholars4dev.com/11693/scholarships-in-italy-scholarships-for-international-students/"}))}function _(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{url:"https://www.scholars4dev.com/6179/scholarships-canada-international-students/"}))}function K(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{url:"https://www.iicnm.in/revolutionsoft/"}))}var $=a(71),ee=a.n($);function te(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,e.title),r.a.createElement(ee.a,{url:e.url,width:"100%",height:"100%",controls:"true"}))}function ae(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"English Crash Course"}),r.a.createElement(te,{title:"1. Introduction",url:"https://www.youtube.com/watch?v=ysz5S6PUM-U",width:"100%"}),r.a.createElement(te,{title:"2. Tense",url:"https://www.youtube.com/watch?v=ysz5S6PUM-U",width:"100%"}))}a(115);var ne=a(51),re=a.n(ne);re.a.initializeApp({apiKey:"AIzaSyAuGdHooPPnlkaWbh29I0YQWEpjF6gkxBs",authDomain:"scholarship-academy.firebaseapp.com",databaseURL:"https://scholarship-academy.firebaseio.com",projectId:"scholarship-academy",storageBucket:"scholarship-academy.appspot.com",messagingSenderId:"345757033591",appId:"1:345757033591:web:6ac4148c514e409dc55272",measurementId:"G-729Z2J43CM"});var le=re.a,ce=a(72),oe=a.n(ce),ie={signInFlow:"popup",signInSuccessUrl:"http://localhost:3000/",signInOptions:[le.auth.PhoneAuthProvider.PROVIDER_ID],defaultCountry:"IN",callbacks:{signInSuccessWithAuthResult:function(){return!0}}},me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"login/signup"),r.a.createElement(oe.a,{uiConfig:ie,firebaseAuth:le.auth()})))};function se(){var e=Object(C.a)(),t=e.register,a=e.handleSubmit;e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"Enter OTP"}),r.a.createElement("div",{className:"enterNumber",style:{marginTop:"50%",marginLeft:"1rem"}},r.a.createElement("form",{onSubmit:a((function(e){return console.log(e)}))},r.a.createElement("input",{type:"number",placeholder:"Enter OTP",name:"otp",ref:t({required:!0})}),r.a.createElement("input",{type:"submit"}))))}var ue={position:"relative",top:"30vh"};function he(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:"User info"}),r.a.createElement("div",{style:ue},r.a.createElement("form",{onSubmit:function(e){}},r.a.createElement("input",{pattern:"[0-9]",type:"number",name:"mobile_number",placeholder:"Enter Mobile Number",required:!0}),r.a.createElement("input",{type:"text",placeholder:"Enter Name",required:!0}),r.a.createElement("input",{type:"email",placeholder:"Enter email address",required:!0}),r.a.createElement("input",{type:"submit"}))))}var pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/enternumber",component:me}),r.a.createElement(i.b,{exact:!0,path:"/",component:p}),r.a.createElement(i.b,{path:"/aboutyourself",component:F}),r.a.createElement(i.b,{path:"/scholarship",component:k}),r.a.createElement(i.b,{path:"/learnonline",component:G}),r.a.createElement(i.b,{path:"/onlinecounselling",component:O}),r.a.createElement(i.b,{path:"/infovideos",component:P}),r.a.createElement(i.b,{path:"/mycourses",component:Q}),r.a.createElement(i.b,{path:"/liveinteractionclass",component:R}),r.a.createElement(i.b,{path:"/paidcounselling",component:Y}),r.a.createElement(i.b,{path:"/germanyscholarship",component:Z}),r.a.createElement(i.b,{path:"/italyscholarship",component:X}),r.a.createElement(i.b,{path:"/canadascholarship",component:_}),r.a.createElement(i.b,{path:"/russiascholarship",component:K}),r.a.createElement(i.b,{path:"/englishcourse",component:ae}),r.a.createElement(i.b,{path:"/verifyotp",component:se}),r.a.createElement(i.b,{path:"/signin",component:he}),r.a.createElement(i.a,{to:"/"})))))},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(9);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/schloarshipacedemy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/schloarshipacedemy","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(t,e)}))}}()},47:function(e,t,a){e.exports=a.p+"static/media/finprt.144af032.jpeg"},81:function(e,t,a){e.exports=a(149)},86:function(e,t,a){},87:function(e,t,a){},94:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.4fe37553.chunk.js.map