   // code for coloring
date	task	desc	
10/11	//tree view with check box	F:\wamp\www\git_repos\GitHub\GeneralUtility\chrome_plugin\tree	http://jsfiddle.net/TrueBlueAussie/0s0p3716/20/			//https://www.google.com.hk/search?newwindow=1&es_sm=122&q=javascript+treeview+with+checkbox+stack+overflow&spell=1&sa=X&ved=0CBkQBSgAahUKEwiKl52Jv7nIAhUEXqYKHYjuASU&biw=1280&bih=643			//http://wwwendt.de/tech/dynatree/	
		//http://stackoverflow.com/questions/10920514/using-ajax-jquery-to-refresh-an-image	$img.attr('src'
		//http://www.w3schools.com/jquery/jquery_ref_selectors.asp
		http://www.cnblogs.com/cutepig/p/4865199.html
		ajax attr vs prop	
		$el.prop('checked');vs $el.is(':checked');vs $el.attr("checked");vs $el[0].checked;	https://jsperf.com/prop-vs-ischecked/5
		//showing-contents-of-array-object	JSON.stringify(data)
			
	javascript the good parts	F:\JS	
			
	node basics		
	node vs erlang		
			
	深圳到香港轉運	https://lixinjiyuen.world.taobao.com/search.htm?spm=a312a.7728556.w1006-2238487862.18.Eu7umN&scid=673883719&scname=%C9%B3%B0%6C%A1%A2%B4%B2%B5%C8%BC%D2%CB%BD%BC%AF%DF%5C&checkedRange=true&queryType=cat	
		http://world.taobao.com/item/21202600049.htm?spm=a312a.7728556.1414651174895.5.Eu7umN&scm=1007.10146.6070.0&id=21202600049&pvid=f18503c5-e7d3-4d1d-9614-b3e316183862	
			
	沙发	https://item.taobao.com/item.htm?spm=a312a.7728559.2014082902.1.7ofpUB&id=41350745627&_lang=zh_CN:TB-GBK&thwarea=hw&toSite=main	
		http://www.ikea.com/hk/zh/catalog/categories/departments/living_room/10661/	

	英语	
		马云的英语	https://www.youtube.com/watch?v=dllavGZ7abI
		singapore english
		ted		https://www.youtube.com/watch?v=HAnw168huqA
		
	岗厦村租房
	
10/14	//Impl a task scheduler F:\wamp\www\git_repos\GitHub\GeneralUtility\TestBoost
		//还缺什么？效率不是最好，如果queue里面有多个task，而因为只有一个event，现在的做法会导致最终都会在一个thread里面执行，效率会不理想（可以参考那个event+lock+count的做法，用来跟踪queue大小，只要有task就能不停地等到event）
		//需要用户派好task顺序，以后应该支持类似于task的lib，用户乱序输入task，只要告诉互相依赖关系，其余的都在lib里面搞定了 (再说了)
		
10/16	//学习boost threadgroup的做法		http://stackoverflow.com/questions/19500404/how-to-create-a-thread-pool-using-boost-in-c
		//Synchronized Queues http://www.boost.org/doc/libs/1_59_0/doc/html/thread/sds.html
		
		现在居然有这么多pattern了 https://en.wikipedia.org/wiki/Concurrency_pattern
		
		//search from google: how to implement a thread pool学习别人的思路
		//implement a blocking queue dequeue操作会一直等待直到拿到一个task	http://stackoverflow.com/questions/20110013/implement-your-own-blocking-queue-in-java http://tutorials.jenkov.com/java-concurrency/blocking-queues.html 
		//how to implement a BlockingQueue c++
		what is monitor?
		//what is condition variable? 1) wait(scoped_lock & lock) 2) notify_one 3) notify_all http://codereview.stackexchange.com/questions/12052/implementation-of-concurrent-blocking-queue-for-producer-consumer https://msdn.microsoft.com/en-us/library/windows/desktop/ms686903(v=vs.85).aspx
		//Java: notify() vs. notifyAll() all over again
		//http://stackoverflow.com/questions/6316286/condition-variable-alternatives-c-c-on-windows-xp
		
10/17	how to convert a recursive function to non-recursive? http://www.codeproject.com/Articles/418776/How-to-replace-recursive-functions-using-stack-and
		//film: LIan Ai De Wei Dao
		Continuation passing style (CPS) 	http://www.zhihu.com/question/20259086 https://en.wikipedia.org/wiki/Continuation-passing_style
		CPS脱糖处理
		原语call-with-current-continuation（通常称作call/cc） https://en.wikipedia.org/wiki/Call-with-current-continuation http://stackoverflow.com/questions/612761/what-is-call-cc
		//film: Zhonjie zhe, X zhanjing
		Wangyin's blog http://www.yinwang.org/
		sicp
10/18	DIscuss with Dapeng for the PP proj 
		//Export and decrypt whats app data F:\WhatsApp  https://www.youtube.com/watch?v=fDEvAATH1m4 moni crypt + whatsapp viewer
		//learn how whatsapp viewer custom control impl?
		