(function($) {
	
	var baby_banner_div_id			= "div-gpt-ad-1275354225099-0";
	var content_banner_1_div_id		= "div-gpt-ad-1275354225099-1";
	var content_banner_2_div_id		= "div-gpt-ad-1275354225099-2";
	var in_blog_1_div_id			= "div-gpt-ad-1275354225099-3";
	var in_blog_2_div_id			= "div-gpt-ad-1275354225099-4";
	var mobile_first_view_div_id	= "div-gpt-ad-1275354225099-5";
	var skyscraper_div_id			= "div-gpt-ad-1275354225099-6";
	var content_banner_3_div_id		= "div-gpt-ad-1275354225099-7";
	
	googletag.cmd.push(function() {
		// Content banner 3
		googletag.defineSlot('/194146008/MrsClub_Blog_CB3_300x250', [300, 250], content_banner_3_div_id)
			.addService(googletag.pubads());

		// Baby banner
		googletag.defineSlot('/194146008/MrsClub_Blog_BB_300x60', [300, 60], baby_banner_div_id)
			.addService(googletag.pubads());
			
		// In-blog 1
		googletag.defineSlot('/194146008/MrsClub_Blog_InBlog1_640x170', [640, 170], in_blog_1_div_id)
			.addService(googletag.pubads());
		
		// In-blog 2
		googletag.defineSlot('/194146008/MrsClub_Blog_InBlog2_640x170', [640, 170], in_blog_2_div_id)
			.addService(googletag.pubads());
			
		// Mobile first view
		googletag.defineOutOfPageSlot('/194146008/MrsClub_Blog_MobileFirstView', mobile_first_view_div_id)
			.addService(googletag.pubads());
			
		// Skyscraper
		var skyscraper = googletag.defineSlot('/194146008/MrsClub_Blog_SS_300x600', [300, 600], skyscraper_div_id)
			.addService(googletag.pubads());
			
		$(document).ready(function(e) {
            $("#"+content_banner_1_div_id).hide();
			$("#"+content_banner_2_div_id).hide();		
        });
		
			
		//Let the skyscraper render first, if it does not generate any banner,
		//then show content banners out. Otherwise, content banners will not be shown.
		googletag.pubads().addEventListener('slotRenderEnded', function(event) {
			if (event.slot === skyscraper && event.isEmpty) {	
				$(document).ready(function(e) {
                    $("#"+content_banner_1_div_id).show();
					$("#"+content_banner_2_div_id).show();	
                });
							
				// Content banner 1
				googletag.defineSlot('/194146008/MrsClub_Blog_CB1_300x250', [300, 250], content_banner_1_div_id)
					.addService(googletag.pubads());
					
				// Content banner 2
				googletag.defineSlot('/194146008/MrsClub_Blog_CB2_300x250', [300, 250], content_banner_2_div_id)
					.addService(googletag.pubads());
				
				googletag.cmd.push(function() {
					googletag.display(content_banner_1_div_id);
					googletag.display(content_banner_2_div_id);
				});
			}
		});
			
		googletag.pubads().collapseEmptyDivs();
		googletag.pubads().enableSingleRequest();
		googletag.enableServices();
	}); //End googletag.cmd.push()
		
})(jQuery);