 if (typeof(aimsaf)=="undefined"){var aimsaf={init:{host:'servedby.adsfactor.net',itvl:0,hovertime:0,hoverend:0,getcookie:function(n){var m=n+'=';var ca=document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c=ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(m) == 0) return c.substring(m.length,c.length);}return null;},existcookie:function(n){var m=aimsaf.init.getcookie(n);if (m!=null&&m!=''){return true;}else{return false;}},setcookie:function(n,v,e,p,m,s){var now = Math.round(new Date().getTime()/1000.0);var seconds = now + e;var exp = new Date(seconds*1000);var c=escape(v) + ((e==null) ? '' : '; expires='+exp.toUTCString());document.cookie=n + '=' + c + ((p==null) ? '':'; path=' + p) + ((m==null)?'':';domain=' + m) +((s==null)?'':';secure');},deletecookie:function(n){aimsaf.init.setcookie(n,'',-1);},dura:function(p){if(p!=0)aimsaf.init.hovertime=Number(aimsaf.init.hovertime)+1;aimsaf.init.hoverend=setTimeout('aimsaf.init.dura(1)',1000);},duraonoff:function(p,s){if(s){aimsaf.init.dura(0);}else {clearTimeout(aimsaf.init.hoverend);p=p+aimsaf.init.hovertime;if(aimsaf.init.hovertime>1) aimsaf.init.logsend(p);aimsaf.init.hovertime=0;}},logsend:function(p){var ord = new String (Math.random());ord = ord.substring(1,8);var es = document.createElement("script");es.src = 'http://' + aimsaf.init.host+ '/ade/record/' +p + '/' + ord;document.body.appendChild(es);},checkparams:function(p){try{if(top!=self)var strsrch=parent.window.location.search;else var strsrch=window.location.search;if(typeof(strsrch.length)!='undefined'){if(strsrch.length>1){var str=strsrch.substr(1,strsrch.length).toLowerCase();var querystr = str.split("&");for (var x=0; x<querystr.length; x++ ){if (querystr[x].indexOf(p+"=")>-1){return true;break;}}}}}catch(e){}},showtag:function(s){if(aimsaf.init.checkparams("show_aimstag")){var d="<DIV style='POSITION: relative; font: 12px Tahoma; background:#B8DF1B; color:#00000; margin:0; padding:0; width:100%; height:15px;'>Space ID: "+s+" served by AiMs</DIV>";document.write(d);}}}}}; aimsaf.init.showtag("6429");document.write("<DIV style='POSITION: absolute; VISIBILITY: hidden; TOP: 0px; LEFT: 0px; MARGIN: 0; PADDING:0; WIDTH: 0; HEIGHT:0;' id=b_75416><img style='visibility:hidden;width:0px;height:0px;' src='https://servedby.adsfactor.net/advr.php?at=r&amp;h=1&amp;tid=8e9be11c1ba857919c0294d14e9fc6c7&amp;tx=Chaos&amp;sid=VmxRNlFlVzg%3D&amp;cid=BjkGZwc2VjNUPQ%3D%3D&amp;bid=UGsEYgU3XDsGbQ%3D%3D&amp;ts=1474551744' width=0 height=0 /><img style='visibility:hidden;width:0px;height:0px;' src='' width=0 height=0 /></div><div style=\'display:block;\' class=\'af_space_629797186429\'><script type=\"text/javascript\">var zflag_nid=\"1044\"; var zflag_cid=\"2139/2137\"; var zflag_sid=\"467\"; var zflag_width=\"1\"; var zflag_height=\"1\"; var zflag_sz=\"94\";</script><script type=\"text/javascript\" src=\"http://d8.zedo.com/jsc/d8/fo.js\"></script></div><script>  var _comscore = _comscore || [];  _comscore.push({ c1: \"8\", c2: \"6035572\" ,c3: \"8821\" });  (function() {    var s = document.createElement(\"script\"), el = document.getElementsByTagName(\"script\")[0]; s.async = true;    s.src = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\";    el.parentNode.insertBefore(s, el);  })();</script><script id=\"af_bquery\" type=\"text/javascript\">var _bdazUrl = \'bdaz.adsfactor.net\';var _idkey = \'__AF\';var _adnuid = \'680d08f0-650b-4523-8234-fff314dc642f\';(function() {    var bquery = document.createElement(\"script\");    bquery.async = true;    bquery.src = \"https://s3-ap-southeast-1.amazonaws.com/af-bdaz/bquery.js\";    if (typeof _gbquery == \"undefined\") {        _gbquery = true;        var s = document.getElementById(\"af_bquery\");        s.parentNode.insertBefore(bquery, s);    }})();</script>          <script class=\"kxct\" data-id=\"Ji7EupsI\" data-timing=\"async\" data-version=\"1.9\" type=\"text/javascript\">            window.Krux || ((Krux = function() {                Krux.q.push(arguments)              }).q = []);              (function() {                if (!window.Krux.guard) {                  window.Krux.guard = {}                }                if (!window.Krux.guard.pixels) {                  window.Krux.guard.pixels = {                    q: []                  };                  var k = document.createElement('script');                  k.type = 'text/javascript';                  k.async = true;                  var m, src = (m = location.href.match(/\bkxsrc=([^&]+)/)) && decodeURIComponent(m[1]);                   k.src = /^https?:\\/\\/([a-z0-9_\\-\\.]+\\.)?krxd\\.net(:\\d{1,5})?\\//i.test(src) ? src : src === \"disable\" ? \"\" : (location.protocol === \"https:\" ? \"https:\" : \"http:\") + \"//cdn.krxd.net/controltag?confid=Ji7EupsI\";                  var s = document.getElementsByTagName('script')[0];                  s.parentNode.insertBefore(k, s);                }              }());            if (\"680d08f0-650b-4523-8234-fff314dc642f\" !== \"00000000-0000-0000-0000-000000000000\" && \"680d08f0-650b-4523-8234-fff314dc642f\".charAt(0) !== \"$\"){              Krux('ns:pixels', 'set', 'user_attr_puid', '680d08f0-650b-4523-8234-fff314dc642f');            }            var krux_append = function(key, value) {              if(value !== \"Undefined\"){                Krux('ns:pixels', 'append', key, value);              }            };            krux_append('page_attr_channel', \"Undefined\");            krux_append('page_attr_site', \"www.schooland.hk\");            krux_append('page_attr_adtype', \"Undefined\");            krux_append('page_attr_adsize', \"1x1\");            krux_append('page_attr_advertiser', \"Pixels\");            krux_append('page_attr_spacetag', \"Parenting,WomenPlus,Group 2,RON,Chinese sites ONLY\");            krux_append('page_attr_campaignname', \"Schooland House Ads\");            krux_append('page_attr_bannername', \"Schooland House Ad 1x1\");            krux_append('page_attr_ordername', \"Pixels Network Generic House AD\");            krux_append('page_attr_ordercat', \"House\");            krux_append('page_attr_ordersubcat', \"Undefined\");           </script>");aimsaf.init.setcookie('__AF', '680d08f0-650b-4523-8234-fff314dc642f', 31536000, '/', '.'+document.location.hostname);