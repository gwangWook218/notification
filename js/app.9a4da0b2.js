(function(){"use strict";var e={448:function(e,t,n){var i=n(751),o=n(641);const l={class:"settings-page"},s={class:"notification-list"},a={class:"notification-item"},u={class:"notification-item"},c={class:"notification-item"},r={class:"notification-item"},p={class:"notification-item"},d={class:"notification-item"},v={class:"notification-item"},g={class:"notification-item"},f={class:"notification-item"},m={class:"container"};function k(e,t,n,k,h,b){const A=(0,o.g2)("ToggleSwitch"),L=(0,o.g2)("ActiveToggleSwitch");return(0,o.uX)(),(0,o.CE)("div",l,[t[23]||(t[23]=(0,o.Lk)("h1",null,"알림 설정",-1)),(0,o.Lk)("ul",s,[(0,o.Lk)("li",a,[t[13]||(t[13]=(0,o.Lk)("span",null,"새 메시지 알림",-1)),(0,o.bF)(A,{modelValue:h.settings.newMessageAlert,"onUpdate:modelValue":t[0]||(t[0]=e=>h.settings.newMessageAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",u,[t[14]||(t[14]=(0,o.Lk)("span",null,"메시지 알림",-1)),(0,o.bF)(A,{modelValue:h.settings.messageAlert,"onUpdate:modelValue":t[1]||(t[1]=e=>h.settings.messageAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",c,[t[15]||(t[15]=(0,o.Lk)("span",null,"소리",-1)),(0,o.bF)(L,{modelValue:h.settings.sound,"onUpdate:modelValue":t[2]||(t[2]=e=>h.settings.sound=e)},null,8,["modelValue"])]),(0,o.Lk)("li",r,[t[16]||(t[16]=(0,o.Lk)("span",null,"진동",-1)),(0,o.bF)(L,{modelValue:h.settings.vibration,"onUpdate:modelValue":t[3]||(t[3]=e=>h.settings.vibration=e)},null,8,["modelValue"])]),(0,o.Lk)("li",p,[t[17]||(t[17]=(0,o.Lk)("span",null,"진동 패턴",-1)),(0,o.bF)(L,{modelValue:h.settings.vibrationPattern,"onUpdate:modelValue":t[4]||(t[4]=e=>h.settings.vibrationPattern=e)},null,8,["modelValue"])]),(0,o.Lk)("li",d,[t[18]||(t[18]=(0,o.Lk)("span",null,"알림 표시",-1)),(0,o.bF)(A,{modelValue:h.settings.notificationDisplay,"onUpdate:modelValue":t[5]||(t[5]=e=>h.settings.notificationDisplay=e)},null,8,["modelValue"])]),(0,o.Lk)("li",v,[t[19]||(t[19]=(0,o.Lk)("span",null,"키워드 알림",-1)),(0,o.bF)(A,{modelValue:h.settings.keywordAlert,"onUpdate:modelValue":t[6]||(t[6]=e=>h.settings.keywordAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",g,[t[20]||(t[20]=(0,o.Lk)("span",null,"답장 메시지 알림",-1)),(0,o.bF)(A,{modelValue:h.settings.replyMessageAlert,"onUpdate:modelValue":t[7]||(t[7]=e=>h.settings.replyMessageAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",f,[t[21]||(t[21]=(0,o.Lk)("span",null,"보이스룸 알림",-1)),(0,o.bF)(L,{modelValue:h.settings.voiceRoomAlert,"onUpdate:modelValue":t[8]||(t[8]=e=>h.settings.voiceRoomAlert=e)},null,8,["modelValue"])])]),(0,o.Lk)("div",m,[(0,o.Lk)("button",{class:"save-button",onClick:t[9]||(t[9]=(...e)=>b.saveSettings&&b.saveSettings(...e))}," 저장 ")]),h.showPopup?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"popup-overlay",onClick:t[12]||(t[12]=(...e)=>b.closePopup&&b.closePopup(...e))},[(0,o.Lk)("div",{class:"popup",onClick:t[11]||(t[11]=(0,i.D$)((()=>{}),["stop"]))},[t[22]||(t[22]=(0,o.Lk)("p",null,"설정이 저장되었습니다.",-1)),(0,o.Lk)("button",{class:"popup-close-button",onClick:t[10]||(t[10]=(...e)=>b.closePopup&&b.closePopup(...e))},"확인")])])):(0,o.Q3)("",!0)])}var h=n(33);const b={class:"switch-container"};function A(e,t,n,i,l,s){return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("div",{class:(0,h.C4)(["switch",{active:l.isActive}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},t[1]||(t[1]=[(0,o.Lk)("div",{class:"toggle"},null,-1)]),2)])}var L={data(){return{isActive:!1}},methods:{toggle(){this.isActive=!this.isActive}}},w=n(262);const V=(0,w.A)(L,[["render",A],["__scopeId","data-v-5f3279f2"]]);var y=V;const C={class:"switch-container"};function P(e,t,n,i,l,s){return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("div",{class:(0,h.C4)(["switch",{active:l.isActive}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},t[1]||(t[1]=[(0,o.Lk)("div",{class:"toggle"},null,-1)]),2)])}var O={props:{value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},watch:{value(e){this.isActive=e}},methods:{toggle(){this.isActive=!this.isActive,this.$emit("input",this.isActive)}}};const F=(0,w.A)(O,[["render",P],["__scopeId","data-v-39874332"]]);var U=F,j={components:{ToggleSwitch:y,ActiveToggleSwitch:U},data(){return{settings:{newMessageAlert:!1,messageAlert:!1,sound:!0,vibration:!0,vibrationPattern:!1,notificationDisplay:!1,keywordAlert:!1,replyMessageAlert:!1,voiceRoomAlert:!0},showPopup:!1}},methods:{saveSettings(){console.log("저장된 설정:",this.settings),this.showPopup=!0},closePopup(){this.showPopup=!1}}};const _=(0,w.A)(j,[["render",k],["__scopeId","data-v-23e15612"]]);var S=_;(0,i.Ef)(S).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,l){if(!i){var s=1/0;for(r=0;r<e.length;r++){i=e[r][0],o=e[r][1],l=e[r][2];for(var a=!0,u=0;u<i.length;u++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](i[u])}))?i.splice(u--,1):(a=!1,l<s&&(s=l));if(a){e.splice(r--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[i,o,l]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,l,s=i[0],a=i[1],u=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var r=u(n)}for(t&&t(i);c<s.length;c++)l=s[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(r)},i=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(448)}));i=n.O(i)})();
//# sourceMappingURL=app.9a4da0b2.js.map