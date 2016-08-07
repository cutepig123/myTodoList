/*
 *	Copyright (c) 2009 Focus Imaging Limited - http://www.focus-global.com
 */

FFJS = {
	generate_time: '',
	lang_current: 'english',
	lang_default: 'english',
	server_name: '',
	url_root: '',
	init: function( module_param )
	{
		if( module_param!=undefined )
		{
			for( var module in module_param )
			{
				if( FFJS[module] && FFJS[module].init )
				{
					FFJS[module].init( module_param[module] );
				}
			}
		}
	}
};

FFJS['Clock'] = {
	current: null,
	init: function( current_time )
	{
		FFJS.Clock.current = new Date( current_time );
		setInterval("FFJS.Clock.refresh()", 1000);
	},
	padZero: function( what ){
		return (what.toString().length==1) ? '0' + what : what;
	},
	refresh: function()
	{
		FFJS.Clock.current.setSeconds( FFJS.Clock.current.getSeconds()+1 );
		var hh = FFJS.Clock.padZero( FFJS.Clock.current.getHours() );
		var mm = FFJS.Clock.padZero( FFJS.Clock.current.getMinutes() );
		var ss = FFJS.Clock.padZero( FFJS.Clock.current.getSeconds() );
		$('div.ffjs_clock').html( hh +":"+ mm +":"+ ss );
	}
};
	
FFJS['Website'] = {
	addBookmark: function()
	{
		if( window.sidebar ) // firefox
		{
			window.sidebar.addPanel(document.title, location.href, "");
		}
		else if( window.opera && window.print ) // opera
		{
			var elem = document.createElement('a');
			elem.setAttribute('href',location.href);
			elem.setAttribute('title',document.title);
			elem.setAttribute('rel','sidebar');
			elem.click();
		} 
		else if( document.all ) // ie
		{
			window.external.AddFavorite(location.href, document.title);
		}
	}
};

FFJS['Img'] = {
	init: function( selector )
	{
		$('img.rollover')
			.bind('mouseover',function(event){ FFJS.Img.mouseover(this); })
			.bind('mouseout',function(event){ FFJS.Img.mouseout(this); });
		
		$('input.rollover')
			.bind('mouseover',function(event){ FFJS.Img.mouseover(this); })
			.bind('mouseout',function(event){ FFJS.Img.mouseout(this); });
	},
	mouseover: function( el ){
		var el = $(el);
		el.attr('src', el.attr('src').replace('rollout', 'rollover') );
	},
	mouseout: function( el ){
		var el = $(el);
		el.attr('src', el.attr('src').replace('rollover', 'rollout') );
	},
			
	ResizeImage:function(objImage,maxWidth) {  
		try{  
			if(maxWidth>0){  
				var objImg = $(objImage);  
				var rate = objImg.width() / objImg.height();
					/*
					objImg.width(maxWidth).css("cursor","pointer").click(function(){  
					try{showModelessDialog(objImage.src);}catch(e){window.open(objImage.src);}  
					});  */				
				if(objImg.width() > objImg.height()){
					var max = objImg.width();
				}else{
					var max = objImg.height();
				}
				if( max >maxWidth){  
					if( rate > 1 ){
						objImg.width(maxWidth);
						objImg.height(maxWidth/rate)
					}else{
						objImg.height(maxWidth);
						objImg.width(maxWidth*rate)					
					}
				}else{
				/*
					if( rate > 1 ){
						objImg.width(maxWidth);
						objImg.height(maxWidth/rate)
					}else{
						objImg.height(maxWidth);
						objImg.width(maxWidth*rate)					
					}
					*/
				}
			}  
		}catch(e){};  
	}	
};
	
FFJS['Timepicker'] = {
	image_icon : 'images_png/date.png',
	hour_val : 0,
	min_val : 0,
	init : function( time_selector ) 
	{
		$(time_selector).each(function() {
			FFJS.Timepicker.initObj( $(this) );

			$(this).bind('keyup', function() {
				FFJS.Timepicker.updateSlider($(this));
			});
		});
	},
	initObj : function(obj) 
	{
		var img_code = '<img class="btn focusui-timepicker-icon" src="'+FFJS.Timepicker.image_icon+'"/>';			
		var tp_code = '';

		tp_code += '<table class="focusui-timepicker-parent" style="display:none; width:100%; padding:3px;">';
			tp_code += '<tr>';
				tp_code += '<td class="label" style="width:50px;">Hour</td>';
				tp_code += '<td class="slider">';
					tp_code += '<div class="slider hour" style="width:100%;"></div>';
				tp_code += '</td>';
			tp_code += '</tr>';
			tp_code += '<tr>';
				tp_code += '<td class="label" style="width:20%; margin-right:5px;">Min</td>';
				tp_code += '<td class="slider">';
					tp_code += '<div class="slider min" style="width:100%;"></div>';
				tp_code += '</td>';
			tp_code += '</tr>';				
		tp_code += '</table>';
		
		$(tp_code).insertAfter(obj);
		$(img_code).insertAfter(obj);
		
		var objImg = $(obj).next('img.focusui-timepicker-icon');			
		var objSlider = $(objImg).next('table.focusui-timepicker-parent');
		
		var hour_slider = objSlider.find('div.slider.hour');
		var min_slider = objSlider.find('div.slider.min');
		
		// Bind Obj Actions			
		objImg.bind('click', function() {
			FFJS.Timepicker.showTimePicker($(this));
		});			
		
		hour_slider.slider( {
			min : 8,
			max : 19,
			slide: function(event, ui) {
				FFJS.Timepicker.hour_val = ui.value;
				FFJS.Timepicker.update_timepicker_value(obj);
			}
		});
		
		min_slider.slider( {
			min : 0,
			max : 45,
			step : 15,
			slide: function(event, ui) {
				FFJS.Timepicker.min_val = ui.value;
				FFJS.Timepicker.update_timepicker_value(obj);
			}
		});
	},
	showTimePicker : function( imgObj ) 
	{
		var c_obj = $(imgObj).prev(':input');
		var objSlider = $(imgObj).next('table.focusui-timepicker-parent');
					
		objSlider.slideToggle('medium');
	},
	updateSlider : function( obj ) 
	{		
		var arr_val = $(obj).val().split(':');
		
		if (arr_val.length >= 2) {				
			var hr = parseInt(arr_val[0]);
			var min = parseInt(arr_val[1]);
			var slider_parent = $(obj).nextAll('table.focusui-timepicker-parent');				
			var hour_slider = slider_parent.find('div.slider.hour');			
			var min_slider = slider_parent.find('div.slider.min');
			hour_slider.slider('option', 'value', hr);
			min_slider.slider('option', 'value', min);
		}
	},
	update_timepicker_value : function( c_obj ) 
	{			
		var tp_value = FFJS.Timepicker.pad_zero(FFJS.Timepicker.hour_val, 2)+
			' : '+FFJS.Timepicker.pad_zero(FFJS.Timepicker.min_val, 2);
		
		$(c_obj).val(tp_value);
	},
	pad_zero : function(num, totalChars, padWith) 
	{			
		num = num + '';
		padWith = (padWith) ? padWith : "0";
		if (num.length < totalChars) {
			while (num.length < totalChars) {		
				num = padWith + num;
			}
		}			
		if (num.length > totalChars) { //if padWith was a multiple character string and num was overpadded
			num = num.substring((num.length - totalChars), totalChars);
		}			
		return num;	
	}		
};
	
FFJS['Scroller'] = {
	intval: null,
	init: function( selector, speed ){
		if( typeof(speed)=='underfind' )
		{
			speed = 50;
		}
		var parentBox = $(selector);
		parentBox.find('.scroller-forward')
			.bind('mouseover',function(event){ FFJS.Scroller.next( selector, speed ); })
			.bind('mouseout',function(event){ FFJS.Scroller.stop(); });
		parentBox.find('.scroller-backward')
			.bind('mouseover',function(event){ FFJS.Scroller.prev( selector, speed ); })
			.bind('mouseout',function(event){ FFJS.Scroller.stop(); })
			.css('display', 'none');
	}, 

	move: function( mode, selector) {		
		var parentBox = $(selector);
		var box = parentBox.find('.scroller-mainbody');
		var max = box.attr('scrollWidth') - box.width();
		
		if (mode == 'next') {
			if ( box.scrollLeft() == max ) {
				parentBox.find('.scroller-forward').css('display', 'none');
			}
			else {
				parentBox.find('.scroller-backward').css('display', '');
				box.scrollLeft(box.scrollLeft() + 1 );
			}										
		}
		else {
			if ( box.scrollLeft() == 0) {
				parentBox.find('.scroller-backward').css('display', 'none');
			}
			else {	
				parentBox.find('.scroller-forward').css('display', '');
				box.scrollLeft(box.scrollLeft() - 1 );										
			}
		}
	},
	
	next: function( selector, speed ){
		FFJS.Scroller.intval = setInterval("FFJS.Scroller.move('next', '"+ selector +"')", speed );
	},
	
	prev: function( selector, speed ){
		FFJS.Scroller.intval = setInterval("FFJS.Scroller.move('prev', '"+selector+"')", speed );
	},
	
	stop: function(){
		window.clearInterval(FFJS.Scroller.intval);
	}

};
	
FFJS['Vscroller'] = {
	v_intval: null,
	init: function( selector, speed ){
		if( typeof(speed)=='underfind' )
		{
			speed = 50;
		}
		var parentBox = $(selector);
		parentBox.find('.vscroller-up')
			.bind('mouseover',function(event){ FFJS.Vscroller.up( selector, speed ); })
			.bind('mouseout',function(event){ FFJS.Vscroller.stop(); })
			.css('display', 'none');
		parentBox.find('.vscroller-down')
			.bind('mouseover',function(event){ FFJS.Vscroller.down( selector, speed ); })
			.bind('mouseout',function(event){ FFJS.Vscroller.stop(); });			
	}, 

	move: function( mode, selector) {		
		var parentBox = $(selector);
		var box = parentBox.find('.vscroller-mainbody');
		var max = box.attr('scrollHeight') - box.height();
		
		if (mode == 'down') {
			if ( box.scrollTop() == max ) {
				parentBox.find('.vscroller-down').css('display', 'none');
			}
			else {
				parentBox.find('.vscroller-up').css('display', '');
				box.scrollTop(box.scrollTop() + 1 );
			}										
		}
		else {
			if ( box.scrollTop() == 0) {
				parentBox.find('.vscroller-up').css('display', 'none');
			}
			else {	
				parentBox.find('.vscroller-down').css('display', '');
				box.scrollTop(box.scrollTop() - 1 );										
			}
		}
	},
	
	up: function( selector, speed ){
		FFJS.Vscroller.v_intval = setInterval("FFJS.Vscroller.move('up', '"+ selector +"')", speed );
	},
	
	down: function( selector, speed ){
		FFJS.Vscroller.v_intval = setInterval("FFJS.Vscroller.move('down', '"+selector+"')", speed );
	},
	
	stop: function(){
		window.clearInterval(FFJS.Vscroller.v_intval);
	}
};

FFJS['Lookup'] = {
	xml: {},
	init: function( urlList, callback ){
		for( var x in urlList ){ 
			FFJS.Lookup.xml[x] = null;
		}
		$.each( urlList, function( name, url ){
			$.get( url, {}, function(data){ 
				FFJS.Lookup.xml[ name ] = $(data); 
				for( var x in FFJS.Lookup.xml ){ 
					if( FFJS.Lookup.xml[x]==null ){ 
						return;
					}
				}
				if( callback!=undefined )
				{
					callback();
				}
			}, 'xml' );
		});
	},
	ready: function( name, func, timeout )
	{
		timeout = (timeout==undefined)? 100 : 0;
		if( FFJS.Lookup.xml[name]!=null )
		{
			func();
		}
		else
		{
			var delayFunc = function(){
				FFJS.Lookup.ready( name, func, timeout );
			};
			setTimeout( delayFunc, timeout );
		}
	},
	getValue: function( name, id ){
		return FFJS.Lookup.xml[name].find('[id='+id+']').text();
	},
	match: function( selector, name ){
		$( selector ).each(function(){
			var result = FFJS.Lookup.xml[name].find('[id='+$(this).text()+']');
			if( result.length > 0 )
			{
				$(this).html( result.text() );
			}
		});
	},
	appendOptions: function( selector, name, filter, emptyStr ){
		filter = (filter==undefined)? 'data' : 'data'+filter;
		emptyStr = (emptyStr==undefined)? '-----' : emptyStr;
		var opt = '<option value="">'+emptyStr+'</option>';
		var fData = FFJS.Lookup.xml[name].find(filter);
		for( var i=0; i<fData.length; i++ )
		{
			var data = fData.eq(i);
			opt += '<option value="'+data.attr('id')+'">'+data.text()+'</option>';
		}
		$( selector ).append( opt );
	}
};

FFJS['Div'] = {
	setting: {	
	},

	init: function( module_param ){
	},
	
	toggle_div : function(selector,target) {
		var ad='';
		if(target == undefined){			
			if (typeof FFJS.SearchUI.setting[selector].div_target == 'undefined'){
				ad = $(selector);
			}else{
				ad = $(FFJS.SearchUI.setting[selector].div_target);
			}
		}else{
			ad = $(target);
		}
		ad.toggle();

		ad = null;
	},
	
	switch_div : function(selector,div1,div2){
		if(div2 == undefined){
			$(div1).focus();
			var pos = $(div1).offset().top;
			$("html,body").animate({ scrollTop: pos }, 1000);
		}else{	
			if($(div1).is(':visible')){
				FFJS.Div.toggle_div(selector,div1);
				FFJS.Div.toggle_div(selector,div2);
			}
		}
	},
			
	show_div : function(selector,target) {
		var ad='';
		if(target == undefined){
			if (typeof FFJS.SearchUI.setting[selector].div_target == 'undefined'){
				ad = $(selector);
			}else{
				ad = $(FFJS.SearchUI.setting[selector].div_target);
			}
		}else{
			ad = $(target);
		}
		//ad.toggle();
		if (!ad.hasClass('show')) {
			ad.slideDown('medium');
			ad.addClass('show');			
		}
		ad = null;
	},
	
	hide_div : function(selector,target) {	
		var ad='';
		if(target == undefined){
			if (typeof FFJS.SearchUI.setting[selector].div_target == 'undefined'){
				ad = $(selector);
			}else{
				ad = $(FFJS.SearchUI.setting[selector].div_target);
			}
		}else{
			ad = $(target);
		}
		if (ad.hasClass('show')) {
			ad.slideUp('medium');
			ad.removeClass('show');
			
		}
		ad = null;
	}
};

FFJS['CMS'] =  {
	url_root : null,
	page_section : null,
	last_load : '',
	div_id :'',
	error:false,
	loading_html : '<div style="padding: 5px;"><img src="images/loading.gif" style="display: block; margin-left: auto; margin-right: auto;"></div>'+
					'<div style="font-size:14px; text-align: center;">Loading.....</div>',
	
	refresh: function() {		
		var url_root = FFJS.CMS.url_root;
		
		window.location.href = url_root;
	},
	logout: function(){
		if (confirm('Are you sure to logout ?')) {	
			FFJS.CMS.showLoading();
			var data = {};
			$.post( FFJS.CMS.url_root + 'session/logout', data, function(xml){ FFJS.CMS.refresh(xml) }, 'xml' );
		}
	},
	showLoading: function() {			
		$('#dialog').html(FFJS.CMS.loading_html);
		
		FFJS.Dialog.init(300, 180, 'Login');
		FFJS.Dialog.modal_val = true;
		FFJS.Dialog.open('#dialog');				
	},
	closeLoading: function() {
		$('#dialog').html('');			
		FFJS.Dialog.close();
	},
	load_page : function(target, post_section, pass_method,callback) {
		var method = '';
		if (pass_method != undefined) {
			method = pass_method;
		}
		
		var callback11 = function(response, status, xhr){
			if( callback!= undefined )
			{
				callback(response, status, xhr);				
			}else{
				setTimeout("FFJS.Dialog.close();", 200);
			}				
		};
		
		$('#dialog').html(FFJS.CMS.loading_html);
		FFJS.Dialog.modal_val = false;
		FFJS.Dialog.init(32, 32);
		FFJS.Dialog.blank_dialog('#dialog');
		
		var post_to = FFJS.CMS.url_root+post_section+'/'+method;
		FFJS.CMS.last_load = post_to;		
		$(target).load(post_to, callback11);
	},
	
	refresh_page : function(target) {		
		$('#dialog').html(FFJS.CMS.loading_html);
		FFJS.Dialog.modal_val = true;
		FFJS.Dialog.init(32, 32);
		FFJS.Dialog.blank_dialog('#dialog');
		
		$(target).load(FFJS.CMS.last_load, function() {setTimeout("FFJS.Dialog.close();", 200);} );
	},
	
	load_url : function(target, url) {
		var post_to = FFJS.CMS.url_root+url;
		$(target).load(post_to);
	},
	
	load_content : function(target, url) {
		var post_to = FFJS.CMS.url_root+url;		
		$(target).load(post_to, function() {setTimeout("FFJS.Dialog.close();", 200);} );
	}
};	

FFJS.CMS['Lookup'] = FFJS.Lookup;
