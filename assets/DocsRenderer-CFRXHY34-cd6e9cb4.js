import{_ as p}from"./iframe-e426d4cc.js";import{R as e,r as c}from"./index-ba6d2dec.js";import{ag as h,ah as l,ai as u,aj as E}from"./index-a3e05396.js";import{renderElement as d,unmountElement as x}from"./react-18-692d6f01.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-2be37287.js";import"./jsx-runtime-d9e0c264.js";import"./index-9a8a1727.js";import"./index-1b441bc2.js";import"./index-14d73241.js";import"./index-356e4a49.js";var _={code:h,a:l,...u},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},T=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=E;return new Promise((m,i)=>{p(()=>import("./index-2ae20d81.js"),["assets/index-2ae20d81.js","assets/index-37a31842.js","assets/index-ba6d2dec.js","assets/_commonjsHelpers-725317a4.js"]).then(({MDXProvider:a})=>d(e.createElement(D,{showException:i,key:Math.random()},e.createElement(a,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{x(t)}}};export{T as DocsRenderer,_ as defaultComponents};