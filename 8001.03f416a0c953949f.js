(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8001],{8001:(R,s,a)=>{"use strict";a.r(s),a.d(s,{Tab1PageModule:()=>b});var o=a(5562),i=a(4755),t=a(5030),n=a(581),r=a(5861),e=a(3020),u=a(3259),c=a(6550);const m=["qrcElement"];let B=(()=>{class f{constructor(l,d){this.renderer=l,this.sanitizer=d,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new e.vpe,this.context=null}ngOnChanges(){var l=this;return(0,r.Z)(function*(){yield l.createQRCode()})()}isValidQrCodeText(l){return!1===this.allowEmptyString?!(typeof l>"u"||""===l||"null"===l||null===l):!(typeof l>"u")}toDataURL(l){return new Promise((d,w)=>{(0,u.hz)(this.qrdata,l,(g,h)=>{g?w(g):d(h)})})}toCanvas(l,d){return new Promise((w,g)=>{(0,u.rT)(l,this.qrdata,d,h=>{h?g(h):w("success")})})}toSVG(l){return new Promise((d,w)=>{(0,u.toString)(this.qrdata,l,(g,h)=>{g?w(g):d(h)})})}renderElement(l){for(const d of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,d);this.renderer.appendChild(this.qrcElement.nativeElement,l)}createQRCode(){var l=this;return(0,r.Z)(function*(){l.version&&l.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),l.version=40):l.version&&l.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),l.version=1):void 0!==l.version&&isNaN(l.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),l.version=void 0);try{if(!l.isValidQrCodeText(l.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");l.isValidQrCodeText(l.qrdata)&&""===l.qrdata&&(l.qrdata=" ");const d={color:{dark:l.colorDark,light:l.colorLight},errorCorrectionLevel:l.errorCorrectionLevel,margin:l.margin,scale:l.scale,version:l.version,width:l.width},w=l.imageSrc,g=l.imageHeight||40,h=l.imageWidth||40;switch(l.elementType){case"canvas":{const E=l.renderer.createElement("canvas");l.context=E.getContext("2d"),l.toCanvas(E,d).then(()=>{if(l.ariaLabel&&l.renderer.setAttribute(E,"aria-label",`${l.ariaLabel}`),l.title&&l.renderer.setAttribute(E,"title",`${l.title}`),w&&l.context){l.centerImage=new Image(h,g),w!==l.centerImage.src&&(l.centerImage.src=w),g!==l.centerImage.height&&(l.centerImage.height=g),h!==l.centerImage.width&&(l.centerImage.width=h);const C=l.centerImage;C&&(C.onload=()=>{var y;null===(y=l.context)||void 0===y||y.drawImage(C,E.width/2-h/2,E.height/2-g/2,h,g)})}l.renderElement(E),l.emitQRCodeURL(E)}).catch(C=>{console.error("[angularx-qrcode] canvas error:",C)});break}case"svg":{const E=l.renderer.createElement("div");l.toSVG(d).then(C=>{l.renderer.setProperty(E,"innerHTML",C);const y=E.firstChild;l.renderer.setAttribute(y,"height",`${l.width}`),l.renderer.setAttribute(y,"width",`${l.width}`),l.renderElement(y),l.emitQRCodeURL(y)}).catch(C=>{console.error("[angularx-qrcode] svg error:",C)});break}default:{const E=l.renderer.createElement("img");l.toDataURL(d).then(C=>{l.alt&&E.setAttribute("alt",l.alt),l.ariaLabel&&E.setAttribute("aria-label",l.ariaLabel),E.setAttribute("src",C),l.title&&E.setAttribute("title",l.title),l.renderElement(E),l.emitQRCodeURL(E)}).catch(C=>{console.error("[angularx-qrcode] img/url error:",C)})}}}catch(d){console.error("[angularx-qrcode] Error generating QR Code:",d.message)}})()}emitQRCodeURL(l){const d=l.constructor.name;if(d===SVGSVGElement.name){const h=new Blob([l.outerHTML],{type:"image/svg+xml"}),E=URL.createObjectURL(h),C=this.sanitizer.bypassSecurityTrustUrl(E);return void this.qrCodeURL.emit(C)}let w="";d===HTMLCanvasElement.name&&(w=l.toDataURL("image/png")),d===HTMLImageElement.name&&(w=l.src),fetch(w).then(g=>g.blob()).then(g=>URL.createObjectURL(g)).then(g=>this.sanitizer.bypassSecurityTrustUrl(g)).then(g=>{this.qrCodeURL.emit(g)}).catch(g=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+g)})}}return f.\u0275fac=function(l){return new(l||f)(e.Y36(e.Qsj),e.Y36(c.H7))},f.\u0275cmp=e.Xpm({type:f,selectors:[["qrcode"]],viewQuery:function(l,d){if(1&l&&e.Gf(m,7),2&l){let w;e.iGM(w=e.CRH())&&(d.qrcElement=w.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[e.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(l,d){1&l&&e._UZ(0,"div",null,0),2&l&&e.Tol(d.cssClass)},encapsulation:2,changeDetection:0}),f})(),S=(()=>{class f{}return f.\u0275fac=function(l){return new(l||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({}),f})();var p=a(2443),T=a(384),I=a(5830),P=a(7185);const A=[{path:"",component:(()=>{class f{constructor(l,d,w){this.authService=l,this.apiService=d,this.toastr=w,this.attendance_key="",this.loading=!1}ngOnInit(){this.getAttendanceKey()}getAttendanceKey(){this.loading=!0,this.apiService.getAttendanceKey().subscribe(l=>{l.success?(this.loading=!1,this.attendance_key=l.loginKey,this.toastr.success(l.message,"Success")):(this.loading=!1,this.toastr.error(l.message,"Error!"))},l=>{this.loading=!1,this.toastr.error(l.message,"Error!")})}}return f.\u0275fac=function(l){return new(l||f)(e.Y36(T.e),e.Y36(I.s),e.Y36(P._W))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-tab1"]],decls:25,vars:7,consts:[["color","primary"],["slot","end",1,"ion-margin-end",3,"click"],["name","log-out-outline"],[3,"fullscreen"],[1,"ion-text-center"],["qrc-colorDark","#ff0000","qrc-colorLight","#0000ff",3,"width","qrdata","errorCorrectionLevel","allowEmptyString"]],template:function(l,d){1&l&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.NdJ("click",function(){return d.authService.logout()}),e._UZ(3,"ion-icon",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Qr Code "),e.qZA()()(),e.TgZ(6,"ion-content",3)(7,"ion-grid")(8,"ion-row")(9,"ion-col")(10,"ion-card",4)(11,"ion-card-header")(12,"ion-item")(13,"ion-label",4),e._uU(14),e.qZA()()(),e.TgZ(15,"ion-card-content"),e._UZ(16,"qrcode",5),e.TgZ(17,"ion-item")(18,"ion-label",4),e._uU(19," USER ID : "),e.TgZ(20,"strong"),e._uU(21),e.qZA()()(),e.TgZ(22,"ion-item")(23,"ion-label",4),e._uU(24," Scan this code to Mark Attendance "),e.qZA()()()()()()()()),2&l&&(e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(8),e.hij(" ",d.username," "),e.xp6(2),e.Q6J("width",300)("qrdata",d.attendance_key)("errorCorrectionLevel","M")("allowEmptyString",!0),e.xp6(5),e.hij(" ",d.email," "))},dependencies:[o.Sm,o.PM,o.FN,o.Zi,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Ie,o.Q$,o.Nd,o.wd,o.sr,B]}),f})()}];let L=(()=>{class f{}return f.\u0275fac=function(l){return new(l||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[p.Bz.forChild(A),p.Bz]}),f})(),b=(()=>{class f{}return f.\u0275fac=function(l){return new(l||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[o.Pc,i.ez,t.u5,n.e,L,S]}),f})()},4901:R=>{"use strict";var s={single_source_shortest_paths:function(a,o,i){var t={},n={};n[o]=0;var e,u,c,m,B,p,r=s.PriorityQueue.make();for(r.push(o,0);!r.empty();)for(c in m=(e=r.pop()).cost,B=a[u=e.value]||{})B.hasOwnProperty(c)&&(p=m+B[c],(typeof n[c]>"u"||n[c]>p)&&(n[c]=p,r.push(c,p),t[c]=u));if(typeof i<"u"&&typeof n[i]>"u"){var P=["Could not find a path from ",o," to ",i,"."].join("");throw new Error(P)}return t},extract_shortest_path_from_predecessor_list:function(a,o){for(var i=[],t=o;t;)i.push(t),t=a[t];return i.reverse(),i},find_path:function(a,o,i){var t=s.single_source_shortest_paths(a,o,i);return s.extract_shortest_path_from_predecessor_list(t,i)},PriorityQueue:{make:function(a){var t,o=s.PriorityQueue,i={};for(t in a=a||{},o)o.hasOwnProperty(t)&&(i[t]=o[t]);return i.queue=[],i.sorter=a.sorter||o.default_sorter,i},default_sorter:function(a,o){return a.cost-o.cost},push:function(a,o){this.queue.push({value:a,cost:o}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};R.exports=s},8419:R=>{"use strict";R.exports=function(a){for(var o=[],i=a.length,t=0;t<i;t++){var n=a.charCodeAt(t);if(n>=55296&&n<=56319&&i>t+1){var r=a.charCodeAt(t+1);r>=56320&&r<=57343&&(n=1024*(n-55296)+r-56320+65536,t+=1)}n<128?o.push(n):n<2048?(o.push(n>>6|192),o.push(63&n|128)):n<55296||n>=57344&&n<65536?(o.push(n>>12|224),o.push(n>>6&63|128),o.push(63&n|128)):n>=65536&&n<=1114111?(o.push(n>>18|240),o.push(n>>12&63|128),o.push(n>>6&63|128),o.push(63&n|128)):o.push(239,191,189)}return new Uint8Array(o).buffer}},3259:(R,s,a)=>{const i=a(8695),t=a(1465),n=a(3210),r=a(2334);function e(u,c,m,B,S){const p=[].slice.call(arguments,1),T=p.length,I="function"==typeof p[T-1];if(!I&&!i())throw new Error("Callback required as last argument");if(!I){if(T<1)throw new Error("Too few arguments provided");return 1===T?(m=c,c=B=void 0):2===T&&!c.getContext&&(B=m,m=c,c=void 0),new Promise(function(P,v){try{const A=t.create(m,B);P(u(A,c,B))}catch(A){v(A)}})}if(T<2)throw new Error("Too few arguments provided");2===T?(S=m,m=c,c=B=void 0):3===T&&(c.getContext&&typeof S>"u"?(S=B,B=void 0):(S=B,B=m,m=c,c=void 0));try{const P=t.create(m,B);S(null,u(P,c,B))}catch(P){S(P)}}s.rT=e.bind(null,n.render),s.hz=e.bind(null,n.renderToDataURL),s.toString=e.bind(null,function(u,c,m){return r.render(u,m)})},8695:R=>{R.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},6221:(R,s,a)=>{const o=a(4792).getSymbolSize;s.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,r=o(t),e=145===r?26:2*Math.ceil((r-13)/(2*n-2)),u=[r-7];for(let c=1;c<n-1;c++)u[c]=u[c-1]-e;return u.push(6),u.reverse()},s.getPositions=function(t){const n=[],r=s.getRowColCoords(t),e=r.length;for(let u=0;u<e;u++)for(let c=0;c<e;c++)0===u&&0===c||0===u&&c===e-1||u===e-1&&0===c||n.push([r[u],r[c]]);return n}},2424:(R,s,a)=>{const o=a(4016),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=o.ALPHANUMERIC,this.data=n}t.getBitsLength=function(r){return 11*Math.floor(r/2)+r%2*6},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let e;for(e=0;e+2<=this.data.length;e+=2){let u=45*i.indexOf(this.data[e]);u+=i.indexOf(this.data[e+1]),r.put(u,11)}this.data.length%2&&r.put(i.indexOf(this.data[e]),6)},R.exports=t},2118:R=>{function s(){this.buffer=[],this.length=0}s.prototype={get:function(a){const o=Math.floor(a/8);return 1==(this.buffer[o]>>>7-a%8&1)},put:function(a,o){for(let i=0;i<o;i++)this.putBit(1==(a>>>o-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),a&&(this.buffer[o]|=128>>>this.length%8),this.length++}},R.exports=s},4425:R=>{function s(a){if(!a||a<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=a,this.data=new Uint8Array(a*a),this.reservedBit=new Uint8Array(a*a)}s.prototype.set=function(a,o,i,t){const n=a*this.size+o;this.data[n]=i,t&&(this.reservedBit[n]=!0)},s.prototype.get=function(a,o){return this.data[a*this.size+o]},s.prototype.xor=function(a,o,i){this.data[a*this.size+o]^=i},s.prototype.isReserved=function(a,o){return this.reservedBit[a*this.size+o]},R.exports=s},5663:(R,s,a)=>{const o=a(8419),i=a(4016);function t(n){this.mode=i.BYTE,"string"==typeof n&&(n=o(n)),this.data=new Uint8Array(n)}t.getBitsLength=function(r){return 8*r},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){for(let r=0,e=this.data.length;r<e;r++)n.put(this.data[r],8)},R.exports=t},4655:(R,s,a)=>{const o=a(2259),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];s.getBlocksCount=function(r,e){switch(e){case o.L:return i[4*(r-1)+0];case o.M:return i[4*(r-1)+1];case o.Q:return i[4*(r-1)+2];case o.H:return i[4*(r-1)+3];default:return}},s.getTotalCodewordsCount=function(r,e){switch(e){case o.L:return t[4*(r-1)+0];case o.M:return t[4*(r-1)+1];case o.Q:return t[4*(r-1)+2];case o.H:return t[4*(r-1)+3];default:return}}},2259:(R,s)=>{s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2},s.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},s.from=function(i,t){if(s.isValid(i))return i;try{return function a(o){if("string"!=typeof o)throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw new Error("Unknown EC Level: "+o)}}(i)}catch{return t}}},3114:(R,s,a)=>{const o=a(4792).getSymbolSize;s.getPositions=function(n){const r=o(n);return[[0,0],[r-7,0],[0,r-7]]}},7078:(R,s,a)=>{const o=a(4792),n=o.getBCHDigit(1335);s.getEncodedBits=function(e,u){const c=e.bit<<3|u;let m=c<<10;for(;o.getBCHDigit(m)-n>=0;)m^=1335<<o.getBCHDigit(m)-n;return 21522^(c<<10|m)}},5339:(R,s)=>{const a=new Uint8Array(512),o=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)a[n]=t,o[t]=n,t<<=1,256&t&&(t^=285);for(let n=255;n<512;n++)a[n]=a[n-255]})(),s.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},s.exp=function(t){return a[t]},s.mul=function(t,n){return 0===t||0===n?0:a[o[t]+o[n]]}},449:(R,s,a)=>{const o=a(4016),i=a(4792);function t(n){this.mode=o.KANJI,this.data=n}t.getBitsLength=function(r){return 13*r},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let r;for(r=0;r<this.data.length;r++){let e=i.toSJIS(this.data[r]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[r]+"\nMake sure your charset is UTF-8");e-=49472}e=192*(e>>>8&255)+(255&e),n.put(e,13)}},R.exports=t},3667:(R,s)=>{s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function o(i,t,n){switch(i){case s.Patterns.PATTERN000:return(t+n)%2==0;case s.Patterns.PATTERN001:return t%2==0;case s.Patterns.PATTERN010:return n%3==0;case s.Patterns.PATTERN011:return(t+n)%3==0;case s.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case s.Patterns.PATTERN101:return t*n%2+t*n%3==0;case s.Patterns.PATTERN110:return(t*n%2+t*n%3)%2==0;case s.Patterns.PATTERN111:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+i)}}s.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},s.from=function(t){return s.isValid(t)?parseInt(t,10):void 0},s.getPenaltyN1=function(t){const n=t.size;let r=0,e=0,u=0,c=null,m=null;for(let B=0;B<n;B++){e=u=0,c=m=null;for(let S=0;S<n;S++){let p=t.get(B,S);p===c?e++:(e>=5&&(r+=e-5+3),c=p,e=1),p=t.get(S,B),p===m?u++:(u>=5&&(r+=u-5+3),m=p,u=1)}e>=5&&(r+=e-5+3),u>=5&&(r+=u-5+3)}return r},s.getPenaltyN2=function(t){const n=t.size;let r=0;for(let e=0;e<n-1;e++)for(let u=0;u<n-1;u++){const c=t.get(e,u)+t.get(e,u+1)+t.get(e+1,u)+t.get(e+1,u+1);(4===c||0===c)&&r++}return 3*r},s.getPenaltyN3=function(t){const n=t.size;let r=0,e=0,u=0;for(let c=0;c<n;c++){e=u=0;for(let m=0;m<n;m++)e=e<<1&2047|t.get(c,m),m>=10&&(1488===e||93===e)&&r++,u=u<<1&2047|t.get(m,c),m>=10&&(1488===u||93===u)&&r++}return 40*r},s.getPenaltyN4=function(t){let n=0;const r=t.data.length;for(let u=0;u<r;u++)n+=t.data[u];return 10*Math.abs(Math.ceil(100*n/r/5)-10)},s.applyMask=function(t,n){const r=n.size;for(let e=0;e<r;e++)for(let u=0;u<r;u++)n.isReserved(u,e)||n.xor(u,e,o(t,u,e))},s.getBestMask=function(t,n){const r=Object.keys(s.Patterns).length;let e=0,u=1/0;for(let c=0;c<r;c++){n(c),s.applyMask(c,t);const m=s.getPenaltyN1(t)+s.getPenaltyN2(t)+s.getPenaltyN3(t)+s.getPenaltyN4(t);s.applyMask(c,t),m<u&&(u=m,e=c)}return e}},4016:(R,s,a)=>{const o=a(4406),i=a(2699);s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(r,e){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!o.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?r.ccBits[0]:e<27?r.ccBits[1]:r.ccBits[2]},s.getBestModeForData=function(r){return i.testNumeric(r)?s.NUMERIC:i.testAlphanumeric(r)?s.ALPHANUMERIC:i.testKanji(r)?s.KANJI:s.BYTE},s.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},s.isValid=function(r){return r&&r.bit&&r.ccBits},s.from=function(r,e){if(s.isValid(r))return r;try{return function t(n){if("string"!=typeof n)throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw new Error("Unknown mode: "+n)}}(r)}catch{return e}}},7783:(R,s,a)=>{const o=a(4016);function i(t){this.mode=o.NUMERIC,this.data=t.toString()}i.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(n){let r,e,u;for(r=0;r+3<=this.data.length;r+=3)e=this.data.substr(r,3),u=parseInt(e,10),n.put(u,10);const c=this.data.length-r;c>0&&(e=this.data.substr(r),u=parseInt(e,10),n.put(u,3*c+1))},R.exports=i},1106:(R,s,a)=>{const o=a(5339);s.mul=function(t,n){const r=new Uint8Array(t.length+n.length-1);for(let e=0;e<t.length;e++)for(let u=0;u<n.length;u++)r[e+u]^=o.mul(t[e],n[u]);return r},s.mod=function(t,n){let r=new Uint8Array(t);for(;r.length-n.length>=0;){const e=r[0];for(let c=0;c<n.length;c++)r[c]^=o.mul(n[c],e);let u=0;for(;u<r.length&&0===r[u];)u++;r=r.slice(u)}return r},s.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let r=0;r<t;r++)n=s.mul(n,new Uint8Array([1,o.exp(r)]));return n}},1465:(R,s,a)=>{const o=a(4792),i=a(2259),t=a(2118),n=a(4425),r=a(6221),e=a(3114),u=a(3667),c=a(4655),m=a(2636),B=a(2088),S=a(7078),p=a(4016),T=a(2033);function L(d,w,g){const h=d.size,E=S.getEncodedBits(w,g);let C,y;for(C=0;C<15;C++)y=1==(E>>C&1),d.set(C<6?C:C<8?C+1:h-15+C,8,y,!0),d.set(8,C<8?h-C-1:C<9?15-C-1+1:15-C-1,y,!0);d.set(h-8,8,1,!0)}function l(d,w,g,h){let E;if(Array.isArray(d))E=T.fromArray(d);else{if("string"!=typeof d)throw new Error("Invalid data");{let z=w;if(!z){const H=T.rawSplit(d);z=B.getBestVersionForData(H,g)}E=T.fromString(d,z||40)}}const C=B.getBestVersionForData(E,g);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(w){if(w<C)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+C+".\n")}else w=C;const y=function f(d,w,g){const h=new t;g.forEach(function(M){h.put(M.mode.bit,4),h.put(M.getLength(),p.getCharCountIndicator(M.mode,d)),M.write(h)});const y=8*(o.getSymbolTotalCodewords(d)-c.getTotalCodewordsCount(d,w));for(h.getLengthInBits()+4<=y&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(0);const N=(y-h.getLengthInBits())/8;for(let M=0;M<N;M++)h.put(M%2?17:236,8);return function U(d,w,g){const h=o.getSymbolTotalCodewords(w),C=h-c.getTotalCodewordsCount(w,g),y=c.getBlocksCount(w,g),M=y-h%y,z=Math.floor(h/y),H=Math.floor(C/y),G=H+1,O=z-H,$=new m(O);let V=0;const Q=new Array(y),j=new Array(y);let J=0;const W=new Uint8Array(d.buffer);for(let k=0;k<y;k++){const Y=k<M?H:G;Q[k]=W.slice(V,V+Y),j[k]=$.encode(Q[k]),V+=Y,J=Math.max(J,Y)}const K=new Uint8Array(h);let D,F,Z=0;for(D=0;D<J;D++)for(F=0;F<y;F++)D<Q[F].length&&(K[Z++]=Q[F][D]);for(D=0;D<O;D++)for(F=0;F<y;F++)K[Z++]=j[F][D];return K}(h,d,w)}(w,g,E),N=o.getSymbolSize(w),M=new n(N);return function I(d,w){const g=d.size,h=e.getPositions(w);for(let E=0;E<h.length;E++){const C=h[E][0],y=h[E][1];for(let N=-1;N<=7;N++)if(!(C+N<=-1||g<=C+N))for(let M=-1;M<=7;M++)y+M<=-1||g<=y+M||d.set(C+N,y+M,N>=0&&N<=6&&(0===M||6===M)||M>=0&&M<=6&&(0===N||6===N)||N>=2&&N<=4&&M>=2&&M<=4,!0)}}(M,w),function P(d){const w=d.size;for(let g=8;g<w-8;g++){const h=g%2==0;d.set(g,6,h,!0),d.set(6,g,h,!0)}}(M),function v(d,w){const g=r.getPositions(w);for(let h=0;h<g.length;h++){const E=g[h][0],C=g[h][1];for(let y=-2;y<=2;y++)for(let N=-2;N<=2;N++)d.set(E+y,C+N,-2===y||2===y||-2===N||2===N||0===y&&0===N,!0)}}(M,w),L(M,g,0),w>=7&&function A(d,w){const g=d.size,h=B.getEncodedBits(w);let E,C,y;for(let N=0;N<18;N++)E=Math.floor(N/3),C=N%3+g-8-3,y=1==(h>>N&1),d.set(E,C,y,!0),d.set(C,E,y,!0)}(M,w),function b(d,w){const g=d.size;let h=-1,E=g-1,C=7,y=0;for(let N=g-1;N>0;N-=2)for(6===N&&N--;;){for(let M=0;M<2;M++)if(!d.isReserved(E,N-M)){let z=!1;y<w.length&&(z=1==(w[y]>>>C&1)),d.set(E,N-M,z),C--,-1===C&&(y++,C=7)}if(E+=h,E<0||g<=E){E-=h,h=-h;break}}}(M,y),isNaN(h)&&(h=u.getBestMask(M,L.bind(null,M,g))),u.applyMask(h,M),L(M,g,h),{modules:M,version:w,errorCorrectionLevel:g,maskPattern:h,segments:E}}s.create=function(w,g){if(typeof w>"u"||""===w)throw new Error("No input text");let E,C,h=i.M;return typeof g<"u"&&(h=i.from(g.errorCorrectionLevel,i.M),E=B.from(g.version),C=u.from(g.maskPattern),g.toSJISFunc&&o.setToSJISFunction(g.toSJISFunc)),l(w,E,h,C)}},2636:(R,s,a)=>{const o=a(1106);function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(n){this.degree=n,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(n.length+this.degree);r.set(n);const e=o.mod(r,this.genPoly),u=this.degree-e.length;if(u>0){const c=new Uint8Array(this.degree);return c.set(e,u),c}return e},R.exports=i},2699:(R,s)=>{const a="[0-9]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const t="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";s.KANJI=new RegExp(i,"g"),s.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),s.BYTE=new RegExp(t,"g"),s.NUMERIC=new RegExp(a,"g"),s.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+i+"$"),r=new RegExp("^"+a+"$"),e=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");s.testKanji=function(c){return n.test(c)},s.testNumeric=function(c){return r.test(c)},s.testAlphanumeric=function(c){return e.test(c)}},2033:(R,s,a)=>{const o=a(4016),i=a(7783),t=a(2424),n=a(5663),r=a(449),e=a(2699),u=a(4792),c=a(4901);function m(A){return unescape(encodeURIComponent(A)).length}function B(A,L,b){const f=[];let U;for(;null!==(U=A.exec(b));)f.push({data:U[0],index:U.index,mode:L,length:U[0].length});return f}function S(A){const L=B(e.NUMERIC,o.NUMERIC,A),b=B(e.ALPHANUMERIC,o.ALPHANUMERIC,A);let f,U;return u.isKanjiModeEnabled()?(f=B(e.BYTE,o.BYTE,A),U=B(e.KANJI,o.KANJI,A)):(f=B(e.BYTE_KANJI,o.BYTE,A),U=[]),L.concat(b,f,U).sort(function(d,w){return d.index-w.index}).map(function(d){return{data:d.data,mode:d.mode,length:d.length}})}function p(A,L){switch(L){case o.NUMERIC:return i.getBitsLength(A);case o.ALPHANUMERIC:return t.getBitsLength(A);case o.KANJI:return r.getBitsLength(A);case o.BYTE:return n.getBitsLength(A)}}function v(A,L){let b;const f=o.getBestModeForData(A);if(b=o.from(L,f),b!==o.BYTE&&b.bit<f.bit)throw new Error('"'+A+'" cannot be encoded with mode '+o.toString(b)+".\n Suggested mode is: "+o.toString(f));switch(b===o.KANJI&&!u.isKanjiModeEnabled()&&(b=o.BYTE),b){case o.NUMERIC:return new i(A);case o.ALPHANUMERIC:return new t(A);case o.KANJI:return new r(A);case o.BYTE:return new n(A)}}s.fromArray=function(L){return L.reduce(function(b,f){return"string"==typeof f?b.push(v(f,null)):f.data&&b.push(v(f.data,f.mode)),b},[])},s.fromString=function(L,b){const U=function I(A){const L=[];for(let b=0;b<A.length;b++){const f=A[b];switch(f.mode){case o.NUMERIC:L.push([f,{data:f.data,mode:o.ALPHANUMERIC,length:f.length},{data:f.data,mode:o.BYTE,length:f.length}]);break;case o.ALPHANUMERIC:L.push([f,{data:f.data,mode:o.BYTE,length:f.length}]);break;case o.KANJI:L.push([f,{data:f.data,mode:o.BYTE,length:m(f.data)}]);break;case o.BYTE:L.push([{data:f.data,mode:o.BYTE,length:m(f.data)}])}}return L}(S(L,u.isKanjiModeEnabled())),l=function P(A,L){const b={},f={start:{}};let U=["start"];for(let l=0;l<A.length;l++){const d=A[l],w=[];for(let g=0;g<d.length;g++){const h=d[g],E=""+l+g;w.push(E),b[E]={node:h,lastCount:0},f[E]={};for(let C=0;C<U.length;C++){const y=U[C];b[y]&&b[y].node.mode===h.mode?(f[y][E]=p(b[y].lastCount+h.length,h.mode)-p(b[y].lastCount,h.mode),b[y].lastCount+=h.length):(b[y]&&(b[y].lastCount=h.length),f[y][E]=p(h.length,h.mode)+4+o.getCharCountIndicator(h.mode,L))}}U=w}for(let l=0;l<U.length;l++)f[U[l]].end=0;return{map:f,table:b}}(U,b),d=c.find_path(l.map,"start","end"),w=[];for(let g=1;g<d.length-1;g++)w.push(l.table[d[g]].node);return s.fromArray(function T(A){return A.reduce(function(L,b){const f=L.length-1>=0?L[L.length-1]:null;return f&&f.mode===b.mode?(L[L.length-1].data+=b.data,L):(L.push(b),L)},[])}(w))},s.rawSplit=function(L){return s.fromArray(S(L,u.isKanjiModeEnabled()))}},4792:(R,s)=>{let a;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];s.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},s.getSymbolTotalCodewords=function(t){return o[t]},s.getBCHDigit=function(i){let t=0;for(;0!==i;)t++,i>>>=1;return t},s.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');a=t},s.isKanjiModeEnabled=function(){return typeof a<"u"},s.toSJIS=function(t){return a(t)}},4406:(R,s)=>{s.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}},2088:(R,s,a)=>{const o=a(4792),i=a(4655),t=a(2259),n=a(4016),r=a(4406),u=o.getBCHDigit(7973);function m(p,T){return n.getCharCountIndicator(p,T)+4}function B(p,T){let I=0;return p.forEach(function(P){const v=m(P.mode,T);I+=v+P.getBitsLength()}),I}s.from=function(T,I){return r.isValid(T)?parseInt(T,10):I},s.getCapacity=function(T,I,P){if(!r.isValid(T))throw new Error("Invalid QR Code version");typeof P>"u"&&(P=n.BYTE);const L=8*(o.getSymbolTotalCodewords(T)-i.getTotalCodewordsCount(T,I));if(P===n.MIXED)return L;const b=L-m(P,T);switch(P){case n.NUMERIC:return Math.floor(b/10*3);case n.ALPHANUMERIC:return Math.floor(b/11*2);case n.KANJI:return Math.floor(b/13);default:return Math.floor(b/8)}},s.getBestVersionForData=function(T,I){let P;const v=t.from(I,t.M);if(Array.isArray(T)){if(T.length>1)return function S(p,T){for(let I=1;I<=40;I++)if(B(p,I)<=s.getCapacity(I,T,n.MIXED))return I}(T,v);if(0===T.length)return 1;P=T[0]}else P=T;return function c(p,T,I){for(let P=1;P<=40;P++)if(T<=s.getCapacity(P,I,p))return P}(P.mode,P.getLength(),v)},s.getEncodedBits=function(T){if(!r.isValid(T)||T<7)throw new Error("Invalid QR Code version");let I=T<<12;for(;o.getBCHDigit(I)-u>=0;)I^=7973<<o.getBCHDigit(I)-u;return T<<12|I}},3210:(R,s,a)=>{const o=a(6355);s.render=function(r,e,u){let c=u,m=e;typeof c>"u"&&(!e||!e.getContext)&&(c=e,e=void 0),e||(m=function t(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),c=o.getOptions(c);const B=o.getImageWidth(r.modules.size,c),S=m.getContext("2d"),p=S.createImageData(B,B);return o.qrToImageData(p.data,r,c),function i(n,r,e){n.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=e,r.width=e,r.style.height=e+"px",r.style.width=e+"px"}(S,m,B),S.putImageData(p,0,0),m},s.renderToDataURL=function(r,e,u){let c=u;return typeof c>"u"&&(!e||!e.getContext)&&(c=e,e=void 0),c||(c={}),s.render(r,e,c).toDataURL(c.type||"image/png",(c.rendererOpts||{}).quality)}},2334:(R,s,a)=>{const o=a(6355);function i(r,e){const u=r.a/255,c=e+'="'+r.hex+'"';return u<1?c+" "+e+'-opacity="'+u.toFixed(2).slice(1)+'"':c}function t(r,e,u){let c=r+e;return typeof u<"u"&&(c+=" "+u),c}s.render=function(e,u,c){const m=o.getOptions(u),B=e.modules.size,S=e.modules.data,p=B+2*m.margin,T=m.color.light.a?"<path "+i(m.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",I="<path "+i(m.color.dark,"stroke")+' d="'+function n(r,e,u){let c="",m=0,B=!1,S=0;for(let p=0;p<r.length;p++){const T=Math.floor(p%e),I=Math.floor(p/e);!T&&!B&&(B=!0),r[p]?(S++,p>0&&T>0&&r[p-1]||(c+=B?t("M",T+u,.5+I+u):t("m",m,0),m=0,B=!1),T+1<e&&r[p+1]||(c+=t("h",S),S=0)):m++}return c}(S,B,m.margin)+'"/>',A='<svg xmlns="http://www.w3.org/2000/svg" '+(m.width?'width="'+m.width+'" height="'+m.width+'" ':"")+'viewBox="0 0 '+p+" "+p+'" shape-rendering="crispEdges">'+T+I+"</svg>\n";return"function"==typeof c&&c(null,A),A}},6355:(R,s)=>{function a(o){if("number"==typeof o&&(o=o.toString()),"string"!=typeof o)throw new Error("Color should be defined as hex string");let i=o.slice().replace("#","").split("");if(i.length<3||5===i.length||i.length>8)throw new Error("Invalid hex color: "+o);(3===i.length||4===i.length)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),6===i.length&&i.push("F","F");const t=parseInt(i.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:255&t,hex:"#"+i.slice(0,6).join("")}}s.getOptions=function(i){i||(i={}),i.color||(i.color={});const n=i.width&&i.width>=21?i.width:void 0;return{width:n,scale:n?4:i.scale||4,margin:typeof i.margin>"u"||null===i.margin||i.margin<0?4:i.margin,color:{dark:a(i.color.dark||"#000000ff"),light:a(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},s.getScale=function(i,t){return t.width&&t.width>=i+2*t.margin?t.width/(i+2*t.margin):t.scale},s.getImageWidth=function(i,t){const n=s.getScale(i,t);return Math.floor((i+2*t.margin)*n)},s.qrToImageData=function(i,t,n){const r=t.modules.size,e=t.modules.data,u=s.getScale(r,n),c=Math.floor((r+2*n.margin)*u),m=n.margin*u,B=[n.color.light,n.color.dark];for(let S=0;S<c;S++)for(let p=0;p<c;p++){let T=4*(S*c+p),I=n.color.light;S>=m&&p>=m&&S<c-m&&p<c-m&&(I=B[e[Math.floor((S-m)/u)*r+Math.floor((p-m)/u)]?1:0]),i[T++]=I.r,i[T++]=I.g,i[T++]=I.b,i[T]=I.a}}}}]);