(this.webpackJsonpcoin98_extension=this.webpackJsonpcoin98_extension||[]).push([[6],{3346:function(e,t,a){"use strict";a.r(t);var c=a(160),n=a(243),r=a(3332),s=a(3345),i=a(3266),o=a(3277);const l=Object(i.a)({apiKey:"AIzaSyAV_Le1rX72lb3CxEEVl9qbHBTcwCAgcoU",authDomain:"coin98-extension.firebaseapp.com",projectId:"coin98-extension",storageBucket:"coin98-extension.appspot.com",messagingSenderId:"140500382279",appId:"1:140500382279:web:069c0d0499a55833497762",measurementId:"G-17XJ90XZBQ"}),d=Object(o.a)(l);var b=a(124),u=a(31),p=a(183),j=a(350),f=a(88),O=a(1);t.default=()=>{const e=Object(c.a)(),t=Object(n.f)(),a=Object(u.d)(e=>e.walletRedux),i=Object(O.useRef)(!1),l=Object(r.a)(a);return Object(s.a)(()=>{(({name:e,provider:t})=>{Object(o.b)(d,"screen_view",{firebase_screen:e,firebase_screen_class:t})})({name:t.pathname,provider:window.location.hred})},[t]),Object(s.a)(()=>{i.current&&b.a.redux("refreshAllWallet")},[e]),Object(O.useEffect)(()=>{(async()=>{await b.a.redux("refreshConfig"),await b.a.redux("callWalletFunction",["checkIsReady"]),b.a.redux("refreshAllWallet")})()},[]),Object(s.a)(()=>{if(i.current&&!(null!==l&&void 0!==l&&l.length)!==(null===a||void 0===a?void 0:a.length))try{Object(p.a)({type:j.c.UPDATE_WALLET,detail:{data:Object(f.Z)(a),dataSync:{walletRedux:a}}})}catch(e){}else i.current=!0},[a]),null}}}]);