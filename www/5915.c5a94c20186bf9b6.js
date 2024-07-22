"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5915],{5915:(P,l,a)=>{a.r(l),a.d(l,{MenuPage:()=>O});var s=a(5861),g=a(6895),m=a(433),r=a(9985),e=a(4650),h=a(958),p=a(1205),f=a(7977);const M=function(c){return{open:c}};let O=(()=>{var c;class u{constructor(o,n,t,i,d){this.alertController=o,this.toastController=n,this.navCtrl=t,this.auth=i,this.db=d,this.isNavOpen=!1,this.getUser(),this.navController=t}ngOnInit(){}goToView(){this.navController.navigateBack("/staffprofile")}handleMenuClick(){console.log("Menu button clicked")}toggleNav(){console.log("menu"),this.isNavOpen=!this.isNavOpen}ionViewDidEnter(){this.getUser()}getUser(){var o=this;return(0,s.Z)(function*(){const n=yield o.auth.currentUser;if(n)try{const t=yield o.db.collection("registeredStaff").ref.where("email","==",n.email).get();t.empty||(o.userDocument=t.docs[0].data(),console.log(o.userDocument))}catch(t){console.error("Error getting user document:",t)}})()}navigateBasedOnRole(o){var n=this;return(0,s.Z)(function*(){try{yield n.getUser();let t=!1,i="";if(n.userDocument&&n.userDocument.role)switch(o){case"wil-page":t="on"===n.userDocument.role.wil,i="Unauthorized user for Wil page.";break;case"employment-page":t="on"===n.userDocument.role.employment,i="Unauthorized user for Employment page.";break;case"history":t="on"===n.userDocument.role.history,i="Access denied to History page.";break;case"reports":t="on"===n.userDocument.role.statistic,i="Unauthorized user for Reports page.";break;case"add-user":t="on"===n.userDocument.role.addUser,i="Unauthorized user for wil page.";break;case"ga-validation":t="on"===n.userDocument.role.validation,i="Unauthorized user for grade validator page.";break;default:t=!1,i="Invalid page."}t?n.navController.navigateForward("/"+o):(yield n.toastController.create({message:"Unauthorized Access:You do not have the necessary permissions to access this page. Please contact the administrator for assistance.",duration:2e3,position:"top"})).present()}catch(t){console.error("Error navigating based on role:",t)}})()}goToWil(){return this.navigateBasedOnRole("wil-page")}goToEmployment(){return this.navigateBasedOnRole("employment-page")}goToHistory(){return this.navigateBasedOnRole("history")}goToReports(){return this.navigateBasedOnRole("reports")}goToAddUser(){return this.navigateBasedOnRole("add-user")}goToValidator(){return this.navigateBasedOnRole("ga-validation")}signOut(){this.navController.navigateForward("/home")}goToHomePage(){this.navController.navigateBack("/home")}presentConfirmationAlert(){var o=this;return(0,s.Z)(function*(){yield(yield o.alertController.create({header:"Confirmation",message:"Are you sure you want to SIGN OUT?",buttons:[{text:"Cancel",role:"cancel",cssClass:"my-custom-alert",handler:()=>{console.log("Confirmation canceled")}},{text:"Confirm",handler:()=>{o.auth.signOut().then(()=>{o.navCtrl.navigateForward("/sign-in"),o.presentToast()}).catch(t=>{})}}]})).present()})()}presentToast(){var o=this;return(0,s.Z)(function*(){yield(yield o.toastController.create({message:"SIGNED OUT!",duration:1500,position:"top"})).present()})()}}return(c=u).\u0275fac=function(o){return new(o||c)(e.Y36(r.Br),e.Y36(r.yF),e.Y36(h.SH),e.Y36(p.zQ),e.Y36(f.ST))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-menu"]],standalone:!0,features:[e.jDz],decls:54,vars:4,consts:[[3,"translucent"],[1,"header-container"],[1,"logo"],["src","assets\\MUT LOGO.png","alt","Logo"],[1,"hamburger-menu",3,"click"],[1,"bar"],[1,"nav-links",3,"ngClass"],[1,"nav-link",3,"click"],[1,"nav-link","business-dropdown"],["name","caret-down-outline"],[1,"dropdown-content"],[1,"dropdown-item",3,"click"],["routerLink","/staffprofile",1,"dropdown-item"],[2,"--background","url('assets/tiny.jpg') no-repeat center / cover"],[1,"ion-justify-content-center"],["size","8"],["button","",1,"WIL",2,"height","14rem","color","white",3,"click"],["name","document-text",2,"color","white"],["button","",1,"Employment",2,"height","14rem","color","white",3,"click"],["name","briefcase",2,"color","white"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"nav")(2,"div",1)(3,"a",2),e._UZ(4,"img",3),e._uU(5,"DASHBOARD"),e.qZA(),e.TgZ(6,"div",4),e.NdJ("click",function(){return n.toggleNav()}),e._UZ(7,"div",5)(8,"div",5)(9,"div",5),e.qZA(),e.TgZ(10,"div",6)(11,"a",7),e.NdJ("click",function(){return n.goToAddUser()}),e._uU(12,"Add Staff"),e.qZA(),e.TgZ(13,"div",8)(14,"span"),e._UZ(15,"ion-icon",9),e._uU(16,"Tasks"),e.qZA(),e.TgZ(17,"div",10)(18,"a",11),e.NdJ("click",function(){return n.goToValidator()}),e._uU(19,"Profile Validator"),e.qZA(),e.TgZ(20,"a",11),e.NdJ("click",function(){return n.goToEmployment()}),e._uU(21,"Employment"),e.qZA(),e.TgZ(22,"a",11),e.NdJ("click",function(){return n.goToHistory()}),e._uU(23,"History"),e.qZA(),e.TgZ(24,"a",11),e.NdJ("click",function(){return n.goToWil()}),e._uU(25,"WIL"),e.qZA(),e.TgZ(26,"a",12),e._uU(27,"Profile"),e.qZA()()(),e.TgZ(28,"a",7),e.NdJ("click",function(){return n.goToReports()}),e._uU(29,"Reports"),e.qZA(),e.TgZ(30,"a",7),e.NdJ("click",function(){return n.presentConfirmationAlert()}),e._uU(31,"Sign Out"),e.qZA()()()()(),e.TgZ(32,"ion-content",13)(33,"ion-grid")(34,"ion-row",14)(35,"ion-col",15)(36,"ion-card",16),e.NdJ("click",function(){return n.goToWil()}),e._UZ(37,"ion-icon",17),e.TgZ(38,"ion-text")(39,"h2"),e._uU(40,"WIL"),e.qZA()()()(),e.TgZ(41,"ion-col",15)(42,"ion-card",18),e.NdJ("click",function(){return n.goToEmployment()}),e._UZ(43,"ion-icon",19),e.TgZ(44,"ion-text")(45,"h2"),e._uU(46,"EMPLOYMENT"),e.qZA()()()()()(),e._UZ(47,"br")(48,"br")(49,"ion-card"),e.TgZ(50,"ion-footer"),e._uU(51," Designed by @"),e.TgZ(52,"b"),e._uU(53,"MUT INNOVATIONLAB"),e.qZA()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(10),e.Q6J("ngClass",e.VKq(2,M,n.isNavOpen)))},dependencies:[r.Pc,r.PM,r.wI,r.W2,r.fr,r.jY,r.Gu,r.gu,r.Nd,r.yW,r.Fo,g.ez,g.mk,m.u5],styles:["ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{zoom:2.8;padding:5px}ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-child{zoom:3.8;padding:5px}ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{text-align:center}.menu[_ngcontent-%COMP%]{color:#fff;font-family:Arial}ion-footer[_ngcontent-%COMP%]{background-color:#300505;color:#fcfcfc;text-align:center}ion-header[_ngcontent-%COMP%]{background-color:maroon}.header-title[_ngcontent-%COMP%]{margin:0 auto;text-align:center;color:#fff;font-weight:700}img[_ngcontent-%COMP%]{width:100px;height:60px}ion-content[_ngcontent-%COMP%]{--background:#ECF0F6}ion-button[_ngcontent-%COMP%]{border-radius:50px;box-shadow:0 0 15px #460c0c;background-color:#444;color:#fff}ion-button[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #460b10}ion-buttons[slot=start][_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{color:#fff}.image-size[_ngcontent-%COMP%]{width:100px;height:60px}.Employment[_ngcontent-%COMP%]{background:#C89015}.WIL[_ngcontent-%COMP%]{background:#006281}"]}),u})()}}]);