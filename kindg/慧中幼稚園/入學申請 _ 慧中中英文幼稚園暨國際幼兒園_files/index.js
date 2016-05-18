(function($) {
/*	
	$('#gl-menu li').mouseover(function(){
		if($(this).children('ul.sub-menu').length>0){
			$(this).children('a').addClass('hover-menu-item-haschildren');
			$(this).children('ul.sub-menu').show();
		}else{
			$(this).children('a').addClass('hover-menu-item');
		}
	});
	$('#gl-menu li').mouseout(function(){
		if($(this).children('ul.sub-menu').length>0){
			$(this).children('a').removeClass('hover-menu-item-haschildren');
			$(this).children('ul.sub-menu').hide();
		}else{
			$(this).children('a').removeClass('hover-menu-item');
		}
	});*/
	
	//mobile menu(仅支持三级菜单) start
	//菜单的初始状态
	$('#wisdomac-memu').find(".current-menu-item").parents("li").addClass('current-menu-item-p');
	function menuInit(){
		$('#cch-mobile-menu').animate({left:'0px'},300);
		$('#cch-mobile-menu').children('ul.sub-menu').hide();
		$('#temporary-div').hide();
	}
	$('#cch-menu-icon').toggle(
		function(){
			$('#mobile-menu-div').removeClass('mobile-menu-div-up').addClass('mobile-menu-div-down');
			$('#mobile-menu-container').slideDown('fast');
			menuInit();
		},function(){
			$('#mobile-menu-div').removeClass('mobile-menu-div-down').addClass('mobile-menu-div-up');
			$('#mobile-menu-container').slideUp('fast');
			menuInit();
		}
	);


	var currentMenuLevel = 1;//用于判断当前显示的是第几级菜单
	var currentMenu;//当前显示的菜单
	$('#cch-mobile-menu > li.menu-item-has-children > a').click(function(){
		currentMenuLevel = 1;
		currentMenu = $(this).parent();
		$('#cch-mobile-menu li ul.sub-menu').hide();
		$('#temporary-div').show();//显示 back按钮
		var menuWidth = $('#cch-mobile-menu').width();//菜单显示区域的width，主要用于设置菜单的left
		$('#cch-mobile-menu').animate({left:'-'+menuWidth+'px'},300);
		$(this).parent().children('ul.sub-menu').css({'display':'block','position':'absolute','left':menuWidth+'px','top':'0px','width':'100%'});
	});
	$('.sub-menu > li.menu-item-has-children > a').click(function(){
		currentMenu = $(this).parent();
		currentMenuLevel = 2;
		var menuWidth = $('#cch-mobile-menu').width();
		$('#cch-mobile-menu').animate({left:'-'+(menuWidth*2)+'px'},300);
		$(this).parent().children('ul.sub-menu').css({'display':'block','position':'absolute','left':menuWidth+'px','top':'0px','width':'100%'});
	});

	$('#toback').click(function(){
		if(currentMenuLevel == 1){//恢复菜单到初始状态
			menuInit();
		}else if(currentMenuLevel == 2){
			currentMenuLevel = 1;
			currentMenu.children('ul.sub-menu').hide();
			var menuWidth = $('#pt-mobile-menu').width();
			$('#cch-mobile-menu').animate({left:'-'+menuWidth+'px'},300);
		}
	});
	//mobile menu(仅支持三级菜单) end
	
				var niv = document.getElementById("page-submenu-span");
				var lile = niv.getElementsByTagName("a"); //判断地址
				var turl = location.search; 
				var last = 0;
				for (var i=0;i<lile.length;i++)
				{
				var lurl = lile[i].getAttribute("href");
				if(lurl.indexOf(turl)!=-1)
				{
				 last = i;
				}
				}  
				lile[last].className = "active";  
})(jQuery);


