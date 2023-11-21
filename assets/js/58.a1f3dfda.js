(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{475:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-中-v-show-和-v-if-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中-v-show-和-v-if-的区别"}},[t._v("#")]),t._v(" Vue 中 v-show 和 v-if 的区别")]),t._v(" "),s("ul",[s("li",[t._v("控制手段不同")]),t._v(" "),s("li",[t._v("编译过程不同")]),t._v(" "),s("li",[t._v("编译条件不同")])]),t._v(" "),s("h2",{attrs:{id:"控制手段不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制手段不同"}},[t._v("#")]),t._v(" 控制手段不同")]),t._v(" "),s("p",[s("code",[t._v("v-show")]),t._v(" 隐藏是为该元素添加 "),s("code",[t._v("css--display: none")]),t._v("，"),s("code",[t._v("dom")]),t._v(" 元素依旧还在。"),s("code",[t._v("v-if")]),t._v(" 显示隐藏是将 "),s("code",[t._v("dom")]),t._v(" 元素整个添加或删除。")]),t._v(" "),s("h2",{attrs:{id:"编译过程不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译过程不同"}},[t._v("#")]),t._v(" 编译过程不同")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v(" 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；"),s("code",[t._v("v-show")]),t._v(" 只是简单的基于 "),s("code",[t._v("css")]),t._v(" 切换")]),t._v(" "),s("h2",{attrs:{id:"编译条件不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译条件不同"}},[t._v("#")]),t._v(" 编译条件不同")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v(" 是真正的条件渲染，他会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为真时，才会进行渲染操作；当渲染条件为假时，不会进行渲染操作。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("v-show")]),t._v(" 由 "),s("code",[t._v("false")]),t._v(" 变为 "),s("code",[t._v("true")]),t._v(" 的时候不会触发组件的生命周期")]),t._v(" "),s("li",[s("code",[t._v("v-if")]),t._v(" 由 "),s("code",[t._v("false")]),t._v(" 变为 "),s("code",[t._v("true")]),t._v(" 的时候，触发组件的 "),s("code",[t._v("beforeCreate")]),t._v("、"),s("code",[t._v("create")]),t._v("、"),s("code",[t._v("beforeMount")]),t._v("、"),s("code",[t._v("mounted")]),t._v(" 钩子，由 "),s("code",[t._v("true")]),t._v(" 变为 "),s("code",[t._v("false")]),t._v(" 时触发组件的 "),s("code",[t._v("beforeDestroy")]),t._v("、"),s("code",[t._v("destroyed")]),t._v(" 方法")])]),t._v(" "),s("p",[t._v("性能消耗："),s("code",[t._v("v-if")]),t._v(" 有更高的切换消耗；"),s("code",[t._v("v-show")]),t._v(" 有更高的初始渲染消耗")]),t._v(" "),s("h2",{attrs:{id:"v-show-与-v-if-原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-与-v-if-原理分析"}},[t._v("#")]),t._v(" v-show 与 v-if 原理分析")]),t._v(" "),s("h3",{attrs:{id:"v-show-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-原理"}},[t._v("#")]),t._v(" v-show 原理")]),t._v(" "),s("p",[t._v("不管初始条件是什么，元素总会被渲染\n"),s("code",[t._v("vue")]),t._v(" 中实现 "),s("code",[t._v("v-show")]),t._v("，代码很好理解，有 "),s("code",[t._v("transition")]),t._v(" 就执行 "),s("code",[t._v("transition")]),t._v("，没有就直接设置 "),s("code",[t._v("display")]),t._v(" 属性")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vShow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ObjectDirective"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VShowElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在元素挂载之前被调用")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存元素初始的显示样式，以便后续恢复")]),t._v("\n\t\tel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果有过渡效果且当前值为真，则调用过渡的beforeEnter方法")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ttransition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEnter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则直接设置显示样式")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在元素挂载之后被调用")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果有过渡效果且当前值为真，则调用过渡的enter方法")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ttransition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在元素更新时被调用")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在元素卸载之前被调用")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeUnmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"v-if-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-原理"}},[t._v("#")]),t._v(" v-if 原理")]),t._v(" "),s("p",[t._v("返回一个 "),s("code",[t._v("node")]),t._v(" 节点，"),s("code",[t._v("render")]),t._v(" 函数通过表达式的值来决定是否生成 "),s("code",[t._v("DOM")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transformIf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStructuralDirectiveTransform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^(if|else|else-if)$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processIf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("isRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codegenNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCodegenNodeForBranch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" IfConditionalExpression\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parentCondition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParentCondition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codegenNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t\tparentCondition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCodegenNodeForBranch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("branches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"v-show-与-v-if-的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-与-v-if-的使用场景"}},[t._v("#")]),t._v(" v-show 与 v-if 的使用场景")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v(" 与 "),s("code",[t._v("v-show")]),t._v(" 都能控制 "),s("code",[t._v("dom")]),t._v(" 元素在页面的显示，"),s("code",[t._v("v-if")]),t._v(" 相比 "),s("code",[t._v("v-show")]),t._v(" 的开销更大（直接操作 "),s("code",[t._v("dom")]),t._v(" 节点增加与删除）")]),t._v(" "),s("ul",[s("li",[t._v("如果需要非常频繁地切换，则使用 "),s("code",[t._v("v-show")]),t._v(" 较好")]),t._v(" "),s("li",[t._v("如果在运行时条件很少改变，则使用 "),s("code",[t._v("v-if")]),t._v(" 较好")])])])}),[],!1,null,null,null);s.default=e.exports}}]);