/*
* Snake Game 
* @by	ambar
* @site https://github.com/ambar/Snake
* @packed 2011-10-11T02:55:49.105Z
*/;
// ../js/wo.js
(function(a,b){Object.extend=function(a,b){for(var c in b)a[c]=b[c];return a},util={},util.inherits=function(a,b){a.prototype=Object.create(b.prototype,{constructor:{value:a}}),a.super=b.prototype},window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){window.setTimeout(a,1e3/60)});var c=a.wo||(a.wo={});c.rand=function(a,b){b||(b=0);return Math.round(Math.random()*(a-b))+b},c.makeArray=function(a){return Array.prototype.slice.call(a,0)},c.throttle=function(a,c,d,e){var f=Date.now,g=0,h=0,i=0,j=0,k=0,l=null;return function(){var m=arguments,n=this;i=f(),j=i-h,k=j-a;var o=function(){h=f(),c.apply(n,m)};clearTimeout(l),e===b&&k>=0?o():d===!0?l=setTimeout(o,e===!0?a:-k):e===!0&&i-g>=a&&o(),g=i}},c.debounce=function(a,b,d){return c.throttle(a,b,d,!0)},c.$query=function(a){return document.querySelector(a)},a.wo=c})(this),function(){function a(){}var b=!1,c="_super",d=new RegExp("\\b"+c+"\\b"),e=function(a){return typeof a=="function"},f=function(a,b,c){return function(){var d=this[b],e;this[b]=c,e=a.apply(this,arguments),this[b]=d;return e}};a.extend=function(a){function i(){!b&&e(this.init)&&this.init.apply(this,arguments)}b=!0;var g=this.prototype,h=new this;b=!1,i.__super__=g,i.extend=arguments.callee,i.prototype=Object.create(h,{constructor:{value:i}}),i.methods=function(a){Object.keys(a).forEach(function(b,i){var j=a[b];h[b]=e(j)&&e(g[b])&&d.test(j)?f(j,c,g[b]):j})},i.methods(a);return i},this.Class=a}(),HTMLElement.prototype.bind=function(a,b){this.addEventListener(a,b,!0);return this},HTMLElement.prototype.text=function(a){this.textContent=a;return this},Number.prototype.times=function(a,b){var c=0,d=this.valueOf(),b=b||this;d<0&&(d=0);while(c<d)a.call(b,c++)},Array.prototype.first=function(){return this[0]},Array.prototype.last=function(){return this[this.length-1]},Array.prototype.removeAt=function(a,b){return this.splice(a,b||1)},Array.prototype.remove=function(a,b){var c=this,d=0,e=c.length;for(;d<e;d++)if(c[d]===a){c.removeAt(d);if(!b)break}return c};
// ../js/event.js
(function(a){var b={addListener:function(a,b){var c=this._events;c||(c=this._events={}),c.hasOwnProperty(a)&&c[a]?c[a].push(b):this._events[a]=[b];return this},fireEvent:function(a,b){var c=this,d=c._events;d||(d=c._events={});var e=d[a];if(!e)return c;e.forEach(function(d){d.call(c,{type:a},b)});return c},removeListener:function(a,b){var c=this._events;if(!c||arguments.length===0){this._events={};return this}var d=c[a];a&&d&&(c[a]=b?d.filter(function(a){return a!==b}):[]);return this},once:function(a,b){var c=this,d=function(){c.off(a,d),b.apply(this,arguments)};c.on(a,d);return c}};b.on=b.addListener,b.off=b.removeListener,b.emit=b.fireEvent,a.EventEmitter=b})(this);
// ../js/input.js
(function(a,b){var c=Date.now,d={},e={states:d,init:function(a){},state:function(a){return this.states[this.queryKeyCode(a)]},isKeyDown:function(a){var b=this.state(a);return!!b&&b.pressed},isKeyUp:function(a){var b=this.state(a);return!!b&&!b.pressed},isKeyPressed:function(a){var b=this.state(a);return!!b&&!b.locked&&b.pressed},lock:function(){var a=d;Object.keys(a).forEach(function(b){a[b].pressed&&(a[b].locked=!0)})},letterFromKeyCode:function(a){return String.fromCharCode(a).toLowerCase()},queryKeyCode:function(a){return typeof a=="string"?f[a.toLowerCase()]:a},anyKeyDown:function(){var a=d;return Object.keys(a).some(function(b,c){return a[b].pressed})}},f={backspace:8,back:8,tab:9,"\t":9,space:32," ":32,"return":13,enter:13,capslock:20,caps:20,escape:27,esc:27,";":186,"-":187,"=":189,"`":192,",":188,".":190,"/":191,"[":219,"]":221,"'":222,"\\":220,semicolon:186,minus:187,equal:189,accent:192,comma:188,period:190,slash:191,lbracket:219,rbracket:221,apostrophe:222,backslash:220,cmd:91,command:91,win:91,windows:91,rcmd:92,rcommand:92,rwin:92,rwindows:92,menu:93,shift:16,ctrl:17,alt:18,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,ins:45,"delete":46,del:46,scrolllock:145,pause:19,"break":19,pausebreak:19,numlock:144,"num/":111,"num*":106,"mum+":107,"mum-":109,"mum.":110,center:12,mum0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,S:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123};Object.freeze(f),e.keyMap=f,a.addEventListener("keyup",function(a){e.states[a.keyCode]={pressed:!1}},!1),a.addEventListener("keydown",function(a){var b=d[a.keyCode];b?b.pressed=!0:d[a.keyCode]={pressed:!0}},!1),(a.wo||(a.wo={})).input=e})(this);
// ../js/vec.js
(function(a,b){function c(a){if(!(this instanceof c))return new c(a);this.el=a||[0,0];var b=this;["x","y","z"].forEach(function(a,c){Object.defineProperty(b,a,{get:function(){return this.get(c)}})})}c.prototype={get:function(a){return this.el[a]},set:function(a){this.el=a;return this},add:function(a){var b=a.el;return c(this.el.map(function(a,c){return a+b[c]}))},map:function(a){return new c(this.el.map(a))},mul:function(a){return this.map(function(b){return b*a})},eq:function(a){var b=a.el;return this.el.every(function(a,c){return a===b[c]})},inspect:function(){return"Vector["+this.el.join(",")+"]"}},c.up=c([0,-1]),c.down=c([0,1]),c.left=c([-1,0]),c.right=c([1,0]),c.zero=c([0,0]),(a.wo||(a.wo={})).Vector=c})(this);
// ../js/color.js
(function(a,b){function c(a){Array.isArray(a)||(a=wo.makeArray(arguments));if(a.length<3||a.some(isNaN))throw TypeError("Invalid color arguments");this.el=a,["r","g","b","a"].forEach(function(a,b){Object.defineProperty(this,a,{get:function(){return this.el[b]},set:function(a){this.el[b]=a}})}.bind(this)),this.a||(this.a=1)}c.prototype={toString:function(){return"rgba("+this.el.join(",")+")"},toArray:function(){return this.el.slice()}},c.random=function(a){a||(a=255);return new c(wo.rand(a),wo.rand(a),wo.rand(a),1)},c.parse=function(a){var b=function(a){return f>>a*8&255},d=function(a){return(f>>a*4&15)*17},e=[0,0,0,1],f;if(typeof a=="number")f=a,e=[2,1,0].map(b);else{var g=a.slice(1),h=a.slice(0,1);f=parseInt(g,16),h==="#"&&(e=[2,1,0].map(g.length===6?b:d))}return new c(e)},(a.wo||(a.wo={})).Color=c})(this);
// ../js/stage.js
(function(a,b){var c=Date.now,d=wo.input,e=a.requestAnimationFrame,f={lastUpdate:0,delta:0,start:0},g=function(a,b,c){if(typeof b!="function")throw TypeError("The argument 'on_tick' must be a function");a||(a=60);var d={fps:a,on_tick:b,running:!1,start:function(){this.running=!0,this.fps===60?e(this.tick,c):setTimeout(this.tick,1e3/this.fps)},tick:function(){d.running&&(d.on_tick(),d.start())},stop:function(){this.running=!1}};return d},h,i={ctx:null,width:0,height:0,detached:[],entities:[],fpsNow:0,frameCount:0,ticker:null,init:function(a,b,d,e){var i=this,a=this.canvas=typeof a=="string"?document.querySelector(a):a;if(!a)throw a.getContext?new Error("No such canvas element."):new Error("CanvasRenderingContext2D is not supported.");this.resize(b||320,d||240,e),this.ctx=a.getContext("2d"),this.ticker=g(h,this.tick.bind(this),this.canvas),this.run(),f.start=c(),this.init=function(){}},resize:function(a,b,c){c||(c=1);var d=a||this.width,e=b||this.height;this.canvas.width=d,this.canvas.height=e,this.canvas.style.width=d*c+"px",this.canvas.style.height=e*c+"px",this.width=d,this.height=e,this.emit("resize")},add:function(a){a.alive=!0,this.entities.push(a),this.emit("add");return this},clear:function(){this.ctx.clearRect(0,0,this.width,this.height);return this},remove:function(a){a.alive=!1,this.entities.remove(a),this.emit("remove",a);return this},removeAll:function(){this.entities=[],this.clear();return this},drawAll:function(){var a=this,b=a.ctx;this.clear(),this.entities.forEach(function(a){a.alive&&a.draw(b)});return this},updateAll:function(){var a=c(),b=a-f.lastUpdate,e=f.delta=b/1e3;f.lastUpdate=a,this.frameCount+=1,this.fpsNow=Math.round(1e3/b);var g=this.entities,h=g.length,i;while(h-->0)i=g[h],i.alive&&i.update(e);this.emit("update",e),d.lock();return this},run:function(){this.ticker.running||(this.ticker.start(),this.emit("run"),f.lastUpdate=c());return this},tick:function(){this.updateAll(),this.drawAll()},pause:function(){this.ticker.running&&(this.ticker.stop(),this.drawAll(),this.emit("pause"));return this},reset:function(){this.removeAll(),this.off();return this}};Object.extend(i,EventEmitter),Object.defineProperties(i,{running:{get:function(){return this.ticker.running},set:function(a){Boolean(a)?this.run():this.pause()}},fps:{get:function(){return h},set:function(a){h=a,this.ticker&&(this.ticker.fps=a)}}}),(a.wo||(a.wo={})).stage=i,wo.time=f})(this);
// ../js/entities.js
var Entity=Class.extend({init:function(a,b,c,d){this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this.vx=this.vy=0,this.alive=!0},update:function(a){this.x+=this.vx,this.y+=this.vy,this.emit("update",a)},draw:function(a){}});Object.extend(Entity.prototype,EventEmitter);var Ball=Entity.extend({init:function(a,b,c,d){this._super(a,b),this.rad=c||20,this.color=d||"lime"},draw:function(a){a.fillStyle=this.color,a.beginPath(),a.arc(this.x,this.y,this.rad,0,Math.PI*2,1),a.fill()}}),GameText=Entity.extend({init:function(a,b,c,d,e){isNaN(d)&&(d=12),this.text=c||"",this.font=d+"px Tahoma",this.align="center",this.color=e||"white",this._super(a,b,d,d)},draw:function(a){a.font=this.font,a.textAlign=this.align,a.fillStyle=this.color,a.fillText(this.text,this.x,this.y)}});
// ../js/snake.js
(function(a,b){var c=wo.stage,d=wo.input,e=wo.rand,f=wo.Vector,g=wo.Color,h=d.letterFromKeyCode,i=a,j=a.document,k=wo.$query,l,m,n=40,o=1,p=10,q=n,r,s,t=null,u=null,v=null,w,x=!1,y=!0,z=function(a){return Math.ceil(a/n)-1},A=function(){return f([e(B),e(C)])},B,C,D=function(a,b,d,e){l=b||480,m=d||320,c.fps=p,c.init(a,l,m,e),B=z(l),C=z(m),r=k("#snake-score"),v=new F,H(),i.addEventListener("keydown",function(a){switch(h(a.keyCode)){case"r":I();break;case"p":c.running=!c.running;break;case"c":L.background=g.random(48);break;case"d":L.debug=!L.debug;break;case"w":L.penetrable=!L.penetrable}},!1)},E=Entity.extend({head_color:"sienna",tail_color_odd:g.parse(16381418),tail_color_even:g.parse(9196109),tail_len_default:3,init:function(a,b){var c=this;this.parts=[f([a,b])],this.direction=f.zero,this.tail_len_default.times(function(){c.addTail()}),Object.defineProperties(this,{x:{get:function(){return this.head.x}},y:{get:function(){return this.head.y}},head:{get:function(){return this.parts.first()}},tails:{get:function(){return this.parts.slice(1)}}})},addTail:function(){this.parts.push(this.parts.last().add(f.zero));return this},update:function(){var a;d.isKeyPressed("left")&&(a=f.left),d.isKeyPressed("right")&&(a=f.right),d.isKeyPressed("up")&&(a=f.up),d.isKeyPressed("down")&&(a=f.down);var b=this.move(a);if(!!b){if(this.collideWithWall()&&!y){this.kill();return}if(this.collideWithTail()){this.kill();return}this.collideWithVector(u.position)&&(c.remove(u),this.addTail(),G.spawn(g.random()),this.emit("score"))}},forEachPart:function(a,b){var c=this.parts,d=c.length,e=b?1:0;while(e<d)if(a(c[e],e++)===!1)break},move:function(a){a||(a=this.direction);if(a.eq(f.zero)||a.mul(-1).eq(this.direction))return!1;var b=this.parts,c=b.first();b.pop(),b.unshift(c.add(a)),this.direction=a;return!0},collideWithTail:function(){var a=!1,b=this.head;this.forEachPart(function(c){if(c.eq(b)){a=!0;return!1}},!0);return a},collideWithVector:function(a){var b=!1,c=this.head;this.forEachPart(function(d){if(a.eq(c)){b=!0;return!0}});return b},collideWithWall:function(){var a=!1,b;this.forEachPart(function(c){c.y<0?b=[c.x,C]:c.y>C?b=[c.x,-1]:c.x<0?b=[B,c.y]:c.x>B&&(b=[-1,c.y]);if(b){a=!0,y&&c.set(b);return!1}});return a},kill:function(){this.parts.pop(),c.fps=p*2,this.parts.length?this.update=this.kill.bind(this):(c.remove(this),c.fps=p,I())},drawPart:function(a,b,c,d){var e={x:b,y:c,color:d,rad:n/2};G.prototype.draw.call(e,a)},drawHead:function(a){var b=this.head;this.drawPart(a,b.x,b.y,this.head_color)},drawTail:function(a){var b=this,c=b.head;this.tails.forEach(function(d,e){d.eq(c)||b.drawPart(a,d.x,d.y,e&1?b.tail_color_even:b.tail_color_odd)})},draw:function(a){this.drawHead(a),this.drawTail(a)}}),F=Entity.extend({init:function(){},draw:function(a){a.beginPath(),a.lineWidth=1,a.strokeStyle="#eee";var b=function(b,c,d,e){a.font="10px Tahoma",a.textAlign="center",a.fillStyle=e||"#ccc",a.fillText(b,c,d)},c=m/n,d=l/n,e=n/2;c.times(function(c){var f=n*c;d.times(function(d){var g=n*d;a.moveTo(0,f),a.lineTo(l,f),a.moveTo(g,0),a.lineTo(g,m),b(d+","+c,g+e,f+e)})}),a.stroke(),a.closePath()}}),G=Entity.extend({init:function(a,b,c,d){this._super(a,b),this.rad=c||20,this.color=d||g.random()},draw:function(a){var b=Math.PI,c=this.rad,d=this.x,e=this.y,d=(this.x+1)*n-n/2,e=(this.y+1)*n-n/2;a.save(),a.translate(d,e);var f=a.createRadialGradient(0,0,0,0,0,c),g="transparent",h=this.color;3..times(function(a){h.a=.1+a*.07,f.addColorStop(.65+a*.1,h)}),7..times(function(a){h.a=.5+a*.05,f.addColorStop(.93+a*.01,h)}),a.beginPath(),a.fillStyle=f,a.arc(0,0,c,0,b*2,1),a.fill();var i=c/7;a.fillStyle="rgba(255,255,255,.8)",a.beginPath(),a.translate(-c/2,-c/2),a.rotate(-b/4),a.scale(1,.5),a.arc(0,0,i,0,b*2,1),a.fill(),a.translate(-d,-e),a.restore()}});G.spawn=function(a){var b=n/2,d;while(t.collideWithVector(d=A()));u=new G(d.x,d.y,b-2,a),u.position=d,c.add(u)};var H=function(){if(!w){w=!0,J(),t=new E(e(B-3,3),e(C-3,3)),t.on("score",function(){s+=1,r.text(s*10)}),c.add(t);var a=f([9,5]);G.spawn(g.random()),x&&c.add(v)}},I=function(){c.reset().run(),H()},J=function(){w=!1,r.text(s=0)},K=function(){c.reset()},L=Object.create({},{unit:{get:function(){return n},set:function(a){return n=a}},score:{get:function(){return s}},debug:{get:function(){return x},set:function(a){!!a!==x&&(x=a,v&&c[x?"add":"remove"](v))}},penetrable:{get:function(){return y},set:function(a){return y=!!a}},background:{get:function(){return c.canvas.style.backgroundColor},set:function(a){return c.canvas.style.backgroundColor=a}},init:{value:D},play:{value:H},restart:{value:I}});a.SnakeGame=L})(this)