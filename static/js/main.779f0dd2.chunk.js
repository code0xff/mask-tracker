(this["webpackJsonpmask-tracker"]=this["webpackJsonpmask-tracker"]||[]).push([[0],{16:function(e,t,a){e.exports=a(23)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=a(8),i=a(9),l=a(14),m=a(11),u=a(13),d=(a(6),a(26)),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={stores:[],storeIdList:[],distance:500},a.search=function(){var e=a.state.distance;e+500<=5e3&&a.setState({distance:e+500}),a.load()},a.load=function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude,r=a.state,s=r.distance,c=r.stores,o=r.storeIdList,i=c,l=o;fetch("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=".concat(t,"&lng=").concat(n,"&m=").concat(s)).then((function(e){return e.json()})).then((function(e){e.stores.forEach((function(e){-1===l.indexOf(e.code)&&(e.distance=(s/1e3).toFixed(1),e.remain_level=a.getRemainLevel(e.remain_stat),l.push(e.code),i.push(e))})),i.sort((function(e,t){return e.remain_level<=t.remain_level?1:-1})),a.setState({stores:i})}))}))},a.getRemainLevel=function(e){switch(e){case"plenty":return 5;case"some":return 4;case"few":return 3;case"empty":return 2;case"break":return 1;default:return 0}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){var e=this.state,t=e.stores,a=e.distance;return r.a.createElement("div",{className:"app"},r.a.createElement(d.a,{onClick:this.search},"\ub354 \ub113\uac8c \ucc3e\uc544\ubcf4\uae30 [",(a/1e3).toFixed(1),"km]"),r.a.createElement("div",{className:"app-contents"},t.map((function(e,t){return r.a.createElement(w,{key:t,store:e})}))))}}]),t}(n.Component),f=(a(21),p),y=a(25),v=a(24),h={plenty:{message:"100\uac1c \uc774\uc0c1",style:"success"},some:{message:"30 - 99",style:"warning"},few:{message:"2 - 29",style:"danger"},empty:{message:"0 - 1",style:"dark"},break:{message:"\ud310\ub9e4\uc911\uc9c0",style:"secondary"}};function k(e){return h[e]?h[e].style:"secondary"}function g(e){return e.name+","+e.lat+","+e.lng}function E(e){window.open("https://map.kakao.com/link/map/".concat(e.target.name))}function b(e){return"empty"===e?{opacity:"0.6"}:e&&"break"!==e?void 0:{opacity:"0.4"}}a(22);var w=function(e){var t=e.store;return r.a.createElement("div",{className:"store",style:b(t.remain_stat)},r.a.createElement(y.a,{style:{width:"20rem"},border:k(t.remain_stat)},r.a.createElement(y.a.Header,null,t.name),r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Text,null,t.addr),r.a.createElement(d.a,{variant:k(t.remain_stat),size:"sm",name:g(t),onClick:E},"\uc9c0\ub3c4\uc5d0\uc11c \ubcf4\uae30")),r.a.createElement(y.a.Footer,null,r.a.createElement(v.a,{pill:!0,variant:k(t.remain_stat)},t.distance,"km"),r.a.createElement(v.a,{pill:!0,variant:k(t.remain_stat)},h[t.remain_stat]?h[t.remain_stat].message:"\uc815\ubcf4\uc5c6\uc74c"))))};c.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.779f0dd2.chunk.js.map