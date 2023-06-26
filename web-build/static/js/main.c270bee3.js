(()=>{"use strict";var e={3193:(e,t,o)=>{o.r(t),o.d(t,{default:()=>P});var r=o(9526),a=o(5690),i=o(8552),n=o(5861),s=o(885),l=o(9233),d=o(1133),u=o(6834),c=o(1451),f=o(3497),p=o(8859),g=o(3026),h=o(4333);const m=h.default.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",marginBottom:20},botao:{backgroundColor:"#8A07DA",marginTop:20,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontWeight:"bold",fontSize:16,color:"#fff"},entrada:{borderWidth:2,borderColor:"#ddd",paddingHorizontal:20,fontSize:16,color:"#444",marginTop:40,borderRadius:8,height:44,width:"90%"},imagemArea:{alignItems:"center",justifyContent:"center",width:150,height:150,borderRadius:75,marginTop:-75,backgroundColor:"#FFF"},imagem:{width:120,height:120,borderRadius:60},fundo:{backgroundColor:"#C4C4C4",width:"100%",height:156},textoNome:{fontSize:21,fontWeight:"600",color:"#45565F",padding:15},textoEmail:{fontSize:17,color:"#717E84",marginTop:5},seguidoresArea:{width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},seguidores:{margin:20,alignItems:"center"},seguidoresNumero:{color:"#8A07DA",fontSize:15},seguidoresTexto:{color:"#95A8B2",fontSize:13,marginTop:5},repositorios:{color:"#8A07DA",fontSize:15,fontWeight:"400"}});const y=o(8615).default.create({baseURL:"https://api.github.com/"});function x(){return(x=(0,n.default)((function*(e){try{var t=yield y.get("users/"+e);return console.log("\ud83d\ude80 ~ file: usuarios.js:7 ~ buscaUsuario ~ resultado:",t.data),t.data}catch(o){return console.log(o),{}}}))).apply(this,arguments)}var j=o(7557);function b(e){var t=e.navigation,o=(0,r.useState)(""),a=(0,s.default)(o,2),i=a[0],h=a[1],y=(0,r.useState)({}),b=(0,s.default)(y,2),v=b[0],C=b[1];function S(){return S=(0,n.default)((function*(){var e=yield function(e){return x.apply(this,arguments)}(i);h(""),e?C(e):(p.default.alert("Usuario nao encontrado"),C({}))})),S.apply(this,arguments)}return(0,j.jsx)(g.default,{children:(0,j.jsxs)(d.default,{style:m.container,children:[(null==v?void 0:v.login)&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.default,{style:m.fundo}),(0,j.jsx)(d.default,{style:m.imagemArea,children:(0,j.jsx)(u.default,{source:{uri:v.avatar_url},style:m.imagem})}),(0,j.jsx)(l.default,{style:m.textoNome,children:v.login}),(0,j.jsx)(l.default,{style:m.textoEmail,children:v.email}),(0,j.jsxs)(d.default,{style:m.seguidoresArea,children:[(0,j.jsxs)(d.default,{style:m.seguidores,children:[(0,j.jsx)(l.default,{style:m.seguidoresNumero,children:v.following}),(0,j.jsx)(l.default,{style:m.seguidoresTexto,children:"Seguidores"})]}),(0,j.jsxs)(d.default,{style:m.seguidores,children:[(0,j.jsx)(l.default,{style:m.seguidoresNumero,children:v.followers}),(0,j.jsx)(l.default,{style:m.seguidoresTexto,children:"Seguindo"})]})]}),(0,j.jsx)(c.default,{onPress:function(){return t.navigate("Repositorios",{nome:v.login})},children:(0,j.jsx)(l.default,{style:m.repositorios,children:"Ver os reposit\xf3rios"})})]}),(0,j.jsx)(f.default,{placeholder:"Buscar usu\xe1rio pelo nome",autoCapitalize:"none",value:i,onChangeText:h,style:m.entrada}),(0,j.jsx)(c.default,{onPress:function(){return S.apply(this,arguments)},style:m.botao,children:(0,j.jsx)(l.default,{style:m.textoBotao,children:"Buscar"})})]})})}var v=o(9566);const C=h.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},repositoriosTexto:{fontSize:21,fontWeight:"600",color:"#45565F",marginTop:20},titulo:{fontSize:20,fontWeight:"bold",marginBottom:20,color:"#fff",textAlign:"center"},repositorio:{width:"100%",backgroundColor:"#FFF",borderBottomWidth:1,borderBottomColor:"#ddd",paddingHorizontal:20,paddingVertical:10},repositorioNome:{fontSize:16,color:"#444",fontWeight:"bold"},repositorioData:{fontSize:14,color:"#999"},repositorioDataDescricao:{fontSize:14,color:"#6a6161"},botao:{backgroundColor:"#8A07DA",marginTop:20,marginBottom:30,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontSize:16,color:"#FFF"}});function S(){return(S=(0,n.default)((function*(e){try{return(yield y.get("users/"+e+"/repos")).data}catch(t){return[]}}))).apply(this,arguments)}function z(){return(z=(0,n.default)((function*(e,t,o,r){try{return yield y.put("/repos/"+r,{name:t,data:o,postId:e}),"sucesso"}catch(a){return"erro"}}))).apply(this,arguments)}function R(){return(R=(0,n.default)((function*(e,t,o){try{return yield y.post("/repos",{name:t,data:o,postId:e}),"sucesso"}catch(r){return console.log("\ud83d\ude80 ~ file: criarRepositoriosDoUsuario ~ error:",r),"erro"}}))).apply(this,arguments)}function T(){return(T=(0,n.default)((function*(e){try{return yield y.delete("/repos/"+e),"sucesso"}catch(t){return console.log("\ud83d\ude80 ~ file: criarRepositoriosDoUsuario ~ error:",t),"erro"}}))).apply(this,arguments)}var w=o(2727);function B(e){var t=e.route,o=e.navigation;console.log("\ud83d\ude80 ~ file: index.js:8 ~ Repositorios ~ route:",t);var a=(0,r.useState)([]),i=(0,s.default)(a,2),u=i[0],f=i[1];console.log("\ud83d\ude80 ~ file: index.js:10 ~ Repositorios ~ repo:",u);var p=(0,w.useIsFocused)();return(0,r.useEffect)((0,n.default)((function*(){var e=yield function(e){return S.apply(this,arguments)}(t.params.nome);f(e)})),[p]),(0,j.jsxs)(d.default,{style:C.container,children:[(0,j.jsxs)(l.default,{style:C.repositoriosTexto,children:[u.length," reposit\xf3rios criados"]}),(0,j.jsx)(c.default,{style:C.botao,onPress:function(){return o.navigate("CriarRepositorio",{id:t.params.id})},children:(0,j.jsx)(l.default,{style:C.textoBotao,children:"Adicionar novo reposit\xf3rio"})}),(0,j.jsx)(v.default,{data:u,style:{widt:"100%"},keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return(0,j.jsxs)(c.default,{style:C.repositorio,children:[(0,j.jsx)(l.default,{style:C.repositorioNome,onPress:function(){return o.navigate("InfoRepositorio",{item:t})},children:t.name}),(0,j.jsx)(l.default,{style:C.repositorioDataDescricao,children:t.description}),(0,j.jsxs)(l.default,{style:C.repositorioData,children:["T\xf3picos:"," ",t.topics.map((function(e){return(0,j.jsxs)(l.default,{style:{backgroundColor:"#eac0df",paddingHorizontal:15,borderRadius:10},children:[" ",e," "]})}))]}),(0,j.jsxs)(l.default,{style:C.repositorioData,children:["Criado em: ",t.created_at]}),(0,j.jsxs)(l.default,{style:C.repositorioData,children:["Atualizado em: ",t.pushed_at]})]})}})]})}const k=h.default.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",justifyContent:"center"},botao:{backgroundColor:"#8A07DA",marginTop:20,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontWeight:"bold",fontSize:16,color:"#fff"},entrada:{borderWidth:2,borderColor:"#ddd",paddingHorizontal:20,fontSize:16,color:"#444",marginTop:20,borderRadius:8,height:44,width:"90%"}});function D(e){var t=e.route,o=e.navigation;console.log("\ud83d\ude80 ~ file: index.js:7 ~ CriarRepositorio ~ route:",t);var a=(0,r.useState)(""),i=(0,s.default)(a,2),u=i[0],g=i[1],h=(0,r.useState)(""),m=(0,s.default)(h,2),y=m[0],x=m[1];function b(){return b=(0,n.default)((function*(){console.log("\ud83d\ude80 ~ file: index.js:12 ~ criarRepositorio ~ route.params.id:",t.params.id);var e=yield function(e,t,o){return R.apply(this,arguments)}(t.params.id,u,y);"sucesso"===e?(p.default.alert("Repositorio atualizado!"),o.goBack()):p.default.alert("Erro")})),b.apply(this,arguments)}return(0,j.jsxs)(d.default,{style:k.container,children:[(0,j.jsx)(f.default,{placeholder:"Nome do reposit\xf3rio",autoCapitalize:"none",style:k.entrada,value:u,onChangeText:g}),(0,j.jsx)(f.default,{placeholder:"Data de cria\xe7\xe3o",autoCapitalize:"none",style:k.entrada,value:y,onChangeText:x}),(0,j.jsx)(c.default,{style:k.botao,onPress:function(){return function(){return b.apply(this,arguments)}()},children:(0,j.jsx)(l.default,{style:k.textoBotao,children:"Criar"})})]})}const A=h.default.create({container:{flex:1,backgroundColor:"#fafafa",alignItems:"center",justifyContent:"center"},botao:{backgroundColor:"#8A07DA",marginTop:50,padding:10,alignItems:"center",justifyContent:"center",borderRadius:8,width:"90%"},textoBotao:{fontWeight:"bold",fontSize:16,color:"#fff"},entrada:{borderWidth:2,borderColor:"#ddd",paddingHorizontal:20,fontSize:16,color:"#444",marginTop:20,borderRadius:8,height:44,width:"90%"}});function I(e){var t=e.route,o=e.navigation,a=(0,r.useState)(t.params.item.name),i=(0,s.default)(a,2),u=i[0],g=i[1],h=(0,r.useState)(t.params.item.data),m=(0,s.default)(h,2),y=m[0],x=m[1];function b(){return b=(0,n.default)((function*(){var e=yield function(e,t,o,r){return z.apply(this,arguments)}(t.params.item.postId,u,y,t.params.item.id);"sucesso"===e?(p.default.alert("Reposit\xf3rio atualizado!"),o.goBack()):p.default.alert("Erro ao autualizar reposit\xf3rio")})),b.apply(this,arguments)}function v(){return v=(0,n.default)((function*(){var e=yield function(e){return T.apply(this,arguments)}(t.params.item.id);"sucesso"===e?(p.default.alert("Reposit\xf3rio deletado!"),o.goBack()):p.default.alert("Erro ao autualizar reposit\xf3rio")})),v.apply(this,arguments)}return(0,j.jsxs)(d.default,{style:A.container,children:[(0,j.jsx)(f.default,{placeholder:"Nome do reposit\xf3rio",autoCapitalize:"none",style:A.entrada,value:u,onChangeText:g}),(0,j.jsx)(f.default,{placeholder:"Data de cria\xe7\xe3o",autoCapitalize:"none",style:A.entrada,value:y,onChangeText:x}),(0,j.jsx)(c.default,{style:A.botao,onPress:function(){return function(){return b.apply(this,arguments)}()},children:(0,j.jsx)(l.default,{style:A.textoBotao,children:"Salvar"})}),(0,j.jsx)(c.default,{onPress:function(){return function(){return v.apply(this,arguments)}()},style:[A.botao,{backgroundColor:"#DD2B2B",marginTop:10}],children:(0,j.jsx)(l.default,{style:A.textoBotao,children:"Deletar"})})]})}var F=(0,i.default)();function O(){return(0,j.jsx)(a.default,{children:(0,j.jsxs)(F.Navigator,{children:[(0,j.jsx)(F.Screen,{name:"Principal",options:{title:"Busque um perfil no github"},component:b}),(0,j.jsx)(F.Screen,{name:"Repositorios",component:B}),(0,j.jsx)(F.Screen,{name:"CriarRepositorio",options:{title:"Criar Reposit\xf3rio"},component:D}),(0,j.jsx)(F.Screen,{name:"InfoRepositorio",options:{title:"Reposit\xf3rio Info"},component:I})]})})}function P(){return(0,j.jsx)(O,{})}}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,(()=>{var e=[];o.O=(t,r,a,i)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,a,i]=e[u],s=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[n,s,l]=r,d=0;if(n.some((t=>0!==e[t]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(t&&t(r);d<n.length;d++)i=n[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[473],(()=>o(9484)));r=o.O(r)})();
//# sourceMappingURL=main.c270bee3.js.map