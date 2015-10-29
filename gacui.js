//How GuiMain is called
 	Main.exe!GuiMain() Line 109	C++
 	Main.exe!vl::presentation::controls::GuiApplicationInitialize() Line 314	C++
 	Main.exe!GuiApplicationMain() Line 324	C++
 	Main.exe!RendererMainDirect2D() Line 10709	C++
 	Main.exe!WinMainDirect2D(HINSTANCE__ * hInstance, void (void) * RendererMain) Line 208	C++
>	Main.exe!SetupWindowsDirect2DRenderer() Line 223	C++
 	Main.exe!WinMain(HINSTANCE__ * hInstance, HINSTANCE__ * hPrevInstance, char * lpCmdLine, int CmdShow) Line 7	C++

---Definitions	
//INativeController?	Provide diff services, like callback?, resource, clipboard...
Direct2DWindowsNativeControllerListener		Event listenner?
WindowsDirect2DResourceManager?	What resource?

LoadGuiBasicTypes?

Diff kinds of Renderer	GuiSolidBorderElementRenderer

How does main code draw the UI?
	WindowsForm 提供各种事件回调，而回调里面各种listener提供paint函数
	为什么WM_PAINT回调函数什么都没做，到底哪里画的图？
	Oh,是在GlobalTimer回调里面绘图，比如
 	Main.exe!vl::presentation::compositions::GuiGraphicsComposition::Render(vl::presentation::Size offset) Line 21037	C++
 	Main.exe!vl::presentation::compositions::GuiGraphicsHost::Render() Line 23941	C++
>	Main.exe!vl::presentation::compositions::GuiGraphicsHost::GlobalTimer() Line 23878	C++
 	Main.exe!vl::presentation::windows::WindowsCallbackService::InvokeGlobalTimer() Line 2627	C++
 	Main.exe!vl::presentation::windows::WindowsController::InvokeGlobalTimer() Line 5171	C++
 	Main.exe!vl::presentation::windows::GodProc(HWND__ * hwnd, unsigned int uMsg, unsigned int wParam, long lParam) Line 5206	C++
	具体的render函数定义为 
		IMPLEMENT_BRUSH_ELEMENT_RENDERER(GuiSolidBorderElementRenderer)
		里面直接call ID2D1RenderTarget的函数了
	
//什么时候RegisterClass?
	在WindowsController初始化时候
	
//What is GodProc?	是一个窗口，用来处理剪贴板和input鼠标消息
	有必要单独搞一个class吗？

Win7WindowStyle Win8WindowStyle	有什么不一样？

//系统什么时候会调用WM_NCHITTEST？


著作权归作者所有。
商业转载请联系作者获得授权，非商业转载请注明出处。
作者：vczh
链接：http://www.zhihu.com/question/23558448/answer/24942439
来源：知乎

基本上也使用了WPF的很多概念，譬如说MVVM啊，XAML（虽然格式不一样）的做法啊，control template，item template，智能排版，支持全球语言，动画什么的，跨渲染器什么的。


