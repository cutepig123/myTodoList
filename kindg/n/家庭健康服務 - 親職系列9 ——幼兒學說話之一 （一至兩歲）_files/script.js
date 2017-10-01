var link = null;

var alt = null;

var fol = null;

var subfol = null;

var lev_div = "";

var lev_no = 0;

var layer = "";

var qllink =null;

var qlalt =null;



var isV5 = false;

var isIE = false;

var navmenuout = true

var navmenutimeoutID = 1

var mouseout_menuarticle = true

var menutimeoutID = 1

var pollanswer = false



var isMinNS4 = (navigator.appName.indexOf("Netscape") >= 0 &&

                parseFloat(navigator.appVersion) >= 4) ? 1 : 0;

var isMinIE4 = (document.all) ? 1 : 0;

var isMinIE5 = (isMinIE4 && navigator.appVersion.indexOf("5.") >= 0) ? 1 : 0;





//base function

function MM_openBrWindow(theURL,winName,features) { //v2.0

  window.open(theURL,winName,features);

}



function MM_showHideLayers() {

if(parseInt(navigator.appVersion) == 5){

  var i,p,v,obj,args=MM_showHideLayers.arguments;

  if(document.getElementById){

   for (i=0; i<(args.length-2); i+=3){

   obj=document.getElementById(args[i]);v=args[i+2];

v=(v=='show')?'visible':(v='hide')?'hidden':v;

   if(obj)obj.style.visibility=v;

   }

  }

  else{

  for (i=0; i<(args.length-2); i+=3) if ((obj=findObj(args[i]))!=null) { v=args[i+2];

    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }

    obj.visibility=v; }

 }

 }

else{

  var i,p,v,obj,args=MM_showHideLayers.arguments;

  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];

    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }

    obj.visibility=v; }

}

}



function MM_preloadImages() { //v3.0

  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();

    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)

    if (a[i].indexOf("##")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}

}



function MM_swapImage() { //v3.0C

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}



function MM_swapImgRestore() { //v3.0C

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}



function MM_findObj(n, d) { //v3.0

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;

}



function MM_openBrWindow(theURL,winName,features) { //v2.0

  window.open(theURL,winName,features);

}



function MM_jumpMenu(targ,selObj,restore){ //v3.0

  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");

  if (restore) selObj.selectedIndex=0;

}

//end





var path = window.location.pathname;



if(path.indexOf('\\') != -1){

	div = "\\";

}else{

	div = "/";	

}



lev = path.split(div);



for(i=0; i<level_1.length; i++){

	if(path.indexOf(div + level_1[i]) != -1){		

		fol = i;		

		for (j=0; j<lev.length; j++){

			if(lev[j] == level_1[i]){

				lev_no = j;

				break;

			}

		}

	}

}


/*for (i=0 ;i<(lev.length - lev_no)-1 ;i++){		

		lev_div += "../";

	}*/



if(lev_div == ""){

	lev_div = "/tc_chi/";	

}







function gentable(l, a, img, tar, lay){

	if (link == null) { 

		link = new Array(); 

		layer = new Array();

		count = 0;

	} else { 

		count = link.length;

	}

	

	if (alt == null) {

		alt = new Array(); 

	}

	

	link[count] = l;	

	alt[count] = a;



	num = count+1;

	if(num < 10){

		num = "0" + num;

	}

	if(link[count] != ""){
		layer[count] = alt[count];		

		if(lay == "y"){

			document.write('<tr>'+

				'<td><a href="'+link[count]+'" onMouseOut="MM_swapImgRestore();MM_showHideLayers(\'Lay'+count+'\',\'\',\'hide\')" onMouseOver="MM_swapImage(\'side'+num+'\',\'\',\''+lev_div+'images/general/side_over_'+img+'.gif\',1);MM_showHideLayers(\'Lay'+count+'\',\'\',\'show\');setpost(\'side'+num+'\',\'Lay'+count+'\')"><img name="side'+num+'" border="0" src="'+lev_div+'images/general/side_'+img+'.gif" alt="'+alt[count]+'"></a></td>'+
				'</tr>');

		}else{

			document.write('<tr>'+

				'<td><a href="'+link[count]+'" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'side'+num+'\',\'\',\''+lev_div+'images/general/side_over_'+img+'.gif\',1)"><img name="side'+num+'" border="0" src="'+lev_div+'images/general/side_'+img+'.gif" alt="'+alt[count]+'"></a></td>'+
				'</tr>');
		}
	

	}		

}



function genlayerheader(lyno){

	document.write('<div id=\"Lay'+lyno+'" style="position:absolute; left:0px; top:0px; width:160px; height:15px; z-index:1; visibility: hidden">'+

	  '<table width="158" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">');

}



function genlayerfooter(){

	 document.write('</table>'+

	'</div>');

}



function genlaytab(lylink,lyalt,lyimg,lyno,lyparentno,lytarget){
			

	lynum = lyparentno+1;
	if(lynum < 10){
		lynum = "0" + lynum;
	}
	lyparentbtnno = lyparentno+1;
	if(lyparentbtnno < 10){
		lyparentbtnno = "0" + lyparentbtnno;
	}

	document.write('<tr>'+
      '<td><a href="'+lylink+'" onMouseOut="MM_swapImgRestore();MM_showHideLayers(\'Lay'+lyparentno+'\',\'\',\'hide\')" onMouseOver="MM_swapImage(\'side'+lynum+'\',\'\',\''+lev_div+'images/general/side_over_'+lyparentbtnno+'.gif\',\''+lyimg+lyno+'\',\'\',\''+lev_div+'images/layer/'+lyimg+'_over_'+lyno+'.gif\',1);MM_showHideLayers(\'Lay'+lyparentno+'\',\'\',\'show\')"><img name="'+lyimg+lyno+'" border="0" src="'+lev_div+'images/layer/'+lyimg+'_'+lyno+'.gif" alt="'+lyalt+'"></a></td>'+
    '</tr>');

}



function genbanner(){
	document.write('<div style="width: 180px;"></div>');
	return false;
}



//show layer



function setpost(img, layerid){

	tmp_img = getImage(img);	

	tmp_y = getImagePageTop(tmp_img);

	tmp_x = getImagePageLeft(tmp_img);



//alert(layerid);

	if(isMinIE4){

		obj = eval(layerid);

		obj.style.posLeft = tmp_x + 179;

		obj.style.posTop = tmp_y;		

	}else{

		document.getElementById(layerid).style.left = tmp_x + 179;

		document.getElementById(layerid).style.top = tmp_y;

	}	

}



function getImage(name) {



  if (isMinNS4) {

    return findImage(name, document);

  }

  if (isMinIE4)

    return eval('document.all.' + name);

  return null;

}



function findImage(name, doc) {



  var i, img;



  for (i = 0; i < doc.images.length; i++)

    if (doc.images[i].name == name)

      return doc.images[i];

  for (i = 0; i < doc.layers.length; i++)

    if ((img = findImage(name, doc.layers[i].document)) != null) {

      img.container = doc.layers[i];

      return img;

    }

  return null;

}



function getImagePageTop(img) {



  var y, obj;



  if (isMinNS4) {

    if (img.container != null)

      return img.container.pageY + img.y;

    else

      return img.y;

  }

  if (isMinIE4) {

    y = 0;

    obj = img;

    while (obj.offsetParent != null) {

      y += obj.offsetTop;

      obj = obj.offsetParent;

    }

    y += obj.offsetTop;

    return y;

  }

  return -1;

}



function getImagePageLeft(img) {



  var x, obj;



  if (isMinNS4) {

    if (img.container != null)

      return img.container.pageX + img.x;

    else

      return img.x;

  }

  if (isMinIE4) {

    x = 0;

    obj = img;

    while (obj.offsetParent != null) {

      x += obj.offsetLeft;

      obj = obj.offsetParent;

    }

    x += obj.offsetLeft;

    return x;

  }

  return -1;

}



function navmenu_over() {

	navmenuout = false ;

	clearTimeout(navmenutimeoutID);

}



function navmenu_out() {

	navmenuout = true ;

	navmenutimeoutID = setTimeout("autohide_menu()","1000");

}



function autohide_menu() {

	if (navmenuout == true) {

		MM_showHideLayers('ql','', 'hide');

		for(q=0;q<layer.length;q++){	

			MM_showHideLayers('Lay'+q,'','hide');

		}		

	}

}



function hideother(layername) {	

	for(q=0;q<layer.length;q++){

		if (layername != 'l'+q){			

			MM_showHideLayers('Lay'+q,'','hide');

		}

	}

	if(layername != 'ql'){

		MM_showHideLayers('ql','', 'hide');

	}

	

}



function menu_over() {

	mouseout_menuarticle = false ;

	clearTimeout(menutimeoutID);

}





