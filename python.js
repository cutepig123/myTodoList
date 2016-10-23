===名词

装饰器
偏函数
实例属性和类属性
面向对象高级编程
	使用__slots__
	使用@property
	多重继承
	定制类
	使用枚举类
	使用元类
错误、调试和测试
	错误处理
	调试
	单元测试
	文档测试

常用内建模块
	datetime
	collections
	base64
	struct
	hashlib
	itertools
	XML
	HTMLParser
	urllib

异步IO
	协程
	asyncio
	async/await
	aiohttp

python 协程 3.5 中 async/await  asyncio  yield from generator 原型链 metaclass
	协程和事件循环

迭代器 itertools 
描述符（Descriptor）: __get__, __set__, __delete__
@property
decorator、
contextmanager 添加__enter__和__exit__方法

total_ordering，只需要定义__eq__以及__lt__、__le__、__gt__、__ge__四种之一就可以了
inspect
Mixin模式。
docstring

# -*- coding: UTF-8 -*- 

if __name__ == '__main__':

	
What are the lesser-known but useful features of the Python programming language?

Try to limit answers to Python core.
One feature per answer.
Give an example and short description of the feature, not just a link to documentation.
Label the feature using a title as the first line.
Quick links to answers:

Argument Unpacking
Braces
Chaining Comparison Operators
Decorators
Default Argument Gotchas / Dangers of Mutable Default arguments
Descriptors
Dictionary default .get value
Docstring Tests
Ellipsis Slicing Syntax
Enumeration
For/else
Function as iter() argument
Generator expressions
import this
In Place Value Swapping
List stepping
__missing__ items
Multi-line Regex
Named string formatting
Nested list/generator comprehensions
New types at runtime
.pth files
ROT13 Encoding
Regex Debugging
Sending to Generators
Tab Completion in Interactive Interpreter
Ternary Expression
try/except/else
Unpacking+print() function
with statement


多重继承的弊病: 钻石调用、MRO 查找顺序

Difference between __str__ and __repr__ in Python

self.__dict__

gevent

===Links
http://stackoverflow.com/questions/101268/hidden-features-of-python
http://dongweiming.github.io/Expert-Python/#42
http://blog.rainy.im/2016/03/10/how-the-heck-does-async-await-work-in-python-3-5/
