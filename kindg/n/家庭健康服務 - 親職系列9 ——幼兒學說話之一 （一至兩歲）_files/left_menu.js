 /* $id$ */
/* The JS for Left Menu */

/* CLASS: Menu Item
 * Params(desc): vText (Menu Text)
 * Type: String or Array of String (NOTE: Array for multiple lang., ref to getLang() for the index)
 *
 * Params(desc): vLink (Menu Link)
 * Type: String or Array of String (NOTE: Array for multiple lang., ref to getLang() for the index)
 */
function MenuItem(vText, vLink) {
	var o = this;
	if (typeof vText === 'string') {
		o.text = vText;
	} else if (vText instanceof Array) {
		o.text = vText[getLang()];
	}
	if (typeof vLink === 'string') {
		o.link = vLink;
	} else if (vLink instanceof Array) {
		o.link = vLink[getLang()];
	}
	o.children = null;
	o.addChild = function(oMenuItem) {
		if (oMenuItem instanceof MenuItem) {
			if (o.children === null) { //Lazy init
				o.children = new Array();
			}
			o.children.push(oMenuItem);
		}
	}
}

function getLang() { //0 = english, 1 = tranditional chinese, 2 = simplify chinese
	var pagelang;
	if (document.documentElement.lang == "zh-cn" || document.documentElement.lang ==
		"zh-CN") {
		pagelang = 2;
	} else if (document.documentElement.lang == "zh-hk" || document.documentElement
		.lang == "zh-HK") {
		pagelang = 1;
	} else {
		pagelang = 0;
	}
	return pagelang;
}

/**Left Menu**/
/** param: url : domain's root**/
/**        mode: null: any,
				 not null : specific page **/
function leftMenu2(url, mode) {

	var rootMenuItem = new MenuItem("", ""); // Only as a holder, not actual menu.
	var childMenuItem;
	var lang = ["/english/", "/tc_chi/", "/sc_chi/"];
	var urlPrefix = (url != null) ? url + lang[getLang()] : lev_div;
	mode = (mode == null) ? 0 : 1;

	// ## Declare the Left Menu with strcutre
	rootMenuItem.addChild(new MenuItem(["Home", "主頁", "主页"], urlPrefix));
	rootMenuItem.addChild(new MenuItem(["News and Events", "消息與活動", "消息与活动"],
		urlPrefix + "news"));

	childMenuItem = new MenuItem(["About Us", "關於我們", "关于我们"], urlPrefix +
		"about_us/about_us.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Welcome Message", "歡迎詞", "欢迎词"],
		urlPrefix + "about_us/welcome/welcome.html"));
	childMenuItem.addChild(new MenuItem(["Vision, Mission and Values",
		"理想、使命和信念", "理想，使命和信念"
	], urlPrefix + "about_us/vision/vision.html"));
	childMenuItem.addChild(new MenuItem(["Performance Pledge", "服務承諾", "服务承诺"],
		urlPrefix + "about_us/pref_ple/pref_ple.html"));

	childMenuItem = new MenuItem(["Main Service Areas", "主要服務範疇", "主要服务范畴"],
		urlPrefix + "main_ser/main_ser.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Child Health", "兒童健康", "儿童健康"],
		urlPrefix + "main_ser/child_health/child_health.html"));
	childMenuItem.addChild(new MenuItem(["Woman Health", "婦女健康", "妇女健康"],
		urlPrefix + "main_ser/woman_health/woman_health.html"));
	childMenuItem.addChild(new MenuItem(["Maternal Health ", "產前及產後服務",
		"产前及产后服务"
	], urlPrefix + "main_ser/process.html"));
	childMenuItem.addChild(new MenuItem(["Workshops/Support Groups Timetable",
		"研習班／互助小組<span>時間表</span> ", "研习班／互助小组<span>时间表</span>"
	], urlPrefix + "main_ser/workshop_timetable.html"));
	childMenuItem.addChild(new MenuItem(["Hotlines", "熱線", "热线"], urlPrefix +
		"hotlines/index.html"));

	childMenuItem = new MenuItem(["Centre Details", "健康院／中心資料", "健康院／中心资料"],
		urlPrefix + "centre_det/centre_det.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Maternal and Child Health Centres",
		"母嬰健康院", "母婴健康院"
	], urlPrefix + "centre_det/maternal/maternal.html"));
	childMenuItem.addChild(new MenuItem([
		"Centres Providing Woman Health Service", "提供婦女健康服務的<span>健康院／中心</span>",
		"提供妇女健康服务的<span>健康院／中心</span>"
	], urlPrefix + "centre_det/cent_pwhs/cent_pwhs.html"));
	childMenuItem.addChild(new MenuItem([
		"Centres Providing Cervical Screening Service", "提供子宮頸普查服務的<span>母嬰健康院</span>",
		"提供子宫颈普查服务的<span>母婴健康院</span>"
	], urlPrefix + "centre_det/cent_pcss/cent_pcss.html"));
	childMenuItem.addChild(new MenuItem(["Centres with Barrier free Facilites",
		"設有無障礙設施的<span>健康院／中心", "设有无障碍设施的<span>健康院／中心</span>"
	], urlPrefix + "centre_det/disable_fac/disable_fac.html"));

	rootMenuItem.addChild(new MenuItem(["Registration for Service", "登記服務",
		"登记服务"
	], urlPrefix + "doc_br/index.html"));

	childMenuItem = new MenuItem(["Fee and Charges", "收費", "收费"], urlPrefix +
		"fee_cha/fee_cha.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["For General Public", "一般市民", "一般市民"],
		urlPrefix + "fee_cha/general_pub/general_pub.html"));
	childMenuItem.addChild(new MenuItem(["For Civil Servants", "公務員", "公务员"],
		urlPrefix + "fee_cha/civil_ser/civil_ser.html"));

	childMenuItem = new MenuItem(["Breastfeeding", "母乳餵哺", "母乳喂哺"], urlPrefix +
		"breastfeeding");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Breastfeeding Policy", "母乳餵哺政策",
		"母乳喂哺政策"
	], urlPrefix + "breastfeeding/policy.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding-friendly Workplace",
		"母乳餵哺友善工作間", "母乳喂哺友善工作间"
	], urlPrefix + "breastfeeding/workplace.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding-friendly Community",
		"母乳餵哺社區", "母乳喂哺社区"
	], urlPrefix + "breastfeeding/community.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding Hotline", "母乳餵哺熱線",
		"母乳喂哺热线"
	], urlPrefix + "breastfeeding/hotline.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding Information", "母乳餵哺資訊",
			"母乳喂哺资讯"
		], urlPrefix +
		"health_info/class_topic/ct_child_health/ch_breastfeeding.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding Audio-visual Resources",
		"母乳餵哺視像資訊",
		"母乳喂哺视像资讯"
	], urlPrefix + "mulit_med/child_health.html#breastfeeding"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding Resources QR Code Index",
			"母乳餵哺資訊<span>二維條碼索引</span>",
			"母乳喂哺资讯<span>二维条码索引</span>"
		], urlPrefix +
		"mulit_med/breastfeeding/vid_index.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding FAQ", "母乳餵哺常見疑問",
		"母乳喂哺常见疑问"
	], urlPrefix + "health_info/faq/breastfeeding/index.html"));
	childMenuItem.addChild(new MenuItem(["Breastfeeding Poster", "母乳餵哺海報",
		"母乳喂哺海报"
	], urlPrefix + "health_info/poster/poster.html#breastfeeding"));

	childMenuItem = new MenuItem(["Health Information", "健康資訊", "健康资讯"],
		urlPrefix + "health_info/health_info.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Child Health", "兒童健康", "儿童健康"],
		urlPrefix + "health_info/class_life/child/child.html"));
	childMenuItem.addChild(new MenuItem(["Woman Health", "婦女健康", "妇女健康"],
		urlPrefix + "health_info/class_life/woman/woman.html"));
	childMenuItem.addChild(new MenuItem(["Classified by Topics", "按主題劃分",
		"按主题划分"
	], urlPrefix + "health_info/class_topic/class_topic.html"));
	childMenuItem.addChild(new MenuItem(["Health Information QR Code Index",
		"健康資訊<span>二維條碼索引</span>",
		"健康资讯<span>二维条码索引</span>"
	], urlPrefix + "health_info/qr_cat/index.html"));
	childMenuItem.addChild(new MenuItem(["FAQ", "常見疑問", "常见疑问"], urlPrefix +
		"health_info/faq/index.html"));
	childMenuItem.addChild(new MenuItem(["Incident of Lead in Drinking Water",
		"食水含鉛事件", "食水含铅事件"
	], ["http://www.chp.gov.hk/en/content/40434.html",
		"http://www.chp.gov.hk/tc/content/40434.html",
		"http://sc.chp.gov.hk/TuniS/www.chp.gov.hk/tc/content/40434.html"
	]));
	childMenuItem.addChild(new MenuItem([
			"Other Languages(हिन्दी, Bahasa Indonesia, नेपा ली, ภาษาไทย, اُردُو)",
			"其他語言（हिन्दी, Bahasa Indonesia, नेपा ली, ภาษาไทย, اُردُو）",
			"其他语言（हिन्दी, Bahasa Indonesia, नेपा ली, ภาษาไทย, اُردُو）"
		],
		urlPrefix + "other_languages/index.html"));
	childMenuItem.addChild(new MenuItem(["Poster", "海報", "海报"],
		urlPrefix + "health_info/poster/poster.html"));

	childMenuItem = new MenuItem(["Audio-Visual Resources", "視像資訊", "视像资讯"],
		urlPrefix + "mulit_med/mulit_med.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Breastfeeding ", "母乳餵哺", "母乳喂哺"],
		urlPrefix + "mulit_med/breastfeeding/index.html"));
	childMenuItem.addChild(new MenuItem(["Child health ", "兒童健康", "儿童健康"],
		urlPrefix + "mulit_med/child_health.html"));
	childMenuItem.addChild(new MenuItem(["Maternal and Woman health ",
		"產前/產後及<span>婦女健康</span>", "产前/产后及<span>妇女健康</span>"
	], urlPrefix + "mulit_med/maternal_and_woman_health.html"));
	childMenuItem.addChild(new MenuItem(["Positive Parenting", "正面親職",
		"正面亲职"
	], urlPrefix + "mulit_med/positive_parenting_programme/index.html"));
	childMenuItem.addChild(new MenuItem(["Audio-Visual Resources QR Code Index",
		"視像資訊<span>二維條碼索引</span>",
		"视像资讯<span>二维条码索引</span>"
	], urlPrefix + "mulit_med/qr_index/index.html"));
	childMenuItem.addChild(new MenuItem(["TV Announcement ", "電視宣傳短片", "电视宣传短片"],
		urlPrefix + "mulit_med/api/api.html"));

	childMenuItem = new MenuItem(["Parenting Corner", "親子平台 ", "亲子平台"],
		urlPrefix + "parenting_corner/index.html");
	rootMenuItem.addChild(childMenuItem);
	childMenuItem.addChild(new MenuItem(["Parent-Child e-link", "親子一點通",
		"亲子一点通"
	], [
		"http://parentelink.familyhealthservice.gov.hk/member/welcome_en.html",
		"http://parentelink.familyhealthservice.gov.hk/member/welcome.html",
		"http://parentelink.familyhealthservice.gov.hk/member/welcome_sc.html"
	]));
	childMenuItem.addChild(new MenuItem(["Parenting Made Easy", "親子易點明",
		"親子易點明"
	], ["http://ecourse.familyhealthservice.gov.hk/en/",
		"http://ecourse.familyhealthservice.gov.hk/",
		"http://ecourse.familyhealthservice.gov.hk/sc/"
	]));
	childMenuItem.addChild(new MenuItem(["Expert Tips", "專家話你知", "专家话你知"],
		urlPrefix + "parenting_corner/expert_tips/index.html"));

	rootMenuItem.addChild(new MenuItem(["Professional Corner", "專業平台", "专业平台"],
		urlPrefix + "health_professional/index.html"));
	rootMenuItem.addChild(new MenuItem(["Publications and Reports", "刊物及報告",
		"刊物及报告"
	], urlPrefix + "reports/index.html"));
	rootMenuItem.addChild(new MenuItem(["Hotlines", "熱線", "热线"], urlPrefix +
		"hotlines/index.html"));
	rootMenuItem.addChild(new MenuItem(["Download Forms", "下載表格", "下载表格"],
		urlPrefix + "doc_br/doc_br_forms.html"));
	rootMenuItem.addChild(new MenuItem(["Archive", "舊資料庫", "旧资料库"], urlPrefix +
		"archive/index.html"));
	rootMenuItem.addChild(new MenuItem(["Useful Links", "有用連結", "有用连结"],
		urlPrefix + "useful_link/useful_link.html"));

	// Generate the Menu
	if (mode == 0) {
		document.writeln('<div>' + $('<div>').append(genMenuHTML(rootMenuItem, 0,
			'')).html() + '</div>');
	} else {
		return '<ul class="sf-menu sf-vertical">' + genMenuHTML(rootMenuItem, 0,
			'search').html() + '</ul>';
	}
}

function genMenuHTML(oMenu, iLvl, modpage) {
	if (oMenu === undefined || oMenu === null) return;
	var m = null;
	if (iLvl > 0) {
		m = $('<span>').html(oMenu.text);
		if (modpage == 'search') {
			m = $('<a>').attr("href", oMenu.link).addClass("menu_lv" + iLvl).addClass(
				"menuLink").append(m);
		} else {
			m = $('<a>').attr("href", oMenu.link).addClass("menu_lv" + iLvl).append(
				m);
		}
		m = $('<li>').addClass('sf-menu in-active').append(m);
	}

	if (oMenu.children != null && oMenu.children.length > 0) {
		var n = $('<ul>').addClass("sf-menu sf-vertical");
		for (var k = 0; k < oMenu.children.length; k++) {
			n.append(genMenuHTML(oMenu.children[k], iLvl + 1));
		}
		if (m == null) {
			m = n;
		} else {
			m = m.append(n);
		}
	}
	return m;
}

//config the serach page CSS
function cssSearch() {
	$("#dmnSpMidLeftLeft").css("width", "181px");
	$("#dmnSpMidLeft").css("width", "575px");
	$(".deptSearchBarHeader").css("width", "575px");
	$(".errorMsgPanel").css("padding-left", "15px");
	$("#footerArea.dept1").css({
		"padding-left": "10px",
		"width": "560px"
	});
	$("#dmnSpFooter.dept1").css({
		"width": "560px",
		"padding-left": "10px",
		"float": "none"
	});
	$(".dmnSpLowLeft").css({
		"width": "auto"
	});
	$(".sf-menu a").each(function() {
		$(this).css({
			"font-size": "0.9em"
		});
		$(this).hover(function() {
			$(this).css({
				"text-decoration": "underline"
			});
		}, function() {
			$(this).css({
				"text-decoration": "none"
			});
		});
	});
}
