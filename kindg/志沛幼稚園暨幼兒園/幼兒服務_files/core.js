// JavaScript Document
//loading flash bg
//var base_path="/project/templates/tippingpoint/";
var base_path="";
var loadBackgroundFlashContent	=	function(swfSrc,imgTarget,imgSrc,noflashimages,strWidth,strHeight){
	 
 	if(!strWidth) {strWidth = "100%"}
	//if(!strHeight) {strHeight = "1900"}
	var newheight	=	 document.getElementById('wrapper').scrollHeight;
	 
	//if(!noflashimages) {noflashimages = base_path+"images/banner_home.jpg"}
	
	if (swfobject.hasFlashPlayerVersion("8.0")) {

		 var fn = function() {
			var att = { data:swfSrc, width:strWidth, height:newheight };
			var par = { flashvars:"file="+base_path+imgSrc,wmode:'opaque'};
			var id = imgTarget;
			var myObject = swfobject.createSWF(att, par, id);
		  };
		  swfobject.addDomLoadEvent(fn);
	  
	}else{
		if(!noflashimages) {
			printNoFlashText('banner-inner');
			return;
		}
	 	document.getElementById(imgTarget).innerHTML	=	' <img src="'+base_path+"images/blank.png"+'" height="600" alt="Po Leung Kuk" title="Po Leung Kuk"/>';
	 //  document.getElementById(imgTarget).style.background="url("+noflashimages+")"+" no-repeart top center";
	 document.getElementById(imgTarget).style.backgroundImage="url("+noflashimages+")";
		 
		
		
	}
	//alert (noflashimages);
	//alert (imgSrc);
}
var callCaseStart	=	function(){
	//alert("completed");
}

var printNoFlashText = function(imgTarget) {
	$(imgTarget).setStyle('text-align', 'center')
		.setHTML('<br/><br/>Flash player required. <a href="http://get.adobe.com/flashplayer/" target="_blank">Install here</a>');
}