/*

ESDlife pageview tracker

This is ESDlife Tracker Object for Google analytics and AC Nelson, support event track and regexp mapping
Please reconfirm google analytics have to loaded before include this script, else google tracker will not work.

Example:

<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("{GA_ID}");
pageTracker._trackPageview();
} catch(err) {}
</script>
 

<noscript>
<img src="https://secure-sg.imrworldwide.com/cgi-bin/m?ci=hk-ESDlife&cg={TAG_NAME}" alt="">
</noscript>

<script language="javascript" type="text/javascript" src="/js/esd_tracker.js?v1"></script>

*/

if(typeof esdTracker=="undefined"){
	

	var esdTracker = new Object();
	esdTracker.GA = new Object();
	
	var _rsCG='wow';

	try {
		
		esdTracker.GA = {"mapping": [
			
			//mapping path go here
			//path suppoet Regexp
			//matching sort by object order
			
			{path: "blog|comment", tag: "wow-blog"},
			
			{path: "album", tag: "wow-album"},
			
			{path: "thread|mtag", tag: "wow-group"},
			
			{path: "doing", tag: "wow-doing"},
			
			{path: "^/space\.php$|^/space\.php\.uid=[0123456789]+$|^/space\.php\.do=home", tag: "wow-user-home"},
			
			//{path: "^/$|^/index.php|^/travel.php|^/wedding.php|^/baby.php", tag: "wow-home"},
			{path: "^/$|^/index.php|^/travel.php|^/baby.php", tag: "wow-home"},
				
			{path: "^/$|^/wedding.php", tag: "wedding-wow-home"},
				
			{path: ".*", tag: "wow"},
				
		]};
			
	} catch(err) {}

	//GA////////////////////////////////////////////////////////
	
	esdTracker.GA.getCId = function(uri) {
		if (tag && (tag != "wedding-wow" && tag != "family-wow")) {
			return tag;
		} else {
			try {
				var strTmpTag = "";

				for (var i=0; i<esdTracker.GA.mapping.length; i++) {
					var re = new RegExp(esdTracker.GA.mapping[i].path, "gi");
					if (re.test(uri) == true) {
						strTmpTag = esdTracker.GA.mapping[i].tag;
						break;
					}
					
				}
				
				if (!tag) {
					if (strTmpTag != "") {
						return strTmpTag;
					} else {
						return _rsCG;
					}
				} else if (tag == "wedding-wow") {
					// Must be "wedding-wow"
					if (strTmpTag != "") {
						if (strTmpTag == "wow-album") {
							return "wedding-gallery";
						} else {
							return "wedding-" + strTmpTag;
						}
					} else {
						return tag;
					}
				} else {
					// Must be "family-wow"
					if (strTmpTag != "") {
						if (strTmpTag == "wow-album") {
							return "family-gallery";
						} else {
							return "family-" + strTmpTag;
						}
					} else {
						return tag;
					}
				}
			} catch(err) {
				return _rsCG;
			}
		}
	}
	
	esdTracker.GA.trackIt = function(uri){
		if(!uri){
			var uri = esdTracker.getUri();
		}
		gaTagVal = esdTracker.GA.getCId(uri)
		_gaq.push(
			['b._setCustomVar', 1, 'Channel', gaTagVal, 3],
			['b._trackPageview', location.pathname + location.search]
		);
		
	}
	
	//Public////////////////////////////////////////////////////////
	
	esdTracker.getUri = function(){
		
		var _location = ''+document.location;
		var re = new RegExp(document.location.protocol+"//"+document.domain+"","gi");
		var uri = _location.replace(re, "");
		
		return uri;
		
	}
	
	esdTracker.trackIt = function(uri){

		if(!uri){
			var uri = esdTracker.getUri();
		}
		
		esdTracker.GA.trackIt(uri);
		
	}
	
	//Init////////////////////////////////////////////////////////
	
	esdTracker.trackIt();
	
}