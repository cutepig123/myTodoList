
var expDays = 1; // number of days the cookie should last

var path = "/";

var domain ;
var locapath = document.location.href

if (locapath.toString().search('/preview/')!= -1){
	var page  = "/preview";
}else{
	var page  = "";
}

if (locapath.toString().search('/textonly/')!= -1){
	 page += "/textonly/sc_chi/disclaimer/statment.html";
}else{
	 page += "/sc_chi/disclaimer/statment.html";
}


org_path_start = locapath.indexOf("://") + 3;
org_path_end = locapath.length;
domain = locapath.substring(org_path_start, org_path_end);
if (domain.toString().search('/')!= -1){
org_path_start = 0;
org_path_end = domain.indexOf("/");
domain = domain.substring(org_path_start, org_path_end);
}


function GetCookie (name) {  
var arg = name + "=";  
var alen = arg.length;  
var clen = document.cookie.length;  
var i = 0;  
while (i < clen) {    
var j = i + alen;    
if (document.cookie.substring(i, j) == arg)      
return getCookieVal (j);    
i = document.cookie.indexOf(" ", i) + 1;    
if (i == 0) break;   
}  
return null;
}
function SetCookie (name, value) {  
var argv = SetCookie.arguments;  
var argc = SetCookie.arguments.length;  
var expires = (argc > 2) ? argv[2] : null;  
//var path = (argc > 3) ? argv[3] : null;  
//var domain = (argc > 4) ? argv[4] : null;  

var secure = (argc > 5) ? argv[5] : false;  
document.cookie = name + "=" + escape (value) + 
//((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
//((expires == null) ? "" : ("; expires=")) + 
((path == null) ? "" : ("; path=" + path)) +  
((domain == null) ? "" : ("; domain=" + domain)) +    
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {  
var exp = new Date();  
exp.setTime (exp.getTime() - 1);  
var cval = GetCookie (name);  
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt(){
var count = GetCookie('sccount')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('sccount')
SetCookie('sccount',newcount,exp)
return count
   }
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
//For Change Font
function GetIEVersion() {
	userAgent = navigator.userAgent;
	if (userAgent.indexOf('MSIE') != -1) {
		ie_version = parseFloat(userAgent.substring(userAgent.indexOf('MSIE')+4,userAgent.length));
	}
}
function checkCount() {
var sccount = GetCookie('sccount');
if (sccount == null) {

SetCookie('orgiurl',document.location.href, exp);

window.location.href=page;
}
else {
//count++;
//SetCookie('count', count, exp);
   }
}

//if ((locapath.toString().search('/sc_chi/')!= -1)||(locapath.toString().search('scindex.html')!= -1))   {
//	checkCount();
//}



//Finish Check SC statment




var dept = "/";
var domain = "";
var scserver = "http"+"://sc.info.gov.hk/gb/";
var locapath = document.location.href
//var locapath = "http://www.sar-expertcom.gov.hk/textonly/cindex.html";




var atlang,domname,sitepath,atgb,atindex,org_part;
	sc_path = "sc_chi/";
	sctxt_path = "textonly/sc_chi/";
	tc_path = "tc_chi/";
	tctxt_path = "textonly/tc_chi/";
	en_path = "english/";
	entxt_path = "textonly/english/";
	atgb = false;
	atindex = false;

if (locapath.toString().search('/gb/')!= -1){
	atgb = true;
	org_path_start = locapath.indexOf("/gb/") +4;
	org_path_end = locapath.length;
	sitepath = locapath.substring(org_path_start, org_path_end);
}else{
	atgb = false;
	sitepath = locapath.substring(7,locapath.length);
}

if (locapath.toString().search('/textonly/english/')!= -1){
	atlang = "entxt";
	org_part = entxt_path;
}else
if (locapath.toString().search('/textonly/tc_chi/')!= -1){
	atlang = "tctxt";
	org_part = tctxt_path;
}else
if (locapath.toString().search('/textonly/sc_chi/')!= -1){
	atlang = "sctxt";
	org_part = sctxt_path;
}else
if (locapath.toString().search('/english/')!= -1){
	atlang = "en";
	org_part = en_path;
}else
if (locapath.toString().search('/tc_chi/')!= -1){
	atlang = "tc";
	org_part = tc_path;
}else
if (locapath.toString().search('/sc_chi/')!= -1){
	atlang = "sc";
	org_part = sc_path;
}else
if (locapath.toString().search('/textonly/cindex.html')!= -1){
	atlang = "txteindex";
	org_part = "textonly/cindex.html";
	atindex = true;
}else
if (locapath.toString().search('cindex.html')!= -1){
	atlang = "eindex";
	org_part = "cindex.html";
	atindex = true;
}else
if (locapath.toString().search('/textonly/cindex.html')!= -1){
	atlang = "txtcindex";
	org_part = "textonly/cindex.html";
	atindex = true;
}else
if (locapath.toString().search('cindex.html')!= -1){
	atlang = "cindex";
	org_part = "cindex.html";
	atindex = true;
}else
if (locapath.toString().search('/textonly/scindex.html')!= -1){
	atlang = "txtsindex";
	org_part = "textonly/scindex.html";
	atindex = true;
}else
if (locapath.toString().search('scindex.html')!= -1){
	atlang = "sindex";
	org_part = "scindex.html";
	atindex = true;
}

//domain = sitepath.substring(0, sitepath.indexOf("/"));
domain = "202.57.255.178";
subdir = "/preview";

function chglang(lang){

	switch(lang){
		/* case 'entxt': 
			des_part = entxt_path;
			des_ind_part = "textonly/cindex.html";
			base_path = "http://";
			break;
		case 'tctxt':
			des_part = tctxt_path;
			des_ind_part = "textonly/cindex.html";
			base_path = "http://";
			break;
		case 'sctxt':
			des_part = sctxt_path;
			des_ind_part = "textonly/scindex.html";
			//base_path = scserver;
			base_path = "http://";
			break;
		*/
		case 'en':
			des_part = en_path;
			des_ind_part = "eindex.html";
			base_path = "http://";
			break;
		case 'tc':
			des_part = tc_path;
			des_ind_part = "cindex.html";
			base_path = "http://";
			break;
		case 'sc':
			des_part = sc_path;
			des_ind_part = "scindex.html";
			//base_path = scserver;
			base_path = "http://";
			break;
	}

	if (atindex == true){
		tail = sitepath.replace(org_part, des_ind_part);
	}else{
		tail = sitepath.replace(org_part, des_part);
	}

//alert(base_path+tail)
	window.location =  base_path+tail;

}
function getchglang(lang){

	switch(lang){
		/* case 'entxt': 
			des_part = entxt_path;
			des_ind_part = "textonly/cindex.html";
			base_path = "http://";
			break;
		case 'tctxt':
			des_part = tctxt_path;
			des_ind_part = "textonly/cindex.html";
			base_path = "http://";
			break;
		case 'sctxt':
			des_part = sctxt_path;
			des_ind_part = "textonly/scindex.html";
			//base_path = scserver;
			base_path = "http://";
			break;
		*/
		case 'en':
			des_part = en_path;
			des_ind_part = "eindex.html";
			base_path = "http://";
			break;
		case 'tc':
			des_part = tc_path;
			des_ind_part = "cindex.html";
			base_path = "http://";
			break;
		case 'sc':
			des_part = sc_path;
			des_ind_part = "scindex.html";
			//base_path = scserver;
			base_path = "http://";
			break;
	}

	if (atindex == true){
		tail = sitepath.replace(org_part, des_ind_part);
	}else{
		tail = sitepath.replace(org_part, des_part);
	}

	//alert(base_path+tail);
	return base_path+tail;

}


function tellafriend( lang )
{
  if (lang == 'eng')
  {
     window.location = subdir + '/english/tell/tell.asp?base=http%3A//'+ domain + subdir + '/english/tell/&url=' + escape(window.location);
  }else if (lang == 'chi')
  {
     window.location = subdir + '/tc_chi/tell/tell.asp?base=http%3A//'+ domain + subdir + '/tc_chi/tell/&url=' + escape(window.location);
  }else if (lang == 'schi')
  {
     window.location = subdir + '/sc_chi/tell/tell.asp?base=http%3A//'+ domain + subdir + '/sc_chi/tell/&url=' + escape(window.location);
  }else if (lang == 'eng_txt')  
  {
     window.location = subdir + '/textonly/english/tell/tell.asp?base=http%3A//'+ domain + subdir + '/textonly/english/tell/&url=' + escape(window.location);
  }else if (lang == 'chi_txt')
  {
     window.location = subdir + '/textonly/tc_chi/tell/tell.asp?base=http%3A//'+ domain + subdir + '/textonly/tc_chi/tell/&url=' + escape(window.location);
  }else if (lang == 'schi_txt')
  {
     window.location = subdir + '/textonly/sc_chi/tell/tell.asp?base=http%3A//'+ domain + subdir + '/textonly/sc_chi/tell/&url=' + escape(window.location);
  }
  //window.location = '../tell/tell.html?url=' + escape(window.location);
}

function splitString (stringToSplit,separator) {
 var arrayOfStrings = stringToSplit.split(separator);
 return arrayOfStrings[1];
}
// Handle the Font
var fontarray = new Array("Medium","Large","Extra");
//var displayfonttitle; 
function createCookie(name,value,days) {
  if (days != null) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  var caLength = ca.length;
  for(var i=0;i < caLength;i++) {
    var c = Trim(ca[i]);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


function changeFont(title){
	myfonttitle = title;
	
	// display font is same for Format Version
	displayfonttitle = myfonttitle;

	// set fonttitle cookie to 2 months
	createCookie("fhsfonttitle", myfonttitle, 60);

	// switch the CSS
	switchCss();

	// swap the Font Image
	swapFontImage();
	
	/*
	//As requested by User, will refresh the windows
	try{
		window.location.reload();
	}catch(e){
		window.location = locapath;
	}
	*/
	
}


function switchCss() {
  // CAUTION reminder 20070913:
  // 1) IE7 need a.disabled=true first, no matter how (is this true?)
  // 2) firefox2.04 canNOT use: a.getAttribute("title").indexOf("linear"), else break for-loop
  // 3) firefox can use: var1=a.getAttribute("title"), then compare on var1

	var linkArray = document.getElementsByTagName("link");
	var linkArrayLength = linkArray.length;

	for(i=0; i<linkArrayLength; i++)
	{
		a=linkArray[i];
		// for all "stylesheet" in Link
		if (a.getAttribute("rel").indexOf("stylesheet")!=-1)
		{
			var disable_flag = false;
			// if it is linear mode, assume all css disable first
			//if (myscreenmode==modeLinear) { disable_flag=true; }
			var ie_version;
			// get the id of css object first
			var id1 = a.getAttribute("id");
			if (id1 != null) {
				if (id1.indexOf("fhsCSS")!=-1  ) {
					// For "style.css"
					// handled by default
				} else if (id1.indexOf("mode")!=-1)  {
					// For "modeMedium", "modeLarge", "modeExtra"
					// for normal mode, disable first;
					//document.write(displayfonttitle);
					//disable_flag = (id1.indexOf(displayfonttitle) < 0);
					//document.write(disable_flag);
				}

			} // end id1!=null

			// 20070917: finally set the enable or disable, set true first for IE7 bug
			a.disabled = true;
			a.disabled = disable_flag;


			// for IE5.5, disable can be set by a.disabled = true;
			// BUT for ENABLE, IE5.5 need to set the alt-stylesheet as "stylesheet"
			// CAUTION: do NOT set "alternate stylesheet" in this way, will hang IE5.5 browser
			if (ie_version>0 && ie_version<6 && disable_flag==false) {
				a.setAttribute("rel","stylesheet");
			}

		} // end if rel stylesheet
	} // end for linkArray
}

function swapFontImage() {
	// display - swap on or off images
	var fontarrayLength = fontarray.length;
	for (i=0;i<fontarrayLength;i++)
	{

		if (displayfonttitle==fontarray[i] ) {
			// seperate to 2 part, avoid change 'gif' to 'htm' when grab the website
			fonttail = '<b><font color="#006400">A</font></b>';
		} else {
			fonttail = 'A';
		}

		fontimg = 'txtsize_area_Font_' + fontarray[i];
		var fontImgObj = document.getElementById(fontimg);
		fontImgObj.innerHTML = fonttail;
	}
}

function readAccessCookie() {
	// if FF or IE6+
	if (ie_version==0 || ie_version>=6) {
		myfonttitle = readCookie("fhsdhfonttitle");
		if (myfonttitle==null) {myfonttitle=fontarray[0]; }

		// for clear old R2 cookie
		if (myfonttitle!=fontarray[0] && myfonttitle!=fontarray[1] && myfonttitle!=fontarray[2] )
		   { myfonttitle = fontarray[0]; }

		displayfonttitle = myfonttitle;
	} else {
		myfonttitle = fontarray[0];
		displayfonttitle = myfonttitle;
	}
}

// on load pages...
// run by default
function loadingFontOnload(){
	GetIEVersion();
	switchCss();
	// never swap the Font image after the font image is loaded
	//swapFontImage();
}

loadingFontOnload();

/* ==================================================================================================
 * End Handling the Font Size Changes
 * ====================================================================================================
 */