(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cAcB:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J");class t{}var r=e("NcP4"),o=e("t68o"),i=e("zbXB"),u=e("pMnS"),d=e("W5yJ"),s=e("SVse"),b=e("IP0z"),c=e("Xd0L"),m=e("cUpR"),p=e("/HVE"),f=e("omvX"),g=a.pb({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function h(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function D(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)}))}function _(l){return a.Nb(2,[(l()(),a.rb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),a.qb(1,16384,null,0,s.o,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),a.gb(16777216,null,null,1,null,h)),a.qb(3,278528,null,0,s.p,[a.N,a.K,s.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),a.gb(16777216,null,null,1,null,D)),a.qb(5,278528,null,0,s.p,[a.N,a.K,s.o],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){l(n,1,0,"indeterminate"===n.component.mode),l(n,3,0,!0),l(n,5,0,!1)}),(function(l,n){var e=n.component;l(n,0,0,e.diameter,e.diameter,e._viewBox)}))}var v=e("HsOI"),q=e("bujt"),C=e("Fwaw"),w=e("5GAg"),y=e("s7LF"),S=e("dJrM"),k=e("ZwOa"),I=e("oapL"),B=e("lzlj"),x=e("igqZ");class N{constructor(l){this.authService=l,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(l=>{this.isLoading=!1})}onLogin(l){l.invalid||(this.isLoading=!0,this.authService.login(l.value.email,l.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}var F=e("qXBG"),J=a.pb({encapsulation:0,styles:[["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]],data:{}});function L(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,_,g)),a.qb(1,114688,null,0,d.d,[a.k,p.a,[2,s.d],[2,f.a],d.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,a.Db(n,1)._noopAnimations,a.Db(n,1).diameter,a.Db(n,1).diameter)}))}function P(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.qb(1,16384,[[6,4]],0,v.b,[],null,null),(l()(),a.Lb(-1,null,["Please enter a valid email."]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function M(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.qb(1,16384,[[15,4]],0,v.b,[],null,null),(l()(),a.Lb(-1,null,["Please enter a valid password."]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function j(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,q.d,q.b)),a.qb(1,180224,null,0,C.b,[a.k,w.h,[2,f.a]],{color:[0,"color"]},null),(l()(),a.Lb(-1,0,["Login"]))],(function(l,n){l(n,1,0,"accent")}),(function(l,n){l(n,0,0,a.Db(n,1).disabled||null,"NoopAnimations"===a.Db(n,1)._animationMode)}))}function O(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,53,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,r=l.component;return"submit"===n&&(t=!1!==a.Db(l,2).onSubmit(e)&&t),"reset"===n&&(t=!1!==a.Db(l,2).onReset()&&t),"submit"===n&&(t=!1!==r.onLogin(a.Db(l,2))&&t),t}),null,null)),a.qb(1,16384,null,0,y.y,[],null,null),a.qb(2,4210688,[["loginForm",4]],0,y.q,[[8,null],[8,null]],null,null),a.Ib(2048,null,y.b,null,[y.q]),a.qb(4,16384,null,0,y.p,[[4,y.b]],null,null),(l()(),a.rb(5,0,null,null,23,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,S.b,S.a)),a.qb(6,7520256,null,9,v.c,[a.k,a.h,[2,c.j],[2,b.b],[2,v.a],p.a,a.x,[2,f.a]],null,null),a.Jb(603979776,1,{_controlNonStatic:0}),a.Jb(335544320,2,{_controlStatic:0}),a.Jb(603979776,3,{_labelChildNonStatic:0}),a.Jb(335544320,4,{_labelChildStatic:0}),a.Jb(603979776,5,{_placeholderChild:0}),a.Jb(603979776,6,{_errorChildren:1}),a.Jb(603979776,7,{_hintChildren:1}),a.Jb(603979776,8,{_prefixChildren:1}),a.Jb(603979776,9,{_suffixChildren:1}),(l()(),a.rb(16,0,null,1,10,"input",[["class","mat-input-element mat-form-field-autofill-control"],["email",""],["matInput",""],["name","email"],["ngModel",""],["placeholder","E-Mail"],["required",""],["type","email"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Db(l,20)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,20).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,20)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,20)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,24)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,24)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,24)._onInput()&&t),t}),null,null)),a.qb(17,16384,null,0,y.t,[],{required:[0,"required"]},null),a.qb(18,16384,null,0,y.d,[],{email:[0,"email"]},null),a.Ib(1024,null,y.l,(function(l,n){return[l,n]}),[y.t,y.d]),a.qb(20,16384,null,0,y.c,[a.C,a.k,[2,y.a]],null,null),a.Ib(1024,null,y.m,(function(l){return[l]}),[y.c]),a.qb(22,671744,[["emailInput",4]],0,y.r,[[2,y.b],[6,y.l],[8,null],[6,y.m]],{name:[0,"name"],model:[1,"model"]},null),a.Ib(2048,null,y.n,null,[y.r]),a.qb(24,999424,null,0,k.b,[a.k,p.a,[6,y.n],[2,y.q],[2,y.i],c.d,[8,null],I.a,a.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),a.qb(25,16384,null,0,y.o,[[4,y.n]],null,null),a.Ib(2048,[[1,4],[2,4]],v.d,null,[k.b]),(l()(),a.gb(16777216,null,5,1,null,P)),a.qb(28,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.rb(29,0,null,null,22,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,S.b,S.a)),a.qb(30,7520256,null,9,v.c,[a.k,a.h,[2,c.j],[2,b.b],[2,v.a],p.a,a.x,[2,f.a]],null,null),a.Jb(603979776,10,{_controlNonStatic:0}),a.Jb(335544320,11,{_controlStatic:0}),a.Jb(603979776,12,{_labelChildNonStatic:0}),a.Jb(335544320,13,{_labelChildStatic:0}),a.Jb(603979776,14,{_placeholderChild:0}),a.Jb(603979776,15,{_errorChildren:1}),a.Jb(603979776,16,{_hintChildren:1}),a.Jb(603979776,17,{_prefixChildren:1}),a.Jb(603979776,18,{_suffixChildren:1}),(l()(),a.rb(40,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Db(l,43)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,43).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,43)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,43)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,47)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,47)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,47)._onInput()&&t),t}),null,null)),a.qb(41,16384,null,0,y.t,[],{required:[0,"required"]},null),a.Ib(1024,null,y.l,(function(l){return[l]}),[y.t]),a.qb(43,16384,null,0,y.c,[a.C,a.k,[2,y.a]],null,null),a.Ib(1024,null,y.m,(function(l){return[l]}),[y.c]),a.qb(45,671744,[["passwordInput",4]],0,y.r,[[2,y.b],[6,y.l],[8,null],[6,y.m]],{name:[0,"name"],model:[1,"model"]},null),a.Ib(2048,null,y.n,null,[y.r]),a.qb(47,999424,null,0,k.b,[a.k,p.a,[6,y.n],[2,y.q],[2,y.i],c.d,[8,null],I.a,a.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),a.qb(48,16384,null,0,y.o,[[4,y.n]],null,null),a.Ib(2048,[[10,4],[11,4]],v.d,null,[k.b]),(l()(),a.gb(16777216,null,5,1,null,M)),a.qb(51,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,j)),a.qb(53,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,17,0,""),l(n,18,0,""),l(n,22,0,"email",""),l(n,24,0,"E-Mail","","email"),l(n,28,0,a.Db(n,22).invalid),l(n,41,0,""),l(n,45,0,"password",""),l(n,47,0,"Password","","password"),l(n,51,0,a.Db(n,45).invalid),l(n,53,0,!e.isLoading)}),(function(l,n){l(n,0,0,a.Db(n,4).ngClassUntouched,a.Db(n,4).ngClassTouched,a.Db(n,4).ngClassPristine,a.Db(n,4).ngClassDirty,a.Db(n,4).ngClassValid,a.Db(n,4).ngClassInvalid,a.Db(n,4).ngClassPending),l(n,5,1,["standard"==a.Db(n,6).appearance,"fill"==a.Db(n,6).appearance,"outline"==a.Db(n,6).appearance,"legacy"==a.Db(n,6).appearance,a.Db(n,6)._control.errorState,a.Db(n,6)._canLabelFloat,a.Db(n,6)._shouldLabelFloat(),a.Db(n,6)._hasFloatingLabel(),a.Db(n,6)._hideControlPlaceholder(),a.Db(n,6)._control.disabled,a.Db(n,6)._control.autofilled,a.Db(n,6)._control.focused,"accent"==a.Db(n,6).color,"warn"==a.Db(n,6).color,a.Db(n,6)._shouldForward("untouched"),a.Db(n,6)._shouldForward("touched"),a.Db(n,6)._shouldForward("pristine"),a.Db(n,6)._shouldForward("dirty"),a.Db(n,6)._shouldForward("valid"),a.Db(n,6)._shouldForward("invalid"),a.Db(n,6)._shouldForward("pending"),!a.Db(n,6)._animationsEnabled]),l(n,16,1,[a.Db(n,17).required?"":null,a.Db(n,24)._isServer,a.Db(n,24).id,a.Db(n,24).placeholder,a.Db(n,24).disabled,a.Db(n,24).required,a.Db(n,24).readonly&&!a.Db(n,24)._isNativeSelect||null,a.Db(n,24)._ariaDescribedby||null,a.Db(n,24).errorState,a.Db(n,24).required.toString(),a.Db(n,25).ngClassUntouched,a.Db(n,25).ngClassTouched,a.Db(n,25).ngClassPristine,a.Db(n,25).ngClassDirty,a.Db(n,25).ngClassValid,a.Db(n,25).ngClassInvalid,a.Db(n,25).ngClassPending]),l(n,29,1,["standard"==a.Db(n,30).appearance,"fill"==a.Db(n,30).appearance,"outline"==a.Db(n,30).appearance,"legacy"==a.Db(n,30).appearance,a.Db(n,30)._control.errorState,a.Db(n,30)._canLabelFloat,a.Db(n,30)._shouldLabelFloat(),a.Db(n,30)._hasFloatingLabel(),a.Db(n,30)._hideControlPlaceholder(),a.Db(n,30)._control.disabled,a.Db(n,30)._control.autofilled,a.Db(n,30)._control.focused,"accent"==a.Db(n,30).color,"warn"==a.Db(n,30).color,a.Db(n,30)._shouldForward("untouched"),a.Db(n,30)._shouldForward("touched"),a.Db(n,30)._shouldForward("pristine"),a.Db(n,30)._shouldForward("dirty"),a.Db(n,30)._shouldForward("valid"),a.Db(n,30)._shouldForward("invalid"),a.Db(n,30)._shouldForward("pending"),!a.Db(n,30)._animationsEnabled]),l(n,40,1,[a.Db(n,41).required?"":null,a.Db(n,47)._isServer,a.Db(n,47).id,a.Db(n,47).placeholder,a.Db(n,47).disabled,a.Db(n,47).required,a.Db(n,47).readonly&&!a.Db(n,47)._isNativeSelect||null,a.Db(n,47)._ariaDescribedby||null,a.Db(n,47).errorState,a.Db(n,47).required.toString(),a.Db(n,48).ngClassUntouched,a.Db(n,48).ngClassTouched,a.Db(n,48).ngClassPristine,a.Db(n,48).ngClassDirty,a.Db(n,48).ngClassValid,a.Db(n,48).ngClassInvalid,a.Db(n,48).ngClassPending])}))}function A(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,5,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,B.b,B.a)),a.qb(1,49152,null,0,x.a,[[2,f.a]],null,null),(l()(),a.gb(16777216,null,0,1,null,L)),a.qb(3,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,0,1,null,O)),a.qb(5,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.isLoading),l(n,5,0,!e.isLoading)}),(function(l,n){l(n,0,0,"NoopAnimations"===a.Db(n,1)._animationMode)}))}var E=a.nb("ng-component",N,(function(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,1,"ng-component",[],null,null,null,A,J)),a.qb(1,245760,null,0,N,[F.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class K{constructor(l){this.authService=l,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(l=>{this.isLoading=!1})}onSignup(l){l.invalid||(this.isLoading=!0,this.authService.createUser(l.value.email,l.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}var X=a.pb({encapsulation:0,styles:[["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]],data:{}});function z(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,_,g)),a.qb(1,114688,null,0,d.d,[a.k,p.a,[2,s.d],[2,f.a],d.a],null,null)],(function(l,n){l(n,1,0)}),(function(l,n){l(n,0,0,a.Db(n,1)._noopAnimations,a.Db(n,1).diameter,a.Db(n,1).diameter)}))}function T(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.qb(1,16384,[[6,4]],0,v.b,[],null,null),(l()(),a.Lb(-1,null,["Please enter a valid email."]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function U(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.qb(1,16384,[[15,4]],0,v.b,[],null,null),(l()(),a.Lb(-1,null,["Please enter a valid password."]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function V(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,q.d,q.b)),a.qb(1,180224,null,0,C.b,[a.k,w.h,[2,f.a]],{color:[0,"color"]},null),(l()(),a.Lb(-1,0,["Signup"]))],(function(l,n){l(n,1,0,"accent")}),(function(l,n){l(n,0,0,a.Db(n,1).disabled||null,"NoopAnimations"===a.Db(n,1)._animationMode)}))}function R(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,53,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,r=l.component;return"submit"===n&&(t=!1!==a.Db(l,2).onSubmit(e)&&t),"reset"===n&&(t=!1!==a.Db(l,2).onReset()&&t),"submit"===n&&(t=!1!==r.onSignup(a.Db(l,2))&&t),t}),null,null)),a.qb(1,16384,null,0,y.y,[],null,null),a.qb(2,4210688,[["signupForm",4]],0,y.q,[[8,null],[8,null]],null,null),a.Ib(2048,null,y.b,null,[y.q]),a.qb(4,16384,null,0,y.p,[[4,y.b]],null,null),(l()(),a.rb(5,0,null,null,23,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,S.b,S.a)),a.qb(6,7520256,null,9,v.c,[a.k,a.h,[2,c.j],[2,b.b],[2,v.a],p.a,a.x,[2,f.a]],null,null),a.Jb(603979776,1,{_controlNonStatic:0}),a.Jb(335544320,2,{_controlStatic:0}),a.Jb(603979776,3,{_labelChildNonStatic:0}),a.Jb(335544320,4,{_labelChildStatic:0}),a.Jb(603979776,5,{_placeholderChild:0}),a.Jb(603979776,6,{_errorChildren:1}),a.Jb(603979776,7,{_hintChildren:1}),a.Jb(603979776,8,{_prefixChildren:1}),a.Jb(603979776,9,{_suffixChildren:1}),(l()(),a.rb(16,0,null,1,10,"input",[["class","mat-input-element mat-form-field-autofill-control"],["email",""],["matInput",""],["name","email"],["ngModel",""],["placeholder","E-Mail"],["required",""],["type","email"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Db(l,20)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,20).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,20)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,20)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,24)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,24)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,24)._onInput()&&t),t}),null,null)),a.qb(17,16384,null,0,y.t,[],{required:[0,"required"]},null),a.qb(18,16384,null,0,y.d,[],{email:[0,"email"]},null),a.Ib(1024,null,y.l,(function(l,n){return[l,n]}),[y.t,y.d]),a.qb(20,16384,null,0,y.c,[a.C,a.k,[2,y.a]],null,null),a.Ib(1024,null,y.m,(function(l){return[l]}),[y.c]),a.qb(22,671744,[["emailInput",4]],0,y.r,[[2,y.b],[6,y.l],[8,null],[6,y.m]],{name:[0,"name"],model:[1,"model"]},null),a.Ib(2048,null,y.n,null,[y.r]),a.qb(24,999424,null,0,k.b,[a.k,p.a,[6,y.n],[2,y.q],[2,y.i],c.d,[8,null],I.a,a.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),a.qb(25,16384,null,0,y.o,[[4,y.n]],null,null),a.Ib(2048,[[1,4],[2,4]],v.d,null,[k.b]),(l()(),a.gb(16777216,null,5,1,null,T)),a.qb(28,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.rb(29,0,null,null,22,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,S.b,S.a)),a.qb(30,7520256,null,9,v.c,[a.k,a.h,[2,c.j],[2,b.b],[2,v.a],p.a,a.x,[2,f.a]],null,null),a.Jb(603979776,10,{_controlNonStatic:0}),a.Jb(335544320,11,{_controlStatic:0}),a.Jb(603979776,12,{_labelChildNonStatic:0}),a.Jb(335544320,13,{_labelChildStatic:0}),a.Jb(603979776,14,{_placeholderChild:0}),a.Jb(603979776,15,{_errorChildren:1}),a.Jb(603979776,16,{_hintChildren:1}),a.Jb(603979776,17,{_prefixChildren:1}),a.Jb(603979776,18,{_suffixChildren:1}),(l()(),a.rb(40,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Db(l,43)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,43).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,43)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,43)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,47)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,47)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,47)._onInput()&&t),t}),null,null)),a.qb(41,16384,null,0,y.t,[],{required:[0,"required"]},null),a.Ib(1024,null,y.l,(function(l){return[l]}),[y.t]),a.qb(43,16384,null,0,y.c,[a.C,a.k,[2,y.a]],null,null),a.Ib(1024,null,y.m,(function(l){return[l]}),[y.c]),a.qb(45,671744,[["passwordInput",4]],0,y.r,[[2,y.b],[6,y.l],[8,null],[6,y.m]],{name:[0,"name"],model:[1,"model"]},null),a.Ib(2048,null,y.n,null,[y.r]),a.qb(47,999424,null,0,k.b,[a.k,p.a,[6,y.n],[2,y.q],[2,y.i],c.d,[8,null],I.a,a.x],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),a.qb(48,16384,null,0,y.o,[[4,y.n]],null,null),a.Ib(2048,[[10,4],[11,4]],v.d,null,[k.b]),(l()(),a.gb(16777216,null,5,1,null,U)),a.qb(51,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,V)),a.qb(53,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,17,0,""),l(n,18,0,""),l(n,22,0,"email",""),l(n,24,0,"E-Mail","","email"),l(n,28,0,a.Db(n,22).invalid),l(n,41,0,""),l(n,45,0,"password",""),l(n,47,0,"Password","","password"),l(n,51,0,a.Db(n,45).invalid),l(n,53,0,!e.isLoading)}),(function(l,n){l(n,0,0,a.Db(n,4).ngClassUntouched,a.Db(n,4).ngClassTouched,a.Db(n,4).ngClassPristine,a.Db(n,4).ngClassDirty,a.Db(n,4).ngClassValid,a.Db(n,4).ngClassInvalid,a.Db(n,4).ngClassPending),l(n,5,1,["standard"==a.Db(n,6).appearance,"fill"==a.Db(n,6).appearance,"outline"==a.Db(n,6).appearance,"legacy"==a.Db(n,6).appearance,a.Db(n,6)._control.errorState,a.Db(n,6)._canLabelFloat,a.Db(n,6)._shouldLabelFloat(),a.Db(n,6)._hasFloatingLabel(),a.Db(n,6)._hideControlPlaceholder(),a.Db(n,6)._control.disabled,a.Db(n,6)._control.autofilled,a.Db(n,6)._control.focused,"accent"==a.Db(n,6).color,"warn"==a.Db(n,6).color,a.Db(n,6)._shouldForward("untouched"),a.Db(n,6)._shouldForward("touched"),a.Db(n,6)._shouldForward("pristine"),a.Db(n,6)._shouldForward("dirty"),a.Db(n,6)._shouldForward("valid"),a.Db(n,6)._shouldForward("invalid"),a.Db(n,6)._shouldForward("pending"),!a.Db(n,6)._animationsEnabled]),l(n,16,1,[a.Db(n,17).required?"":null,a.Db(n,24)._isServer,a.Db(n,24).id,a.Db(n,24).placeholder,a.Db(n,24).disabled,a.Db(n,24).required,a.Db(n,24).readonly&&!a.Db(n,24)._isNativeSelect||null,a.Db(n,24)._ariaDescribedby||null,a.Db(n,24).errorState,a.Db(n,24).required.toString(),a.Db(n,25).ngClassUntouched,a.Db(n,25).ngClassTouched,a.Db(n,25).ngClassPristine,a.Db(n,25).ngClassDirty,a.Db(n,25).ngClassValid,a.Db(n,25).ngClassInvalid,a.Db(n,25).ngClassPending]),l(n,29,1,["standard"==a.Db(n,30).appearance,"fill"==a.Db(n,30).appearance,"outline"==a.Db(n,30).appearance,"legacy"==a.Db(n,30).appearance,a.Db(n,30)._control.errorState,a.Db(n,30)._canLabelFloat,a.Db(n,30)._shouldLabelFloat(),a.Db(n,30)._hasFloatingLabel(),a.Db(n,30)._hideControlPlaceholder(),a.Db(n,30)._control.disabled,a.Db(n,30)._control.autofilled,a.Db(n,30)._control.focused,"accent"==a.Db(n,30).color,"warn"==a.Db(n,30).color,a.Db(n,30)._shouldForward("untouched"),a.Db(n,30)._shouldForward("touched"),a.Db(n,30)._shouldForward("pristine"),a.Db(n,30)._shouldForward("dirty"),a.Db(n,30)._shouldForward("valid"),a.Db(n,30)._shouldForward("invalid"),a.Db(n,30)._shouldForward("pending"),!a.Db(n,30)._animationsEnabled]),l(n,40,1,[a.Db(n,41).required?"":null,a.Db(n,47)._isServer,a.Db(n,47).id,a.Db(n,47).placeholder,a.Db(n,47).disabled,a.Db(n,47).required,a.Db(n,47).readonly&&!a.Db(n,47)._isNativeSelect||null,a.Db(n,47)._ariaDescribedby||null,a.Db(n,47).errorState,a.Db(n,47).required.toString(),a.Db(n,48).ngClassUntouched,a.Db(n,48).ngClassTouched,a.Db(n,48).ngClassPristine,a.Db(n,48).ngClassDirty,a.Db(n,48).ngClassValid,a.Db(n,48).ngClassInvalid,a.Db(n,48).ngClassPending])}))}function H(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,5,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,B.b,B.a)),a.qb(1,49152,null,0,x.a,[[2,f.a]],null,null),(l()(),a.gb(16777216,null,0,1,null,z)),a.qb(3,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,0,1,null,R)),a.qb(5,16384,null,0,s.l,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.isLoading),l(n,5,0,!e.isLoading)}),(function(l,n){l(n,0,0,"NoopAnimations"===a.Db(n,1)._animationMode)}))}var W=a.nb("ng-component",K,(function(l){return a.Nb(0,[(l()(),a.rb(0,0,null,null,1,"ng-component",[],null,null,null,H,X)),a.qb(1,245760,null,0,K,[F.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),Z=e("POq0"),G=e("QQfA"),Q=e("JjoW"),Y=e("Mz6y"),$=e("OIZN"),ll=e("s6ns"),nl=e("7kcP"),el=e("821u"),al=e("BzsH"),tl=e("5Bek"),rl=e("zMNK"),ol=e("c9fC"),il=e("hOhj"),ul=e("Gi4r"),dl=e("zQui"),sl=e("8rEH"),bl=e("jRB2"),cl=e("iInd");class ml{}e.d(n,"AuthModuleNgFactory",(function(){return pl}));var pl=a.ob(t,[],(function(l){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[r.a,o.a,i.b,i.a,u.a,E,W]],[3,a.j],a.v]),a.Bb(4608,s.n,s.m,[a.s,[2,s.z]]),a.Bb(4608,Z.c,Z.c,[]),a.Bb(4608,c.d,c.d,[]),a.Bb(4608,G.c,G.c,[G.i,G.e,a.j,G.h,G.f,a.p,a.x,s.d,b.b,[2,s.h]]),a.Bb(5120,G.j,G.k,[G.c]),a.Bb(5120,Q.a,Q.b,[G.c]),a.Bb(5120,Y.b,Y.c,[G.c]),a.Bb(4608,m.e,c.e,[[2,c.i],[2,c.n]]),a.Bb(5120,$.c,$.a,[[3,$.c]]),a.Bb(5120,ll.c,ll.d,[G.c]),a.Bb(135680,ll.e,ll.e,[G.c,a.p,[2,s.h],[2,ll.b],ll.c,[3,ll.e],G.e]),a.Bb(5120,nl.b,nl.a,[[3,nl.b]]),a.Bb(4608,el.i,el.i,[]),a.Bb(5120,el.a,el.b,[G.c]),a.Bb(4608,c.c,c.x,[[2,c.h],p.a]),a.Bb(4608,y.w,y.w,[]),a.Bb(1073742336,s.c,s.c,[]),a.Bb(1073742336,p.b,p.b,[]),a.Bb(1073742336,I.c,I.c,[]),a.Bb(1073742336,Z.d,Z.d,[]),a.Bb(1073742336,v.e,v.e,[]),a.Bb(1073742336,k.c,k.c,[]),a.Bb(1073742336,b.a,b.a,[]),a.Bb(1073742336,c.n,c.n,[[2,c.f],[2,m.f]]),a.Bb(1073742336,x.c,x.c,[]),a.Bb(1073742336,c.w,c.w,[]),a.Bb(1073742336,C.c,C.c,[]),a.Bb(1073742336,al.b,al.b,[]),a.Bb(1073742336,tl.c,tl.c,[]),a.Bb(1073742336,rl.f,rl.f,[]),a.Bb(1073742336,ol.d,ol.d,[]),a.Bb(1073742336,d.c,d.c,[]),a.Bb(1073742336,il.b,il.b,[]),a.Bb(1073742336,G.g,G.g,[]),a.Bb(1073742336,c.u,c.u,[]),a.Bb(1073742336,c.s,c.s,[]),a.Bb(1073742336,Q.d,Q.d,[]),a.Bb(1073742336,w.a,w.a,[]),a.Bb(1073742336,Y.e,Y.e,[]),a.Bb(1073742336,$.d,$.d,[]),a.Bb(1073742336,ll.k,ll.k,[]),a.Bb(1073742336,ul.c,ul.c,[]),a.Bb(1073742336,dl.p,dl.p,[]),a.Bb(1073742336,sl.l,sl.l,[]),a.Bb(1073742336,nl.c,nl.c,[]),a.Bb(1073742336,el.j,el.j,[]),a.Bb(1073742336,c.y,c.y,[]),a.Bb(1073742336,c.p,c.p,[]),a.Bb(1073742336,bl.a,bl.a,[]),a.Bb(1073742336,y.v,y.v,[]),a.Bb(1073742336,y.j,y.j,[]),a.Bb(1073742336,cl.o,cl.o,[[2,cl.t],[2,cl.k]]),a.Bb(1073742336,ml,ml,[]),a.Bb(1073742336,t,t,[]),a.Bb(256,c.g,c.k,[]),a.Bb(1024,cl.i,(function(){return[[{path:"login",component:N},{path:"signup",component:K}]]}),[])])}))}}]);