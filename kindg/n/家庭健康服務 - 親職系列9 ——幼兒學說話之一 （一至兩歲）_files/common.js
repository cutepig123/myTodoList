 /* $Id: common.js 7018 2016-09-22 08:37:28Z maxtsui $ */

/* ##### Global Var here ##### */
var printFriendlyPopup; /* Instance of Print Friendly Popup */
var isUsingNewDwTemplate = false;

var pathSectionTextMap = {

	//[CAUTION] Order in the array list is VERY IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	// 5 other languages
	'other_languages': ['Other Languages', '其他語言', '其他语言'],
	//////////////////////////////////////////////////////////////
	'other_languages/bahasa_indonesia': ['Bahasa Indonesia (Indonesia)',
		'Bahasa Indonesia (印尼文)', 'Bahasa Indonesia (印尼文)'
	],
	'other_languages/hindi': ['हिन्दी (Hindi)', 'हिन्दी (印度文)', 'हिन्दी (印度文)'],
	'other_languages/nepali': ['नेपाली (Nepali)', 'नेपाली (尼泊爾文)',
		'नेपाली (尼泊尔文)'
	],
	'other_languages/thai': ['ไทย (Thai)', 'ไทย (泰文)', 'ไทย (泰文)'],
	'other_languages/urdu': ['اردو (Urdu)', 'اردو (巴基斯坦文)', 'اردو (巴基斯坦文)'],
	/////////////////////hindi////////////////////////////////////
	'other_languages/hindi/child_health': ['शिशु स्‍वास्‍थ्‍य (Child Health)',
		'शिशु स्‍वास्‍थ्‍य （兒童健康）', 'शिशु स्‍वास्‍थ्‍य （儿童健康）'
	],
	'other_languages/hindi/info_on_FHS': [
		'परिवार स्वास्थ्य सेवा पर जानकारी (Information on FHS)',
		'परिवार स्वास्थ्य सेवा पर जानकारी （家庭健康服務資訊）',
		'परिवार स्वास्थ्य सेवा पर जानकारी （家庭健康服务资讯）'
	],
	'other_languages/hindi/women_health': ['महिला स्‍वास्‍थ्‍य (Women Health)',
		'महिला स्‍वास्‍थ्‍य （婦女健康）', 'महिला स्‍वास्‍थ्‍य （妇女健康）'
	],

	'other_languages/hindi/child_health/breastfeeding_nutrition': [
		'स्‍तनपान, पोषण (Breastfeeding, Nutrition)', 'स्‍तनपान, पोषण （母乳餵哺、營養）',
		'स्‍तनपान, पोषण （母乳喂哺、营养）'
	],
	'other_languages/hindi/child_health/child_development': [
		'बाल विकास (Child Development)', 'बाल विकास （兒童發展）', 'बाल विकास （儿童发展）'
	],
	'other_languages/hindi/child_health/immunization': ['टीकाकरण (Immunisation)',
		'टीकाकरण （免疫接種）', 'टीकाकरण （免疫接种）'
	],
	'other_languages/hindi/child_health/homes_safety': [
		'घर की सुरक्ष (Home Safety)',
		'घर की सुरक्ष （家居安全）', 'घर की सुरक्ष （家居安全）'
	],
	'other_languages/hindi/child_health/new_born': [
		'नवजात शिशु की देखभाल (Newborn Care)', 'नवजात शिशु की देखभाल （新生嬰兒護理）',
		'नवजात शिशु की देखभाल （新生婴儿护理）'
	],
	'other_languages/hindi/child_health/parenting': ['परवरिश (Parenting)',
		'परवरिश （親職教育）', 'परवरिश （亲职教育）'
	],

	'other_languages/hindi/women_health/antenatal_care': [
		'प्रसवपूर्व देखरेख (Antenatal Care)', 'प्रसवपूर्व देखरेख （產前護理）',
		'प्रसवपूर्व देखरेख （产前护理）'
	],
	'other_languages/hindi/women_health/cervical_screening': [
		'सर्वाइकल स्क्रिनिंग (Cervical Screening)', 'सर्वाइकल स्क्रिनिंग （子宮頸普查）',
		'सर्वाइकल स्क्रिनिंग （子宫颈普查）'
	],
	'other_languages/hindi/women_health/family_planning_and_infertility': [
		'परिवार नियोजन और बांझपन (Family Planning and Infertility)',
		'परिवार नियोजन और बांझपन  （家庭計劃）', 'परिवार नियोजन और बांझपन （家庭计划）'
	],
	'other_languages/hindi/women_health/postnatal_care': [
		'प्रसवोपरांत देखरेख (Postnatal Care)', 'प्रसवोपरांत देखरेख （產後護理）',
		'प्रसवोपरांत देखरेख （产后护理）'
	],
	'other_languages/hindi/women_health/women_health': [
		'महिला स्‍वास्‍थ्‍य (Women Health)', 'महिला स्‍वास्‍थ्‍य （婦女健康）',
		'महिला स्‍वास्‍थ्‍य （妇女健康）'
	],
	/////////////////////bahasa indonesia/////////////////////////
	'other_languages/bahasa_indonesia/child_health': [
		'Kesehatan Anak (Child Health)', 'Kesehatan Anak （兒童健康）',
		'Kesehatan Anak （儿童健康）'
	],
	'other_languages/bahasa_indonesia/info_on_FHS': [
		'Informasi mengenai Layanan Kesehatan Keluarga (Information on FHS)',
		'Informasi mengenai Layanan Kesehatan Keluarga （家庭健康服務資訊）',
		'Informasi mengenai Layanan Kesehatan Keluarga （家庭健康服务资讯）'
	],
	'other_languages/bahasa_indonesia/women_health': [
		'Kesehatan Wanita （Women Health)', 'Kesehatan Wanita （婦女健康）',
		'Kesehatan Wanita （妇女健康）'
	],

	'other_languages/bahasa_indonesia/child_health/breastfeeding_nutrition': [
		'Pemberian ASI, Nutrisi / Gizi (Breastfeeding, Nutrition)',
		'Pemberian ASI, Nutrisi / Gizi （母乳餵哺、營養）',
		'Pemberian ASI, Nutrisi / Gizi （母乳喂哺、营养）'
	],
	'other_languages/bahasa_indonesia/child_health/child_development': [
		'Perkembangan Anak (Child Development)', 'Perkembangan Anak （兒童發展）',
		'Perkembangan Anak （儿童发展）'
	],
	'other_languages/bahasa_indonesia/child_health/immunization': [
		'Imunisasi (Immunization)', 'Imunisasi （免疫接種）', 'Imunisasi （免疫接种）'
	],
	'other_languages/bahasa_indonesia/child_health/homes_safety': [
		'Keamanan Rumah (Home Safety)',
		'Keamanan Rumah（家居安全）', 'Keamanan Rumah（家居安全）'
	],
	'other_languages/bahasa_indonesia/child_health/new_born': [
		'Perawatan Bayi Baru Lahir (Newborn Care)',
		'Perawatan Bayi Baru Lahir （新生嬰兒護理）', 'Perawatan Bayi Baru Lahir （新生婴儿护理）'
	],
	'other_languages/bahasa_indonesia/child_health/parenting': [
		'Pengasuhan (Parenting)', 'Pengasuhan （親職教育）', 'Pengasuhan （亲职教育）'
	],

	'other_languages/bahasa_indonesia/women_health/antenatal_care': [
		'Perawatan Sebelum Melahirkan (Antenatal) (Antenatal Care)',
		'Perawatan Sebelum Melahirkan (Antenatal) （產前護理）',
		'Perawatan Sebelum Melahirkan (Antenatal) （产前护理）'
	],
	'other_languages/bahasa_indonesia/women_health/cervical_screening': [
		'Pemeriksaan Serviks (Mulut Rahim) (Cervical Screening)',
		'Pemeriksaan Serviks (Mulut Rahim) （子宮頸普查）',
		'Pemeriksaan Serviks (Mulut Rahim) （子宫颈普查）'
	],
	'other_languages/bahasa_indonesia/women_health/family_planning_and_infertility': [
		'Keluarga Berencana dan Ketidaksuburan (Family Planning and Infertility)',
		'Keluarga Berencana dan Ketidaksuburan （家庭計劃）',
		'Keluarga Berencana dan Ketidaksuburan （家庭计划）'
	],
	'other_languages/bahasa_indonesia/women_health/postnatal_care': [
		'Perawatan Pasca Melahirkan (Postnatal) (Postnatal Care)',
		'Perawatan Pasca Melahirkan (Postnatal) （產後護理）',
		'Perawatan Pasca Melahirkan (Postnatal) （产后护理）'
	],
	'other_languages/bahasa_indonesia/women_health/women_health': [
		'Kesehatan Wanita (Women Health)', 'Kesehatan Wanita （婦女健康）',
		'Kesehatan Wanita （妇女健康）'
	],
	/////////////////////nepali///////////////////////////////////
	'other_languages/nepali/child_health': ['शिशु स्वास्थ्य (Child Health)',
		'शिशु स्वास्थ्य （兒童健康）', 'शिशु स्वास्थ्य （儿童健康）'
	],
	'other_languages/nepali/info_on_FHS': [
		'परिवार स्वास्थ्य सेवाबारे जानकारी (Information on FHS)',
		'परिवार स्वास्थ्य सेवाबारे जानकारी （家庭健康服務資訊）',
		'परिवार स्वास्थ्य सेवाबारे जानकारी （家庭健康服务资讯）'
	],
	'other_languages/nepali/women_health': ['महिला स्वास्थ्य （Women Health)',
		'महिला स्वास्थ्य （婦女健康）', 'महिला स्वास्थ्य （妇女健康）'
	],

	'other_languages/nepali/child_health/breastfeeding_nutrition': [
		'स्तनपान, पोषण (Breastfeeding, Nutrition)', 'स्तनपान, पोषण （母乳餵哺、營養）',
		'स्तनपान, पोषण （母乳喂哺、营养）'
	],
	'other_languages/nepali/child_health/child_development': [
		'शिशु विकास (Child Development)', 'शिशु विकास （兒童發展）', 'शिशु विकास （儿童发展）'
	],
	'other_languages/nepali/child_health/immunization': [
		'खोपकरण (रोग प्रतिरक्षण) (Immunization)', 'खोपकरण (रोग प्रतिरक्षण) （免疫接種）',
		'खोपकरण (रोग प्रतिरक्षण) （免疫接种）'
	],
	'other_languages/nepali/child_health/new_born': [
		'नवजातको हेरचाह (Newborn Care)', 'नवजातको हेरचाह （新生嬰兒護理）',
		'नवजातको हेरचाह （新生婴儿护理）'
	],
	'other_languages/nepali/child_health/homes_safety': [
		'गृह सुरक्ष (Home Safety)',
		'गृह सुरक्ष（家居安全）', 'गृह सुरक्ष（家居安全）'
	],
	'other_languages/nepali/child_health/parenting': ['पालन-पोषण (Parenting)',
		'पालन-पोषण （親職教育）', 'पालन-पोषण （亲职教育）'
	],

	'other_languages/nepali/women_health/antenatal_care': [
		'प्रसवपूर्वको हेरचाह (Antenatal Care)', 'प्रसवपूर्वको हेरचाह （產前護理）',
		'प्रसवपूर्वको हेरचाह （产前护理）'
	],
	'other_languages/nepali/women_health/cervical_screening': [
		'सर्वाइकल स्क्रीनिङ (Cervical Screening)', 'सर्वाइकल स्क्रीनिङ （子宮頸普查）',
		'सर्वाइकल स्क्रीनिङ （子宫颈普查）'
	],
	'other_languages/nepali/women_health/family_planning_and_infertility': [
		'परिवार नियोजन र बाँझोपन (Family Planning and Infertility)',
		'परिवार नियोजन र बाँझोपन （家庭計劃）', 'परिवार नियोजन र बाँझोपन （家庭计划）'
	],
	'other_languages/nepali/women_health/postnatal_care': [
		'प्रसवपश्चातको हेरचाह (Postnatal Care)', 'प्रसवपश्चातको हेरचाह （產後護理）',
		'प्रसवपश्चातको हेरचाह （产后护理）'
	],
	'other_languages/nepali/women_health/women_health': [
		'महिला स्वास्थ्य (Women Health)', 'महिला स्वास्थ्य （婦女健康）',
		'महिला स्वास्थ्य （妇女健康）'
	],
	/////////////////////thai/////////////////////////////////////
	'other_languages/thai/child_health': ['สุขภาพเด็ก (Child Health)',
		'สุขภาพเด็ก （兒童健康）', 'สุขภาพเด็ก （儿童健康）'
	],
	'other_languages/thai/info_on_FHS': [
		'ข้อมูลเกี่ยวกับบริการสุขภาพครอบครัว (Information on FHS)',
		'ข้อมูลเกี่ยวกับบริการสุขภาพครอบครัว （家庭健康服務資訊）',
		'ข้อมูลเกี่ยวกับบริการสุขภาพครอบครัว （家庭健康服务资讯）'
	],
	'other_languages/thai/women_health': ['สุขภาพของสตรี （Women Health)',
		'สุขภาพของสตรี （婦女健康）', 'สุขภาพของสตรี （妇女健康）'
	],

	'other_languages/thai/child_health/breastfeeding_nutrition': [
		'การให้นมด้วยน้ำนมแม่, สารอาหาร (Breastfeeding, Nutrition)',
		'การให้นมด้วยน้ำนมแม่, สารอาหาร （母乳餵哺、營養）',
		'การให้นมด้วยน้ำนมแม่, สารอาหาร （母乳喂哺、营养）'
	],
	'other_languages/thai/child_health/child_development': [
		'พัฒนาการของเด็ก (Child Development)', 'พัฒนาการของเด็ก （兒童發展）',
		'พัฒนาการของเด็ก （儿童发展）'
	],
	'other_languages/thai/child_health/immunization': [
		'การสร้างภูมิคุ้มกัน (Immunization)', 'การสร้างภูมิคุ้มกัน （免疫接種）',
		'การสร้างภูมิคุ้มกัน （免疫接种）'
	],
	'other_languages/thai/child_health/homes_safety': [
		'ความปลอดภัยที่บ้าน (Home Safety)',
		'ความปลอดภัยที่บ้าน（家居安全）', 'ความปลอดภัยที่บ้าน（家居安全）'
	],
	'other_languages/thai/child_health/new_born': [
		'การดูแลทารกแรกเกิด (Newborn Care)', 'การดูแลทารกแรกเกิด （新生嬰兒護理）',
		'การดูแลทารกแรกเกิด （新生婴儿护理）'
	],
	'other_languages/thai/child_health/parenting': ['การเลี้ยงดูบุตร (Parenting)',
		'การเลี้ยงดูบุตร （親職教育）', 'การเลี้ยงดูบุตร （亲职教育）'
	],

	'other_languages/thai/women_health/antenatal_care': [
		'การดูแลก่อนคลอด (Antenatal Care)', 'การดูแลก่อนคลอด （產前護理）',
		'การดูแลก่อนคลอด （产前护理）'
	],
	'other_languages/thai/women_health/cervical_screening': [
		'การตรวจสอบปากมดลูก (Cervical Screening)', 'การตรวจสอบปากมดลูก （子宮頸普查）',
		'การตรวจสอบปากมดลูก （子宫颈普查）'
	],
	'other_languages/thai/women_health/family_planning_and_infertility': [
		'การวางแผนครอบครัวและภาวะไม่เจริญพันธุ์ (Family Planning and Infertility)',
		'การวางแผนครอบครัวและภาวะไม่เจริญพันธุ์ （家庭計劃）',
		'การวางแผนครอบครัวและภาวะไม่เจริญพันธุ์ （家庭计划）'
	],
	'other_languages/thai/women_health/postnatal_care': [
		'การดูแลหลังคลอด (Postnatal Care)', 'การดูแลหลังคลอด （產後護理）',
		'การดูแลหลังคลอด （产后护理）'
	],
	'other_languages/thai/women_health/women_health': [
		'สุขภาพของสตรี (Women Health)', 'สุขภาพของสตรี （婦女健康）',
		'สุขภาพของสตรี （妇女健康）'
	],
	/////////////////////urdu/////////////////////////////////////
	'other_languages/urdu/child_health': ['بچہ کی صحت (Child Health)',
		'بچہ کی صحت （兒童健康）', 'بچہ کی صحت （儿童健康）'
	],
	'other_languages/urdu/info_on_FHS': [
		'خاندان كی صحت كی خدمات كے بارے میں معلومات (Information on FHS)',
		'خاندان كی صحت كی خدمات كے بارے میں معلومات （家庭健康服務資訊）',
		'خاندان كی صحت كی خدمات كے بارے میں معلومات （家庭健康服务资讯）'
	],
	'other_languages/urdu/women_health': ['عورت کی صحت (Women Health)',
		'عورت کی صحت （婦女健康）', 'عورت کی صحت （妇女健康）'
	],

	'other_languages/urdu/child_health/breastfeeding_nutrition': [
		'ماں کا دودھ پلانا, غذا (Breastfeeding, Nutrition)',
		'ماں کا دودھ پلانا, غذا （母乳餵哺、營養）', 'ماں کا دودھ پلانا, غذا （母乳喂哺、营养）'
	],
	'other_languages/urdu/child_health/child_development': [
		'بچہ کی نشوونما (Child Development)', 'بچہ کی نشوونما （兒童發展）',
		'بچہ کی نشوونما （儿童发展）'
	],
	'other_languages/urdu/child_health/immunization': ['ٹیکاکاری (Immunization)',
		'ٹیکاکاری （免疫接種）', 'ٹیکاکاری （免疫接种）'
	],
	'other_languages/urdu/child_health/homes_safety': [
		'گھریلو حفاظت (Home Safety)',
		'گھریلو حفاظت（家居安全）', 'گھریلو حفاظت（家居安全）'
	],
	'other_languages/urdu/child_health/new_born': [
		'نوزائیدہ کی دیکھ بھال (Newborn Care)', 'نوزائیدہ کی دیکھ بھال （新生嬰兒護理）',
		'نوزائیدہ کی دیکھ بھال （新生婴儿护理）'
	],
	'other_languages/urdu/child_health/parenting': [
		'والدانہ دیکھ بھال (Parenting)', 'والدانہ دیکھ بھال （親職教育）',
		'والدانہ دیکھ بھال （亲职教育）'
	],

	'other_languages/urdu/women_health/antenatal_care': [
		'پیدائش سے قبل دیکھ بھال (Antenatal Care)',
		'پیدائش سے قبل دیکھ بھال （產前護理）', 'پیدائش سے قبل دیکھ بھال （产前护理）'
	],
	'other_languages/urdu/women_health/cervical_screening': [
		'رحم کی گردن کا معائنہ (Cervical Screening)',
		'رحم کی گردن کا معائنہ （子宮頸普查）', 'رحم کی گردن کا معائنہ （子宫颈普查）'
	],
	'other_languages/urdu/women_health/family_planning_and_infertility': [
		'خاندانی منصوبہ بندی اور بانجھ پن (Family Planning and Infertility)',
		'خاندانی منصوبہ بندی اور بانجھ پن （家庭計劃）',
		'خاندانی منصوبہ بندی اور بانجھ پن （家庭计划）'
	],
	'other_languages/urdu/women_health/postnatal_care': [
		'پیدائش کے بعد دیکھ بھال (Postnatal Care)',
		'پیدائش کے بعد دیکھ بھال （產後護理）', 'پیدائش کے بعد دیکھ بھال （产后护理）'
	],
	'other_languages/urdu/women_health/women_health': [
		'عورت کی صحت (Women Health)', 'عورت کی صحت （婦女健康）', 'عورت کی صحت （妇女健康）'
	],
	//////////////////////////////////////////////////////////////


	//Path-key: [Eng,TC,SC]
	'wcag': ['Web Accessibility Conformance', '無障礙網頁守則', '无障碍网页守则'],
	'hkcode': ['Hong Kong Code', '香港守則', '香港守则'],
	'MCHconference2012': ['Maternal and Child Health Conference 2012',
		'母嬰健康會議2012', '母婴健康会议2012'
	],
	'class_life': ['Classified by Life Stages', '按生長階段劃分', '按生长阶段划分'],
	'child': ['Child', '兒童健康', '儿童健康'],
	'woman': ['Woman', '婦女健康', '妇女健康'],
	'faq': ['FAQ', '常見疑問', '常见疑问'],
	'child_health': ['Child Health', '兒童健康', '儿童健康'],
	'breastfeeding': ['Breastfeeding', '母乳餵哺', '母乳喂哺'],
	'women_health': ['Women Health', '婦女健康', '妇女健康'],
	'mulit_med': ['Audio-Visual Resources', '視像資訊', '视像资讯'],
	'health_info': ['Health Information', '健康資訊', '健康资讯'],
	'health_edu': ['Health Education Material', '健康資訊資料', '健康资讯资料'],
	'poster': ['Poster', '海報', '海报'],
	'archive': ['Archive', '舊資料庫', '旧资料库'],
	'OMP_eNewsletter': [
		'\'Parent Child e-Link\' e-newsletter for Professionals',
		'「親子一點通」親子e-雜誌專業人士系列', '「亲子一点通」亲子e-杂志专业人士系列'
	],
	'cervical_screening': ['Cervical Screening', '子宮頸普查服務', '子宫颈普查服务'],
	'parenting_corner': ['Parenting Corner', '親子平台', '亲子平台'],
	'14732': [
		'7-day Healthy Meal Planning Guide for 6 to 24 month old children',
		'6-24 個月嬰幼兒 — 7 日飲食全攻略', '6-24 个月婴幼儿 — 7 日饮食全攻略'
	],
	'14722': [
		'Healthy Eating for 6 to 24 month old Children (2) Moving On (6 – 12 months)',
		'6至24個月嬰幼兒健康飲食 (2) 進展篇（上）(6-12個月)', '6至24个月婴幼儿健康饮食 (2) 进展篇（上）(6-12个月)'
	],
	'16301': [
		'Healthy Eating for 6 to 24 month old children (3) Ready to go (12- 24 months)',
		'6至24個月嬰幼兒健康飲食 (3) 進展篇（下）(12-24個月)',
		'6至24个月婴幼儿健康饮食 (3) 进展篇（下）(12-24个月)'
	],
	'bf_promo_tv_prog_2014': ['Breastfeeding promotion TV programme',
		'電視短片: BB蜜乳', '电视短片: BB蜜乳'
	],
	'recommend_to_parents': [
		'Recommendation on Formula Milk Feeding for Young Children',
		'有關寶寶飲用配方奶(嬰幼兒奶粉)的建議', '有关宝宝饮用配方奶(婴幼儿奶粉)的建议'
	],
	'policy': ['Privacy Policy', '私隱政策', '私隐政策'],
	'news': ['News & Events', '消息與活動', '消息与活动'],
	'qr_cat': ['Health Information QR Code Index', '健康資訊二維條碼索引', '健康资讯二维条码索引'],
	'qr_index': ['Audio-Visual Resources QR Code Index', '視像資訊二維條碼索引', '视像资讯二维条码索引']
};

// Browser version identification
navigator.sayswho = (function() {
	var ua = navigator.userAgent,
		tem,
		M = ua.match(
			/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
		return 'IE ' + (tem[1] || '');
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
	return M.join(' ');
})();

var isMSIE = (navigator.sayswho.match(/IE/) != null);
var MSIE_VER = parseInt((isMSIE) ? navigator.sayswho.match(/[0-9]+/gm)[0] : 0);

/* ##### Common functions definition ##### */

/* Get current URL basepath */
function getCurUrlBasepath() {
	var pname = window.location.pathname;
	if (pname.lastIndexOf('/') == (pname.length - 1)) {
		return pname;
	} else {
		return pname.substring(0, pname.lastIndexOf('/') + 1);
	}
}


/* Styling table withing content section */
function contentTableStyler() {
	// Styling Odd-even rows
	$("#content table.odd-even-rows tr:even").addClass("even");
	$("#content table.odd-even-rows tr:odd").addClass("odd");
}

/* External link handler */
function externalLinksHandler() {
	var langCode = getLang();
	var linkAltTxt = "external link"; //Default EN
	switch (langCode) {
		case 1: //TC
			linkAltTxt = "外部鏈接";
			break;
		case 2: //SC
			linkAltTxt = "外部链接";
			break;
	};

	$('#content a').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).each(function(index, element) {
		externalLinksHandler_proc(this, linkAltTxt);
	});

	/* Index/Home Page - Highlighted message */
	$('.content-wrapper #highlighted-message .content a').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).each(function(index, element) {
		externalLinksHandler_proc(this, linkAltTxt);
	});

	/* Index/Home Page - News and Event */
	$('.content-wrapper #news .content a').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).each(function(index, element) {
		externalLinksHandler_proc(this, linkAltTxt);
	});

	/* Index/Home Page - Sitemap */
	$('#site_map a').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).each(function(index, element) {
		externalLinksHandler_proc(this, linkAltTxt);
	});
	/* Index/Left Menu */
	$('.leftmenu a').filter(function() {
		return this.hostname && this.hostname !== location.hostname;
	}).each(function(index, element) {
		var obj = $(this).find('span');
		externalLinksHandler_proc(this, linkAltTxt);
	});
}

function externalLinksHandler_proc(linkObject, linkAltTxt) {
	$(linkObject).attr('target', '_blank');
	var title = $(linkObject).attr('title');
	if (!$(linkObject).hasClass("no-extlink-icon")) {
		if (title != null) {
			title = linkAltTxt + ' - ' + title;
		} else {
			title = linkAltTxt;
		}
		if ($(linkObject).closest('li').hasClass('sf-menu')) {

			$(linkObject).append(
				'<img style="margin-left:5px;" src="/common/images/extlink.png" alt="external link"/>'
			);
		} else {
			$(linkObject).after(
				'<img style="margin-left:5px;" src="/common/images/extlink.png" alt="external link"/>'
			);
		}
	}
	$(linkObject).attr('title', title);
}

/* PDF link handler */
function pdfLinksHandler() {
	// TODO: To be finalized by vendor
	//get different language link
	$('a.herf2tc').attr('href', getchglang('tc'));
	$('a.herf2sc').attr('href', getchglang('sc'));
	$('a.herf2en').attr('href', getchglang('en'));

	// check the file size
	var lang = getLang();
	var text = new Array();
	text[0] = "Download image version";
	text[1] = "下載圖像版";
	text[2] = "下载图像版";
	var crossSiteLink = new Array();
	crossSiteLink[0] = ""; //"(external link)";
	crossSiteLink[1] = ""; //"（外 部 鏈 接）";
	crossSiteLink[2] = ""; //"（外 部 链 接）";
	/*var fail404 = new Array();
		fail404[0] = "()";
		fail404[1] = "（外 部 鏈 接）";
		fail404[2] = "（外 部 链 接）";*/

	// END-TODO
	$('a[data-filesizecheck!="false"][href$=".pdf"]').each(function() {
		var pp = $(this);
		var url = this.href;
		var request;
		request = $.ajax({
			type: "HEAD",
			url: $(this).attr("href"),
			//crossDomain  : true,
			//dataType: 'jsonp',
			error: function(xmlHttpRequest, error) {
				//console.log('file: '+url+' does not host at this domain');
				/*pp.text(text[lang]);*/
				pp.append(" " + crossSiteLink[lang]);
			},
			success: function() {
				var fsize = request.getResponseHeader("Content-Length") /
					1048576;
				if (pp.hasClass("pdf")) {
					pp.removeClass("pdf");
				}

				var pdficon = $(
					"<span class='pdf-icon'><img src='/common/images/pdf.gif' alt=''></span>"
				);
				pp.prepend(pdficon);

				if (fsize == 0) fsize = 0.01; // For better human reading.
				var pdftext = $("<span class='pdf-text'></span>");
				pdftext.append("(PDF, " + fsize.toFixed(2) + "MB)");

				pp.append(" ");
				pp.append(pdftext).attr('target', '_blank');

				//pp.addClass("pdf");
			}
		});
	}); //end of file size checker
}


/* Sub-navigation Topbar handler */
function subNavTopbarHandler() {
	// Handle rollover effect for LI (with rounded corner)
	var topbar = $("ul.sub-nav-topbar");
	if (topbar.length) {
		topbar.find("li").each(function(i, o) {
			$(this).hover(
				function() {
					$(this).addClass("rollover");
				},
				function() {
					$(this).removeClass("rollover");
				}
			);
		});
	}
	// Placement correction - make sure it is just under content, and not under title
	$("#content").prepend(topbar);
}


/* Lookup the section text by given path and lang code */
function getPathSectionText(pathkey, langCode) {
	if (pathSectionTextMap[pathkey] === undefined || pathSectionTextMap[pathkey]
		[
			langCode
		] === undefined)
		return "";
	else return pathSectionTextMap[pathkey][langCode];
}

/*
Get LeftMenu Text by link part and menu depth
param: linkpart (e.g. news)
param: depth - 0=first level, 1=2nd level
return Text in the menu or empty string if not found.
*/
function getLMenuText(linkpart, depth) {
	var node = 'ul.sf-menu>li';
	for (var j = 0; j < depth; j++) {
		node += '>ul>li';
	}
	var menuObj = $(node + '>a');
	for (var i = 0; i < menuObj.length; ++i) {
		var menuLink = $(menuObj[i]).attr('href').split('/')[depth + 2];
		if (menuLink !== 'undefined' && menuLink == linkpart) {
			return $('span', $(menuObj[i])).text();
		}
	}
	return "";
}


/*
Gen Breadcrum, only generate if empty container (i.e. .nav) is found.
*/
function getBreadcrumb() {
	var navHolder = $('.content-wrapper .nav');
	if (navHolder.length == 0 || navHolder.html() != "") {
		return; //container not found or not empty - ignore generation
	}
	var langId = getLang();
	var paths = location.pathname.split("/");
	var basePath = '/' + getLangDir();
	var breamcrum = "";
	var bcNodeText = "";
	paths = paths.splice(2, paths.length - 3);
	for (var i = 0; i < paths.length; ++i) {
		var linkPath = basePath;
		for (var j = 0; j <= i; ++j) {
			linkPath += '/' + paths[j];
		}
		// handle other languages' folder ///
		if (paths[0] == "other_languages") {
			var temp_paths = paths[i];
			for (var j = i - 1; j >= 0; --j) {
				temp_paths = paths[j] + '/' + temp_paths;
			}
			bcNodeText = getPathSectionText(temp_paths, langId);
		} else {
			bcNodeText = getPathSectionText(paths[i], langId);
		}
		/////////////////////////////////////

		if (bcNodeText == "") {
			bcNodeText = getLMenuText(paths[i], i);
		}
		if (bcNodeText == "") {
			bcNodeText = "UNDEFINED";
		}
		var finalLink = linkPath + '/' + 'index.html';
		var optionalLink = linkPath + '/' + paths[i] + '.html';
		var bcNodeId = 'nav-bc' + i;
		var bcNode = $('<a href="' + finalLink + '" title="' + bcNodeText + '">' +
			bcNodeText + '</a>');
		bcNode.attr('id', bcNodeId);
		$.ajax({
			type: 'HEAD',
			url: finalLink,
			success: function() {
				//$('.nav a[href="'+this.url+'"]').css('background-color','green');
			},
			error: function() {
				var urlArr = this.url.split('/');
				var theURL = this.url;

				if (isMSIE && MSIE_VER < 8) {
					theURL = 'http://' + document.domain + this.url;
				}
				$('.nav a[href="' + theURL + '"]').attr('href', theURL.replace(
					'index',
					urlArr[urlArr.length - 2]));
			}
		});
		navHolder.append(bcNode);
		if (i < paths.length - 1) {
			navHolder.append(' &gt;&gt; ');
		}
	}
}

/* Get the language path from URL */
function getLangDir() {
	return location.pathname.split("/")[1];
}

/* Get the main section path from URL */
function getMainSectionDir() {
	return location.pathname.split("/")[2];
}

/* Get the main section image path */
function getMainSectImgPath(imgId) {
	var msect = getMainSectionDir();
	// Special path handling
	if (msect == 'news') {
		msect = 'news_event';
	} else if (msect == 'pme') {
		msect = 'eparenting';
	} else if (msect == 'report') {
		msect = 'publications_and_reports';
	} else if (msect == 'mulit_med') {
		msect = 'multi_med';
	}
	// Special imgId conversion

	return '/' + getLangDir() + '/images/' + msect + '/' + msect + '_' + imgId +
		'.jpg';
}

/* Generate Child-woman Navigation bar */
function genChildWomanSubSectNav() {
	var langId = getLang();
	var mainSectPath = '/' + getLangDir() + '/' + getMainSectionDir();
	var classlifePath = mainSectPath + '/class_life';
	var swapImgPath = '/' + getLangDir() + '/images/' + getMainSectionDir() +
		'/health_info_cls';
	var childImgSuffix = '_01.gif';
	var womanImgSuffix = '_02.gif';
	var altTitleChild = ["Child", "兒童", "儿童"];
	var altTitleWoman = ["Woman", "婦女", "妇女"];
	var htmlStr = '<table class="child-woman-nav"><tr>';
	htmlStr += '<td class="child"><a href="' + classlifePath +
		'/child/child.html" title="' + altTitleChild[langId] + '"><img src="' +
		swapImgPath + childImgSuffix + '" alt="' + altTitleChild[langId] +
		'"></a></td>';
	htmlStr += '<td class="woman"><a href="' + classlifePath +
		'/woman/woman.html" title="' + altTitleWoman[langId] + '"><img src="' +
		swapImgPath + womanImgSuffix + '" alt="' + altTitleWoman[langId] +
		'"></a></td>';
	htmlStr += '</tr></table>';
	$('#section-header .subsection-block').append(htmlStr);
	$('.child-woman-nav .child img').hover(
		function() {
			this.src = this.src.replace("_cls_", "_cls_over_");
		},
		function() {
			this.src = this.src.replace("_cls_over_", "_cls_");
		});

	$('.child-woman-nav .woman img').hover(
		function() {
			this.src = this.src.replace("_cls_", "_cls_over_");
		},
		function() {
			this.src = this.src.replace("_cls_over_", "_cls_");
		});
}

/* Generate section header */
function genSectionHeader() {
	var sh = $('#section-header');
	if (sh.length == 0) {
		return;
	}
	var htmlStr = '<table><tr><td>';
	htmlStr += '<img class="head-center" src="' + getMainSectImgPath('01') +
		'" alt=""></td>';
	htmlStr +=
		'<td><a href="http://www.dh.gov.hk/" target="_blank" title="Department of Health"><img class="head-right" src="' +
		getMainSectImgPath('02') + '" alt="Department of Health"></a></td>';
	htmlStr += '</tr><tr><td>';
	htmlStr += '<img class="head-lower" src="' + getMainSectImgPath('03') +
		'" alt=""></td>'
	htmlStr += '<td><div class="subsection-block"></div></td></tr></table>';
	sh.append(htmlStr);

	var path = location.pathname;
	if (path.match('/health_info/.*/child/') || path.match(
			'/health_info/.*/woman/') || path.match(
			'/health_info/class_topic/.*child') ||
		path.match('/health_info/class_topic/.*woman')) {
		genChildWomanSubSectNav();
	}
}

/* Generate bottom navigation menu */
function genBottomNav() {
	var sh = $('#bottom-nav');
	if (sh.length == 0) {
		return;
	}
	var langId = getLang();
	var langDir = getLangDir();
	var altTitleBack = ["Back", "上一頁", "上一页"];
	var altTitleTop = ["Back to top", "回頁首", "回页首"];

	var htmlStr = '<table><tr>';
	htmlStr += '<td class="col1">&nbsp;</td>';
	htmlStr += '<td class="col2">&nbsp;</td>';
	htmlStr += '<td class="col3"><a href="javascript:history.back()" title="' +
		altTitleBack[langId] + '"><img src="/' + langDir +
		'/images/general/btt_03.gif" alt="' + altTitleBack[langId] +
		'" border="0"></a></td>';
	htmlStr += '<td class="col4"><a href="#" title="' + altTitleTop[langId] +
		'"><img src="/' + langDir + '/images/general/btt_04.gif" alt="' +
		altTitleTop[langId] + '" border="0"></a></td>';
	htmlStr += '<td class="col5">&nbsp;</td>';
	htmlStr += '<td class="col6">&nbsp;</td>';
	htmlStr += '</tr></table>';
	sh.append(htmlStr);
}

/*
Snippet Generation - Page In Lang Only Navigation
*/
function snippetGenPageInLangOnlyNav() {
	var holder = $('div[class^="page-in-lang-nav-to-"]');
	if (holder.length > 0) {
		var toLang = $(holder).attr('class');
		var toLang = toLang.replace('page-in-lang-nav-to-', '');
		var langcode = getLang();
		var finalHTML = "";
		var langText = "";
		var langTextEN = ['English', '英文', '英文'];
		var langTextTC = ['Traditional Chinese', '繁體中文', '繁体中文'];
		var langTextSC = ['Simplified Chinese', '簡體中文', '简体中文'];
		var textPart1 = ['This page is only available in ', '此頁只提供', '此页只提供'];
		var textPart2 = [', please ', '版本，請', '版本，请'];
		var textPart3 = ['.', '。', '。'];
		var linkText = ['click here to continue', '按此繼續瀏覽', '按此继续浏览'];
		switch (toLang) {
			case "en":
				langText = langTextEN[langcode];
				break;
			case "tc":
				langText = langTextTC[langcode];
				break;
			case "sc":
				langText = langTextSC[langcode];
				break;
		}
		finalHTML = textPart1[langcode] + langText + textPart2[langcode] +
			'<a href="';
		finalHTML += getchglang(toLang);
		finalHTML += '">' + linkText[langcode] + '</a>';
		holder.append(finalHTML);
	}
}

/* Handle "English Only" content block */
function EnglishOnly() {
	var newpath = window.location.toString();
	$("#content p.lang-eng-only").after(
		'<p>只提供英文版，<a href="" id="changelink">按此</a></p>');
	newpath = newpath.replace("\/tc_chi\/", "\/english\/");
	newpath = newpath.replace("\/sc_chi\/", "\/english\/");
	$("#changelink").attr('href', newpath);
};

/* Clear the CSS .noprint - due to printer-friendly function ready. */
function clearCssNoPrint() {
	$(".noprint").each(function(i, e) {
		$(this).removeClass("noprint");
	});
}

/* Get the Dreamweaver Template from current page. */
function getDwTemplate() {
	var template = "";
	var hasTemplate = false;
	var regex = '^[^"]*"([^"]*)".*$'

	$("*").contents().filter(function() {
		return this.nodeType == 8;
	}).each(function(i, e) {
		if (!hasTemplate && (e.nodeValue.indexOf('#BeginTemplate') > -1 || e.nodeValue
				.indexOf('InstanceBegin template=') > -1)) {
			hasTemplate = true;
			template = e.nodeValue.match(regex)[1];
		};
	});
	return template;
}

/*
Snippet Generation - Content Operation Bar
*/
function snippetGenContentOperationBar() {
	var dwTemplate = getDwTemplate();
	if (dwTemplate.length == 0) {
		return;
	} // Ignore operation if no template is used

	var usingNewTempalate = (dwTemplate.indexOf('/Templates/fhsnew2013') > -1);

	var content;
	var reformat_action = 0;

	var barHolder = $('<div>');
	barHolder.attr('id', 'content-op-bar');

	// Insert the bar according to which template is used:
	if (usingNewTempalate) {
		// New Tempalte is used:
		content = $('#content');
		barHolder.insertBefore($("div#content"));
		$("div#content > h1.title").css("margin-top", "0");
	} else if ($('.nav').length > 0) {
		// Old teamplate is used:
		if ($('.nav').prop("tagName") === "TD") { // TD Type:
			var targetTag;
			// Find the seperator bar under .nav
			targetTag = $('td.nav:first');
			content = targetTag.closest('table');
			targetTag = targetTag.parent().next().find('td:nth-child(2)');
			targetTag.find('img').remove();
			targetTag.append(barHolder);
			reformat_action = 1;
		} else if ($('.nav').prop("tagName") === "DIV") { // DIV Type:
			barHolder.insertAfter($('.nav:first'));
			content = $('.nav:first').parent();
			//console.info(barHolder.next().prop("tagName"));
			barHolder.next().css("margin-top", "0");
			reformat_action = 2;
		}
	}

	// Add Operations here:
	// Soscial Network
	addContOpBar_SNShare(barHolder, content, reformat_action);

	// - QR Code
	addContOpBar_QRCode(barHolder, content, reformat_action);

	// - Printer Friendly
	if ($('meta[name=no-printer-friendly]').attr("content") != 'y') {
		// If not bypass adding printer friendly, add it.
		$.getScript("/common/js/jquery.PrintArea.js", function(data, textStatus,
			jqxhr) {
			addContOpBar_PrinterFriendly(barHolder, content, reformat_action);
		});

	}
}

/* Operation Bar Item - PrinterFriendly */
function addContOpBar_PrinterFriendly(holder, theContent, reformat_action) {
	var langId = getLang();
	var langTextPF = ['Printer Friendly', '友善列印', '友善列印'];

	var opItem = $(
		'<div class="printer-friendly button"><div><a href="javascript:void(0);" title="' +
		langTextPF[langId] + '">' + langTextPF[langId] + '</a></div></div>');

	opItem.appendTo(holder);

	opItem.find('a').click(function() {
		var cloneContent = theContent.clone();

		// Special handle for different coding style/html format
		switch (reformat_action) {
			case 1:
				cloneContent.find('tr:first').remove();
				break;
			case 2:
				cloneContent.find('.nav:first').remove();
				break;
		}

		// Remove unnecessary DOM:
		cloneContent.find('div.sub-nav-block').remove(); //2015/02/11 edited by max
		cloneContent.find('script').remove();
		cloneContent.find('div.ytplayer').remove();
		cloneContent.find('img[src*="btt_04.gif"]').closest('table').remove();
		//cloneContent.find('a').live('click', function() { return false; });

		//$(cloneContent).printArea({retainAttr:["style","service-list","row","logo","desc"]});

		var para = [];
		//para['mode']="popup";
		para['extraHead'] = $('<div>').append($("head style").clone()).html();
		para['extraHead'] +=
			'<script type="text/javascript" src="/common/js/jquery-1.6.2.min.js"></script>';
		para['extraCss'] = '/common/css/printfriendly.css';
		$(cloneContent).printArea(para);
		return false;
	});
}


/* Operation Bar Item - QR Code and shorten URL */
function addContOpBar_QRCode(holder, theContent, reformat_action) {
	var langId = getLang();
	var langTextLoading = ['Loading...', '載入中...', '载入中...'];
	var langTextShortURL = ['Short URL', '簡短網址', '简短网址'];
	var langTextPageTitle = ['Page title', '本頁標題', '本页标题'];
	var langTextGetQR = ['Get QR Code', '獲取QR Code', '获取QR Code'];
	var langTextQRImgAlt = ['QR Code for this page', '本頁的QR碼', '本页的QR码'];
	var langTextShortUrl_error = [
		'Unable to retrieve the short URL and QR Code for this page.',
		'無法獲取本頁的簡短網址及QR碼', '无法获取本页的简短网址及QR码'
	];

	var opItem = $(
		'<div class="qrcode button"><div><a href="javascript:void(0);" title="' +
		langTextGetQR[langId] + '">' + langTextGetQR[langId] +
		'</a></div></div>');

	opItem.appendTo(holder);

	opItem.find('a').click(function() {
		// Create if not created:
		var shareBlk = $("#content-qrcode-block");
		if (shareBlk.length == 0) {
			// Init qr badge block layout:
			shareBlk = $(
				"<div id='content-qrcode-block' style='display:none;'/>");
			shareBlk.insertAfter("#content-op-bar");

			// QR Code
			$("<div/>").addClass("qrcode").append(
				$("<img/>")
				.attr("src", "/common/img/loading_ani.gif") // Default - loading
				.attr("alt", langTextQRImgAlt[langId])
				.attr("title", langTextQRImgAlt[langId])
			).appendTo(shareBlk);

			// Page title
			var pageTitle = (isUsingNewDwTemplate) ? (($("h1.title").length > 0) ?
				$(
					"h1.title").text() : "") : (($("td.title").length > 0) ? $(
					"td.title").text() :
				"");

			if (pageTitle != "") {
				$("<div/>").addClass("page-title").append(
					$("<span/>").addClass("name").text(langTextPageTitle[langId] +
						":")
				).append($("<span/>").addClass("title").text(pageTitle)).appendTo(
					shareBlk);
			}

			// Short URL
			$("<div/>").addClass("shorten-url").append(
				$("<span/>").addClass("name").text(langTextShortURL[langId] +
					":")
			).append($("<span/>").addClass("app-url").text(langTextLoading[
					langId])
				.append($("<span/>").addClass("keyword"))
			).appendTo(shareBlk);


			// Retrive the remote QR and shorten URL via JSONP (for cross domain)
			$.ajax({
				url: "http://s.fhs.gov.hk/yourls-api.php",
				jsonp: "callback",
				dataType: "jsonp",
				timeout: 10000,
				data: {
					signature: "677341465c", // To be changed to PHP access
					format: "jsonp",
					action: "shorturl",
					url: document.URL
				},
				success: function(response) {
					var appurl = response.shorturl.substring(0, response.shorturl
						.lastIndexOf(
							"/") + 1);
					var keyword = response.shorturl.substring(response.shorturl
						.lastIndexOf(
							"/") + 1, response.shorturl.length);
					var kwSpan = $("div.shorten-url .app-url").find(
						".keyword");
					kwSpan.text(keyword);
					var shorturlHtml = $("<a/>").text(appurl).append(kwSpan);
					shorturlHtml.attr("href", response.shorturl);
					shorturlHtml.attr("title", langTextShortURL[langId]);
					$("div.shorten-url .app-url").html(shorturlHtml);
					$("div.qrcode img").attr("src", response.qrcimg);
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					$("div.shorten-url .app-url").text(langTextShortUrl_error[
						langId]).addClass(
						"error");
				}
			});

		}

		// Toggle display
		if (shareBlk.css("display") == "none") { // Show
			shareBlk.css("display", "block"); // hardcode
		} else { //HIDE
			shareBlk.css("display", "none");
		}

		return true;
	});
}

/* Operation Bar Item - Social Network Sharing */
function addContOpBar_SNShare(holder, theContent, reformat_action) {
	var langId = getLang();
	var langTextShare = ['Share', '分享', '分享'];
	var shareLang = ['en-GB', 'zh_HK', 'zh_CN'];
	var snShareBlock = $('<div class="sn-share"/>');

	// FB Share
	var fbShare = $("<iframe class='share-button'/>");
	var fbShareUrl =
		"//www.facebook.com/plugins/share_button.php?layout=button";
	//fbShareUrl+= ("&locale=" + shareLang[langId]);
	fbShareUrl += ("&href=" + encodeURIComponent(document.URL));
	fbShare.attr("src", fbShareUrl).attr("scrolling", "yes").attr("frameborder",
		"0").attr("allowTransparency", "true");
	fbShare.addClass("share-button facebook-share");
	snShareBlock.append(fbShare);

	// G+ Share
	snShareBlock.append(
		"<script src=\"https://apis.google.com/js/platform.js\" async defer>{lang: '" +
		shareLang[langId] + "'}</script>");
	snShareBlock.append($(
		'<div class="g-plus share-button" data-action="share" data-annotation="none">'
	));

	snShareBlock.appendTo(holder);
}


/*
Snippet Generation - Generate Google Analystic
*/
function snippetGenGA() {
	var gascript =
		"<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-57269623-1', 'auto');ga('send', 'pageview');</script>";
	$(gascript).appendTo(document.body);
}

/*
Snippet Generation - HTML Patch
NOTE: This function patch the html code for old or new template without massive
html update.
*/
function snippetPatchPageHtml() {

	if (isUsingNewDwTemplate) {
		// New template

		// Special fix for wrong layout using new template
		if (($("#content > h1.title").length == 0) && ($(
					"#content > table td.title")
				.length > 0)) {
			// Using old title table, fix it
			var titleText = $("#content > table td.title").text();
			$("#content > table").first().detach();
			$("<h1>").addClass("title").text(titleText).prependTo($("#content"));
		}

		// Fix footer:
		if ($(".outer-wrapper > .right-column > #footer").length > 0) {
			// Is new template
			$("#footer").appendTo(".outer-wrapper"); // Move to outer wrapper
		}

	} else {
		// Old template
		$("body").addClass("old-template");

		// Header title
		$($(".old-template td.title").siblings()[0]).detach();
		$($(".old-template td.title").parent().siblings()[0]).detach();
		$(".old-template td.title").parent().parent().parent().parent().removeAttr(
			"background");
		$(".old-template td.title").parent().parent().parent().parent().css(
			"padding-left", "21px");
		$(".old-template td.title").css("width", "100%");

		// Fix footer:
		$($("#page-footer").parent().parent().siblings()[1]).detach();
		var footer = $("<div id='footer'>").append($("#page-footer"))
		footer.appendTo($("body"));

		// Fix content anchor
		if ($("a#content").length) {
			var ac = $("a#content");
			ac.removeAttr("id");
			ac.parent().attr("id", "content");
		}
	}

}


/* Util Func: Get the URL Params by name
PARAM1: Given name String
RETURN: URI decoded value if found.
*/
function getUrlParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/*
	A function to handle image replacement for section-header: Change the header image.
	PARMS:
	desFolder (String): A string to match the URL.
	replaceImgArray (Associate array):
		Key: A CSS class name for desired image tag
		Value: Relative path for image.

	NOTE: Reference CSS class name:
	"head-center" - header-center image
	"head-right" - header-right image
	"head-lower" - header-lower image
*/
function imgRepSecHeader(desFolder, replaceImgArray) {
	var urlArray = window.location.pathname.split('/');
	var newPath = '';
	for (i = 0; i < urlArray.length; i++) {
		newPath += urlArray[i] + '/';
		if (urlArray[i] == desFolder) {
			$.each(replaceImgArray, function(key, value) {
				$('#section-header .' + key).attr('src', value);
			});
			break;
		}
	}
}

/*qr-list by Max Tsui 07/05/2015 */
function qrList() {
	var $html = '<ul id="qr-list">',
		$domain = 'http://s.fhs.gov.hk/',
		$imgdomain = $domain + 'user/plugins/inline-qrcode/images/',
		$curURL = window.location.pathname,
		$curFile = $curURL.split("/");
	$curFileN = $curFile[$curFile.length - 1],
		$json = $curFileN.replace(".html", ".json");
	$theme = $(".qr-theme").attr("data-color");
	if ($("#qr-list").length) {
		$("#qr-list").remove();
	}
	$.ajax({
		url: $json,
		dataType: "json",
		timeout: 10000,
		success: function($response) {
			for (i = 0; i < $response.length; i++) {
				var $title = $response[i]["title"];
				var $img, $url;
				if (($response[i]["qrcimg"]).indexOf("external_qr") > -1) {
					$img = $response[i]["qrcimg"];
					$url = $response[i]["url"];
				} else {
					$img = $imgdomain + $response[i]["qrcimg"];
					$url = $domain + $response[i]["url"];
				}
				$html += "<li><div class='qr-title'><h2>" + $title +
					"</h2></div><div class='qr-img'><img src='" + $img +
					"' alt='" + $title + "'/></div><p><a href='" +
					$url +
					"' title='" +
					$title + "'>" + $url + "</a></p></li>";
			}
			$html += "</ul>";
			$(".qr-intro").after($html);
			qrListTune('#qr-list', 'h2', 'p', $theme);
		}
	});
}

function qrListTune($list, $title, $footer, $theme) {
	var $items = $($list).find('li'),
		setHeights = function() {
			$items.css({
				'height': 'auto',
				'background': $theme
			});
			var $perRow = Math.floor($($list).width() / $items.width());
			if ($perRow === null || $perRow < 2) return true;

			for (var i = 0, j = $items.length; i < j; i += $perRow) {
				var $maxTitHeight = [];
				var $maxFooHeight = [];
				$row = $items.slice(i, i + $perRow);
				$row.each(function() {
					var $itemTitHeight = $(this).find($title).outerHeight();
					var $itemFooHeight = $(this).find($footer).height();
					$maxTitHeight.push($itemTitHeight);
					$maxFooHeight.push($itemFooHeight);
				});
				$row.find($title).css('height', Math.max.apply(Math, $maxTitHeight));
				$row.find($footer).css('height', Math.max.apply(Math, $maxFooHeight));
			}
		};
	setHeights();
}

/* ##### Document-Ready actions declaration ##### */
$(document).ready(function($) {
	//Determine if new template is using:
	var dwTemplate = getDwTemplate();
	if (dwTemplate.length > 0 && dwTemplate.indexOf('/Templates/fhsnew2013') > -
		1) {
		isUsingNewDwTemplate = true;
	} else {
		$('.sf-menu').parent('div').css('width', 185);
	}

	pdfLinksHandler();
	contentTableStyler();
	externalLinksHandler();
	subNavTopbarHandler();
	genSectionHeader();
	genBottomNav();
	getBreadcrumb();
	EnglishOnly();
	clearCssNoPrint();
	snippetGenPageInLangOnlyNav();
	snippetGenContentOperationBar();
	//Refer to Francis request, replace the image in the section-header under recommend_to_parents folder
	imgRepSecHeader('recommend_to_parents', {
		"head-center": 'images/header_center.jpg',
		"head-right": 'images/header_right.jpg',
		"head-lower": 'images/header_lower_tab.jpg'
	});
	getfooter(); //Generate the footer.
	snippetPatchPageHtml();
	snippetGenGA();
});
