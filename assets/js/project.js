/**//*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s,H,f,w){var K=f("html"),q=f(s),p=f(H),b=f.fancybox=function(){b.open.apply(this,arguments)},J=navigator.userAgent.match(/msie/i),C=null,t=H.createTouch!==w,u=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},F=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!t,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(J?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=u(a)?f(a).get():[a]),f.each(a,function(e,c){var l={},g,h,k,n,m;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),u(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:f("<div/>").text(c.data("fancybox-title")||c.attr("title")).html(),isDom:!0,element:c},
f.metadata&&f.extend(!0,l,c.metadata())):l=c);g=d.href||l.href||(r(c)?c:null);h=d.title!==w?d.title:l.title||"";n=(k=d.content||l.content)?"html":d.type||l.type;!n&&l.isDom&&(n=c.data("fancybox-type"),n||(n=(n=c.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(c)&&(n="html",k=c)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));k||("inline"===n?g?k=f(r(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(k=c):
"html"===n?k=g:n||g||!l.isDom||(n="inline",k=c));f.extend(l,{href:g,type:n,content:k,title:h,selector:m});a[e]=l}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==w&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),
b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&
(b.player.timer=setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(r(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=
b.current;d&&(r(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=m(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==w&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),e.pos=f.extend({},e.dim,l)))},
update:function(a){var d=a&&a.originalEvent&&a.originalEvent.type,e=!d||"orientationchange"===d;e&&(clearTimeout(C),C=null);b.isOpen&&!C&&(C=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),C=null)},e&&!t?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,t&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}));b.trigger("onLoading")},getViewport:function(){var a=b.current&&
b.current.locked||!1,d={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=t&&s.innerWidth?s.innerWidth:q.width(),d.h=t&&s.innerHeight?s.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&u(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(t?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=
e.which||e.keyCode,l=e.target||e.srcElement;if(27===c&&b.coming)return!1;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||l&&(l.type||f(l).is("[contenteditable]"))||f.each(d,function(d,l){if(1<a.group.length&&l[c]!==w)return b[d](l[c]),e.preventDefault(),!1;if(-1<f.inArray(c,l))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var h=f(d.target||null),k=!1;h.length&&!(k||h.is(".fancybox-skin")||h.is(".fancybox-wrap"));)k=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();0!==c&&!k&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&
b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,{},b.helpers[d].defaults,e),c)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=m(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,
c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&t&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(t?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",t?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);t||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,l,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();e=a.content;c=a.type;l=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}u(e)&&e.parent().is(a.inner)||a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,l=b.skin,g=b.inner,h=b.current,c=h.width,k=h.height,n=h.minWidth,v=h.minHeight,p=h.maxWidth,
q=h.maxHeight,t=h.scrolling,r=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,z=m(y[1]+y[3]),s=m(y[0]+y[2]),w,A,u,D,B,G,C,E,I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=m(l.outerWidth(!0)-l.width());w=m(l.outerHeight(!0)-l.height());A=z+y;u=s+w;D=F(c)?(a.w-A)*m(c)/100:c;B=F(k)?(a.h-u)*m(k)/100:k;if("iframe"===h.type){if(I=h.content,h.autoHeight&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(D).height(9999),G=I.contents().find("body"),r&&G.css("overflow-x",
"hidden"),B=G.outerHeight(!0))}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=m(D);k=m(B);E=D/B;n=m(F(n)?m(n,"w")-A:n);p=m(F(p)?m(p,"w")-A:p);v=m(F(v)?m(v,"h")-u:v);q=m(F(q)?m(q,"h")-u:q);G=p;C=q;h.fitToView&&(p=Math.min(a.w-A,p),q=Math.min(a.h-u,q));A=a.w-z;s=a.h-s;h.aspectRatio?(c>p&&(c=p,k=m(c/E)),k>q&&(k=q,c=m(k*E)),c<n&&(c=n,k=m(c/
E)),k<v&&(k=v,c=m(k*E))):(c=Math.max(n,Math.min(c,p)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),k=g.height()),k=Math.max(v,Math.min(k,q)));if(h.fitToView)if(g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height(),h.aspectRatio)for(;(a>A||z>s)&&c>n&&k>v&&!(19<d++);)k=Math.max(v,Math.min(q,k-10)),c=m(k*E),c<n&&(c=n,k=m(c/E)),c>p&&(c=p,k=m(c/E)),g.width(c).height(k),e.width(c+y),a=e.width(),z=e.height();else c=Math.max(n,Math.min(c,c-(a-A))),k=Math.max(v,Math.min(k,k-(z-s)));r&&"auto"===t&&k<B&&
c+y+r<A&&(c+=r);g.width(c).height(k);e.width(c+y);a=e.width();z=e.height();e=(a>A||z>s)&&c>n&&k>v;c=h.aspectRatio?c<G&&k<C&&c<D&&k<B:(c<G||k<C)&&(c<D||k<B);f.extend(h,{dim:{width:x(a),height:x(z)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:w,wrapSpace:z-l.outerHeight(!0),skinSpace:l.height()-k});!I&&h.autoHeight&&k>v&&k<q&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){f(d.target).is("a")||f(d.target).parent().is("a")||
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play(!0)):b.play(!1))},
_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,k=a.wPadding,n=b.getViewport();!e&&a.isDom&&d.is(":visible")&&(e=d.find("img:first"),e.length||(e=d));u(e)?(c=e.offset(),e.is("img")&&
(f=e.outerWidth(),g=e.outerHeight())):(c.top=n.y+(n.h-g)*a.topRatio,c.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=n.y,c.left-=n.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-k*a.leftRatio),width:x(f+k),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](m("width"===
f?c:c-g*e)),b.inner[f](m("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,l=f.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&
(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(m(e[g])-200),c[g]="+=200px"):(e[g]=x(m(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},
changeOut:function(){var a=b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!t,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var d;a=f.extend({},this.defaults,a);this.overlay&&
this.close();d=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(d&&d.lenth?d:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",
function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
J?(b=Math.max(H.documentElement.offsetWidth,H.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(r(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),J&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(d.css("margin-bottom")))}d["top"===a.position?"prependTo":
"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",l=function(g){var h=f(this).blur(),k=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||h.is(".fancybox-wrap")||(l=a.groupAttr||"data-fancybox-group",m=h.attr(l),m||(l="rel",m=h.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(h=c.length?f(c):e,h=h.filter("["+l+'="'+m+'"]'),k=h.index(this)),a.index=k,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?p.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",l):e.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===w&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===w&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(s).width();K.addClass("fancybox-lock-test");d=f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_min_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mmenu v6.0.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},o={},e.each([s,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",i="6.0.2";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var o=this;if("boolean"!=typeof i&&(i=!0),t.hasClass(s.vertical))t.add(t.parents("."+s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened),this.openPanel(t.parents("."+s.panel).not("."+s.vertical).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.opened))return;var r=this.$pnls.children("."+s.panel),l=r.filter("."+s.opened);if(!e[n].support.csstransitions)return l.addClass(s.hidden).removeClass(s.opened),t.removeClass(s.hidden).addClass(s.opened),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);r.not(t).removeClass(s.subopened);for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.is("."+s.vertical)||d.addClass(s.subopened),d=d.data(a.parent);r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),t.removeClass(s.hidden);var c=function(){l.removeClass(s.opened),t.addClass(s.opened),t.hasClass(s.subopened)?(l.addClass(s.highest),t.removeClass(s.subopened)):(l.addClass(s.subopened),t.addClass(s.highest)),this.trigger("openPanel:start",t)},h=function(){l.removeClass(s.highest).addClass(s.hidden),t.removeClass(s.highest),this.trigger("openPanel:finish",t)};i&&!t.hasClass(s.noanimation)?setTimeout(function(){o.__transitionend(t,function(){h.call(o)},o.conf.transitionDuration),c.call(o)},this.conf.openingInterval):(c.call(this),h.call(this))}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.vertical)&&(t.removeClass(s.opened),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var e=this.$pnls.children("."+s.panel),t=e.first();this.$pnls.children("."+s.panel).not(t).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden),this.openPanel(t),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.vertical)&&this[t.hasClass(s.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),e.addClass(s.selected),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?"mm-"+this.opts.extensions[t].join(" mm-"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);var t=[s.menu];this.opts.slidingSubmenus||t.push(s.vertical),this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(this.conf.panelNodetype).each(function(){if($panel=i._initPanel(e(this)),$panel){i._initNavbar($panel),i._initListview($panel),n=n.add($panel);var t=$panel.children("."+s.listview).children("li").children(i.conf.panelNodeType).add($panel.children("."+i.conf.classNames.panel));t.length&&a.call(i,t)}})};a.call(this,t),this.opts.initPanels.call(this,n),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(this.__refactorClass(e,this.conf.classNames.panel,"panel"),this.__refactorClass(e,this.conf.classNames.nopanel,"nopanel"),this.__refactorClass(e,this.conf.classNames.vertical,"vertical"),this.__refactorClass(e,this.conf.classNames.inset,"inset"),e.filter("."+s.inset).addClass(s.nopanel),e.hasClass(s.nopanel))return!1;if(e.hasClass(s.panel))return e;var t=e.hasClass(s.vertical)||!this.opts.slidingSubmenus;e.removeClass(s.vertical);var n=e.attr("id")||this.__getUniqueId();e.removeAttr("id"),e.is("ul, ol")&&(e.wrap("<div />"),e=e.parent()),e.addClass(s.panel+" "+s.hidden).attr("id",n);var i=e.parent("li");return t?e.add(i).addClass(s.vertical):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var i=t.data(a.parent),o=e('<div class="'+s.navbar+'" />'),r=e[n].i18n(this.opts.navbar.title),l=!1;if(i&&i.length){if(i.hasClass(s.vertical))return;if(i.parent().is("."+s.listview))var d=i.children("a, span").not("."+s.next);else var d=i.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');d=d.first(),i=d.closest("."+s.panel);var c=i.attr("id");switch(r=d.text(),this.opts.navbar.titleLink){case"anchor":l=d.attr("href");break;case"parent":l="#"+c}o.append('<a class="'+s.btn+" "+s.prev+'" href="#'+c+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.hasnavbar),o.append('<a class="'+s.title+'"'+(l?' href="'+l+'"':"")+">"+r+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,"nolistview"),n.filter("."+this.conf.classNames.inset).addClass(s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children();this.__refactorClass(i,this.conf.classNames.selected,"selected"),this.__refactorClass(i,this.conf.classNames.divider,"divider"),this.__refactorClass(i,this.conf.classNames.spacer,"spacer");var o=t.data(a.parent);if(o&&o.parent().is("."+s.listview)&&!o.children("."+s.next).length){var r=o.children("a, span").first(),l=e('<a class="'+s.next+'" href="#'+t.attr("id")+'" />').insertBefore(r);r.is("span")&&l.addClass(s.fullsubopen)}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(i){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+s.panel)&&(o=!0,t[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&i.preventDefault(),!o&&r&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(i.target).parent());var f=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));f&&i.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,f)&&t.close()}})},_initMatchMedia:function(){var e=this;this._fireMatchMedia(),r.$wndw.on(o.resize,function(t){e._fireMatchMedia()})},_fireMatchMedia:function(){for(var e in this.mtch)for(var t=window.matchMedia&&window.matchMedia(e).matches?"yes":"no",n=0;n<this.mtch[e].length;n++)this.mtch[e][n][t].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(s[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.divider).not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.next)},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.unbind(o.transitionend),e.unbind(o.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(o.transitionend,s),e.on(o.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var o=new e[n](t,i,s);o.$menu.data(n,o.__api()),a=a.add(o.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,o,r}}(jQuery),/*	
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var s=this,a=this.opts[n],r=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof a&&(a={}),"top"!=a.position&&"bottom"!=a.position||(a.zposition="front"),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),"string"!=typeof r.pageSelector&&(r.pageSelector="> "+r.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var l=[i.offcanvas];"left"!=a.position&&l.push(i.mm(a.position)),"back"!=a.zposition&&l.push(i.mm(a.zposition)),e[t].support.csstransforms||l.push(i["no-csstransforms"]),e[t].support.csstransforms3d||l.push(i["no-csstransforms3d"]),this.bind("initMenu:after",function(){this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(l.join(" ")).parent("."+i.wrapper).removeClass(i.wrapper),this.$menu[r.menuInsertMethod](r.menuInsertSelector);var e=window.location.hash;if(e){var t=this._getOriginalMenuId();t&&t==e.slice(1)&&this.open()}}),this.bind("initExtensions:after",function(){for(var e=[i.mm("widescreen"),i.mm("iconbar")],t=0;t<e.length;t++)for(var n in this.opts.extensions)if(this.opts.extensions[n].indexOf(e[t])>-1){!function(t,n){s.matchMedia(t,function(){o.$html.addClass(e[n])},function(){o.$html.removeClass(e[n])})}(n,t);break}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style")},clickAnchor:function(e,t){var s=this;if(this.opts[n]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(t)return!0;var r=e.closest("."+i.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(r,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(s.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[i.opened];r.blockUI&&l.push(i.blocking),"modal"==r.blockUI&&l.push(i.modal),r.moveBackground&&l.push(i.background),"left"!=r.position&&l.push(i.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(i.mm(this.opts[n].zposition)),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),o.$html.addClass(i.opening)},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(t.opts[n].position),i.mm(t.opts[n].zposition)];o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(s.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),o.$html.removeClass(i.opening),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var s=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),t.addClass(i.page+" "+i.slideout),o.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){if(o.$html.hasClass(i.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(i.opened))){var s=o.$wndw.height();(n||s!=e)&&(e=s,o.$page.css("minHeight",s))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(i.modal)||(t.closeAllOthers(),t.close())}))};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof s&&(s={fix:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.fix&&(this.bind("open:start",function(){this.$pnls.children("."+i.opened).scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0},e[t].prototype["_initWindow_"+n]=function(){o.$docu.off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,function(e){o.$html.hasClass(i.opened)&&e.preventDefault()});var t=!1;o.$body.off(a.touchstart+"-"+n).on(a.touchstart+"-"+n,"."+i.panels+"> ."+i.opened,function(e){o.$html.hasClass(i.opened)&&(t||(t=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),t=!1))}).off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,"."+i.panels+"> ."+i.opened,function(t){o.$html.hasClass(i.opened)&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.off(a.orientationchange+"-"+n).on(a.orientationchange+"-"+n,function(){that.$pnls.children("."+i.opened).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var i,s,a,o}(jQuery),/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="screenReader";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n],r=this.conf[n];o=e[t].glbl,"boolean"==typeof a&&(a={aria:a,text:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+i.listview).children().each(function(){s.__sr_aria(e(this),"hidden",e(this).is("."+i.hidden))})}),this.bind("openPanel:start",function(e){var t=this.$menu.find("."+i.panel).not(e).not(e.parents("."+i.panel)),n=e.add(e.find("."+i.vertical+"."+i.opened).children("."+i.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(e){this.__sr_aria(e,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+i.prev+", ."+i.next).each(function(){s.__sr_aria(e(this),"owns",e(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar);this.__sr_aria(t,"hidden",!e.hasClass(i.hasnavbar))}),a.text&&(this.bind("initlistview:after",function(e){var t=e.find("."+i.listview).find("."+i.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(e){var t=e.children("."+i.navbar),n=!!t.children("."+i.prev).length;this.__sr_aria(t.children("."+i.title),"hidden",n)}))),a.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var s=n.children("."+i.navbar),a=s.children("."+i.title).text(),o=e[t].i18n(r.text.closeSubmenu);a&&(o+=" ("+a+")"),s.children("."+i.prev).html(this.__sr_text(o))}),this.bind("initlistview:after",function(n){n.find("."+i.listview).children("li").children("."+i.next).each(function(){var n=e(this),a=$prev.nextAll("span, a").first().text(),o=e[t].i18n(r.text[$prev.parent().is("."+i.vertical)?"toggleSubmenu":"openSubmenu"]);a&&(o+=" ("+a+")"),n.html(s.__sr_text(o))})}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("sronly")},clickAnchor:function(e,t){}},e[t].defaults[n]={aria:!0,text:!0},e[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},e[t].prototype.__sr_aria=function(e,t,n){e.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},e[t].prototype.__sr_text=function(e){return'<span class="'+i.sronly+'">'+e+"</span>"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu autoHeight add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="autoHeight";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&s&&(s={height:"auto"}),"string"==typeof s&&(s={height:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"auto"==s.height||"highest"==s.height){this.bind("initMenu:after",function(){this.$menu.addClass(i.autoheight)});var a=function(t){if(!this.opts.offCanvas||this.vars.opened){var n=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,a=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,o=0;this.$menu.addClass(i.measureheight),"auto"==s.height?(t=t||this.$pnls.children("."+i.opened),t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical).first()),o=t.outerHeight()):"highest"==s.height&&this.$pnls.children().each(function(){var t=e(this);t.is("."+i.vertical)&&(t=t.parents("."+i.panel).not("."+i.vertical).first()),o=Math.max(o,t.outerHeight())}),this.$menu.height(o+n+a).removeClass(i.measureheight)}};this.opts.offCanvas&&this.bind("open:start",a),"highest"==s.height&&this.bind("initPanels:after",a),"auto"==s.height&&(this.bind("updateListview",a),this.bind("openPanel:start",a),this.bind("closePanel:finish",a))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,t){}},e[t].defaults[n]={height:"default"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu backButton add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="backButton";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[t].defaults[n],a),a.close){var r="#"+s.$menu.attr("id");this.bind("open:finish",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(i.opened)?(e.stopPropagation(),s.close()):location.hash==r&&(e.stopPropagation(),s.open())})}}},add:function(){return window.history&&window.history.pushState?(i=e[t]._c,s=e[t]._d,void(a=e[t]._e)):void(e[t].addons[n].setup=function(){})},clickAnchor:function(e,t){}},e[t].defaults[n]={close:!1};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu columns add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="columns";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof s&&(s={add:s}),"number"==typeof s&&(s={add:!0,visible:s}),"object"!=typeof s&&(s={}),"number"==typeof s.visible&&(s.visible={min:s.visible,max:s.visible}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.add){s.visible.min=Math.max(1,Math.min(6,s.visible.min)),s.visible.max=Math.max(s.visible.min,Math.min(6,s.visible.max));for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r=[],l=0;l<=s.visible.max;l++)r.push(i.columns+"-"+l);r=r.join(" ");var d=function(e){var t=this.$pnls.children("."+i.subopened).length;e&&!e.hasClass(i.subopened)&&t++,t=Math.min(s.visible.max,Math.max(s.visible.min,t)),a.removeClass(r).addClass(i.columns+"-"+t)},c=function(){a.removeClass(r)},h=function(t){this.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).add(t).slice(-s.visible.max).each(function(t){e(this).addClass(i.columns+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.columns)}),this.bind("initPanels:after",function(e){h.call(this,this.$pnls.children("."+i.opened))}),this.bind("open:start",d),this.bind("openPanel:start",d),this.bind("openPanel:start",h),this.bind("close:finish",c),this.opts.offCanvas||openMenu.call(this)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("columns")},clickAnchor:function(t,s){if(!this.opts[n].add)return!1;if(s){var a=t.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+i.panel))for(var r=parseInt(t.closest("."+i.panel).attr("class").split(i.columns+"-")[1].split(" ")[0],10)+1;r!==!1;){var l=this.$pnls.children("."+i.columns+"-"+r);if(!l.length){r=!1;break}r++,l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden)}}catch(d){}}}},e[t].defaults[n]={add:!1,visible:{min:1,max:3}};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu dividers add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="dividers";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(e){this.__refactorClass(e.find("li"),this.conf.classNames[n].collapsed,"collapsed")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.length&&n.find("."+i.listview).find("."+i.divider).remove().end().each(function(){var t="";s.__filterListItems(e(this).children()).each(function(){var n=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();n!=t&&n.length&&(t=n,e('<li class="'+i.divider+'">'+n+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("initListview:after",function(t){t.find("."+i.divider).each(function(){var t=e(this),n=t.nextUntil("."+i.divider,"."+i.collapsed);n.length&&(t.children("."+i.next).length||(t.wrapInner("<span />"),t.prepend('<a href="#" class="'+i.next+" "+i.fullsubopen+'" />')))})}),r.fixed){this.bind("initPanels:after",function(){"undefined"==typeof this.$fixeddivider&&(this.$fixeddivider=e('<ul class="'+i.listview+" "+i.fixeddivider+'"><li class="'+i.divider+'"></li></ul>').prependTo(this.$pnls).children())});var l=function(t){if(t=t||this.$pnls.children("."+i.opened),!t.is(":hidden")){var n=t.children("."+i.listview).children("."+i.divider).not("."+i.hidden),s=t.scrollTop()||0,a="";n.each(function(){e(this).position().top+s<s+1&&(a=e(this).text())}),this.$fixeddivider.text(a),this.$pnls[a.length?"addClass":"removeClass"](i.hasdividers)}};this.bind("open:start",l),this.bind("openPanel:start",l),this.bind("updateListview",l),this.bind("initPanel:after",function(e){e.off(a.scroll+"-"+n+" "+a.touchmove+"-"+n).on(a.scroll+"-"+n+" "+a.touchmove+"-"+n,function(t){l.call(s,e)})})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,t){if(this.opts[n].collapse&&t){var s=e.parent();if(s.is("."+i.divider)){var a=s.nextUntil("."+i.divider,"."+i.collapsed);return s.toggleClass(i.opened),a[s.hasClass(i.opened)?"addClass":"removeClass"](i.uncollapsed),!0}}return!1}},e[t].defaults[n]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[t].configuration.classNames[n]={collapsed:"Collapsed"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu counters add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="counters";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initListview:after",function(t){this.__refactorClass(e("em",t),this.conf.classNames[n].counter,"counter")}),r.add&&this.bind("initListview:after",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.each(function(){var t=e(this).data(s.parent);t&&(t.children("em."+i.counter).length||t.prepend(e('<em class="'+i.counter+'" />')))})}),r.update){var l=function(t){t=t||this.$pnls.children("."+i.panel),t.each(function(){var t=e(this),n=t.data(s.parent);if(n){var o=n.children("em."+i.counter);o.length&&(t=t.children("."+i.listview),t.length&&o.html(a.__filterListItems(t.children()).length))}})};this.bind("initListview:after",l),this.bind("updateListview",l)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("counter search noresultsmsg")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,addTo:"panels",count:!1},e[t].configuration.classNames[n]={counter:"Counter"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu drag add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e,t,n){return e<t&&(e=t),e>n&&(e=n),e}function n(n,i,s){var r,l,d,c,h,f=this,u={},p=0,v=!1,m=!1,b=0,g=0;switch(this.opts.offCanvas.position){case"left":case"right":u.events="panleft panright",u.typeLower="x",u.typeUpper="X",m="width";break;case"top":case"bottom":u.events="panup pandown",u.typeLower="y",u.typeUpper="Y",m="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":u.negative=!0,c=function(e){e>=s.$wndw[m]()-n.maxStartPos&&(p=1)};break;default:u.negative=!1,c=function(e){e<=n.maxStartPos&&(p=1)}}switch(this.opts.offCanvas.position){case"left":u.open_dir="right",u.close_dir="left";break;case"right":u.open_dir="left",u.close_dir="right";break;case"top":u.open_dir="down",u.close_dir="up";break;case"bottom":u.open_dir="up",u.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":h=function(){return this.$menu};break;default:h=function(){return e("."+o.slideout)}}var _=this.__valueOrFn(n.node,this.$menu,s.$page);"string"==typeof _&&(_=e(_));var C=new Hammer(_[0],this.opts[a].vendors.hammer);C.on("panstart",function(e){c(e.center[u.typeLower]),s.$slideOutNodes=h(),v=u.open_dir}).on(u.events+" panend",function(e){p>0&&e.preventDefault()}).on(u.events,function(e){if(r=e["delta"+u.typeUpper],u.negative&&(r=-r),r!=b&&(v=r>=b?u.open_dir:u.close_dir),b=r,b>n.threshold&&1==p){if(s.$html.hasClass(o.opened))return;p=2,f._openSetup(),f.trigger("open:start"),s.$html.addClass(o.dragging),g=t(s.$wndw[m]()*i[m].perc,i[m].min,i[m].max)}2==p&&(l=t(b,10,g)-("front"==f.opts.offCanvas.zposition?g:0),u.negative&&(l=-l),d="translate"+u.typeUpper+"("+l+"px )",s.$slideOutNodes.css({"-webkit-transform":"-webkit-"+d,transform:d}))}).on("panend",function(e){2==p&&(s.$html.removeClass(o.dragging),s.$slideOutNodes.css("transform",""),f[v==u.open_dir?"_openFinish":"close"]()),p=0})}function i(e,t,n,i){var s=this,l=e.data(r.parent);if(l){l=l.closest("."+o.panel);var d=new Hammer(e[0],s.opts[a].vendors.hammer),c=null;d.on("panright",function(e){c||(s.openPanel(l),c=setTimeout(function(){clearTimeout(c),c=null},s.conf.openingInterval+s.conf.transitionDuration))})}}var s="mmenu",a="drag";e[s].addons[a]={setup:function(){if(this.opts.offCanvas){var t=this.opts[a],o=this.conf[a];d=e[s].glbl,"boolean"==typeof t&&(t={menu:t,panels:t}),"object"!=typeof t&&(t={}),"boolean"==typeof t.menu&&(t.menu={open:t.menu}),"object"!=typeof t.menu&&(t.menu={}),"boolean"==typeof t.panels&&(t.panels={close:t.panels}),"object"!=typeof t.panels&&(t.panels={}),t=this.opts[a]=e.extend(!0,{},e[s].defaults[a],t),t.menu.open&&this.bind("setPage:after",function(){n.call(this,t.menu,o.menu,d)}),t.panels.close&&this.bind("initPanel:after",function(e){i.call(this,e,t.panels,o.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[s].addons[a].add=function(){},void(e[s].addons[a].setup=function(){})):(o=e[s]._c,r=e[s]._d,l=e[s]._e,void o.add("dragging"))},clickAnchor:function(e,t){}},e[s].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[s].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var o,r,l,d}(jQuery),/*	
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="dropdown";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[n],d=this.conf[n];if(o=e[t].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[n]=e.extend(!0,{},e[t].defaults[n],l),l.drop){var c;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.dropdown),l.tip&&this.$menu.addClass(i.tip),"string"!=typeof l.position.of){var t=this._getOriginalMenuId();t&&t.length&&(l.position.of='[href="#'+t+'"]')}"string"==typeof l.position.of&&(c=e(l.position.of),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&c.on(a.mouseenter+"-"+n,function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-"+n,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),o.$html.addClass(i.dropdown)}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(s.style)),o.$html.removeClass(i.dropdown)});var h=function(e,t){var n=t[0],s=t[1],a="x"==e?"scrollLeft":"scrollTop",r="x"==e?"outerWidth":"outerHeight",h="x"==e?"left":"top",f="x"==e?"right":"bottom",u="x"==e?"width":"height",p="x"==e?"maxWidth":"maxHeight",v=null,m=o.$wndw[a](),b=c.offset()[h]-=m,g=b+c[r](),_=o.$wndw[u](),C=d.offset.button[e]+d.offset.viewport[e];if(l.position[e])switch(l.position[e]){case"left":case"bottom":v="after";break;case"right":case"top":v="before"}null===v&&(v=b+(g-b)/2<_/2?"after":"before");var y,w;return"after"==v?(y="x"==e?b:g,w=_-(y+C),n[h]=y+d.offset.button[e],n[f]="auto",s.push(i["x"==e?"tipleft":"tiptop"])):(y="x"==e?g:b,w=y-C,n[f]="calc( 100% - "+(y-d.offset.button[e])+"px )",n[h]="auto",s.push(i["x"==e?"tipright":"tipbottom"])),n[p]=Math.min(d[u].max,w),[n,s]},f=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var t=[{},[]];t=h.call(this,"y",t),t=h.call(this,"x",t),this.$menu.css(t[0]),l.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(t[1].join(" "))}};this.bind("open:start",f),o.$wndw.on(a.resize+"-"+n,function(e){f.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-"+n,function(e){f.call(r)})}}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,t){}},e[t].defaults[n]={drop:!1,event:"click",position:{},tip:!0},e[t].configuration[n]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="fixedElements";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this.opts[n],s=this.conf[n];o=e[t].glbl,i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i);var a=function(e){var t=this.conf.classNames[n].fixed;this.__refactorClass(e.find("."+t),t,"slideout")[s.elemInsertMethod](s.elemInsertSelector)};this.bind("setPage:after",a)}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("fixed")},clickAnchor:function(e,t){}},e[t].configuration[n]={elemInsertMethod:"appendTo",elemInsertSelector:"body"},e[t].configuration.classNames[n]={fixed:"Fixed"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu iconPanels add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="iconPanels";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.visible++,a.add){for(var r=[],l=0;l<=a.visible;l++)r.push(i.iconpanel+"-"+l);r=r.join(" ");var d=function(t){t.hasClass(i.vertical)||s.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).removeClass(i.hidden).add(t).not("."+i.vertical).slice(-a.visible).each(function(t){e(this).addClass(i.iconpanel+"-"+t)})};this.bind("initMenu:after",function(){this.$menu.addClass(i.iconpanel)}),this.bind("openPanel:start",d),this.bind("initPanels:after",function(e){d.call(s,s.$pnls.children("."+i.opened))}),this.bind("initListview:after",function(e){e.hasClass(i.vertical)||e.children("."+i.subblocker).length||e.prepend('<a href="#'+e.closest("."+i.panel).attr("id")+'" class="'+i.subblocker+'" />')})}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("iconpanel subblocker")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,visible:3};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu keyboardNavigation add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(t,n){t=t||this.$pnls.children("."+a.opened);var i=e(),s=this.$menu.children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar);s.find(d).filter(":focus").length||("default"==n&&(i=t.children("."+a.listview).find("a[href]").not("."+a.hidden),i.length||(i=t.find(d).not("."+a.hidden)),i.length||(i=s.find(d).not("."+a.hidden))),i.length||(i=this.$menu.children("."+a.tabstart)),i.first().focus())}function n(e){e||(e=this.$pnls.children("."+a.opened));var t=this.$pnls.children("."+a.panel),n=t.not(e);n.find(d).attr("tabindex",-1),e.find(d).attr("tabindex",0),e.find("."+a.mm("toggle")+", ."+a.mm("check")).attr("tabindex",-1),e.children("."+a.navbar).children("."+a.title).attr("tabindex",-1)}var i="mmenu",s="keyboardNavigation";e[i].addons[s]={setup:function(){var o=this.opts[s];this.conf[s];if(l=e[i].glbl,"boolean"!=typeof o&&"string"!=typeof o||(o={enable:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[i].defaults[s],o),o.enable){var r=e('<button class="'+a.tabstart+'" tabindex="0" type="button" />'),d=e('<button class="'+a.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){o.enhance&&this.$menu.addClass(a.keyboardfocus),this["_initWindow_"+s](o.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(r).append(d).children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar).children("a."+a.title).attr("tabindex",-1)}),this.bind("open:start",function(){n.call(this)}),this.bind("open:finish",function(){t.call(this,null,o.enable)}),this.bind("openPanel:start",function(e){n.call(this,e)}),this.bind("openPanel:finish",function(e){t.call(this,e,o.enable)}),this.bind("initOpened:after",function(){this.__sr_aria(this.$menu.children("."+a.mm("tabstart")+", ."+a.mm("tabend")),"hidden",!0)})}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e,a.add("tabstart tabend keyboardfocus"),r.add("focusin keydown")},clickAnchor:function(e,t){}},e[i].defaults[s]={enable:!1,enhance:!1},e[i].configuration[s]={},e[i].prototype["_initWindow_"+s]=function(t){l.$wndw.off(r.keydown+"-offCanvas"),l.$wndw.off(r.focusin+"-"+s).on(r.focusin+"-"+s,function(t){if(l.$html.hasClass(a.opened)){var n=e(t.target);n.is("."+a.tabend)&&n.parent().find("."+a.tabstart).focus()}}),l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){i.data("mmenu");if(n.is("input, textarea"));else switch(t.keyCode){case 13:(n.is(".mm-toggle")||n.is(".mm-check"))&&n.trigger(r.click);break;case 32:case 37:case 38:case 39:case 40:t.preventDefault()}}}),t&&l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){var s=i.data("mmenu");if(n.is("input, textarea"))switch(t.keyCode){case 27:n.val("")}else switch(t.keyCode){case 8:var r=n.closest("."+a.panel).data(o.parent);r&&r.length&&s.openPanel(r.closest("."+a.panel));break;case 27:i.hasClass(a.offcanvas)&&s.close()}}})};var a,o,r,l,d="input, select, textarea, button, label, a[href]"}(jQuery),/*	
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="lazySubmenus";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof s&&(s={load:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),s.load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+i.inset).not("."+i.nolistview).not("."+i.nopanel).addClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initPanels:before",function(e){e=e||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu).removeClass(i.lazysubmenu+" "+i.nolistview+" "+i.nopanel)}),this.bind("initOpened:before",function(){var e=this.$pnls.find("."+this.conf.classNames.selected).closest("."+i.lazysubmenu);e.length&&this.initPanels(e)}),this.bind("openPanel:before",function(e){$panels=this.__findAddBack(e,"."+i.lazysubmenu).not("."+i.lazysubmenu+" ."+i.lazysubmenu),$panels.length&&this.initPanels($panels)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("lazysubmenu"),s.add("lazysubmenu")},clickAnchor:function(e,t){}},e[t].defaults[n]={load:!1},e[t].configuration[n]={};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={},d={};a.length&&(e.each(a,function(o){var c=a[o];"boolean"==typeof c&&c&&(c={}),"object"!=typeof c&&(c={}),"undefined"==typeof c.content&&(c.content=["prev","title"]),c.content instanceof Array||(c.content=[c.content]),c=e.extend(!0,{},s.opts.navbar,c);var h=e('<div class="'+i.navbar+'" />'),f=c.height;"number"!=typeof f&&(f=1),f=Math.min(4,Math.max(1,f)),h.addClass(i.navbar+"-size-"+f);var u=c.position;"bottom"!=u&&(u="top"),l[u]||(l[u]=0),l[u]+=f,d[u]||(d[u]=e('<div class="'+i.navbars+"-"+u+'" />')),d[u].append(h);for(var p=0,v=0,m=c.content.length;v<m;v++){var b=e[t].addons[n][c.content[v]]||!1;b?p+=b.call(s,h,c,r):(b=c.content[v],b instanceof e||(b=e(c.content[v])),h.append(b))}p+=Math.ceil(h.children().not("."+i.btn).length/f),p>1&&h.addClass(i.navbar+"-content-"+p),h.children("."+i.btn).length&&h.addClass(i.hasbtns)}),this.bind("initMenu:after",function(){for(var e in l)this.$menu.addClass(i.hasnavbar+"-"+e+"-"+l[e]),this.$menu["bottom"==e?"append":"prepend"](d[e])}))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("navbars close hasbtns")},clickAnchor:function(e,t){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="breadcrumbs";e[t].addons[n][i]=function(n,i,s){var a=this,o=e[t]._c,r=e[t]._d;o.add("breadcrumbs separator");var l=e('<span class="'+o.breadcrumbs+'" />').appendTo(n);return this.bind("initNavbar:after",function(t){t.removeClass(o.hasnavbar);for(var n=[],i=e('<span class="'+o.breadcrumbs+'"></span>'),a=t,l=!0;a&&a.length;){if(a.is("."+o.panel)||(a=a.closest("."+o.panel)),!a.hasClass(o.vertical)){var d=a.children("."+o.navbar).children("."+o.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+a.attr("id")+'">'+d+"</a>"),l=!1}a=a.data(r.parent)}i.append(n.join('<span class="'+o.separator+'">'+s.breadcrumbSeparator+"</span>")).appendTo(t.children("."+o.navbar))}),this.bind("openPanel:start",function(e){l.html(e.children("."+o.navbar).children("."+o.breadcrumbs).html()||"")}),this.bind("initNavbar:after:sr-aria",function(t){t.children("."+o.navbar).children("."+o.breadcrumbs).children("a").each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").slice(1))})}),0}}(jQuery),/*	
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="close";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=(e[t].glbl,e('<a class="'+s.close+" "+s.btn+'" href="#" />').appendTo(n));return this.bind("setPage:after",function(e){a.attr("href","#"+e.attr("id"))}),this.bind("setPage:after:sr-text",function(n){a.html(this.__sr_text(e[t].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))}),-1}}(jQuery),/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="next";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.next+" "+l.btn+'" href="#" />').appendTo(i);return this.bind("openPanel:start",function(e){a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html(),d[o?"attr":"removeAttr"]("href",o),d[o||r?"removeClass":"addClass"](l.hidden),d.html(r)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(d,"hidden",d.hasClass(l.hidden)),this.__sr_aria(d,"owns",(d.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelNext="Next"}(jQuery),/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="prev";e[t].addons[n][i]=function(i,s){var a=e[t]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(i);this.bind("initNavbar:after",function(e){e.removeClass(a.hasnavbar)});var r,l,d;return this.bind("openPanel:start",function(e){e.hasClass(a.vertical)||(r=e.find("."+this.conf.classNames[n].panelPrev),r.length||(r=e.children("."+a.navbar).children("."+a.prev)),l=r.attr("href"),d=r.html(),o[l?"attr":"removeAttr"]("href",l),o[l||d?"removeClass":"addClass"](a.hidden),o.html(d))}),this.bind("initNavbar:after:sr-aria",function(e){var t=e.children("."+a.navbar);this.__sr_aria(t,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(o,"hidden",o.hasClass(a.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelPrev="Prev"}(jQuery),/*	
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="searchfield";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=e('<div class="'+s.search+'" />').appendTo(n);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}(jQuery),/*	
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="title";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.title+'" />').appendTo(i);this.bind("openPanel:start",function(e){e.hasClass(l.vertical)||(r=e.find("."+this.conf.classNames[n].panelTitle),r.length||(r=e.children("."+l.navbar).children("."+l.title)),a=r.attr("href"),o=r.html()||s.title,d[a?"attr":"removeAttr"]("href",a),d[a||o?"removeClass":"addClass"](l.hidden),d.html(o))});var c;return this.bind("openPanel:start:sr-aria",function(e){if(this.opts.screenReader.text&&(c||(c=this.$menu.children("."+l.navbars+"-top, ."+l.navbars+"-bottom").children("."+l.navbar).children("."+l.prev)),c.length)){var t=!0;"parent"==this.opts.navbar.titleLink&&(t=!c.hasClass(l.hidden)),this.__sr_aria(d,"hidden",t)}}),0},e[t].configuration.classNames[n].panelTitle="Title"}(jQuery),/*	
 * jQuery mmenu pageScroll add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e){d&&d.length&&d.is(":visible")&&l.$html.add(l.$body).animate({scrollTop:d.offset().top+e}),d=!1}function n(e){try{return!("#"==e||"#"!=e.slice(0,1)||!l.$page.find(e).length)}catch(t){return!1}}var i="mmenu",s="pageScroll";e[i].addons[s]={setup:function(){var o=this,d=this.opts[s],c=this.conf[s];if(l=e[i].glbl,"boolean"==typeof d&&(d={scroll:d}),d=this.opts[s]=e.extend(!0,{},e[i].defaults[s],d),d.scroll&&this.bind("close:finish",function(){t(c.scrollOffset)}),d.update){var o=this,h=[],f=[];o.bind("initListview:after",function(t){o.__filterListItemAnchors(t.find("."+a.listview).children("li")).each(function(){var t=e(this).attr("href");n(t)&&h.push(t)}),f=h.reverse()});var u=-1;l.$wndw.on(r.scroll+"-"+s,function(t){for(var n=l.$wndw.scrollTop(),i=0;i<f.length;i++)if(e(f[i]).offset().top<n+c.updateOffset){u!==i&&(u=i,o.setSelected(o.__filterListItemAnchors(o.$pnls.children("."+a.opened).find("."+a.listview).children("li")).filter('[href="'+f[i]+'"]').parent()));break}})}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e},clickAnchor:function(i,o){if(d=!1,o&&this.opts[s].scroll&&this.opts.offCanvas&&l.$page&&l.$page.length){var r=i.attr("href");n(r)&&(d=e(r),l.$html.hasClass(a.mm("widescreen"))&&t(this.conf[s].scrollOffset))}}},e[i].defaults[s]={scroll:!1,update:!1},e[i].configuration[s]={scrollOffset:0,updateOffset:50};var a,o,r,l,d=!1}(jQuery),/*	
 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="rtl";e[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];o=e[t].glbl,"object"!=typeof s&&(s={use:s}),s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s),"boolean"!=typeof s.use&&(s.use="rtl"==(o.$html.attr("dir")||"").toLowerCase()),s.use&&this.bind("initMenu:after",function(){this.$menu.addClass(i.rtl)})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("rtl")},clickAnchor:function(e,t){}},e[t].defaults[n]={use:"detect"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function t(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",i="searchfield";e[n].addons[i]={setup:function(){var l=this,d=this.opts[i],c=this.conf[i];r=e[n].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[i]=e.extend(!0,{},e[n].defaults[i],d),c=this.conf[i]=e.extend(!0,{},e[n].configuration[i],c),this.bind("close:start",function(){this.$menu.find("."+s.search).find("input").blur()}),this.bind("initPanels:after",function(r){if(d.add){var h;switch(d.addTo){case"panels":h=r;break;default:h=this.$menu.find(d.addTo)}if(h.each(function(){var t=e(this);if(!t.is("."+s.panel)||!t.is("."+s.vertical)){if(!t.children("."+s.search).length){var i=l.__valueOrFn(c.clear,t),a=l.__valueOrFn(c.form,t),r=l.__valueOrFn(c.input,t),h=l.__valueOrFn(c.submit,t),f=e("<"+(a?"form":"div")+' class="'+s.search+'" />'),u=e('<input placeholder="'+e[n].i18n(d.placeholder)+'" type="text" autocomplete="off" />');f.append(u);var p;if(r)for(p in r)u.attr(p,r[p]);if(i&&e('<a class="'+s.btn+" "+s.clear+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),u.val("").trigger(o.keyup+"-searchfield")}),a){for(p in a)f.attr(p,a[p]);h&&!i&&e('<a class="'+s.btn+" "+s.next+'" href="#" />').appendTo(f).on(o.click+"-searchfield",function(e){e.preventDefault(),f.submit()})}t.hasClass(s.search)?t.replaceWith(f):t.prepend(f).addClass(s.hassearch)}if(d.noResults){var v=t.closest("."+s.panel).length;if(v||(t=l.$pnls.children("."+s.panel).first()),!t.children("."+s.noresultsmsg).length){var m=t.children("."+s.listview).first();e('<div class="'+s.noresultsmsg+" "+s.hidden+'" />').append(e[n].i18n(d.noResults))[m.length?"insertAfter":"prependTo"](m.length?m:t)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var f=this.$pnls.children("."+s.resultspanel);f.length||(f=e('<div class="'+s.panel+" "+s.resultspanel+" "+s.noanimation+" "+s.hidden+'" />').appendTo(this.$pnls).append('<div class="'+s.navbar+" "+s.hidden+'"><a class="'+s.title+'">'+e[n].i18n(d.resultsPanel.title)+"</a></div>").append('<ul class="'+s.listview+'" />').append(this.$pnls.find("."+s.noresultsmsg).first().clone()),this.initPanels(f))}this.$menu.find("."+s.search).each(function(){var n,r,c=e(this),h=c.closest("."+s.panel).length;h?(n=c.closest("."+s.panel),r=n):(n=e("."+s.panel,l.$menu),r=l.$menu),d.resultsPanel.add&&(n=n.not(f));var u=c.children("input"),p=l.__findAddBack(n,"."+s.listview).children("li"),v=p.filter("."+s.divider),m=l.__filterListItems(p),b="a",g=b+", span",_="",C=function(){var t=u.val().toLowerCase();if(t!=_){if(_=t,d.resultsPanel.add&&f.children("."+s.listview).empty(),n.scrollTop(0),m.add(v).addClass(s.hidden).find("."+s.fullsubopensearch).removeClass(s.fullsubopen+" "+s.fullsubopensearch),m.each(function(){var t=e(this),n=b;(d.showTextItems||d.showSubPanels&&t.find("."+s.next))&&(n=g);var i=t.data(a.searchtext)||t.children(n).text();i.toLowerCase().indexOf(_)>-1&&t.add(t.prevAll("."+s.divider).first()).removeClass(s.hidden)}),d.showSubPanels&&n.each(function(t){var n=e(this);l.__filterListItems(n.find("."+s.listview).children()).each(function(){var t=e(this),n=t.data(a.child);t.removeClass(s.nosubresults),n&&n.find("."+s.listview).children().removeClass(s.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+s.subopened).last());else{var i=e();n.each(function(){var t=l.__filterListItems(e(this).find("."+s.listview).children()).not("."+s.hidden).clone(!0);t.length&&(d.resultsPanel.dividers&&(i=i.add('<li class="'+s.divider+'">'+e(this).children("."+s.navbar).children("."+s.title).text()+"</li>")),i=i.add(t))}),i.find("."+s.next).remove(),f.children("."+s.listview).append(i),this.openPanel(f)}else e(n.get().reverse()).each(function(t){var n=e(this),i=n.data(a.parent);i&&(l.__filterListItems(n.find("."+s.listview).children()).length?(i.hasClass(s.hidden)&&i.children("."+s.next).not("."+s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch),i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("."+s.divider).first().removeClass(s.hidden)):h||(n.hasClass(s.opened)&&setTimeout(function(){l.openPanel(i.closest("."+s.panel))},(t+1)*(1.5*l.conf.openingInterval)),i.addClass(s.nosubresults)))});r.find("."+s.noresultsmsg)[m.not("."+s.hidden).length?"addClass":"removeClass"](s.hidden),this.trigger("updateListview")}};u.off(o.keyup+"-"+i+" "+o.change+"-"+i).on(o.keyup+"-"+i,function(e){t(e.keyCode)||C.call(l)}).on(o.change+"-"+i,function(e){C.call(l)});var y=c.children("."+s.btn);y.length&&u.on(o.keyup+"-"+i,function(e){y[u.val().length?"removeClass":"addClass"](s.hidden)}),u.trigger(o.keyup+"-"+i)})}}})},add:function(){s=e[n]._c,a=e[n]._d,o=e[n]._e,s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,t){}},e[n].defaults[i]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[n].configuration[i]={clear:!1,form:!1,input:!1,submit:!1};var s,a,o,r}(jQuery),/*	
 * jQuery mmenu sectionIndexer add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="sectionIndexer";e[t].addons[n]={setup:function(){var s=this,r=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("initPanels:after",function(t){if(r.add){var o;switch(r.addTo){case"panels":o=t;break;default:o=e(r.addTo,this.$menu).filter("."+i.panel)}o.find("."+i.divider).closest("."+i.panel).addClass(i.hasindexer),this.$indexer||(this.$indexer=e('<div class="'+i.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-"+n+" "+i.touchstart+"-"+n,function(t){var n=e(this).attr("href").slice(1),a=s.$pnls.children("."+i.opened),o=a.find("."+i.listview),r=!1,l=a.scrollTop();a.scrollTop(0),o.children("."+i.divider).not("."+i.hidden).each(function(){r===!1&&n==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r!==!1?r:l)}));var l=function(e){e=e||this.$pnls.children("."+i.opened),this.$menu[(e.hasClass(i.hasindexer)?"add":"remove")+"Class"](i.hasindexer)};this.bind("openPanel:start",l),this.bind("initPanels:after",l)}})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("indexer hasindexer"),a.add("mouseover touchstart")},clickAnchor:function(e,t){if(e.parent().is("."+i.indexer))return!0}},e[t].defaults[n]={add:!1,addTo:"panels"};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu setSelected add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"detect"==r.current){var l=function(e){e=e.split("?")[0].split("#")[0];var t=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?a.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&l(e.join("/")))};this.bind("initMenu:after",function(){l(window.location.href)})}else r.current||this.bind("initListview:after",function(e){$panels.find("."+i.listview).children("."+i.selected).removeClass(i.selected)});r.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(i.hoverselected)}),r.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+i.listview).find("."+i.next).removeClass(i.selected);for(var t=e.data(s.parent);t;)t.not("."+i.vertical).children("."+i.next).addClass(i.selected),t=t.closest("."+i.panel).data(s.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(i.parentselected)}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("hoverselected parentselected")},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var i,s,a,o}(jQuery),/*	
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="toggles";e[t].addons[n]={setup:function(){var s=this;this.opts[n],this.conf[n];o=e[t].glbl,this.bind("initListview:after",function(t){this.__refactorClass(t.find("input"),this.conf.classNames[n].toggle,"toggle"),this.__refactorClass(t.find("input"),this.conf.classNames[n].check,"check"),t.find("input."+i.toggle+", input."+i.check).each(function(){var t=e(this),n=t.closest("li"),a=t.hasClass(i.toggle)?"toggle":"check",o=t.attr("id")||s.__getUniqueId();n.children('label[for="'+o+'"]').length||(t.attr("id",o),n.prepend(t),e('<label for="'+o+'" class="'+i[a]+'"></label>').insertBefore(n.children("a, span").last()))})})},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("toggle check")},clickAnchor:function(e,t){}},e[t].configuration.classNames[n]={toggle:"Toggle",check:"Check"};var i,s,a,o}(jQuery);
return true;
}));
