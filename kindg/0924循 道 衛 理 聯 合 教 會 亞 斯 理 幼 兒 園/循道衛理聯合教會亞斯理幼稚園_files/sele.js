
<!--
function selectPage(path) {

  //document.all.context.src = path;
  document.getElementById("context").src=path;
  
}



function btn(id) {
	

	/* var img = document.getElementsByName("titleimg");
	for(var i= 0;i<img.length;i++){
	 
		pic = img[i].src.replace("a.png",".png");
		img[i].src=pic;
		
	}

	if(document.getElementById("img"+id)){
		pic = document.getElementById("img"+id).src.replace(".png","a.png");
		document.getElementById("img"+id).src = pic;
		
	}*/
	
	switch(id)
	{
		case 1:{
			
		//selectPage('php/news/news.php')
			//selectPage('php/tongao1/file.php')
			selectPage('php/webinfo/show.php?id=1')
			break;
		}
		case 2:{
			selectPage('php/webinfo/show.php?id=5')
			break;
		}
		case 3:{
			//selectPage('php/lesson/picture.php')
			
				//selectPage('php/webinfo/picture.php?pid=2&lang=tw')
				selectPage('php/pic/picture.php?pid=4&lang=tw')
			break;
		}
		
		case 4:{
			//selectPage('php/pic/picture.php?pid=6')
			//selectPage('php/webinfo/picture.php?pid=3&lang=tw')
			//selectPage('php/webinfo/picture.php?pid=5&lang=tw')
			selectPage('php/pic/picture.php?pid=5&lang=tw')
			break;
		}
		case 5:{
				//selectPage('php/tongao/file.php?tid=1&c=1&lang=tw')				
				selectPage('php/news/news.php')

			break;
		}
		case 6:{
				//selectPage('php/photos/picture.php?pid=2')
				//selectPage('php/webinfo/show.php?id=7')
				//var tmp = document.getElementById('ttlink').value;
				
				//window.open(tmp,'','height=768,width=1024,top=0,left=0,toolbar=no,menubar=no,resizable=yes');
				//selectPage('php/pic/picture.php?pid=6')
				selectPage('php/calendar/calendar.php')
			break;
		}
		case 7:{
				selectPage('php/pic/picture.php?pid=1&lang=tw')
			break;
		}
		case 8:{
				selectPage('php/webinfo/show.php?id=51')
			break;
		}
		case 9:{
				selectPage('php/webinfo/show.php?id=7')
			break;
		}
		case 10:{
				selectPage('php/webinfo/show.php?id=8')
			break;
		}
		case 11:{
				selectPage('php/pic/picture.php?pid=3&lang=tw')
			break;
		}
		case 12:{
				selectPage('php/pic/picture.php?pid=4&lang=tw')
			break;
		}
		case 13:{
				selectPage('php/pic/picture.php?pid=5&lang=tw')
			break;
		}
		case 14:{
				selectPage('php/pic/picture.php?pid=6&lang=tw')
			break;
		}
		case 15:{
				selectPage('php/webinfo/show.php?id=6')
			break;
		}
		case 16:{
				selectPage('php/webinfo/picture.php?pid=1&lang=tw')
			break;
		}
		case 17:{
				selectPage('php/webinfo/show.php?id=7')
			break;
		}
		case 18:{
				selectPage('php/webinfo/show.php?id=8')
			break;
		}
		case 19:{
				selectPage('php/webinfo/show.php?id=9')
			break;
		}
		case 20:{
				selectPage('php/webinfo/show.php?id=10')
			break;
		}
		case 21:{
				selectPage('php/webinfo/show.php?id=11')
			break;
		}
		case 22:{
				selectPage('php/webinfo/show.php?id=12')
			break;
		}
		case 23:{
				selectPage('php/webinfo/show.php?id=13')
			break;
		}
		case 24:{
				selectPage('php/webinfo/show.php?id=14')
			break;
		}
		case 25:{
				selectPage('php/webinfo/show.php?id=15')
			break;
		}
	  
		//////////////////	//////////////////	//////////////////
			//////////////////	//////////////////	//////////////////
		
		
		
		
	}
	
}



////////////////
function getInternetExplorerVersion(){
	var rv = -1;
	if(navigator.appName =='Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)  rv = parseFloat( RegExp.$1);
	}
	return rv;
}
function autoResize(){

	var bobo=document.getElementById("context"); //iframe id
	bobo.style.height="670";
	if (document.getElementById){
		if (bobo && !window.opera){
			if (bobo.contentDocument && bobo.contentDocument.body.offsetHeight){
			   // alert("ie"+bobo.contentDocument.body.offsetHeight + "aa"+ bobo.contentDocument.body.scrollHeight);
				var ver = getInternetExplorerVersion();
				if( ver >-1){
					if(ver>=8.0)
					{
						if(bobo.contentDocument.body.scrollHeight<670){
						bobo.style.height="670px";
						
						}
						else{
						bobo.style.height = (bobo.contentDocument.body.scrollHeight)+"px";
						
						}
					}
				}
				else{
					if(bobo.contentDocument.body.offsetHeight<670){
					bobo.style.height="670px";
					
					}
					else{
					bobo.style.height = (bobo.contentDocument.body.offsetHeight+10)+"px";   //ff
					
					}
				}
			}
			else if(bobo.Document && bobo.Document.body.scrollHeight){
				   // alert("ff"+ bobo.Document.body.scrollHeight);
				if(bobo.Document.body.scrollHeight<670){
			//bobo.height=478;
				bobo.style.height ="670px";
				
				
				}
				else{
						bobo.style.height = (bobo.Document.body.scrollHeight)+"px";
				
				}
			}
		
		}
	}
}



























<!---W?{ ------==========================================--->
function kecheng(theURL) { //v2.0

  window.open(theURL,"","scrollbars=1,left=0,top=0 ,fullscreen=1")
}


<!---W?{ ------==========================================--->





<!---qli ------==========================================--->
function photo(theURL) { //v2.0
var w = screen.availWidth-80;
                        var h = screen.availHeight-80;
                        window.open(theURL,"","scrollbars=1,left=40,top=20,width="+w+",height="+h)
  
  
}
<!---qli ------==========================================--->







function gom() {

document.location="movie.php"; 


}

	
	///
	
	
		function movie() {
document.location="../go.php"; 
}
	function page1() {
		
document.location="home.php"; 
}
	function page2() {
document.location="home2.php"; 
}
	function page3() {
document.location="home3.php"; 
}
	function page4() {
document.location="home4.php"; 
}
	function page5() {
document.location="home5.php"; 
}
	function page6() {
document.location="home6.php"; 
}
	function page7() {
document.location="home7.php"; 
}
	function page8() {
document.location="home8.php"; 
}
function page9() {
document.location="home9.php"; 
}
function page10() {
document.location="home10.php"; 
}
function page11() {
document.location="home11.php"; 
}
function page12() {
	
document.location="cpg/","_blank"; 
}
function page13() {
document.location="../movie.php"; 
}