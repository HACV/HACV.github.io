(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{215:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("记录一下相关书籍，收集一下相关博客")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("有一说一，太厚了，当字典。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_26/01.APUE.jpg",width:"50%"}}),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_26/03.UNP.jpg",width:"50%"}}),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("摘自：apue和unp两卷-》libevent")]),t._v(" "),t._m(7),s("p",[t._v("下面转载自"),s("a",{attrs:{href:"https://blog.csdn.net/qq_33890670/article/details/80353744",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),s("OutboundLink")],1),s("br"),t._v("\n如果主要希望掌握UNIX下的编程技术，尤其是网络编程技术的话，可以有两条路走：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("转载自："),s("a",{attrs:{href:"https://blog.csdn.net/qq_29996285/article/details/84792810",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),s("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("我毕业的时候，一心想做 Windows C/C++客户端开发，当时为了做这个开发放弃了我熟悉的flash编程和web开发，当然薪资也是比较低的。做了几年Windows客户端后，我毅然以一定的代价转到了linux服务器开发。到今天为止，大致做过股票资讯、交易系统、游戏服务器、即时通讯系统和直播类型的服务器，架构的能力也由最初的千人到后来的百万在线。我从不后悔我当初转行服务器开发，甚至很庆幸当初的抉择，然而我可能更喜欢的还是客户端开发。\n《写给那些傻傻的，想做服务器开发的应届生》一文中的有些观点，根据我的经历，我不敢赞同，或者说我的感受与之大相径庭。")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("首先说下加班的情况，不管是大公司还是小公司，由于现在的各种测试、预警机制、监控策略和公司发布流程的不断完善，一个月内经常为各种服务器bug、和应急的情况加班的现状已经大为改善不少，当然偶尔发版或者赶项目加班还是有的，不过一个月的频率也就那么一两次。如果你们团队频繁地为了修正紧急bug、解决服务器稳定性问题，那么你们真要好好考虑你们的方法是不是有问题了。")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("其次，服务器开发，不仅仅如文中所说的，利用或者组装各种轮子。一个稳定的服务器架构，必须是建立在设计师良好的基础知识和见多识广的经验基础上，即使是使用现有的轮子，也是对这个轮子足够熟悉的基础上，才能让轮子最大地适用自己的公司的业务。也就是说，服务器核心项目人员虽然不一定要造轮子，但一定要具备造轮子的能力。开源的东西好用是好用，但是要么不出问题，一旦出问题往往很难修改。我们去年做类似“冲顶大会”、“百万英雄”这类直播答题应用，由于这类游戏是从美国HQ刮过来的风，国内各大公司为了迅速抢占市场与用户，都想着要比别人早点做出来上线，所以我们公司当时deadline压得比较紧。我们那个时候，最不想看到的人就是项目经理，天天跟着我们后面催项目的进度。项目进度紧不说，另外还有一个技术挑战，由于节目比较火热，同一个房间里面可能会达到百万人同时在线，而这百万人可能同时都会发弹幕消息。假设某个时刻，房间里面有n个人，某个人发一条消息，其他n-1个人收到，服务器需要推送n-1次。如果n个人同时发消息，那么服务器同一时间就要推送n*n，如果n等于1百万的时候，那么单秒的数据量将非常恐怖，这个是我们需要解决的一个技术难题，解决目标是最少延迟的情况下，弹幕最多的送达率；另外一个难题就是，保证出题和答案不能有太多的延时（小于1秒），并在用户给出答案后，服务器能够迅速统计出答案结果并应答客户端。（没办法，所以此时主持人的作用就发挥了，万一延迟太厉害，主持人可以和观众各种唠嗑，当然这是下下策，如果频繁出现这种情况，领导的脸色肯定也不好看，我们做技术的脸上也没有光彩。）那段时间基本上是周六周日都要加班，甚至连周末都可能要到凌晨才能回去。注意：我把这段经历并没有放在上面的关于服务器开发是否频繁地加班的栏目下，这里我想说明的并不是服务器开发要经常加班，我想说的是，如果你平常只会用轮子，而不注重基础内功的修养，这种场景你是很难应对的，首先是单机服务性能要做到极致，其次是多个服务之间的高效配合。很多人可能觉得这种场景也不难，甚至有的人号称单机服务就能解决，这些都是站着说话不腰疼了。像熊猫tv的“冲顶大会”和西瓜视频的“百万英雄”前几次的答题活动中，也出现了服务中断或者题目延迟厉害，甚至“百万英雄”还出现过一次因技术问题答题活动被迫延期的事故。")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("接着说下，技术和产品方面的，服务器开发与客户端开发的思维方式和理念其实是不一样的，如果说客户端产品是一个产品的脸面，那么服务器端就是产品的灵魂。这里可能比喻有点不恰当，与客户端开发相比，优秀的服务器开发应该尽量在单机服务上的性能做到极致，必须尽量利用少的资源给尽可能多的客户端服务（在资源总量有限的情况下，你为单个客户端服务使用的资源越少，你才可能为越多的客户服务）。而服务器开发必须有条不紊地处理与每个客户端的交互，不能纠结或把资源花费在某一个客户端上。但是客户端不一样，客户端只需要管理好自己的一亩三分地就可以了，而且客户端的大多数逻辑和细节在界面（UI）逻辑上。但是我不赞成文中作者所说的客户端代码比服务器代码少很多，相反，我经历过的项目，都是客户度代码比服务器代码多很多。因为客户端代码往往有大量的界面逻辑，如果服务器端没有UI的话，其核心除了网路通信部分，剩下的就是各种业务逻辑（包括存储逻辑，也就是业务逻辑服务器和客户端都有，但是客户端还有界面逻辑）。而从开发团队的人数配比上来说，一般单个端（比如pc、安卓、ios中的一端）的人数要小于服务器开发人员的数量，因为一般一个高级客户端开发，往往可以一个人搞定一个客户端，但是一般很少有一个高级服务器开发可以单独搞定一套服务开发的。（说的是通常情形，请不要走极端）。服务器开发的核心字眼体现在“服务”上，如何为客户端提供稳定的、高效的服务，这是关键的地方。这里“稳定”也包括容灾容错。大凡有一定规模的用户群体的产品，如果服务器不稳定，那后果将是灾难性的，试想QQ或者微信服务器中断一两个小时，后果会怎样？而客户端更侧重的就是产品的细节、用户的体验，当然尽管有些用户体验可能是由服务器端决定的，但是最终还是由客户端反映出来。我不赞同文章中说，客户端更能积累除了技术以外的其他知识，服务器开发也一样的，不管是客户端还是服务器，只有具有产品思维的开发才是好的开发，而功能的设计与规划服务器端的开发在时间点上一般先于客户端开发的。而具体的功能点，也是需要服务器开发人员与产品人员乃至客户沟通的。")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("最后说下，薪资方面。一般大于两年且同样的工作年限的服务器开发人员要比客户端开发人员高至少三分之一左右。当然不排除一些非常优秀的客户端开发人员可能不在这个规则内。")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("总结起来，选择了哪条路就选择了什么样的生活。做服务器开发的可以在高并发、高可用方向进一步努力，而做客户端开发可以在用户体验、设计细节方面下功夫。不管怎样，都是我们想要的生活，那里倾洒了我们的汗水，也收获了我们自己的成就感。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"unix服务器编程方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unix服务器编程方向"}},[this._v("#")]),this._v(" Unix服务器编程方向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一、书籍三本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、书籍三本"}},[this._v("#")]),this._v(" 一、书籍三本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1）apue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1）apue"}},[this._v("#")]),this._v(" 1）APUE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("本书是被誉为UNIX编程“圣经”的"),e("code",[this._v("Advanced Programming in the UNIX Environment")]),this._v("\nAPUE这种“圣经”，当你读不懂的时候才发现他其实没有那么神，他只是告诉你很多深层的东西，关于怎么用，还是要靠你自己。而这一点就已经不适合初学者了。\n其实，还是man过很多次系统调用和有操作系统系统编程经验，不然，此书就是劝退。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2）unp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2）unp"}},[this._v("#")]),this._v(" 2）UNP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("指的两本书，Unix网络编程。\nUnix net\n"),e("img",{attrs:{src:"https://gitee.com/HACV/images_bed/raw/master/MainBlog/2020/2020_07/07_26/02.UNP.jpg",width:"50%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"二、c-服务端方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、c-服务端方向"}},[this._v("#")]),this._v(" 二、C++服务端方向")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Libevent 是一个用C语言编写的、轻量级的开源高性能事件通知库，主要有以下几个亮点：\n事件驱动（ event-driven）\n高性能\n轻量级\n专注于网络，不如 ACE 那么臃肿庞大；\n源代码相当精炼、易读；\n跨平台，支持 Windows、 Linux、 *BSD 和 Mac Os；\n支持多种 I/O 多路复用技术， epoll、 poll、 dev/poll、 select 和 kqueue 等；\n支持 I/O，定时器和信号等事件；\n注册事件优先级。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("1、以实际需要完善知识架构："),s("strong",[t._v("为自己做一个项目，比方说自己写个简单的Web服务器")]),t._v("，因为现在 Web 应用非常丰富，既有成熟的客户端如浏览器可以配合，又有足够全的文档如 RFC文档可供参考，再加上最基本的 socket 编程经验，就可以开始做自己的 Web 服务器。一步一步的为 Web 服务器添加流行的功能，如支持后台 FastCGI 接口，支持 WebDAV，支持流媒体等。在这个过程中不断地学习和掌握相关的理论知识，有时在发觉设计上的不足时甚至需要推翻全盘重新架构。当最终一个完全符合自己心意且足够实用的 Web 服务器做成时，就拥有了可以由自己支配和修改的服务器，同时也掌握了相关的专业理论。这种方式比较适合有一定专业基础的人使用。优点是直观，方向明确所以学习效率高。缺点是需求驱动，形成知识架构不容易完整。")]),t._v(" "),s("li",[s("strong",[t._v("尝试根据自己的兴趣，选择一个规模适当的开源项目，去阅读它的源代码")]),t._v("。（"),s("strong",[t._v("例如我选择的就是一个小型的http服务器--Mongoose")]),t._v("）当在某一方面发现自己有很多问题时，很希望去弄清楚时，这时候就可以去翻开手中的APUE，带着问题去阅读。这时候学习的效率必然比盲目地去看书更高，而且遗忘率也会降低。\n但是，仅仅读完是不够的。")]),t._v(" "),s("li",[t._v("很多时候，你看书的时候，会感觉自己看懂了，但是没过多久，又会发现自己忘了。或者，有时候你根本没看懂，而只是囫囵吞枣地看过去。所以，看完后，最好的方法就是写博客。尝试按照自己的理解以及逻辑，去将你学到的知识系统地阐述出来。这样，就算你以后忘了，再去"),s("strong",[t._v("翻翻博文")]),t._v("，也能很快就捡起来。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"三、写给那些想做服务器开发的朋友（转载）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、写给那些想做服务器开发的朋友（转载）"}},[this._v("#")]),this._v(" 三、写给那些想做服务器开发的朋友（转载）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"我的工作经历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我的工作经历"}},[this._v("#")]),this._v(" 我的工作经历")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"加班的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加班的情况"}},[this._v("#")]),this._v(" 加班的情况")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"服务器开发与轮子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器开发与轮子"}},[this._v("#")]),this._v(" 服务器开发与轮子")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"技术与产品思维"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术与产品思维"}},[this._v("#")]),this._v(" 技术与产品思维")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"薪资方面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#薪资方面"}},[this._v("#")]),this._v(" 薪资方面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[this._v("#")]),this._v(" 结语")])}],!1,null,null,null);e.default=n.exports}}]);