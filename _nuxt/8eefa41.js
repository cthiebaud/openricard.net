(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{274:function(t,e,r){var n=r(2),o=r(275),h=r(98);n({target:"Array",proto:!0},{fill:o}),h("fill")},275:function(t,e,r){"use strict";var n=r(25),o=r(99),h=r(18);t.exports=function(t){for(var e=n(this),r=h(e.length),l=arguments.length,c=o(l>1?arguments[1]:void 0,r),f=l>2?arguments[2]:void 0,d=void 0===f?r:o(f,r);d>c;)e[c++]=t;return e}},276:function(t,e,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(102).default)("1b7833da",content,!0,{sourceMap:!1})},278:function(t,e,r){"use strict";r(276)},279:function(t,e,r){var n=r(101)(!1);n.push([t.i,"body{position:relative}canvas{display:block;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;transform:scale(.98);background-color:transparent}",""]),t.exports=n},291:function(t,e,r){"use strict";r.r(e);var n=r(93),o=(r(46),r(135),r(9),r(19),r(74),r(36),r(274),r(199),r(100),r(60),r(43),r(34),{data:function(){return{word:"RICARD",backgroundColor:"white",filter:"brightness(100%)",fontFamily:"monospace",matches:{horz:[],vert:[]},intervalID:undefined,shuffle:undefined,textSize:20,theCanvas:{},theRatio:{}}},computed:{wordAsArray:function(){return this.word.split("")},factorial:function(){return this.factorialize(this.wordAsArray.length)}},mounted:function(){this.init();var t=this;window.addEventListener("keyup",(function(e){"Enter"===e.key?t.startStopOrToggleSlideshow(!0):"Escape"===e.key&&t.startStopOrToggleSlideshow(!1)}))},methods:{init:function(){var t=this;this.shuffle=this.doShuffle(this.factorial),document.getElementById("portrait-image").addEventListener("load",(function(e){t.createOrRedrawCanvas(this)}))},doShuffle:function(t){return function(t){for(var e,i,r=t.length;r;)i=Math.floor(Math.random()*r--),e=t[r],t[r]=t[i],t[i]=e;return t}(Object(n.a)(Array(t).keys()))},startStopOrToggleSlideshow:function(t){void 0===t&&(t=!this.intervalID),t&&!this.intervalID?(this.shuffle=this.doShuffle(this.factorial),this.createOrRedrawCanvas(),this.intervalID=setInterval(function(){this.shuffle=this.doShuffle(this.factorial),this.createOrRedrawCanvas()}.bind(this),1e3)):!t&&this.intervalID&&(clearInterval(this.intervalID),this.intervalID=void 0)},onClick:function(){this.shuffle=this.doShuffle(this.factorial),this.createOrRedrawCanvas()},createOrRedrawCanvas:function(img){var t={filter:this.filter,fontFamily:this.fontFamily,resolution:this.calcResolution,shape:this.drawLetter,word:this.word,wordAsArray:this.wordAsArray};this.textSize=void 0,img?this.theCanvas=img.closePixelate(t):this.theCanvas.render(t)},pickShuffledPermutation:function(t){var e=this.shuffle[Math.floor(t)];return 0===e?new Array(this.wordAsArray.length).fill("·"):this.pickPermutation(this.wordAsArray,this.factorial,e)},pickPermutation:function(t,e,r){if(e<r)return[];for(var o,q,h,l=r,c=Object(n.a)(t),f=[],d=e;c.length>0;)q=(l-(o=l%(d/=c.length)))/d,h=c.splice(q,1)[0],f.push(h),l=o;return f},vertical:function(t){for(var e={boundary:void 0,candidate:[]},col=0;col<this.theRatio.x;col++)for(var r=0;r<this.theRatio.y;r++){var i=col+r*this.theRatio.x,n=i/this.wordAsArray.length,o=i%this.wordAsArray.length,h=this.pickShuffledPermutation(n)[o];e.boundary=e.boundary||i;var l=this.testIfMatch(this.wordAsArray,e,h);l&&this.matches.vert.push(l)}},storeMatches:function(){this.matches.horz.splice(0,this.matches.horz.length),this.matches.vert.splice(0,this.matches.vert.length),this.vertical();for(var t=[],e={boundary:void 0,candidate:[]},i=0;i<this.wordAsArray.length*this.factorial;i++){0===t.length&&(t=this.pickShuffledPermutation(i/this.wordAsArray.length));var r=t.shift();i%this.wordAsArray.length==0&&(e.boundary=i-e.candidate.length);var n=this.testIfMatch(this.wordAsArray,e,r);n&&this.matches.horz.push(n)}},printCandidate:function(t,e){for(var r=[],i=0;i<t.length;i++)i===e%t.length&&r.push("|"),r.push(t[i]);return r.join("")},resetCandidate:function(t){t.candidate.splice(0,t.candidate.length),t.boundary=void 0},testIfMatch:function(t,e,r){var n;e.candidate.push(r);for(var i=0;i<e.candidate.length;i++)if(e.candidate[i]!==t[i]){this.resetCandidate(e);break}return i===t.length&&(n=e.boundary,this.resetCandidate(e)),n},drawLetter:function(t,e,r,i,n,o,h,l,c){if(!(i>this.theRatio.x*this.theRatio.y)){var f=c;void 0!==f&&0!==f.length||(f=this.pickShuffledPermutation(i/e.length));var d=f.shift();if(this.textSize||(this.textSize=function(text,e){t.save(),t.font="bold 1px ".concat(e," ");var r=t.measureText(text),n=r.width,o=r.fontBoundingBoxAscent+r.fontBoundingBoxDescent;return t.restore(),Math.min(h/n,l/o)}(d,this.fontFamily),t.font="bold ".concat(this.textSize,"px ").concat(this.fontFamily),t.shadowColor="#572010",t.shadowOffsetX=.5),i%this.theRatio.x<this.theRatio.x-this.wordAsArray.length&&this.matches.horz.length)for(var b=0;b<this.matches.horz.length;b++){var v=this.matches.horz[b];v<=i&&i<v+this.word.length&&(v===i?(t.save(),t.fillStyle="rgba(255, 255, 0,0.8)",t.fillRect(n,o-2,h*this.word.length-1,l-1),t.restore()):i%e.length==0&&(t.save(),t.fillStyle="white",t.fillRect(n,o-2,1,l-1),t.restore()))}if(this.matches.vert.length)for(var y=0;y<this.matches.vert.length;y++){var w=this.matches.vert[y];w<=i&&i<w+this.word.length&&w===i&&(t.save(),t.fillStyle="rgba(255, 255, 0,0.8)",t.fillRect(n,o-3,h,l*this.word.length-1),t.restore())}return t.textAlign="center",t.textBaseline="bottom",t.fillText(d,n+h/2,o+l,h),f}},calcResolution:function(t,e,r,n,o){var h=this.factorialize(t.length),l=this.getDivisorsList(h).map((function(t){return{x:t,y:h/t,ratio:t/(h/t)}})),c=n/o/(e/r),f=this.binarySearch(l.map((function(t){return t.ratio})),c),d=l[f].x*t.length,v=l[f].y,y=n/d,w=o/v;return this.theRatio={x:d,y:v,cx:y,cy:w,factorial:h},this.storeMatches(),this.theRatio},factorialize:function(t){if(void 0!==t)return t<0?-1:0===t?1:t*this.factorialize(t-1)},getDivisorsList:function(t){var e,r=[];return e=t,Object(n.a)(Array(e+1).keys()).slice(1).reduce((function(s,a){var t=!(e%a)&&a;return t&&r.push(t),s+t}),0),r},binarySearch:function(t,e){if(1===t.length)return 0;var r=Math.floor(t.length/2);return t[r]===e?r:t[r]>e?this.binarySearch(t.slice(0,r),e):t[r]<e?r+this.binarySearch(t.slice(r),e):r}}}),h=(r(278),r(55)),component=Object(h.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"vh-100",style:"background-color: "+t.backgroundColor,on:{click:t.onClick}},[r("img",{attrs:{id:"portrait-image",src:"/jpegs/ricard.jpg"}})])}),[],!1,null,null,null);e.default=component.exports}}]);