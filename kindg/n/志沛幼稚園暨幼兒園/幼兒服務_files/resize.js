// JavaScript Document

window.addEvent("load",function(){
	var resizefunction = function(flashid){
		var bodywidths = document.body.clientWidth;
		
		var bodynumber = parseInt(bodywidths);
		
		if(bodynumber<1003){
		
		document.getElementById(flashid).style.width="1003px";
		document.getElementById(flashid).style.height="500px";
		}else{
		document.getElementById(flashid).style.width="100%";
		document.getElementById(flashid).style.height="500px";
		}
	}
	
	 resizefunction("BgUpper");

	 window.addEvent('resize',function(){
	
			resizefunction("BgUpper");
	
	 }); 

});