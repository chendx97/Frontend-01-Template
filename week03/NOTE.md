# 每周总结可以写在这里
### js里特殊的对象
#### 1.Array
##### 类型判断
typeof [] // 'object'  
[] instanceof Array(/Object) // true  
##### 创建
arr1 = [1]  
arr2 = new Array(5) // 5个元素的数组  
arr3 = Array('red')  
##### 读取和设置
arr1[0] = 2
##### 数组的方法[].__proto__
concat push等等
#### 2.Date
##### 创建
new Date() // 当前日期和时间  
new Date(milliseconds) //传入从 1970 年 1 月 1 日至今的毫秒数  
new Date(dateString)  
new Date(year, month, day, hours, minutes, seconds, milliseconds)  
##### 方法 date1.__proto__
#### 3.RegExp
/正则表达式主体/修饰符(可选)  
修饰符 i不分大小写 g全局  m多行匹配  
##### 模式
[abc]    查找方括号之间的任何字符  
[0-9]	查找任何从 0 至 9 的数字  
(x|y)	查找任何以 | 分隔的选项  
\d	查找数字。  
\s	查找空白字符   
\S 非空白字符  
n+ 至少一个n的字符串  
n* 至少0个  
n? 0个或1个  
##### 方法 /1/.__proto__
str.search('str') // 返回index  
str.replace(//, '') // 返回替换后的字符串  
str.replace('', '')  
patt.test('') // true or false  
patt.exec('') 返回匹配到的子串  
#### 4.Function
##### 函数声明
function fn () {}  
##### 函数表达式
x = function () {}
##### 构造函数
x = new Function('a', 'b', 'return a *b')
##### 匿名函数
##### 函数提升 
将函数声明提升到函数调用前，函数表达式无法提升
##### 立即执行函数
void (function () {})();
##### 箭头函数 
x = () => {} 箭头函数的this默认绑定外层的this
#### 5.Boolean Number String 基本包装类型
装箱 基本类型转换为引用类型  
拆箱 引用类型转换为基本类型  
'abcd'.substring(2) // 装箱  
创建String实例，在实例上调用substring，销毁实例  
x = new String('34')  
x.valueOf() // 拆箱  
#### 6.Global Math 内置对象
由ECMAScript提供，不依赖宿主环境的对象，在ECMAScript程序执行前就已经存在了。  
##### 全局函数  
decodeURI()	解码某个编码的 URI  
decodeURIComponent()	解码一个编码的 URI 组件  
encodeURI()	把字符串编码为 URI  
encodeURIComponent()	把字符串编码为 URI 组件  
escape()	对字符串进行编码  
eval()	计算 JavaScript 字符串，并把它作为脚本代码来执行  
getClass()	返回一个 JavaObject 的 JavaClass  
isFinite()	检查某个值是否为有穷大的数  
isNaN()	检查某个值是否是数字  
Number()	把对象的值转换为数字  
parseFloat()	解析一个字符串并返回一个浮点数  
parseInt()	解析一个字符串并返回一个整数  
String()	把对象的值转换为字符串  
unescape()	对由 escape() 编码的字符串进行解码  
##### 全局属性
Infinity	代表正的无穷大的数值  
java	代表 java.* 包层级的一个 JavaPackage  
NaN	指示某个值是不是数字值  
Packages	根 JavaPackage 对象  
undefined	指示未定义的值  
Math 数学相关常量方法  
E PI abs()等  