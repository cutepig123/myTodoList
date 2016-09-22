// JScript File

function ctrPopup(url, title, w, h) {
    //var x = (getWidth() - w) / 2;
    var x = (screen.availWidth - w) / 2;
    var y = (screen.availHeight - h) / 2;
    var props = "resizable=1,scrollbars=1,width=" + w + ",height=" + h + ",left=" + x + ",top=" + y;
    var win = self.open(url, title, props);
    win.focus();
}

function fullWindow(url, title) {
    var win = self.open(url, title);
    win.window.moveTo(-4, -4);
    win.window.resizeTo(screen.availWidth + 8, screen.availHeight + 8);
    win.focus();
}

function chkDate(oSrc, args) {
    args.IsValid = checkVerifyDate(args, "yyyy/mm/dd");
}

//----- Show a popup upon a dimmed layer -----
function getWidth() {
    var x = 2000;
    x = min(x, self.innerWidth);
    x = min(x, document.documentElement.clientWidth);
    //x = min(x, document.body.clientWidth);
    x = min(x, screen.availWidth);
    x = min(x, self.screen.width);
    return x;
}

function getHeight() {
    var x = 2000;
    x = min(x, self.innerHeight);
    x = min(x, document.documentElement.clientHeight);
    //x = min(x, document.body.clientHeight);
    x = min(x, screen.availHeight);
    x = min(x, self.screen.height);
    return x;
}

function min(x, y) {
    return (y > 0 && y < x) ? y : x;
}

function showPopup(y, w, h) {
    var aw = getWidth();
    var ah = getHeight();

    var busy = document.getElementById('busy');
    if (busy) {
        busy.style.top = "0px";
        busy.style.left = "0px";
        busy.style.width = aw;
        busy.style.height = ah;
        busy.style.visibility = "visible";
    }

    var cover = document.getElementById('cover');
    cover.style.left = 0; // (aw - w) / 2;
    cover.style.top = 0; // y;
    cover.style.visibility = "visible";

    return false;
}

function closePopup() {
    var busy = document.getElementById('busy');
    if (busy) busy.style.visibility = "hidden";

    var cover = document.getElementById('cover');
    cover.style.visibility = "hidden";
}

// [dFilter] - A Numerical Input Mask for JavaScript
// Written By Dwayne Forehand - March 27th, 2003
// Please reuse & redistribute while keeping this notice.

var dFilterStep

function dFilterStrip(dFilterTemp, dFilterMask) {
    dFilterMask = replace(dFilterMask, '#', '');
    for (dFilterStep = 0; dFilterStep < dFilterMask.length++; dFilterStep++) {
        dFilterTemp = replace(dFilterTemp, dFilterMask.substring(dFilterStep, dFilterStep + 1), '');
    }
    return dFilterTemp;
}

function dFilterMax(dFilterMask) {
    dFilterTemp = dFilterMask;
    for (dFilterStep = 0; dFilterStep < (dFilterMask.length + 1); dFilterStep++) {
        if (dFilterMask.charAt(dFilterStep) != '#') {
            dFilterTemp = replace(dFilterTemp, dFilterMask.charAt(dFilterStep), '');
        }
    }
    return dFilterTemp.length;
}

function dFilter(key, textbox, dFilterMask) {
    dFilterNum = dFilterStrip(textbox.value, dFilterMask);

    if (key == 9) {
        return true;
    }
    else if (key == 8) //backspace
    {
        if (dFilterNum.length != 0) { dFilterNum = dFilterNum.substring(0, dFilterNum.length - 1); }
        else {
            return true;
        }
    }
    else if (((key > 47 && key < 58) || (key > 95 && key < 106)) && dFilterNum.length < dFilterMax(dFilterMask)) {
        if (key > 95 && key < 106) { key -= 48; }
        dFilterNum = dFilterNum + String.fromCharCode(key);
    }
    else if ((key == 191) || (key == 111)) //[Ian.Shum 20090616] need to revise for other type of date format...or simply remove this condition
    {
        if (dFilterNum.length == 1) {
            dFilterNum = "0" + dFilterNum;
        } else if (dFilterNum.length == 3) {
            var tmpFilterNum = dFilterNum.substring(0, 2) + "0" + dFilterNum.substring(2, dFilterNum.length);
            dFilterNum = tmpFilterNum;
        }
    }

    var dFilterFinal = '';
    for (dFilterStep = 0; dFilterStep < dFilterMask.length; dFilterStep++) {
        if (dFilterMask.charAt(dFilterStep) == '#') {
            if (dFilterNum.length != 0) {
                dFilterFinal = dFilterFinal + dFilterNum.charAt(0);
                dFilterNum = dFilterNum.substring(1, dFilterNum.length);
            }
            else {
                dFilterFinal = dFilterFinal + "";
            }
        }
        else if (dFilterMask.charAt(dFilterStep) != '#') {
            dFilterFinal = dFilterFinal + dFilterMask.charAt(dFilterStep);
        }
    }

    textbox.value = dFilterFinal;
    return false;
}

function replace(fullString, text, by) {
    // Replaces text with by in string
    var strLength = fullString.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return fullString;

    var i = fullString.indexOf(text);
    if ((!i) && (text != fullString.substring(0, txtLength))) return fullString;
    if (i == -1) return fullString;

    var newstr = fullString.substring(0, i) + by;

    if (i + txtLength < strLength)
        newstr += replace(fullString.substring(i + txtLength, strLength), text, by);

    return newstr;
}