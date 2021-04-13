(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{511:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[t._v("#")]),t._v(" vite")]),t._v(" "),a("h3",{attrs:{id:"vite是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite是什么"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite是什么"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("vite 法语(发音 "),a("code",[t._v("/vit/")]),t._v(") ，轻量，轻快的意思")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("是一个全新的"),a("strong",[t._v("开发构建工具")]),t._v("，能够显著提升前端开发体验")]),t._v(" "),a("li",[t._v("对 TypeScript、JSX、CSS 等支持开箱即用")]),t._v(" "),a("li",[t._v("在开发环境中，相当于一个静态的服务器")]),t._v(" "),a("li",[t._v("基于原生ES模块，按需编译，快！")])]),t._v(" "),a("h3",{attrs:{id:"为什么会出现-vite？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现-vite？"}},[t._v("#")]),t._v(" 为什么会出现 "),a("code",[t._v("Vite")]),t._v("？")]),t._v(" "),a("p",[t._v("在过去的 "),a("code",[t._v("Webpack")]),t._v("、"),a("code",[t._v("Rollup")]),t._v(" 等构建工具的时代，在本地开发调试的时候，会提前把你的模块先打包成浏览器可读取的 "),a("code",[t._v("js bundle")]),t._v("，所以当项目越来越大时，启动越来越慢，热更新也越来越慢")]),t._v(" "),a("p",[t._v("随着现代浏览器厂商的不断升级，现在"),a("a",{attrs:{href:"https://caniuse.com/es6-module-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("大部分浏览器"),a("OutboundLink")],1),t._v("开始原生支持ES模块，尤大正是利用了这点，巧妙的解决了慢速启动这个问题")]),t._v(" "),a("h3",{attrs:{id:"es-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-模块"}},[t._v("#")]),t._v(" ES 模块")]),t._v(" "),a("p",[t._v("现代浏览器原生支持的"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("模块功能"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./a.js'")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("当声明一个 "),a("code",[t._v("script")]),t._v(" 标签类型为 "),a("code",[t._v("modules")]),t._v(" 时，浏览器将对其内部的 "),a("code",[t._v("import")]),t._v(" 引用发起 HTTP 请求获取模块内容")]),t._v(" "),a("p",[t._v("ESM 标准中 import的 必须是一个路径，相对/绝对路径，否则就会报错")]),t._v(" "),a("h3",{attrs:{id:"基础体验-vs-vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础体验-vs-vue-cli"}},[t._v("#")]),t._v(" 基础体验 vs "),a("code",[t._v("vue-cli")])]),t._v(" "),a("p",[t._v("按照官网手册，先跑起来看看")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node.js版本 > 12.0.0")]),t._v("\nnpm init @vitejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("app\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vitejs/plugin-vue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.1.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/compiler-sfc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.0.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vite"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.0.5"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("开发依赖非常简单，只有 vite 和 @vue/compiler-sfc。vite 就是我们今天要介绍的主角，而 @vue/compiler-sfc 就是用来编译我们项目中 .vue 结尾的单文件组件（SFC），它取代的就是 Vue.js 2.x 时使用的 vue-template-compiler。")]),t._v(" "),a("h3",{attrs:{id:"速度的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#速度的对比"}},[t._v("#")]),t._v(" 速度的对比")]),t._v(" "),a("p",[t._v("当我们执行 vite serve 的时候，你会发现响应速度非常快，几乎就是秒开")]),t._v(" "),a("p",[t._v("对比使用 "),a("code",[t._v("vue-cli-service")]),t._v("（内部还是 Webpack）启动开发服务器，"),a("strong",[t._v("快5倍以上")]),t._v("，随着项目越大，差距越大")]),t._v(" "),a("p",[t._v("因为"),a("code",[t._v("Webpack Dev Server")]),t._v(" 在启动时，会将所有模块提前编译、打包进 bundle 里，随着项目越来越大打包后的 bundle 也越来越大，打包的速度自然也就越来越慢。\n"),a("img",{attrs:{src:"https://cn.vitejs.dev/assets/bundler.37740380.png",alt:"alt 属性文本"}}),t._v("\n而 Vite 则完全不同，利用现代浏览器原生支持 ESM 特性，省略了对模块的打包。对于需要编译的文件，Vite 采用的是另外一种模式：即时编译。也就是说，只有具体去请求某个文件时才会编译这个文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cn.vitejs.dev/assets/esm.3070012d.png",alt:"alt 属性文本"}})]),t._v(" "),a("p",[t._v("所以，这种「即时编译」的好处主要体现在：按需编译。")]),t._v(" "),a("p",[t._v("热更新速度演示")]),t._v(" "),a("h3",{attrs:{id:"页面的引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面的引入"}},[t._v("#")]),t._v(" 页面的引入")]),t._v(" "),a("p",[t._v("首先，main.ts里的源码是这样的")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("但是我们在浏览器中看到的是这样的")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/node_modules/.vite/vue.js?v=7affef7d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/src/App.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其次APP.vue中的源码也和浏览器中展示的大不相同")]),t._v(" "),a("h3",{attrs:{id:"依赖预编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖预编译"}},[t._v("#")]),t._v(" 依赖预编译")]),t._v(" "),a("p",[t._v("Vite 2.0 在启动开发服务器之前，会先用 "),a("a",{attrs:{href:"(https://github.com/evanw/esbuild)"}},[a("code",[t._v("esbuild")])]),t._v("把检测到的依赖预先构建一遍")]),t._v(" "),a("ul",[a("li",[t._v("目的1：将作为CommonJS发布的依赖包转换成为ESM")]),t._v(" "),a("li",[t._v("目的2：将内部有很多依赖关系转换为单个模块，并强制缓存下来，提升性能")])]),t._v(" "),a("div",{staticClass:"language-tpyescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const listen = httpServer.listen.bind(httpServer)\nhttpServer.listen = (async (port: number, ...args: any[]) => {\n  try {\n    await container.buildStart({})\n    // 这里会进行依赖的预构建\n    await runOptimize()\n  } catch (e) {\n    httpServer.emit('error', e)\n    return\n  }\n  return listen(port, ...args)\n}) as any\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/vitejs/vite/blob/main/packages/vite/src/node/optimizer/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github optimizer"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"vite的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite的实现原理"}},[t._v("#")]),t._v(" vite的实现原理")]),t._v(" "),a("p",[t._v("Vite 的基本实现原理，就是启动一个服务器拦截浏览器请求ES Module的请求。通过 path 找到目录下对应的文件做一定的处理最终以 ES Modules 格式返回给客户端")]),t._v(" "),a("p",[a("strong",[t._v("1. 请求拦截")]),t._v(" "),a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3157aa930e1f44eaa501412b9f4ea576~tplv-k3u1fbpfcp-zoom-1.image",alt:"alt 属性文本"}}),t._v(" "),a("strong",[t._v("2. "),a("code",[t._v("node_modules")]),t._v(" 模块的处理")]),t._v("\n浏览器发送 path 为 /node_modules/:id 的对应请求后。会被 Vite 拦截，最终找到对应的模块代码进行返回。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moduleRE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\/node_module\\//")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugin for resolving /@modules/:id requests.")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("moduleRE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path maybe contain encode chars")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moduleRE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("serve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      moduleIdToFileMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      moduleFileToIdMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(") ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" -> ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDebugPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// alias ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" importerFilePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" importer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" resolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestToFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("importer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" root\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nodeModulePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveNodeModuleFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("importerFilePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodeModulePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeModulePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n")])])]),a("p",[a("strong",[t._v("3. "),a("code",[t._v(".vue")]),t._v("文件的处理")])]),t._v(" "),a("p",[t._v("把.vue文件在服务端解析成了一个对象，并把render函数挂载在这个对象上，(模板编译成了组件对象的render函数，render函数最终渲染结果其实就是VDom)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" templateRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" publicPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("?type=template")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\nimport { render as __render } from ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      templateRequest\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n__script.render = __render")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n__script.__hmrId = ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n__script.__file = ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\nexport default __script")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])])]),a("h3",{attrs:{id:"hmr-hot-module-reload-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmr-hot-module-reload-原理"}},[t._v("#")]),t._v(" HMR(Hot Module Reload)原理")]),t._v(" "),a("p",[t._v("在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块失效即可，从而使HMR更新始终快速，无论应用的大小。")]),t._v(" "),a("h3",{attrs:{id:"vite-的局限和扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite-的局限和扩展"}},[t._v("#")]),t._v(" vite 的局限和扩展")]),t._v(" "),a("ol",[a("li",[t._v("vite默认只支持原生支持ESM的现代浏览器，不兼容IE浏览器，可以通过官方的"),a("a",{attrs:{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-legacy",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vite/plugin-legacy"),a("OutboundLink")],1),t._v("来支持旧浏览器。")]),t._v(" "),a("li",[t._v("vite默认不支持vue2.x，使用vite写的插件再去接入历史项目可能有比较多的坑")])]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("核心功能：ESM + Static Server + Compile + HMR")])]),t._v(" "),a("li",[a("p",[t._v("核心思路：")]),t._v(" "),a("p",[t._v("a. 将当前项目目录作为静态文件服务器的根目录\nb. 拦截部分文件请求\nc. 处理代码中 import node_modules 中的模块\nd. 处理 vue 单文件组件（SFC）的编译")])])]),t._v(" "),a("h3",{attrs:{id:"参考连接："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考连接："}},[t._v("#")]),t._v(" 参考连接：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cn.vitejs.dev/guide/features.html#typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite github仓库"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6881078539756503047",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite 2原理"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);