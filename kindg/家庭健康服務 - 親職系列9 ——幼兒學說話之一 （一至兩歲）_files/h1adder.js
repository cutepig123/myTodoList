$(document).ready(function($) {
var elements = document.getElementsByTagName('h1');
	if (elements.length<1) {
		var title = document.getElementsByTagName('title');
		$('body').prepend('<h1 style="display: none;">'+title[0].innerHTML+'</h1>');
	}
});