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
		
		so many pattern了 https://en.wikipedia.org/wiki/Concurrency_pattern
		
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
		
		Read NB vczh's blog
10/19		
		//task parallism  Braided task-granularity  Persistent threads  Dynamic queuing  Dependency resolution 
		PPL https://paoloseverini.wordpress.com/2014/04/07/concurrency-in-c11/ https://msdn.microsoft.com/en-us/library/ee207192.aspx
		work-stealing algorithm	https://en.wikipedia.org/wiki/Work_stealing http://stackoverflow.com/questions/9081382/work-stealing-algorithm
		Java fork/join framework,[4] and the .NET Task Parallel Library.[5]
		Dataflow programming	https://en.wikipedia.org/wiki/Dataflow_programming
		cooperative task scheduling and cooperative blocking
		
1020	Electron
		http://i.100offer.com/projects/result https://github.com/leanote/desktop-app
		http://stackoverflow.com/questions/704855/software-design-vs-software-architecture https://en.wikipedia.org/wiki/Software_design
1027	how-should-i-unit-test-threaded-code
			http://stackoverflow.com/questions/12159/how-should-i-unit-test-threaded-code
			https://www.google.com.hk/search?hl=zh-HK&source=hp&biw=&bih=&q=how+to+test+multithreaded+code&gbv=2&oq=how+to+test+multithre&gs_l=heirloom-hp.1.5.0i30l3j0i13i10i30j0i30l5j0i10i30.1315.10568.0.16102.21.17.0.4.4.0.200.1505.11j3j1.15.0....0...1ac.1.34.heirloom-hp..2.19.1577.CGH0fFmJPhk
		
		Cache coherency
			https://fgiesen.wordpress.com/2014/07/07/cache-coherency/
			
1029			
		architecture of node.js
1103
		//flicker free drawing https://msdn.microsoft.com/en-us/library/ms969905.aspx
		rust http://special.csdncms.csdn.net/rust/index.shtml
		android ui http://blog.csdn.net/nugongahou110/article/details/49557875
		http://wsztrush.github.io/dsl/2015/08/01/Compiler-Theory.html
		nodejs archi A:\JSHe\docs\nodejsSubmission2.pdf
		http://thenodeway.io/introduction/
		
1021	Cholesky 分解
		
		https://github.com/pedrovgs/EffectiveAndroidUI
		
		write a MFC control ( support N in, M out, and some properties), and support user connect N control together
		ref F:\wamp\www\git_repos\GitHub\GeneralUtility\UI\MFCRectTrack
		F:\wamp\www\git_repos\GitHub\GeneralUtility\UI\qtransformtracker
		F:\wamp\www\git_repos\GitHub\GeneralUtility\UI\scriptstudio_src
		UpdateWindow vs invalidate vs RedrawWindow ?
		//DrawText VS TextOut Win32? 
		
1023	//sui bian kank kan F:\wamp\www\git_repos\GitHub\GeneralUtility\alg\alg
1025		
		//学习direct ui https://github.com/miniwebkit  -- compile erro, to make this work is hard, i'd rather got a Node.JS ui lib directly
		http://www.zhihu.com/question/24462113 F:\_codes\edxgui.zip
		//学习下 WTL 的 thunk	--useless
		yanjiu F:\wamp\www\git_repos\GitHub\GeneralUtility\Win\GuiPreview_Regex\Library\Windows
		//what is WPF冒泡事件? 预览事件（隧道事件）	http://www.cnblogs.com/luminji/archive/2011/02/04/1949142.html
		what is dependency property?
		Parser Combinators?
		context-free grammar ? 只要算出一个grammar 的predict set，就能很容易写出一个LL(1) parser。
		http://bolt.xunlei.com/
		学习Qt最新版
		Windows Graphics Programming by Feng Yuan
		A Guide to WIN32 Clipping Regions http://www.codeproject.com/Articles/2095/A-Guide-to-WIN-Clipping-Regions
		PatBlt vs paintRgn
		windows grapohic programming
		opengl programming
1029	JSＥｘａｍ　		http://www.mitbbs.com/article_t/Programming/31196029.html
1030	阅读windows图形编程	开头--》2.6节
			DirectX DDI interface
		architecture of android graphics?
		
1117
		API hook, instrument member function, global function, virtual function
		
		multiple top most window which is the top most?
1118	WPA	https://msdn.microsoft.com/en-us/library/windows/hardware/hh162931.aspx
			Windows Performance Analyzer (WPA)
			Windows Performance Recorder (WPR) or Xperf.
			
		//A:\JSHe\codes\python\compare_folder.py
		