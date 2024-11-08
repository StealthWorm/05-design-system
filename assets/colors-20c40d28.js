import{j as d}from"./jsx-runtime-d9e0c264.js";import{u as R}from"./index-37a31842.js";import{ae as $}from"./index-a3e05396.js";import{c as q}from"./index-e8fdd7b2.js";import"./index-ba6d2dec.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-e426d4cc.js";import"../sb-preview/runtime.js";import"./index-2be37287.js";import"./index-9a8a1727.js";import"./index-1b441bc2.js";import"./index-14d73241.js";import"./index-356e4a49.js";function T(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function b(r,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},b(r,e)}function E(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,b(r,e)}function x(r){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},x(r)}function z(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function A(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h(r,e,n){return A()?h=Reflect.construct.bind():h=function(a,f,o){var i=[null];i.push.apply(i,f);var l=Function.bind.apply(a,i),s=new l;return o&&b(s,o.prototype),s},h.apply(null,arguments)}function k(r){var e=typeof Map=="function"?new Map:void 0;return k=function(t){if(t===null||!z(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return h(t,arguments,x(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b(a,t)},k(r)}var m=function(r){E(e,r);function e(n){var t;return t=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,T(t)}return e}(k(Error));function v(r){return Math.round(r*255)}function N(r,e,n){return v(r)+","+v(e)+","+v(n)}function F(r,e,n,t){if(t===void 0&&(t=N),e===0)return t(n,n,n);var a=(r%360+360)%360/60,f=(1-Math.abs(2*n-1))*e,o=f*(1-Math.abs(a%2-1)),i=0,l=0,s=0;a>=0&&a<1?(i=f,l=o):a>=1&&a<2?(i=o,l=f):a>=2&&a<3?(l=f,s=o):a>=3&&a<4?(l=o,s=f):a>=4&&a<5?(i=o,s=f):a>=5&&a<6&&(i=f,s=o);var u=n-f/2,p=i+u,c=l+u,y=s+u;return t(p,c,y)}var j={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function H(r){if(typeof r!="string")return r;var e=r.toLowerCase();return j[e]?"#"+j[e]:r}var L=/^#[a-fA-F0-9]{6}$/,B=/^#[a-fA-F0-9]{8}$/,D=/^#[a-fA-F0-9]{3}$/,S=/^#[a-fA-F0-9]{4}$/,w=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,X=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,C=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,G=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function U(r){if(typeof r!="string")throw new m(3);var e=H(r);if(e.match(L))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(B)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(D))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(S)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var a=w.exec(e);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var f=X.exec(e.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var o=C.exec(e);if(o){var i=parseInt(""+o[1],10),l=parseInt(""+o[2],10)/100,s=parseInt(""+o[3],10)/100,u="rgb("+F(i,l,s)+")",p=w.exec(u);if(!p)throw new m(4,e,u);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10)}}var c=G.exec(e.substring(0,50));if(c){var y=parseInt(""+c[1],10),P=parseInt(""+c[2],10)/100,M=parseInt(""+c[3],10)/100,I="rgb("+F(y,P,M)+")",g=w.exec(I);if(!g)throw new m(4,e,I);return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new m(5)}function O(r){if(r==="transparent")return 0;var e=U(r),n=Object.keys(e).map(function(o){var i=e[o]/255;return i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}),t=n[0],a=n[1],f=n[2];return parseFloat((.2126*t+.7152*a+.0722*f).toFixed(3))}function W(r,e){var n=O(r),t=O(e);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}function J(){return Object.entries(q).map(([r,e])=>d.jsx("div",{style:{backgroundColor:e,padding:"2rem"},children:d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:W(e,"#FFF")<3.5?"#000":"#FFF"},children:[d.jsxs("strong",{children:["$",r]}),d.jsx("span",{children:e})]})},r))}function _(r){const e={h1:"h1",p:"p",...R(),...r.components};return d.jsxs(d.Fragment,{children:[d.jsx($,{title:"Tokens/Colors"}),`
`,d.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,d.jsx(e.p,{children:"Essas são as cores utilizadas no Ignite UI."}),`
`,d.jsx(J,{})]})}function de(r={}){const{wrapper:e}={...R(),...r.components};return e?d.jsx(e,{...r,children:d.jsx(_,{...r})}):_(r)}export{de as default};