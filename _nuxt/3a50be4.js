(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{341:function(t,e,o){var content=o(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("1b7833da",content,!0,{sourceMap:!1})},490:function(t,e,o){"use strict";o(341)},491:function(t,e,o){var n=o(75)(!1);n.push([t.i,"body{position:relative}canvas{display:block;position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=n},503:function(t,e,o){"use strict";o.r(e);var n=o(95),r=o(7),c=(o(36),o(9),o(343),o(15),o(347),o(349),o(351),o(352),o(353),o(354),o(355),o(356),o(357),o(358),o(359),o(360),o(361),o(362),o(363),o(364),o(20),o(62),o(47),o(139),o(297),o(74),o(109),o(78),o(204),o(105),o(30),o(365),o(366),o(60),o(44),o(34),o(367)),h={data:function(){return{config:{backgroundColor:"white",fontFamily:"Arvo",imageFilter:"brightness(95%)",imageURL:"/jpegs/ricard.jpg",matchBoundaryFillStyle:void 0,matchFillStyle:"rgba(255, 255, 0, .7)",shadowColor:"#462310",shadowOffsetX:.5,word:"ricard",ersatzAsArray:void 0,wordAsArray:void 0,factorial:void 0,tweaks:{x:0,y:0,cx:1,cy:0,textSize:-6},style:{canvas:{objectPositionX:"0%",objectPositionY:"100%",scaleTransform:"97%",backgroundColor:"transparent"}}},box:{cols:void 0,rows:void 0},canvas:undefined,hiddenPermutations:new Set,matches:{horz:[],vert:[]},palette:undefined,shuffle:undefined,slideshowID:undefined,textSize:undefined,cheat:""}},computed:{cheating:function(){return"cheat"===this.cheat},styleCanvas:function(){return"canvas {\n  object-position: ".concat(this.config.style.canvas.objectPositionX," ").concat(this.config.style.canvas.objectPositionY,";\n  transform: scale(").concat(this.config.style.canvas.scaleTransform,");\n  background-color: ").concat(this.config.style.canvas.backgroundColor,";\n}")}},mounted:function(){var t=this;this.config.wordAsArray=this.config.wordAsArray||this.config.word.split(""),this.config.ersatzAsArray=this.config.ersatzAsArray||Array(this.config.word.length).fill("○"),this.config.factorial=this.factorialize(this.config.wordAsArray.length),c.from(document.getElementById("portrait-image")).maxColorCount(200).getPalette().then((function(e){t.palette=e})),this.init();var e=this;window.addEventListener("keyup",(function(t){if("Enter"===t.code?e.startOrStopOrToggleSlideshow(!0):"Space"===t.code?e.shuffleAndRedraw():"Escape"===t.code&&(e.cheat="",e.startOrStopOrToggleSlideshow(!1),e.createOrRedrawCanvas()),"cheat".includes(t.key)){if("cheat"===e.cheat)return;e.cheat+=t.key,"cheat".startsWith(e.cheat)?"cheat"===e.cheat&&e.createOrRedrawCanvas():e.cheat=""}}))},methods:{init:function(){this.shuffle=this.doShuffle(this.config.factorial);for(var i=0;i<this.config.factorial;i++){var t=this.pickPermutation(this.config.wordAsArray,this.config.factorial,i);(function(t,e){return t.length===e.length&&t.every((function(t,i){return t===e[i]}))})(t,this.config.wordAsArray)&&(this.hiddenPermutations.add(i),console.log("REMEMBER nth permutation",i,t,this.hiddenPermutations))}var e=this;(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return new Promise((function(n,c){var h=setInterval(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,document.fonts.load(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c(e.t0);case 8:document.fonts.check(t)&&(clearInterval(h),n(!0));case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),o);setTimeout((function(){return clearInterval(h)}),e)}))})("40px ".concat(this.config.fontFamily)).then(document.getElementById("portrait-image").addEventListener("load",(function(t){e.createOrRedrawCanvas(this)})))},doShuffle:function(t){return function(t){for(var e,i,o=t.length;o;)i=Math.floor(Math.random()*o--),e=t[o],t[o]=t[i],t[i]=e;return t}(Object(n.a)(Array(t).keys()))},toggleCheat:function(){"cheat"===this.cheat?this.cheat="":this.cheat="cheat"},shuffleAndRedraw:function(){this.shuffle=this.doShuffle(this.config.factorial),this.createOrRedrawCanvas()},startOrStopOrToggleSlideshow:function(t){void 0===t&&(t=!this.slideshowID),t&&!this.slideshowID?(this.shuffleAndRedraw(),this.slideshowID=setInterval(function(){this.shuffleAndRedraw()}.bind(this),2e3)):!t&&this.slideshowID&&(clearInterval(this.slideshowID),this.slideshowID=void 0)},createOrRedrawCanvas:function(img){var t={filter:this.config.imageFilter,fontFamily:this.config.fontFamily,resolution:this.calcResolution,shape:this.drawLetter,word:this.config.word,wordAsArray:this.config.wordAsArray};this.textSize=void 0,img?this.canvas=img.closePixelate(t):this.canvas.render(t)},pickShuffledPermutation:function(t){t=Math.floor(t);var e=this.shuffle[t];return this.hiddenPermutations.has(e)?Object(n.a)(this.config.ersatzAsArray):this.pickPermutation(this.config.wordAsArray,this.config.factorial,e)},pickPermutation:function(t,e,o){if(e<o)return console.log("n (".concat(o,") cannot be larger than factorial (").concat(e,") !!!")),[];for(var r,q,c,h=o,l=Object(n.a)(t),f=[],d=e;l.length>0;)q=(h-(r=h%(d/=l.length)))/d,c=l.splice(q,1)[0],f.push(c),h=r;return f},horizontal:function(t){for(var e=[],o={boundary:void 0,accumulator:[]},n=0;n<this.box.rows;n++)for(var col=0;col<this.box.cols;col++){var i=col+n*this.box.cols;0===e.length&&(e=this.pickShuffledPermutation(i/this.config.wordAsArray.length));var r=e.shift();i%this.config.wordAsArray.length==0&&(o.boundary=i-o.accumulator.length);var c=this.testIfMatch(this.config.wordAsArray,o,r);c&&this.matches.horz.push(c)}},vertical:function(t){for(var e={boundary:void 0,accumulator:[]},col=0;col<this.box.cols;col++)for(var o=0;o<this.box.rows;o++){var i=col+o*this.box.cols,n=i/this.config.wordAsArray.length,r=i%this.config.wordAsArray.length,c=this.pickShuffledPermutation(n)[r];e.boundary?e.boundary.push(i):e.boundary=[i];var h=this.testIfMatch(this.config.wordAsArray,e,c);h&&this.matches.vert.push(h)}},storeMatches:function(){this.matches.horz.splice(0,this.matches.horz.length),this.matches.vert.splice(0,this.matches.vert.length),this.vertical(),this.horizontal()},printCandidate:function(t,e){for(var o=[],i=0;i<t.length;i++)i===e%t.length&&o.push("|"),o.push(t[i]);return o.join("")},resetCandidate:function(t){t.accumulator.splice(0,t.accumulator.length),t.boundary=void 0},testIfMatch:function(t,e,o){var n;e.accumulator.push(o);for(var i=0;i<e.accumulator.length;i++)if(e.accumulator[i]!==t[i]){this.resetCandidate(e);break}return i===t.length&&(n=e.boundary,this.resetCandidate(e)),n},getFontSizeToFit:function(t,text,e,o,n,r){t.save(),t.font="1px 'Roboto Slab'";var c=0,h=0;return text.forEach((function(e){var o=t.measureText(text);c=Math.max(c=o.width),o.fontBoundingBoxAscent+o.fontBoundingBoxDescent,h=Math.max(h,o.actualBoundingBoxAscent+o.actualBoundingBoxDescent)})),t.restore(),Math.min(o+r/c,n+r/h)},tweakAndFillRect:function(t,e,o,n,r){t.fillRect(e+this.config.tweaks.x,o+this.config.tweaks.y,n+this.config.tweaks.cx,r+this.config.tweaks.cy)},tweakAndStrokeRect:function(t,e,o,n,r){t.strokeRect(e+this.config.tweaks.x,o+this.config.tweaks.y,n+this.config.tweaks.cx,r+this.config.tweaks.cy)},drawLetter:function(t,e,i,o,n,r,h,l){if(!(i>this.box.cols*this.box.rows)){var f=l;void 0!==f&&0!==f.length||(f=this.pickShuffledPermutation(i/e.length));var d=f.shift();this.textSize||(t.textAlign="center",t.textBaseline="middle",t.shadowColor=this.config.shadowColor,t.shadowOffsetX=this.config.shadowOffsetX,this.textSize=this.getFontSizeToFit(t,this.config.wordAsArray,this.config.fontFamily,r,h,this.config.tweaks.textSize),t.font="".concat(this.textSize,"px ").concat(this.config.fontFamily));var v=Number.MAX_SAFE_INTEGER,y=t.fillStyle;for(var m in this.palette){var w=c.Util.hexDiff(this.palette[m].getHex(),t.fillStyle);w<v&&(v=w,y=this.palette[m].getBodyTextColor())}if(t.fillRect(o,n,r,h),this.cheating){if(this.matches.horz.length)for(var b=0;b<this.matches.horz.length;b++){var A=this.matches.horz[b];A<=i&&i<A+this.config.wordAsArray.length&&(t.save(),t.fillStyle=this.config.matchFillStyle,this.tweakAndFillRect(t,o,n,r,h),t.restore(),i%e.length==0&&this.config.matchBoundaryFillStyle&&(t.save(),t.fillStyle=this.config.matchBoundaryFillStyle,this.tweakAndFillRect(t,o,n,1,h),t.restore()))}if(this.matches.vert.length)for(var x=0;x<this.matches.vert.length;x++){this.matches.vert[x].includes(i)&&(t.save(),t.fillStyle=this.config.matchFillStyle,this.tweakAndFillRect(t,o,n,r,h),t.restore())}}return t.fillStyle=y,t.fillText(d,o+r/2,n+h/2),f}},calcResolution:function(t,e,o,n,r){var c=this.factorialize(t.length),h=this.getDivisorsList(c).map((function(t){return{x:t,y:c/t,ratio:t/(c/t)}})),l=n/r/(e/o),f=this.binarySearch(h.map((function(t){return t.ratio})),l),d=h[f].x*t.length,v=h[f].y,y=n/d,m=r/v;return this.box={cols:d,rows:v,cxCol:y,cyRow:m,factorial:c},this.storeMatches(),this.box},factorialize:function(t){if(void 0!==t)return t<0?-1:0===t?1:t*this.factorialize(t-1)},getDivisorsList:function(t){var e,o=[];return e=t,Object(n.a)(Array(e+1).keys()).slice(1).reduce((function(s,a){var t=!(e%a)&&a;return t&&o.push(t),s+t}),0),o},binarySearch:function(t,e){if(1===t.length)return 0;var o=Math.floor(t.length/2);return t[o]===e?o:t[o]>e?this.binarySearch(t.slice(0,o),e):t[o]<e?o+this.binarySearch(t.slice(o),e):o}}},l=h,f=(o(490),o(55)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"vh-100",style:"background-color: "+t.config.backgroundColor,on:{click:t.shuffleAndRedraw}},[o("style",{tag:"component"},[t._v("\n    "+t._s(t.styleCanvas)+"\n  ")]),t._v(" "),o("h1",{staticClass:"text-center",style:"font-family: "+t.config.fontFamily+"; z-index: -1; color: ghostwhite; visibility: hidden;"},[t._v("made by christophe thiebaud")]),t._v(" "),o("img",{attrs:{id:"portrait-image",src:t.config.imageURL}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);