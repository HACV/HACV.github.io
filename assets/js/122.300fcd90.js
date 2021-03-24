(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{288:function(t,r,_){"use strict";_.r(r);var e=_(0),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.cppblog.com/lucency/archive/2008/04/07/46419.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原来博客传送门"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"一、流与缓冲区的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、流与缓冲区的理解"}},[t._v("#")]),t._v(" 一、"),_("a",{attrs:{href:"https://www.cnblogs.com/wangzhiyi/p/9491969.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("流与缓冲区的理解"),_("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("（K&R 《The C Programming Language》P241）")]),t._v(" "),_("p",[t._v("引用：A stream is a source or destination of data that may be associated with a disk or other peripheral.\n中文版（徐宝文等译）翻译为：\n引用：流（stream）是与磁盘或其它外围设备关联的数据的源或目的地。")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/liangcaiyun2013/article/details/12339339",target:"_blank",rel:"noopener noreferrer"}},[t._v("不错的解释"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("YouTube"),_("a",{attrs:{href:"https://www.youtube.com/watch?v=l8yUB7Z0Guc",target:"_blank",rel:"noopener noreferrer"}},[t._v("的话"),_("OutboundLink")],1)]),t._v(" "),t._m(8)])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"关于流和缓冲区的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于流和缓冲区的理解"}},[this._v("#")]),this._v(" 关于流和缓冲区的理解")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h4",{attrs:{id:"（1）流的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（1）流的概念"}},[this._v("#")]),this._v(" （1）流的概念")])},function(){var t=this.$createElement,r=this._self._c||t;return r("ul",[r("li",[this._v("1、流是一个 "),r("strong",[this._v("过程")]),this._v(" ，一个 "),r("strong",[this._v("动态")]),this._v(" 的概念")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[r("em",[this._v("(可以把流想象成水在水管中流动的过程，想象成商品快递运送的过程。cin和cout就是 "),r("strong",[this._v("执行")]),this._v(" 流这个过程的人)")])])},function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ul",[_("li",[_("p",[t._v("2、流 负责 "),_("strong",[t._v("操作")]),t._v(" 缓冲区，输入输出流是 "),_("strong",[t._v("操作")]),t._v(" 的 "),_("strong",[t._v("实现")])]),t._v(" "),_("ul",[_("li",[t._v("对于输入，cin负责把输入缓冲区中的内容传递给程序；")]),t._v(" "),_("li",[t._v("对于输出，cout负责把输出缓冲区中的内容传递给屏幕。")]),t._v(" "),_("li",[_("em",[t._v("(cin和cout把缓冲区的数据变成流，然后 "),_("strong",[t._v("搬运")]),t._v(" 到相应的目的地。cin和cout就是个 "),_("strong",[t._v("搬运工")]),t._v(" ， "),_("strong",[t._v("搬运的过程")]),t._v(" 就是流)")])])])]),t._v(" "),_("li",[_("p",[t._v("3、"),_("strong",[t._v("程序")]),t._v(" 和 "),_("strong",[t._v("流源")]),t._v(" 或 "),_("strong",[t._v("流目标")]),t._v(" 之间的桥梁")]),t._v(" "),_("ul",[_("li",[t._v("使得C++程序可以以 "),_("strong",[t._v("相同的方式")]),t._v(" 对待来自 "),_("strong",[t._v("键盘")]),t._v(" 的输入和来自 "),_("strong",[t._v("文件")]),t._v(" 的输入")]),t._v(" "),_("li",[t._v("C++程序只检查 "),_("strong",[t._v("字节流")]),t._v(" ，而不需要知道字节来自何方")]),t._v(" "),_("li",[t._v("C++程序处理输出的方式将独立于其去向")])])]),t._v(" "),_("li",[_("p",[t._v("4、输入流需要两个连接，每端各一个")])]),t._v(" "),_("li",[_("p",[t._v("文件端连接 提供了流的来源")]),t._v(" "),_("ul",[_("li",[t._v("程序端连接 将流的流出部分转储到程序中")]),t._v(" "),_("li",[t._v("(文件端连接可以是文件，也可以是设备)")]),t._v(" "),_("li",[t._v("对输出的管理包括将 "),_("strong",[t._v("输出流")]),t._v(" 连接到 "),_("strong",[t._v("程序")]),t._v(" 以及将 "),_("strong",[t._v("输出目标")]),t._v(" 与 "),_("strong",[t._v("流")]),t._v(" 关联起来")])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h4",{attrs:{id:"（2）缓冲区的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（2）缓冲区的概念"}},[this._v("#")]),this._v(" （2）缓冲区的概念")])},function(){var t=this.$createElement,r=this._self._c||t;return r("ul",[r("li",[this._v("1、"),r("strong",[this._v("标准库")]),this._v(" 提供缓冲是为了减少对read和write的调用(能更高效地处理输入和输出)")]),this._v(" "),r("li",[this._v("2、用作中介的内存块，将信息从设备传输到程序或从程序传输给设备的 "),r("strong",[this._v("临时存储工具")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h4",{attrs:{id:"（3）其他的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（3）其他的"}},[this._v("#")]),this._v(" （3）其他的")])},function(){var t=this.$createElement,r=this._self._c||t;return r("ul",[r("li",[this._v("无缓存区，当你输出的时候，马上发送到显示器输出。")]),this._v(" "),r("li",[this._v("有缓存区的话，要等你刷星一会才会输出")])])}],!1,null,null,null);r.default=s.exports}}]);