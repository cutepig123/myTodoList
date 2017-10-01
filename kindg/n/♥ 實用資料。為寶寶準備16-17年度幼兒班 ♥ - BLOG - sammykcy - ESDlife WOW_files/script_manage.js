/*
	[UCenter Home] (C) 2007-2008 Comsenz Inc.
	$Id: script_manage.js 10342 2008-12-01 08:04:24Z liguode $
*/

//添加留言
function wall_add(cid, result) {
	if(result) {
		var obj = $('comment_ul');
		var newli = document.createElement("div");
		var x = new Ajax();
		x.get('do.php?ac=ajax&op=comment', function(s){
			newli.innerHTML = s;
		});
		obj.insertBefore(newli, obj.firstChild);
		if($('comment_message')) {
			$('comment_message').value= '';
		}
	}
}

//添加分享
function share_add(sid, result) {
	if(result) {
		var obj = $('share_ul');
		var newli = document.createElement("div");
		var x = new Ajax();
		x.get('/do.php?ac=ajax&op=share', function(s){
			newli.innerHTML = s;
		});
		obj.insertBefore(newli, obj.firstChild);
		$('share_link').value = 'http://';
		$('share_general').value = '';
	}
}
//添加評論
function comment_add(cid, result) {
	if(result) {
		var obj = $('comment_ul');
		var newli = document.createElement("div");
		var x = new Ajax();
		x.get('/do.php?ac=ajax&op=comment', function(s){
			newli.innerHTML = s;
		});
		obj.appendChild(newli);
		if($('comment_message')) {
			$('comment_message').value= '';
		}
		if($('comment_replynum')) {
			var a = parseInt($('comment_replynum').innerHTML);
			var b = a + 1;
			$('comment_replynum').innerHTML = b + '';
		}
	}
}
//編輯
function comment_edit(cid, result) {
	if(result) {
		var obj = $('comment_'+ cid +'_li');
		var x = new Ajax();
		x.get('/do.php?ac=ajax&op=comment&cid='+ cid, function(s){
			obj.innerHTML = s;
		});
	}
}
//刪除
function comment_delete(cid, result) {
	if(result) {
		var obj = $('comment_'+ cid +'_li');
		obj.style.display = "none";
		if($('comment_replynum')) {
			var a = parseInt($('comment_replynum').innerHTML);
			var b = a - 1;
			$('comment_replynum').innerHTML = b + '';
		}
	}
}
//刪除feed
function feed_delete(feedid, result) {
	if(result) {
		var obj = $('feed_'+ feedid +'_li');
		obj.style.display = "none";
	}
}
//刪除短訊息
function pm_delete(pmid, result) {
	if(result) {
		var obj = $('pm_'+ pmid +'_li');
		obj.style.display = "none";
	}
}
//刪除分享
function share_delete(sid, result) {
	if(result) {
		var obj = $('share_'+ sid +'_li');
		obj.style.display = "none";
	}
}
//刪除好友
function friend_delete(uid, result) {
	if(result) {
		var obj = $('friend_'+ uid +'_li');
		if(obj != null) obj.style.display = "none";
	}
}
//更改分組
function friend_changegroup(uid, result) {
	if(result) {
		var obj = $('friend_group_'+ uid);
		var x = new Ajax();
		x.get('do.php?ac=ajax&op=getfriendgroup&uid='+uid, function(s){
			obj.innerHTML = s;
		});
	}
}
//更改分組名
function friend_changegroupname(group, result) {
	if(result) {
		var obj = $('friend_groupname_'+ group);
		var x = new Ajax();
		x.get('do.php?ac=ajax&op=getfriendname&group='+group, function(s){
			obj.innerHTML = s;
		});
	}
}
//添加回帖
function post_add(pid, result) {
	if(result) {
		var obj = $('post_ul');
		var newli = document.createElement("div");
		var x = new Ajax();
		x.get('do.php?ac=ajax&op=post', function(s){
			newli.innerHTML = s;
		});
		obj.appendChild(newli);
		if($('message')) {
			$('message').value= '';
			newnode = $('quickpostimg').rows[0].cloneNode(true);
			tags = newnode.getElementsByTagName('input');
			for(i in tags) {
				if(tags[i].name == 'pics[]') {
					tags[i].value = 'http://';
				}
			}
			var allRows = $('quickpostimg').rows;
			while(allRows.length) {
				$('quickpostimg').removeChild(allRows[0]);
			}
			$('quickpostimg').appendChild(newnode);
		}
		if($('post_replynum')) {
			var a = parseInt($('post_replynum').innerHTML);
			var b = a + 1;
			$('post_replynum').innerHTML = b + '';
		}
	}
}
//BEGIN : with upload picture feature post_add
//by Edward 20100827
//new 添加回帖 
function post_add_new(pid, result) {
	if(result) {
		var obj = $('post_ul');
		var newli = document.createElement("div");
		var x = new Ajax();
		x.get('do.php?ac=ajax&op=post', function(s){
			newli.innerHTML = s;
		});
		obj.appendChild(newli);
		if($('message')) {
			$('message').value= '';
			/*
			newnode = $('quickpostimg').rows[0].cloneNode(true);
			tags = newnode.getElementsByTagName('input');
			for(i in tags) {
				if(tags[i].name == 'pics[]') {
					tags[i].value = 'http://';
				}
			}
			var allRows = $('quickpostimg').rows;
			while(allRows.length) {
				$('quickpostimg').removeChild(allRows[0]);
			}
			$('quickpostimg').appendChild(newnode);
			*/
		}
		if($('post_replynum')) {
			var a = parseInt($('post_replynum').innerHTML);
			var b = a + 1;
			$('post_replynum').innerHTML = b + '';
		}
	}
}
//END : with upload picture feature post_add
//by Edward 20100827

//編輯回帖
function post_edit(pid, result) {
	if(result) {
		var obj = $('post_'+ pid +'_li');
		var x = new Ajax();
		x.get('do.php?ac=ajax&op=post&pid='+ pid, function(s){
			obj.innerHTML = s;
		});
	}
}
//刪除回帖
function post_delete(pid, result) {
	if(result) {
		var obj = $('post_'+ pid +'_li');
		obj.style.display = "none";
		if($('post_replynum')) {
			var a = parseInt($('post_replynum').innerHTML);
			var b = a - 1;
			$('post_replynum').innerHTML = b + '';
		}
	}
}
//打招呼
function poke_send(uid, result) {
	if(result) {
		if($('poke_'+ uid)) {
			$('poke_'+ uid).style.display = "none";
		}
	}
}
//刪除好友請求
function myfriend_post(uid, result) {
	if(result) {
		$('friend_'+uid).innerHTML = "添加當前好友成功了。您可以 <a href=\"space.php?uid="+uid+"\" target=\"_blank\">訪問好友的主頁</a>";
	}
}
//加入小圈子
function mtag_join(tagid, result) {
	if(result) {
		location.reload();
	}
}

//選擇圖片
function picView(albumid) {
	if(albumid == 'none') {
		$('albumpic_body').innerHTML = '';
	} else {
		ajaxget('do.php?ac=ajax&op=album&id='+albumid+'&ajaxdiv=albumpic_body', 'albumpic_body');
	}
}

//BEGIN : album choose at quick reply post
//by Edward 20100827
//選擇圖片2
function picView_post(albumid) {
	if(albumid == 'none') {
		$('albumpic_body').innerHTML = '';
	} else {
		ajaxget('do.php?ac=ajax&op=album_post&id='+albumid+'&ajaxdiv=albumpic_body', 'albumpic_body');
	}
}

function picView_edit(albumid, pid) {
	if(albumid == 'none') {
		$('albumpic_body').innerHTML = '';
	} else {
		ajaxget('do.php?ac=ajax&op=album_edit&pid='+pid+'&id='+albumid+'&ajaxdiv=albumpic_body', 'albumpic_body');
	}
}
//END : album choose at quick reply post
//by Edward 20100827

//刪除重發郵件
function resend_mail(id, result) {
	if(result) {
		var obj = $('sendmail_'+ id +'_li');
		obj.style.display = "none";
	}
}

function myfriend(id) {
	var liid = id.substr(6);
	$('friend_'+liid).innerHTML = "已經忽略當前的好友請求";
}

//設置應用不可見
function userapp_delete(appid, result) {
	if(result) {
		$('space_app_'+appid).style.display = "none";
	}
}
