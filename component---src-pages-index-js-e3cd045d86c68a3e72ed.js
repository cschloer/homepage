(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=(a(154),a(147)),l=a(148),c=a(4),u=a.n(c),d=a(149),p=a.n(d),f=a(150),m={tag:f.h,flush:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=e.flush,o=Object(l.a)(e,["className","cssModule","tag","flush"]),c=Object(f.e)(p()(t,"list-group",!!r&&"list-group-flush"),a);return s.a.createElement(n,Object(i.a)({},o,{className:c}))};h.propTypes=m,h.defaultProps={tag:"ul"};var g=h,b={tag:f.h,active:u.a.bool,disabled:u.a.bool,color:u.a.string,action:u.a.bool,className:u.a.any,cssModule:u.a.object},v=function(e){e.preventDefault()},y=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=e.active,o=e.disabled,c=e.action,u=e.color,d=Object(l.a)(e,["className","cssModule","tag","active","disabled","action","color"]),m=Object(f.e)(p()(t,!!r&&"active",!!o&&"disabled",!!c&&"list-group-item-action",!!u&&"list-group-item-"+u,"list-group-item"),a);return o&&(d.onClick=v),s.a.createElement(n,Object(i.a)({},d,{className:m}))};y.propTypes=b,y.defaultProps={tag:"li"};var w=y,E=a(171),x=a(172),j=a(173),N=["Python","JavaScript","React","React Native","Flask","SQL"],O=["Bash","HTML/CSS","Django","Java"],M=["MongoDB","C","PHP"],k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).renderList=function(e){return s.a.createElement(g,{flush:!0},e.map(function(e,t){return s.a.createElement(w,{key:t},e)}))},t}return r()(t,e),t.prototype.render=function(){return s.a.createElement(E.a,{className:"p-5"},s.a.createElement(x.a,null,s.a.createElement(j.a,null,s.a.createElement("h1",null,"about me"),s.a.createElement("p",null,"I am a full stack software developer with extensive experience working with React and python"))),s.a.createElement(x.a,null,s.a.createElement(j.a,null,s.a.createElement("h3",{style:{textShadow:"-1px 0 #ddfdff, 0 1px #ddfdff, 1px 0 #ddfdff, 0 -1px #ddfdff"}},"proficient"),this.renderList(N)),s.a.createElement(j.a,null,s.a.createElement("h3",{style:{textShadow:"-1px 0 #ddfdff, 0 1px #ddfdff, 1px 0 #ddfdff, 0 -1px #ddfdff"}},"experienced"),this.renderList(O)),s.a.createElement(j.a,null,s.a.createElement("h3",{style:{textShadow:"-1px 0 #ddfdff, 0 1px #ddfdff, 1px 0 #ddfdff, 0 -1px #ddfdff"}},"some experience"),this.renderList(M))))},t}(o.Component);t.default=k},143:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=(a(154),a(189)),l=a(171),c=a(172),u=a(173),d=a(153),p=a(160),f=a(158),m=a(141),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={viewport:{width:0,height:0}},t.updateWindowDimensions=function(){t.setState({viewport:{width:window.innerWidth,height:window.innerHeight}})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},a.render=function(){var e=this.state.viewport;return s.a.createElement(p.a,null,s.a.createElement(f.a,{title:"conrad schloer",keywords:["conrad","schloer"]}),s.a.createElement(d.b,{id:"home",style:{width:e.width,height:e.height}},s.a.createElement(i.a,{style:{borderBottomRightRadius:"30px",borderBottomLeftRadius:"30px"}},s.a.createElement(l.a,null,s.a.createElement(c.a,null,s.a.createElement(u.a,null,s.a.createElement("h1",null,"conrad schloer"),s.a.createElement(c.a,null,s.a.createElement("img",{src:"/static/profilepic.jpg",alt:"headshot",style:{width:150,height:150,borderRadius:75,overflow:"hidden",borderWidth:3,borderColor:"red"}})," "," ",s.a.createElement("h2",{className:"my-auto pl-3"},"freelance software developer"))))))),s.a.createElement(d.b,{id:"about me",style:{width:e.width,minHeight:e.height,borderTop:"1px solid grey"}},s.a.createElement(m.default,null)),s.a.createElement(d.b,{id:"skills",style:{width:e.width,minHeight:e.height,borderTop:"1px solid grey"}},s.a.createElement(l.a,{className:"p-5"},s.a.createElement(c.a,null,s.a.createElement(u.a,null,s.a.createElement("h1",null,"skills"),s.a.createElement("p",null,"- javascript"))))))},t}(o.Component);t.default=h},151:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(32),l=a.n(i);a.d(t,"a",function(){return l.a});a(152);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"personal"}}}}},157:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){"use strict";var n=a(159),r=a(0),o=a.n(r),s=a(4),i=a.n(s),l=a(163),c=a.n(l),u=a(151);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,i=e.title;return o.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d;var p="1025518380"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"personal",description:"Personal website for conrad schloer",author:"@cschloer"}}}}},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(156),s=a(0),i=a.n(s),l=a(4),c=a.n(l),u=a(151),d=a(153),p=(a(154),a(192)),f=a(193),m=a(194),h=a(196),g=a(195),b=(a(162),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.toggle=function(){var e=t.state.isOpen;t.setState({isOpen:!e})},t.renderSectionLink=function(e){return i.a.createElement(d.c,{section:e},function(t){var a=t.onClick,n=t.isSelected;return i.a.createElement(p.a,{className:n?"active":null},i.a.createElement("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),a()},style:{cursor:"pointer"}},e))})},t}return r()(t,e),t.prototype.render=function(){return i.a.createElement(f.a,{color:"inverse",light:!0,expand:"md",className:"navbarMedia",style:{right:0,position:"fixed",backgroundColor:"white",zIndex:1e3,opacity:.9,borderBottomLeftRadius:"30px",borderLeft:"1px solid grey",borderBottom:"1px solid grey"}},i.a.createElement(m.a,{onClick:this.toggle}),i.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(g.a,{className:"ml-auto",navbar:!0,style:{flexDirection:"column"}},this.renderSectionLink("home"),this.renderSectionLink("about me"),this.renderSectionLink("skills"))))},t}(s.Component));b.propTypes={},b.defaultProps={};var v=b,y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(u.b,{query:"1044757290",render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement(v,null),i.a.createElement("div",null,i.a.createElement("main",null,e.props.children))))},data:o})},t}(s.Component);y.propTypes={children:c.a.node.isRequired};t.a=y},161:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},171:function(e,t,a){"use strict";var n=a(147),r=a(148),o=a(0),s=a.n(o),i=a(4),l=a.n(i),c=a(149),u=a.n(c),d=a(150),p={tag:d.h,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.fluid,i=e.tag,l=Object(r.a)(e,["className","cssModule","fluid","tag"]),c=Object(d.e)(u()(t,o?"container-fluid":"container"),a);return s.a.createElement(i,Object(n.a)({},l,{className:c}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},172:function(e,t,a){"use strict";var n=a(147),r=a(148),o=a(0),s=a.n(o),i=a(4),l=a.n(i),c=a(149),u=a.n(c),d=a(150),p={tag:d.h,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},f=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,i=e.tag,l=e.form,c=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.e)(u()(t,o?"no-gutters":null,l?"form-row":"row"),a);return s.a.createElement(i,Object(n.a)({},c,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},173:function(e,t,a){"use strict";var n=a(147),r=a(148),o=a(161),s=a.n(o),i=a(0),l=a.n(i),c=a(4),u=a.n(c),d=a(149),p=a.n(d),f=a(150),m=u.a.oneOfType([u.a.number,u.a.string]),h=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(f.d)(m,'Please use the prop "order"'),pull:Object(f.d)(m,'Please use the prop "order"'),order:m,offset:m})]),g={tag:f.h,xs:h,sm:h,md:h,lg:h,xl:h,className:u.a.string,cssModule:u.a.object,widths:u.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,o=e.widths,i=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach(function(t,n){var r=e[t];if(delete c[t],r||""===r){var o=!n;if(s()(r)){var i,l=o?"-":"-"+t+"-",d=v(o,t,r.size);u.push(Object(f.e)(p()(((i={})[d]=r.size||""===r.size,i["order"+l+r.order]=r.order||0===r.order,i["offset"+l+r.offset]=r.offset||0===r.offset,i)),a))}else{var m=v(o,t,r);u.push(m)}}}),u.length||u.push("col");var d=Object(f.e)(p()(t,u),a);return l.a.createElement(i,Object(n.a)({},c,{className:d}))};y.propTypes=g,y.defaultProps=b,t.a=y},189:function(e,t,a){"use strict";var n=a(147),r=a(148),o=a(0),s=a.n(o),i=a(4),l=a.n(i),c=a(149),u=a.n(c),d=a(150),p={tag:d.h,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=e.fluid,l=Object(r.a)(e,["className","cssModule","tag","fluid"]),c=Object(d.e)(u()(t,"jumbotron",!!i&&"jumbotron-fluid"),a);return s.a.createElement(o,Object(n.a)({},l,{className:c}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-e3cd045d86c68a3e72ed.js.map