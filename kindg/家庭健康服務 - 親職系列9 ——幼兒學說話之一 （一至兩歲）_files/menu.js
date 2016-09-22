/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *the below is older version
 *
 *
 *
 *
 */
//gen menu ver. 4.0

level_1 = new Array('cindex.html','about_us', 'main_ser', 'centre_det', 'doc_br', 'fee_cha', 'health_info', 'mulit_med', 'reports', 'useful_link', 'contactus', 'sitemap', 'notice', 'search','policy');
//level 1

function genmenu(){leftMenu2();}
function sgenmenu(){
	//gentable(lev_div+'link','alt','img','target','layer');
	gentable(lev_div+'/cindex.html', '主頁', '01', '', '');
	gentable(lev_div+'about_us/about_us.html', '關於我們', '02', '', 'y');
	gentable(lev_div+'main_ser/main_ser.html', '主要服務範疇', '03', '', 'y');	
	gentable(lev_div+'centre_det/centre_det.html', '健康院/中心資料', '04', '', 'y');
	gentable(lev_div+'doc_br/doc_br.html', '須攜帶文件/表格', '05', '', '');
	gentable(lev_div+'fee_cha/fee_cha.html', '收費', '06', '', 'y');
	gentable(lev_div+'health_info/health_info.html', '健康資訊', '07', '', 'y');
	gentable(lev_div+'mulit_med/mulit_med.html', '視像教材', '08', '', 'y');		
	gentable(lev_div+'reports/reports.html', '刊物及報告/醫護專業', '09', '', '');
	gentable(lev_div+'useful_link/useful_link.html', '有用連結', '10', '', '');
	gentable('', '有用連結', '', '', '');
	gentable('', '聯絡我們', '', '', '');
	gentable('', '網站指南', '', '', '');
	gentable('', '重要告示', '', '', '');
	gentable('', '搜尋', '', '', '');
}


//end level 1


// level 2
function genlayer(){	
	//genlaytab(lev_div+'link', 'alt', 'img', 'no', 'parent no', 'target');

	for(l=0; l<layer.length; l++){
		if(layer[l] == "????"){			
			genlayerheader(l);
			genlaytab(lev_div+'about_us/welcome/welcome.html', '???', 'layer_about', '01',l ,'');
			genlaytab(lev_div+'about_us/vision/vision.html', '????????', 'layer_about', '02',l ,'');
			genlaytab(lev_div+'about_us/pref_ple/pref_ple.html', '????', 'layer_about', '03',l ,'');
			genlaytab(lev_div+'about_us/breast_policy/breast_policy.html', '??????', 'layer_about', '04',l ,'');
			genlaytab(lev_div+'hotlines/index.html', '??', 'layer_about', '05',l ,'');
			genlayerfooter();

		}else if(layer[l] == "??????"){			
			genlayerheader(l);
			genlaytab(lev_div+'main_ser/child_health/child_health.html', '????', 'layer_msa', '01',l ,'');
			genlaytab(lev_div+'main_ser/woman_health/woman_health.html', '????', 'layer_msa', '02',l ,'');
			genlayerfooter();

		}else if(layer[l] == "°·±d°|/¤¤¤ß¸ê®Æ"){
			genlayerheader(l);
			genlaytab(lev_div+'centre_det/maternal/maternal.html', '¥ÀÀ¦°·±d°|', 'layer_cd', '01',l ,'');
			genlaytab(lev_div+'centre_det/cent_pwhs/cent_pwhs.html', '´£¨Ñ°ü¤k°·±dªA°Èªº°·±d°|¡þ¤¤¤ß', 'layer_cd', '02',l ,'');
			genlaytab(lev_div+'centre_det/cent_pcss/cent_pcss.html', '´£¨Ñ¤l®cÀV´¶¬dªA°Èªº¥ÀÀ¦°·±d°|', 'layer_cd', '03',l ,'');
			genlaytab(lev_div+'centre_det/disable_fac/disable_fac.html', '³]¦³´Ý»Ù¤H¤h³]¬Iªº°·±d°|¡þ¤¤¤ß', 'layer_cd', '04',l ,'');
			genlayerfooter();

		}else if(layer[l] == "¦¬¶O"){
			genlayerheader(l);
			genlaytab(lev_div+'fee_cha/general_pub/general_pub.html', '¤@¯ë¥«¥Á', 'layer_fc', '01',l ,'');
			genlaytab(lev_div+'fee_cha/civil_ser/civil_ser.html', '¤½°È­û', 'layer_fc', '02',l ,'');
			genlayerfooter();

		}else if(layer[l] == "°·±d¸ê°T"){
			  //genlayerheader(l);
			  //genlaytab(lev_div+'health_info/class_life/class_life.html', '«ö¥Íªø¶¥¬q¹º¤À', 'layer_hi', '01',l ,'');
			  //genlaytab(lev_div+'health_info/class_topic/class_topic.html', '«ö¥DÃD¹º¤À', 'layer_hi', '02',l ,'');	
			  //genlayerfooter();

		}else if(layer[l] == "µø¹³±Ð§÷"){
			genlayerheader(l);
			genlaytab(lev_div+'mulit_med/vcd/vcd.html', 'µø¹³¥úºÐ', 'layer_mmr', '01',l ,'');
			genlaytab(lev_div+'mulit_med/api/api.html', '¼s§iµu¤ù', 'layer_mmr', '02',l ,'');			
			genlayerfooter();
		
		}
	}
}

//end level 2
