$(document).ready(
function() 
{
    $('.menu > li').mouseenter(
	function()
	{
		var hh=($(this).height()+$(this).children('ul').height())*(-0.5);
		$('.menu > li').children('a').css({color:''});
		$(this).children('a').css({color:'#262260'});
		$('.menu > li').children('ul').fadeOut('fast');
		$(this).children('ul').css({'margin-top':hh+'px'});
		$(this).children('ul').fadeIn('fast');
	}
	);
	$('.sub-menu').mouseenter(
	function(e)
	{
		e.stopPropagation();
	}
	);
	$('.sub-menu > li').mouseenter(
	function(e)
	{
		$('.sub-menu > li').css({background:''});
		$(this).css({background:'#d5eef4'});
		e.stopPropagation();
	}
	);
	$('body').click(
	function()
	{
		$('.menu > li').children('ul').fadeOut('fast');	
	}
	);
}
);