function getLang() { //0 = english, 1 = tranditional chinese, 2 = simplify chinese
  var pagelang;
  if (document.documentElement.lang == "zh-cn") {
    pagelang = 2;
  } else if (document.documentElement.lang == "zh-hk") {
    pagelang = 1;
  } else {
    pagelang = 0;
  }
  return pagelang;
}

function genHeader() {
  var logo_alt = new Array();
  logo_alt[0] =
    "Family Health Service Department of Health The Government of the Hong Kong Special Administrative Region";
  logo_alt[1] = "香港特別行政區政府 衞生署 家庭健康服務";
  logo_alt[2] = "香港特别行政区政府 卫生署 家庭健康服务";

  var text_brandhk = new Array();
  text_brandhk[0] = "Brand Hong Kong - Asia's world city";
  text_brandhk[1] = "香港品牌形象 - 亞洲國際都會";
  text_brandhk[2] = "香港品牌形象 - 亚洲国际都会";

  var text_GovHK = new Array();
  text_GovHK[0] = "GovHK";
  text_GovHK[1] = "GovHK 香港政府一站通";
  text_GovHK[2] = "GovHK 香港政府一站通";

  var arClfTopMenuA1 = new Array();
  arClfTopMenuA1[0] = "Default Font Size";
  arClfTopMenuA1[1] = "字型大小：原設定";
  arClfTopMenuA1[2] = "字型大小：原设定";

  var arClfTopMenuA2 = new Array();
  arClfTopMenuA2[0] = "Larger Font Size";
  arClfTopMenuA2[1] = "字型大小：較大";
  arClfTopMenuA2[2] = "字型大小：较大";

  var arClfTopMenuA3 = new Array();
  arClfTopMenuA3[0] = "Largest Font Size";
  arClfTopMenuA3[1] = "字型大小：最大";
  arClfTopMenuA3[2] = "字型大小：最大";

  var search_text = new Array();
  search_text[0] = "Search";
  search_text[1] = "搜尋";
  search_text[2] = "搜寻";

  var search_keyword = new Array();
  search_keyword[0] = "Enter search keyword(s)";
  search_keyword[1] = "輸入查詢字串";
  search_keyword[2] = "输入查询字串";

  var sitemap_alt_text = new Array();
  sitemap_alt_text[0] = "Site map";
  sitemap_alt_text[1] = "網站指南";
  sitemap_alt_text[2] = "网站指南";

  var contact_alt_text = new Array();
  contact_alt_text[0] = "Contact us";
  contact_alt_text[1] = "聯絡我們";
  contact_alt_text[2] = "联络我们";

  var enVersion = "English";
  var zh_hk_version = "繁體版";
  var zh_cn_version = "简体版";

  var searchformValue = "";


  var pagelang = getLang();

  var indexpath;
  var skip2content = "";

  if (getLang() == 0) {
    indexpath = "eindex.html";
    skip2content = "Skip to content";
  } else if (getLang() == 1) {
    indexpath = "cindex.html";
    skip2content = "跳至內容";
  } else if (getLang() == 2) {
    indexpath = "scindex.html";
    skip2content = "跳至內容"
  }

  var tc_id = "choose_lang_tc";
  var sc_id = "choose_lang_sc";
  var eng_id = "choose_lang_eng";

  document.writeln(
    '<a href="#content" class="noprint" style="position: absolute !important; left: 0px !important; top: -500px !important; width: 1px !important; height: 1px !important; overflow: hidden !important;">' +
    skip2content + '</a>');
  document.writeln(
    '<style type="text/css">#headnav img{margin-top:6px;}</style>');
  //document.writeln('<style type="text/css">#headnav{height:19px;}</style>');

  document.writeln(
    '<table width="760" border="0" cellspacing="0" cellpadding="0" background="' +
    lev_div + './images/clf/bkgdtexture.gif">');
  document.writeln(
    '<form name="searchform"  method="get" action="http://search.gov.hk/search.html" target="_self">'
  );

  searchformValue += '<input type="hidden" name="tpl_id" value="fhs_r2">';
  searchformValue += '<input type="hidden" name="gp0" value="fhs_r2_home">';
  searchformValue += '<input type="hidden" name="gp1" value="fhs_r2_home">';
  searchformValue += '<input type="hidden" name="web" value="this">';
  searchformValue += '<input type="hidden" name="ui_lang" value="' + document
    .documentElement.lang + '">';
  searchformValue += '<input type="hidden" name="ui_charset" value="UTF-8">';
  searchformValue +=
    '<label for="query" style="display:block;"><span class="hidden">' +
    search_text[pagelang] + '</span></label>';

  document.writeln(searchformValue);
  document.writeln("<tr><td style='border-bottom: #B33 solid 2px;'>");
  document.writeln('<div style="clear: both; width: 760 px;">');
  document.writeln('<div style="float: left;"><img src="' + lev_div +
    './images/clf/logo.gif" alt="' + logo_alt[pagelang] + '"></div>');
  document.writeln(
    '<div style="float: right;"><a href="http://www.brandhk.gov.hk/brandhk/eindex.htm" target="_blank"><img name="BrandHK" src="' +
    lev_div + './images/clf/brandhk.gif" border="0" alt="' + text_brandhk[
      pagelang] + '"></a></div>');
  document.writeln("</div>");

  document.writeln('<div></div>');

  document.writeln('<div id="headnav" style="clear: both;">');

  document.writeln('<div style="float: left; width: 350px;" >');
  document.writeln(
    '<div style="float: left;"><a href="http://www.gov.hk/" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar1\',\'\',\'/common/img/mainbar1_f2.gif\',1)"  onblur="MM_swapImgRestore()"  onfocus="MM_swapImage(\'mainbar1\',\'\',\'/common/img/mainbar1_f2.gif\',1)" target="_blank" ><img name="mainbar1" src="/common/img/mainbar1.gif" style="height: 20px; border: 0px;" alt="' +
    text_GovHK[pagelang] + '"></a></div>'
  );
  //get select lang
  if (document.documentElement.lang != "zh-hk") { //print tranditional chinese link
    document.writeln('<div style="float: left;" lang="zh-hk"><a href="' +
      getchglang('tc') +
      '" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar_tc\',\'\',\'/common/img/mainbar_tc_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar_tc\',\'\',\'/common/img/mainbar_tc_f2.gif\',1)"><img name="mainbar_tc" src="/common/img/mainbar_tc.gif" border="0" title="' +
      zh_hk_version + '" style="height: 20px;" alt="' + zh_hk_version +
      '"></a></div>');
  }

  if (document.documentElement.lang != "zh-cn") { //print simplified chinese link
    document.writeln('<div style="float: left;" lang="zh-cn"><a href="' +
      getchglang('sc') +
      '" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar_sc\',\'\',\'/common/img/mainbar_sc_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onfocus="MM_swapImage(\'mainbar_sc\',\'\',\'/common/img/mainbar_sc_f2.gif\',1)"><img name="mainbar_sc" src="/common/img/mainbar_sc.gif" border="0" title="' +
      zh_cn_version + '" style="height: 20px;" alt="' + zh_cn_version +
      '"></a></div>');
  }

  if (document.documentElement.lang != "en") { //print english link
    document.writeln('<div style="float: left;" lang="en"><a href="' +
      getchglang('en') +
      '" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar_en\',\'\',\'/common/img/mainbar_en_f2.gif\',1)" onblur="MM_swapImgRestore()"  onfocus="MM_swapImage(\'mainbar_en\',\'\',\'/common/img/mainbar_en_f2.gif\',1)" > <img name="mainbar_en" src="/common/img/mainbar_en.gif" border="0" title="' +
      enVersion + '" style="height: 20px;" alt="' + enVersion +
      '"></a></div>');
  }
  //end of get select lang
  document.writeln(
    '<div style="display: block; float: left"><img name="mainbar5" src="/common/img/mainbar5.gif" style="height: 20px;" border="0" alt=""></div>'
  );
  document.writeln("</div>");

  //start right
  document.writeln('<div style="float: right;">');
  //aaa
  document.writeln('<div style="float: left; height: 25px;">');
  document.writeln(
    '<table style="height: 20px;"><tr style="vertical-align: bottom;">');
  document.writeln('<td class="myfontpadding">');
  document.writeln(
    '<a class="setFontSize hoverU" id="100" href="javascript:changeFontSize(1)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeM" style="font-size: 10px; font-family: arial; padding-right:5px;" class=" medium font1" title="' +
    arClfTopMenuA1[pagelang] + '" alt="' + arClfTopMenuA1[pagelang] +
    '">A</span></a>');
  document.writeln('</td><td class="myfontpadding">');
  document.writeln(
    '<a class="setFontSize hoverU" id="120" href="javascript:changeFontSize(2)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeL" id="fontSizeL" style="font-size: 15px;  font-family: arial; padding-right:5px;" class="large  font2" title="' +
    arClfTopMenuA2[pagelang] + '" alt="' + arClfTopMenuA2[pagelang] +
    '">A</span></a>');
  document.writeln('</td><td class="myfontpadding">');
  document.writeln(
    '<a class="setFontSize hoverU" id="140" href="javascript:changeFontSize(3)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeXL" id="fontSizeXL" style="font-size: 20px; font-family: arial; padding-right:5px;" class="xlarge  font3" title="' +
    arClfTopMenuA3[pagelang] + '" alt="' + arClfTopMenuA3[pagelang] +
    '">A</span></a>');

  document.writeln("</td></tr></table>");
  document.writeln('</div>');

  /*
	document.writeln('<div style="float: left; height: 20px; padding-top: 3px;">');
		document.writeln('<a class="setFontSize hoverU" id="100" href="javascript:changeFontSize(1)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeM" style="font-size: 10px; font-family: arial; padding-right:5px; vertical-align: bottom;" class="noline medium font1" title="'+arClfTopMenuA1[pagelang]+'" alt="'+arClfTopMenuA1[pagelang]+'">A</span></a>');
		document.writeln('<a class="setFontSize hoverU" id="120" href="javascript:changeFontSize(2)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeL" id="fontSizeL" style="font-size: 15px;  font-family: arial; padding-right:5px; vertical-align: bottom;" class="large noline font2" title="'+arClfTopMenuA2[pagelang]+'" alt="'+arClfTopMenuA2[pagelang]+'">A</span></a>');
		document.writeln('<a class="setFontSize hoverU" id="140" href="javascript:changeFontSize(3)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeXL" id="fontSizeXL" style="font-size: 20px; font-family: arial; padding-right:5px; vertical-align: bottom;" class="xlarge noline font3" title="'+arClfTopMenuA3[pagelang]+'" alt="'+arClfTopMenuA3[pagelang]+'">A</span></a>');
	document.writeln('</div>');*/
  document.writeln(
    '<div style="float: left;"><a href="javascript:document.searchform.submit();" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar6\',\'\',\'' +
    lev_div +
    './images/clf/mainbar6_f2.gif\',1)"  onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar6\',\'\',\'' +
    lev_div +
    './images/clf/mainbar6_f2.gif\',1)" ><img name="mainbar6" src="' +
    lev_div + './images/clf/mainbar6.gif" border="0" alt="' + search_text[
      pagelang] + '"></a></div>');
  document.writeln(
    '<div style="float: left;"><input id="query" type="text" name="query" size="21" class="search" style="font-size:12px; display:block;" value="' +
    search_keyword[pagelang] + '" onkeypress="if(this.value==\'' +
    search_keyword[pagelang] +
    '\')this.value=\'\'" onclick="if(this.value==\'' + search_keyword[
      pagelang] +
    '\')this.value=\'\'" onfocus="this.select();" onblur="if(this.value==\'\')this.value=\'' +
    search_keyword[pagelang] +
    '\';" onmouseout="if(this.value==\'\')this.value=\'\';" onmouseover="this.focus();" title="' +
    search_keyword[pagelang] + '"></div>');
  document.writeln(
    '<div style="float: left;"><a href="javascript:document.searchform.submit();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'mainbar81\',\'\',\'' +
    lev_div +
    './images/clf/mainbar8_f2.gif\',1)" onBlur="MM_swapImgRestore()" onFocus="MM_swapImage(\'mainbar81\',\'\',\'' +
    lev_div +
    './images/clf/mainbar8_f2.gif\',1)"><img name="mainbar81" border="0" src="' +
    lev_div + './images/clf/mainbar8.gif" alt="' + search_text[pagelang] +
    '"></a></div>');
  document.writeln('<div style="float: left;"><a href="' + lev_div +
    'sitemap/sitemap.html" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar91\',\'\',\'' +
    lev_div +
    './images/clf/mainbar9_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar91\',\'\',\'' +
    lev_div +
    './images/clf/mainbar9_f2.gif\',1)"><img name="mainbar91" src="' +
    lev_div + './images/clf/mainbar9.gif" border="0" alt="' +
    sitemap_alt_text[pagelang] + '"></a></div>');
  document.writeln('<div style="float: left"><a href="' + lev_div +
    'contactus/contactus.html" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar101\',\'\',\'' +
    lev_div +
    './images/clf/mainbar10_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar101\',\'\',\'' +
    lev_div +
    './images/clf/mainbar10_f2.gif\',1)"><img name="mainbar101" src="' +
    lev_div + './images/clf/mainbar10.gif" border="0" alt="' +
    contact_alt_text[pagelang] + '"></a></div>')
  document.writeln("</div>");
  //end right
  document.writeln('<div style="clear:both"></div>');
  document.writeln("</div>");

  document.writeln("</td>");
  document.writeln("</tr>");
  document.writeln("</form>");
  document.writeln("</table>");
}

function get3A() {

  //aaa
  document.writeln('<div style="float: left; height: 25px;">');
  document.writeln(
    '<table style="height: 20px;"><tr style="vertical-align: bottom;">');
  document.writeln('<td class="myfontpadding">');
  document.writeln(
    '<a class="setFontSize hoverU" id="100" href="javascript:changeFontSize(1)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeM" style="font-size: 10px; font-family: arial; padding-right:5px;" class=" medium font1" title="' +
    arClfTopMenuA1[pagelang] + '" alt="' + arClfTopMenuA1[pagelang] +
    '">A</span></a>');
  document.writeln('</td><td class="myfontpadding">');
  document.writeln(
    '<a class="setFontSize hoverU" id="120" href="javascript:changeFontSize(2)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeL" id="fontSizeL" style="font-size: 15px;  font-family: arial; padding-right:5px;" class="large  font2" title="' +
    arClfTopMenuA2[pagelang] + '" alt="' + arClfTopMenuA2[pagelang] +
    '">A</span></a>');
  document.writeln('</td><td class="myfontpadding">');
  document.writeln(
    '<a class="setFontSize hoverU" id="140" href="javascript:changeFontSize(3)" style="text-decoration:none; display: block; float: left; color:black;"><span id="fontSizeXL" id="fontSizeXL" style="font-size: 20px; font-family: arial; padding-right:5px;" class="xlarge  font3" title="' +
    arClfTopMenuA3[pagelang] + '" alt="' + arClfTopMenuA3[pagelang] +
    '">A</span></a>');

  document.writeln("</td></tr></table>");
  document.writeln('</div>');
}

$(document).ready(function($) {
  /*mouse hover underline effect*/
  $('.hoverU').hover(function() {
    $(this).css('text-decoration', 'underline');
  }, function() {
    $(this).css('text-decoration', 'none');
  });

  $('.hoverU').focus(function() {
    $(this).css('text-decoration', 'underline');
  });

  $('.hoverU').blur(function() {
    $(this).css('text-decoration', 'none');
  });

});

function reset3A() {
  var fs = get19Cookie("fhs_fontsize");
  //	alert("out: "+fs);
  /*	if(fs != null)
		{
			if(fs!="3" && fs!="2"){
				fs = "1";
			}

		}else{
			fs = "1";
		}*/
  changeFontSize(fs);
}
$(document).ready(function($) {
  //alert("loading!!!");
  reset3A();
});

function set19Cookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? "" : ";Path=/; expires=" +
    exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

function get19Cookie(c_name) {
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == c_name) {
      /*	alert("out: "+unescape(y));*/
      return unescape(y);
    }
  }
}

/*function changeFontSize1(fs){
	var expdate = new Date();
	expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365));
	set19Cookie("fhs_fontsize", fs, expdate);
	//alert("insert "+fs);
	if(fs=="1"){
				document.getElementById('fontSizeM').style.color='#AD0000';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='black';
		$('#fontssc').attr('href', '/common/css/style1.css');
	}else if(fs=="2"){
				document.getElementById('fontSizeM').style.color='black';
				document.getElementById("fontSizeL").style.color="#AD0000";
				document.getElementById('fontSizeXL').style.color="black";
		$('#fontssc').attr('href', '/common/css/style2.css');
	}else if(fs=="3"){
				document.getElementById('fontSizeM').style.color='black';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='#AD))))';
		$('#fontssc').attr('href', '/common/css/style3.css');
	}
	//$('link[href^='+the_older_css+']').attr('href', '/path_to_new_css/file.css');
}*/
function changeFontSize(fs) {
  set19Cookie("fhs_fontsize", fs, 365);
  setfontsize();
  if ($(".qr-intro", document).length) qrList(); /*26/05/2015 by Max Tsui*/
  /*
	var s = document.getElementsByTagName("body");
	for( i = 0 ; s.length ; i++ )
	{
		if(s[i] == undefined)
			return;

		if(s[i].id == 'main')
			alert(fs);
			if(fs=="1")
			{
				//alert("M");
				document.getElementById('fontSizeM').style.color='#AD0000';
				//alert(document.getElementById('fontSizeM').innerhtml);
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='black';
				fs="75%";//81.3
			}else if(fs=="2")
			{
				document.getElementById('fontSizeM').style.color='black';
				document.getElementById("fontSizeL").style.color="#AD0000";
				document.getElementById('fontSizeXL').style.color="black";
				fs="112.5%";//93.5%
			}else if(fs=="3")
			{
				//alert("L");
				document.getElementById('fontSizeM').style.color='black';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='#AD0000';
				fs="150%";//105
			}else{
				//alert("XL");
				document.getElementById('fontSizeM').style.color='#AD0000';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='black';
				fs="75%";//81.3
			}
			//alert("firetruck"+fs);
			document.getElementsByTagName("body")[0].style.fontSize = fs;
	}
*/
}

function setfontsize() {
  var fs = get19Cookie("fhs_fontsize");
  var s = document.getElementsByTagName("body");
  for (i = 0; s.length; i++) {
    if (s[i] == undefined)
      return;

    if (s[i].id == 'main')
      alert(fs);
    if (fs == "2") { // Medium
      document.getElementById('fontSizeM').style.color = 'black';
      document.getElementById("fontSizeL").style.color = "#AD0000";
      document.getElementById('fontSizeXL').style.color = "black";
      //fs="112.5%";//93.5%
      fs = "75%"; //93.5%
    } else if (fs == "3") { // Large
      //alert("L");
      document.getElementById('fontSizeM').style.color = 'black';
      document.getElementById('fontSizeL').style.color = 'black';
      document.getElementById('fontSizeXL').style.color = '#AD0000';
      fs = "87%"; //105
    } else { // Default or standard
      document.getElementById('fontSizeM').style.color = '#AD0000';
      //lert(document.getElementById('fontSizeM').innerhtml);
      document.getElementById('fontSizeL').style.color = 'black';
      document.getElementById('fontSizeXL').style.color = 'black';
      //fs="75%";//81.3
      fs = "62.5%";
    }


    //alert("firetruck"+fs);
    document.getElementsByTagName("body")[0].style.fontSize = fs;
  }
}
