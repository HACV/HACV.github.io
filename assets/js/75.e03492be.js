(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{252:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),e("blockquote",[e("p",[t._v("GitHub上的"),e("a",{attrs:{href:"https://github.com/skywind3000/awesome-cheatsheets/blob/master/tools/gdb.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("gdb速查表"),e("OutboundLink")],1)])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("问，要是有多个子进程，怎么办？？？\n可以设置断点，条件断点")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("压力测试程序有很多种实现方式，比如IO复用方式，多线程、多进程并发编程方式，以及这些方式的结合使用。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),e("ul",[e("li",[e("p",[t._v("开源链接："),e("a",{attrs:{href:"https://github.com/svn2github/valgrind",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/svn2github/valgrind"),e("OutboundLink")],1)])]),t._v(" "),t._m(29)]),t._v(" "),t._m(30),t._v(" "),e("ul",[e("li",[t._v("开源链接："),e("a",{attrs:{href:"https://github.com/aclements/mtrace",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aclements/mtrace"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("『可用于，检查“内存泄漏”』")])]),t._v(" "),t._m(31),t._v(" "),t._m(32)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"大型工程tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大型工程tools"}},[this._v("#")]),this._v(" 大型工程Tools")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一、makefile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、makefile"}},[this._v("#")]),this._v(" 一、makefile")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("陈皓，《跟我一起写Makefile》")]),this._v(" "),s("li",[this._v("Makefile")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"二、gdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、gdb"}},[this._v("#")]),this._v(" 二、gdb")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("设置断点 b "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n打印变量 p num\n查看断点：info\n下面是一些查看函数调用栈信息的GDB命令：\nbacktrace\nbt\n打印当前的函数调用栈的所有信息。如：\n在遇到段错误时，输入bt命令，即可跟踪错误，非常好用，方便记忆。可以叫变态。\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("因为多进程和多线程调试，是后台程序调试不可避免而又比较困难的部分。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）gdb多进程调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）gdb多进程调试"}},[this._v("#")]),this._v(" （1）gdb多进程调试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("如果一个进程通过fork系统调用创建了子进程，『gdb 会继续调试原来的进程，子进程则正常运行』。那么该如何调试子进程呢?常用的方法有如下两种。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1、使用attach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用attach"}},[this._v("#")]),this._v(" 1、使用attach")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("比如，『子进程从本质上说也是一个进程』，因此我们可以用通用的gdb调试方法来调试它。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" 服务器程序名\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("我们可以先运行服务器，然后找到"),s("strong",[this._v("目标子进程的PID")]),this._v("，再将其附加（attach）到gdb调试器上。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[this._v("attach "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("4183")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_2-使用调试器选项follow-fork-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用调试器选项follow-fork-mode"}},[this._v("#")]),this._v(" 2.使用调试器选项follow-fork-mode")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[this._v("set follow"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("-")]),this._v("fork"),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("-")]),this._v("mode mode\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("其中，mode的可选值是parent 和 child，分别表示调试父进程和子进程。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意，和平常不一样了，需要指定\n跟踪父进程还是子进程？？\n如果不设置，则默认跟踪父进程\n"),s("code",[this._v("使用gdb调试的时候，gdb只能跟踪一个进程。")]),this._v("\n可以在fork函数调用之前，通过指令设置gdb调试工具跟踪父进程或者是跟踪子进程。默认跟踪父进程。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("set follow-fork-mode child")]),this._v("命令设置gdb在fork之后跟踪子进程。\n"),s("code",[this._v("set follow-fork-mode parent")]),this._v(" 设置跟踪父进程。\n注意，一定要在fork函数调用之前设置才有效。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）多线程调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）多线程调试"}},[this._v("#")]),this._v(" （2）多线程调试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("关于调试进程池和线程池程序的一个不错的方法，是先将池中的进程个数或线程个数减少至1，以观察程序的逻辑是否正确﹔然后逐步增加进程或线程的数量，以调试进程或线程的『同步』是否正确。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("gdb有一组命令可辅助多线程程序的调试。下面我们仅列举其中常用的一些"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\ninfo threads，显示当前可调试的所有线程。\n    gdb会为每个线程分配一个ID，我们可以使用这个ID来操作对应的线程。ID前面有“"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("”号的线程是当前被调试的线程。\nthread ID，调试目标ID指定的线程。\nset scheduler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("locking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" off "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" on "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" step "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n    调试多线程程序时，默认除了被调试的线程在执行外，其他线程也在继续执行，但有的时候我们希望只让被调试的线程运行。这可以通过这个命令来实现。该命令设置scheduler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("locking 的值"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" off表示不锁定任何线程，即所有线程都可以继续执行，这是默认值"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" on表示只有当前被调试的线程会继续执行﹔step表示在单步执行的时候，只有当前线程会执行。\n        \n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("参考：Linux高性能服务器编程，游双")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"压力测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压力测试"}},[this._v("#")]),this._v(" 压力测试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不过，"),s("strong",[this._v("单纯的IO复用方式的施压程度是最高")]),this._v("的，因为线程和进程的调度本身也是要占用一定CPU时间的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"三、strace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、strace"}},[this._v("#")]),this._v(" 三、strace")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"四、调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、调试工具"}},[this._v("#")]),this._v(" 四、调试工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（1）valgrind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）valgrind"}},[this._v("#")]),this._v(" （1）Valgrind")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("1款内存分析工具，是『1套』Linux下的开放源代码的仿真调试工具的集合。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("『可用于，检查“内存泄漏”』")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"（2）mtrace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）mtrace"}},[this._v("#")]),this._v(" （2）mtrace")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("公众号，编程珠玑，GDB调试指南")])])}],!1,null,null,null);s.default=r.exports}}]);