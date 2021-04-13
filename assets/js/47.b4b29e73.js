(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{481:function(t,s,e){"use strict";e.r(s);var a=e(6),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"联合类型-union-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合类型-union-types"}},[t._v("#")]),t._v(" 联合类型 (Union Types)")]),t._v(" "),e("p",[t._v("表示取值可以是多种类型中的一种")]),t._v(" "),e("h2",{attrs:{id:"举个例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[t._v("#")]),t._v(" 举个例子")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\nmyNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one'")]),t._v("\nmyNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\nmyNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 報錯：error TS2322: Type 'boolean' is not assignable to type 'string | number'.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   Type 'boolean' is not assignable to type 'number'.")]),t._v("\n")])])]),e("p",[t._v("联合类型使用 "),e("code",[t._v("|")]),t._v(" 分隔每个类型，允许 myNumber 的类型是 string 或者 number，但是不能是其他类型。")]),t._v(" "),e("h2",{attrs:{id:"访问联合类型的属性和方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问联合类型的属性和方法"}},[t._v("#")]),t._v(" 访问联合类型的属性和方法")]),t._v(" "),e("p",[t._v("当 "),e("code",[t._v("TypeScript")]),t._v(" 不确定联合类型中的变量到底是哪个类型时，我们"),e("strong",[t._v("只能访问联合类型中并集的属性和方法")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\nmyNumber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// toString属于string和number的共有属性，不会报错")]),t._v("\nmyNumber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// number没有length的方法，会报错 error TS2339: Property 'length' does not exist on type 'number'.")]),t._v("\n")])])]),e("p",[t._v("联合类型的变量在被赋值的时候，会根据类型推论的规则，推断出一个类型。")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\nmyNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'one'")]),t._v("\nmyName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推断是string，length为3")]),t._v("\n\nmyNumber "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nmyNumber"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n")])])]),e("p",[t._v("以上代码可正常执行，第一个 "),e("code",[t._v("myNumber")]),t._v(" 被推断是 "),e("code",[t._v("string")]),t._v(" 类型，第二个"),e("code",[t._v("myNumber")]),t._v(" 被推断是 "),e("code",[t._v("number")]),t._v(" 类型。")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://ts.xcatliu.com/basics/union-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 入门教程 - 联合类型"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);