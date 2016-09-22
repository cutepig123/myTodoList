var snapper, snapper,
	isTouch = $("html").hasClass("touch"),
	screenLimit = 330,
	deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width,
	didScroll = false, scrollTopBtn = $("#btn-scroll-top"),
	touched = false;

$(document).ready(function(){

jQuery.fn.exist = function(){
	return this.length>0;
}

/* Mobile Menu */
isTouch = $("html").hasClass("touch"),
settings = {
	element: document.getElementById('content'),
	flickThreshold: 100,
	disable: 'right'
},
screenLimit = 330,
deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (!isTouch || deviceWidth < screenLimit) settings.touchToDrag = false;
snapper = new Snap(settings);
if (isTouch && deviceWidth >= 768) snapper.disable();

$('body').delegate('a#open-left', 'click', function(){
	if( snapper.state().state=="left" ){
		snapper.close();
	} else {
		snapper.open('left');
	}
});

$(window).resize(function () {
	if ($(window).width() >= 992) {
		snapper.close();
	}
	deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if (isTouch && deviceWidth >= screenLimit) {
	  if(deviceWidth >=768) snapper.disable();
	  else snapper.enabled();
	}
	else {
	  snapper.disable();
	}
});

/* Adjust #mainbody height to make it scrollable */
adjustContentHeight();
$(window).resize(function () {
	adjustContentHeight();
});

function adjustContentHeight(){
	windowHeight = parseInt($(window).height());
	topMargin = parseInt($('#mainbody').css('marginTop'));
	newContentHeight = windowHeight - topMargin;
	$('#mainbody').css({'height':newContentHeight+'px'});
}

/* Enable FancyBox */
if ($.fancybox !== undefined) {
if( Modernizr.touch == false || Modernizr.mq('only all and (min-width: 768px)') ){
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
}
}

/* School Details - Related Video Section
 * video swap during tablet and mobile mode
 */
var currentVideo = 0;
var totalVideo;
videoSwap();
$(window).resize(function () {
	videoSwap();
});
function videoSwap(){
	if( $(window).width()<=991 && $('.related-video-container').exist() ){
		$('body').undelegate('.btn-video-swap.left', 'click');
		$('body').undelegate('.btn-video-swap.right', 'click');

		totalVideo = $('.related-video-container').find('.related-video').length;
		$('.related-video-container').find('.related-video').eq(currentVideo).addClass('active');

		// arrow right
		$('body').delegate('.btn-video-swap.left', 'click', function(){
			if(currentVideo > 0){
				$('.related-video-container').find('.related-video').eq(currentVideo).removeClass('active');
				currentVideo --;
				$('.related-video-container').find('.related-video').eq(currentVideo).addClass('active');
			}
			console.log('currentVideo:' + currentVideo + ' | totalVideo:' + totalVideo);
		});

		// arrow left
		$('body').delegate('.btn-video-swap.right', 'click', function(){
			if(currentVideo < totalVideo-1){
				$('.related-video-container').find('.related-video').eq(currentVideo).removeClass('active');
				currentVideo ++;
				$('.related-video-container').find('.related-video').eq(currentVideo).addClass('active');
			}
			console.log('currentVideo:' + currentVideo + ' | totalVideo:' + totalVideo);
		});
	}
}
// Open new window for external links
$("a.new-window").click(function(){
	window.open(this.href);
	return false;
});
// add pdf icon
$("a[href$='.pdf']").addClass("pdf");
if ($.fancybox !== undefined) {
	// Default Modal box
	$(".modal-box").fancybox({
		'hideOnContentClick': true
	});
	// use fancybox for link to image
	$('a[href$="jpg"], a[href$="jpeg"], a[href$="png"], a[href$="gif"]').fancybox();

	$(".iframe").fancybox({
	'width': '50%',
	'height': '70%',
	'type': 'iframe'
	});
}

if ($("#search, .search-box").length>=2) {
	var parent = $("#search").parents(".search-box");
	//console.log(parent);
	$("#search").focus(function(evt){
		parent.addClass("focus");
	}).blur(function(evt){
		parent.removeClass("focus");
	});
}

var scrollTarget = (isTouch)? document:"#mainbody",
scrollEvtType = (isTouch)? "touchmove":"scroll",
boundary = -20, clearTimeDur = 6000, scrollTopTimer, scrollFreeze = false,
clearTopBtn = function(){
	scrollTopBtn.removeClass("active").delay(200).hide(0);
},
scrollToTop = function() {
	$("#mainbody").animate({
	  scrollTop: 0
	}, 300, function(){
		scrollFreeze = false;
		clearTimeout(scrollTopTimer);
		clearTopBtn();
	});
},
hasScrolled = function (evt) {
	var wHEIGHT = $(window).height(),
		pageHEIGHT = $(document).height(),
		pageLocked = (wHEIGHT != pageHEIGHT)? false:true,
		scrollPOS = $("#mainbody .container")[0].getBoundingClientRect().top;
	if (scrollPOS<boundary && scrollTopBtn.hasClass("active")) {
		clearTimeout(scrollTopTimer);
		scrollTopTimer = setTimeout(clearTopBtn,clearTimeDur);
	} else if (scrollPOS<boundary && !scrollTopBtn.hasClass("active")) {
		scrollTopBtn.show(0,function(evt){
			$(this).addClass("active");
		});
		scrollTopTimer = setTimeout(clearTopBtn,clearTimeDur);
	} else if (scrollPOS>=boundary && scrollTopBtn.hasClass("active")) {
		clearTimeout(scrollTopTimer);
		clearTopBtn();
	}
},
markScroll = function (evt) {
	didScroll = true;
},
chkScroll = function(evt) {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}
$(scrollTarget).on(scrollEvtType,markScroll);
scrollTopBtn.bind("click touchend",function(evt){
	if (!scrollFreeze) {
		scrollFreeze = true;
		scrollToTop();
	}
});
setInterval(chkScroll, 90);

$("#mobile-main-menu.has-sub-items>li").has("ul").each(function(i,itm){
	$(this).on("click",function(evt){
		if (touched || (didScroll && isTouch)) return false;
		else {
			touched = true;
			setTimeout(function(){
				touched = false;
			},305);
		}
		var taget = (evt.target.tagName == "A")? $(evt.target) : $(evt.target).parents("a"),
		itemWrap = taget.parent();
		if (itemWrap.hasClass("active")) itemWrap.removeClass("active");
		else itemWrap.addClass("active");
	});
});

});