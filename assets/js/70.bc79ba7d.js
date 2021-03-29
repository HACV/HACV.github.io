(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{244:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"格列夫游记的鸡蛋—大小端之争"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格列夫游记的鸡蛋—大小端之争"}},[t._v("#")]),t._v(" 格列夫游记的鸡蛋—大小端之争")]),t._v(" "),a("p",[t._v("大端和小端存储\ndate: 2020-05-29 19:53:47")]),t._v(" "),a("h2",{attrs:{id:"引子："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引子："}},[t._v("#")]),t._v(" "),a("strong",[t._v("引子")]),t._v("：")]),t._v(" "),a("p",[t._v("《格列夫游记》一书中讲到，格列佛在小人国中，遇到了这样一件事情：")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("小人国的人纠结于吃鸡蛋的时候，先打破鸡蛋的小端还大端，原来，在这之前所有人都认为,吃鸡蛋前,原始的方法是打破鸡蛋较大的一端。可是当今皇帝的祖父小时候吃鸡蛋,一次按古法打鸡蛋时碰巧将一个手指弄破了,因此他的父亲,当时的皇帝，就下了一道敕令,命令全体臣民吃鸡蛋时打破鸡蛋较小的一端,违令者重罚。老百姓们对这项命令极为反感。历史告诉我们，由此曾发生过六次叛乱,其中一个皇帝送了命,另一个丢了王位。关于这一争端,曾出版过几百本大部著作,不过大端派的书一直是受禁的,法律也规定该派的任何人不得做官。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在计算机界，也有一个类似的大端小端之争，但是并没有像小人国那般，原先我们虽然在纠结选大端还是小端存储？但是随着计算机的发展，历史告诉我们，这些都是合理的，但是要在计算机间合理通信或者理解计算机底层的时候，你自己记得转换就好了。")]),t._v(" "),a("h1",{attrs:{id:"大端和小端存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大端和小端存储"}},[t._v("#")]),t._v(" 大端和小端存储")]),t._v(" "),a("h2",{attrs:{id:"一．概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一．概念"}},[t._v("#")]),t._v(" 一．概念")]),t._v(" "),a("p",[t._v("大端：指低字节存储在高地址。\n小端：指低字节存储在低地址。")]),t._v(" "),a("p",[a("strong",[t._v("记忆方法：")]),t._v(" "),a("table",[a("td",{attrs:{bgcolor:"#FFFF",FF:""}},[t._v("小端说：我就是个低低（弟弟）")])])]),t._v(" "),a("p",[t._v("下图描述了——大端存储（低字节存储在内存高地址了）：\n"),a("img",{attrs:{src:"/photos/2020.5.29/1.png",width:"80%"}})]),t._v(" "),a("p",[t._v("下图描述了——小端存储（低字节存储在内存低地址了）：：\n"),a("img",{attrs:{src:"/photos/2020.5.29/2.png",width:"80%"}})]),t._v(" "),a("h2",{attrs:{id:"二．具体的，大端法和小端法的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二．具体的，大端法和小端法的应用"}},[t._v("#")]),t._v(" 二．具体的，大端法和小端法的应用")]),t._v(" "),a("p",[t._v("有的产品用的大端法，有的产品则是小端法。\nPS:这个大端和小端并没有严格按照企业界限来区分，因为有的企业，它在之前采用的处理器，可能是大端，但是后面的产品中改变了采用的处理器，可能就采用小端法了。\n前沿：许多比较新的微处理器使用双端法，也就是说可以把它们配置成作为大端或者小端的机器运行。")]),t._v(" "),a("h2",{attrs:{id:"三．大端法和小端法导致的问题："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三．大端法和小端法导致的问题："}},[t._v("#")]),t._v(" 三．大端法和小端法导致的问题：")]),t._v(" "),a("h3",{attrs:{id:"_1）网络应用程序数据传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1）网络应用程序数据传输"}},[t._v("#")]),t._v(" 1）网络应用程序数据传输")]),t._v(" "),a("p",[t._v("在采用不同大小端存储的机器之间通过网络传送二进制数据时候，会导致采用不同大小端存储方式的数据的字节变成反序。\n解决方案：网络应用程序的代码编写，必须遵循已建立的关于字节顺序的规则（第一处：网络传输规定了，网络字节序（它采用的大端））。\n第2处，你的机器发送报文前，需要将你的内部表达转换成网络标准。\n第3处，你的机器接受报文时候，需要根据你的机器，将网络标准转换为你的内部表示。。")]),t._v(" "),a("p",[t._v("网络字节序\n网络上传输的数据都是字节流,对于一个多字节数值，在进行网络传输的时候,先传递哪个字节?也就是说,当接收端收到第一个字节的时候,它将这个字节作为高位字节还是低位字节处理,是一个比较有意义的问题;\nUDP/TCP/IP协议规定:\n把接收到的第一个字节当作高位字节看待,这就要求发送端发送的第一个字节是高位字节;")]),t._v(" "),a("p",[t._v("而在发送端发送数据时，发送的第一个字节是该数值在内存中的起始地址处对应的那个字节,也就是说,该数值在内存中的起始地址处对应的那个字节就是要发送的第一个高位字节(即:高位字节存放在低地址处);\n由此可见,多字节数值在发送之前,在内存中因该是以大端法存放的;所以说,网络字节序是大端字节序;")]),t._v(" "),a("p",[t._v("比如,我们经过网络发送整型数值0x12345678时,在80x86平台中,它是以小端发存放的,在发送之前需要使用系统提供的字节序转换函数将其转换成大端法存放的数值;")]),t._v(" "),a("p",[t._v("常见CPU的宇节序\n大端（big Endian）: PowerPC、IBM、 Sun\n小端（little Endian）:x86、DEC\nARM既可以工作在大端模式,也可以工作在小端模式。")]),t._v(" "),a("h3",{attrs:{id:"_2）反汇编的时候"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2）反汇编的时候"}},[t._v("#")]),t._v(" 2）反汇编的时候")]),t._v(" "),a("table",[a("tr",[a("td",{attrs:{bgcolor:"#FFFF",FF:""}},[t._v("（——————未完待续）")])])]),t._v(" "),a("h2",{attrs:{id:"四．如何判别大端和小端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四．如何判别大端和小端"}},[t._v("#")]),t._v(" 四．如何判别大端和小端")]),t._v(" "),a("p",[t._v("1）我们可以根据C语言中的，联合体来判断，该系统是大端还是小端。\n因为，联合体变量总是从低地址存储。")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" test\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\tdemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x01ffff03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这个机器是小端存储！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这个机器是大端存储！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"无法判断机器类型！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("p",[t._v("显然，\n要是小端存储，那么（低字节）0x03在低地址，\n要是大端存储，那么（高字节）0x00在低地址。\n所以，打印出3就是小端存储。打印出0那就是大端存储。\n笔者的电脑是采用的intel的X86CPU，是小端存储。\n"),a("img",{attrs:{src:"/photos/2020.5.29/3.png",width:"80%"}})])])}],!1,null,null,null);s.default=r.exports}}]);