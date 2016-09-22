 /* $Id */
function GetMetaValue(meta_name) {

  var my_arr = document.getElementsByTagName("meta");
  // capture all meta tags
  for (var counter = 0; counter < my_arr.length; counter++) {
    //console.log(my_arr[counter].getAttribute('property'));

    if (my_arr[counter].name == meta_name) { // match tag name
      return my_arr[counter].content; // return tag content
    }
  }
  return "N/A";

}

function getSVNTimeString(date) {
  var adate = date.split(" ");
  // [0]:$Id:	[1]:[filename]	[2]:[svn num]	[3]:[date]	[4]:[time]	[5]:[update staff]	[6]:$
  return adate[3]; // return SVN Date
}

function rountMonth(month) {
  var str = "N/A";
  if (month == "01") {
    str = "January";
  } else if (month == "02") {
    str = "February";
  } else if (month == "03") {
    str = "March";
  } else if (month == "04") {
    str = "April";
  } else if (month == "05") {
    str = "May";
  } else if (month == "06") {
    str = "Jun";
  } else if (month == "07") {
    str = "July";
  } else if (month == "08") {
    str = "August";
  } else if (month == "09") {
    str = "September";
  } else if (month == "10") {
    str = "October";
  } else if (month == "11") {
    str = "November";
  } else if (month == "12") {
    str = "December";
  }
  return str;

}

function getTimeString(date) {
  var adate = date.split("T");
  var str = " ";
  var dmyDate = adate[0].split('-'); //yyyy-mm-dd
  pagelang = getLang();
  if (!(dmyDate[1] && dmyDate[2] && dmyDate[0])) {
    dmyDate[2] = "01";
    dmyDate[1] = "01";
    dmyDate[0] = "2006";
  } //	set date "2006/01/01" as error code
  if (pagelang == 0) {
    str += " ";
    str += dmyDate[2];
    str += " ";
    str += rountMonth(dmyDate[1]);
    str += " ";
    str += dmyDate[0];
  } else if (pagelang == 1) {

    str += " ";
    str += dmyDate[0];
    str += " 年 ";
    str += dmyDate[1];
    str += " 月 ";
    str += dmyDate[2];
    str += " 日 ";
  } else if (pagelang == 2) {

    str += " ";
    str += dmyDate[0];
    str += " 年 ";
    str += dmyDate[1];
    str += " 月 ";
    str += dmyDate[2];
    str += " 日 ";
  }
  return str + " ";
}

function getfooter() { //V2.1
  if ($("#page-footer").length > 0) {
    // Footer is generated, ignore
    return;
  }

  var str = "";
  var pagelang = getLang();
  var lang = new Array();
  lang[0] = new Array();
  lang[0][0] = "Important notices";
  lang[0][1] = "重要告示";
  lang[0][2] = "重要告示";
  lang[1] = new Array();
  lang[1][0] = "Privacy Policy";
  lang[1][1] = "私隱政策";
  lang[1][2] = "私隐政策";
  lang[2] = new Array();
  lang[2][0] = "Last revision date:";
  lang[2][1] = "最近修訂日期:";
  lang[2][2] = "最近修订日期:";

  var date = GetMetaValue("svnid");
  // whole file to get the publish date 08/03/2016 by MaxTsui
  var pubDate = GetMetaValue("pubdate");
  if (date == "N/A" || date == "") {
    // If no svnid meta tag, try using 'date' meta tag
    date = GetMetaValue("date");
  } else {
    // check if the publish date exist or not
    if (pubDate != "N/A") {
      date = pubDate + "T";
      console.log(pubDate);
    } else {
      date = getSVNTimeString(date) + "T";
    }
  }


  var str_date = getTimeString(date); //Format the date string

  str +=
    '<table id="page-footer" style="font-family: Arial,細明體, Taipei, Helvetica, sans-serif; width: 100%;"><tr>';
  str += '<td>';
  str +=
    '<span style="display: inline-block;">2006 ©</span> | <span style="display: inline-block;"><a href="' +
    lev_div + 'notice/notice.html">' + lang[0][pagelang] +
    '</a></span> | <span style="display: inline-block;"><a href="' + lev_div +
    'policy/policy.html">' + lang[1][pagelang] + '</a></span>';
  str += '</td>';

  str += '<td style="text-align: right;width: 230px;">';
  str += lang[2][pagelang] + "<span style='display: inline-block;'>" + str_date +
    "</span>";
  str += '</td>';
  str += '</tr>';

  str += '<tr>';
  str += '<td colspan="2">';
  str += getWCAG()
  str += '</td>';
  str += '</tr>';
  str += '</table>';

  var footerHolder = $("#footer");

  if ($("#footer").length > 0) {
    // Using new template with footer placeholder
    footerHolder.append(str);
  } else {
    // Use old method for old teampale:
    document.write(str);
  }
}

/* The follow is non- conformance setting */
var nonConformPages = Array();

function addNonConformPage(page) {
  nonConformPages[nonConformPages.length] = page;
}

//addNonConformPage("ct/chi/forms.htm");      //example
//addNonConformPage("/centre_det/maternal/"); // or by folder

// -- Archive Section ---
addNonConformPage("/archive/index.html");
addNonConformPage("/archive/MCHconference2012/PreConferenceSeminar.html");
addNonConformPage("/archive/MCHconference2012/seminar.html");
addNonConformPage("/archive/health_edu/bf_promo_tv_prog_2014/"); // New added
//hkcode
addNonConformPage("/archive/hkcode/hkcode.html");
addNonConformPage("/archive/hkcode/forpublic.html");
addNonConformPage("/archive/hkcode/fortrade.html");
addNonConformPage("/archive/hkcode/written_submissions_individual.html");
addNonConformPage("/archive/hkcode/written_submissions_organisation.html");
addNonConformPage("/archive/hkcode/written_submissions_petition.html");
addNonConformPage("/archive/hkcode/written_comments/petition/template1.html");
addNonConformPage(
  "/archive/hkcode/written_comments/petition/pet1_comments_indv.html");
addNonConformPage("/archive/other_languages/index.html");
//end hkcode


function isNonConform() {

  var url = window.location.href;
  var urls = url.split("/");
  var html_name = urls[urls.length - 1];
  var i = 0;
  var forCheckURLs = Array();

  var j = 0;
  for (i = 3; i < urls.length; i++) {
    forCheckURLs[j] = urls[i];
    j++;
  }
  var forCheckURL = forCheckURLs.join("/");

  for (i = 0; i < nonConformPages.length; i++) {

    if (forCheckURL.indexOf(nonConformPages[i]) != -1) {

      return true;
    }
  }
  return false;
}

function getWCAG() {
  var conform_alt =
    "Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0";
  var conform_img_path = "/common/images/wcag2AA.gif";
  var non_conform_alt = "Web Accessibility Conformance";
  var non_conform_img_path = "/common/images/non_wcag.gif";
  var non_conform_html = "/english/wcag/index.html";

  if (getLang() == 1) {
    conform_alt = "符合萬維網聯盟有關無障礙網頁設計指引中2A級別的要求";
    conform_img_path = "/common/images/wcag2AA.gif";
    non_conform_alt = "無障礙網頁守則";
    non_conform_img_path = "/common/images/non_wcag.gif";
    non_conform_html = "/tc_chi/wcag/index.html";
  }
  if (getLang() == 2) {
    conform_alt = "符合万维网联盟有关无障碍网页设计指引中2A级别的要求";
    conform_img_path = "/common/images/wcag2AA.gif";
    non_conform_alt = "无障碍网页守则";
    non_conform_img_path = "/common/images/non_wcag.gif";
    non_conform_html = "/sc_chi/wcag/index.html";
  }

  var wcag_conform =
    '<div id="div_wcag" style="text-align:right;"><a target="_blank" rel="external" href="http://www.w3.org/WAI/WCAG2AA-Conformance" title="' +
    conform_alt + '"><img height="31px" width="88px" src="' + conform_img_path +
    '" alt="' + conform_alt + '" border="0"></a></div>';
  var non_wcag_conform =
    '<div id="div_wcag" style="text-align:right;"><a href="' + non_conform_html +
    '" title="' + non_conform_alt + '"><img src="' + non_conform_img_path +
    '" alt="' + non_conform_alt + '" border="0" style=""></a></div>';

  if (isNonConform()) {
    return non_wcag_conform;
  } else {
    return wcag_conform;
  }
}

function showWCAG() {
  document.write(getWCAG());
}
