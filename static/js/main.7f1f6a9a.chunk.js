(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{100:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i(46),n=i.n(a),h=(i(85),i(18)),r=i(19),o=i(22),c=i(21),d=i(63),l=i(69),m=i.n(l),u=(i(88),i(89),i(70)),g=i(58),p=i(60),f=i.n(p),x=i(3);function v(t){var e=t.words,i=Object(s.useState)(0),a=Object(g.a)(i,2),n=a[0],h=a[1],r=e[n%e.length],o=function(){return Object(x.jsxs)(f.a,{onTypingDone:function(){h((function(t){return t+1}))},children:[r,Object(x.jsx)(f.a.Backspace,{count:r.length,delay:100*r.length})]})};return Object(x.jsx)(o,{})}var b=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){return Object(h.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){if(!this.props.data)return null;var t=this.props.data.project,e=this.props.data.github;this.props.data.name,this.props.data.description;return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsx)(u.a,{type:"circle",bg:!0}),Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"Aaron is here"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:"Me"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})})]})]}),Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsxs)("h1",{className:"responsive-headline",style:{textAlign:"left",height:"80%"},children:["Looking for a",Object(x.jsx)("br",{}),Object(x.jsx)("span",{style:{color:"orange",textWrapper:""},children:Object(x.jsx)(v,{words:["Senior UI Engineer ?","Full Stack JS Engineer ?","Certified K8S Admin ?"]})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("ul",{className:"social",style:{marginTop:"100px"},children:[Object(x.jsxs)("a",{href:t,className:"button btn project-btn",children:[Object(x.jsx)("i",{className:"fa fa-linkedin"}),"LinkedIn"]}),Object(x.jsxs)("a",{href:e,className:"button btn github-btn",children:[Object(x.jsx)("i",{className:"fa fa-github"}),"Github"]})]})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),i}(s.Component),j=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){return Object(h.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){if(!this.props.data)return null;var t=this.props.data.social.map((function(t){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:t.url,children:Object(x.jsx)("i",{className:t.className})})},t.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"twelve columns",children:[Object(x.jsx)("ul",{className:"social-links",children:t}),Object(x.jsxs)("ul",{className:"copyright",style:{color:"#525252"},children:[Object(x.jsx)("li",{children:"\xa9 Copyright 2021 Aaron"}),Object(x.jsxs)("li",{children:["Inspired by"," ",Object(x.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),i}(s.Component),y=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){return Object(h.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var t="images/"+this.props.data.image,e=this.props.data.bio,i=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload);return Object(x.jsx)("section",{id:"about",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("div",{className:"profile-pic",children:Object(x.jsx)("img",{src:t,alt:"Aaron Profile Pic"})})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:"About Me"}),Object(x.jsx)("p",{children:e}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"columns download",children:Object(x.jsx)("p",{children:Object(x.jsxs)("a",{href:i,className:"button",children:[Object(x.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})})]})]})})}}]),i}(s.Component),w=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){return Object(h.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"getRandomColor",value:function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}},{key:"render",value:function(){var t;if(!this.props.data)return null;this.props.data.skillmessage,Object.keys(this.props.data);var e=null===(t=this.props.data.work)||void 0===t?void 0:t.map((function(t){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:t.company}),Object(x.jsxs)("p",{className:"info",children:[t.title,Object(x.jsx)("span",{children:"\u2022"})," ",Object(x.jsx)("em",{className:"date",children:t.years})]}),Object(x.jsx)("p",{children:t.description})]},t.company)}));return Object(x.jsx)("section",{id:"resume",children:e&&Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"twelve columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:this.props.data.title})})}),Object(x.jsx)("div",{style:{marginTop:"30px"},className:"twelve columns main-col",children:e})]})})}}]),i}(s.Component),O=(s.Component,i(91),i(109)),M=i(64),k=i(107);i(99);function I(t){var e=Object(s.useRef)(null),i=t.items,a=Object(s.useState)({width:window.innerWidth,height:window.innerHeight}),n=Object(g.a)(a,2),h=n[0],r=n[1];function o(t){r({width:e.current.clientWidth,height:e.current.clientHeight})}Object(s.useLayoutEffect)((function(){return o(),window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]);var c=window;return Object(x.jsx)("div",{ref:e,children:Object(x.jsx)(k.a,{items:i,options:{galleryLayout:-1,scrollAnimation:"FADE_IN",imageHoverAnimation:"ZOOM_IN"},container:h,eventsListener:function(e,i){"ITEM_CLICKED"===e&&t.onClick&&t.onClick(i)},scrollingElement:c,customHoverRenderer:function(t){return Object(x.jsx)("div",{children:Object(x.jsxs)("h1",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",textAlign:"center",color:"white"},children:[t.title,Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{}),t.description]})})},customImageRenderer:function(t){return Object(x.jsx)("img",Object(M.a)(Object(M.a)({},t),{},{width:"100%"}))}})})}var _,P,D,N,S,C,E,A,H,F,T,L,W,R,z,B,U,V,Y,G,Z,q,X,J,$,K,Q,tt,et,it=i(108),st=i(110),at=i(111),nt=i(106),ht=function(t){setTimeout(t,10)};"undefined"!==typeof window&&(ht=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame),console.log("particle js load");var rt=function(){function t(e){Object(h.a)(this,t);var i={};e&&(e.nodeName?(i=JSON.parse(JSON.stringify(e.dataset)),"IMG"===e.nodeName?i.image=e:i.wrapperElement=e):i=e),this.state="stopped",this.touches=[],this.on("imageLoaded",this._onImageLoaded),this._initImage(i)}return Object(r.a)(t,[{key:"on",value:function(t,e){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(e)}},{key:"emit",value:function(t,e){var i=this.events[t];if(i&&i.length)for(var s=0;s<i.length;s++){i[s].call(this,e)}}},{key:"renderer",get:function(){return this._renderer},set:function(t){this._renderer=t,this._draw=this["_"+t+"Renderer"];try{this["_"+t+"InitContext"]()}catch(e){console.log(e),"default"!==t&&(this.renderer="default")}}},{key:"color",set:function(t){this.colorArr=this._parseColor(t),this.colorArr&&(isNaN(this.colorArr[3])&&(this.colorArr[3]=255),0<this.colorArr[3]&&this.colorArr[3]<=1&&(this.colorArr[3]*=255))}},{key:"start",value:function(t){var e=t||{};this.initPosition=e.initPosition||this.initPosition,this.initDirection=e.initDirection||this.initDirection,this.canvas&&(this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.display=""),this._initOrigins(),this._initParticles(),this._webglSetAttributes(),"running"!==this.state&&(this.state="running",this.disableInteraction||("ontouchstart"in window||window.navigator.msPointerEnabled?(document.body.addEventListener("touchstart",this._touchHandler),document.body.addEventListener("touchmove",this._touchHandler),document.body.addEventListener("touchend",this._clearTouches),document.body.addEventListener("touchcancel",this._clearTouches)):(this.canvas.addEventListener("mousemove",this._mouseHandler),this.canvas.addEventListener("mouseout",this._clearTouches),this.canvas.addEventListener("click",this._clickHandler))),this._animate())}},{key:"stop",value:function(t){var e=t||{};this.fadePosition=e.fadePosition||this.fadePosition,this.fadeDirection=e.fadeDirection||this.fadeDirection,this._fade(),document.body.removeEventListener("touchstart",this._touchHandler),document.body.removeEventListener("touchmove",this._touchHandler),document.body.removeEventListener("touchend",this._clearTouches),document.body.removeEventListener("touchcancel",this._clearTouches),this.canvas&&(this.canvas.removeEventListener("mousemove",this._mouseHandler),this.canvas.removeEventListener("mouseout",this._clearTouches),this.canvas.removeEventListener("click",this._clickHandler))}},{key:"_animate",value:function(){var t=this;"stopped"!==this.state?(this._calculate(),this._draw(),ht((function(){return t._animate()}))):this.emit("stopped")}},{key:"_mouseHandler",get:function(){var t=this;return function(e){t.touches=[{x:e.offsetX,y:e.offsetY,z:49+(t.layerCount-1)*t.layerDistance,force:1}]}}},{key:"_clickHandler",get:function(){var t=this;return function(e){var i=t.clickStrength;t.origins.map((function(t){return t.z-=i})),setTimeout((function(){t.origins.map((function(t){return t.z+=i}))}),100)}}},{key:"_touchHandler",get:function(){var t=this;return function(e){for(t.touches=[],F=t.canvas.getBoundingClientRect(),H=0;H<e.changedTouches.length;H++)(A=e.changedTouches[H]).target===t.canvas&&(t.touches.push({x:A.pageX-F.left,y:A.pageY-F.top,z:49+(t.layerCount-1)*t.layerDistance,force:A.force||1}),e.preventDefault())}}},{key:"_clearTouches",get:function(){var t=this;return function(e){t.touches=[]}}},{key:"_onImageLoaded",value:function(t){this.imageWidth=this.image.naturalWidth||this.image.width,this.imageHeight=this.image.naturalHeight||this.image.height,this.imageRatio=this.imageWidth/this.imageHeight,this.width=this.width||this.imageWidth,this.height=this.height||this.imageHeight,this.renderSize=(this.width+this.height)/4,this._initSettings(t),this._initContext(t),this._initResponsive(t),this.start()}},{key:"_initImage",value:function(t){var e=this;this.srcImage=t.image,!this.srcImage&&t.imageId&&(this.srcImage=document.getElementById(t.imageId)),this.imageUrl=t.imageUrl||this.srcImage.src,this.image=document.createElement("img"),this.wrapperElement=t.wrapperElement||this.srcImage.parentElement,this.image.onload=function(){return e.emit("imageLoaded",t)},this.image.crossOrigin="Anonymous",t.addTimestamp&&(/\?/.test(this.imageUrl)?this.imageUrl+="&d="+Date.now():this.imageUrl+="?d="+Date.now()),this.image.src=this.imageUrl}},{key:"_initContext",value:function(t){this.canvas=t.canvas,this.canvas||this.context||!this.wrapperElement||(this.canvas=document.createElement("canvas"),this.wrapperElement.appendChild(this.canvas)),this.convas&&(this.convas.style.display="none"),this.context=t.context,this.renderer=t.renderer||"default"}},{key:"_defaultInitContext",value:function(t){this.context=this.context||this.canvas.getContext("2d")}},{key:"_webglInitContext",value:function(){this.context=this.context||this.canvas.getContext("webgl2")||this.canvas.getContext("experimental-webgl"),this.fragmentShaderScript="#version 300 es\n\n        precision highp float;\n\n        in vec4 vColor;\n        out vec4 fragColor;\n\n        void main(void) {\n          // fragColor = vec4(1, 1, 1, 0.1);\n          fragColor = vColor;\n        }\n      ",this.vertexShaderScript="#version 300 es\n\n        precision highp float;\n\n        in vec3 vertexPosition;\n        in vec4 vertexColor;\n        uniform vec3 vertexOffset;\n        uniform float pointSize;\n        uniform float depth;\n        vec3 mirror = vec3(1, -1, 1);\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 perspectiveMatrix;\n        uniform mat4 rotationMatrix;\n\n        out vec4 vColor;\n\n        void main(void) {\n          gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);\n          gl_PointSize = pointSize + max((log(vertexPosition.z) - 3.91) * depth, -pointSize + 1.0);\n          vColor = vertexColor;\n        }\n      ",this.context.viewport(0,0,this.width,this.height);var t=this.context.createShader(this.context.VERTEX_SHADER);this.context.shaderSource(t,this.vertexShaderScript),this.context.compileShader(t),this.context.getShaderParameter(t,this.context.COMPILE_STATUS)||console.log(this.context.getShaderInfoLog(t));var e=this.context.createShader(this.context.FRAGMENT_SHADER);this.context.shaderSource(e,this.fragmentShaderScript),this.context.compileShader(e),this.context.getShaderParameter(e,this.context.COMPILE_STATUS)||console.log(this.context.getShaderInfoLog(e)),this.program=this.context.createProgram(),this.context.attachShader(this.program,t),this.context.attachShader(this.program,e),this.context.linkProgram(this.program),this.context.useProgram(this.program),this.vertexPosition=this.context.getAttribLocation(this.program,"vertexPosition"),this.context.enableVertexAttribArray(this.vertexPosition),this.vertexColor=this.context.getAttribLocation(this.program,"vertexColor"),this.context.enableVertexAttribArray(this.vertexColor),this.context.clearColor(0,0,0,0),this.context.enable(this.context.BLEND),this.context.disable(this.context.DEPTH_TEST),this.context.blendFunc(this.context.SRC_ALPHA,this.context.ONE),this.vertexBuffer=this.context.createBuffer(),this.context.bindBuffer(this.context.ARRAY_BUFFER,this.vertexBuffer),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.vertexOffset=this.context.getUniformLocation(this.program,"vertexOffset"),this.context.uniform3f(this.vertexOffset,0,0,1e3),this.context.vertexAttribPointer(this.vertexPosition,3,this.context.FLOAT,!1,28,0),this.context.vertexAttribPointer(this.vertexColor,4,this.context.FLOAT,!1,28,12),this.uModelViewMatrix=this.context.getUniformLocation(this.program,"modelViewMatrix"),this.uPerspectiveMatrix=this.context.getUniformLocation(this.program,"perspectiveMatrix"),this.uRotationMatrix=this.context.getUniformLocation(this.program,"rotationMatrix"),this.uPointSize=this.context.getUniformLocation(this.program,"pointSize"),this.uDepth=this.context.getUniformLocation(this.program,"depth"),this._webglSetAttributes()}},{key:"_webglSetAttributes",value:function(){if("webgl"===this.renderer){var t=this.canvas.width/this.canvas.height,e=10,i=e*Math.tan(1*Math.PI/360),s=-i,a=i*t,n=-a,h=[20/(a-n),0,(a+n)/(a-n),0,0,20/(i-s),(i+s)/(i-s),0,0,0,1.2222222222222223,22.22222222222222,0,0,-1,0];this.context.viewport(0,0,this.width,this.height),this.context.uniformMatrix4fv(this.uModelViewMatrix,!1,new Float32Array(h)),this.context.uniformMatrix4fv(this.uPerspectiveMatrix,!1,new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])),this.context.uniform1f(this.uPointSize,this.particleSize),this.context.uniform1f(this.uDepth,this.depth),this._updateRotation()}}},{key:"_updateRotation",value:function(){var t=Math.cos(0),e=Math.sin(0),i=Math.cos(0),s=[i,0,Math.sin(0),0,0,t,-e,0,-i,e,t,0,0,0,0,1];this.context.uniformMatrix4fv(this.uRotationMatrix,!1,new Float32Array(s))}},{key:"_webglRenderer",value:function(){Z=new Float32Array(this.vertices),this.context.bufferData(this.context.ARRAY_BUFFER,Z,this.context.STATIC_DRAW),this.context.clear(this.context.COLOR_BUFFER_BIT|this.context.DEPTH_BUFFER_BIT),this.context.drawArrays(this.context.POINTS,0,this.particles.length),this.context.flush()}},{key:"_initSettings",value:function(t){this.width=1*t.width||this.width,this.height=1*t.height||this.height,this.maxWidth=t.maxWidth,this.maxHeight=t.maxHeight,this.minWidth=t.minWidth,this.minHeight=t.minHeight,this.maxWidth&&(/%$/.test(this.maxWidth)?this.maxWidth=this.width*this.maxWidth.replace("%","")/100:this.maxWidth*=1),this.maxHeight&&(/%$/.test(this.maxHeight)?this.maxHeight=this.height*this.maxHeight.replace("%","")/100:this.maxHeight*=1),this.minWidth&&(/%$/.test(this.minWidth)?this.minWidth=this.width*this.minWidth.replace("%","")/100:this.minWidth*=1),this.minHeight&&(/%$/.test(this.minHeight)?this.minHeight=this.height*this.minHeight.replace("%","")/100:this.minHeight*=1),this.alphaFade=.4,this.gravity=1*t.gravity||.08,this.particleGap=1*t.particleGap||3,this.particleSize=1*t.particleSize||1,this.layerCount=1*t.layerCount||1,this.depth=1*t.depth||1,this.rotationDuration=1*t.rotationDuration||0,this.growDuration=1*t.growDuration||200,this.waitDuration=1*t.waitDuration||200,this.shrinkDuration=1*t.shrinkDuration||200,this.shrinkDistance=1*t.shrinkDistance||50,this.threeDimensional=void 0!==t.threeDimensional&&"false"!==t.threeDimensional&&!!t.threeDimensional,this.lifeCycle=void 0!==t.lifeCycle&&"false"!==t.lifeCycle&&!!t.lifeCycle,this.layerDistance=t.layerDistance||this.particleGap,this.initPosition=t.initPosition||"random",this.initDirection=t.initDirection||"random",this.fadePosition=t.fadePosition||"none",this.fadeDirection=t.fadeDirection||"none",this.noise=isNaN(1*t.noise)?10:1*t.noise,this.disableInteraction=t.disableInteraction,this.mouseForce=1*t.mouseForce||30,this.clickStrength=1*t.clickStrength||0,this.color=t.color,this.colorArr=t.colorArr||this.colorArr}},{key:"_initResponsive",value:function(t){var e=this;this.responsiveWidth=this.wrapperElement&&t.responsiveWidth,this.responsiveWidth&&(this.on("stopped",(function(){e.width=e.wrapperElement.clientWidth,e.start()})),this.wrapperElement.addEventListener("resize",(function(){e.width!==e.wrapperElement.clientWidth&&e.stop()})),this.width=this.wrapperElement.clientWidth)}},{key:"_calculate",value:function(){for(this.vertices="webgl"===this.renderer&&[],P=0,D=0;D<this.particles.length;D++){for(C=this.origins[D],E=this.particles[D],R=C.x-E.x+(Math.random()-.5)*this.noise,z=C.y-E.y+(Math.random()-.5)*this.noise,B=C.z-E.z+(Math.random()-.5)*this.noise/1e3,U=Math.sqrt(R*R+z*z+B*B),V=.01*U,E.vx+=V*(R/U)*this.speed,E.vy+=V*(z/U)*this.speed,E.vz+=V*(B/U)*this.speed,H=0;H<this.touches.length;H++)A=this.touches[H],R=E.x-A.x,z=E.y-A.y,B=E.z-A.z,U=Math.sqrt(R*R+z*z+B*B),V=this.mouseForce*A.force/U,E.vx+=V*(R/U)*this.speed,E.vy+=V*(z/U)*this.speed,E.vz+=V*(B/U)*this.speed;E.vx*=this.gravityFactor,E.vy*=this.gravityFactor,E.vz*=this.gravityFactor,E.x+=E.vx,E.y+=E.vy,E.z+=E.vz,0>E.x||E.x>=this.width||0>E.y||E.y>=this.height?(E.isHidden=!0,"stopping"===this.state&&(E.isDead=!0)):("stopping"!==this.state||E.isDead||P++,E.isHidden=!1),this.vertices&&(T=E.x-this.width/2,L=E.y-this.height/2,W=E.z,tt=C.vertexColors[3],this.lifeCycle&&(C.tick+=1,C.tick>=0?C.tick<this.growDuration?tt*=C.tick/this.growDuration:(et=C.tick-this.growDuration-this.waitDuration)>=0&&et<=this.shrinkDuration&&(A=this.touches[H],U=Math.sqrt(T*T+L*L+(W-50)*(W-50)),V=et/this.shrinkDuration,T+=this.shrinkDistance*(T/U)*V,L+=this.shrinkDistance*(L/U)*V,W+=this.shrinkDistance*((W-50)/U)*V,tt*=1-V,et===this.shrinkDuration&&(C.tick=0)):tt=0),this.vertices.push(T,L,W,C.vertexColors[0],C.vertexColors[1],C.vertexColors[2],tt))}"stopping"===this.state&&0===P&&(this.state="stopped")}},{key:"_defaultRenderer",value:function(){for(this.depth=Math.max(this.layerDistance*this.layerCount/2,this.mouseForce),this.minZ=-this.depth,this.maxZ=this.depth,_=this.context.createImageData(this.width,this.height),D=0;D<this.origins.length;D++)C=this.origins[D],(E=this.particles[D]).isDead||E.isHidden||(T=~~E.x,L=~~E.y,tt=C.color[3],this.alphaFade>0&&this.layerCount>1&&(W=Math.max(Math.min(E.z,this.maxZ),this.minZ)-this.minZ,tt=tt*(1-this.alphaFade)+tt*this.alphaFade*(W/(this.maxZ-this.minZ)),tt=Math.max(Math.min(~~tt,255),0)),N=4*(T+L*this.width),_.data[N+0]=C.color[0],_.data[N+1]=C.color[1],_.data[N+2]=C.color[2],_.data[N+3]=tt);this.context.putImageData(_,0,0)}},{key:"_initParticles",value:function(){for(this.particles=void 0,this.particles=[],D=0;D<this.origins.length;D++)C=this.origins[D],E={},this._initParticlePosition(C,E),this._initParticleDirection(E),this.particles.push(E)}},{key:"_initParticlePosition",value:function(t,e){switch(e.z=0,this.initPosition){case"random":e.x=Math.random()*this.width,e.y=Math.random()*this.height;break;case"top":e.x=Math.random()*this.width*3-this.width,e.y=-Math.random()*this.height;break;case"left":e.x=-Math.random()*this.width,e.y=Math.random()*this.height*3-this.height;break;case"bottom":e.x=Math.random()*this.width*3-this.width,e.y=this.height+Math.random()*this.height;break;case"right":e.x=this.width+Math.random()*this.width,e.y=Math.random()*this.height*3-this.height;break;case"misplaced":e.x=t.x+Math.random()*this.width*.3-.1*this.width,e.y=t.y+Math.random()*this.height*.3-.1*this.height;break;default:e.x=t.x,e.y=t.y}}},{key:"_fade",value:function(){if("explode"===this.fadePosition||"top"===this.fadePosition||"left"===this.fadePosition||"bottom"===this.fadePosition||"right"===this.fadePosition?this.state="stopping":this.state="stopped",this.origins)for(D=0;D<this.origins.length;D++)this._fadeOriginPosition(this.origins[D]),this._fadeOriginDirection(this.particles[D])}},{key:"_fadeOriginPosition",value:function(t){switch(this.fadePosition){case"random":t.x=Math.random()*this.width*2-this.width,t.y=Math.random()*this.height*2-this.height,t.x>0&&(t.x+=this.width),t.y>0&&(t.y+=this.height);break;case"top":t.x=Math.random()*this.width*3-this.width,t.y=-Math.random()*this.height;break;case"left":t.x=-Math.random()*this.width,t.y=Math.random()*this.height*3-this.height;break;case"bottom":t.x=Math.random()*this.width*3-this.width,t.y=this.height+Math.random()*this.height;break;case"right":t.x=this.width+Math.random()*this.width,t.y=Math.random()*this.height*3-this.height}}},{key:"_initParticleDirection",value:function(t){switch(t.vz=0,this.initDirection){case"random":Y=Math.random()*Math.PI*2,G=Math.random(),t.vx=this.width*G*Math.sin(Y)*.1,t.vy=this.height*G*Math.cos(Y)*.1;break;case"top":Y=Math.random()*Math.PI-Math.PI/2,G=Math.random(),t.vx=this.width*G*Math.sin(Y)*.1,t.vy=this.height*G*Math.cos(Y)*.1;break;case"left":Y=Math.random()*Math.PI+Math.PI,G=Math.random(),t.vx=this.width*G*Math.sin(Y)*.1,t.vy=this.height*G*Math.cos(Y)*.1;break;case"bottom":Y=Math.random()*Math.PI+Math.PI/2,G=Math.random(),t.vx=this.width*G*Math.sin(Y)*.1,t.vy=this.height*G*Math.cos(Y)*.1;break;case"right":Y=Math.random()*Math.PI,G=Math.random(),t.vx=this.width*G*Math.sin(Y)*.1,t.vy=this.height*G*Math.cos(Y)*.1;break;default:t.vx=0,t.vy=0}}},{key:"_fadeOriginDirection",value:function(t){switch(this.fadeDirection){case"random":Y=Math.random()*Math.PI*2,G=Math.random(),t.vx+=this.width*G*Math.sin(Y)*.1,t.vy+=this.height*G*Math.cos(Y)*.1;break;case"top":Y=Math.random()*Math.PI-Math.PI/2,G=Math.random(),t.vx+=this.width*G*Math.sin(Y)*.1,t.vy+=this.height*G*Math.cos(Y)*.1;break;case"left":Y=Math.random()*Math.PI+Math.PI,G=Math.random(),t.vx+=this.width*G*Math.sin(Y)*.1,t.vy+=this.height*G*Math.cos(Y)*.1;break;case"bottom":Y=Math.random()*Math.PI+Math.PI/2,G=Math.random(),t.vx+=this.width*G*Math.sin(Y)*.1,t.vy+=this.height*G*Math.cos(Y)*.1;break;case"right":Y=Math.random()*Math.PI,G=Math.random(),t.vx+=this.width*G*Math.sin(Y)*.1,t.vy+=this.height*G*Math.cos(Y)*.1;break;default:t.vx=0,t.vy=0}}},{key:"_initOrigins",value:function(){q=document.createElement("canvas"),this.responsiveWidth&&(this.width=this.wrapperElement.clientWidth),this.ratio=Math.min(this.width,this.maxWidth||Number.POSITIVE_INFINITY)/Math.min(this.height,this.maxHeight||Number.POSITIVE_INFINITY),this.ratio<this.imageRatio?(this.renderWidth=~~Math.min(this.width||Number.POSITIVE_INFINITY,this.minWidth||this.imageWidth||Number.POSITIVE_INFINITY,this.maxWidth||Number.POSITIVE_INFINITY),this.renderHeight=~~(this.renderWidth/this.imageRatio)):(this.renderHeight=~~Math.min(this.height||Number.POSITIVE_INFINITY,this.minHeight||this.imageHeight||Number.POSITIVE_INFINITY,this.maxHeight||Number.POSITIVE_INFINITY),this.renderWidth=~~(this.renderHeight*this.imageRatio)),this.offsetX=~~((this.width-this.renderWidth)/2),this.offsetY=~~((this.height-this.renderHeight)/2),q.width=this.renderWidth,q.height=this.renderHeight,(X=q.getContext("2d")).drawImage(this.image,0,0,this.renderWidth,this.renderHeight),J=X.getImageData(0,0,this.renderWidth,this.renderHeight).data,this.origins=void 0,this.origins=[];var t=this.growDuration+this.waitDuration+this.shrinkDuration;for(T=0;T<this.renderWidth;T+=this.particleGap)for(L=0;L<this.renderHeight;L+=this.particleGap)if(D=4*(T+L*this.renderWidth),(tt=J[D+3])>0){var e=Math.random();if(et=-Math.floor(e*t),this.colorArr)for(S=0;S<this.layerCount;S++)this.origins.push({x:this.offsetX+T,y:this.offsetY+L,z:S*this.layerDistance+50,color:this.colorArr,tick:et,seed:e,vertexColors:this.colorArr.map((function(t){return t/255}))});else for($=J[D],K=J[D+1],Q=J[D+2],S=0;S<this.layerCount;S++)this.origins.push({x:this.offsetX+T,y:this.offsetY+L,z:S*this.layerDistance+50,color:[$,K,Q,tt],tick:et,seed:e,vertexColors:[$/255,K/255,Q/255,tt/255]})}this.speed=Math.log(this.origins.length)/10,this.gravityFactor=1-this.gravity*this.speed}},{key:"_parseColor",value:function(t){var e;if("string"===typeof t){var i=t.replace(" ","");if(e=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(i))e=[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)];else if(e=/^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(i))e=[17*parseInt(e[1],16),17*parseInt(e[2],16),17*parseInt(e[3],16)];else if(e=/^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(i))e=[+e[1],+e[2],+e[3],+e[4]];else{if(!(e=/^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(i)))return;e=[+e[1],+e[2],+e[3]]}return e}}}]),t}();function ot(t){var e,i=Object(s.useRef)(null),a=Object(s.useRef)(null);return Object(s.useEffect)((function(){e=new rt(i.current),console.log("start"),e.width=a.clientWidth,e.height=a.clientHeight,setTimeout((function(){e.start()}),1e3),window.onresize=function(){e.width=a.clientWidth,e.height=window.clientHeight}}),[]),Object(x.jsx)("div",{ref:a,children:Object(x.jsx)("img",{ref:i,"data-particle-gap":"2","data-gravity":"0.1","data-noise":"1",src:t.src,"data-init-position":"top","data-init-direction":"top","data-fade-position":"bottom","data-fade-direction":"bottom","data-width":"500","data-height":"700",style:{display:"none"}})})}it.a.Header,it.a.Footer,it.a.Sider,it.a.Content;function ct(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(st.a,{children:[Object(x.jsx)(at.a,{span:15,children:Object(x.jsx)(ot,{src:"/images/portfolio/01.png"})}),Object(x.jsxs)(at.a,{span:1,children:[" ",Object(x.jsx)(nt.a,{type:"vertical"})]}),Object(x.jsx)(at.a,{span:8,children:Object(x.jsx)(w,{data:{title:"Logo for a VPN Company",work:[{company:"Privacy",title:"Mask",years:"Anonymous",description:"One of image of this logo stands for a facemask, which is the symbol\xa0of privacy"},{company:"Message Delivering",title:"Bird",years:"Messages",description:"Another image of this logo stands for a bird, which is the symbol of message delivering"}]}})})]}),Object(x.jsx)(st.a,{children:Object(x.jsx)(at.a,{span:12,children:Object(x.jsx)("iframe",{width:"100%",src:"https://www.notion.so/Logo-design-e941f9b1af1a4ca498071ccc0cd4e1f4",frameborder:"0"})})})]})}it.a.Header,it.a.Footer,it.a.Sider,it.a.Content;function dt(t){return Object(x.jsxs)(st.a,{children:[Object(x.jsx)(at.a,{span:15,children:Object(x.jsx)("img",{src:"/images/portfolio/02.png"})}),Object(x.jsxs)(at.a,{span:1,children:[" ",Object(x.jsx)(nt.a,{type:"vertical"})]}),Object(x.jsx)(at.a,{span:8,children:Object(x.jsx)(w,{data:{title:"Snapshot Tree",work:[{company:"Backgound",title:"Longhorn",years:"2017",description:"One of image of this logo stands for a facemask, which is the symbol\xa0of privacy"},{company:"What's special in this component",title:"One curve line",years:"Two lines",description:"I connected two lines together to show the curve line between nodes so that I don't need to use svg or canvas to do it, which hugely cut down the complexity of this component. "}]}})})]})}var lt=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(){var t;Object(h.a)(this,i);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={visible:!1,selectedProject:{}},t.onClose=function(){t.setState({visible:!1})},t.showDrawer=function(){t.setState({visible:!0})},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this;if(!this.props.data)return null;var e=this.props.data.projects.map((function(t){var e="/images/portfolio/"+t.image;return{itemId:t.title,mediaUrl:e,metaData:{type:"image",height:101,width:204,title:t.title,description:t.description,focalPoint:[0,0],link:{url:e,target:"_blank"}}}})),i=function(t){return"Logo Design"===t.type?Object(x.jsx)(ct,{}):Object(x.jsx)(dt,{})};return Object(x.jsx)("section",{id:"portfolio",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"twelve columns collapsed",children:[Object(x.jsx)("h1",{children:"Check Out Some of My Works."}),Object(x.jsx)(O.a,{title:this.state.selectedProject.title,placement:"bottom",closable:!0,onClose:this.onClose,visible:this.state.visible,contentWrapperStyle:{height:"100%"},children:this.state.visible&&Object(x.jsx)(i,{type:this.state.selectedProject.title})},"bottom"),Object(x.jsx)(I,{items:e,onClick:function(e){t.setState({selectedProject:e}),t.showDrawer()}})]})})})}}]),i}(s.Component),mt=function(t){Object(o.a)(i,t);var e=Object(c.a)(i);function i(t){var s;return Object(h.a)(this,i),(s=e.call(this,t)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),s}return Object(r.a)(i,[{key:"getResumeData",value:function(){m.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(t){this.setState({resumeData:t})}.bind(this),error:function(t,e,i){console.log(i),alert(i)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(b,{data:this.state.resumeData.main}),Object(x.jsx)(y,{data:this.state.resumeData.main}),Object(x.jsx)(lt,{data:this.state.resumeData.portfolio}),Object(x.jsx)(j,{data:this.state.resumeData.main})]})}}]),i}(s.Component),ut=function(t){t&&t instanceof Function&&i.e(8).then(i.bind(null,143)).then((function(e){var i=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,h=e.getTTFB;i(t),s(t),a(t),n(t),h(t)}))};n.a.render(Object(x.jsx)(mt,{}),document.getElementById("root")),ut()},85:function(t,e,i){},89:function(t,e,i){}},[[100,3,4]]]);
//# sourceMappingURL=main.7f1f6a9a.chunk.js.map