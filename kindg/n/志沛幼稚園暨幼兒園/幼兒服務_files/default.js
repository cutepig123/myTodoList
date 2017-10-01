document.getElementByClass = function (cName, tName) {
   var elements = [];
   var alltags = document.all ? document.all : document.getElementsByTagName("*");
   for (var i=0; i<alltags.length; i++) {
      var classNames = alltags[i].className.split(" ");
	  for(var j = 0; j < classNames.length; j++){
      	if (classNames[j] == cName)
          	elements[elements.length] = alltags[i];
	  }
   }
   return elements;
}

var prveLi = null;
var nextLi = null;
var canActived = true;
function displaySubMenu(li)
{
	if(canActived){
		canActived = false;
		
		//setTimeout("canActived = true", 500);
	}else{
		nextLi = li;
		return;
	}
	
	if(prveLi != null){
		var subMenu2 = prveLi.getElementsByTagName("ul")[0];
		if(subMenu2){
			subMenu2.style.display = "none";
		}
		prveLi = li;
	}else{
		prveLi = li;
	}
	
//	var a = li.parentNode.parentNode;
//	lis = a.getElementsByTagName("li")[0];
	switchActiveMenu(false);
	var subMenu = li.getElementsByTagName("ul")[0];
	if(subMenu){
		subMenu.style.display = "block";
	}else{
		//$$('#mainmenu li ul').each(function(xitem, i){
		//	xitem.setStyle('display', 'none');											 
		//});	
	}
}

function subMenuOver(){
	nextLi = null;
	canActived = true;
}

function hideSubMenu(li)
{
	setTimeout("canActived = true; if(nextLi != null){displaySubMenu(nextLi);}", 275);
	//var subMenu = li.parentNode.getElementsByTagName("ul")[0];
	//if(subMenu){
		//subMenu.style.display = "none";
	//}
	//switchActiveMenu(true);
}

function switchActiveMenu(isShow){
	var a = document.getElementByClass('mainmenuactive', 'LI');
	if(a.length > 0){
		var sm = a[0].getElementsByTagName("ul")[0];
		if(sm){
			if(isShow){
				sm.style.display = "block";
			}else{
				sm.style.display = "none";
			}
		}
	}	
}

function getLeft(e){
	var offset=e.offsetLeft;
	if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
	return offset;
}

function getTop(e){
	var offset=e.offsetTop;
	if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
	return offset;
}

function initializeMainMenuPosition(){
	var a = document.getElementById('mainmenu');
	var lis = a.childNodes;
	var l = getLeft(a);
	for(var i = 0; i < lis.length; i++){
		var ums = lis[i].childNodes;
		if(ums[1]){
			ums[1].style.left = l + 'px';
		}
	}								
	
	mainmenuul = $$(".main-menu");
	mainmenuul.each(function(xitem, i){
		xitem.addEvent('mouseleave',function(){								
			$$('#mainmenu li ul').each(function(xitem, i){
				xitem.setStyle('display', 'none');										 
			});
			$$('.mainmenuactive ul').each(function(xitem, i){
				xitem.setStyle('display', 'block');									 
			});	
		});											
	});
	
	$$('.mainmenuactive ul').each(function(xitem, i){
		xitem.setStyle('display', 'block');				 
	});	
}

window.addEvent("domready",function(){
	initializeMainMenuPosition();
});

window.onresize = function(){
	initializeMainMenuPosition();
}