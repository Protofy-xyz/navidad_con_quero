"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5901],{72555:function(e,t,i){i.r(t),t.default={src:"/admin/_next/static/media/logo.12766b1b.png",height:572,width:572,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEUBAgIAAgIBAQEAAQEBAgIBAQEBAQEAAQEAAQEAAQEAAQEBAgIBAQEBAgIBAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQEAAQGs73SBAAAAJ3RSTlMAAAAAAQEEBgcNDxsbHR0vMTU2P0BKX2RmZ3J0e31/goiQkpaXnZ4UCFX1AAAARUlEQVR42gVABRKAIBBcXQM74QxEDPz/Ex3EbJ+3IZBKGMYgCYwHCW+wzJlz+bRCdHSckRaIZVHSCtR+V/W1KZD9FzryB5lZBEw3DyQBAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},51745:function(e,t,i){var n=i(52322),r=i(2784),l=i(13296),s=i(18827),o=i.n(s),a=i(57643);t.Z=(0,r.memo)(e=>{let{borderLess:t,rightPanelSize:i,setRightPanelSize:s,rightPanelStyle:d={},rightPanelWidth:c=0,actionContent:u,rightPanelContent:h,leftPanelContent:p,centerPanelContent:x,rightPanelResizable:f=!1,rightPanelVisible:g=!0,openPanel:m,setOpenPanel:v=()=>{}}=e,y=(0,r.useRef)(),E=(0,r.useRef)(),b=(0,r.useRef)(),C=(0,r.useRef)(null),j=(0,a.iP)(),A=()=>{let e=Math.max(400,j.width);return 350/e*100},w=()=>{if(i)return i;let e=Math.max(400,j.width);return 400/e*100},S=()=>{E.current,b.current&&(b.current.style.display="flex")},k=()=>{clearTimeout(C.current),E.current&&E.current.isDragging||!b.current||(b.current.style.display="none")};return(0,r.useEffect)(()=>{y.current&&y.current.resize(c||w(),"percentages")},[f]),(0,n.jsxs)("div",{style:{flex:1,display:"flex"},children:[p&&(0,n.jsx)("div",{id:"sidebar-panel-container",style:{flex:1,display:m?"flex":"none",position:"absolute",width:A(),zIndex:99999999},children:(0,n.jsx)(o(),{type:"left",isOpen:!0,size:A(),backdropClicked:()=>v(!1),children:p},"sidebar")}),u&&(0,n.jsx)("div",{id:"left-actions-container",style:{display:m?"none":"flex",position:"fixed",zIndex:1e20,flexDirection:"column",left:"20px",top:"calc(50vh - 80px)"},children:u}),(0,n.jsxs)(l.eh,{direction:"horizontal",style:{height:"100%",display:"flex"},children:[(0,n.jsx)(l.s_,{children:(0,n.jsx)("div",{style:{display:"flex",flex:1,height:"100vh"},children:x})}),(0,n.jsx)(l.OT,{onDragging:e=>{E.current&&(E.current.isDragging=e),e||k()},children:(0,n.jsx)("div",{ref:E,onMouseEnter:()=>{C.current=setTimeout(()=>{S()},50)},onMouseLeave:k,style:{backgroundColor:t?"transparent":"#252526",display:g&&f?"flex":"none",width:"4px",height:"100%",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)("div",{ref:b,style:{height:"60px",width:"4px",backgroundColor:"white",borderRadius:"20px",display:"none"}})})}),(0,n.jsx)(l.s_,{onResize:e=>s?s(e):null,ref:y,maxSize:80,defaultSize:c||w(),style:{position:g?"relative":"absolute",zIndex:g?1e5:-10,display:"flex",...d},children:(0,n.jsx)("div",{style:{height:"100%",display:"flex",flexDirection:"column",width:"100%"},children:h})})]})]})})},55901:function(e,t,i){let n,r,l;i.r(t),i.d(t,{default:function(){return eO},newVisualUiContext:function(){return U},useVisualUi:function(){return H},useVisualUiAtom:function(){return W},useVisualUiComms:function(){return q}});var s={};i.r(s),i.d(s,{Z:function(){return eT}});var o=i(52322),a=i(2784),d=i(5632),c=i(8293),u=i(7771),h=i(18299),p=i(28316),x=i(60163),f=i(50637),g=i(40178),m=i(81267),v=i(32678);let y=e=>{let{render:t}=e,{id:i}=(0,c.Zo)(),{actions:n,query:r,isActive:l}=(0,c.jE)((e,t)=>({isActive:t.getEvent("selected").contains(i)})),{isHover:s,dom:d,name:u,moveable:y,deletable:E,connectors:{drag:b},parent:C,childs:j,nodeAndSiblings:A,nodeId:w,unknown:S}=(0,c.Zo)(e=>{var t,i,n;return{unknown:null!==(n=e.data.custom.unknown)&&void 0!==n&&n,nodeId:e.id,isHover:e.events.hovered,dom:e.dom,name:e.data.custom.displayName||e.data.displayName,moveable:r.node(e.id).isDraggable(),deletable:r.node(e.id).isDeletable()&&r.node(e.id).isDraggable(),parent:e.data.parent,props:e.data.props,childs:e.data.nodes,nodeAndSiblings:(null===(t=e.data)||void 0===t?void 0:t.parent)?r.node(null===(i=e.data)||void 0===i?void 0:i.parent).childNodes():void 0}}),k=S?"#EF9364":"#2680EB",I="1px solid gray",J=(0,a.useRef)();(0,a.useEffect)(()=>{d&&(l?d.style.boxShadow="inset 0px 0px 0px 2px "+k:s?d.style.boxShadow="inset 0px 0px 0px 1px "+k:d.style.boxShadow="")},[d,l,s]);let N=(0,a.useCallback)(e=>{let{top:t,left:i,bottom:n}=e?e.getBoundingClientRect():{top:0,left:0,bottom:0};return{top:"".concat(t>100?t-60:n+10,"px"),left:"".concat(i,"px")}},[]),z=(0,a.useCallback)(()=>{let{current:e}=J;if(!e)return;let{top:t,left:i}=N(d);e.style.top=t,e.style.left=i},[d,N]);return(0,a.useEffect)(()=>{var e,t;return null===(t=document)||void 0===t||null===(e=t.querySelector(".craftjs-renderer"))||void 0===e||e.addEventListener("scroll",z),()=>{var e,t;null===(t=document)||void 0===t||null===(e=t.querySelector(".craftjs-renderer"))||void 0===e||e.removeEventListener("scroll",z)}},[z]),(0,a.useEffect)(()=>{var e;let t=e=>{e.preventDefault(),e.stopPropagation()};return null===(e=document.getElementById("editor-layout"))||void 0===e||e.addEventListener("click",t),()=>{var e;return null===(e=document.getElementById("editor-layout"))||void 0===e?void 0:e.removeEventListener("click",t)}},[]),(0,o.jsxs)(o.Fragment,{children:[l?p.createPortal((0,o.jsxs)("div",{id:"my-renderedNode",ref:J,style:{left:N(d).left,top:N(d).top,zIndex:1e31,position:"fixed",backgroundColor:"#252526",border:I,padding:"16px",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",height:"50px",pointerEvents:"auto",gap:20},children:[(0,o.jsxs)("div",{style:{fontSize:14,color:"white"},children:[u,S?" (Unknown)":""]}),(0,o.jsx)("div",{style:{height:"50px",borderLeft:I}}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:"20px"},children:[y?(0,o.jsx)("div",{ref:b,style:{cursor:"grab"},title:"Move",children:(0,o.jsx)(x.Z,{color:"white",size:20})}):null,i!==h.QS&&"ROOT"!=C?(0,o.jsx)("div",{style:{cursor:"pointer"},title:"Select parent",children:(0,o.jsx)(f.Z,{onMouseDown:e=>{n.selectNode(C),e.stopPropagation()},color:"white",size:20})}):null,j.length?(0,o.jsx)("div",{style:{cursor:"pointer"},title:"Select first child",children:(0,o.jsx)(g.Z,{onMouseDown:e=>{n.selectNode(j[0]),e.stopPropagation()},color:"white",size:20})}):null,(null==A?void 0:A.length)>1?(0,o.jsx)("div",{style:{cursor:"pointer"},title:"Select next sibling",children:(0,o.jsx)(m.Z,{onMouseDown:e=>{let t=A.indexOf(w),i=(t+1)%A.length,r=A[i];n.selectNode(r),e.stopPropagation()},color:"white",size:20})}):null,E?(0,o.jsx)("div",{style:{cursor:"pointer"},title:"Delete",id:"render-node-delete-btn",onClick:e=>{e.stopPropagation(),n.delete(i)},children:(0,o.jsx)(v.Z,{color:"white",size:20})}):null]})]}),document.querySelector(".page-container")):null,t]})},E=e=>(0,o.jsx)(o.Fragment,{});E.craft={props:{},related:{settings:()=>(0,o.jsx)("div",{})}};let b=e=>(0,o.jsx)(o.Fragment,{children:e.children});b.craft={props:{},related:{settings:()=>(0,o.jsx)("div",{})}};let C=e=>{var t;let{connectors:{connect:i},setProp:n}=(0,c.Zo)(e=>({selected:e.events.selected,custom:e.data.custom}));return(0,o.jsx)("div",{ref:i,style:{minHeight:"30px"},children:null!==(t=e.children)&&void 0!==t?t:"Unknown"})};C.craft={props:{},related:{settings:()=>(0,o.jsx)("div",{})}};var j={craft:{Root:b,Unknown:C,ReactCode:E}},A=i(97729),w=i.n(A),S=i(45054),k=i(85067),I=i.n(k),J=i(20477);class N{static parse(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new J.IKL({useInMemoryFileSystem:!0,manipulationSettings:{indentationText:J.xI4.Tab},compilerOptions:{target:J.H7j.Latest,scriptKind:J.hVH.TSX,languageVariant:J.C$L.JSX}});return new N(i.createSourceFile("_temp2.tsx",e,{overwrite:!0}),t)}data(e){e&&this.identifyElements(e);let t=this.getContent(),i=this.toCraftNodes(t);return this.addCustomProps(i)}getContent(){return this.getFirstDescendant("JsxElement")}getFirstDescendant(e){var t,i;let n=J.lGB[e];return e?null===(t=this.ast)||void 0===t?void 0:t.getFirstDescendantByKind(n):null===(i=this.ast)||void 0===i?void 0:i.getFirstDescendant()}getAllJsxElements(e){let t=this.getAllJsxChildren(e),i=[e,...t];return i}getAttributes(e){let t=this.isKind(e,"JsxElement"),i=this.isKind(e,"JsxSelfClosingElement"),n=this.isKind(e,"JsxExpression");if(!e||!t&&!i&&!n)throw"Not valid node to get attributes";return t?this.getJsxElementAttributes(e):i?this.getJsxSelfClosingElementAttributes(e):n?[]:void 0}getJsxAttribute(e,t){if(!e||!this.isKind(e,"JsxElement")&&!this.isKind(e,"JsxSelfClosingElement"))throw"Error node provided is not a JsxElement or JsxSelfClosingElement, can't get the specified attribute";let i=this.getAttributes(e).find(e=>e.getNameNode().getText()==t);if(!i)throw"Can't get attribute ".concat(t);return i}getAttributeKey(e){if(!e||!this.isKind(e,"JsxAttribute"))throw"Can't get attribute key, the node provided isn't a JsxAttribute";return e.getNameNode().getText()}getAttributeValue(e){if(!e||!this.isKind(e,"JsxAttribute"))throw"Can't get attribute value, the node provided isn't a JsxAttribute";return e.getInitializer()}getJsxElementAttributes(e){if(!e||!this.isKind(e,"JsxElement"))throw"Error node provided is not a JsxElement, can't get its attributes";return e.getOpeningElement().getAttributes()}getJsxSelfClosingElementAttributes(e){if(!e||!this.isKind(e,"JsxSelfClosingElement"))throw"Error node provided is not a JsxSelfClosingElement, can't get its attributes";return e.getAttributes()}getJsxElementName(e){let t=this.isKind(e,"JsxElement"),i=this.isKind(e,"JsxSelfClosingElement"),n=this.isKind(e,"JsxExpression");if(!e||!t&&!i&&!n)throw"Not valid node to get Name";return t?this.getJsxElementIdentifier(e):i?this.getJsxSelfClosingElementIdentifier(e):n?{name:"ReactCode"}:void 0}getJsxElementIdentifier(e){if(!e||!this.isKind(e,"JsxElement"))throw"Error node provided is not a JsxElement, can't get its Identifier";let t=e.getOpeningElement(),i=t.getTagNameNode(),n=i.getText();return{node:i,name:n}}getJsxSelfClosingElementIdentifier(e){if(!e||!this.isKind(e,"JsxSelfClosingElement"))throw"Error node provided is not a JsxSelfClosingElement, can't get its Identifier";let t=e.getTagNameNode(),i=t.getText();return{node:t,name:i}}getJsxChildren(e){if(this.isKind(e,"JsxSelfClosingElement"))throw"Can't obtain children from JsxSelfClosingElement";if(!e||!this.isKind(e,"JsxElement"))throw"Can't obtain node children";let t=e.getChildrenOfKind(J.lGB.SyntaxList)[0],i=t.getChildren();return i}getJsxTextOfJsxElement(e){if(this.isKind(e,"JsxExpression")||this.isKind(e,"JsxSelfClosingElement"))return;let t=this.getJsxChildren(e);if(t.length&&this.isKind(t[0],"JsxText"))return t[0]}getJsxChildrenFirstLevel(e){if(!(this.isKind(e,"JsxSelfClosingElement")||this.isKind(e,"JsxExpression")))return this.getJsxChildren(e).filter(e=>this.isKind(e,"JsxElement")||this.isKind(e,"JsxSelfClosingElement")||this.isKind(e,"JsxExpression"))}getAllJsxChildren(e){var t;let i;try{(i=this.getJsxChildrenFirstLevel(e)).forEach(e=>{i=[...i,...this.getAllJsxChildren(e)]})}catch(e){}return null!==(t=null==i?void 0:i.sort((e,t)=>e.getPos()-t.getPos()))&&void 0!==t?t:[]}isKind(e,t){return t==e.getKindName()}getNodeData(e){let t=this.getJsxElementName(e).name,i=this.getAttributes(e),n={},r={_nodeType:e.getKindName()};i.forEach(e=>{let t=this.getAttributeKey(e),i=this.getAttributeValue(e),{value:l,nodeKind:s}=this.nodeValueFactory(i);l&&t&&(n={...n,[t]:l}),s&&t&&(r={...r,[t]:s})});let l=this.getJsxTextOfJsxElement(e);return l&&l.getText()&&(n={...n,children:l.getText()},r={...r,children:"StringLiteral"}),{type:{resolvedName:t},isCanvas:!0,props:n,displayName:t,custom:r,hidden:!1,nodes:[],linkedNodes:{}}}flatten(e,t,i){var n;if(!e||!this.isKind(e,"JsxElement")&&!this.isKind(e,"JsxSelfClosingElement")&&!this.isKind(e,"JsxExpression"))return;let r=null!==(n=this.getIdentifier(e))&&void 0!==n?n:this.getIdFromSourceCode(e),l=this.getNodeData(e),s=[],o=this.getJsxChildrenFirstLevel(e);for(let e=0;e<(null==o?void 0:o.length);e++){let i=o[e];s.push(this.flatten(i,t,r))}let a={...l,nodes:s,parent:i};return t[r]=a,r}getNodes(e){if(!e||!this.isKind(e,"JsxElement"))throw"Can't getNodes from the give node that has no kind of type JsxElement";let t={};if(this.flatten(e,t,"ROOT"),!e||!this.isKind(e,"JsxElement"))throw"Can't getNodes from the give node that has no kind of type JsxElement";return t}toCraftNodes(e){var t;let i={type:{resolvedName:"Root"},isCanvas:!0,props:{"data-cy":"root-container"},displayName:"Root",custom:{},hidden:!1,nodes:[],linkedNodes:{}},n=this.getNodes(e),r=null===(t=Object.keys(n))||void 0===t?void 0:t.find(e=>"ROOT"==n[e].parent),l={};return r?(i={...i,nodes:[...i.nodes,r]},l={...n,ROOT:i}):l={ROOT:i},l}addCustomProps(e){let t=this.getImportDeclarations(),i={};return Object.keys(e).forEach(n=>{let r=e[n],l=this.getDisplayNameInNamedImports(r.displayName,t),s={...r,custom:{...r.custom,...l}};i={...i,[n]:s}}),i}getImportDeclarations(){let e=this.ast.getImportDeclarations(),t=[];return e.forEach(e=>{var i,n;let r=e.getNamedImports().length?e.getNamedImports():void 0,l=null==r?void 0:r.map(e=>{var t;return{name:e.getName(),alias:null===(t=e.getAliasNode())||void 0===t?void 0:t.getText()}}),s=null===(i=e.getDefaultImport())||void 0===i?void 0:i.getText(),o=null===(n=e.getModuleSpecifier())||void 0===n?void 0:n.getText();t=[...t,{namedImports:l,defaultImport:s,moduleSpecifier:o}]}),t}getDisplayNameInNamedImports(e,t){for(let i=0;i<(null==t?void 0:t.length);i++){let n=t[i],r=null==n?void 0:n.namedImports,l=null==n?void 0:n.defaultImport,s=null==n?void 0:n.moduleSpecifier;if(l===e)return{defaultImport:e,moduleSpecifier:s};if(r)for(let t=0;t<(null==r?void 0:r.length);t++){let i=r[t],n=null==i?void 0:i.name,l=null==i?void 0:i.alias;if(l===e||n===e)return{namedImportName:n,namedImportAlias:l,moduleSpecifier:s}}}return{}}identifyElements(e){let t=this.getAllJsxElements(this.getContent());for(let i=0;i<t.length;i++){let n,r="";t=this.getAllJsxElements(this.getContent());let l=this.getAttributes(t[i]);try{this.getJsxAttribute(t[i],"_nodeId")}catch(n){r+=' _nodeId="'.concat(e?e():this.getSameIdAsFlows(t[i]),'" ')}n=l.length?l[0].getStart():this.getJsxElementName(t[i]).node.getEnd(),this.ast.insertText(n,e=>e.write(r))}return this}getIdentifier(e){try{let t=this.getJsxAttribute(e,"_nodeId"),i=this.getAttributeValue(t);return this.nodeValueFactory(i).value}catch(e){console.error("Could not find node identifier")}}unidentifyElements(){let e=this.getAllJsxElements(this.getContent());for(let t=0;t<e.length;t++){e=this.getAllJsxElements(this.getContent());try{let i=this.getJsxAttribute(e[t],"_nodeId");this.ast.removeText(i.getStart(),i.getEnd())}catch(e){}}return this}getJsxElementByIdentifier(e,t){let i=this.getAllJsxElements(e),n=i.find(e=>this.getIdentifier(e)==t);if(!n)throw'Could not find element specified with uuid "'.concat(t,'" in the provided node');return n}convertJsxExpressionToJsxElement(){let e=()=>{let e=this.getContent();return this.getAllJsxElements(e).filter(e=>"JsxExpression"==e.getKindName())},t=i=>{i.length&&(this.ast.replaceText([i[0].getPos(),i[0].getEnd()],""),t(e()))};return t(e()),this}reactElementFactory(e,t){let i;let n=e.displayName;if("ReactCode"===n){let t=e.props.codeBlock;i="".concat(t)}else{let r,l="";if(Object.keys(e.props).filter(e=>!["_nodeId"].includes(e)).forEach(t=>{let i=e.props[t];if("StringLiteral"==e.custom[t]&&"children"!=t&&(i='"'.concat(i,'"')),"children"==t){r=i;return}void 0===i?l+=" ".concat(t):l+=" ".concat(t,"=").concat(i)}),"JsxSelfClosingElement"===e.custom._nodeType){let e=r?' children="'.concat(r,'"'):"";i="<"+"".concat(n)+l+e+"/>"}else i="<"+"".concat(n)+l+">"+"".concat(null!=r?r:"")+t+"</"+"".concat(n)+">"}return i}nodeValueFactory(e){let t;var i,n,r,l=null==e?void 0:e.getKindName();if("StringLiteral"===l)t=null==e?void 0:e.getLiteralValue();else{let s=null==e?void 0:e.getExpression(),o=null==s?void 0:s.getKindName();switch(o){case"StringLiteral":case"NumericLiteral":case"TrueKeyword":case"FalseKeyword":t=s.getLiteralValue(),l=o;break;case"ObjectLiteralExpression":let a=s.getProperties().reduce((e,t)=>{var i,n,r=t.getName();try{i=null===(n=t.getInitializer())||void 0===n?void 0:n.getLiteralValue()}catch(e){i=t.getInitializer().getText()}return{...e,[r]:i}},{});t=a,l=o;break;case"Identifier":if((null===(i=this.metadata)||void 0===i?void 0:i.context)&&(null===(n=this.metadata)||void 0===n?void 0:n.context[s.getText()])!=void 0){t=null===(r=this.metadata)||void 0===r?void 0:r.context[s.getText()];break}default:t=null==e?void 0:e.getText()}}return{value:t,nodeKind:l}}getIdFromSourceCode(e){try{return e.getKindName()+"_"+e._compilerNode.pos+"_"+e._compilerNode.end}catch(t){return e}}constructor(e,t){this.ast=e,this.metadata=t}}var z=i(64509),T=i(52026),O=i(8939);class D extends a.Component{static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){}render(){if(this.state.hasError){var e;return(0,o.jsx)(T.Stack,{style:{height:"100vh",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)(O.FA,{width:"80%",maxWidth:"600px",alignItems:"center",children:[(0,o.jsx)(T.Text,{children:"Can not render Visual UI frame due the following error:"}),(0,o.jsx)(T.Text,{color:"red",marginTop:"10px",children:null===(e=this.state.error)||void 0===e?void 0:e.message})]})})}return this.props.children}constructor(e){super(e),this.state={hasError:!1}}}var P=i(28261),K=i.n(P),L=i(29691),R=i.n(L);let Q=(e,t,i)=>{e.debounce?(l=setTimeout(()=>{t(s.UIFLOWID+"/ui",e)},1e3),n&&e.nodeId==n.nodeId&&clearTimeout(r),n=e,r=l):t(s.UIFLOWID+"/ui",e),i&&i()},B=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"customCode.tsx",i=new J.IKL({useInMemoryFileSystem:!0,manipulationSettings:{indentationText:J.xI4.Tab},compilerOptions:{target:J.H7j.Latest,scriptKind:J.hVH.TSX,languageVariant:J.C$L.JSX}}),n=i.createSourceFile(t,e,{overwrite:!0});return n},Z=(e,t,i)=>{var n,r;let l=null===(n=e.filter(e=>"ImportDeclaration"==e.type))||void 0===n?void 0:n.map(e=>e.id),s=null===(r=e.filter(e=>["JsxElement","JsxSelfClosingElement"].includes(e.type)))||void 0===r?void 0:r.map(e=>e.id),o=[];l.forEach(e=>{let i=t[e],n=i.module;Object.keys(i).forEach(e=>{let t;"default"==e&&i[e]?(t={defaultImport:i.default,moduleSpecifier:n},o.push(t)):e.startsWith("import-")&&i[e]&&(t={namedImports:[{name:i[e],alias:void 0}],moduleSpecifier:n},o.push(t))})});let a=[];function d(e){for(let t of o){if(t.defaultImport===e)return!0;if(t.namedImports){for(let i of t.namedImports)if(i.name===e)return!0}}return!1}e.forEach(e=>{s.includes(e.id)&&a.push({...e.data,tagName:t[e.id].name})});let c=function(){let e=[];for(let t of a){let{tagName:i,namedImports:n,defaultImport:r}=t;d(i)||n||r||e.push({defaultImport:i}),!d(i)&&(n||r)&&e.push(t)}return e}();return c};var F=i(60545),V=i(30361),M=i.n(V),_=i(752);function U(e){return(0,c._i)(e)}function W(e){let t=null!=e?e:null;return t?(0,_.KO)(t):[null,null]}function H(e,t,i){let[n,r]=(0,a.useState)(i),[l,s]=(0,a.useState)(null),[o]=(0,_.KO)(e);return(0,a.useEffect)(()=>{o&&o.subscribe&&o.subscribe(e=>{r(e=>{let i=t(e,o);return null!=i?i:e})},()=>{})},[o]),(0,a.useEffect)(()=>{console.log("boyyyy")},[o.query.serialize()]),{state:n,visualUiData:o,lastEvent:l}}function q(e,t,i,n){let{actions:r,query:l}=e,{resolveComponentsDir:s,appendNewNodeToTree:o}=t,c=(0,d.useRouter)(),u=c.query;"true"===u.experimental_comms?(0,a.useEffect)(()=>{console.log("experimental communications")},[]):(0,a.useEffect)(()=>{let e=n.action,t=n.nodeId,a=n.value,d=n.param;switch(e){case"delete-node":var c;if("JsxElement"!=n.deletedNodeType)return;r.setOptions(e=>e.skipTopic=!0),null===(c=n.nodesToDelete)||void 0===c||c.forEach(e=>r.delete(e)),i(JSON.parse(l.serialize()));break;case"delete-data":if(!d)return;try{r.setOptions(e=>e.skipTopic=!0),r.setProp(t,e=>(delete e[d],e)),i(JSON.parse(l.serialize()))}catch(e){console.error("error deleting data. ",e)}break;case"edit-data":if(!d)return;try{r.setOptions(e=>e.skipTopic=!0),r.setProp(t,e=>e[d]=a),r.setCustom(t,e=>e[d]="JsxText");let e=null==n?void 0:n.deleteKey;e&&r.setProp(t,t=>(delete t[e],t)),i(JSON.parse(l.serialize()))}catch(e){console.error("error editing data. ",e)}break;case"add-data":let u=JSON.parse(l.serialize());if(!u[t])return;try{u[t]={...u[t],props:{...u[t].props,[d]:a}},r.setOptions(e=>e.skipTopic=!0),r.setProp(t,e=>e[d]=a),i(u)}catch(e){console.error("error adding data. ",e)}break;case"add-node":let h=n.type,p=n.childrenPos,x=n.nodeName,f=n.parent;if("JsxElement"==h){let e={displayName:x,props:{},custom:{defaultImport:x,moduleSpecifier:'"'.concat(s).concat(x,'"'),_nodeType:"JsxElement"},hidden:!1,isCanvas:!0,parent:f,type:{resolvedName:x},nodes:[]},n=JSON.parse(l.serialize());if(!f||!n)return;try{let s=o(n,t,e,f,p);r.setOptions(e=>e.skipTopic=!0),r.deserialize(s),i(JSON.parse(l.serialize()))}catch(e){console.error("error adding node (JsxElement). ",e)}}else try{let e=n.data;if(!(null==e?void 0:e.isAncestorJsxElement))return;r.setOptions(e=>e.skipTopic=!0),r.setProp(f,t=>t[e.key]=e.value),i(JSON.parse(l.serialize()))}catch(e){console.error("error adding node (Not a JsxElement). ",e)}}},[n])}var X=(0,z.Ic)(e=>{var t;let{children:n,topics:r,currentPageContent:l,resolveComponentsDir:s,onReady:d=()=>{},metadata:u={}}=e,h=(0,a.useRef)(),[p,x]=(0,a.useState)(!0),[f,g]=(0,a.useState)({}),[m,v]=(0,a.useState)({}),[y,E]=(0,a.useState)(),{publish:b,data:C}=r,{actions:j,query:A,connectors:k}=(0,c.jE)((e,i)=>{let n=JSON.parse(i.serialize()),r=I().diff(f,JSON.parse(i.serialize()));E(null===(o=e.events.selected)||void 0===o?void 0:o.keys().next().value);let l=(null==r?void 0:r.length)>0,s=I().diff(m,n);if(!i.getOptions().skipTopic&&(null==s?void 0:s.length)&&JSON.stringify(s)!=t){var o,a,d={};if(1==s.filter(e=>"N"==e.kind).length){let e=s.find(e=>"N"==e.kind).path[0],t=n[e].parent,i=n[t].nodes.findIndex(t=>t==e),r=n[e].custom;Q(d={action:"add-node",nodeId:e,nodeName:n[e].displayName,parent:t,childrenPos:i,data:r,nodeProps:n[e].props},b)}else if(s.find(e=>"D"==e.kind)){let e=s.filter(e=>"D"==e.kind).map(e=>e.path[0]),t=s.find(e=>"A"==e.kind).path[0];Q(d={action:"delete-node",deletedNodes:e,parent:t},b)}else if(s.find(e=>"E"==e.kind)){let e=s.find(e=>"E"==e.kind&&"parent"==e.path[1]),t=s.find(e=>"E"==e.kind&&"children"==e.path[2]);if(t){let e=t.path[0],i=M().decode(t.rhs);d={action:"edit-node",nodeId:e,newChildValue:i,debounce:!0}}else if(e){let t=e.path[0],i=e.rhs,n=e.lhs,r=m[n].nodes.findIndex(e=>e==t),l=s.find(e=>"E"==e.kind&&e.path[0]==i&&e.rhs==t),o=null!==(a=null==l?void 0:l.path[2])&&void 0!==a?a:-1;d={action:"move-node",isSameParent:!1,nodeId:t,oldParentId:n,newParentId:i,newPos:o,oldPos:r}}else{let e=s.find(e=>"E"==e.kind&&"nodes"==e.path[1]),t=e.path[0],i=s.sort((e,t)=>e.path[2]-t.path[2]).map(e=>e.rhs),n=m[t].nodes,r=function(e,t){let i=[],n={};for(let t=0;t<e.length;t++)n[e[t]]=t;for(let e=0;e<t.length;e++){let r=t[e];i.push(n[r])}return i}(n,i);d={action:"move-node",isSameParent:!0,parent:t,childrenIndexes:r}}Q(d,b)}t=JSON.stringify(s),v(n)}return{hasChanges:l,currentEditorNodes:n,enabled:e.options.enabled}});(0,a.useEffect)(()=>{y&&b("zoomToNode",{id:y})},[y]),q({actions:j,query:A},{resolveComponentsDir:s,appendNewNodeToTree:(e,t,i,n,r)=>(e[t]=i,e[n].nodes.splice(r,0,t),e)},v,C["flow/editor"]),(0,a.useEffect)(()=>{j.setOptions(e=>e.skipTopic=!1)},[m]);let J=async()=>{let e=N.parse(l,u),t=e.data();g(t);let i=null!==(s=null==A?void 0:null===(r=A.getOptions())||void 0===r?void 0:r.resolver)&&void 0!==s?s:{},n=Object.keys(i);try{var r,s,o={};Object.keys(t).forEach(e=>{if(!n.includes(t[e].displayName)){let i={...t[e],custom:{...t[e].custom,unknown:!0},type:{...t[e].type,resolvedName:"Unknown"}};o[e]=i}}),j.deserialize({...t,...o})}catch(e){throw"Error loading editor nodes"}};return(0,S.Z)(["z","Z","s","S","c","C","Delete","Backspace"],e=>{var t,i;let n=(null===(i=h.current)||void 0===i?void 0:null===(t=i.getBoundingClientRect())||void 0===t?void 0:t.height)>0;if(n){if(("z"==e.key||"Z"==e.key)&&(e.ctrlKey||e.metaKey)&&e.shiftKey){try{j.history.redo()}catch(e){console.error("can not redone action")}return}if(("z"==e.key||"Z"==e.key)&&(e.ctrlKey||e.metaKey)){try{j.history.undo()}catch(e){console.error("can not undone action")}return}}}),(0,a.useEffect)(()=>{let e=async t=>{try{await J()}catch(i){t<10?(setTimeout(()=>e(t+1),5e3),x(!0)):console.error("Max retry reached! Error deserializing editor nodes (CraftJS nodes). Error: ".concat(i)),console.error("Error deserializing editor nodes (CraftJS nodes). Error: ".concat(i))}};l&&(x(!1),e(0))},[l]),(0,o.jsxs)("div",{style:{backgroundColor:"rgb(50, 50, 50)",overflow:"hidden",flex:1,display:"flex",flexDirection:"column"},children:[(0,o.jsxs)(w(),{children:[(0,o.jsx)("title",{children:"Platform UI"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:i(72555)})]}),p?(0,o.jsx)(T.Stack,{style:{height:"100vh",justifyContent:"center",alignItems:"center",zIndex:100,backgroundColor:"#f0f0f0"},children:(0,o.jsx)(F.$,{size:"large"})}):null,(0,o.jsx)("div",{onLoad:()=>x(!1),className:"page-container",style:{width:"100%",height:"100%"},children:(0,o.jsx)("div",{id:"editor",className:"craftjs-renderer",ref:e=>{h.current=e,k.select(k.hover(e,null),null)},style:{flex:1,position:"relative",overflow:"auto",color:"black",backgroundColor:"#f0f0f0",margin:"0 auto",left:0,right:0,width:"100%",height:"100%"},children:(0,o.jsx)(D,{children:(0,o.jsx)("div",{id:"editor-frame-container",children:(0,o.jsx)(c.RQ,{})})})})})]})},{topics:["flow/editor"]}),$=i(29456),G=i(70549),Y=e=>{var t;let{name:i,color:n,size:r}=e,l=null!==(t=$[i])&&void 0!==t?t:G.Z;return(0,o.jsx)(l,{color:n,size:r})},ee=i(38880),et=i(88724);let ei=e=>{let{palettes:t,sendMessage:i,currentPage:n}=e,r=a.useRef(null),[l,s]=a.useState(""),{connectors:d,query:u}=(0,c.jE)(),h=Object.keys(t).reduce((e,i)=>{let n=t[i]?Object.keys(t[i]).filter(e=>{var n,r;return!(null===(r=t[i][e].craft)||void 0===r?void 0:null===(n=r.custom)||void 0===n?void 0:n.hidden)}).reduce((e,n)=>{var r,l,s,o;return{...e,[n]:{dropable:!0,element:t[i][n],icon:(r=t[i][n],o="Component",(null==r?void 0:null===(l=r.craft)||void 0===l?void 0:l.custom)&&(null==r?void 0:null===(s=r.craft)||void 0===s?void 0:s.custom.icon)&&(o=r.craft.custom.icon),o)}}},{}):{...e};return{...e,[i]:n}},{}),p=l?Object.keys(h).reduce((e,t)=>{let i=h[t],n=Object.keys(i),r=n.filter(e=>e.toLocaleLowerCase().includes(l.toLocaleLowerCase())).reduce((e,t)=>({...e,[t]:i[t]}),{});var s={};return Object.keys(r).length&&(s={[t]:r}),{...e,...s}},{}):h,x=Object.keys(p).filter(e=>"craft"!=e);function f(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let e=.95*window.innerHeight;r.current&&(r.current.style.height=e+"px",r.current.style.maxHeight=e+"px")}return a.useEffect(()=>(f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)),[]),(0,o.jsx)("div",{className:"visualui-sidebar",style:{backgroundColor:"rgb(37, 37, 38, 0.97)"},children:(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"4px"},children:(0,o.jsxs)("div",{ref:r,style:{padding:"4px",display:"flex",flexDirection:"column",flex:1},children:[(0,o.jsx)("p",{style:{padding:"18px 0px 0px 14px",fontSize:"18px",color:"white",fontWeight:"400"},children:"Components"}),(0,o.jsxs)("div",{style:{display:"flex",margin:"18px 12px 18px 2px",position:"relative"},children:[(0,o.jsx)("input",{style:{fontFamily:"Jost-Regular",padding:"8px 8px 8px 36px",display:"flex",boxSizing:"border-box",fontSize:"14px",backgroundColor:"#323232",borderRadius:"10px",borderWidth:"0px",outline:"none",color:"white",flex:1},value:l,onChange:e=>s(e.target.value),placeholder:"Search..."}),(0,o.jsx)(ee.Z,{color:"grey",size:20,style:{position:"absolute",top:"8px",left:"10px"}}),l?(0,o.jsx)(et.Z,{onClick:()=>s(""),color:"white",size:20,style:{position:"absolute",top:"8px",right:"10px",cursor:"pointer"}}):null]}),(0,o.jsx)("div",{className:"visualui-sidebar-list",style:{overflow:"auto",overflowX:"hidden",display:"flex",flexDirection:"column",flex:1},children:x.map((e,t)=>(0,o.jsxs)("div",{style:{flexDirection:"column",display:"flex",marginBottom:"25px"},children:[(0,o.jsx)("p",{style:{paddingLeft:"16px",marginBottom:"10px",fontSize:"12px",color:"grey"},children:e.toUpperCase()}),(0,o.jsx)("div",{className:"visualui-sidebar-list",style:{flex:1,display:"flex",justifyContent:"flex-start",flexWrap:"wrap",alignContent:"flex-start",gap:"8px"},children:Object.keys(p[e]).map((t,i)=>{let n=p[e][t];return(null==n?void 0:n.nonDeletable)?null:(0,o.jsx)("div",{onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#FFFFFF10"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=""},title:t,style:{display:"flex",cursor:"grab",borderRadius:"6px"},children:(0,o.jsxs)("div",{ref:e=>d.create(e,()=>n.dropable?(0,o.jsx)(c.W_,{is:n.element,canvas:!0}):a.createElement(n.element)),id:"drag-element-"+t,className:"draggable-element",style:{textAlign:"center",paddingTop:"10px",paddingBottom:"10px",width:"100px",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)(Y,{name:n.icon,color:"#a8a29e",size:32}),(0,o.jsx)("div",{style:{marginTop:"14px"},children:(0,o.jsx)("p",{style:{fontSize:"12px",width:"100%",color:"white",padding:"5px"},children:t.length>12?t.substring(0,9)+"...":t})})]})},i)})})]},t))})]})})})};var en=i(51745),er=i(27911),el=e=>{let{sourceCode:t,onChange:i,onSave:n,onEscape:r}=e;return n&&(0,S.Z)(["s","S"],e=>{if(("s"==e.key||"S"==e.key)&&(e.ctrlKey||e.metaKey)&&n)return e.preventDefault(),n()}),r&&(0,S.Z)(["Escape"],e=>{if("Escape"==e.key&&r)return e.preventDefault(),r()}),(0,o.jsx)(er.ZP,{theme:"vs-dark",defaultLanguage:"javascript",value:t,onChange:e=>i(e)})},es=i(56839),eo=i(53544),ea=i(1674),ed=i(50664),ec=i(91425),eu=i(43748),eh=i(8219),ep=i(89285),ex={nodeBackgroundColor:"#252526",borderColor:"grey",blockPort:"grey",flowPort:"grey",dataPort:"grey",textColor:"#CCCCCC",dataOutputColor:"grey",nodeBorderColor:"grey",edgeColor:"grey",titleColor:"black"},ef=i(66306),eg=i(64973),em=i(73235),ev=i(17788),ey=i(11001),eE=i(81395);function eb(){let e=(0,em._)(["\n  height: ",";\n  flex: ",";\n  color: #545454;\n"]);return eb=function(){return e},e}let eC=ev.default.div(eb(),e=>e.visible&&e.height&&"full"!==e.height?"".concat(e.height):"auto",e=>e.visible&&e.height&&"full"===e.height?"1":"unset"),ej=e=>{let{visible:t,icon:i,title:n,children:r,height:l,onChange:s}=e;return(0,o.jsxs)(eC,{visible:t,height:l,style:{display:"flex",flexDirection:"column"},children:[(0,o.jsxs)("div",{onClick:()=>{s&&s(!t)},style:{cursor:"pointer",backgroundColor:"#191919",borderBottom:"1px solid #cccccc20",alignItems:"center",padding:"10px",flexDirection:"row",display:"flex"},children:[(0,o.jsxs)("div",{style:{display:"flex",flex:1,alignItems:"center"},children:[a.createElement(i,{size:18,color:"white"}),(0,o.jsx)("div",{style:{fontSize:18,marginLeft:"10px",color:"white"},children:n})]}),t?(0,o.jsx)(ey.Z,{size:18}):(0,o.jsx)(eE.Z,{size:18})]}),(0,o.jsx)(O.FA,{style:{display:t?"flex":"none",flex:1,flexDirection:"column",overflowY:"scroll"},children:r})]})};var eA=i(82095),ew=i(4065),eS=i(1594),ek=i(29392);let eI=(0,ew.e)("flows-ui"),eJ=e=>(0,o.jsx)(eI,{...e,enableCommunicationInterface:eN});function eN(e){let{edges:t,nodeData:i,nodes:n,setEdges:r,setNodesData:l,deleteNodes:s,setNodes:o,createNode:c,setNodeData:u,_customComponents:h,onSaveNodes:p,flowId:x,data:f}=e,g=(0,d.useRouter)(),m=g.query;"true"===m.experimental_comms?(0,a.useEffect)(()=>{console.log("flows: experimental communications")},[]):(console.log("flows: legacy communications"),(0,a.useEffect)(()=>{let e=f[x+"/ui"];if(e){var a=e.nodeId;switch(e.action){case"delete-node":var d,p=null!==(d=e.deletedNodes)&&void 0!==d?d:[],g=e.parent;let{updatedEdges:x,newNodeData:f}=s(p,g,a,t,i);r(x),l(f),o(e=>e.filter(e=>!p.includes(e.id)));break;case"add-node":var m,v,y=e.nodeName,E=e.parent,b=null!==(v=null==e?void 0:e.data)&&void 0!==v?v:{},C=null===(m=n.find(t=>t.id==e.parent))||void 0===m?void 0:m.position;if(!C)return;var j=e.childrenPos+1,A=e.nodeProps;let k=Object.keys(A).reduce((e,t)=>{var i=A[t],n="prop-".concat(t);let r=(0,eS.GT)(i);var l={key:t,value:i,kind:r};return"children"==t&&(n="child-1",l=i),{...e,[n]:l}},{name:y});var w={...i,[a]:k};if(h.find(e=>e.id==y)){var S={};w={...w,[a]:{...w[a]}}}let I=c([C.x+500,C.y],"JsxElement",e.nodeId,b,!0,{},S);o(e=>e.concat(I));let J=(0,ek.wo)(n,t,w,a,"JsxElement");l(w={...w,[E]:{...(0,ek.MR)(w[E],j,null!=J?J:'"children"')}}),r((0,ek.lm)(t,a,E,j));break;case"edit-node":var w={...i,[a]:{...i[a],"child-1":e.newChildValue}};l(w);break;case"move-node":let N=e.isSameParent;if(N){let n=e.parent,l=e.childrenIndexes,s=Math.min(...l),o={...i[n]},a=(0,ek.ro)(o,l,s);u(n,a);let d=(0,ek.lh)(t,n,s,l);r(d);return}{let n=e.oldParentId,s=e.oldPos+1,o=i[n],{data:d,deletedElementData:c}=(0,ek.ap)(o,s),u=e.newParentId,h=i[u];if(!h)return;let p=Object.keys(h).filter(e=>e.startsWith("child-")).length,x=-1==e.newPos?p+1:e.newPos+1,f=(0,ek.MR)(h,x,c);l({...i,[n]:d,[u]:f});let g=(0,ek.cV)(t,a,n,s,u,x);r(g)}}}},[f[x+"/ui"]]),(0,a.useEffect)(()=>{var e;(null===(e=f.savenodes)||void 0===e?void 0:e.value)&&p()},[f.savenodes]))}let ez=e=>{let{id:t,children:i,onClick:n,disabled:r=!1}=e;return(0,o.jsx)("div",{id:t,onClick:r?()=>null:n,style:{marginBottom:20,backgroundColor:"black",opacity:r?.2:1,borderRadius:"100%",justifyContent:"center",alignItems:"center",width:"40px",height:"40px",display:"flex",cursor:"pointer"},children:i})};var eT=(0,a.memo)((0,z.Ic)(function(e){let{isActive:t=!0,sourceCode:i="",sendMessage:n,currentPage:r="",userPalettes:l={},resolveComponentsDir:s="",topics:h,metadata:p={},setContext:x}=e,f=(0,a.useRef)(),[g,m]=(0,a.useState)(!1),[v,E]=(0,a.useState)(""),[b,C]=(0,a.useState)(v),[A,w]=(0,a.useState)(!1),[S,k]=(0,a.useState)("preview"),[I,J]=(0,a.useState)(!1),[N,z]=(0,a.useState)(!0),[T,D]=(0,a.useState)(!1),P=(0,d.useRouter)(),{publish:K}=h,{data:L}=h,[R,Q]=a.useState(!1),F="preview"==S;(0,a.useEffect)(()=>{let e=()=>Q(!1);return window.addEventListener("dragenter",e),()=>{window.removeEventListener("dragenter",e)}},[]);let V={...j,...l},M=Object.keys(V).reduce((e,t)=>e={...e,...V[t]},{}),_=async()=>{E(i)},W=async(e,t,i)=>{var r=t;switch(e){case"monaco":n({type:"save",data:{content:r=b}});break;case"flows":if(!i)break;let l=B(r),o=l.getImportDeclarations(),a=Z(i.nodes,i.nodesData,s);if(a.length){let e=a.filter((e,t,i)=>t===i.findIndex(t=>JSON.stringify(t)===JSON.stringify(e))),t=e.reduce((e,t)=>{var i,n,r,l,s;let o;let a=t.moduleSpecifier;if(a){if(null===(i=t.namedImports)||void 0===i?void 0:i.length){let e=(null===(n=t.namedImports[0])||void 0===n?void 0:n.alias)?(null===(r=t.namedImports[0])||void 0===r?void 0:r.name)+" as "+(null===(l=t.namedImports[0])||void 0===l?void 0:l.alias):null===(s=t.namedImports[0])||void 0===s?void 0:s.name;o="import {"+e+'} from "'+a+'";\n'}else t.defaultImport&&(o="import "+t.defaultImport+' from "'+a+'";\n')}else o="";return e+o},"\n"),i=o?o[o.length-1].getEnd():0,n=l.insertText(i,t);r=n.getText()}n({type:"save",data:{content:r}})}};(0,a.useEffect)(()=>{C(v)},[v]),(0,a.useEffect)(()=>{_()},[i]),(0,a.useEffect)(()=>{var e;(null===(e=L.zoomToNode)||void 0===e?void 0:e.id)&&!I&&J(!0)},[L.zoomToNode]);let H=(0,o.jsx)("div",{style:{display:"flex",width:"100%",top:I?0:-1e12,position:I?"relative":"absolute",height:"100%"},children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100vh"},children:[(0,o.jsxs)("div",{style:{padding:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",zIndex:999999,backgroundColor:"#252526",borderBottom:"1px solid #cccccc20"},children:[(0,o.jsx)(O.sL,{theme:"dark",children:(0,o.jsx)(ef.zx,{onPress:e=>{J(!1),m(!1),e.stopPropagation()},hoverStyle:{opacity:1},opacity:.7,size:"$3",chromeless:!0,circular:!0,noTextWrap:!0,children:(0,o.jsx)(es.Z,{fillOpacity:0,style:{alignSelf:"center"},opacity:.5,color:"var(--color)"})})}),(0,o.jsxs)(O.sL,{display:A?"flex":"none",theme:"dark",marginVertical:"$1",children:[(0,o.jsx)(ef.zx,{size:"$3",chromeless:!0,circular:!0,marginRight:"$2",onPress:()=>{C(v),w(!1)},children:(0,o.jsx)(et.Z,{})}),(0,o.jsx)(ef.zx,{size:"$3",chromeless:!0,circular:!0,onPress:()=>W("monaco",b),children:(0,o.jsx)(eo.Z,{fillOpacity:0})})]}),(0,o.jsxs)(eg.t,{display:A?"none":"flex",theme:"dark",type:"single",defaultValue:"preview",disableDeactivation:!0,children:[(0,o.jsx)(eg.t.Item,{value:"code",onPress:()=>{k(void 0),m(!0)},children:(0,o.jsx)(ea.Z,{})}),(0,o.jsx)(eg.t.Item,{value:"flow",onPress:()=>{k("flow"),m(!1)},children:(0,o.jsx)(ed.Z,{})}),(0,o.jsx)(eg.t.Item,{value:"flow-preview",onPress:()=>{k("flow-preview"),m(!1)},children:(0,o.jsx)(ec.Z,{})}),(0,o.jsx)(eg.t.Item,{value:"preview",onPress:()=>{k("preview"),m(!1)},children:(0,o.jsx)(eu.Z,{})})]})]}),(0,o.jsx)("div",{style:{display:g?"flex":"none",flex:1},children:(0,o.jsx)(el,{onChange:e=>{C(e),v!=e?w(!0):w(!1)},sourceCode:b})}),(0,o.jsxs)("div",{style:{opacity:1,marginRight:0,flex:1,display:g?"none":"flex",flexDirection:"column",backgroundColor:"#252526"},children:[(0,o.jsx)(ej,{icon:eh.Z,title:"Customize",height:T?"55%":"full",visible:N,onChange:e=>z(e),children:(0,o.jsx)(eJ,{disableDots:!t||F,sourceCode:v,setSourceCode:E,customComponents:(0,eA.B)(P.pathname,P.query),onSave:(e,t,i)=>W("flows",e,i),config:{masks:(0,eA.W)(P.pathname,P.query)},zoomOnDoubleClick:!F,themeMode:"dark",bgColor:"#252526",theme:ex,nodePreview:S,metadata:p})}),(0,o.jsx)(ej,{icon:ep.Z,title:"Layers",visible:T,onChange:e=>D(e),height:N?"55%":"full",children:(0,o.jsx)(u.S9,{})})]})]})},"auxiliarySidebar"),q=(0,o.jsx)("div",{style:{display:"flex",flex:1,height:"100%"},children:(0,o.jsx)(ei,{palettes:V,sendMessage:n,currentPage:r})},"sidebar"),$=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ez,{id:"components-to-drag-btn",onClick:()=>Q(!0),children:(0,o.jsx)(G.Z,{color:"white"})}),(0,o.jsx)(ez,{id:"save-nodes-btn",onClick:()=>K("savenodes",{value:"visual-ui"}),children:(0,o.jsx)(eo.Z,{color:"white"})}),(0,o.jsx)(ez,{onClick:()=>{P.push({query:{}})},children:(0,o.jsx)(et.Z,{color:"white"})})]}),Y=(0,o.jsx)("div",{id:"editor-layout",style:{flex:1,display:"flex",minWidth:"280px",borderRight:"2px solid #424242",borderLeft:"2px solid #424242"},children:(0,o.jsx)(X,{metadata:p,currentPageContent:v,onSave:()=>null,resolveComponentsDir:s})});function ee(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let e=window.innerHeight;f.current&&(f.current.style.height=e+"px")}(0,a.useEffect)(()=>(ee(),window.addEventListener("resize",ee),()=>window.removeEventListener("resize",ee)),[]);let er={resolver:M,onRender:y},em=U(er);return x&&x(em),(0,o.jsx)("div",{ref:f,style:{display:"flex",flex:1,width:"100%"},children:(0,o.jsx)(c.ML,{...er,parentContext:em,children:(0,o.jsx)("div",{style:{display:"flex",flex:1,flexDirection:"row"},children:(0,o.jsx)(en.Z,{openPanel:R,setOpenPanel:Q,actionContent:$,leftPanelContent:q,centerPanelContent:Y,rightPanelContent:H,rightPanelResizable:!F,rightPanelWidth:F?0:50,rightPanelVisible:I})})})})},{topics:["zoomToNode"]})),eO=e=>{let{userPalettes:t={},_sourceCode:i="",_resolveComponentsDir:n="@/uikit",_currentPage:r="",onSave:l=()=>null,metadata:s={},contextAtom:d}=e,[c,u]=W(d),[h,p]=(0,a.useState)(r),x=async e=>{let t=e.type,i=e.data;switch(t){case"loadPage":let n=i.pageName;p(n);break;case"save":let r=i.content;l(function(e){let t;try{t=R().format(e,{bracketSameLine:!0,jsxBracketSameLine:!0,singleAttributePerLine:!1,printWidth:1e3,quoteProps:"consistent",jsxSingleQuote:!1,parser:"typescript",plugins:[K()]})}catch(e){console.error("Could not format text. Error: "+e)}return null!=t?t:e}(r))}};return(0,o.jsx)(z.US,{children:i?(0,o.jsx)(eT,{sourceCode:i,currentPage:h,userPalettes:t,sendMessage:x,resolveComponentsDir:"".concat(n,"/"),metadata:s,setContext:u}):null})}}}]);