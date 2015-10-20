class ThreadPool{
	Handle AddTask(task);
};

class Handle{
	void waitDone();
};

class MyTask{
	MyTask(Task &t)
	void DoWork(){
		t.run();
	}
};

Main thread

Queue taskQueue;
While(!taskQueue.empty()){
	t=GetNoDependTasks();
	if(t){
		ThreadPool.Add(new MyTask( MyRunAndUpdateDependency(taskQueue,t)));
	}
}


/////Solar example

Mode 1) Task dependency style
	AddTask( 	Grab(-->hGrabDone[i]）
				Recon(hGrabDone[i], hRecon[i-10]--> hRecon[i])
				Merge(hRecon[i] -->hMerge[i])
				Ins(hMerge[100]->hIns)
				
Mode 2) Promise style
	hGrab[i] =Grab(i)
	hRecon[i] = all(hGrab[i], hRecn[i-10]).then(Recon(i))
	hMerge[i] = hRecon[i].then(Merge(i))
	
Mode 2	Cons:
	Cannot use a handle before created
