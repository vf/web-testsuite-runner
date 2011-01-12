var embed=dojo={};embed.config={};embed.global=window;embed.doc=document;embed.body=function(){return document.body;};dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=(function(){var _1=function(it){var t=typeof it;return it&&(t=="function"||it instanceof Function)&&!it.nodeType;};return dojo.isSafari?function(it){if(typeof it=="function"&&it=="[object NodeList]"){return false;}return _1(it);}:_1;})();dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||dojo.isArray(it)||dojo.isFunction(it));};dojo.isArrayLike=function(it){var d=dojo;return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!dojo.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.isNumeric=function(n){return n==parseFloat(n);};dojo.isNumber=function(n){return typeof n=="number"||n instanceof Number;};["indexOf","lastIndexOf","forEach","map","some","every","filter"].forEach(function(_2,_3){dojo[_2]=function(_4,_5,_6){if((_3>1)&&(typeof _5=="string")){_5=new Function("item","index","array",_5);}return Array.prototype[_2].call(_4,_5,_6);};});dojo.fromJson=function(_7){return eval("("+_7+")");};dojo._escapeString=function(_8){return ("\""+_8.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");};dojo.toJsonIndentStr="\t";dojo.toJson=function(it,_9,_a){if(it===undefined){return "undefined";}var _b=typeof it;if(_b=="number"||_b=="boolean"){return it+"";}if(it===null){return "null";}if(dojo.isString(it)){return dojo._escapeString(it);}var _c=arguments.callee;var _d;_a=_a||"";var _e=_9?_a+dojo.toJsonIndentStr:"";var tf=it.__json__||it.json;if(dojo.isFunction(tf)){_d=tf.call(it);if(it!==_d){return _c(_d,_9,_e);}}if(it.nodeType&&it.cloneNode){throw new Error("Can't serialize DOM nodes");}var _f=_9?" ":"";var _10=_9?"\n":"";if(dojo.isArray(it)){var res=dojo.map(it,function(obj){var val=_c(obj,_9,_e);if(typeof val!="string"){val="undefined";}return _10+_e+val;});return "["+res.join(","+_f)+_10+_a+"]";}if(_b=="function"){return null;}var _11=[],key;for(key in it){var _12,val;if(typeof key=="number"){_12="\""+key+"\"";}else{if(typeof key=="string"){_12=dojo._escapeString(key);}else{continue;}}val=_c(it[key],_9,_e);if(typeof val!="string"){continue;}_11.push(_10+_e+_12+":"+_f+val);}return "{"+_11.join(","+_f)+_10+_a+"}";};dojo.byId=function(id,doc){return (typeof id=="string")?(doc||document).getElementById(id):id;};(function(){var _13={trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}return str;},forEach:function(arr,_14,_15){if(!arr||!arr.length){return;}for(var i=0,l=arr.length;i<l;++i){_14.call(_15||window,arr[i],i,arr);}},byId:function(id,doc){if(typeof id=="string"){return (doc||document).getElementById(id);}else{return id;}},doc:document,NodeList:Array};var n=navigator;var dua=n.userAgent;var dav=n.appVersion;var tv=parseFloat(dav);_13.isOpera=(dua.indexOf("Opera")>=0)?tv:undefined;_13.isKhtml=(dav.indexOf("Konqueror")>=0)?tv:undefined;_13.isWebKit=parseFloat(dua.split("WebKit/")[1])||undefined;_13.isChrome=parseFloat(dua.split("Chrome/")[1])||undefined;var _16=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(_16&&!_13.isChrome){_13.isSafari=parseFloat(dav.split("Version/")[1]);if(!_13.isSafari||parseFloat(dav.substr(_16+7))<=419.3){_13.isSafari=2;}}if(document.all&&!_13.isOpera){_13.isIE=parseFloat(dav.split("MSIE ")[1])||undefined;}Array._wrap=function(arr){return arr;};(function(d){var _17=d.trim;var _18=d.forEach;var qlc=d._NodeListCtor=d.NodeList;var _19=function(){return d.doc;};var _1a=((d.isWebKit||d.isMozilla)&&((_19().compatMode)=="BackCompat"));var _1b=!!_19().firstChild["children"]?"children":"childNodes";var _1c=">~+";var _1d=false;var _1e=function(){return true;};var _1f=function(_20){if(_1c.indexOf(_20.slice(-1))>=0){_20+=" * ";}else{_20+=" ";}var ts=function(s,e){return _17(_20.slice(s,e));};var _21=[];var _22=-1,_23=-1,_24=-1,_25=-1,_26=-1,_27=-1,_28=-1,lc="",cc="",_29;var x=0,ql=_20.length,_2a=null,_2b=null;var _2c=function(){if(_28>=0){var tv=(_28==x)?null:ts(_28,x);_2a[(_1c.indexOf(tv)<0)?"tag":"oper"]=tv;_28=-1;}};var _2d=function(){if(_27>=0){_2a.id=ts(_27,x).replace(/\\/g,"");_27=-1;}};var _2e=function(){if(_26>=0){_2a.classes.push(ts(_26+1,x).replace(/\\/g,""));_26=-1;}};var _2f=function(){_2d();_2c();_2e();};var _30=function(){_2f();if(_25>=0){_2a.pseudos.push({name:ts(_25+1,x)});}_2a.loops=(_2a.pseudos.length||_2a.attrs.length||_2a.classes.length);_2a.oquery=_2a.query=ts(_29,x);_2a.otag=_2a.tag=(_2a["oper"])?null:(_2a.tag||"*");if(_2a.tag){_2a.tag=_2a.tag.toUpperCase();}if(_21.length&&(_21[_21.length-1].oper)){_2a.infixOper=_21.pop();_2a.query=_2a.infixOper.query+" "+_2a.query;}_21.push(_2a);_2a=null;};for(;lc=cc,cc=_20.charAt(x),x<ql;x++){if(lc=="\\"){continue;}if(!_2a){_29=x;_2a={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return (_1d)?this.otag:this.tag;}};_28=x;}if(_22>=0){if(cc=="]"){if(!_2b.attr){_2b.attr=ts(_22+1,x);}else{_2b.matchFor=ts((_24||_22+1),x);}var cmf=_2b.matchFor;if(cmf){if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){_2b.matchFor=cmf.slice(1,-1);}}_2a.attrs.push(_2b);_2b=null;_22=_24=-1;}else{if(cc=="="){var _31=("|~^$*".indexOf(lc)>=0)?lc:"";_2b.type=_31+cc;_2b.attr=ts(_22+1,x-_31.length);_24=x+1;}}}else{if(_23>=0){if(cc==")"){if(_25>=0){_2b.value=ts(_23+1,x);}_25=_23=-1;}}else{if(cc=="#"){_2f();_27=x+1;}else{if(cc=="."){_2f();_26=x;}else{if(cc==":"){_2f();_25=x;}else{if(cc=="["){_2f();_22=x;_2b={};}else{if(cc=="("){if(_25>=0){_2b={name:ts(_25+1,x),value:null};_2a.pseudos.push(_2b);}_23=x;}else{if((cc==" ")&&(lc!=cc)){_30();}}}}}}}}}return _21;};var _32=function(_33,_34){if(!_33){return _34;}if(!_34){return _33;}return function(){return _33.apply(window,arguments)&&_34.apply(window,arguments);};};var _35=function(i,arr){var r=arr||[];if(i){r.push(i);}return r;};var _36=function(n){return (1==n.nodeType);};var _37="";var _38=function(_39,_3a){if(!_39){return _37;}if(_3a=="class"){return _39.className||_37;}if(_3a=="for"){return _39.htmlFor||_37;}if(_3a=="style"){return _39.style.cssText||_37;}return (_1d?_39.getAttribute(_3a):_39.getAttribute(_3a,2))||_37;};var _3b={"*=":function(_3c,_3d){return function(_3e){return (_38(_3e,_3c).indexOf(_3d)>=0);};},"^=":function(_3f,_40){return function(_41){return (_38(_41,_3f).indexOf(_40)==0);};},"$=":function(_42,_43){var _44=" "+_43;return function(_45){var ea=" "+_38(_45,_42);return (ea.lastIndexOf(_43)==(ea.length-_43.length));};},"~=":function(_46,_47){var _48=" "+_47+" ";return function(_49){var ea=" "+_38(_49,_46)+" ";return (ea.indexOf(_48)>=0);};},"|=":function(_4a,_4b){var _4c=" "+_4b+"-";return function(_4d){var ea=" "+_38(_4d,_4a);return ((ea==_4b)||(ea.indexOf(_4c)==0));};},"=":function(_4e,_4f){return function(_50){return (_38(_50,_4e)==_4f);};}};var _51=(typeof _19().firstChild.nextElementSibling=="undefined");var _52=!_51?"nextElementSibling":"nextSibling";var _53=!_51?"previousElementSibling":"previousSibling";var _54=(_51?_36:_1e);var _55=function(_56){while(_56=_56[_53]){if(_54(_56)){return false;}}return true;};var _57=function(_58){while(_58=_58[_52]){if(_54(_58)){return false;}}return true;};var _59=function(_5a){var _5b=_5a.parentNode;var i=0,_5c=_5b[_1b],ci=(_5a["_i"]||-1),cl=(_5b["_l"]||-1);if(!_5c){return -1;}var l=_5c.length;if(cl==l&&ci>=0&&cl>=0){return ci;}_5b["_l"]=l;ci=-1;for(var te=_5b["firstElementChild"]||_5b["firstChild"];te;te=te[_52]){if(_54(te)){te["_i"]=++i;if(_5a===te){ci=i;}}}return ci;};var _5d=function(_5e){return !((_59(_5e))%2);};var _5f=function(_60){return ((_59(_60))%2);};var _61={"checked":function(_62,_63){return function(_64){return !!("checked" in _64?_64.checked:_64.selected);};},"first-child":function(){return _55;},"last-child":function(){return _57;},"only-child":function(_65,_66){return function(_67){if(!_55(_67)){return false;}if(!_57(_67)){return false;}return true;};},"empty":function(_68,_69){return function(_6a){var cn=_6a.childNodes;var cnl=_6a.childNodes.length;for(var x=cnl-1;x>=0;x--){var nt=cn[x].nodeType;if((nt===1)||(nt==3)){return false;}}return true;};},"contains":function(_6b,_6c){var cz=_6c.charAt(0);if(cz=="\""||cz=="'"){_6c=_6c.slice(1,-1);}return function(_6d){return (_6d.innerHTML.indexOf(_6c)>=0);};},"not":function(_6e,_6f){var p=_1f(_6f)[0];var _70={el:1};if(p.tag!="*"){_70.tag=1;}if(!p.classes.length){_70.classes=1;}var ntf=_71(p,_70);return function(_72){return (!ntf(_72));};},"nth-child":function(_73,_74){var pi=parseInt;if(_74=="odd"){return _5f;}else{if(_74=="even"){return _5d;}}if(_74.indexOf("n")!=-1){var _75=_74.split("n",2);var _76=_75[0]?((_75[0]=="-")?-1:pi(_75[0])):1;var idx=_75[1]?pi(_75[1]):0;var lb=0,ub=-1;if(_76>0){if(idx<0){idx=(idx%_76)&&(_76+(idx%_76));}else{if(idx>0){if(idx>=_76){lb=idx-idx%_76;}idx=idx%_76;}}}else{if(_76<0){_76*=-1;if(idx>0){ub=idx;idx=idx%_76;}}}if(_76>0){return function(_77){var i=_59(_77);return (i>=lb)&&(ub<0||i<=ub)&&((i%_76)==idx);};}else{_74=idx;}}var _78=pi(_74);return function(_79){return (_59(_79)==_78);};}};var _7a=(d.isIE)?function(_7b){var clc=_7b.toLowerCase();if(clc=="class"){_7b="className";}return function(_7c){return (_1d?_7c.getAttribute(_7b):_7c[_7b]||_7c[clc]);};}:function(_7d){return function(_7e){return (_7e&&_7e.getAttribute&&_7e.hasAttribute(_7d));};};var _71=function(_7f,_80){if(!_7f){return _1e;}_80=_80||{};var ff=null;if(!("el" in _80)){ff=_32(ff,_36);}if(!("tag" in _80)){if(_7f.tag!="*"){ff=_32(ff,function(_81){return (_81&&(_81.tagName==_7f.getTag()));});}}if(!("classes" in _80)){_18(_7f.classes,function(_82,idx,arr){var re=new RegExp("(?:^|\\s)"+_82+"(?:\\s|$)");ff=_32(ff,function(_83){return re.test(_83.className);});ff.count=idx;});}if(!("pseudos" in _80)){_18(_7f.pseudos,function(_84){var pn=_84.name;if(_61[pn]){ff=_32(ff,_61[pn](pn,_84.value));}});}if(!("attrs" in _80)){_18(_7f.attrs,function(_85){var _86;var a=_85.attr;if(_85.type&&_3b[_85.type]){_86=_3b[_85.type](a,_85.matchFor);}else{if(a.length){_86=_7a(a);}}if(_86){ff=_32(ff,_86);}});}if(!("id" in _80)){if(_7f.id){ff=_32(ff,function(_87){return (!!_87&&(_87.id==_7f.id));});}}if(!ff){if(!("default" in _80)){ff=_1e;}}return ff;};var _88=function(_89){return function(_8a,ret,bag){while(_8a=_8a[_52]){if(_51&&(!_36(_8a))){continue;}if((!bag||_8b(_8a,bag))&&_89(_8a)){ret.push(_8a);}break;}return ret;};};var _8c=function(_8d){return function(_8e,ret,bag){var te=_8e[_52];while(te){if(_54(te)){if(bag&&!_8b(te,bag)){break;}if(_8d(te)){ret.push(te);}}te=te[_52];}return ret;};};var _8f=function(_90){_90=_90||_1e;return function(_91,ret,bag){var te,x=0,_92=_91[_1b];while(te=_92[x++]){if(_54(te)&&(!bag||_8b(te,bag))&&(_90(te,x))){ret.push(te);}}return ret;};};var _93=function(_94,_95){var pn=_94.parentNode;while(pn){if(pn==_95){break;}pn=pn.parentNode;}return !!pn;};var _96={};var _97=function(_98){var _99=_96[_98.query];if(_99){return _99;}var io=_98.infixOper;var _9a=(io?io.oper:"");var _9b=_71(_98,{el:1});var qt=_98.tag;var _9c=("*"==qt);var ecs=_19()["getElementsByClassName"];if(!_9a){if(_98.id){_9b=(!_98.loops&&_9c)?_1e:_71(_98,{el:1,id:1});_99=function(_9d,arr){var te=d.byId(_98.id,(_9d.ownerDocument||_9d));if(!te||!_9b(te)){return;}if(9==_9d.nodeType){return _35(te,arr);}else{if(_93(te,_9d)){return _35(te,arr);}}};}else{if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_98.classes.length&&!_1a){_9b=_71(_98,{el:1,classes:1,id:1});var _9e=_98.classes.join(" ");_99=function(_9f,arr,bag){var ret=_35(0,arr),te,x=0;var _a0=_9f.getElementsByClassName(_9e);while((te=_a0[x++])){if(_9b(te,_9f)&&_8b(te,bag)){ret.push(te);}}return ret;};}else{if(!_9c&&!_98.loops){_99=function(_a1,arr,bag){var ret=_35(0,arr),te,x=0;var _a2=_a1.getElementsByTagName(_98.getTag());while((te=_a2[x++])){if(_8b(te,bag)){ret.push(te);}}return ret;};}else{_9b=_71(_98,{el:1,tag:1,id:1});_99=function(_a3,arr,bag){var ret=_35(0,arr),te,x=0;var _a4=_a3.getElementsByTagName(_98.getTag());while((te=_a4[x++])){if(_9b(te,_a3)&&_8b(te,bag)){ret.push(te);}}return ret;};}}}}else{var _a5={el:1};if(_9c){_a5.tag=1;}_9b=_71(_98,_a5);if("+"==_9a){_99=_88(_9b);}else{if("~"==_9a){_99=_8c(_9b);}else{if(">"==_9a){_99=_8f(_9b);}}}}return _96[_98.query]=_99;};var _a6=function(_a7,_a8){var _a9=_35(_a7),qp,x,te,qpl=_a8.length,bag,ret;for(var i=0;i<qpl;i++){ret=[];qp=_a8[i];x=_a9.length-1;if(x>0){bag={};ret.nozip=true;}var gef=_97(qp);for(var j=0;(te=_a9[j]);j++){gef(te,ret,bag);}if(!ret.length){break;}_a9=ret;}return ret;};var _aa={},_ab={};var _ac=function(_ad){var _ae=_1f(_17(_ad));if(_ae.length==1){var tef=_97(_ae[0]);return function(_af){var r=tef(_af,new qlc());if(r){r.nozip=true;}return r;};}return function(_b0){return _a6(_b0,_ae);};};var nua=navigator.userAgent;var wk="WebKit/";var _b1=(d.isWebKit&&(nua.indexOf(wk)>0)&&(parseFloat(nua.split(wk)[1])>528));var _b2=d.isIE?"commentStrip":"nozip";var qsa="querySelectorAll";var _b3=(!!_19()[qsa]&&(!d.isSafari||(d.isSafari>3.1)||_b1));var _b4=/n\+\d|([^ ])?([>~+])([^ =])?/g;var _b5=function(_b6,pre,ch,_b7){return ch?(pre?pre+" ":"")+ch+(_b7?" "+_b7:""):_b6;};var _b8=function(_b9,_ba){_b9=_b9.replace(_b4,_b5);if(_b3){var _bb=_ab[_b9];if(_bb&&!_ba){return _bb;}}var _bc=_aa[_b9];if(_bc){return _bc;}var qcz=_b9.charAt(0);var _bd=(-1==_b9.indexOf(" "));if((_b9.indexOf("#")>=0)&&(_bd)){_ba=true;}var _be=(_b3&&(!_ba)&&(_1c.indexOf(qcz)==-1)&&(!d.isIE||(_b9.indexOf(":")==-1))&&(!(_1a&&(_b9.indexOf(".")>=0)))&&(_b9.indexOf(":contains")==-1)&&(_b9.indexOf(":checked")==-1)&&(_b9.indexOf("|=")==-1));if(_be){var tq=(_1c.indexOf(_b9.charAt(_b9.length-1))>=0)?(_b9+" *"):_b9;return _ab[_b9]=function(_bf){try{if(!((9==_bf.nodeType)||_bd)){throw "";}var r=_bf[qsa](tq);r[_b2]=true;return r;}catch(e){return _b8(_b9,true)(_bf);}};}else{var _c0=_b9.split(/\s*,\s*/);return _aa[_b9]=((_c0.length<2)?_ac(_b9):function(_c1){var _c2=0,ret=[],tp;while((tp=_c0[_c2++])){ret=ret.concat(_ac(tp)(_c1));}return ret;});}};var _c3=0;var _c4=d.isIE?function(_c5){if(_1d){return (_c5.getAttribute("_uid")||_c5.setAttribute("_uid",++_c3)||_c3);}else{return _c5.uniqueID;}}:function(_c6){return (_c6._uid||(_c6._uid=++_c3));};var _8b=function(_c7,bag){if(!bag){return 1;}var id=_c4(_c7);if(!bag[id]){return bag[id]=1;}return 0;};var _c8="_zipIdx";var _c9=function(arr){if(arr&&arr.nozip){return (qlc._wrap)?qlc._wrap(arr):arr;}var ret=new qlc();if(!arr||!arr.length){return ret;}if(arr[0]){ret.push(arr[0]);}if(arr.length<2){return ret;}_c3++;if(d.isIE&&_1d){var _ca=_c3+"";arr[0].setAttribute(_c8,_ca);for(var x=1,te;te=arr[x];x++){if(arr[x].getAttribute(_c8)!=_ca){ret.push(te);}te.setAttribute(_c8,_ca);}}else{if(d.isIE&&arr.commentStrip){try{for(var x=1,te;te=arr[x];x++){if(_36(te)){ret.push(te);}}}catch(e){}}else{if(arr[0]){arr[0][_c8]=_c3;}for(var x=1,te;te=arr[x];x++){if(arr[x][_c8]!=_c3){ret.push(te);}te[_c8]=_c3;}}}return ret;};d.query=function(_cb,_cc){qlc=d._NodeListCtor;if(!_cb){return new qlc();}if(_cb.constructor==qlc){return _cb;}if(typeof _cb!="string"){return new qlc(_cb);}if(typeof _cc=="string"){_cc=d.byId(_cc);if(!_cc){return new qlc();}}_cc=_cc||_19();var od=_cc.ownerDocument||_cc.documentElement;_1d=(_cc.contentType&&_cc.contentType=="application/xml")||(d.isOpera&&(_cc.doctype||od.toString()=="[object XMLDocument]"))||(!!od)&&(d.isIE?od.xml:(_cc.xmlVersion||od.xmlVersion));var r=_b8(_cb)(_cc);if(r&&r.nozip&&!qlc._wrap){return r;}return _c9(r);};d.query.pseudos=_61;d._filterQueryResult=function(_cd,_ce){var _cf=new d._NodeListCtor();var _d0=_71(_1f(_ce)[0]);for(var x=0,te;te=_cd[x];x++){if(_d0(te)){_cf.push(te);}}return _cf;};})(_13);dojo.query=dojo._query=_13.query;})();(function(d){var _d1={},_d2;for(var i in {toString:1}){_d2=[];break;}dojo._extraNames=_d2=_d2||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString"];d._mixin=function(_d3,_d4){var _d5,s,i=0,l=_d2.length;for(_d5 in _d4){s=_d4[_d5];if(s!==_d1[_d5]&&s!==_d3[_d5]){_d3[_d5]=s;}}if(l&&_d4){for(;i<l;++i){_d5=_d2[i];s=_d4[_d5];if(s!==_d1[_d5]&&s!==_d3[_d5]){_d3[_d5]=s;}}}return _d3;};dojo.mixin=function(obj,_d6){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo.safeMixin=function(_d7,_d8){var _d9,t,i=0,l=d._extraNames.length;var op=Object.prototype,_da=op.toString,_db="constructor";for(_d9 in _d8){t=_d8[_d9];if((t!==op[_d9]||!(_d9 in op))&&_d9!=_db){if(_da.call(t)=="[object Function]"){t.nom=_d9;}_d7[_d9]=t;}}for(;i<l;++i){_d9=d._extraNames[i];t=_d8[_d9];if((t!==op[_d9]||!(_d9 in op))&&_d9!=_db){if(_da.call(t)=="[object Function]"){t.nom=_d9;}_d7[_d9]=t;}}return _d7;};}(dojo));