(function(contentType,contentId){
	window.setTimeout(function(){ 
		var lastContentType = readCookie("cs_contentType");
		var lastContentId = readCookie("cs_contentId");
		var suffix = "";
		if (lastContentType != null && lastContentId != null) {
			suffix += "&lastContentType=" + lastContentType + "&lastContentId=" + lastContentId;
		}
		jQuery.ajax({
			type: 'GET',
			url: "/api/suggestions/collect.php?contentType=" + contentType + "&contentId=" + contentId + suffix,
			success: function(data) {
			},
			error:  function(jqXHR, textStatus, errorThrown) { console.log(textStatus); }
		});
		createCookie("cs_contentType", contentType, 1);
		createCookie("cs_contentId", contentId, 1);
	}, 30000);

	jQuery(window).bind('resize', function() { 
		positionSuggestedReadings(container);
	});
	
	showSuggestedContent(contentType,contentId,container);
})(contentType,contentId,container);

function showSuggestedContent(contentType, contentId, container) {
	jQuery.ajax({
			type: 'GET',
			url: "/api/suggestions/suggest.php?contentType=" + contentType + "&contentId=" + contentId,
			success: function(data) {
				var blogs = eval(data);
				for (var i = 0; i < blogs.length; i++) {
					var blog = blogs[i];
					var a_tag_blog = '<a href="space.php?uid=' + blog.uid + '&do=blog&id=' + blog.blogid + '">';
					var img_tag;
					if ((blog.pic == "")||(blog.pic.match(/image\/face\/([0-9]{1,2}).gif/i))) {
						blog.pic = '/images/suggested_blogs/generic_p' + (i+1) + '.jpg';
					}
					img_tag = '<div class="img" style="background-image: url(' + blog.pic + ')"><img src="/images/suggested_blogs/transparent.png" /></div>';
					moment.locale('zh-tw');
					// 2015-10-07 12:08:43
					var ts = moment(blog.ts, "YYYY-MM-DD hh:mm:ss").fromNow();
					var a_tag_user = '<a href="space.php?uid=' + blog.uid + '&do=blog&id=' + blog.blogid + '">' + blog.username + ' ' + ts + '</a>';
					//alert(blog.pic);
					//alert('img_tag = ' + img_tag);
					
					jQuery('#suggestedReadingsData').append('<div class="data">' + a_tag_blog + img_tag + '<span>' + blog.subject + '</span></a><span>' + a_tag_user + '</span></div>');
					if (!responsive) {
						jQuery('#suggestedReadingsData').append('<div class="clear_both"></div>');
					}
				}
				if (!responsive) {
					positionSuggestedReadings(container);
				}
			},
			error:  function(jqXHR, textStatus, errorThrown) { console.log(textStatus); }
		});
}

function updateSuggestedReadingsStyle(container) {
	var pivot = jQuery('.ad_box');
	var offsetTop = pivot.offset().top + pivot.height();
	var footer_offsetTop = jQuery("#footer").offset().top;
	var currentScrollTop = jQuery(document).scrollTop();
	var ftpopup_height = jQuery("#footer-popup").height();
	if (ftpopup_height === null) { ftpopup_height = 0;}
	if (offsetTop + container.height() + ftpopup_height > footer_offsetTop - 30) {
		container.css({top: pivot.height()});
	} else {
		if (currentScrollTop < offsetTop) {
			container.css({top: pivot.height()});
		} else {
			if (currentScrollTop + container.height() + ftpopup_height > footer_offsetTop - 30) {
				var difference = footer_offsetTop - ftpopup_height - container.height() - pivot.offset().top - 30;
				container.css({top: difference});
			} else {
				container.css({top: currentScrollTop - pivot.offset().top});
			}
		}
	}
}

function positionSuggestedReadings(container) {
	if (!responsive) {
		container.css({display: "block"});
		updateSuggestedReadingsStyle(container);
		
		jQuery(window).scroll(function() {
			updateSuggestedReadingsStyle(container);
		});
	}
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}