(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8774],{21599:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/objects",function(){return a(60356)}])},60356:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(52322),n=a(52415),l=a(40214),i=a(13997),s=a(50897),o=a(79562),c=a(1888),u=a(89560),d=a(66788),m=a(82695),z=a(8939),p=a(30195);let b={};var f={objects:{component:e=>{let{pageState:t,initialItems:a,pageSession:c}=e,{replace:f}=(0,m.N)(t);return(0,r.jsx)(l.D,{title:"Objects",pageSession:c,children:(0,r.jsx)(i.V,{integratedChat:!0,rowIcon:d.x,sourceUrl:"/adminapi/v1/objects",initialItems:a,numColumnsForm:1,name:"object",columns:s.Z.columns(s.Z.column("name","name",!0,e=>(0,r.jsx)(z.sL,{id:"objects-datatable-"+e.name,children:e.name})),s.Z.column("features","features",!0,e=>Object.keys(e.features).map(e=>(0,r.jsx)(o.A,{text:e,color:"$gray5"})))),extraFieldsFormsAdd:{api:p.z.boolean().after("keys").label("automatic crud api").defaultValue(!0),adminPage:p.z.boolean().after("keys").label("admin page").defaultValue(!0)},model:n.Wk,pageState:t,icons:b,deleteable:e=>{if(!Array.isArray(e))return 0===Object.keys(e.data.features).length;for(let t of e)if(0!==Object.keys(t.features).length)return!1;return!0},extraMenuActions:[{text:"Edit Object file",icon:u.z,action:e=>{f("editFile",e.getDefaultSchemaFilePath())},isVisible:e=>!0}]})})},getServerSideProps:(0,c.eq)("/adminapi/v1/objects",["admin"],{orderBy:"name"})}},h=a(97729),j=a.n(h);function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j(),{children:(0,r.jsx)("title",{children:"Protofy - Objects"})}),(0,r.jsx)(f.objects.component,{...e})]})}},52415:function(e,t,a){"use strict";a.d(t,{Wk:function(){return o}});var r=a(30195),n=a(54283);let l=r.z.object({id:r.z.string().search().id().generate(e=>e.name.charAt(0).toUpperCase()+e.name.slice(1)+"Model").hidden(),name:r.z.string().search().static(),features:r.z.any().generate({},!0).hidden(),keys:r.z.record(r.z.string().optional(),r.z.object({type:r.z.union([r.z.literal("string"),r.z.literal("number"),r.z.literal("boolean"),r.z.literal("array"),r.z.literal("object"),r.z.literal("record"),r.z.literal("union")]),params:r.z.array(r.z.string()).optional(),modifiers:r.z.array(r.z.object({name:r.z.union([r.z.literal("id"),r.z.literal("search"),r.z.literal("generate"),r.z.literal("display"),r.z.literal("optional"),r.z.literal("email"),r.z.literal("label"),r.z.literal("hint"),r.z.literal("static"),r.z.literal("min"),r.z.literal("max"),r.z.literal("secret"),r.z.literal("onCreate"),r.z.literal("onUpdate"),r.z.literal("onRead"),r.z.literal("onDelete"),r.z.literal("onList"),r.z.literal("name"),r.z.literal("location")]),params:r.z.array(r.z.string()).optional()}).name("name")).optional()}).name("name")).generate({})}),i=r.z.object({...l.shape}),s=e=>({...e,keys:Object.keys(e.keys?e.keys:{}).reduce((t,a)=>({...t,[a]:{type:"string",...e.keys[a]}}),{})});class o extends n.J{getDefaultSchemaFilePath(){return o.getDefaultSchemaFilePath(this.data.name)}static getDefaultSchemaFilePath(e){return"/packages/app/bundles/custom/objects/"+e+".ts"}create(e){let t=null!=e?e:this.getData(),a=s(t);return super.create(a)}update(e,t){let a=null!=t?t:e.data,r=s(a);return super.update(e,r)}static _newInstance(e,t){return new o(e,t)}constructor(e,t){super(e,i,t,"Object")}}}},function(e){e.O(0,[8641,8081,4733,1335,8873,2859,6313,3950,9331,4092,9927,6116,9498,1967,5619,9884,995,1004,4152,9107,767,1773,8859,4305,9774,2888,179],function(){return e(e.s=21599)}),_N_E=e.O()}]);