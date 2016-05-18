function initBtn(obj,clickFunction){
	obj.hover(function(){
		$(this).addClass("select")
	},function(){
		$(this).removeClass("select")
	})
	if(Boolean(clickFunction)){
		obj.click(clickFunction)	
	}
}
function showPopup(model_id, detail_data_set, url_root){
    var img_html = '';
    var title_html = '';
    var date_html = '';
    var content_html = '';
    title_html = detail_data_set.children(".popup_source_title").html();
    content_html = detail_data_set.children(".popup_source_content").html();
    date_html = detail_data_set.children(".popup_source_date").html();
    switch(model_id){
        case 1:
            img_html = detail_data_set.children(".popup_source_image").html();
            break;
        case 2:
        case 3:
        case 5:
        case 4:
            img_html = outputImg(detail_data_set.children(".popup_source_image").html().split(","), url_root);
            if(model_id == 4){
                model_id = 1;
            }
            break;
        default:
            return false;
            break;
    }
    $("#popup_"+model_id+" .popup_date").html(date_html);
    $("#popup_"+model_id+" .popup_image").html(img_html);
    $("#popup_"+model_id+" .popup_title").html(title_html);
    $("#popup_"+model_id+" .popup_content").html(content_html);
    $("#popup_"+model_id).show();
    $("#popup").show();
    $("#popup").css('height',$(document).height());
}
function outputImg(img, url_root){
    var img_html = '';
    var css = "big_image";
    if(img.length == 1){
        css = "just_one";
    }
    for(var i in img){
        img_html += '<img src="'+url_root+'/get_doc/image/'+img[i]+'" class="'+css+'">';
    }
    return img_html;
}
$(document).ready(function(){
    $(".popup_close").click(function() {
        $(".popup_top").hide();
        $(".popup").hide();
    });
});