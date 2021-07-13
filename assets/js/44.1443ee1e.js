(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{223:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("计算机中，"),n("font",{attrs:{color:"red"}},[t._v("有符号数")]),t._v("有3种表示法：原码→反码→补码（发展历程，记得“"),n("strong",[t._v("简书")]),t._v("”上有篇文章讲解了这个发展的历程，告诉了为什么一步步，最后用的补码）\n但是现在目前的电脑其实都是补码表示了，")],1),t._v(" "),n("ul",[t._m(6),t._v(" "),n("li",[t._v("『当然，个人从底层硬件实现来考虑，我觉得说正数是原码表示，负数是补码表示蛮好的』")]),t._v(" "),n("li",[t._v("原因：这样，我可以想象的是正数和负数首先全部编码为原码，然后根据符号位来判断，我要不要调用求补码的线路，正数不用，负数显然要，这样就能在硬件层面获得比较小的计算能耗")]),t._v(" "),n("li",[n("font",{staticStyle:{background:"yellow"}},[t._v("记忆：符号位，0为正，1为负")])],1)]),t._v(" "),n("p",[t._v("原码，反码，补码的正数表达是一样的")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("至此，我们可以总结出一种"),n("strong",[t._v("求一个负数的补码")]),t._v("的规则：")]),t._v("\n写出"),n("strong",[t._v("负数")]),t._v("的原码→符号位不变，其他位取反（求反码）→"),n("code",[t._v("符号位不变，末位+1（求补码）")]),t._v(" "),n("strong",[t._v("即：负数原码基础上，符号位不变，其他位取反，末位+1")]),t._v("\n上面，也是国内主流的教材上的方法（比如清华的那本计算机组成的教材）")],1),t._v(" "),n("p",[t._v("但是，我在"),n("font",{staticStyle:{background:"yellow"}},[n("strong",[t._v("另一些书")]),t._v("上看到了下面两种求一个负数的补码方法：")])],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("重点：\n"),n("strong",[t._v("计算机不区分有符号数和无符号数")]),t._v(" "),n("strong",[t._v("只有")]),n("font",{attrs:{color:"red"}},[t._v("有符号数")]),t._v("有原码，反码，补码\n计算机中存储数据\na.无符号数——直接以对应的二进制表示\nb.有符号数——补码形式表示，无论是计算还是存储")],1),t._v(" "),n("p",[t._v("其实可以说无符号数没有原码，反码，补码一说，毕竟又不用分符号。")]),t._v(" "),n("p",[t._v("《C陷阱与缺陷》一书在“整数溢出”一节中指出：\n如果算术运算符的一个操作数是有符号数，另一个是无符号数，那么有符号数会被转换为无符号数。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("p",[t._v("样例：")]),t._v(" "),t._m(20),n("p",[t._v("无符号的加法\n"),n("code",[t._v("A11111111 11111111 11111111 11111111")]),t._v("（表示32位的无符号最大值4294967295）\n"),n("code",[t._v("A00000000 00000000 00000000 00000001")]),t._v("（表示1）\n1"),n("strong",[t._v("00000000 00000000 00000000 00000000")]),t._v(" "),n("strong",[t._v("丢弃最高位，所以等于0")]),t._v('（硬件自动实现）\n其实这种情况下个人认为是"溢出"了，但是可以通过下面的做法进行解释\n//上面编译的，没有显示溢出的异常\n'),n("font",{staticStyle:{background:"yellow"}},[t._v("解释：这样溢出后就相当于对（2"),n("sup",[t._v("32")]),t._v("-1）+1=2"),n("sup",[t._v("32")]),t._v(" ，再对和2"),n("sup",[t._v("32")]),t._v(" 取模2"),n("sup",[t._v("32")]),t._v("得到为0")])],1),t._v(" "),n("p",[n("strong",[t._v("但是，有本书上的说法，让我对“溢出”这个概念有些混乱")]),t._v("\n《C陷阱与缺陷》在“整数溢出”一节中指出，在"),n("font",{attrs:{color:"red"}},[t._v("无符号")]),t._v("算术运算中，没有所谓的“溢出”一说。\n有个博客对它的解释是：\n我想Koenig的思路可能是这样，钟表上，当下午1点的时候，没有任何人会说：“现在是12点溢出了。”\n因为我们已经常识性地知道，我们的钟表上是没有13这个数字的。")],1),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("1）获得int型最大值\n这样的话在编程的时候就算不带书也能很准确的得知int等的数字大小。\n其实就是不想记忆具体范围。")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),n("p",[t._v("比如，求int类型数据中bit中1点个数。")]),t._v(" "),t._m(28),n("p",[t._v("看上去，蛮好的，但是其实不然\n因为，我们需要注意右移的一个注意点。\n"),n("font",{staticStyle:{background:"yellow"}},[t._v("对于"),n("strong",[t._v("有符号数")]),t._v("的"),n("strong",[t._v("右移")]),t._v("，它会用符号位来补全。")])],1),t._v(" "),n("p",[t._v("这样测试")]),t._v(" "),t._m(29),n("p",[t._v("此外，用1，这样的有符号数测试，就会发现，得出了1，因为他的符号位是0，到时候补的还是0")]),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("改进：（用无符号数来右移，就能解决这种右移可能导致的bug）")])],1),t._v(" "),t._m(30),t._m(31),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("C语言中变量"),n("strong",[t._v("默认为有符号")]),t._v("的类型")]),t._v("\nunsigned关键字声明变量为无符号类型\nC语言中"),n("strong",[t._v("只有整数类型")]),t._v("能够声明unsigned变量")],1),t._v(" "),t._m(32),t._v(" "),t._m(33),n("p",[t._v("计算机中，当确定为有符号数运算时，符号数一律用补码表示，运算时符号位和数字位一起参加运算。\n运算结果也用补码表示。")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),n("p",[n("a",{attrs:{href:"http://mooc1.chaoxing.com/course/206090161.html#courseArticle_157633879",target:"_blank",rel:"noopener noreferrer"}},[t._v("杭电-C语言程序设计2"),n("OutboundLink")],1)]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),n("p",[t._v("教材：《C++语言程序设计(第4版)》(郑莉,董渊)")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),n("p",[t._v("如上，第一个红色箭头『『注意：“表示二进制”这句话是修饰后面的数字的，而不是修饰前面的图片的』")]),t._v(" "),t._m(42),t._v(" "),n("p",[t._v("所以可以解释，第1个箭头和第2个箭头")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"c语言中的计算机组成原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c语言中的计算机组成原理"}},[this._v("#")]),this._v(" C语言中的计算机组成原理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("补码和有符号的溢出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_01-原码，反码，补码，移码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-原码，反码，补码，移码"}},[this._v("#")]),this._v(" 01.原码，反码，补码，移码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-1-实际背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-实际背景"}},[this._v("#")]),this._v(" 1.1.实际背景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("现实生活")]),this._v("中：在计算机中所有的数据运算都是采用"),s("strong",[this._v("补码")]),this._v("进行的（比如Windows中）\n注意：负数用补码表示，如果相加的和为负，也采用补码表示。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-2-有符号数的原码，反码，补码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-有符号数的原码，反码，补码"}},[this._v("#")]),this._v(" 1.2.有符号数的原码，反码，补码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("当然，"),s("strong",[this._v("也有书上说")]),this._v("：负数是补码表示，正数是原码/反码/补码表示，行吧，也算是对的。..谁让他们编码真的一样）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"原码："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原码："}},[this._v("#")]),this._v(" 原码：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原码就是符号位加上真值的绝对值\n既最高位为符号位，0为正，1为负，其余表示数值的大小\n比如\n正数"),s("code",[this._v("+3=00000011")]),this._v("\n负数"),s("code",[this._v("-3=10000011")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"反码："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反码："}},[this._v("#")]),this._v(" 反码：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原码，反码，补码的正数表达是一样的\n正数"),s("code",[this._v("+3=00000011")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("负数")]),this._v("的反码是在原码的基础上（"),s("strong",[this._v("符号位不变")]),this._v("，其他位均取反）\n负数"),s("code",[this._v("-3=11111100")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"补码："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补码："}},[this._v("#")]),this._v(" 补码：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原码，反码，补码的正数表达是一样的\n正数"),s("code",[this._v("+3=00000011")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("负数的补码是在"),s("strong",[this._v("反码")]),this._v("的基础上（"),s("strong",[this._v("符号位不变")]),this._v("，在末位加1）\n负数"),s("code",[this._v("-3=11111101")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("1）（唯一的,也是独特的）"),n("strong",[t._v("负数的原码")]),t._v("基础上，直接变补码规则如下：符号位不变，从数的右边往左开始数,遇到“0”不理它,"),n("strong",[t._v("直到遇到第一个“1”为止")]),t._v("，这个"),n("strong",[t._v("第一次遇到的1它本身不变")]),t._v(",但事继续向左（直到符号位右边一个）的每一位取反\n比如：\n原码"),n("code",[t._v("1001 0010")]),t._v("\n补码"),n("code",[t._v("1110 1110")])]),t._v(" "),n("li",[t._v("2）先"),n("strong",[t._v("找到这个负数的正数编码")]),t._v("，然后在这个基础上，所有位全取反，末位+1\n比如：-1（我用8个比特说明）\n"),n("code",[t._v("+1原码是0000 0001")]),t._v("\n全取反是"),n("code",[t._v("1111 1110")]),t._v("\n末位加一是"),n("code",[t._v("1111 1111")]),t._v("\n继续将，主流的方法补充到这，成为第3条")]),t._v(" "),n("li",[t._v("3）负数原码基础上，符号位不变，其他位取反，末位+1\n总结这三种方法：其实，本质都是等效的。。。我也不知道为什么，以前在自学的时候竟然看到了三种方法。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("Tips:"),n("strong",[t._v("对于负整数")]),t._v("，补码的补码是原码（强调是负整数，有的书没有强调是负整数）\n比如：\n原码"),n("code",[t._v("1001")]),t._v("\n补码（我用方法3））"),n("code",[t._v("1001->1110->1111")]),t._v("\n原码（补码的补码，继续方法3）"),n("code",[t._v("1111->1000->1001")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-3-有符号数到无符号数的过渡标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-有符号数到无符号数的过渡标题"}},[this._v("#")]),this._v(" 1.3.有符号数到无符号数的过渡标题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-4-关于无符号数和有符号一个注意的地方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-关于无符号数和有符号一个注意的地方"}},[this._v("#")]),this._v(" 1.4.关于无符号数和有符号一个注意的地方")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("无符号数，竟然没有溢出一说?")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4294967295对应二进制 11111111 11111111 11111111 1111111")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4294967295")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"无符号输出:%u\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"有符号输出:%d\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%u"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出结果如下： ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//无符号输出:4294967295")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//有符号输出:-1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此外编译器警告（unsigned int a=4294967295;）：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[Warning] this decimal constant is unsigned only in ISO C90")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("虽然，这么说，个人还是觉得这种在一个数据类型边界出现较反常的，我都应该关注一下、\n到目前为止我看过的好几本书的说法，真的有点弄晕我的感觉。但是，至此，我个人倾向是忘记什么叫溢出。只关注底层的比特的变化会不会造成影响。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_02-位运算之左移和右移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-位运算之左移和右移"}},[this._v("#")]),this._v(" 02.位运算之左移和右移")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-1-用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-用途"}},[this._v("#")]),this._v(" 2.1.用途")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMaxInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2147483647， 由于优先级关系，括号不可省略")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("解释：整型int占用4个字节（即32位）\n所以可以表示2"),n("sup",[t._v("32")]),t._v("个数字，int有正负和0；\n所以表示的数字范围是\t-2"),n("sup",[t._v("31")]),t._v("—（2"),n("sup",[t._v("31")]),t._v("-1）\n所以是1（二进制为 00000000 00000000 00000000 00000001）\n移位31位，然后变成了2"),n("sup",[t._v("31")]),t._v("  （二进制为 10000000 00000000 00000000 00000000）\n但是0占掉了一个数字，所以还要减去1，才得到最大的int的数值。\n（二进制为 "),n("code",[t._v("01111111 11111111 11111111 11111111")]),t._v("）\n注意：\n我在测试的时候，在devC++和VS2017中编译这个，都显示了warm\n"),n("code",[t._v("[Warning] integer overflow in expression [-Woverflow]")]),t._v("\n但是都最终还是显示了结果：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("原因：\n1.最高位的进位在计算机中被舍去，因为没有位去存储它\n2.在计算机中似乎"),s("strong",[this._v("只检测有符号数的溢出")]),this._v("（"),s("strong",[this._v("这就和那本书《C陷阱与缺陷》上说的一样，我们不认为无符号整数有溢出。。。")]),this._v("），在编译器中会显示warm，但是它不给你处理，还是会让你运行。（这是正常的，正是因为这样，所以C语言才这么自由，它认为这些你能够自己解决）它还是一样的用加法器和补码器进行有符号数和无符号数的加法和减法。\n补码器真的就是由这样的电路组成\n1.如果是有符号数的取补码，符号位不变，后面的诸位取反然后末尾加1\n2.无符号数的取补码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-2-右移—注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-右移—注意点"}},[this._v("#")]),this._v(" 2.2.右移—注意点")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"loop\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//测试")]),t._v("\n        n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发现，一直输出loop")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因为-1的二进制全是1，符号位也是1。一直右移，还是把1补进来。")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//改进")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用-1，测试是32")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-3-c语言中数据表示的杂谈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-c语言中数据表示的杂谈"}},[this._v("#")]),this._v(" 2.3.C语言中数据表示的杂谈")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1）有符号数的表示法\n在计算机内部用补码表示有符号数\n正数的补码为正数本身\n负数的补码为负数的绝对值各位取反后加1\n2）无符号数的表示法\n在计算机内部用原码表示无符号数\n"),s("strong",[this._v("无符号数默认为正数")]),this._v("\n无符号数没有符号位\n对于固定长度的无符号数\t\t\t有用！")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//其实，获取C语言中数据范围，还可以查看这些宏，但是不同编译器可能实现不同？忘记查了。")]),t._v("\nMAX_VALUE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MIN_VALUE\nMIN_VALUE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MAX_VALUE\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_03-浮点数细节⭐️"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-浮点数细节⭐️"}},[this._v("#")]),this._v(" 03.浮点数细节⭐️")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("本文为自己的一个快速记录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1、杭电视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、杭电视频"}},[this._v("#")]),this._v(" 1、杭电视频")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("其中的，浮点数部分的视频")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在杭电的视频中\n(11100.101)"),s("sub",[this._v("2")]),this._v("=0.11100101*2"),s("sup",[this._v("101")]),this._v("\n指数上面的101，其实是二进制，真的是坑，记得以前在很多书上都不告知，那些数字的由来，注明进制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2、清华教材"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、清华教材"}},[this._v("#")]),this._v(" 2、清华教材")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("面数："),s("code",[this._v("page15")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210713103503229.png",alt:"image-20210713103503229"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("提醒：\n"),n("ul",[n("li",[t._v("原码的符号位和数值位是"),n("strong",[t._v("分离")]),t._v("管理的")]),t._v(" "),n("li",[t._v("补码的符号位和数值位是"),n("strong",[t._v("一起")]),t._v("管理的")])])])])}],!1,null,null,null);s.default=e.exports}}]);