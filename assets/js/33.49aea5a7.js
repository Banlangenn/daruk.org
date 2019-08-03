(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{190:function(t,v,_){"use strict";_.r(v);var d=_(0),r=Object(d.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"目录约束规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录约束规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录约束规范")]),t._v(" "),_("p",[t._v("由于 Daruk 的 auto loader 特性，我们对目录是有一定的使用要求的，如果一个项目是可持续维护的，那么这个项目原则上一定是需要一定的目录约束和规范的。下面详细介绍一下，auto loader 的目录要求和如何修改约束配置。")]),t._v(" "),_("h2",{attrs:{id:"默认目录介绍和配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#默认目录介绍和配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 默认目录介绍和配置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("功能")]),t._v(" "),_("th",[t._v("配置项名")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必选")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("根目录")]),t._v(" "),_("td",[t._v("rootPath")]),t._v(" "),_("td",[t._v("undefined")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("定义启动目录，一般都传__dirname")])]),t._v(" "),_("tr",[_("td",[t._v("控制器目录")]),t._v(" "),_("td",[t._v("controllerPath")]),t._v(" "),_("td",[t._v("'controllers'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("可以自定义控制器的 router 目录")])]),t._v(" "),_("tr",[_("td",[t._v("服务模块目录")]),t._v(" "),_("td",[t._v("servicePath")]),t._v(" "),_("td",[t._v("'services'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("可以自定义的 service 目录,比如一个 proxy api 代理模块，比如查询 DB 的模块，比如 MVC 中的 model 和 data 层都可以在 service 目录中编写")])]),t._v(" "),_("tr",[_("td",[t._v("万能目录")]),t._v(" "),_("td",[t._v("gluePath")]),t._v(" "),_("td",[t._v("'glues'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("万能目录，和 service，controller 目录不同的是，他不能访问 ctx，更适合编写可单元测试的独立复用模块")])]),t._v(" "),_("tr",[_("td",[t._v("中间件目录")]),t._v(" "),_("td",[t._v("middlewares")]),t._v(" "),_("td",[t._v("'middlewares'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("中间件目录，会按照"),_("router-link",{attrs:{to:"/tutorial/DarukConfig.html"}},[t._v("daruk.config.ts")]),t._v("中的 middlewareOrder 来进行顺序加载")],1)]),t._v(" "),_("tr",[_("td",[t._v("工具集目录")]),t._v(" "),_("td",[t._v("utilPath")]),t._v(" "),_("td",[t._v("'utils'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("工具集目录，不能访问 ctx，适合编写独立可复用的工具函数,工具类")])]),t._v(" "),_("tr",[_("td",[t._v("定时器目录")]),t._v(" "),_("td",[t._v("timerPath")]),t._v(" "),_("td",[t._v("'timers'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("可以放置一些定时器任务，Daruk 提供了一个类 crontab 的辅助方法帮助你来控制你的定时任务")])]),t._v(" "),_("tr",[_("td",[t._v("配置项目录")]),t._v(" "),_("td",[t._v("configPath")]),t._v(" "),_("td",[t._v("'config'")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("放置项目中的一些通用配置项，方便管理获取")])]),t._v(" "),_("tr",[_("td",[t._v("daruk 配置文件")]),t._v(" "),_("td",[t._v("darukConfigPath")]),t._v(" "),_("td",[t._v("'daruk.config'(文件名)")]),t._v(" "),_("td",[t._v("✕")]),t._v(" "),_("td",[t._v("专门给 daruk 的设置的配置文件地址")])])])]),t._v(" "),_("p",[t._v("上面表格简单的列举了这些约定的默认配置值和功能，具体使用方法可以参见之后的具体教程。")])])},[],!1,null,null,null);v.default=r.exports}}]);