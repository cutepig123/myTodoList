// http://www.quirksmode.org/js/detect.html
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

var cursor_ico;
switch(BrowserDetect.browser){
	case 'Chrome':
		cursor_ico = '-webkit-grab';
	break;
	case 'Firefox':
		cursor_ico = 'move';
	break;
	case 'Explorer':
		cursor_ico = 'pointer';
	break;
	default:
		cursor_ico = 'move';
	break;
}

var j = jQuery;
j(document).ready(function(){
	if(j(".weddingunion_notjoin")){
		j(".weddingunion_notjoin").fancybox({
			type: 'ajax',
			autoResize:true,
			minWidth: 550,
			minHeight: 90
		});

		j("#img_weddingunion_notjoin")
			.css("opacity", "0.2").each(function(){
				var _obj = $('.whatisit');
				if(!_obj) {
					j(this).after("<div class='whatisit'>這是什麼</div>");
				}
			});
			// .after("<div class='whatisit'>這是什麼</div>");
	}

	if(j("a#changePhoto").length > 0){
		var ipt = document.createElement("input");
		ipt.type = 'hidden';
		ipt.id = 'hid_filename';
		ipt.name = 'hid_filename';
		ipt.value = j('img.headerimage').attr('src');
		document.body.appendChild(ipt);
		
		j(".headerimage").css('cursor', cursor_ico);
		j(".headerimage").draggable({
			scroll: false,
			drag: function(event, ui){
				j(".headerimage").css('cursor', cursor_ico);
				dragFunc(event, ui);
			},
			stop: function(event, ui) {}
		});
		
		j("div#dragToAdjust")
			.show()
			.css('cursor', cursor_ico);

		j('input#attach').mouseover(function(e){
			j("a#changePhoto").css('color', '#CF1E30');
		}).mouseout(function(e){
			j("a#changePhoto").css('color', '#A8774A');
		});
		
		j('input#attach').change(function(){
			j('img#cpLoading').show();
			j(this).upload("cp.php?ac=coverupload", {"act":"upload"}, function(res){
				if(res.error.length == 0){
					j('img.headerimage').attr({
						'src'  : res.filename//,
						//'width' : res.width,
						//'height': res.height
					});
					ipt.value = res.filename;
					j(".headerimage").css('top', '0px');

					j(".headerimage").draggable({
						scroll: false,
						drag: function(event, ui) {
							dragFunc(event, ui);
						},
						stop: function(event, ui) {}
					});

					j("div.nn").hide();
					j("div#bottomApply").show();
					j("#rollOverChangePhoto").hide();
					j("div#dragToAdjust")
						.show()
						.css('cursor', cursor_ico)
						.select(function(){
							j("div#dragToAdjust").css({
								background:'none'
							});
						});
				}else{
					alert(res.error.split('::')[1]);
				}
				j('img#cpLoading').hide();
			}
			, "json");
		});

		j("a.theme_apply").click(function(){
			j("a.theme_apply").attr('href',
				j("a.theme_apply").attr('href') +
				'&top=' + j(".headerimage").position().top +
				'&left=' + j(".headerimage").position().left +
				'&f=' + ipt.value
			);
		});
	}

	var isSelf = parseInt(j("#isSelf").val());
	if(isSelf == 1 && j("#rollOverChangePhoto").length > 0){
		j("#rollOverChangePhoto").mouseover(function(e){
			j(this).show();
			j("input#attach").blur();
			j(this).css({
				cursor:'pointer'
			});
		}).mousemove(function(e){
			j("input#attach").css({
				position:'absolute',
				/*left:e.pageX-90-130,
				top:e.pageY-10-55,*/
				opacity:0,
				left:730,
				top:263,
				width:100,
				cursor:'pointer'
			}).blur();
		}).mouseout(function(e){
			j(this).hide();
		});

		j("img#coverphoto").mouseover(function(e){
			if(j("div#bottomApply").css("display") == "none"){
				j("#rollOverChangePhoto").show();
			}
		}).mouseout(function(e){
			j("#rollOverChangePhoto").hide();
			j("input#attach").css('top', '-9999px');
		});

		j('input#attach').mouseover(function(e){
			j("#rollOverChangePhoto").show();
			j("input#attach").css({
				cursor:'pointer'
			});
		}).mouseout(function(e){
			j("#rollOverChangePhoto").hide();
		});

		var ipt = document.createElement("input");
		ipt.type = 'hidden';
		ipt.id = 'hid_filename';
		ipt.name = 'hid_filename';
		ipt.value = j('img.headerimage').attr('src');
		document.body.appendChild(ipt);

		j('input#attach').change(function(){
			j("#cpRollOverLoading").show();
			j(".headerimage").css('cursor', cursor_ico);
			j(this).upload("cp.php?ac=coverupload", {"act":"upload"}, function(res){
				if(res.error.length == 0){
					j('img.headerimage').attr({
						'src'  : res.filename//,
						//'width' : res.width,
						//'height': res.height
					});
					ipt.value = res.filename;
					j(".headerimage").css('top', '0px');

					j(".headerimage").draggable({
						scroll: false,
						drag: function(event, ui) {
							j(".headerimage").css('cursor', cursor_ico);
							dragFunc(event, ui);
						},
						stop: function(event, ui) {}
					});

					j("div#bottomApply").show();
					j("div#dragToAdjust")
						.show()
						.css('cursor', cursor_ico)
						.select(function(){
							j("div#dragToAdjust").css({
								background:'none'
							});
						});

					j("#cpRollOverLoading").hide();
				}else{
					alert(res.error.split('::')[1]);
				}
			}
			, "json");
		});

		j("a.theme_apply").click(function(){
			j("a.theme_apply").attr('href',
				j("a.theme_apply").attr('href') +
				'&top=' + j(".headerimage").position().top +
				'&left=' + j(".headerimage").position().left +
				'&f=' + ipt.value
			);
		});
	}
});

function dragFunc(event, ui) {
	var divHeight = j('.picturecontainer').height();
	var divWidth = j('.picturecontainer').width();

	var imgHeight = j('.headerimage').height();
	var imgWidth = j('.headerimage').width();

	// If image is smaller than div both in width and height
	if(imgWidth <= divWidth && imgHeight <= divHeight){
		if(ui.position.top <= 0){
			ui.position.top = 0;
		}else if(ui.position.top + imgHeight >= divHeight){
			ui.position.top = divHeight - imgHeight;
		}
		if(ui.position.left <= 0){
			ui.position.left = 0;
		}else if(ui.position.left + imgWidth >= divWidth){
			ui.position.left = divWidth - imgWidth;
		}
	}

	// If image width is bigger than div width but imgae height is smaller than div height
	if(imgWidth >= divWidth && imgHeight <= divHeight){
		if(ui.position.top <= 0){
			ui.position.top = 0;
		}else if(ui.position.top + imgHeight >= divHeight){
			ui.position.top = divHeight - imgHeight;
		}
		if(ui.position.left >= 0){
			ui.position.left = 0;
		}else if(ui.position.left <= divWidth - imgWidth){
			ui.position.left = divWidth - imgWidth;
		}
	}

	// If image height is bigger than div height but imgae width is smaller than div width
	if(imgWidth <= divWidth && imgHeight >= divHeight){
		if(ui.position.top >= 0){
			ui.position.top = 0;
		}else if(ui.position.top <= divHeight - imgHeight){
			ui.position.top = divHeight - imgHeight;
		}
		if(ui.position.left <= 0){
			ui.position.left = 0;
		}else if(ui.position.left + imgWidth >= divWidth){
			ui.position.left = divWidth - imgWidth;
		}
	}

	// If image is bigger than div both in width and height
	if(imgWidth > divWidth && imgHeight > divHeight){
		if(ui.position.top >= 0){
			ui.position.top = 0;
		}else if(ui.position.top <= divHeight - imgHeight){
			ui.position.top = divHeight - imgHeight;
		}
		if(ui.position.left >= 0){
			ui.position.left = 0;
		}else if(ui.position.left <= divWidth - imgWidth){
			ui.position.left = divWidth - imgWidth;
		}
	}
}