(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{844:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/myportfolio",function(){return c(9250)}])},8598:function(e,b,a){"use strict";a.d(b,{Et:function(){return l},P4:function(){return k},Pg:function(){return m}});var f=a(5893),c=a(1664),g=a.n(c),d=a(5675),h=a.n(d),i=a(8527),j=a(917),k=function(a){var c=a.children,d=a.href,b=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:b,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,f.jsx)(i.AB,{href:d,target:"_blank",children:(0,f.jsx)(i.xv,{mt:2,children:b})}),(0,f.jsx)(i.xv,{fontSize:14,children:c})]})})},l=function(a){var d=a.children,b=a.id,c=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsx)(g(),{href:"/projects/".concat(b),passHref:!0,scroll:!1,children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:c,className:"grid-item-thumbnail",placeholder:"blur"}),(0,f.jsx)(i.AB,{href:"/projects/".concat(b),children:(0,f.jsx)(i.xv,{mt:2,fontSize:20,children:c})}),(0,f.jsx)(i.xv,{fontSize:14,children:d})]})})})},m=function(){return(0,f.jsx)(j.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},951:function(d,b,a){"use strict";var e=a(5893),f=a(8816),c=a(9008),g=a.n(c),h=a(8598),i={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(b){var d=b.children,c=b.title,a="".concat(c," - Marius Cristea");return(0,e.jsx)(f.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:i,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,e.jsxs)(e.Fragment,{children:[c&&(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:a}),(0,e.jsx)("meta",{name:"twitter:title",content:a}),(0,e.jsx)("meta",{property:"og:title",content:a})]}),d,(0,e.jsx)(h.Pg,{})]})})}},5930:function(f,a,b){"use strict";var c=b(5934);function d(){var a,b,c=(a=["\n  text-align: justify;\n  text-indent: 1em;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var e=c.Z.p(d());a.Z=e},3384:function(h,b,a){"use strict";a.d(b,{h_:function(){return u},Dx:function(){return s},WZ:function(){return t}});var i=a(5893),c=a(1664),j=a.n(c),d=a(6052),e=a(5031),f=a(7294),k=a(4697);function l(){return(l=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function m(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var n=["htmlWidth","htmlHeight","alt"],o=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],p=f.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,g=m(a,n);return f.createElement("img",l({width:c,height:d,ref:b,alt:e},g))}),g=(0,d.Gp)(function(a,B){var b,j,c,n,q,r,s,t,g,h,i,C,D,u,E,v=a.fallbackSrc,w=a.fallback,F=a.src,G=a.srcSet,H=a.align,I=a.fit,x=a.loading,J=a.ignoreFallback,K=a.crossOrigin,y=m(a,o),z=null!=x||J|| void 0===v&& void 0===w,L=(j=(b=l({},a,{ignoreFallback:z})).loading,c=b.src,n=b.srcSet,q=b.onLoad,r=b.onError,s=b.crossOrigin,t=b.sizes,g=b.ignoreFallback,h=(0,f.useState)("pending"),i=h[0],C=h[1],(0,f.useEffect)(function(){C(c?"loading":"pending")},[c]),D=(0,f.useRef)(),u=(0,f.useCallback)(function(){if(c){E();var a=new Image;a.src=c,s&&(a.crossOrigin=s),n&&(a.srcset=n),t&&(a.sizes=t),j&&(a.loading=j),a.onload=function(a){E(),C("loaded"),null==q||q(a)},a.onerror=function(a){E(),C("failed"),null==r||r(a)},D.current=a}},[c,s,n,t,q,r,j]),E=function(){D.current&&(D.current.onload=null,D.current.onerror=null,D.current=null)},(0,k.a)(function(){if(!g)return"loading"===i&&u(),function(){E()}},[i,u,g]),g?"loaded":i),A=l({ref:B,objectFit:I,objectPosition:H},z?y:(0,e.CE)(y,["onError","onLoad"]));return"loaded"!==L?w||f.createElement(d.m$.img,l({as:p,className:"chakra-image__placeholder",src:v},A)):f.createElement(d.m$.img,l({as:p,src:F,srcSet:G,crossOrigin:K,loading:x,className:"chakra-image"},A))});e.Ts&&(g.displayName="Image");var q=a(8527),r=a(9876),s=function(a){var b=a.children;return(0,i.jsxs)(q.xu,{children:[(0,i.jsx)(j(),{href:"/projects",passHref:!0,children:(0,i.jsx)(q.rU,{children:"Projects"})}),(0,i.jsxs)("span",{children:[" ",(0,i.jsx)(r.XC,{})," "]}),(0,i.jsx)(q.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},t=function(a){var b=a.src,c=a.alt;return(0,i.jsx)(g,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},u=function(a){var b=a.children;return(0,i.jsx)(q.Ct,{colorScheme:"green",mr:2,children:b})}},9250:function(c,b,a){"use strict";a.r(b),a.d(b,{getStaticProp:function(){return j.getStaticProp}});var d=a(5893),e=a(8527),f=a(951),g=a(9876),h=a(3384),i=a(5930),j=a(7350);b.default=function(){return(0,d.jsx)(f.Z,{title:"My Portfolio",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(h.Dx,{children:["My Portfolio ",(0,d.jsx)(e.Ct,{children:"2022"})]}),(0,d.jsx)(i.Z,{children:"This is my presentation webpage made with JavaScript/Next.js/Three.js/React/ Chakra UI, it was a fun experience, not to mention that my game dev study helped me understand better the Three.js library."}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Website"}),(0,d.jsx)("span",{children:(0,d.jsxs)(e.rU,{href:"https://mcdev.ro",target:"_blank",children:["https://mcdev.ro ",(0,d.jsx)(g.h0,{mx:"2px"})]})})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Stack"}),(0,d.jsx)("span",{children:"Next.js / JavaScript / React / Three.js"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Github"}),(0,d.jsx)("span",{children:(0,d.jsxs)(e.rU,{href:"https://mcdev.ro",target:"_blank",children:["View Source ",(0,d.jsx)(g.h0,{mx:"2px"})]})})]})]}),(0,d.jsx)(h.WZ,{src:"/images/projects/portfolio03.png",alt:"Website"}),(0,d.jsx)(h.WZ,{src:"/images/projects/portfolio.png",alt:"Margelo"}),(0,d.jsx)(h.WZ,{src:"/images/projects/portfolio01.png",alt:"Margelo"}),(0,d.jsx)(h.WZ,{src:"/images/projects/portfolio02.png",alt:"Margelo"})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=844)}),_N_E=a.O()}])