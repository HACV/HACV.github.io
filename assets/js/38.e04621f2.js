(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{216:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("捕获，之后，wireshark内部具有对应的功能转换器，将0，1序列转换或者是组装为1个合法的数据包，然后分析咋们组装好的数据包，识别出，其中的协议，端口，以及目的地等信息。从而使得wireshark捕获之后，会以咋们人类可以识别的方式的这种信息来展示，使得咋们更直观的查看到网络流量。")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),e("p",[t._v("wireshark在Linux下使用，可以在终端用")]),t._v(" "),t._m(10),e("p",[t._v("打开")]),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("点击expression，但是我的好像没有")]),t._v(" "),e("p",[t._v("只要看http协议，过滤表达式的书写")]),t._v(" "),t._m(13),e("p",[t._v("然后点击应用，也可能是回车，这样就只看http的了")]),t._v(" "),e("p",[t._v("保存前，要停止抓包，保存类似word")]),t._v(" "),e("p",[t._v("可以保存的文件后缀")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("工具栏下面是个『筛选器』")]),t._v(" "),e("p",[t._v("或者说是『筛选过滤器』")]),t._v(" "),e("p",[t._v("通过这个可以筛选掉一些无关紧要的内容，使得只显示我们想要查看的某些数据包")]),t._v(" "),e("p",[t._v("『所以，我觉得这个名字取得不好，分明是查找我们要的，硬要转个弯说是过滤掉不要的』")]),t._v(" "),e("p",[t._v("比如，想要过滤，就使用快捷键Ctr+/")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("1、最简单的筛选规则：一个空白字符『无论你任何的数据包都将符合咋们空白字符』这是BPF的基础")]),t._v(" "),e("p",[t._v("2、语法规则：『3部分』")]),t._v(" "),t._m(21),t._m(22),t._v(" "),e("p",[t._v("3、语法样例『演示』")]),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("『筛选出，源IP或者目的IP是这个IP地址的』")]),t._v(" "),e("p",[t._v("IP地址为192.168.4.5")]),t._v(" "),t._m(24),t._v(" "),t._m(25),e("p",[t._v("注意上面的不能直接用，必须用户，我们的IP对应的就是伯克利表示式对应的host后面的")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),e("p",[t._v("源地址为192.168.4.5")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),e("p",[t._v("目的地址簿是192.168.4.5")]),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),e("p",[t._v("目标端口是80")]),t._v(" "),t._m(37),e("p",[t._v("上面的语法中：所有端口port前面，可以添加tcp或udp")]),t._v(" "),e("p",[t._v("比如：udp.port和tcp.port，额，曾前面加tcp啥的，还加了一个.")]),t._v(" "),t._m(38),t._m(39),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),e("p",[t._v("CIDR『"),e("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E6%97%A0%E7%B1%BB%E5%88%AB%E5%9F%9F%E9%97%B4%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("无类别域间路由"),e("OutboundLink")],1),t._v("』，，，表示无域间域名类型转换")]),t._v(" "),e("p",[t._v("通过它，可以表示某个网络范围内的所有IP地址或者是主机。")]),t._v(" "),t._m(43),t._v(" "),t._m(44),e("p",[t._v("上面这样的就能。筛选出，IP地址在对应的子网当中的内容")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),e("p",[t._v("所以，src和dst和ip才是在ip中封装")]),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._m(55),t._v(" "),t._m(56),e("p",[t._v("或者")]),t._v(" "),t._m(57),t._m(58),e("p",[t._v("注意：捕获过滤器，不支持我们起那么的那只CIDR的书写以及主机名的写法")]),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),e("p",[t._v("1、显示过滤器创建『2种方法』")]),t._v(" "),t._m(62),t._v(" "),e("p",[t._v("2、表达式规则")]),t._v(" "),t._m(63),t._v(" "),e("p",[t._v("此外!!:可以使用圆括号来控制了『优先级』")]),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),e("p",[t._v("可以在选项中设置。容易")]),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),t._m(71),t._v(" "),t._m(72),t._v(" "),t._m(73),t._v(" "),e("p",[t._v("显示选项Display option\n解析名称Name Resolution\n自动停止捕获Automatically scrpll during live capture『比如设置抓20个文件的包，就停止』")]),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),e("p",[t._v("还有，我们这个类似的VScode中装的『插件』啥的，都可以在这个里面看到。还可以看『快捷键』")]),t._v(" "),t._m(80),t._v(" "),t._m(81),t._v(" "),e("p",[t._v("我们也可以修改默认配置，右下角切换")]),t._v(" "),t._m(82),t._v(" "),e("ul",[e("li",[t._v("网络安全"),e("a",{attrs:{href:"https://www.wangan.com/docs/1006",target:"_blank",rel:"noopener noreferrer"}},[t._v("wireshark中文使用教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("W3C中"),e("a",{attrs:{href:"https://www.w3cschool.cn/wireshark/o71m5ozt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wireshark"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("wireshark用户手册，"),e("a",{attrs:{href:"https://www.ctolib.com/docs/sfile/wireshark-manual/0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文翻译版"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("小林Coding，"),e("a",{attrs:{href:"https://gitbook.cn/gitchat/activity/5ec68ab2e80cd341fa46d2c0",target:"_blank",rel:"noopener noreferrer"}},[t._v("让你“看见TCP”"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Github，《计算机网络－自顶向下方法》"),e("a",{attrs:{href:"http://moranzcw.com/Computer-Networking-A-Top-Down-Approach-NOTES/",target:"_blank",rel:"noopener noreferrer"}},[t._v("实验翻译"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("wireshark官网的"),e("a",{attrs:{href:"https://www.wireshark.org/docs/wsdg_html_chunked/",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发者指南"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("C语言中文网-"),e("a",{attrs:{href:"http://c.biancheng.net/view/6379.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wireshark安装"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("[美]Chris Sanders，《"),e("a",{attrs:{href:"https://book.douban.com/subject/21691692/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wireshark数据包分析实战"),e("OutboundLink")],1),t._v("》")]),t._v(" "),e("li",[t._v("林沛满，《"),e("a",{attrs:{href:"https://book.douban.com/subject/26268767/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wireshark网络分析就这么简单"),e("OutboundLink")],1),t._v("》")]),t._v(" "),e("li",[t._v("51CTO，"),e("a",{attrs:{href:"https://edu.51cto.com/course/18664.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wireshark网络分析实践"),e("OutboundLink")],1),t._v("，Xmind版")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"wireshark网络分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wireshark网络分析"}},[this._v("#")]),this._v(" Wireshark网络分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_0、目录和单词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0、目录和单词"}},[this._v("#")]),this._v(" 0、目录和单词")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## 一、Wireshark介绍\n## 二、『伯克利』过滤器介绍\n## 三、 Wireshark『捕获』过滤器\n## 四、Wireshark『筛选』过滤器\n## 五、Wireshark捕获输出\n## 六、Wireshark杂项设置\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("Capture  n.战利品；l『捕获』；俘虏；占领，『抓取』\nfilter\tv.过滤\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark中，比如“抓包 （ packet )”一词本身就不够精确，"),s("strong",[this._v("Wireshark抓到的应该是帧(frame )")]),this._v('。但是出于表达习惯，我并没有改成“抓帧”。又比如对同一个网络分层的称呼，工程师们也有不同的习惯,希望读者能够接受这些“混乱"。')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、wireshark介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、wireshark介绍"}},[this._v("#")]),this._v(" 一、Wireshark介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("1、功能：网络流量『捕获』和『分析』的软件")]),this._v(" "),s("li",[this._v("网络工作者：网络工程师or运维工程师or安全方面人员or，不会wireshark的使用工具，就不是一个合格的网络工作者")]),this._v(" "),s("li",[this._v("2、历史：Ethereal是wireshark前身，2006年更名为wireshark，改名的原因是『商标和版权』好像")]),this._v(" "),s("li",[this._v("3、原理：由于wireshark会调用咋们这些，底层的网络或功能，从硬件上捕获对应的二进制流量（咋们在网络过程中所有的数据or数据包，都是以0,1序列，这个二进制数据包来传输的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1、『捕获』二进制流量\n2、『转换』wireshark组装数据包『wireshark内部具有对应的功能转换器』\n3、分析捕获的数据包，识别协议等信息\n\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("4、优势：开源免费，跨平台，可视化『比如tcpdump是命令行』，功能强大『支持的协议特别多，几乎涵盖现在所有已知的所有协议』")]),this._v(" "),s("li",[this._v("5、下载安装：官网")]),this._v(" "),s("li",[this._v("6、基本使用方式：『4步骤』")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-txr line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1、选择网卡『因为网络流量是通过网卡在网络当中进行传输，网卡是可以接收流向该网卡或者是在局域网某个网络中的流量，并且接收和发送你要送出的这个数据包\n这是流入流出的关键例子，，因为你的计算机可能有多张网卡，\n比如，我们最简单的实例，（lo网卡）环回网卡127.0.0.1，其实它也是计算机虚拟出来的一张网卡，\n2、捕获数据流量\n3、过滤数据包『数据流量捕获之后，我们可能不想查看某些数据流量，此时，我们就可以通过其中的过滤数据包功能，过滤掉某些数据包，只显示我们想要分析的\n4、保存数据包『咋们分析完之后，可能获得一个结论，但是你要给别人看，或者是下次分析的时候，你不可能再次抓一次包，因为网络环境在变，下次抓的包很有可能是不同的，为了方便分析，wireshark提供了保存数据包功能\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("wireshark\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ifconfig")]),this._v(" 查看网卡\neth0 是对外的网卡\nlo 是本地环回网卡\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）过滤演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）过滤演示"}},[this._v("#")]),this._v(" （1）过滤演示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-wireshark line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("http\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("pcapng\n\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）wireshark包过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）wireshark包过滤"}},[this._v("#")]),this._v(" （2）wireshark包过滤")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark抓包界面介绍：后面操作过程中，会知道我们该在哪找具体的功能。以及如何查看对应的信息")]),this._v(" "),s("li",[this._v("伯克利包过滤介绍")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、『伯克利』过滤器介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、『伯克利』过滤器介绍"}},[this._v("#")]),this._v(" 二、『伯克利』过滤器介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）概念"}},[this._v("#")]),this._v(" （1）概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("伯克利包过滤规则：『这是一种核心思想』")]),this._v(" "),s("li",[this._v("BPF(Berkeley Packet Filter)采用与"),s("strong",[this._v("自然语言相近")]),this._v("的语法，利用语法构造字符串确定"),s("strong",[this._v("保留")]),this._v("具体符合规则的数据包而忽略其他数据包。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）语法"}},[this._v("#")]),this._v(" （2）语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("type 表示对象『类似自然语言中的主语』，如IP地址、子网或者端口\thost、net、port\ndir 表示数据包传输的方向\tsrc、dst\nproto 表示与数据包匹配的协议类型\tether、ip、tcp、arp\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("其中，IP地址锁定某个具体主机，对应的子网锁定某个范围的多个主机，端口是锁定某个具体的服务『通过它可以确定网络上具体的某个对象』")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1、ip地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、ip地址"}},[this._v("#")]),this._v(" 1、IP地址")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("伯克利语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-wireshark line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("host 192.168.4.5\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ip.addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("==")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".4.5\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_2、src地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、src地址"}},[this._v("#")]),this._v(" 2、src地址")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-wireshark line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("src 192.168.4.5\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ip.src "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("==")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".3.236\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_3、dst"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、dst"}},[this._v("#")]),this._v(" 3、dst")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-wireshark line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("dst 192.168.4.5\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ip.dst "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("==")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".3.236\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_4、port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、port"}},[this._v("#")]),this._v(" 4、port")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("dst port "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".4.5\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("tcp.port "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("==")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("80")]),this._v(" \n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("tcp.port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" udp.port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_5、网络范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、网络范围"}},[this._v("#")]),this._v(" 5、网络范围")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("伯克利语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("net "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".4.0/24\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark语法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("ip.addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("==")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".3.0/24\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_6、并且和或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、并且和或"}},[this._v("#")]),this._v(" 6、并且和或")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("tcp.port "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" and ip.dst "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".3.236\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）自己总结的语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）自己总结的语法"}},[this._v("#")]),this._v(" （3）自己总结的语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark语法，感觉是协议.协议内容 == 逻辑关键词（||或and或not）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（4）wireshark包过滤器分类："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）wireshark包过滤器分类："}},[this._v("#")]),this._v(" （4）wireshark包过滤器分类：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("『捕获』过滤器：是在咋们在"),e("strong",[t._v("抓包之前")]),t._v("，进行设置，这样wireshark就不会抓获不符合规则的数据包『设置包捕获过滤器的方法：Capture filter for selected interfaces:设置，")]),t._v(" "),e("li",[t._v("『筛选』过滤器：是在"),e("strong",[t._v("抓包之后")]),t._v("，应用的，是『显示过滤器』，我们"),e("strong",[t._v("前面用的功能都是这种过滤器")]),t._v("！！！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、-『捕获』过滤器『前面』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-『捕获』过滤器『前面』"}},[this._v("#")]),this._v(" 三、 『捕获』过滤器『前面』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("遵循伯克利过滤器语法规则：也就是说，前面的语法也遵循")]),this._v(" "),s("li",[this._v("演示：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）只捕获目标端口为80的tcp数据包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）只捕获目标端口为80的tcp数据包"}},[this._v("#")]),this._v(" （1）只捕获目标端口为80的tcp数据包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("tcp dst port "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("80")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）捕获主机p地址为192-168-4-5的数据包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）捕获主机p地址为192-168-4-5的数据包"}},[this._v("#")]),this._v(" （2）捕获主机P地址为192.168.4.5的数据包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("host")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".3.236\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("dst "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("host")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".3.236\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("src "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("host")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".3.236\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）语法很像直接的伯克利表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）语法很像直接的伯克利表达式"}},[this._v("#")]),this._v(" （3）语法很像直接的伯克利表达式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、『筛选』过滤器『后面』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、『筛选』过滤器『后面』"}},[this._v("#")]),this._v(" 四、『筛选』过滤器『后面』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("筛选过滤器，又称『显示过滤器』")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("输入框创建，快捷键Ctrl+/")])]),t._v(" "),e("li",[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("http.request.full_uri "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.baidu.com"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("数据包细节面板创建『就是你查看某个包的细节，你右键那个选中，就能选择』")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("语法：主题+运算符+值")])]),t._v(" "),e("li",[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("运算符比如： "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("逻辑关系（3个）下面6种写法都OK")])]),t._v(" "),e("li",[e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("and or not\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"五、wireshark捕获输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、wireshark捕获输出"}},[this._v("#")]),this._v(" 五、Wireshark捕获输出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("捕获的数据包如何进行有规则的保存？")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）设置输出文件格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）设置输出文件格式"}},[this._v("#")]),this._v(" （1）设置输出文件格式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("pcap-ng还是pcap")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）输出文件位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）输出文件位置"}},[this._v("#")]),this._v(" （2）输出文件位置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）-数据流特别大，会导致文件太大，导致wireshark无法正常打开保存的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）-数据流特别大，会导致文件太大，导致wireshark无法正常打开保存的文件"}},[this._v("#")]),this._v(" （3） 数据流特别大，会导致文件太大，导致wireshark无法正常打开保存的文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("比如用wireshark抓取某个主机流量的时候，可能这个数据特别大。当然你如果在本地不开任何网络程序的话，可能数据量是非常小的，但是如果你监听大型服务器的话，它的数据流量就是特别大的，如果把数据流量保持，此时会导致，无法打开超大量的文件，会出现卡顿")]),this._v(" "),s("li",[this._v("解决方案：设置自动创建新文件，每隔10秒创建一个文件。")]),this._v(" "),s("li",[s("strong",[this._v("『捕获选项』中修改")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（4）使用wireshark进行网络监控，无论硬盘空间多大都有可能会被消耗殆尽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）使用wireshark进行网络监控，无论硬盘空间多大都有可能会被消耗殆尽"}},[this._v("#")]),this._v(" （4）使用wireshark进行网络监控，无论硬盘空间多大都有可能会被消耗殆尽")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("『捕获选项』中修改")])]),this._v(" "),s("li",[this._v("解决方案:环形缓存器")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（5）捕获选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（5）捕获选项"}},[this._v("#")]),this._v(" （5）捕获选项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（6）使用文件中的保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（6）使用文件中的保存"}},[this._v("#")]),this._v(" （6）使用文件中的保存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("容易，Ctrl+S")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"六、wireshark杂项设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、wireshark杂项设置"}},[this._v("#")]),this._v(" 六、Wireshark杂项设置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("wireshark中特别边角料，但是也可能绊倒你的杂项设置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）查看wireshark『内置文件』路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）查看wireshark『内置文件』路径"}},[this._v("#")]),this._v(" （1）查看wireshark『内置文件』路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("设置，或者说不是用来配置，而是为了来帮助我们找到具体的文件路径的方式。")]),this._v(" "),s("li",[this._v("我们可以找到，wireshark的所有相关文件，比如说『它的配置文件』和它的使用到的文件路径")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）修改wireshark默认配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）修改wireshark默认配置"}},[this._v("#")]),this._v(" （2）修改wireshark默认配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("有的人，发现别人的界面与我们自己的界面不一样")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=a.exports}}]);