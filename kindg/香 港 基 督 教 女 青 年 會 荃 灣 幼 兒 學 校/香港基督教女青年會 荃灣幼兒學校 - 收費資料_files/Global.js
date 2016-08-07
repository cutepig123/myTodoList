var isIE = (navigator.appName.indexOf("Microsoft") > -1);
var d = document;
var str;
var albumType;

if (!levelArray)	var levelArray = new Array();

var tgs = new Array('p', 'h1', 'h2');

var szs = new Array('100%', '140%', '180%');
var startSz = sz = szs.length;

function getFontSize()
{
	if (getCookie('fontSize') == null)
	{
		startSz = 1;
	}
	else
	{ 
		startSz = getCookie('fontSize');
		if (startSz == "NaN")	startSz = 1;
	}	
	changeFontSize(startSz, true);
}

function changeFontSize(inc, start)
{
	if (!d.getElementById) return;
	var cEl = null,sz = eval(startSz),i,j,cTags;
	
	sz = inc;
	
	cEl = d.getElementsByTagName('body')[0];
	cEl.style.fontSize = szs[ sz ];	
	
/*	var fontSizeLink = d.getElementById('fontSize').getElementsByTagName('a');
	for (var i=0; i<fontSizeLink.length; i++)
	{
		fontSizeLink[i].className = fontSizeLink[i].className.replace('active', '');
		fontSizeLink[i].clicked = false;
	}
	fontSizeLink[sz].className = fontSizeLink[sz].className += ' active';
	fontSizeLink[sz].clicked = true; */
	
	var fontSizeImg = d.getElementById('fontSize').getElementsByTagName('img');
	for (var i=0; i<fontSizeImg.length; i++)
	{
		fontSizeImg[i].src = fontSizeImg[i].src.replace('_on', '');
		fontSizeImg[i].clicked = false;
	}
	fontSizeImg[sz].src = fontSizeImg[sz].src.replace('.gif', '_on.gif');
	fontSizeImg[sz].clicked = true;
	
	setCookie("fontSize", sz);
	
}



function setCookie(name, value, expires, path, domain, secure)
{
  var curCookie = name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");

  d.cookie = curCookie;
}

function getCookie(name)
{
	if (d.cookie.indexOf(name) < 0)
	{		
		return null;
	}
	else
	{	
		var startStr = d.cookie.indexOf(name) + name.length + 1;
		var endStr = d.cookie.indexOf(";", startStr);
		if (endStr == -1)	endStr = d.cookie.length;
		return unescape(d.cookie.substring(startStr, endStr));
	}
}

function genBreadcrumbs()
{
	if (!d.getElementById('breadcrumbs'))	return;
	var breadcrumbs = d.getElementById('breadcrumbs');
	
	var div = createDiv('fontSize', '', 'Font Size');
	breadcrumbs.appendChild(div);
	var smallA = createA('javascript:changeFontSize(0);', '', 'A', '', 'small');
	div.appendChild(smallA);
	var midA = createA('javascript:changeFontSize(1);', '', 'A', '', 'mid');
	div.appendChild(midA);
	var largeA = createA('javascript:changeFontSize(2);', '', 'A', '', 'large');
	div.appendChild(largeA);

	if (!d.getElementById(levelArray[0]))	return;
	var a = createA('/cidp/index.html', '_self', 'Home');
	breadcrumbs.appendChild(a);
	
	for (var i=0; i<levelArray.length; i++)
	{
		if (levelArray[i])
		{
			var obj = levelArray[i];
			if (!d.getElementById(levelArray[i]))	break;
			var btn = d.getElementById(levelArray[i]);
			var txt = (isIE)	?	btn.innerText	:	btn.textContent;
			var link = btn.href;
			
			breadcrumbs.innerHTML += ' > ';
			
			if (i < levelArray.length-1)
			{
				var a = createA(link, '_self', txt);
				breadcrumbs.appendChild(a);
			}
			else
			{
				breadcrumbs.innerHTML += txt;
			}
		}
	}
}


/*

function getWindowHeight() {
			var windowHeight = 0;
			if (typeof(window.innerHeight) == 'number') {
				windowHeight = window.innerHeight;
			}
			else {
				if (document.documentElement && document.documentElement.clientHeight) {
					windowHeight = document.documentElement.clientHeight;
				}
				else {
					if (document.body && document.body.clientHeight) {
						windowHeight = document.body.clientHeight;
					}
				}
			}
			return windowHeight;
		}
		function setFooter() {
			if (document.getElementById) {
				var windowHeight = getWindowHeight();
				if (windowHeight > 0) {
					var contentHeight = document.getElementById('BodyContainer').offsetHeight;
					var footerElement = document.getElementById('Footer');
					var footerHeight  = footerElement.offsetHeight;
					if (windowHeight - (contentHeight + footerHeight) >= 0) {
						footerElement.style.top = (windowHeight - (contentHeight + footerHeight)) + 'px';
					}
					else {
						footerElement.style.top = '0px';
					}
				}
			}
		}
		window.onload = function() {
			setFooter();
			MM_preloadImages('Images/BTN_Main_On.gif','Images/BTN_Management_On.gif','Images/BTN_CoreVMV_On.gif','Images/BTN_BrandService_On.gif','Images/BTN_AboutYWCA_On.gif','Images/BTN_Culture_On.gif','Images/BTN_Business_On.gif','Images/BTN_CoOp_On.gif','Images/BTN_Report_On.gif');

		}
		window.onresize = function() {
			setFooter();
		}

*/
