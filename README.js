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
		windows rpc?
		LPC?
		
1031	香港 室内空气质素检测
			香港检测和认证局 http://www.hkctc.gov.hk/sc/pst_construction_materials_d.html 室 内 空 气 质 素 量 度 和 检 验  http://www.iaq.gov.hk/tc/iaq-certification-scheme/certification-steps.aspx
			http://www.iaq.gov.hk/media/2858/poster5.jpg
			表1： 辦公室及公眾場所的室內空氣質素指標 http://www.iaq.gov.hk/media/9745/tables_ch.html#T1
			http://www.iaq.gov.hk/guidance/ch_publications_guidance.htm
			
			IAQ Information Centre HK - 室內空氣質素資訊中心
			http://www.castco.com.hk/services/envir_air.aspx
			http://www.roboclean.com.hk/chi/index.htm
			
			甲醛 (HCHO)	<30f μg/m3, or < 24 ppbv
			
1102	
1104
		android vs linux ui architecture
1105
		程序员一般通过什么途径接私活？ - 兼职- 知乎
		//zhengli F:\wamp\www\git_repos\GitHub\myTodoList -->github
		//chengli F:\wamp\www\git_repos\GitHub\vislib1 -->bitbucket
		
1107	
		//换领通行证hkd290
		老是有please wait while windows configures microsoft visual studio professional 2013
		windows右键菜单很慢
		保险
1108		
				what-is-the-difference-between-mutex-and-critical-section?
		http://stackoverflow.com/questions/800383/what-is-the-difference-between-mutex-and-critical-section
		Linux futexes
			http://www.akkadia.org/drepper/futex.pdf
			
		Synchronization primitives 
			such as mutexes, semaphores, and critical sections	
				impl detail?
			error conditions such as deadlock, livelock, and priority inversion
			
		non-blocking algorithms 
			use atomic read-modify-write primitives:CAS primitive	??
			data structures such as stacks, queues, sets, and hash tables ??
			
		https://en.wikipedia.org/wiki/Non-blocking_algorithm
			memory barrier		??
			ring buffer FIFO	??
				 can unconditionally be implemented safely using only a memory barrier
			in 2011 Kogan and Petrank[14] presented a wait-free queue building on the CAS primitive, 	??
			
		3 Wait-freedom		every operation has a bound on the number of steps the algorithm will take before the operation completes
		4 Lock-freedom
		5 Obstruction-freedom
			

		- task optimization
		- aGUanzexin
		- BinSkip

		Raytrace https://msdn.microsoft.com/en-us/magazine/cc163340.aspx
		http://blogs.msdn.com/lukeh/archive/2007/04/03/a-ray-tracer-in-c-3-0.aspx

		3d point cloud opencv
			http://pointclouds.org/
			https://www.google.com.hk/search?hl=zh-HK&source=hp&q=3d+point+cloud+opencv&gbv=2&oq=3d+point+&gs_l=heirloom-hp.3.1.0l10.5744.7429.0.10059.9.7.0.2.2.0.241.927.2j4j1.7.0....0...1ac.1.34.heirloom-hp..0.9.952.3aQOWeWuMko
		generate point cloud from a CAD model
		3d point cloud display
			PCLVisualizer
		compute graphics visualization
		3d point cloud to 3d printer format

	jobs：	https://careers.microsoft.com/jobdetails.aspx?ss=&pg=0&so=&rw=6&jid=204494&jlang=EN&pp=SS
1109 
	how to imple a critical section
	LONG __cdecl InterlockedCompareExchange(
	  _Inout_ LONG volatile *Destination,
	  _In_    LONG          Exchange,
	  _In_    LONG          Comparand
	);
	
	t = Destination;
	if(Destination ==Comparand )
		Destination= Exchange;
	return t;
	
	nLockCount= 0
	many thread call: 	while (InterlockedCompareExchange(&nLockCount, 1, 0));
	only 1 thread can set nLockCount to 1 and return 0, i.e. break from loop
	all other threads are waiting, since  nLockCount is changed to 1, unless the thread changes it back to 0
	
	http://www.codeproject.com/Articles/18371/Fast-critical-sections-with-timeout
	
1112
	//- check HD space
	- JJ buy her things
	- ASM 4DX run cases
	//- Prepare tomorrow's bags...
	-->Send thins
	- Bkup wechat records
	- Ask visa expire time
	//- Gao tie price
	//- SIM pre charge
	- Whewre is the HK sim card?

	- buy some boks
		聪明的投资者
		windows图形编程
	- 私活
	
	High Performance Python.pdf
	木工全书
	保险.doc
	wpf
	//CplusplusConcurrencyInAction.pdf	除了lockfree那一章其他的没啥好看的
	//	https://chenxiaowei.gitbooks.io/cpp_concurrency_in_action/content/
	//How Debuggers Work.pdf	不感兴趣
		
1117
		API hook, instrument member function, global function, virtual function
		
		multiple top most window which is the top most?
1118	WPA	https://msdn.microsoft.com/en-us/library/windows/hardware/hh162931.aspx
			Windows Performance Analyzer (WPA)
			Windows Performance Recorder (WPR) or Xperf.
			
		//A:\JSHe\codes\python\compare_folder.py
		
1119	//High-level language debugger architectures 大概看了看
		//Showing the stack trace from a running Python application	http://stackoverflow.com/questions/132058/showing-the-stack-trace-from-a-running-python-application
		Exploit writing tutorial part 1 : Stack Based Overflows 
		C++多线程内存模型 顺序一致性模型(Sequential Consistency) http://blogread.cn/it/article/4261 sequential consistency for data race free programs，它就是即将到来的C++1x标准中多线程内存模型的基础
		
		游戏引擎架构
		C++反汇编与逆向分析技术揭秘
		 
1122	//接爸爸妈妈
		无语，居然三个人送宝宝来深圳，还是指定必须做飞机，并且来深圳玩几天就直接回去！她爸妈一点都不心疼女儿女婿的钱啊
		android advanced ui tutorial
		android 高级界面
		全国各大城市蔬菜价格排名
		
1125
	netmeeting OpenH323-based clients such as Ekiga, OpenH323
	
	compare products
	surface pro 4	12.3"	6988
	macbook air		11"		6688
	macbook air		13"		7488
	
1126
	asterisk get user input, reload extension file
	1, exten => s,1,Answer
	what does "s" mean?
	2, cheng
1127
	设置家里的笔记本linux+asterisk
	设置家里的newifi openwrt+asterisk	
	
	https://www.freelancer.com
	
20160430
	
Home:			Learn wpf				20160401-20160501
Company:		Learn AutotestII	20160408-20160410
Home/Company	Learn the GUI control program	20160408-20160410
宝宝保险	bf 4/16
确定冷气机	bf 4/16
// 确定宽频	bf 4/16	http://www.threebb.com.hk/Service/groupbuy-tc.html $119/月
	// http://www.netvigator.com/chi/self_registration.php
	// 500M 光纖入屋寬頻計劃
	// HK$208 / 月
	// 30個月承諾期
	
	// 安裝 / 啟動服務費用 
	// HK$680 (一次性)  
	
	// 如果你是打算轉台的話最好落街找找街邊sales，那些的價錢通常都會比網上、門市便宜一點。
build you own angularjs	
	https://github.com/xufei/Make-Your-Own-AngularJS/blob/master/01.md
// bb回乡证
	// 我们的所以证件及复印件：hk身份证，sz身份证，港澳通行证，签注
	// 回鄉證申請表1份
	// 申請人近半年內拍攝的正面免冠白底彩色照片１張（貼在申請表上）及該相片的合格檢測回執。
	// 宝宝出生纸
	
国内互联网公司待遇
	BAT和微软应届生年薪应该都是20W出头（百度 13K*14.5，阿里 13K*16，腾讯记不太清了，微软加年终奖大约是24W），差距也不太大，英特尔应该低一些（12K*14）
	
如何分析开源代码
基于已有程序实现一个flowchart框架 F:\wamp\www\git_repos\GitHub\GeneralUtility\UI\scriptstudio_src
lua c混合编程的框架
实现大数加减乘除算法？
multiple dispatch
wind.js
	http://www.infoq.com/cn/articles/interview-jscex-author-part-1
Google、微软等企业疯狂地刷题
	https://www.zhihu.com/question/35133069
	《程序员面试金典》８０个编程题目　程序员面试金典
《剑指Offer》６６个编程题　剑指Offer_牛客网
互联网名企往年真题　【IT题库】笔试练习_C++Java前端笔试面试题
 《黑客与画家》，《从0到1》
 
// 安装trac				20160430
// 安装ccleaner，清理垃圾	删除了1.5g在c：
 mfc消息路由机制
//	mfc how to implement chain msg？
	//	https://stackoverflow.com/questions/5443031/how-to-embed-ccmdtarget-derived-class-into-mfc-message-chain/5443856#5443856?newreg=c479dcc68f8147f38f27d7cb2872b1ce
	https://www.microsoft.com/msj/0795/dilascia/dilascia.aspx

wtl学习
	类图，每个主要类的作用
	http://www.cnblogs.com/fwycmengsoft/p/4043087.html
	http://www.codeproject.com/Articles/3867/WTL-for-MFC-Programmers-Part-II-WTL-GUI-Base-Class
	https://wizardforcel.gitbooks.io/wtl-for-mfc-programmer/content/2.html
0503	
	z缓冲
	光照算法
	MFC HTML dialog
0509
	各种一步的方法比较，aasyn await,自己实现多线程，coroutine,promise