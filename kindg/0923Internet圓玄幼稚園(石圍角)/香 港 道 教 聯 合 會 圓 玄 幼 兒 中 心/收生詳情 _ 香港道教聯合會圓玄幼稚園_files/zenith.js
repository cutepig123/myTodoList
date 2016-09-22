/*$(document).ready(function(){
	$('#menu_icon').toggle(
		function(){
			$('#hidden_menu').slideDown('fast');
		},
		function(){
			$('#hidden_menu').slideUp('fast');
		}
	);
	$('#hidden_menu div.hidden_has_submenu a.parent_menu').toggle(
		function(){
			$(this).css('background','#DB3737');
			$(this).children('span.menu_direction').html('<<');
			$(this).next('div.hidden_submenu').slideDown(300);
		},
		function(){
			$(this).css('background','#ff7676');
			$(this).children('span.menu_direction').html('>>');
			$(this).next('div.hidden_submenu').slideUp(300);
		}
	);
});*/
(function($) {

	//mobile menu(仅支持三级菜单) start
	//菜单的初始状态
		
	function menuInit(){
		$('#yuen-mobile-menu').animate({left:'0px'},300);
		$('#yuen-mobile-menu').children('ul.sub-menu').hide();
		$('#temporary-div').hide();
	}

	$('#yuen-menu-icon').toggle(
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
	$('#yuen-mobile-menu > li.menu-item-has-children > a').click(function(){
		currentMenuLevel = 1;
		currentMenu = $(this).parent();
		$('#yuen-mobile-menu li ul.sub-menu').hide();
		$('#temporary-div').show();//显示 back按钮
		var menuWidth = $('#yuen-mobile-menu').width();//菜单显示区域的width，主要用于设置菜单的left
		$('#yuen-mobile-menu').animate({left:'-'+menuWidth+'px'},300);
		$(this).parent().children('ul.sub-menu').css({'display':'block','position':'absolute','left':menuWidth+'px','top':'0px','width':'100%'});
	});
	$('#yuen-mobile-menu .sub-menu > li.menu-item-has-children > a').click(function(){
		currentMenu = $(this).parent();
		currentMenuLevel = 2;
		var menuWidth = $('#yuen-mobile-menu').width();
		$('#yuen-mobile-menu').animate({left:'-'+(menuWidth*2)+'px'},300);
		$(this).parent().children('ul.sub-menu').css({'display':'block','position':'absolute','left':menuWidth+'px','top':'0px','width':'100%'});
	});

	$('#toback').click(function(){
		if(currentMenuLevel == 1){//恢复菜单到初始状态
			menuInit();
		}else if(currentMenuLevel == 2){
			currentMenuLevel = 1;
			currentMenu.children('ul.sub-menu').hide();
			var menuWidth = $('#yuen-mobile-menu').width();
			$('#yuen-mobile-menu').animate({left:'-'+menuWidth+'px'},300);
		}
	});
	//mobile menu(仅支持三级菜单) end
	
})(jQuery);