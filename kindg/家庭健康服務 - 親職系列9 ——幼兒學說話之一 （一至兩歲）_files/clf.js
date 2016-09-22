var logo_alt="香港特別行政區政府 衞生署 家庭健康服務";
/*
function older_clf_hd(){

document.write('<table width=\"760\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" background=\"'+lev_div+'./images/clf/bkgdtexture.gif">'+
    '<form name="searchform"  method="get" action="http://search.gov.hk/search.html" target="_blank">'+
		'<input type="hidden" name="tpl_id" value="fhs"> '+
		'<input type="hidden" name="gp0" value="fhs_home"> '+
		'<input type="hidden" name="gp1" value="fhs_home"> '+
		'<input type="hidden" name="web" value="this"> '+
		'<input type="hidden" name="ui_lang" value="zh-hk"> '+
		'<input type="hidden" name="ui_charset" value="big5"> '+
                '<tr> '+
                  '<td><img src="'+lev_div+'./images/clf/logo.gif" alt="'+logo_alt+'"> </td>'+
                  '<td rowspan="2" valign="bottom" align="right" width="1"> '+
                    '<table border="0" cellspacing="0" cellpadding="0">'+
                      '<tr align="right"> '+
                        '<td colspan="2"> '+
                          '<table border="0" cellspacing="0" cellpadding="0">'+
                            '<tr> '+                              
                              '<td align="right"><a href="http://www.brandhk.gov.hk/brandhk/eindex.htm" target="_blank"><img name="BrandHK" src="'+lev_div+'./images/clf/brandhk.gif" border="0" alt="香港品牌形象 - 亞洲國際都會"></a></td>'+
                            '</tr>'+
                          '</table>'+
                        '</td>'+
                      '</tr>'+
                      '<tr> '+
                        '<td width="146" align="center"><font size="2"> '+
                          '<input class="search" type="text" name="query" size="12">'+
                          '</font></td>'+
                        '<td valign="bottom" align="right" width="160"> '+
                          '<table width="123" border="0" cellspacing="0" cellpadding="0">'+
						  '<tr valign="bottom">'+
						  '<td><a href="javascript:document.searchform.submit();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'mainbar81\',\'\',\''+lev_div+'./images/clf/mainbar8_f2.gif\',1)"><img name="mainbar81" border="0" src="'+lev_div+'./images/clf/mainbar8.gif" alt="搜尋"></a></td>'+
						  //for changing fonts
							//'<td class="top_txt" nowrap>&nbsp;&nbsp;字型大小：</td>'+
							//'<td class="size_s" nowrap><a title="字型大小：原設定" href="javascript:changeFont(\'Medium\');" class="size_slink">'+
							//'<span id="txtsize_area_Font_Medium"><span class="access">字型大小：原設定 (</span><span lang="tc_chi">A</span><span class="access">)</span></span></a></td>'+
							//'<td class="size_m" nowrap><a title="字型大小：較大" href="javascript:changeFont(\'Large\');" class="size_mlink">'+
							//'<span id="txtsize_area_Font_Large"><span class="access">字型大小：較大 (</span><span lang="tc_chi">A</span><span class="access">)</span></span></a></td>'+
							//'<td class="size_l" nowrap><a title="字型大小：最大" href="javascript:changeFont(\'Extra\');" class="size_llink">'+
							//'<span id="txtsize_area_Font_Extra"><span class="access">字型大小：最大 (</span><span lang="tc_chi">A</span><span class="access">)</span></span></a></td>'+
							//end of for changing fonts
				//'<td><img src="'+lev_div+'images/clf/line.gif" border="0"></a></td>'+
                              '<td><a href="'+lev_div+'sitemap/sitemap.html" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar91\',\'\',\''+lev_div+'./images/clf/mainbar9_f2.gif\',1)" ><img name="mainbar91" src="'+lev_div+'./images/clf/mainbar9.gif" border="0" alt="網頁指南"></a></td>'+
                              '<td><a href="'+lev_div+'contactus/contactus.html" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar101\',\'\',\''+lev_div+'./images/clf/mainbar10_f2.gif\',1)" ><img name="mainbar101" src="'+lev_div+'./images/clf/mainbar10.gif" border="0" alt="聯絡我們"></a></td>'+
                            '</tr>'+
                          '</table>'+
                        '</td>'+
                      '</tr>'+
                    '</table>'+
                  '</td>'+
                '</tr>'+
                '<tr> '+
                  '<td> '+
                    '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                      '<tr valign="top"> '+
                        '<td width="1"><a href="http://www.gov.hk/" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar1\',\'\',\''+lev_div+'./images/clf/mainbar1_f2.gif\',1)" target="_blank" ><img name="mainbar1" src="'+lev_div+'./images/clf/mainbar1.gif" border="0" alt="GovHK 香港政府一站通"></a></td>'+
						
						//text only
						//'<td width="1"><a href="javascript:chglang(\'tctxt\')" onMouseOut="MM_swapImgRestore()"  //onMouseOver="MM_swapImage(\'mainbar41\',\'\',\''+lev_div+'./images/clf/mainbar2_f2.gif\',1)" ><img name="mainbar41" //src="'+lev_div+'./images/clf/mainbar2.gif" border="0" alt="繁體純文字"></a></td>'+
						//sc_chi
						'<td width="1"><a href="javascript:chglang(\'sc\')" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar42\',\'\',\''+lev_div+'./images/clf/mainbar3_f2.gif\',1)" ><img name="mainbar42" src="'+lev_div+'./images/clf/mainbar3.gif" border="0" alt="簡體版"></a></td>'+
						//eng
						'<td width="1"><a href="javascript:chglang(\'en\')" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar4\',\'\',\''+lev_div+'./images/clf/mainbar4_f2.gif\',1)" ><img name="mainbar4" src="'+lev_div+'./images/clf/mainbar4.gif" border="0" alt="English"></a></td>'+                    
                        
						'<td><img name="mainbar5" src="'+lev_div+'./images/clf/mainbar5.gif" border="0" alt="image"></td>'+
                        '<td align="right" width="1"><a href="javascript:document.searchform.submit();" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar6\',\'\',\''+lev_div+'./images/clf/mainbar6_f2.gif\',1)" ><img name="mainbar6" src="'+lev_div+'./images/clf/mainbar6.gif" border="0" alt="搜尋"></a></td>'+
                      '</tr>'+
                    '</table>'+
                  '</td>'+
                '</tr>'+
                '<tr> '+
                  '<td colspan="2" bgcolor="#CC3333"><img src="'+lev_div+'./images/general/spacer.gif" width="1" height="2"></td>'+
                '</tr>'+
		'</form>'+
              '</table>');
}      */      

function clf_hd(){genHeader()}
function clf_hd2(){

	var tc_id = "choose_lang_tc";
	var sc_id = "choose_lang_sc";
	var eng_id = "choose_lang_eng";	
	var searchformValue = "";
	var text_brandhk = "香港品牌形象 - 亞洲國際都會";
	var text_GovHK = "GovHK 香港政府一站通";
	var arClfTopMenuA1 = "字型大小：原設定";
	var arClfTopMenuA2 = "字型大小：較大";
	var arClfTopMenuA3 = "字型大小：最大";
	var enVersion = "English";
	var zh_hk_version = "繁體版";
	var zh_cn_version = "簡體版";
	var search_text = "搜尋";
	var search_keyword = "請輸入搜尋字串";
	var sitemap_alt_text = "網站地圖";
	var contact_alt_text = "聯絡我們";
	
	document.writeln('<style type="text/css">#headnav img{margin-top:6px;}</style>');
	//document.writeln('<style type="text/css">#headnav{height:19px;}</style>');
	
	document.writeln('<table width="760" border="0" cellspacing="0" cellpadding="0" background="'+lev_div+'./images/clf/bkgdtexture.gif">');
	document.writeln('<form name="searchform"  method="get" action="http://search.gov.hk/search.html" target="_blank">');
	
	searchformValue += '<input type="hidden" name="tpl_id" value="fhs">';
	searchformValue += '<input type="hidden" name="gp0" value="fhs_home">';
	searchformValue += '<input type="hidden" name="gp1" value="fhs_home">';
	searchformValue += '<input type="hidden" name="web" value="this">';
	searchformValue += '<input type="hidden" name="ui_lang" value="'+document.documentElement.lang+'">';
	searchformValue += '<input type="hidden" name="ui_charset" value="UTF-8">';
	searchformValue += '<label for="query" style="display:block;"><span class="hidden">'+search_text+'</span></label>';
	
	document.writeln(searchformValue);	
	document.writeln("<tr><td style='border-bottom: #c33 solid 2px;'>");
	document.writeln('<div style="clear: both; width: 760 px;">');
	document.writeln('<div style="float: left;"><img src="'+lev_div+'./images/clf/logo.gif" alt="'+logo_alt+'"></div>');
	document.writeln('<div style="float: right;"><a href="http://www.brandhk.gov.hk/brandhk/eindex.htm" target="_blank"><img name="BrandHK" src="'+lev_div+'./images/clf/brandhk.gif" border="0" alt="'+text_brandhk+'"></a></div>');
	document.writeln("</div>");
	
	document.writeln('<div></div>');
	
	document.writeln('<div id="headnav" style="clear: both;">');
	
	document.writeln('<div style="float: left;" >');
	document.writeln('<div style="float: left;"><a href="http://www.gov.hk/" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar1\',\'\',\''+lev_div+'./images/clf/mainbar1_f2.gif\',1)"  onblur="MM_swapImgRestore()"  onfocus="MM_swapImage(\'mainbar1\',\'\',\''+lev_div+'./images/clf/mainbar1_f2.gif\',1)" target="_blank" ><img name="mainbar1" src="'+lev_div+'./images/clf/mainbar1.gif" border="0" alt="'+text_GovHK+'"></a></div>'
	);
	//get select lang
		if(document.documentElement.lang!="zh-hk"){//print tranditional chinese link
		 document.writeln('<div style="float: left;" lang="zh-hk"><a href="javascript:chglang(\'tc\')" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar2\',\'\',\''+lev_div+'images/clf/gb_mainbar3_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar2\',\'\',\''+lev_div+'images/clf/gb_mainbar3_f2.gif\',1)"><img name="mainbar2" src="'+lev_div+'images/clf/gb_mainbar3.gif" border="0" title="'+zh_hk_version+'"  alt="'+zh_hk_version+'"></a></div>');
	}

	if(document.documentElement.lang!="zh-cn"){//print simplified chinese link
		 document.writeln('<div style="float: left;" lang="zh-cn"><a href="javascript:chglang(\'sc\')" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar3\',\'\',\''+lev_div+'./images/clf/mainbar3_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onfocus="MM_swapImage(\'mainbar3\',\'\',\''+lev_div+'./images/clf/mainbar3_f2.gif\',1)"><img name="mainbar3" src="'+lev_div+'./images/clf/mainbar3.gif" border="0" title="'+zh_cn_version+'" alt="'+zh_cn_version+'"></a></div>');
	}

	if(document.documentElement.lang!="en"){//print english link
		 document.writeln('<div style="float: left;" lang="en"><a href="javascript:chglang(\'en\')" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar4\',\'\',\''+lev_div+'./images/clf/mainbar4_f2.gif\',1)" onblur="MM_swapImgRestore()"  onfocus="MM_swapImage(\'mainbar4\',\'\',\''+lev_div+'./images/clf/mainbar4_f2.gif\',1)" > <img name="mainbar4" src="'+lev_div+'./images/clf/mainbar4.gif" border="0" title="'+enVersion+'" alt="'+enVersion+'"></a></div>');
	}
	//end of get select lang
	document.writeln('<div style="display: inline-block;"><img name="mainbar5" src="'+lev_div+'./images/clf/mainbar5.gif" border="0" alt="image"></div>');
	document.writeln("</div>");
	
	//start right
	document.writeln('<div style="float: right;">');
	//aaa
	document.writeln('<div style="float: left">');
		document.writeln('<a class="setFontSize hoverU" id="100" href="javascript:changeFontSize(1)" style="text-decoration:none; color:black;"><span id="fontSizeM" style="font-size: 10px; font-family: arial; padding-right:5px; " class="noline medium font1" title="'+arClfTopMenuA1+'" alt="'+arClfTopMenuA1+'">A</span></a>');
		document.writeln('<a class="setFontSize hoverU" id="120" href="javascript:changeFontSize(2)" style="text-decoration:none; color:black;"><span id="fontSizeL" id="fontSizeL" style="font-size: 15px;  font-family: arial; padding-right:5px;" class="large noline font2" title="'+arClfTopMenuA2+'" alt="'+arClfTopMenuA2+'">A</span></a>');
		document.writeln('<a class="setFontSize hoverU" id="140" href="javascript:changeFontSize(3)" style="text-decoration:none; color:black;"><span id="fontSizeXL" id="fontSizeXL" style="font-size: 20px; font-family: arial; padding-right:5px;" class="xlarge noline font3" title="'+arClfTopMenuA3+'" alt="'+arClfTopMenuA3+'">A</span></a>');
	document.writeln('</div>');
	document.writeln('<div style="float: left;"><a href="javascript:document.searchform.submit();" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar6\',\'\',\''+lev_div+'./images/clf/mainbar6_f2.gif\',1)"  onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar6\',\'\',\''+lev_div+'./images/clf/mainbar6_f2.gif\',1)" ><img name="mainbar6" src="'+lev_div+'./images/clf/mainbar6.gif" border="0" alt="'+search_text+'"></a></div>');
	document.writeln('<div style="float: left;"><input id="query" type="text" name="query" size="12" class="search" style="font-size:12px; display:block;" value="'+search_keyword+'" onkeypress="if(this.value==\''+search_keyword+'\')this.value=\'\'" onclick="if(this.value==\''+search_keyword+'\')this.value=\'\'" onfocus="this.select();" onblur="if(this.value==\'\')this.value=\'\';" onmouseout="if(this.value==\'\')this.value=\'\';" onmouseover="this.focus();" title="'+search_keyword+'"></div>');
	document.writeln('<div style="float: left;"><a href="javascript:document.searchform.submit();" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage(\'mainbar81\',\'\',\''+lev_div+'./images/clf/mainbar8_f2.gif\',1)" onBlur="MM_swapImgRestore()" onFocus="MM_swapImage(\'mainbar81\',\'\',\''+lev_div+'./images/clf/mainbar8_f2.gif\',1)"><img name="mainbar81" border="0" src="'+lev_div+'./images/clf/mainbar8.gif" alt="'+search_text+'"></a></div>');
	document.writeln('<div style="float: left;"><a href="'+lev_div+'sitemap/sitemap.html" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar91\',\'\',\''+lev_div+'./images/clf/mainbar9_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar91\',\'\',\''+lev_div+'./images/clf/mainbar9_f2.gif\',1)"><img name="mainbar91" src="'+lev_div+'./images/clf/mainbar9.gif" border="0" alt="'+sitemap_alt_text+'"></a></div>');
	document.writeln('<div style="float: left"><a href="'+lev_div+'contactus/contactus.html" onMouseOut="MM_swapImgRestore()"  onMouseOver="MM_swapImage(\'mainbar101\',\'\',\''+lev_div+'./images/clf/mainbar10_f2.gif\',1)" onBlur="MM_swapImgRestore()"  onFocus="MM_swapImage(\'mainbar101\',\'\',\''+lev_div+'./images/clf/mainbar10_f2.gif\',1)"><img name="mainbar101" src="'+lev_div+'./images/clf/mainbar10.gif" border="0" alt="'+contact_alt_text+'"></a></div>')
	document.writeln("</div>");
	//end right
	document.writeln('<div style="clear:both"></div>');
	document.writeln("</div>");
	
	document.writeln("</td>");
	document.writeln("</tr>");
	document.writeln("</form>");
	document.writeln("</table>");
}

$(document).ready(function($) {
/*mouse hover underline effect*/
$('.hoverU').hover(function () {
$(this).css('text-decoration','underline');
}, function () {
$(this).css('text-decoration','none');
});

$('.hoverU').focus(function () {
$(this).css('text-decoration','underline');
}); 

$('.hoverU').blur(function () {
$(this).css('text-decoration','none');
}); 

});


/*
window.onload = function() {
	var fs = GetCookie("fontsize");
	if(fs != null)
	{
		if(fs!="3" && fs!="2"){
			fs = "1";
		}
	
	}else{
		fs = "1";
	}
	changeFontSize(fs);      
}
function changeFontSize(fs)
{
	var expdate = new Date();
	expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); 
	SetCookie("fontsize", fs, expdate , "/", null, false);
	
	var s = document.getElementsByTagName("body");
	for( i = 0 ; s.length ; i++ )
	{
		if(s[i] == undefined)
			return;

		if(s[i].id == 'main')
			if(fs=="1")
			{
				document.getElementById('fontSizeM').style.color='#A6262C';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='black';
				fs="1em";//81.3
			}else if(fs=="2")
			{
				document.getElementById('fontSizeM').style.color='black';
				document.getElementById('fontSizeL').style.color='#A6262C';
				document.getElementById('fontSizeXL').style.color='black';
				fs="1.5em";//93.5%
			}else if(fs=="3")
			{
				document.getElementById('fontSizeM').style.color='black';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='#A6262C';
				fs="2em";//105
			}else{
				document.getElementById('fontSizeM').style.color='#A6262C';
				document.getElementById('fontSizeL').style.color='black';
				document.getElementById('fontSizeXL').style.color='black';
				fs="1 em";//81.3
			}
			document.getElementsByTagName("body")[0].style.fontSize = fs;
	}

}*/

function clf_footer(){
/*getfooter();*/
	document.write('<span style="font-family:細明體, Taipei, Arial, Helvetica, sans-serif;">2011 <img src=\"'+lev_div+'./images/clf/copy.gif" alt="版權" align="absmiddle"> | <a href="'+lev_div+'notice/notice.html">重要告示</a> | <a href="'+lev_div+'policy/policy.html">私隱政策</a></span>');

}

function txt_clf_footer(){
	document.write('<p><font face=\"細明體, 新細明體, 標楷體\" size=\"2\">版權屬香港特別行政區政府衞生署所有（二零一一年）。<b><a href=\"'+lev_div+'notice/notice.html">重要告示</a> | <a href="'+lev_div+'policy/policy.html">私隱政策</a></b></font></p>'+

			'<p><font face="細明體, 新細明體, 標楷體" size="2">[<a href="http://www.gov.hk/tc/residents/" target="_blank">GovHK 香港政府一站通</a>] [<a href="http://www.brandhk.gov.hk/brandhk/index.htm" target="_blank">香港品牌形象 - 亞洲國際都會</a>]</font></p>');
}

