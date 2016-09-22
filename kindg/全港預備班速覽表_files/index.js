$(function(){
	initFlash();
	initMainNav();
	
	$("#box").load("/box.php");
	initAdvertorialNav();
	
	function initFlash() {
		$(".flash").each(function(){
			var tE  = $(this);
			var tId = tE.attr("id");
			if (tId != "") {
				var tClass  = tE.attr("class");
				var tHref   = tE.attr("href");
				var tTarget = tE.attr("target");
				var tSrcSWF = tE.attr("rel");
				if (tSrcSWF == "" || tSrcSWF == undefined) {
					var tSrc = $("img", tE).attr("src");
					tSrcSWF = tSrc.replace(/(gif|jpg|png)/gi, "swf");
				}
				var tW = tE.width() + "";
				var tH = tE.height() + "";
				var tFlashVars = new Object();
				if (tHref != "" && tHref != undefined) tFlashVars.clickTAG = tHref;
				if (tTarget != "" && tTarget != undefined) tFlashVars.clickTARGET = tTarget;
				swfobject.embedSWF(tSrcSWF, tId, tW, tH, "10.0.0", "lib/expressInstall.swf", tFlashVars, {
					allowFullscreen: "true",
					allowScriptAccess: "always",
    				wmode: "transparent"
				}, {}, function(e) {
					if (e.success) {
						$("#" + e.id).attr("class", tClass);
					}
				});
			}
		});
	}
	function initMainNav() {
		var tCurSubNavName = '';
		var tSubNavTimerId = 0;
		var tEMainNav = $("#mainNav .MainNav");
		var tESubNav  = $("#mainNav .SubNav");
		$(".h", tESubNav).css({display:"none"});
		$(".Hiliter", tESubNav).css({display:"none", opacity:0.3});
		$("a", tEMainNav).hover(onMainNavEnter, onMainNavLeave).click(onMainNavClick);
		$("a", tESubNav).hover(onSubNavEnter, onSubNavLeave);
		
		function onMainNavEnter(e) {
			$(".Hiliter", $(this)).stop().animate({top:'5px'},200);
			var tName = getName($(this).parent().attr('class'));
			if (tName != '') { 
				if ($("#mainNav .SubNav ."+tName).length != 0) {
					delayShowSubNav(tName);
				}
			}
			if (e != null) e.preventDefault();
		}
		function onMainNavLeave(e) {
			$(".Hiliter", $(this)).stop().animate({top:'25px'},200);
			delayHideSubNav();
			if (e != null) e.preventDefault();
		}
		function onMainNavClick(e) {
			var tHref = $(this).attr("href");
			if (tHref == '#' || tHref == '') {
				if (e != null) e.preventDefault();
			}
		}
		function onSubNavEnter(e) {
			var tE = $(this);
			var tName = getName(tE.parent().parent().parent().attr('class'));
			var tX = Number(tE.position().left) + 10;
			var tW = tE.width() + 20;
			if (tName != '') { 
				$("."+tName+" .Hiliter", tESubNav).css({display:"block"}).stop().animate({left:tX + 'px', width:tW + 'px'},200);
				delayShowSubNav(tName);
			}
			if (e != null) e.preventDefault();
		}
		function onSubNavLeave(e) {
			delayHideSubNav();
			$(".Hiliter", tESubNav).css({display:"none"});
			if (e != null) e.preventDefault();
		}
		function delayShowSubNav(aName) {
			tCurSubNavName = aName;
			clearInterval(tSubNavTimerId);
			tSubNavTimerId = setInterval(updateSubNav, 200);
		}
		function delayHideSubNav() {
			tCurSubNavName = '';
			clearInterval(tSubNavTimerId);
			tSubNavTimerId = setInterval(updateSubNav, 500);
		}
		function updateSubNav() {
			clearInterval(tSubNavTimerId);
			if (tCurSubNavName != '') {
				$("#mainNav .SubNav .h").css({display:"none"}).filter("."+tCurSubNavName).css({display:"block"});
			} else {
				$("#mainNav .SubNav .h").css({display:"none"});
			}
		}
		function getName(aClassAttr) {
			return String(aClassAttr).split(' ')[0];
		}
	}
	function initAdvertorialNav() {
		var tEPageNum = $(".advertorialNav a").click(onActionAdvertorialNav);
		function onActionAdvertorialNav(e) {
			var tE = $(this);
			var tPage = Number(tE.text().replace(/^\s+|\s+$/g,''));
			tEPageNum.attr('class','');
			$(".advertorialNav a:nth-child(" + tPage + ")").attr('class','hilite');
			$(".advertorialList").load("/ws_advertorial.php?rangePage=" + tPage);
			if (e != null) e.preventDefault();
		}
	}

});

function crazy_box(action)
{
	if (action=="show")
	{
		$("#crazy_box").load("/crazyad.php");
		document.getElementById('crazy_box').style.display='block';
	}
	
	if (action=="close")
	{
		document.getElementById('crazy_box').style.display='none';
	}
}

function login_box(action)
{
	if (action=="show")
	{
		document.getElementById('modal').style.display='block';
		document.getElementById('login_box').style.display='block';
		return;
	}
	
	if (action=="close")
	{
		document.getElementById('modal').style.display='none';
		document.getElementById('login_box').style.display='none';
		return;
	}
	
}

function crazy_center()
{
	var x,y;
	if (self.innerHeight) // all except Explorer
	{
		x = self.innerWidth;
		y = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		x = document.documentElement.clientWidth;
		y = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		x = document.body.clientWidth;
		y = document.body.clientHeight;
	}
	//alert(x+":"+y);
	login=document.getElementById('crazy_box');
	posx=Math.round((x-960)/2);
	posy=Math.round((y-280)/2);
	login.style.left=posx.toString()+"px";
	//login.style.top=posy.toString()+"px";
	login.style.top="125px";
}

function center()
{
	var x,y;
	if (self.innerHeight) // all except Explorer
	{
		x = self.innerWidth;
		y = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		x = document.documentElement.clientWidth;
		y = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		x = document.body.clientWidth;
		y = document.body.clientHeight;
	}
	//alert(x+":"+y);
	login=document.getElementById('login_box');
	posx=Math.round((x-500)/2);
	posy=Math.round((y-400)/2);
	login.style.left=posx.toString()+"px";
	login.style.top=posy.toString()+"px";
}

function center_name(nm)
{
	var x,y;
	if (self.innerHeight) // all except Explorer
	{
		x = self.innerWidth;
		y = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		x = document.documentElement.clientWidth;
		y = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		x = document.body.clientWidth;
		y = document.body.clientHeight;
	}
	//alert(x+":"+y);
	login=document.getElementById(nm);
	posx=Math.round((x-600)/2);
	posy=Math.round((y-400)/2);
	login.style.left=posx.toString()+"px";
	login.style.top=posy.toString()+"px";
}
	
function magazine(id)
{
	//alert('bingo');
	$("#mhighlight").load("adserver/display.php","type=magazine_highlight&id="+id);
}

function bookseries(id)
{	
	$("#bookseries").load("adserver/display.php","type=bookseries_highlight&id="+id);
}

function banner(zone,extra)
{
	$(function(){
		$("#"+zone).load("/adserver/display.php","type="+zone+""+extra);
	});
}

function show_login()
{
	$('#member').dialog('open');
}

function menu(choose)
{
	var url=Array();
	//document.getElementById("menu1").src="images/regular/regularTag01.jpg";
	//document.getElementById("menu2").src="images/regular/regularTag02.jpg";
	document.getElementById("menu3").src="images/regular/regularTag03.jpg";
	document.getElementById("menu4").src="images/regular/regularTag04.jpg";
	document.getElementById("menu5").src="images/regular/regularTag05.jpg";
	document.getElementById("menu6").src="images/regular/regularTag06.jpg";
	//document.getElementById("menu7").src="images/regular/regularTag07.jpg";
	document.getElementById("menu8").src="images/regular/regularTag08.jpg";
	document.getElementById("menu9").src="images/regular/regularTag09.jpg";
	
	document.getElementById("menu"+choose).src="images/regular/regularTag0"+choose+"Clicked.jpg";
	
}

function windows(url,width,height)
{
	window.open(url,'cover_save','directories=no,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,width='+width+',height='+height);
}

function win(url,width,height)
{
	window.open(url,'cover_save','directories=no,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,width='+width+',height='+height);
}

function op_show(act) {
	
	document.getElementById('op_modal').style.display=act;
	document.getElementById('opening').style.display=act;
}
function getobj(movieName)
{
	  if (window.document[movieName]) 
	  {
		  return window.document[movieName];
	  }
	  if (navigator.appName.indexOf("Microsoft Internet")==-1)
	  {
		if (document.embeds && document.embeds[movieName])
		  return document.embeds[movieName]; 
	  }
	  else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
	  {
		return document.getElementById(movieName);
	  }
}

function crazy_switch(status)
{
	crazy_container.style.display=status;
	var obj=getobj('crazyad');
	obj.Rewind();
	obj.Play();
	var obj
}

