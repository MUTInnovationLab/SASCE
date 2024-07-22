"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8726],{8726:(K,T,a)=>{a.r(T),a.d(T,{StaffprofilePage:()=>R});var b=a(5861),O=a(6895),C=a(433),e=a(9985),p=a(9646),A=a(3900),_=a(9260),t=(a(4322),a(4650)),M=a(7977),y=a(958),U=a(377),E=a(1205),I=a(3862);function D(i,s){if(1&i){const l=t.EpF();t.TgZ(0,"ion-content")(1,"ion-list")(2,"ion-item",24),t.NdJ("click",function(){t.CHM(l);const n=t.oxw();return t.KtG(n.navigateBack())}),t._UZ(3,"ion-icon",25),t._uU(4,"\xa0 Back "),t.qZA(),t.TgZ(5,"ion-item",24),t.NdJ("click",function(){t.CHM(l);const n=t.oxw();return t.KtG(n.presentConfirmationAlert())}),t._UZ(6,"ion-icon",26),t._uU(7,"\xa0"),t.TgZ(8,"p"),t._uU(9,"LOGOUT"),t.qZA()()()()}2&i&&(t.xp6(2),t.Q6J("button",!0)("detail",!1),t.xp6(3),t.Q6J("button",!0)("detail",!1))}function k(i,s){1&i&&(t.TgZ(0,"div",27),t._uU(1," History "),t.qZA())}function S(i,s){1&i&&(t.TgZ(0,"div",27),t._uU(1," Reports "),t.qZA())}function w(i,s){1&i&&(t.TgZ(0,"div",27),t._uU(1," Employment "),t.qZA())}function q(i,s){1&i&&(t.TgZ(0,"div",27),t._uU(1," WIL "),t.qZA())}function L(i,s){1&i&&(t.TgZ(0,"div",27),t._uU(1," +New Users "),t.qZA())}function N(i,s){1&i&&(t.TgZ(0,"div",27),t._uU(1," Profile_Validation "),t.qZA())}function B(i,s){if(1&i){const l=t.EpF();t.TgZ(0,"div",28)(1,"ion-content")(2,"ion-header")(3,"ion-toolbar",29)(4,"ion-title",30),t._uU(5,"Query or Report Bug"),t.qZA(),t.TgZ(6,"ion-buttons",5)(7,"ion-button",31),t._UZ(8,"ion-icon",32),t.qZA()()()(),t.TgZ(9,"ion-item",33)(10,"ion-list")(11,"ion-item")(12,"ion-select",34),t.NdJ("ngModelChange",function(n){t.CHM(l);const r=t.oxw();return t.KtG(r.selectedIssue=n)}),t.TgZ(13,"ion-select-option",35),t._uU(14,"Uploading Files"),t.qZA(),t.TgZ(15,"ion-select-option",36),t._uU(16,"Status Change"),t.qZA(),t.TgZ(17,"ion-select-option",37),t._uU(18,"Creating Profile"),t.qZA(),t.TgZ(19,"ion-select-option",38),t._uU(20,"Profile Not Found"),t.qZA(),t.TgZ(21,"ion-select-option",39),t._uU(22,"Performance"),t.qZA(),t.TgZ(23,"ion-select-option",40),t._uU(24,"Other"),t.qZA()()()()(),t.TgZ(25,"ion-item",41)(26,"ion-label",42),t._uU(27,"Details"),t.qZA(),t.TgZ(28,"ion-textarea",43),t.NdJ("ngModelChange",function(n){t.CHM(l);const r=t.oxw();return t.KtG(r.details=n)}),t.qZA()(),t.TgZ(29,"ion-button",44),t.NdJ("click",function(){t.CHM(l);const n=t.oxw();return t.KtG(n.submitReport())}),t._uU(30,"Submit"),t.qZA()()()}if(2&i){const l=t.oxw();t.xp6(12),t.Q6J("ngModel",l.selectedIssue),t.xp6(16),t.Q6J("ngModel",l.details)}}let R=(()=>{var i;class s{constructor(o,n,r,g,d,u,f,m,h,P){this.firestore=o,this.loadingController=n,this.storage=r,this.auth=g,this.navCtrl=d,this.afs=u,this.alertController=f,this.db=m,this.toastController=h,this.router=P,this.user$=(0,p.of)(null),this.role={history:"off",statistic:"off",employment:"off",wil:"off",addUser:"off",validation:"off"},this.selectedIssue=null,this.details="",this.tableData=[],this.currentPage=1,this.rowsPerPage=10,this.userEmailArray=[],_.Z.auth().setPersistence(_.Z.auth.Auth.Persistence.LOCAL).then(()=>{this.user$=(0,p.of)(_.Z.auth().currentUser).pipe((0,A.w)(c=>c?this.afs.collection("registeredStaff",x=>x.where("email","==",c.email)).valueChanges().pipe((0,A.w)(x=>{if(x.length>0){const v=x[0];return console.log(v),(0,p.of)(v)}return console.log("No matching documents."),(0,p.of)(null)})):(0,p.of)(null)))}).catch(c=>{console.error("Error enabling Firebase authentication persistence:",c)})}ngOnInit(){}getProfileImage(){const o=this.detProfile;return o&&o.profileImage?o.profileImage:"assets/avatat.jpg"}submitReport(){const o=_.Z.auth().currentUser,r={issue:this.selectedIssue,details:this.details,userEmail:o?o.email:null,status:"pending-Issue"};console.log("reportData:",r),this.firestore.collection("REPORTS").add(r).then(()=>{this.selectedIssue=null,this.details=""}).catch(g=>{console.error("Error adding report:",g)})}goToMenuPage(){this.router.navigateByUrl("/menu")}presentConfirmationAlert(){var o=this;return(0,b.Z)(function*(){yield(yield o.alertController.create({header:"Confirmation",message:"Are you sure you want to SIGN OUT?",buttons:[{text:"Cancel",role:"cancel",cssClass:"my-custom-alert",handler:()=>{console.log("Confirmation canceled")}},{text:"Confirm",handler:()=>{o.auth.signOut().then(()=>{o.navController.navigateForward("/sign-in"),o.presentToast()}).catch(r=>{console.error("Error signing out:",r)})}}]})).present()})()}presentToast(){var o=this;return(0,b.Z)(function*(){yield(yield o.toastController.create({message:"SIGNED OUT!",duration:1500,position:"top"})).present()})()}goToHomePage(){this.router.navigateByUrl("/home")}navigateBack(){this.navController.back()}}return(i=s).\u0275fac=function(o){return new(o||i)(t.Y36(M.ST),t.Y36(e.HT),t.Y36(U.Q1),t.Y36(E.zQ),t.Y36(y.SH),t.Y36(M.ST),t.Y36(e.Br),t.Y36(M.ST),t.Y36(e.yF),t.Y36(I.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-staffprofile"]],standalone:!0,features:[t.jDz],decls:73,vars:31,consts:[["id","main-content",1,"ion-page"],[1,"custom-toolbar"],["slot","start",1,"phuto"],["src","assets\\MUT LOGO.png",1,"logo-img"],[1,"header-title"],["slot","end"],["id","popover-button"],["name","person"],["trigger","popover-button",3,"dismissOnSelect"],[2,"--background","url('assets/tiny.jpg') no-repeat center / cover"],[1,"profile-container"],[1,"profile-heading"],[1,"profile-details"],["lines","full"],[1,"label"],[1,"card-content"],[1,"task-grid"],[1,"task-row"],["class","task-col",4,"ngIf"],["id","open-custom-dialog","trigger","open-custom-dialog",1,"query-back"],["modal",""],[1,"loader"],["name","help-circle-sharp",1,"help-circle-sharp"],["id","example-modal","trigger","open-custom-dialog"],["lines","none",3,"button","detail","click"],["name","arrow-back-outline"],["color","danger","name","exit"],[1,"task-col"],[1,"wrapper"],["color","primary"],[1,"modal-title"],["fill","clear"],["name","close-outline","slot","icon-only"],["lines","none",1,"modal-input"],["aria-label","Issue","placeholder","Select Issue",3,"ngModel","ngModelChange"],["value","Uploading Files"],["value","Status Change"],["value","Creating Profile"],["value","Profile Not Found"],["value","Performance"],["value","Other"],["lines","none",1,"modal-input-area"],["position","floating"],["rows","12","placeholder","Describe your query or report",3,"ngModel","ngModelChange"],["expand","full","shape","round","color","primary",1,"modal-button",3,"click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-buttons",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"h2",4),t._uU(6,"STAFF PROFILE"),t.qZA(),t.TgZ(7,"ion-buttons",5)(8,"ion-button")(9,"ion-button",6),t._UZ(10,"ion-icon",7),t.TgZ(11,"ion-popover",8),t.YNc(12,D,10,4,"ng-template"),t.qZA()()()()()(),t.TgZ(13,"ion-content",9)(14,"div",10),t._UZ(15,"div",11),t.TgZ(16,"div",12)(17,"ion-list",13)(18,"ion-item")(19,"ion-label",14),t._uU(20,"Name"),t.qZA(),t.TgZ(21,"ion-text"),t._uU(22),t.ALo(23,"async"),t.qZA()(),t.TgZ(24,"ion-item")(25,"ion-label",14),t._uU(26,"Email"),t.qZA(),t.TgZ(27,"ion-text"),t._uU(28),t.ALo(29,"async"),t.qZA()(),t.TgZ(30,"ion-item")(31,"ion-label",14),t._uU(32,"Position"),t.qZA(),t.TgZ(33,"ion-text"),t._uU(34),t.ALo(35,"async"),t.qZA()(),t.TgZ(36,"ion-item")(37,"ion-label",14),t._uU(38,"Staff No."),t.qZA(),t.TgZ(39,"ion-text"),t._uU(40),t.ALo(41,"async"),t.qZA()()(),t.TgZ(42,"ion-card")(43,"ion-card-header"),t._uU(44," Task Granted "),t.qZA(),t.TgZ(45,"ion-card-content",15)(46,"div",16)(47,"div",17),t.YNc(48,k,2,0,"div",18),t.ALo(49,"async"),t.YNc(50,S,2,0,"div",18),t.ALo(51,"async"),t.qZA(),t.TgZ(52,"div",17),t.YNc(53,w,2,0,"div",18),t.ALo(54,"async"),t.YNc(55,q,2,0,"div",18),t.ALo(56,"async"),t.qZA(),t.TgZ(57,"div",17),t.YNc(58,L,2,0,"div",18),t.ALo(59,"async"),t.YNc(60,N,2,0,"div",18),t.ALo(61,"async"),t.qZA()()()()()(),t.TgZ(62,"ion-item",19,20)(64,"span",21),t._UZ(65,"ion-icon",22),t.qZA()(),t.TgZ(66,"ion-modal",23,20),t.YNc(68,B,31,2,"ng-template"),t.qZA()(),t.TgZ(69,"ion-footer"),t._uU(70," Designed by @"),t.TgZ(71,"b"),t._uU(72,"MUT INNOVATIONLAB"),t.qZA()()()),2&o){let r,g,d,u,f,m,h,P,c,Z;t.xp6(11),t.Q6J("dismissOnSelect",!0),t.xp6(11),t.Oqu(null==(r=t.lcZ(23,11,n.user$))?null:r.Name),t.xp6(6),t.Oqu(null==(g=t.lcZ(29,13,n.user$))?null:g.email),t.xp6(6),t.Oqu(null==(d=t.lcZ(35,15,n.user$))?null:d.position),t.xp6(6),t.Oqu(null==(u=t.lcZ(41,17,n.user$))?null:u.staffNumber),t.xp6(8),t.Q6J("ngIf","on"===(null==(f=t.lcZ(49,19,n.user$))?null:f.role.history)),t.xp6(2),t.Q6J("ngIf","on"===(null==(m=t.lcZ(51,21,n.user$))?null:m.role.statistic)),t.xp6(3),t.Q6J("ngIf","on"===(null==(h=t.lcZ(54,23,n.user$))?null:h.role.employment)),t.xp6(2),t.Q6J("ngIf","on"===(null==(P=t.lcZ(56,25,n.user$))?null:P.role.wil)),t.xp6(3),t.Q6J("ngIf","on"===(null==(c=t.lcZ(59,27,n.user$))?null:c.role.addUser)),t.xp6(2),t.Q6J("ngIf","on"===(null==(Z=t.lcZ(61,29,n.user$))?null:Z.role.validation))}},dependencies:[e.Pc,e.YG,e.Sm,e.PM,e.FN,e.Zi,e.W2,e.fr,e.Gu,e.gu,e.Ie,e.Q$,e.q_,e.t9,e.n0,e.yW,e.g2,e.wd,e.sr,e.ki,e.d8,e.QI,e.j9,O.ez,O.O5,O.Ov,C.u5,C.JJ,C.On],styles:['.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:32px}.profile-image-container[_ngcontent-%COMP%]{margin-bottom:24px}.profile-image[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;object-fit:cover}.profile-details[_ngcontent-%COMP%]{width:100%;max-width:400px;background-color:#006281;padding:24px;border-radius:8px;box-shadow:0 2px 4px #0000001a}.label[_ngcontent-%COMP%]{font-weight:700}ion-item[_ngcontent-%COMP%]{--highlight-background-focused: transparent;--highlight-color-focused: transparent}ion-text[_ngcontent-%COMP%]{font-size:16px}ion-card[_ngcontent-%COMP%]{margin-top:24px;background-color:#802b28;border-radius:8px;box-shadow:0 2px 4px #0000001a;display:flex;flex-direction:column}ion-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;padding:16px;border-bottom:1px solid #e0e0e0;color:#fff}ion-card-content[_ngcontent-%COMP%]{padding:16px;display:flex;justify-content:center}ion-content[_ngcontent-%COMP%]{--background-color: #473E66}ion-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}ion-col[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;padding:8px;background-color:#f5f5f5;border-radius:4px}ion-col[size="6"][_ngcontent-%COMP%]{grid-column:span 1}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.profile-container[_ngcontent-%COMP%], .profile-details[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}ion-card-header[_ngcontent-%COMP%], .task-col[_ngcontent-%COMP%]{color:#fff}.task-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.task-row[_ngcontent-%COMP%]{display:flex;align-items:center}.task-col[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;padding:8px;border-radius:4px;color:#fff}[_ngcontent-%COMP%]:root{--ion-background-color: #26425A}.profile-details[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background-color:transparent;margin-top:-16px}.profile-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--highlight-background-focused: transparent;--highlight-color-focused: transparent;--background: transparent;--color: white}.profile-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.label[_ngcontent-%COMP%]{color:#fff}.custom-toolbar[_ngcontent-%COMP%]{background-color:#333;color:#fff}.phuto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:110px;height:60px}.header-title[_ngcontent-%COMP%]{flex:1;text-align:center;font-size:1.5rem;font-weight:700;color:#fff}ion-menu-button[_ngcontent-%COMP%]{color:#fff}ion-popover[_ngcontent-%COMP%]{--background: white}.card-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}ion-footer[_ngcontent-%COMP%]{background-color:#300505;color:#fcfcfc;text-align:center}.help-circle-sharp[_ngcontent-%COMP%]{border-radius:50%;zoom:3;margin-left:6px;color:#055563}.loader[_ngcontent-%COMP%]{display:block;width:84px;height:84px;position:relative}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:0;width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,.5);transform:translate(-50%,-100%) scale(0);animation:_ngcontent-%COMP%_push_401 2s infinite linear}.loader[_ngcontent-%COMP%]:after{animation-delay:1s}@keyframes _ngcontent-%COMP%_push_401{0%,50%{transform:translate(-50%) scale(1)}to{transform:translate(-50%,-100%) scale(0)}}.query-back[_ngcontent-%COMP%]{--background: none;box-shadow:none;width:120px}.query-back[_ngcontent-%COMP%]:hover{box-shadow:none}ion-modal#example-modal[_ngcontent-%COMP%]{--width: fit-content;--min-width: 250px;--height: fit-content;--border-radius: 6px;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4)}ion-modal#example-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:20px 20px 10px}ion-modal#example-modal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:6px;width:48px;height:48px;padding:4px 0;color:#aaa}ion-modal#example-modal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin-bottom:10px}.modal-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-align:center}.modal-input[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:10px;--background: none}.modal-input-area[_ngcontent-%COMP%]{height:250px}ion-textarea[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:5px;padding:10px}.modal-button[_ngcontent-%COMP%]{margin-top:20px}.wrapper[_ngcontent-%COMP%]{width:400px;height:500px;background-color:#055563}ng-template[_ngcontent-%COMP%]{background:rgb(5,85,99);margin-left:700px}']}),s})()}}]);