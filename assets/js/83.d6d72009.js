(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{262:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("关于公历的闰年有两种；由于第一个带我的老师，告诉的是错误的定义")]),t._v(" "),t._m(4),t._v(" "),a("p",[a("font",{staticStyle:{background:"yellow"}},[t._v("我们编程的时候，需要考虑，两种闰年！")]),a("br"),t._v("\n编程实现")],1),t._v(" "),t._m(5),a("p",[t._v("以上两种情况。")]),t._v(" "),a("p",[t._v("闰年和平年区别："),a("br"),t._v(" "),a("font",{staticStyle:{background:"yellow"}},[t._v("闰年，2月为29天")]),a("br"),t._v(" "),a("font",{staticStyle:{background:"yellow"}},[t._v("平年，2月为28天")]),a("br"),t._v("\n公历中只分闰年和平年，平年有"),a("b",[t._v("365")]),t._v("天，而闰年有"),a("b",[t._v("366")]),t._v("天（2月中"),a("b",[t._v("多一天")]),t._v("）")],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("反观\nchar c='d';\nchar D='c';\n这样的多好，原因是：\n字符在C语言和C++中是有单引号''围着的\n字符串是有双引号\"\"围着的")]),t._v(" "),a("p",[t._v("或许，创造者在变量名取名规则的时候，首先是考虑了\n1)大小写字母，毕竟是人家母语，要是计算机语言和母语由类似之处，多好。\n2)数字，毕竟，阿拉伯数字享誉全球。\n3)下划线，ummm，或许是为了今后的下划线命名法？？？疑问。。")]),t._v(" "),a("p",[t._v("然后发现，前面那样int 1=9;这样奇怪的语句，就规则强化了")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("我们常常在VS中看到这样的句子：")]),t._v(" "),t._m(18),a("p",[t._v("原因：")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("补充背景：")]),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("原因：")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("标准C语言是不进行数组下表越界检查的。\n但目前各种编译器对这些行为的处理不同，\n使得这样的行为是未定义的，建议不要写这样的代码：")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("为了防范这样的可能被用于缓冲区溢出攻击的语法，建议使用更加安全版本的函数。\n比如，strcpy改用strnpy")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"通识和思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通识和思考"}},[this._v("#")]),this._v(" 通识和思考")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"💬通识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💬通识"}},[this._v("#")]),this._v(" 💬通识")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、闰年的判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、闰年的判断"}},[this._v("#")]),this._v(" 一、闰年的判断")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("（克服傻傻分不清楚）")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("现在纠正："),a("br"),t._v("\n公历闰年分两种"),a("br"),t._v("\n1）\t普通闰年:"),a("br"),t._v("\n公历年份是"),a("strong",[t._v("4的倍数，且不是100的倍数")]),t._v("，为普通闰年。（如2004年就是闰年）；"),a("br"),t._v("\n2）\t世纪闰年:"),a("br"),t._v("\n公历年份是"),a("strong",[t._v("整百数的，必须是400的倍数")]),t._v("，才是世纪闰年（如1900年不是世纪闰年，2000年是世纪闰年）；")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//普通闰年")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//世纪闰年")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"🐾思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾思考"}},[this._v("#")]),this._v(" 🐾思考")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"🐾c和c-变量命名规则探讨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾c和c-变量命名规则探讨"}},[this._v("#")]),this._v(" 🐾C和C++变量命名规则探讨")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('<img src="../../../../photos/2020.5.29/title_one.jpg" width="80%">\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）变量命名规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）变量命名规则"}},[this._v("#")]),this._v(" （1）变量命名规则")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("不能是C语言或者C++的标识符。")]),this._v(" "),s("li",[this._v("区分大小写")]),this._v(" "),s("li",[this._v("变量的第1个字符必须是大小写字母或者下划线。")]),this._v(" "),s("li",[this._v("即，除去第1个字符之外的其他字符是大小写字母，下划线，或数字。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("疑问")]),this._v("：为什么，第3点要求看上去这么奇怪？\n为什么，不直接说，是直接由大小写字母，下划线，数字组成就好了，为何要强调第1个字符，不能是数字？\n看上去，一点都不对称，没有美感")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("解释")]),this._v(":\n想象一下，定义这样一个变量\nint 1=9;//变量名字，要是叫1，那么我们的程序，难道以后，我用1就是9？多尴尬")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）工程上主流的变量命名法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）工程上主流的变量命名法"}},[this._v("#")]),this._v(" （2）工程上主流的变量命名法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("下划线命名法（C语言软件设计师常用）")]),this._v(" "),s("li",[this._v("驼峰命名法（Java软件设计师常用）")]),this._v(" "),s("li",[this._v("帕斯卡命名法")]),this._v(" "),s("li",[this._v("匈牙利名")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("（未完待续）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"🐾c语言为什么没有数组下标越界检查？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🐾c语言为什么没有数组下标越界检查？"}},[this._v("#")]),this._v(" 🐾C语言为什么没有数组下标越界检查？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"一、综述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、综述"}},[this._v("#")]),this._v(" 一、综述")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提醒你说，strcpy是不安全的版本，建议使用安全版的strnpy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcpy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  _Dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  _Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strncpy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  _Dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("  _Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" _Count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("C对数组的长度范围不会进行检查！当向数组越界写入数据的时候，经常产生“内存被破坏”的问题")]),this._v(" "),s("li",[this._v("直到，操作系统发现异常并且提示Segmentation fault，或者“强制关闭异常的应用程序”。但是此时相邻变量的值已经被破坏，程序却还在继续运行，那后果就不可想象了。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"二、c语言为什么不进行数组下标越界检查？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、c语言为什么不进行数组下标越界检查？"}},[this._v("#")]),this._v(" 二、C语言为什么不进行数组下标越界检查？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("ul",[a("li",[t._v("我们知道对C来说，当数组名做函数参数时，它会被解读成指针。（退化为指针，一维数组退化为一级指针，二维数组退化为二级指针）")]),t._v(" "),a("li",[t._v("此外，我们可以利用指针的性质，控制好指针类型，即控制好"),a("b",[t._v("指针的步长")]),t._v("，我们就可以使用其他的指针变量指向数组的任意元素，并且这个指针可以随意进行加减运算。")]),t._v(" "),a("li",[t._v("比如我们在引用一维数组"),a("code",[t._v("int a[3];")]),t._v("我们在引用数组元素的时候，写成"),a("code",[t._v("a[i]")]),t._v("和"),a("code",[t._v("*(a+i)")]),t._v("，是等效的,因为在a被解读成指针的时候，他就指向该数组的第一个元素的地址。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("ul",[a("li",[t._v("1）当你向一个函数传递数组的时候，实际上你传递的是一个指向初始元素的指针。如果这个函数还存在于其他的代码文件中（"),a("b",[t._v("另外一个编译单元")]),t._v("），那么通过编译器是不可能追踪到数组的。所以，要求C语言在"),a("b",[t._v("编译时")]),t._v("生成检查数组长度的代码，是有些强人所难的意味的.")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("比如，你自己在开发一个模块，到时候要是extern进别人的一个数组，而那个模块的负责人还没把那个模块完成，那你又要测试，你到时候也不知道别人用你的模块是干什么的（比如，不知道到底他会传入一个多长的数组），那么你就只能写一个接口给他，说你传入一个地址的吧，到时候我在函数中判断。")])])]),t._v(" "),a("ul",[a("li",[t._v("2）为了提高运行效率，不检查数组下表越界，程序就可以跑得快，毕竟这样我就只需要传进一个地址，并不需要再传进一些额外的描述信息。")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("C的数组标识符，"),a("b",[t._v("里面并没有包含该数组长度的信息，只包含地址信息")]),t._v("，所以语言本身无法检查，只能通过编译器检查。")]),t._v(" "),a("li",[t._v("也因此，C语言才速度快，效率高。几乎所有对性能有苛刻要求的场合都使用C语言。")])])]),t._v(" "),a("ul",[a("li",[t._v("3）不检查下标还给程序员更大的空间，也为指针操作带来更多的方便。如果有这个检查的话指针的功能将会大大被削弱。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("实际上，除了某些"),s("b",[this._v("解释型的编程语言")]),this._v("之外，目前几乎没有编译器可以为我们做数组的越界检查。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("如果你在项目中需要检查边界这样的功能，你可以像下面这样模拟实现：")])]),this._v(" "),s("blockquote",[s("ul",[s("li",[this._v("1）我们可以人工的像前面的安全版本的strnpy，进行额外的操作传进长度辅助就好了。")]),this._v(" "),s("li",[this._v("2）可以考虑将指针封装成结构体那样，运行时让指针自身持有可取值范围的信息。但是这样做对性能的影响很大，同时，也丧失了非调试模式下编译后的库和指针的兼容性。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"三、补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、补充"}},[this._v("#")]),this._v(" 三、补充")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下标越界")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DevC++5.11编译通过，而且还输出了1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//VS2012则表示，下标越界，会报错。缓冲区“a”(大小为 24 字节)将溢出")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ul",[s("li",[this._v("访问数组的本质是访问一段连续内存中的某个单元，只要这个单元的内存是可用的，那么程序就暂时不会崩溃，但是不立即崩溃，并不是是就完事大吉了，有时候可能真的没太大影响，但是有时候会修改到你正好要用到的数据。（所以，这种内存单元可用的，我们也不要这写，特别是在"),s("b",[this._v("多线程编程")]),this._v("的时候）")]),this._v(" "),s("li",[this._v("更严重的，有时候数组越界正好越界到了操作系统的内存保护区域，会导致内存不可用的原因，由于操作系统的内存保护机制，程序会因此而崩溃。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"四、防范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、防范"}},[this._v("#")]),this._v(" 四、防范")])}],!1,null,null,null);s.default=n.exports}}]);