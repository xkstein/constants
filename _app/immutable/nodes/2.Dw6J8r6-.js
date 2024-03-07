import{s as ae,f as W,n as X,r as ne}from"../chunks/scheduler.ChWxnFRl.js";import{S as oe,i as ie,e as b,s as L,c as E,y as H,h as S,d as N,g as r,o as z,z as U,j as T,k as h,A as w,B as F,C as se,b as J,f as q,l as ue,D as Z}from"../chunks/index.mOKwVUqW.js";function K(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const M={"natural unit of action":{nickname:"hbar",values:{"J s":1054571817e-43,"eV s":6582119569e-25}},"vacuum electric permittivity":{nickname:"epsilon_0",values:{"F m^-1":88541878128e-22}},"Vacuum magnetic permeability":{nickname:"mu_0",values:{"N A^-2":125663706212e-17}},"Bohr radius":{nickname:"a_0",values:{m:529177210903e-22}},"electron mass":{nickname:"m_e",values:{kg:91093837015e-41,J:81871057769e-24,MeV:.51099895,u:.000548579909065}},"elementary charge":{nickname:"e_c",values:{C:1602176634e-28,"A J^-1":1519267447e6}},"speed of light in vacuum":{nickname:"c",values:{"m s^-1":299792458}}};function x(e,l,i){const s=e.slice();return s[8]=l[i][0],s[9]=l[i][1],s[10]=l,s[11]=i,s}function $(e,l,i){const s=e.slice();return s[12]=l[i],s}function ee(e){let l,i=e[12]+"",s;return{c(){l=b("option"),s=J(i),this.h()},l(o){l=E(o,"OPTION",{});var a=N(l);s=q(a,i),a.forEach(r),this.h()},h(){l.__value=e[12],U(l,l.__value)},m(o,a){T(o,l,a),h(l,s)},p:X,d(o){o&&r(l)}}}function te(e){let l,i,s,o,a,P=e[8]+"",j,I,d=e[9].nickname+"",O,g,v,k,p=le(e[9].values[e[2][e[8]].units],2)+"",A,y,m,C,B,G;function D(){e[4].call(s,e[8])}let c=K(Object.keys(e[9].values)),t=[];for(let n=0;n<c.length;n+=1)t[n]=ee($(e,c,n));function f(){e[5].call(m,e[8])}return{c(){l=b("div"),i=b("div"),s=b("input"),o=L(),a=b("label"),j=J(P),I=J(" ("),O=J(d),g=J(")"),v=L(),k=b("div"),A=J(p),y=L(),m=b("select");for(let n=0;n<t.length;n+=1)t[n].c();C=L(),this.h()},l(n){l=E(n,"DIV",{class:!0});var _=N(l);i=E(_,"DIV",{});var u=N(i);s=E(u,"INPUT",{type:!0}),o=S(u),a=E(u,"LABEL",{});var V=N(a);j=q(V,P),I=q(V," ("),O=q(V,d),g=q(V,")"),V.forEach(r),u.forEach(r),v=S(_),k=E(_,"DIV",{});var R=N(k);A=q(R,p),y=S(R),m=E(R,"SELECT",{});var Y=N(m);for(let Q=0;Q<t.length;Q+=1)t[Q].l(Y);Y.forEach(r),R.forEach(r),C=S(_),_.forEach(r),this.h()},h(){z(s,"type","checkbox"),e[2][e[8]].units===void 0&&W(f),z(l,"class","checkbox svelte-ycvfjp")},m(n,_){T(n,l,_),h(l,i),h(i,s),s.checked=e[2][e[8]].checked,h(i,o),h(i,a),h(a,j),h(a,I),h(a,O),h(a,g),h(l,v),h(l,k),h(k,A),h(k,y),h(k,m);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(m,null);w(m,e[2][e[8]].units,!0),h(l,C),B||(G=[F(s,"change",D),F(s,"change",e[3]),F(m,"change",f),F(m,"change",e[3])],B=!0)},p(n,_){if(e=n,_&4&&(s.checked=e[2][e[8]].checked),_&4&&p!==(p=le(e[9].values[e[2][e[8]].units],2)+"")&&ue(A,p),_&0){c=K(Object.keys(e[9].values));let u;for(u=0;u<c.length;u+=1){const V=$(e,c,u);t[u]?t[u].p(V,_):(t[u]=ee(V),t[u].c(),t[u].m(m,null))}for(;u<t.length;u+=1)t[u].d(1);t.length=c.length}_&4&&w(m,e[2][e[8]].units)},d(n){n&&r(l),se(t,n),B=!1,ne(G)}}}function ce(e){let l,i="Physical Constants",s,o,a,P="Choose your constants",j,I,d,O,g="desmos",v,k="python",p,A="mathematica",y,m,C,B,G,D=K(Object.entries(M)),c=[];for(let t=0;t<D.length;t+=1)c[t]=te(x(e,D,t));return{c(){l=b("h1"),l.textContent=i,s=L(),o=b("fieldset"),a=b("legend"),a.textContent=P,j=L();for(let t=0;t<c.length;t+=1)c[t].c();I=L(),d=b("select"),O=b("option"),O.textContent=g,v=b("option"),v.textContent=k,p=b("option"),p.textContent=A,y=L(),m=b("div"),C=b("pre"),this.h()},l(t){l=E(t,"H1",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-1g2vzas"&&(l.textContent=i),s=S(t),o=E(t,"FIELDSET",{});var f=N(o);a=E(f,"LEGEND",{"data-svelte-h":!0}),H(a)!=="svelte-qeyyll"&&(a.textContent=P),j=S(f);for(let u=0;u<c.length;u+=1)c[u].l(f);f.forEach(r),I=S(t),d=E(t,"SELECT",{});var n=N(d);O=E(n,"OPTION",{"data-svelte-h":!0}),H(O)!=="svelte-kntbxp"&&(O.textContent=g),v=E(n,"OPTION",{"data-svelte-h":!0}),H(v)!=="svelte-1fk3146"&&(v.textContent=k),p=E(n,"OPTION",{"data-svelte-h":!0}),H(p)!=="svelte-h2fes2"&&(p.textContent=A),n.forEach(r),y=S(t),m=E(t,"DIV",{});var _=N(m);C=E(_,"PRE",{id:!0,contenteditable:!0,class:!0}),N(C).forEach(r),_.forEach(r),this.h()},h(){z(l,"class","svelte-ycvfjp"),O.__value="desmos",U(O,O.__value),v.__value="python",U(v,v.__value),p.__value="mathematica",U(p,p.__value),e[1]===void 0&&W(()=>e[6].call(d)),z(C,"id","output"),z(C,"contenteditable","true"),z(C,"class","svelte-ycvfjp"),e[0]===void 0&&W(()=>e[7].call(C))},m(t,f){T(t,l,f),T(t,s,f),T(t,o,f),h(o,a),h(o,j);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(o,null);T(t,I,f),T(t,d,f),h(d,O),h(d,v),h(d,p),w(d,e[1],!0),T(t,y,f),T(t,m,f),h(m,C),e[0]!==void 0&&(C.textContent=e[0]),B||(G=[F(d,"change",e[6]),F(d,"change",e[3]),F(C,"input",e[7])],B=!0)},p(t,[f]){if(f&12){D=K(Object.entries(M));let n;for(n=0;n<D.length;n+=1){const _=x(t,D,n);c[n]?c[n].p(_,f):(c[n]=te(_),c[n].c(),c[n].m(o,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=D.length}f&2&&w(d,t[1]),f&1&&t[0]!==C.textContent&&(C.textContent=t[0])},i:X,o:X,d(t){t&&(r(l),r(s),r(o),r(I),r(d),r(y),r(m)),se(c,t),B=!1,ne(G)}}}function he(e,l,i,s="desmos"){if(s=="python")return e+" = "+l+" % "+i+`
`;if(s=="mathematica")return e=e.replace("_",""),e+" = "+l+`;
`;if(s=="desmos"){if(e.length>1)if(e.includes("_")){let a=e.indexOf("_");e=e[0]+"_{"+e.slice(a+1)+"}"}else e=e[0]+"_{"+e.slice(1)+"}";let o=String(l);if(o.includes("e")){let a=o.indexOf("e"),P=o.slice(a+1);o=o.slice(0,a)+" \\cdot 10^{"+P+"}"}return e+" = "+o+`
`}return e+" = "+l+" % "+i+`
`}function le(e,l){return Number.parseFloat(e).toExponential(l)}function fe(e,l,i){let s="",o="desmos";const a={};Object.entries(M).forEach(g=>{let v=Object.keys(g[1].values)[0];i(2,a[g[0]]={units:v,checked:!1},a)});function P(){i(0,s=""),Object.entries(a).forEach(g=>{let v=g[0],k=g[1].checked,p=g[1].units;k&&i(0,s+=he(M[v].nickname,M[v].values[p],p,o))})}function j(g){a[g].checked=this.checked,i(2,a)}function I(g){a[g].units=Z(this),i(2,a)}function d(){o=Z(this),i(1,o)}function O(){s=this.textContent,i(0,s)}return[s,o,a,P,j,I,d,O]}class de extends oe{constructor(l){super(),ie(this,l,fe,ce,ae,{})}}export{de as component};
