(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{237:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[n("li",[n("font",{staticStyle:{background:"yellow"}},[t._v("约定，以后用的网络层次，仅用『TCP/IP四层』中的术语")])],1),t._v(" "),n("li",[t._v("『我们的网络编程研究的是4层模型，不是我们教学中的5层模型，注意！")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),n("p",[t._v("​")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("ul",[n("li",[t._v("网络分层模型")]),t._v(" "),n("li",[n("font",{staticStyle:{background:"yellow"}},[t._v("在我们的Linux操作系统中，我们的一般的"),n("strong",[t._v("应用程序")]),t._v("的角度出发，我们重点掌握的是"),n("strong",[t._v("TCP/IP四层模型")]),t._v("结结构（注意这句话）")])],1),t._v(" "),n("li",[t._v("7层和4层，其实说的是一回事，只不过，划分的理论依据和方式不太一样而已。")])]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),n("center",[n("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("七层协议")])],1),t._v(" "),n("table",[t._m(26),t._v(" "),n("tbody",[t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),n("tr",[n("td",[t._v("传输层")]),t._v(" "),n("td",[t._v("对应的信息更加进一步了，主要携带的是"),n("strong",[t._v("端口号")]),t._v("。"),n("br"),t._v("可能大家不晓得这个端口号代表的是啥？"),n("br"),n("font",{staticStyle:{background:"yellow"}},[n("strong",[t._v("实际上，端口号实际上代表我们之前讲过的（进程）")]),n("br"),t._v("但是，我们每一个进程扔到网络环境当中的时候，会给你这个进程配上一个唯一的端口号，"),n("br"),t._v("那因此，一个唯一的端口号，可以代表一个进程，咋们知道，进程在你当前的计算机中是唯一的。")]),t._v('正是因为这个进程在计算机当中唯一，加上网络层中IP地址在网络环境当中也是唯一的。所以，它就可以在网络当中游走了。**所以，我们传输层和网络层，我们通常说他们两是捆绑使用的。**因此我们经常说“网络 传输”通常说的“网络传输"就是指的这2层而言。')],1)]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),n("tr",[n("td",[t._v("应用层")]),t._v(" "),n("td",[t._v("重点强调这个应用层："),n("br"),t._v("这个应用层，主要是"),n("strong",[t._v("针对我们应用程序")]),t._v("而言，所封装的一些协议。比如FTP，http"),n("br"),n("strong",[t._v("主要是为了方便用户对数据进行访问，把数据包拿过来，进行访问（深刻理解这句话）")]),n("br"),n("font",{staticStyle:{background:"yellow"}},[t._v("而我们的，电子邮件、文件传输和终端仿真,这些是我们在“应用层”"),n("strong",[t._v("上面")]),t._v("封装的一些协议。它是直接在我们的应用程序里面要用到的")]),n("br"),t._v("所以说，你编写的应用程序直接会用到的协议是哪层的协议？？应用层协议。")],1)])])]),t._v(" "),n("br"),t._v(" "),n("center",[n("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("TCP/IP四层（重点）")])],1),t._v(" "),t._m(32),t._v(" "),n("table",[t._m(33),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("链路层（网络接口层）")]),t._v(" "),n("td",[n("font",{attrs:{size:"2"}},[t._v("最后，链路层的协议叫做——"),n("strong",[t._v("以太网帧协议")]),t._v("。")])],1),t._v(" "),n("td",[t._v("物理层、数据链路层")])]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36)])]),t._v(" "),t._m(37),t._v(" "),n("p",[t._v("我们所写的应用程序，默认都是封装好了以后直接向下发送，\n比如，你在程序当中遵循的http协议，那你要遵循它的get，set方法，遵循它的这个方法，按照这个方法，去写你的数据流。写好了以后，就表示我们支持了http协议，当你程序运行起来之后，操作系统会帮助你调用以下的这些底层，1-6层。这些活都是谁干的？？？都是操作系统干的。")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),n("p",[t._v("首先，准备数据“啥时候还我钱”  （这个时候，要是直接放网络中，会被网络的海浪淹死）\n然后，在这个数据之外，封装上了应用层数据（这个时候，要是直接放网络中，还是会会被网络的海浪淹死）\n然后，在上面的基础上，继续封装传输层协议的，（这个时候，要是直接放网络中，照常会被网络的海浪淹死）\n然后，在上面的基础上，继续封装网络层协议的\n然后，在上面的基础上，继续封装链路层（前后，头和尾都封装，这个和以前的不一样）层协议的\n（这个时候，再放网络中，不会被网络的海浪淹死，可以正常传输）")]),t._v(" "),n("p",[t._v("注意，上面的，"),n("font",{staticStyle:{background:"red"}},[t._v("数据包的逐层封装，都是操作系统帮你干的！！,不需要我们自己来封装（也就是说，不是我们写的client.c里面做的）")]),t._v("（比如，上面，你写的数据，被封装上应用层，这是OS帮你干的的）同样，解封装，也是操作系统帮你做的。\n所以，你的数据，在网络传输前，需要操作系统帮你，你的数据才能传输。")],1),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),n("p",[t._v("现在我们来看看，链路层如何帮助我们完成数据包的找寻。\n如图，6字节目标地址，6字节的源地址，2字节的类型，"),n("font",{staticStyle:{background:"yellow"}},[t._v("4字节的校验（CRC）"),n("strong",[t._v("（注意，这个4字节的，就是我们每次画画的时候那个，帧尾那个玩意！！！）")])]),t._v("\n我们刚开始，知道链路层，主要用来校验。")],1),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("注意，上面的目的地址和源地址，不是IP地址，而是对应的电脑里面的硬件地址（MAC地址，所谓的MAC地址，实际上就是网卡的编号，对应你每个人都有的身份证，这个编号保证这块网卡在网络应用环境当中，是唯一的。）比如，我们Linux下ifconfig就能看到")])],1),t._v(" "),t._m(49),t._m(50),t._v(" "),n("p",[t._v("**以太帧中，有一个特殊的协议，也就是ARP协议，**这个ARP协议，就是专门用来获取。下一个，我要经过的路由器的MAC地址的。")]),t._v(" "),n("p",[t._v("也就是说，我们这个协议，它是一个一般化的格式，或者说是个模板，我通过模板里面。这个2字节的变化，来达到发送不同数据的目的。下面，我们来看看那个28个字节的ARP数据报")]),t._v(" "),t._m(51),t._v(" "),n("p",[t._v("6+6+2+++28+18的PAD（原因是，我要28+18才能达到最小的46个字节，满足人家那格式才行，言外之意，这18个字节没啥用，真正有用的是那28个字节）")]),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),n("p",[t._v("我们主要关注28字节中，这些部分\n6字节的发送端的以太网地址，\n4字节发送端的IP地址，\n6字节大小目的以太网地址\n4字节目的IP地址")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),n("p",[t._v("（2）6个字节（自己的源MAC地址）")]),t._v(" "),n("p",[t._v("(3)2字节，帧类型，0806")]),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("就是通过上面这种方式，在我们的网络环境中，从这个节点，选择到这个节点。。。（但是，我还是不懂，什么鬼）")])],1),t._v(" "),t._m(58),t._v(" "),n("p",[t._v("那么我的数据报，在我一个路由一个路由之间传输，这每一个路由节点，我们又称之为“一跳”\n形容，数据包，从这蹦到这。。")]),t._v(" "),n("p",[t._v("ARP数据报，所谓数据报，就是去完之后，就没有回了。有去无回的数据报？？？\n什么鬼\narp数据报;获取下一跳的mac地址。")]),t._v(" "),n("p",[t._v("我们的数据包每到一个路由器，都要完成一个数据包的解包和打包（但是，不是完全的解包罗）")]),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("问题：（难点，重点）\nARP数据包中的，发送端IP地址是本机IP，那么目的IP地址呢？？\n是我数据包，最终去往的那个IP地址吗？？还是我的目前的下一跳的IP地址？？\n答案："),n("strong",[t._v("下一跳的IP地址")]),t._v("\n那么问题来了，最终去往的那个IP放在哪里呢？？？\n封装在了我们的网络层，具体说是封装在网络层的IP协议当中（这是，计算机网络的核心知识点之一，个人认为，事实上也是的）\n")]),t._v("\n所以，也解释了，每到一个路由器，要解包:解数据链路层的，解网络层的。")],1),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("（重点：理解这里，计算机网络水平就上升很多了）这样，我就明白了数据包，如何寻路，其实就是利用数据链路层（ARP广播）和网络层（IP）")]),t._v("从网络层中，根据你要传输的，"),n("strong",[t._v("最终目的IP")]),t._v("，通过路由器中的路由表，进行寻路。\n路由器参照自己内部的路由表，帮助我进行寻路，就是决定路由器应该下一跳。知道下一跳，我就知道下一跳的IP地址了。然后，可以把这个往ARP的目的IP添。，然后重复先前的ARP广播，一步步的这么跳下去。\n这样，我清晰了。")],1),t._v(" "),n("p",[t._v("但是，在这个基础上，我又有一个疑问：那我们新开的一个路由器，投入网络使用的时候，最初是怎么知道，相邻的路由器的呢？？？？难道是手工？？？")]),t._v(" "),n("p",[t._v("加餐：网络环境很差，各种最优的选择的路由器直接断开，怎么办？？\n所以就只能，发一些其他路由器，看能不能从你那里绕过去。\n而且，很低概率上，甚至会在好几个路由器之间死循环——————这种数据包，要是很多的话，就会拥塞住你当前的网络环境。\n为了为了防止这种死循环，我们所有的数据包在发送的时候，要经过多少跳才能送到最终的终点的地方，这个上限有限定的！！！比如，我跳了100跳了，还没有到达，，，我们就会考虑丢弃这个。\n**我们把这个上限，称之为TTL（就是你的这个数据包，在网络传输过程当中的最长生命周期，一般是以1跳为单位）**比如TTL=56，表示最多经过56个路由器，要是经过这么多，还没有到，，，\n**因为每经过一个路由器，就把TTL减1；**那最后一个路由器把他丢弃。也就是把TTL减为0的路由器。\n这样就保证了，就算在网络环境很差的环境下，也不会拥塞我们的网络。")]),t._v(" "),t._m(59),t._v(" "),n("p",[t._v("问，我封装好的数据包，怎么会，从这端到那一端？\n原因是数据包里面有一层是IP地址。\n显然，它在实际进入网络环境的时候，它会根据我们的 IP地址去进行寻路。\n实际上，当我们的数据包从网卡里面出来的时候，实际上，它可以选择的路好多条。\n这些，都有可能到达目的地，所以=，我们形象称为“网”\n路由器——\n路，\n由：经由的意思，我从这条路走到这边会经由哪些站点？也就是说，我选路的一个过程。\n你实际选择了哪些路由器，作为我的经过，我们把这个路由器，称为我的一个路由节点。")]),t._v(" "),n("p",[t._v("在每个路由节点里面，会有一个路由表！路由表是什么？\n表格，表格内部记录了一条条路由信息。\n路由表记录了，我的路由器连接了哪些路由器，也就是说，我会把你的数据包，接下来发送给哪些路由器。")]),t._v(" "),t._m(60),t._v(" "),n("p",[t._v("我们把，路由器参照自己的这个路由表在选择，数据包下一个发送位置的过程，我们把他称之为寻路。\n（我要寻找我的下一个路由节点）")]),t._v(" "),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("注意：对于TCP协议来说，它的寻路，一般情况下只有一次。\n就是当数据包第一次发送的时候。")]),t._v("\n一旦，我把这条路建立好了之后，假如说，我要发送一个小说过去。这个小说显然，要发送好多这样的数据包发送。\n"),n("font",{staticStyle:{background:"yellow"}},[t._v("一旦，我把这条路建立好了之后，那么后续，它所有的数据包都是按照这条路径来走的@！！")]),t._v("\n因此，我们说，TCP在数据传输过程当中，稳定，因为我传输数据的路由是固定的！！！")],1),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),n("p",[t._v("但是已经推了很多年了。")]),t._v(" "),t._m(65),t._v(" "),n("p",[t._v("联系："),n("font",{staticStyle:{background:"yellow"},attrs:{size:"5"}},[t._v("IP层封装的这些东西，对于，以太网帧格式来说，是它的什么部分？？是它的数据，，，比如在前面的前面的图中，对应的是46-1500字节的那个里面")])],1),t._v(" "),t._m(66),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),n("p",[t._v("端口号用来描述，进程。（毕竟IP只能找到电脑，端口号才能找到那个电脑上哪个进程）")]),t._v(" "),t._m(69),t._m(70),t._v(" "),t._m(71),n("p",[n("font",{staticStyle:{background:"yellow"}},[t._v("至此，以太网帧层-》网络层-》传输层我们从思路上走了一遍")])],1),t._v(" "),n("p",[t._v("这些个协议格式，大概我们都给他们介绍了。")]),t._v(" "),t._m(72),t._v(" "),t._m(73),t._v(" "),t._m(74),t._v(" "),n("p",[t._v("（很重要的前置知识）")]),t._v(" "),n("p",[t._v("注意：")]),t._v(" "),t._m(75),n("p",[t._v("套接字是我们Linux系统当中的一种文件类型，socket是一个文件是一个伪文件。")]),t._v(" "),n("p",[t._v("注意：")]),t._v(" "),t._m(76),n("p",[t._v("当你写数据的时候，通过文件描述法，写入到套接字这个伪文件里面。实际上是通过，发送端缓冲区，连接到另外一个套接字的接收端。把数据写过去了。")]),t._v(" "),t._m(77)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("title: 网络协议基础"),s("br"),this._v("\ndate: 2020-08-06")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网"}},[this._v("#")]),this._v(" 网")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、-基本概念目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-基本概念目标"}},[this._v("#")]),this._v(" 一、 基本概念目标")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）协议"}},[this._v("#")]),this._v(" （1）协议")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("协议")]),this._v("：相互约定的“数据"),s("strong",[this._v("传输")]),this._v("”和“数据"),s("strong",[this._v("解释")]),this._v("”的规则，协议是在数据传输之间就已经制定好了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）协议格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）协议格式"}},[this._v("#")]),this._v(" （2）协议格式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("了解基本的或者说常用的协议格式")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("数据包基本格式:\n数-应-传-网-链路   我们扔到网络环境中的这个数据包，这个数据包的基本格式。\n也就是协议的总体格式是哪些？\n\n以太网帧（链路层）格式\narp数据包格式——arp攻击  \nIP段格式（网络层）——IP 32  \nTCP/UDP（传输层）——prot 16——65535    \nTCP格式是我们整个网络编程当中比较重要的一种格式！\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）c-s编码模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）c-s编码模型"}},[this._v("#")]),this._v(" （3）C/S编码模型")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c\t\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("socket")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  建立套接字\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 绑定IP 端口号  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sockaddr_in")]),t._v(" addr 初始化"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 指定最大同时发起连接数\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  阻塞等待客户端发起连接\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.")]),t._v(" 小"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("大\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.")]),t._v(" write 给 客户端\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("socket")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  可以依赖“隐式绑定”\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("发起连接\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、c-s和b-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、c-s和b-s"}},[this._v("#")]),this._v(" 二、C/S和B/S")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）c-s架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）c-s架构"}},[this._v("#")]),this._v(" （1）C/S架构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("优点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  1.协议的选用灵活，我们可以采用我们『自定义』的协议，并不一定要遵循现有的协议。\n  典型的，比如电脑上的QQ软件。客户端，典型的C/S架构。\n  2.数据可以提前缓存，比如，游戏的第一次的缓存。\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("缺点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1、每次使用，要下载客户端。\n客户端装在你主机上，你也不知道对你电脑做了什么事情，比如3Q大战，\n『360和QQ』互相喷，客户端对用户的安全构成威胁。\n2、需要开发客户端和服务端，两个需要联合调试，调试困难，\n『联调』（联合调试）非常闹心。而且，开发量也大。\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）b-s架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）b-s架构"}},[this._v("#")]),this._v(" （2）B/S架构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("优点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1.由于不会给主机安装客户端，啥的，相对来说，安全性要高一些。\n2.只需要开发服务器端，你采用B/S模式，你所要选用的协议就是http协议，你既然选用这个模式，\n你就要对这个协议进行『完整』的支持，『你用或者不用的这个部分，你都要支持他。』\n3.跨平台，比如网页游戏，无论是在Linux还是Windows\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("缺点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1、必须支持http协议，而且不能对http裁剪，你必须支持所有，即使这个模块你不用。但是你得支持。\n2、数据是现加载，现缓存。所以，一般网页游戏是2D游戏，而不是3D游戏。\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）总结"}},[this._v("#")]),this._v(" （3）总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("老实说，C/S和B/S互补"),s("br"),this._v("\n数据量访问比较大：C/S模型"),s("br"),this._v("\n应用程序稳定性高：C/S模型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、tcp-ip4层模型和os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、tcp-ip4层模型和os"}},[this._v("#")]),this._v(" 三、TCP/IP4层模型和OS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）7层模型和tcp-ip4层对应方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）7层模型和tcp-ip4层对应方式"}},[this._v("#")]),this._v(" （1）7层模型和TCP/IP4层对应方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("7层模型记忆法：  物数网传,会表应（"),s("strong",[this._v("巫术忘传会表应")]),this._v("）"),s("br"),this._v("\n有一说一，这个首先的学习方法就是硬背。（比如，你小时候背99乘法表，最开始不晓得干啥的，后面就开窍了，这个也是这样，暂时无法给你讲很多辅助知识，所以只能硬记）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("7层")]),this._v(" "),s("th",[this._v("说明")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("物理层")]),this._v(" "),s("td",[this._v("在网络通信过程当中，你所使用到的一"),s("strong",[this._v("些物理设备")]),this._v("的一些"),s("strong",[this._v("标准")]),this._v("。比如双绞线，光纤，我们现在使用的是光纤，早期的话，还会提到同轴电缆这样的东西。这里面所涉及到你网线的接口，它什么样的类型，都在这个里面都有一个限定。指定。还有就是你使用的这个物理设备是按照什么方式去传播的？也就是我们通常所说的bit位。传输速率是每秒多少bit，其实还有我们提到的数模转换与模数转换，高低电平的转化。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("tr",[n("td",[t._v("数据链路层")]),t._v(" "),n("td",[t._v("主要，实际上是针对我们网络当中，"),n("strong",[t._v("物理层接受过来的数据")]),t._v("，进行"),n("strong",[t._v("校验")]),t._v("的，它主要是数据进行侦测和校验。"),n("br"),t._v("比如说，你数据传输过来，有没有数据的丢失啊。是否有错误啊。在它的底层有个简单的二进制的校验的规则。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("tr",[n("td",[t._v("网络层")]),t._v(" "),n("td",[t._v("指定我们在传输的过程当中，提供的"),n("strong",[t._v("网络访问的路径")]),t._v("？？"),n("br"),t._v("比如说，我们知道，"),n("strong",[t._v("你要想数据包在网络当中传输，必须要给他指定一个唯一的IP地址")]),t._v("。"),n("br"),t._v("指定完IP地址之后，它通过IP地址在你当前比较"),n("strong",[t._v("繁杂的网络环境当中，进行寻路")]),t._v("。"),n("br"),t._v("通过路由的跳转，最终到达目的地。它为什么能够到达目的地？主要是你给它传的IP地址而到达的。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("tr",[n("td",[t._v("会话层")]),t._v(" "),n("td",[t._v("所谓的会话层和表示层："),n("br"),t._v("实际上是对我们传输层，上层的数据进行间接的封装和解封装的这样的一个过程。"),n("br"),t._v("也是为了对数据进行确认的。"),n("br"),t._v("在好多上面，会对回话和表示进行一个打包处理。"),n("br"),n("strong",[t._v("因为我们刚刚强调，你的这个会话层和表示层和应用层，在TCP/IP模型里面，统一把他称为，应用层。")]),n("br"),t._v("因为这里面，这3层的分工不是那么的明确。"),n("br"),t._v("主要是对我们发送过来的信息，进行再一次的封装。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("表示层")]),this._v(" "),s("td")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("1、网络接口层（也有书叫：链路层）")]),this._v(" "),s("li",[this._v("反正就是最接近底层的—>网络层（主要用到协议：IP协议）—>传输协议（一般用到TCP/UDP协议）—>应用层（比如，FTP协议，SSH协议，FTPS，"),s("strong",[this._v("USB协议，蓝牙的协议？？")]),this._v("）")]),this._v(" "),s("li",[this._v("2、以太网帧协议，加上帧头和帧尾之后，会对应有一个以太网的驱动程序，也就是说，通过以太网驱动，由我们的网卡，把我们的数据包扔到，以太网环境当中。然后，下面的那根线，实际上模拟的就是我们网络环境。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("TCP/IP")]),this._v(" "),s("th"),this._v(" "),s("th",[this._v("对应的ISO7层模型的")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("网络层")]),this._v(" "),s("td"),this._v(" "),s("td")])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("传输层")]),this._v(" "),s("td"),this._v(" "),s("td")])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("应用层")]),this._v(" "),s("td"),this._v(" "),s("td",[this._v("表示层、会话层、应用层")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而下边这些协议，实际我们，会在应用程序中用到吗？不会！！！！\n"),s("strong",[this._v("也就是，除了第7层之外的其他协议，你是不会在你编写的程序当中用得到的；")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("问题：我的应用程序当中，我有可能使用到“网络层”或者“传输层协议”啊，这\n那这个时候，你在使用的还是"),n("strong",[t._v("TCP/IP模型")]),t._v("吗？就不是了，如果你在应用程序当中，使用到了这些协议的话\n说明你"),n("strong",[t._v("使用的不再是默认的TCP/IP模型")]),t._v("。\n而我们选用的是什么协议啊？？\n"),n("strong",[t._v("自定义")]),t._v("的协议！！！！\n如果说，你采用的是"),n("strong",[t._v("自定义的协议")]),t._v("的话，我们才会在“网络层”或者“传输层“涉及到协议的这种概念。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有了4层模型的基本认识之后（注意，是TCP/IP 4层模型）我们接下来要讨论的是"),s("strong",[this._v("我们的数据包如何封装，借助这4层协议，完成网络传输。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("最后要了解，你的数据最终是从哪里出去的？？\n一定是从你的网卡里面传输出去的。所以，你的网卡要传输到你的网络环境里面。当然，这期间，可能需要经过路由器，交换机")]),this._v("\n数据要想传输，必须进行封装！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）计算机网络中的os『重要』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）计算机网络中的os『重要』"}},[this._v("#")]),this._v(" （2）计算机网络中的OS『重要』")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("2大区域")]),t._v(" "),n("th",[t._v("对应TCP/IP模型")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("内核区域（kernel区）")]),t._v(" "),n("td",[t._v("链路层，网络层，传输层")])]),t._v(" "),n("tr",[n("td",[t._v("用户区域（user区）")]),t._v(" "),n("td",[t._v("应用层")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("1、对于用户来说，我只处理，"),n("strong",[t._v("应用程序")]),t._v("的细节。")]),t._v(" "),n("li",[t._v("2、对于内核来说，它处理"),n("strong",[t._v("通信")]),t._v("的一些细节。\n比如，客户端首先封装好FTP协议，然后向下交给传输层。")]),t._v(" "),n("li",[t._v("3、所以，我们强调，这个数据的"),n("strong",[t._v("封装")]),t._v("实际上是由我们操作系统来帮我们完成的。")]),t._v(" "),n("li",[t._v("4、问题：那你这个用户区，万一用到协议呢？那需要我们在编程的过程当中对这个协议进行支持。比如，你使用FTP。你就需要使用它的put和GET")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、自底向上4层模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、自底向上4层模型"}},[this._v("#")]),this._v(" 四、自底向上4层模型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("逆向思维")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("上半部分重点：数据包的封装！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）以太网帧『网络接口层』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）以太网帧『网络接口层』"}},[this._v("#")]),this._v(" （1）以太网帧『网络接口层』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在说以太网帧格式之前，你首先要明白，我现在要讲的这个格式，它在我们数据包里面扮演什么角色？？\n"),s("strong",[this._v("以太网帧，是在我们最外层的——网络接口层（链路层）（TCP/IP模型当中）")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("也就是说这个网卡编号，在全世界，不会出现重复（神奇）\n\n这个网卡编号，实际上，在网卡出厂之前，比如说英伟达公司，在生产网卡之前，就已经把编号指定好了。\n\n全世界，会专门有这样的组织给分配，比如说，全世界生产这个的厂商，假如说3\n家，他们在生产网卡之前，会收到一个网卡编号的使用范围！比如，1号厂商，\n1000-5000，2号为5001-10000这样的意思。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("注意：以太网帧的，这个目的地址指的是，我的这个数据包"),n("strong",[t._v("将要去到的下一个网卡")]),t._v("的MAC地址是多少。而我的这个源地址是指的，我自己的MAC地址。")]),t._v(" "),n("li",[t._v("那么问题来了：我的这个数据包发送出来，要经过路由器，要经过好多，我怎么知道我的这个数据包要发送的下一块网卡的MAC地址是多少？？怎么知道它的下一个MAC地址是多少？因为，我们知道，我们自己的机器，有我们自己的MAC，路由器有属于路由器自己的MAC。")]),t._v(" "),n("li",[t._v("因为路由器，也是网络终端设备。它也有属于自己的网卡，每个路由器都有一个MAC，当我从这到这个，我是怎么知道他的MAC地址的呢？？？需要借助的是，我们接下来要讲的ARP请求，在以太网帧中，我们知道2个字节表示，以太网帧的类型！")]),t._v(" "),n("li",[t._v("当你的这个类型传递：\n0800的时候，表示我是普通的以太网数据包，后面跟的是数据\n0806，表示我的以太网帧发送的是一个ARP请求包，而发送不是数据。ARP请求包，用来请求，下一跳的MAC地址。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）arp数据报『网络层』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）arp数据报『网络层』"}},[this._v("#")]),this._v(" （2）ARP数据报『网络层』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("PAD表示——填充")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("PS（小知识）：所以iPad怎么来的？就是为了完成一个填充，填充iPhone和Mac因为苹果出iPhone的时候，那个iPhone大概是4英寸大小，而我们的Mac最小的一般是11或13寸大小，因此，它在这两个大小之间，填充了一个9寸的大小，所以取名iPad，其实是为了填充屏幕中间的这一段空白。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如，我在发送"),s("strong",[this._v("ARP请求")]),this._v("的时候，我们不知道目的地址是多少")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("(1）所以，我们将前6个字节填充为0（目的MAC地址）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("6字节的发送端的以太网地址，（同（2）中一样）\n4字节发送端的IP地址（填充好）\n6字节大小接收端以太网地址("),s("strong",[this._v("填上全0，因为现在还不知道)")]),this._v("\n4字节接收端IP地址（填充，知道的IP，因为，你IP都不知道，那就没有办法传递了。。）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ARP请求包，会把我们封装好的这个数据包，扔到网络环境当中，然后，"),s("strong",[this._v("把网络环境当中，所有的，我能连接的，都发送一下。（这叫广播把）")]),this._v("\n当他们收到之后，发现发过来的目的MAC地址竟然是全0，它会讲目的IP和自己的IP进行比较，\n如果发现是自己的IP，那他就做什么操作？？？我帮你做填充，将我的MAC地址填充好。\n然后，填充好之后，发送回一个，回复：但是回复是这样的。\n同样，它的这个包，也是向我网络环境当中，我能连接的所有的路由，或者是终端进行发送。\n发送到之后，每个人都会检查自己的IP，要是对不上则扔掉。\n要是先前那个发送的，收到了，发现有目的IP，也就表示，我先前发送ARP请求包，它给了我回应了。\n这样就知道那个目的MAC了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意，ARP数据报，是干嘛的？\n获取MAC地址的，确切的来说，是获取"),s("strong",[this._v("我下一个即将要把数据包投递的。那个路由的MAC地址")]),this._v("。\n我们把这个"),s("strong",[this._v("路由")]),this._v("称之为我的“下一跳”；")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）路由器寻址『网络层』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）路由器寻址『网络层』"}},[this._v("#")]),this._v(" （3）路由器寻址『网络层』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意，元地址，我自己的路由是192.168.1.23\n我目标的路由是192.168.10.56\n显然，它要把他的"),s("strong",[this._v("目标路由")]),this._v("记录在里面。\n然后发现，下面的192.168.45.67更接近我的路由？？\n所以，选他。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果是UDP协议就不一样了，由于，它没有"),s("strong",[this._v("建立通路")]),this._v("的这样一种机制！！\n所以，它可能第1个走这条路，第2个走这条。\n也就是说，UDP协议在选择的时候，它每次都要干啥？它"),s("strong",[this._v("每次")]),this._v("都要进行一次寻路操作！！！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意：你的数据包在封装的时候，里面要封装一个IP，这个IP地址里面记录的是，我要发送的数据包的"),s("strong",[this._v("目标位置")]),this._v("！而这个IP地址，也是我路由器寻路的一个依据，那么实际上，路由器在寻路的时候，它单纯的是依据我们的这个IP吗？实际上不是的，路由器要寻路不假，但是在寻路的过程当中，它不单单，依照我们这个IP还依照我们这个谁呢？？？也就是我们数据包里面的，以太网帧！！！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（3）ip段格式『网络层』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）ip段格式『网络层』"}},[this._v("#")]),this._v(" （3）IP段格式『网络层』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("4位版本号")]),this._v("：IPv4和Ipv6（其实IPv6主要是国内在推动，毕竟最初IP地址在定位的时候，就是欧美组织在定的，当时下发的时候，几乎就是按照基础的科研单位，就是最小的科研单位，比如到学校的院系，去划分）\n当我们国家的计算机起步，人家几乎分完了，没办法找别人硬要，要来了一部分IP，给我们开发。\n所以说，给我们的IP少得可怜，我们整个国家的IP，范围和别人一所学校的范围，几乎差不多。。。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("4位首部长度")]),this._v("：IP地址的首部的长度是20字节，其实就是记录在这。\n16位总长度（字节数）：描述的是IP段总体的长度\n16位标识"),s("br"),this._v("\n3位标志"),s("br"),this._v("\n13位片偏移\n8位生存时间（TTL）：表示数据包在网络当中能够经过多少个路由器。（记住，TTL在IP段里面记录）\n问题，要是中国到澳大利亚，256跳够吗？？？额。你的跳数和你的物理距离无关。有可能到澳大利亚，海底光缆，3跳就过去了，有可能到广州需要经过几十跳。这都有可能。\n8位协议\n16位首部校验和：在IP段这一层，进行你这个数据包的校验。\n32位源IP地址：最初的IP地址(强调)\n32位的目的IP：最终的IP地址（强调，\n注意，是32位，4字节的IP地址，编程的时候，记得哈\n你程序当中的IP一定受到这个限制！！！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（4）tcp-udp『传输层』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）tcp-udp『传输层』"}},[this._v("#")]),this._v(" （4）TCP/UDP『传输层』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("由于TCP和UDP都位于传输层，言外之意，在传输层的时候，我们要做一个协议选择。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"udp数据报格式："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp数据报格式："}},[this._v("#")]),this._v(" UDP数据报格式：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("16位源端口号：（这2个东西，在编程之前，我们私下已经定好了）\n16位目的端口号：（这2个东西，在编程之前，我们私下已经定好了）比如，说，你\n个人的IP，你需要通过打电话，或者发电报的方式提前知道。\n端口号在我们封装，C/S模型或者B/S模型的时候，我们指定好端口号是多少，比如\n说，B/S模型，端口号是8080端口，这都固定的端口，\n16位UDP长度：\n16位UDP校验和\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"tcp数据报格式："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp数据报格式："}},[this._v("#")]),this._v(" TCP数据报格式：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("显然和UDP都是属于传输层协议，那么都有\n16位源端口号：\n16位目的端口号：\n但是TCP除此之外，还需要有一些东西。\n32位序号，（（大概懂\n32位确认序号。（（大概懂\n\n4位首部长度：\n保留6位:将来，万一协议需要扩展，，，虽然到现在也没用上。\n标志位：URG，ACK，PSH，PST，SYN，FIN\n16位窗口大小\n16位校验和\n16位紧急指针\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（5）应用层没有固定格式『重要』"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（5）应用层没有固定格式『重要』"}},[this._v("#")]),this._v(" （5）应用层没有固定格式『重要』")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Q：至于，"),s("strong",[this._v("应用层，它的协议有没有固定格式")]),this._v("？")]),this._v(" "),s("li",[this._v("A：没有，比如我们知道，画一条先，下3层是内核部分，应用层是user部分,用户层，你所谓的协议是什么样子的，有多少个头，携带多少个数据应该是"),s("strong",[this._v("由用户自己来确定的")]),this._v("。所以，它的协议不固定")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"五、套接字（socket）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、套接字（socket）"}},[this._v("#")]),this._v(" 五、套接字（Socket）")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("IP地址: 在网络环境中唯1标示1台主机\n端口号（Port）:在主机中唯一标示一个进程\nIP+port: 在网络环境中唯1标示1个进程\n我们把“在网络环境中唯1标示1个进程”称为socket\n从这个角度出发，**Socket他必须包含：IP地址和端口号**\n因此你在使用socket之前，你需要确认这两个。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("当你创建好一个socket以后，我也是有一个文件描述法（fd）\n但是，这一个文件描述法，对应2个缓冲区！\n这『2个缓冲』用1个文件描述符来指向。\n1个缓冲区，专门用来完成数据的读入，一个用来完成写出。\n\n所以，我们拿着socket去进行数据操作的时候，我既可以向fd当中写数据，也可以从fd里面读数据。\n比如：管道，数据是单向流动的，半双工通信\n只能一个方向流动，要想2个方向流动，需要2根管道！！！\n但是socket不一样，他是双向『全双工』的！！就是，在同一时刻，我既可以数据读入，也可以数据读出嘛。。\n（2个缓冲区）\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("缓冲区是在内核里面给我们提供的一片存储空间，4K大小左右")])])}],!1,null,null,null);s.default=a.exports}}]);