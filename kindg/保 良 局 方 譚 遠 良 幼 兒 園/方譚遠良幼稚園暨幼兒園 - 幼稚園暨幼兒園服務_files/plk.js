
//jQuery(function ($) {
/************** start: functions. **************/
function changelang() {
    var temp = $(location).attr('href');
    if (temp.indexOf("/tc/") > 0) {
        temp = temp.replace("/tc/", "/en/");
        window.location.href = temp;
    }
    else if (temp.indexOf("/en/") > 0) {
        temp = temp.replace("/en/", "/tc/");
        window.location.href = temp;
    }
}

/************** end: functions. **************/
//});  // jQuery End