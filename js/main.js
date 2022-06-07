"use strict";function isMobile(){return navigator.userAgent.toLowerCase().match(/(phone|pad|pod|midp|iphone|ipod|iphone os|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|rv:1.2.3.4|ucweb|fennec|wosbrowser|browserng|webos|symbian|windows ce|windows mobile|windows phone)/i)}window.hiddenProperty="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,window.DIRECTIONS={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT",UNDIRECTED:"UNDIRECTED"},window.isPhone=/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)&&window.innerWidth<760;var isPC=!0;function getMoveDirection(e,t,n,a){if(isPhone){e=n-e,t=a-t;if(Math.abs(e)<2&&Math.abs(t)<2)return DIRECTIONS.UNDIRECTED;e=180*Math.atan2(t,e)/Math.PI;return-135<=e&&e<=-45?DIRECTIONS.UP:45<e&&e<135?DIRECTIONS.DOWN:135<=e&&e<=180||-180<=e&&e<-135?DIRECTIONS.LEFT:-45<=e&&e<=45?DIRECTIONS.RIGHT:DIRECTIONS.UNDIRECTED}}isPhone&&(isPC=!1),isMobile()&&(isPC=!1);var signatureEl=$$("#signature"),maxAlpha=.7;function getDayLight(){var e=new Date,t=e.getHours()-12,n=t?Math.abs(t)/t:1;return t+=(60*e.getMinutes()+e.getSeconds())/3600,Math.min(maxAlpha,Math.max((t/4-n)*n,0))}function setLightColor(){$$("#page").style.backgroundColor="rgba(85,85,85,$".concat(getDayLight(),")")}function typeSignature(){typeSignature.count=typeSignature.count||0,typeSignature.count<=signature.length?(signatureEl.innerHTML="".concat(signature.slice(0,typeSignature.count++),"|"),setTimeout(typeSignature,100)):signatureEl.innerHTML=signature}function messenger(s){var o=this,r=0,d=0,e=0;o.init=function(){o.codeletters="&#*+%?￡@§$",o.message=0,o.currentLength=0,o.fadeBuffer=!1,o.messages=["..."],setTimeout(o.animateIn,100)},o.generateRandomString=function(e){for(var t="";t.length<e;)t+=o.codeletters.charAt(Math.floor(Math.random()*o.codeletters.length));return t},o.animateIn=function(){o.currentLength<o.messages[o.message].length?(o.currentLength=o.currentLength+2,o.currentLength>o.messages[o.message].length&&(o.currentLength=o.messages[o.message].length),s.innerHTML=o.generateRandomString(o.currentLength),setTimeout(o.animateIn,20)):2<++e||setTimeout(o.animateFadeBuffer,20)},o.animateFadeBuffer=function(){if(!1===o.fadeBuffer){o.fadeBuffer=[];for(var e=0;e<o.messages[o.message].length;e++)o.fadeBuffer.push({c:Math.floor(12*Math.random())+1,l:o.messages[o.message].charAt(e)})}for(var t=!1,n="",a=0;a<o.fadeBuffer.length;a++){var i=o.fadeBuffer[a];0<i.c?(t=!0,i.c--,n+=o.codeletters.charAt(Math.floor(Math.random()*o.codeletters.length))):n+=i.l}s.innerHTML=n,!0===t?15==++d?(typeSignature(),r=3):d<15&&setTimeout(o.animateFadeBuffer,50):2<r||(2==++r?typeSignature():o.cycleText())},o.cycleText=function(){o.message=o.message+1,o.message>=o.messages.length&&(o.message=0),o.currentLength=0,o.fadeBuffer=!1,s.innerHTML="",setTimeout(o.animateIn,200)},o.init()}function loadMain(){loadMain.loaded||(setLightColor(),setTimeout(function(){new messenger(signatureEl)},400),loadMain.loaded=!0)}function bgSet(){try{var e=new Image,t=seconds%5==0?"https://cdn.dolyw.com/wallpaper/201911/20191101005.jpg":seconds%2==0?"https://cdn.dolyw.com/wallpaper/201911/20191107010.jpg":"https://cdn.dolyw.com/wallpaper/201911/20191107005.jpg";e.src=t,e.onload=function(){document.getElementById("bg").style.backgroundImage="url("+t+")",$("#bg").fadeIn(1e3)}}catch(e){bgSet()}}$.get("https://v1.hitokoto.cn",{},function(e,t,n){window.signature=e.hitokoto+" - "+e.from,loadMain()}).fail(function(){loadMain()});var date=new Date,seconds=date.getSeconds();if(bgSet(),isPC){html2canvas([document.body],{onrendered:function(e){try{var t=detectEdge(e);t.flakeCount=30,Snowflakes.init(t)}catch(e){console.log("[Error] Snow is not defined.")}}});try{$("body").append('<style>.waifu-tool span{display:block;cursor:pointer;color:#f3f9f1;transition:.2s}</style><div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>'),live2d_settings.modelId=6,live2d_settings.modelTexturesId=2,live2d_settings.modelStorage=!1,live2d_settings.canTurnToHomePage=!1,live2d_settings.waifuEdgeSide="right:30",live2d_settings.aboutPageUrl="https://github.com/fghrsh/live2d_demo",live2d_settings.hitokotoAPI="hitokoto.cn",initModel("https://mark.dolyw.com/assets/live2d/waifu-tips.json?v=1.4.2")}catch(e){console.log("[Error] JQuery is not defined.")}}else html2canvas([document.body],{onrendered:function(e){try{var t=detectEdge(e);t.flakeCount=5,Snowflakes.init(t)}catch(e){console.log("[Error] Snow is not defined.")}}});