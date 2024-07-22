"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4253],{4253:(v,_,s)=>{s.r(_),s.d(_,{HistoryPage:()=>y});var c=s(5861),d=s(6895),u=s(433),i=s(9985),e=s(4650),p=s(958),h=s(7977),f=s(1205);function C(a,g){if(1&a&&(e.ynx(0),e.TgZ(1,"ion-select-option",49),e._uU(2),e.qZA(),e.BQk()),2&a){const r=g.$implicit;e.xp6(1),e.s9C("value",r.course),e.xp6(1),e.hij(" ",r.course," ")}}function m(a,g){if(1&a){const r=e.EpF();e.TgZ(0,"ion-datetime",50),e.NdJ("ionChange",function(n){e.CHM(r);const o=e.oxw();return e.KtG(o.yearFunction(n))}),e.qZA()}}function b(a,g){if(1&a&&(e.ynx(0),e._uU(1),e._UZ(2,"br"),e.BQk()),2&a){const r=g.$implicit;e.xp6(1),e.hij(" ",r," ")}}function P(a,g){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",51),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e.YNc(18,b,3,1,"ng-container",20),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td",51),e._uU(22),e.ALo(23,"date"),e.qZA(),e.TgZ(24,"td",51),e._uU(25),e.ALo(26,"date"),e.qZA()()),2&a){const r=g.$implicit;e.xp6(2),e.Oqu(r.fullName),e.xp6(2),e.Oqu(r.studentno),e.xp6(2),e.Oqu(r.faculty),e.xp6(2),e.Oqu(r.course),e.xp6(2),e.Oqu(r.count),e.xp6(2),e.Oqu(r.city),e.xp6(2),e.Oqu(r.status),e.xp6(2),e.Oqu(r.email),e.xp6(2),e.Q6J("ngForOf",r.companyNames),e.xp6(2),e.Oqu(r.loginCount),e.xp6(2),e.Oqu(r.recommendDate?e.xi3(23,12,r.recommendDate.toDate(),"yyyy-MM-dd"):""),e.xp6(3),e.Oqu(r.placedDate?e.xi3(26,15,r.placedDate.toDate(),"yyyy-MM-dd"):"")}}const M=function(a){return{open:a}};let y=(()=>{var a;class g{constructor(t,n,o,l,O,U,Z,T){this.alertController=t,this.toastController=n,this.firestore=o,this.db=l,this.loadingController=O,this.auth=Z,this.navController=T,this.tableData=[],this.faculty="",this.level="",this.course=[],this.crs="",this.references=[],this.coursedata=[],this.showSecondDropdownFlag=!1,this.recommended=0,this.naturalSciencesData=[],this.year="",this.studentno="",this.status="",this.genderbase="",this.isNavOpen=!1,this.getHistoryData()}ngOnInit(){}yearFunction(t){const n=new Date(t.detail.value).getFullYear();this.db.collection("studentProfile",o=>o.where("createdAt",">=",new Date(n,0,1)).where("createdAt","<=",new Date(n,11,31))).valueChanges().subscribe(o=>{console.log(o),this.tableData=o})}toggleNav(){console.log("menu"),this.isNavOpen=!this.isNavOpen}goToView(){this.navController.navigateBack("/staffprofile")}handleMenuClick(){console.log("Menu button clicked")}searchByStudentNo(){this.studentno&&""!==this.studentno.trim()?this.db.collection("studentProfile",n=>n.where("studentno","==",this.studentno)).valueChanges().subscribe(n=>{this.tableData=n}):this.getAllData()}getAllData(){this.db.collection("studentProfile",t=>t.where("status","==","recommended")).valueChanges().subscribe(t=>{this.userData=t,console.log(t),this.tableData=t})}getCourse(t){var n=this;return(0,c.Z)(function*(){n.db.collection(t.detail.value,o=>o.where("course",">","")).valueChanges().subscribe(o=>{n.course=o,n.faculty=t.detail.value,n.level=t.detail.value})})()}isArray(t){return Array.isArray(t)}getHistoryData(){this.db.collection("studentProfile").valueChanges().subscribe(t=>{this.historyData=t,console.log(t),this.tableData=t})}applyFilter(){this.firestore.collection("studentProfile",t=>t.where("faculty","==",this.faculty)).valueChanges().subscribe(t=>{this.tableData=t,console.log(t)})}applySecondFilter(){this.firestore.collection("studentProfile",t=>t.where("course","==",this.crs)).valueChanges().subscribe(t=>{this.tableData=t,console.log(t)})}statusFilter(t){this.status=t.detail.value}filter(){this.firestore.collection("studentProfile",n=>{let o=n;return console.log(this.status),this.level&&(o=o.where("level","==",this.level)),this.faculty&&(o=o.where("faculty","==",this.faculty)),this.crs&&(o=o.where("course","==",this.crs)),this.status&&(o=o.where("status","==",this.status)),this.genderbase&&(o=o.where("gender","==",this.genderbase)),this.studentno&&(o=o.where("studentno","==",this.studentno)),o}).valueChanges().subscribe(n=>{this.tableData=n,console.log(n)})}ionViewDidEnter(){this.getUser()}getUser(){var t=this;return(0,c.Z)(function*(){const n=yield t.auth.currentUser;if(n)try{const o=yield t.db.collection("registeredStaff").ref.where("email","==",n.email).get();o.empty||(t.userDocument=o.docs[0].data(),console.log(t.userDocument))}catch(o){console.error("Error getting user document:",o)}})()}goToValidator(){var t=this;return(0,c.Z)(function*(){try{yield t.getUser(),t.userDocument&&t.userDocument.role&&"on"===t.userDocument.role.validation?t.navController.navigateForward("/ga-validation"):(yield t.toastController.create({message:"Unauthorized user.",duration:2e3,position:"top"})).present()}catch(n){console.error("Error navigating to grade avaerage validator Page:",n)}})()}goToAddUser(){var t=this;return(0,c.Z)(function*(){try{yield t.getUser(),t.userDocument&&t.userDocument.role&&"on"===t.userDocument.role.addUser?t.navController.navigateForward("/add-user"):(yield t.toastController.create({message:"Unauthorized user.",duration:2e3,position:"top"})).present()}catch(n){console.error("Error navigating to Add user Page:",n)}})()}goToEmployment(){var t=this;return(0,c.Z)(function*(){try{yield t.getUser(),t.userDocument&&t.userDocument.role&&"on"===t.userDocument.role.employment?t.navController.navigateForward("/employment-page"):(yield t.toastController.create({message:"Unauthorized user.",duration:2e3,position:"top"})).present()}catch(n){console.error("Error navigating to Employment Page:",n)}})()}goToReports(){var t=this;return(0,c.Z)(function*(){try{yield t.getUser(),t.userDocument&&t.userDocument.role&&"on"===t.userDocument.role.statistic?t.navController.navigateForward("/reports"):(yield t.toastController.create({message:"Unauthorized user.",duration:2e3,position:"top"})).present()}catch(n){console.error("Error navigating to Reports Page:",n)}})()}goToWil(){var t=this;return(0,c.Z)(function*(){try{yield t.getUser(),t.userDocument&&t.userDocument.role&&"on"===t.userDocument.role.wil?t.navController.navigateForward("/wil-page"):(yield t.toastController.create({message:"Unauthorized user.",duration:2e3,position:"top"})).present()}catch(n){console.error("Error navigating to WIL Page:",n)}})()}presentConfirmationAlert(){var t=this;return(0,c.Z)(function*(){yield(yield t.alertController.create({header:"Confirmation",message:"Are you sure you want to SIGN OUT?",buttons:[{text:"Cancel",role:"cancel",cssClass:"my-custom-alert",handler:()=>{console.log("Confirmation canceled")}},{text:"Confirm",handler:()=>{t.auth.signOut().then(()=>{t.navController.navigateForward("/sign-in"),t.presentToast()}).catch(o=>{})}}]})).present()})()}presentToast(){var t=this;return(0,c.Z)(function*(){yield(yield t.toastController.create({message:"SIGNED OUT!",duration:1500,position:"top"})).present()})()}goToMenuPage(){this.navController.navigateForward("/menu").then(()=>{window.location.reload()})}goToHomePage(){this.navController.navigateBack("/home")}}return(a=g).\u0275fac=function(t){return new(t||a)(e.Y36(i.Br),e.Y36(i.yF),e.Y36(h.ST),e.Y36(h.ST),e.Y36(i.HT),e.Y36(p.SH),e.Y36(f.zQ),e.Y36(p.SH))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-history"]],standalone:!0,features:[e.jDz],decls:151,vars:14,consts:[[3,"translucent"],[1,"header-container"],[1,"logo"],["src","assets\\MUT LOGO.png","alt","Logo"],[1,"hamburger-menu",3,"click"],[1,"bar"],[1,"nav-links",3,"ngClass"],[1,"nav-link",3,"click"],[1,"nav-link","business-dropdown"],["name","caret-down-outline"],[1,"dropdown-content"],[1,"dropdown-item",3,"click"],["routerLink","/staffprofile",1,"dropdown-item"],[2,"--background","url('assets/view1.jpg') no-repeat center / cover",3,"fullscreen"],["lines","none",1,"dropdown"],[3,"ngModel","ngModelChange","ionChange"],["value","Natural Sciences"],["value","Management Sciences"],["value","Engineering"],["interface","action-sheet",3,"ngModel","ngModelChange","ionChange"],[4,"ngFor","ngForOf"],["item-start",""],["interface","popover","placeholder","",3,"ngModel","ngModelChange","ionChange"],["value","WIL"],["value","EMPLOYMENT"],["datetime","datetime","presentation","year"],[3,"keepContentsMounted"],["value","Female"],["value","Male"],["value","active"],["value","recommended"],["value","declined"],["value","pending"],["type","text","placeholder","Search using student number",3,"ngModel","ngModelChange","ionChange"],[1,"cent",2,"width","100%","overflow-x","auto"],[1,"bordered"],[1,"color"],[1,"header-cell"],["name","person"],["name","albums-outline"],["name","school"],["name","book"],["name","trending-up"],["name","location"],["name","options"],["name","mail"],["name","log-in-outline"],["name","calendar"],[1,"body"],[3,"value"],["id","datetime","display-formart","YYYY","presentation","year",3,"ionChange"],[1,"white-text"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"nav")(2,"div",1)(3,"a",2),e._UZ(4,"img",3),e._uU(5,"Add User"),e.qZA(),e.TgZ(6,"div",4),e.NdJ("click",function(){return n.toggleNav()}),e._UZ(7,"div",5)(8,"div",5)(9,"div",5),e.qZA(),e.TgZ(10,"div",6)(11,"a",7),e.NdJ("click",function(){return n.goToMenuPage()}),e._uU(12,"Menu"),e.qZA(),e.TgZ(13,"div",8)(14,"span"),e._UZ(15,"ion-icon",9),e._uU(16,"Tasks"),e.qZA(),e.TgZ(17,"div",10)(18,"a",11),e.NdJ("click",function(){return n.goToValidator()}),e._uU(19,"Profile Validator"),e.qZA(),e.TgZ(20,"a",11),e.NdJ("click",function(){return n.goToEmployment()}),e._uU(21,"Employment"),e.qZA(),e.TgZ(22,"a",11),e.NdJ("click",function(){return n.goToWil()}),e._uU(23,"WIL"),e.qZA(),e.TgZ(24,"a",12),e._uU(25,"Profile"),e.qZA()()(),e.TgZ(26,"a",7),e.NdJ("click",function(){return n.goToReports()}),e._uU(27,"Reports"),e.qZA(),e.TgZ(28,"a",7),e.NdJ("click",function(){return n.presentConfirmationAlert()}),e._uU(29,"Sign Out"),e.qZA()()()()(),e.TgZ(30,"ion-content",13)(31,"div")(32,"ion-grid")(33,"ion-row")(34,"ion-col")(35,"ion-item",14)(36,"ion-label"),e._uU(37,"Faculty"),e.qZA(),e.TgZ(38,"ion-select",15),e.NdJ("ngModelChange",function(l){return n.faculty=l})("ionChange",function(l){return n.getCourse(l)})("ionChange",function(){return n.applyFilter()}),e.TgZ(39,"ion-select-option",16),e._uU(40,"Natural Sciences"),e.qZA(),e.TgZ(41,"ion-select-option",17),e._uU(42,"Management Sciences"),e.qZA(),e.TgZ(43,"ion-select-option",18),e._uU(44,"Engineering"),e.qZA()()()(),e.TgZ(45,"ion-col")(46,"ion-item",14)(47,"ion-label"),e._uU(48,"Course"),e.qZA(),e.TgZ(49,"ion-select",19),e.NdJ("ngModelChange",function(l){return n.crs=l})("ionChange",function(){return n.applySecondFilter()}),e.YNc(50,C,3,2,"ng-container",20),e.qZA()()(),e.TgZ(51,"ion-col")(52,"ion-item",21)(53,"ion-label"),e._uU(54,"WIL/EMPLOYMENT"),e.qZA(),e.TgZ(55,"ion-select",22),e.NdJ("ngModelChange",function(l){return n.level=l})("ionChange",function(){return n.filter()}),e.TgZ(56,"ion-select-option",23),e._uU(57,"WIL"),e.qZA(),e.TgZ(58,"ion-select-option",24),e._uU(59,"EMPLOYMENT"),e.qZA()()()(),e.TgZ(60,"ion-col")(61,"ion-item")(62,"ion-label"),e._uU(63,"YEAR"),e.qZA(),e._UZ(64,"ion-datetime-button",25),e.TgZ(65,"ion-modal",26),e.YNc(66,m,1,0,"ng-template"),e.qZA()()(),e.TgZ(67,"ion-col")(68,"ion-item",21)(69,"ion-label"),e._uU(70,"Gender"),e.qZA(),e.TgZ(71,"ion-select",15),e.NdJ("ngModelChange",function(l){return n.genderbase=l})("ionChange",function(){return n.filter()}),e.TgZ(72,"ion-select-option",27),e._uU(73,"Female"),e.qZA(),e.TgZ(74,"ion-select-option",28),e._uU(75,"Male"),e.qZA()()()(),e.TgZ(76,"ion-col")(77,"ion-item",21)(78,"ion-label"),e._uU(79,"Status"),e.qZA(),e.TgZ(80,"ion-select",22),e.NdJ("ngModelChange",function(l){return n.status=l})("ionChange",function(){return n.filter()}),e.TgZ(81,"ion-select-option",29),e._uU(82,"Active"),e.qZA(),e.TgZ(83,"ion-select-option",30),e._uU(84,"Recommended"),e.qZA(),e.TgZ(85,"ion-select-option",31),e._uU(86,"Declined"),e.qZA(),e.TgZ(87,"ion-select-option",32),e._uU(88,"pending"),e.qZA()()()()()(),e.TgZ(89,"ion-item")(90,"ion-input",33),e.NdJ("ngModelChange",function(l){return n.studentno=l})("ionChange",function(){return n.searchByStudentNo()}),e.qZA()(),e.TgZ(91,"div")(92,"ion-grid")(93,"div",34)(94,"table",35)(95,"thead",36)(96,"tr")(97,"th",37),e._UZ(98,"ion-icon",38)(99,"br"),e._uU(100," Student "),e.qZA(),e.TgZ(101,"th",37),e._UZ(102,"ion-icon",39)(103,"br"),e._uU(104," Student No. "),e.qZA(),e.TgZ(105,"th",37),e._UZ(106,"ion-icon",40)(107,"br"),e._uU(108," Faculty "),e.qZA(),e.TgZ(109,"th",37),e._UZ(110,"ion-icon",41)(111,"br"),e._uU(112," Course "),e.qZA(),e.TgZ(113,"th",37),e._UZ(114,"ion-icon",42)(115,"br"),e._uU(116," No of Recommendations "),e.qZA(),e.TgZ(117,"th",37),e._UZ(118,"ion-icon",43)(119,"br"),e._uU(120," City "),e.qZA(),e.TgZ(121,"th",37),e._UZ(122,"ion-icon",44)(123,"br"),e._uU(124," Status "),e.qZA(),e.TgZ(125,"th",37),e._UZ(126,"ion-icon",45)(127,"br"),e._uU(128," Email "),e.qZA(),e.TgZ(129,"th",37),e._UZ(130,"ion-icon",44)(131,"br"),e._uU(132," Company Name "),e.qZA(),e.TgZ(133,"th",37),e._UZ(134,"ion-icon",46)(135,"br"),e._uU(136," Login Count "),e.qZA(),e.TgZ(137,"th",37),e._UZ(138,"ion-icon",47)(139,"br"),e._uU(140," Recommend Date "),e.qZA(),e.TgZ(141,"th",37),e._UZ(142,"ion-icon",47)(143,"br"),e._uU(144," Placed Date "),e.qZA()()(),e.TgZ(145,"tbody",48),e.YNc(146,P,27,18,"tr",20),e.qZA()()()()()()(),e.TgZ(147,"ion-footer"),e._uU(148," Designed by @"),e.TgZ(149,"b"),e._uU(150,"MUT INNOVATIONLAB"),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(10),e.Q6J("ngClass",e.VKq(12,M,n.isNavOpen)),e.xp6(20),e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngModel",n.faculty),e.xp6(11),e.Q6J("ngModel",n.crs),e.xp6(1),e.Q6J("ngForOf",n.course),e.xp6(5),e.Q6J("ngModel",n.level),e.xp6(10),e.Q6J("keepContentsMounted",!0),e.xp6(6),e.Q6J("ngModel",n.genderbase),e.xp6(9),e.Q6J("ngModel",n.status),e.xp6(10),e.Q6J("ngModel",n.studentno),e.xp6(56),e.Q6J("ngForOf",n.tableData))},dependencies:[i.Pc,i.wI,i.W2,i.x4,i.Mj,i.fr,i.jY,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.Nd,i.t9,i.n0,i.ki,i.QI,i.j9,i.Fo,d.ez,d.mk,d.sg,d.uU,u.u5,u.JJ,u.On],styles:['.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.bordered[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent;border:none}.bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;vertical-align:top;border:none}.bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom;border-bottom:none;background-color:#8b4513;color:#fff;font-weight:700}.bordered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] + tbody[_ngcontent-%COMP%]{border-top:2px solid #dee2e6}.color[_ngcontent-%COMP%]{background-color:#f8f9fa}.white-text[_ngcontent-%COMP%]{color:#141414}.bordered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#696969;color:#fff}.bordered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even){background-color:#f2f2f2}@media screen and (max-width: 768px){.bordered[_ngcontent-%COMP%]{display:block;overflow-x:auto;white-space:nowrap}.bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .bordered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .bordered[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:block}.bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{position:absolute;top:-9999px;left:-9999px}.bordered[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:none}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #dee2e6;position:relative;padding-left:50%}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(1):before{content:"Student: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2):before{content:"Faculty: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3):before{content:"Course: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(4):before{content:"No of Recommendations: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(5):before{content:"City: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(6):before{content:"Email: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(7):before{content:"Level: ";font-weight:700}.bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(8):before{content:"Grade Average: ";font-weight:700}}ion-toolbar[_ngcontent-%COMP%]{padding:0;margin:0}.cent[_ngcontent-%COMP%]{max-height:480px;overflow:auto}.bordered[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.color[_ngcontent-%COMP%]{background-color:#f2f2f2}.header-cell[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;text-align:center}.header-cell[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#fff}.body[_ngcontent-%COMP%]{overflow-y:scroll;max-height:300px}','img[_ngcontent-%COMP%]{width:100px;height:60px}ion-footer[_ngcontent-%COMP%]{background-color:#300505;color:#fcfcfc;text-align:center}.tooltip[_ngcontent-%COMP%]{position:relative;display:inline-block}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;width:200px;background-color:#000;color:#fff;text-align:center;padding:5px;border-radius:5px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-100px;opacity:0;transition:opacity .3s}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#000000 transparent transparent transparent}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible;opacity:1}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px;text-align:left}th[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#444}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.placeholder[_ngcontent-%COMP%]{background-color:#ead2da;border-radius:10px;border:1px solid #d75656}ion-content[_ngcontent-%COMP%]{--background: #fff}ion-card[_ngcontent-%COMP%]{background-color:#fff;width:550px;height:230px;margin:0 auto}ion-content[_ngcontent-%COMP%]{--background:#fff}ion-toolbar[_ngcontent-%COMP%]{background-color:#333;color:#fff;padding:10px;width:100%}h2[_ngcontent-%COMP%]{font-size:20px;margin:0}ion-popover[_ngcontent-%COMP%]{width:200px}ion-list[_ngcontent-%COMP%]{padding:0}ion-item[_ngcontent-%COMP%]{padding:10px}ion-icon[_ngcontent-%COMP%]{margin-right:5px}.image-size[_ngcontent-%COMP%]{width:100px;height:60px}ion-menu[_ngcontent-%COMP%]{--ion-menu-width: 50%}ion-content[_ngcontent-%COMP%]{--ion-safe-area-top: 0;--ion-safe-area-bottom: 0}.placeholder[_ngcontent-%COMP%]{background-color:#bbbabb;border-radius:10px;border:1px solid #380303}.send[_ngcontent-%COMP%]{margin-left:90%;margin-top:-4%}.center[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--background:lightgoldenrodyellow}.container[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}ion-card[_ngcontent-%COMP%]{background-color:#fff0f5;width:550px;height:230px;margin:0 auto}.info[_ngcontent-%COMP%]{background-color:#d3d3d3;text-align:center;margin-bottom:-10px}ion-content[_ngcontent-%COMP%]{--background:#ECF0F6}p[_ngcontent-%COMP%]{color:red}.header-title[_ngcontent-%COMP%]{margin:0 auto;text-align:center;color:#fff;font-weight:700}ion-button[_ngcontent-%COMP%]{color:#000}.pagination[_ngcontent-%COMP%], .centered-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}.pagination-button[_ngcontent-%COMP%]{background-color:#c42e2e;color:#fff;padding:10px 20px;border:none;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px;cursor:pointer;border-radius:4px;box-shadow:0 2px 4px #0003}.pagination-button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}']}),g})()}}]);