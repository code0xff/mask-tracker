(this["webpackJsonpmask-tracker"]=this["webpackJsonpmask-tracker"]||[]).push([[0],{30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),o=a(18),i=a(19),l=a(29),m=a(21),u=a(27),d=(a(8),a(43)),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={stores:[],storeIdList:[],distance:500,onSearching:!1},a.search=function(){var e=a.state.distance;e+500<=5e3&&a.setState({distance:e+500}),a.load()},a.load=function(){a.setState({onSearching:!0}),navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude,r=a.state,s=r.distance,c=r.stores,o=r.storeIdList,i=c,l=o;fetch("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=".concat(t,"&lng=").concat(n,"&m=").concat(s)).then((function(e){return e.json()})).then((function(e){e.stores.forEach((function(e){-1===l.indexOf(e.code)&&(e.distance=(s/1e3).toFixed(1),e.remain_level=a.getRemainLevel(e.remain_stat),l.push(e.code),i.push(e))})),i.sort((function(e,t){return e.remain_level<=t.remain_level?1:-1})),a.setState({stores:i,onSearching:!1})}))}))},a.getRemainLevel=function(e){switch(e){case"plenty":return 5;case"some":return 4;case"few":return 3;case"empty":return 2;case"break":return 1;default:return 0}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"render",value:function(){var e=this.state,t=e.stores,a=e.distance,n=e.onSearching;return r.a.createElement("div",{className:"app"},r.a.createElement(d.a,{onClick:this.search},"\ub354 \ub113\uac8c \ucc3e\uc544\ubcf4\uae30 [",(a/1e3).toFixed(1),"km]"),r.a.createElement("div",{className:"app-contents"},n?r.a.createElement(S,null):0===t.length?r.a.createElement(j,null):t.map((function(e,t){return r.a.createElement(b,{key:t,store:e})}))))}}]),t}(n.Component),p=(a(35),f),h=a(46),v=a(44),g={plenty:{message:"100\uac1c \uc774\uc0c1",style:"success"},some:{message:"30 - 99",style:"warning"},few:{message:"2 - 29",style:"danger"},empty:{message:"0 - 1",style:"dark"},break:{message:"\ud310\ub9e4\uc911\uc9c0",style:"secondary"}};function k(e){return g[e]?g[e].style:"secondary"}function E(e){return e.name+","+e.lat+","+e.lng}function y(e){window.open("https://map.kakao.com/link/map/".concat(e.target.name))}function w(e){window.open("https://map.kakao.com/link/search/".concat(e.target.name," \uacf5\uc801\ud310\ub9e4\ucc98"))}a(36);var b=function(e){var t=e.store;return r.a.createElement("div",{className:"store"},r.a.createElement(h.a,{style:{width:"20rem"},border:k(t.remain_stat)},r.a.createElement(h.a.Header,null,t.name),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Text,null,t.addr),r.a.createElement(d.a,{variant:k(t.remain_stat),size:"sm",name:E(t),onClick:y},"\uc9c0\ub3c4\uc5d0\uc11c \ubcf4\uae30"),"\xa0",r.a.createElement(d.a,{variant:k(t.remain_stat),size:"sm",name:t.name,onClick:w},"\uc815\ubcf4\uac80\uc0c9")),r.a.createElement(h.a.Footer,null,r.a.createElement(v.a,{pill:!0,variant:k(t.remain_stat)},t.distance,"km"),"\xa0",r.a.createElement(v.a,{pill:!0,variant:k(t.remain_stat)},g[t.remain_stat]?g[t.remain_stat].message:"\uc815\ubcf4\uc5c6\uc74c"))))},_=a(45);a(39);var j=function(){return r.a.createElement("div",{className:"empty"},r.a.createElement(_.a,{variant:"warning"},"\uadfc\ucc98\uc5d0 \uad6c\uc785\uac00\ub2a5 \ub9e4\uc7a5 \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",r.a.createElement("br",null),"\ub354 \ub113\uac8c \ucc3e\uc544\ubcf4\uae30\ub85c \ucd94\uac00 \uac80\uc0c9\ud574\ubcf4\uc138\uc694."))};a(40);var S=function(){return r.a.createElement("div",{className:"stand-by"},r.a.createElement(_.a,{variant:"success"},"\uacf5\uc801\ub9c8\uc2a4\ud06c \ud310\ub9e4 \uc57d\uad6d\uc744 \uac80\uc0c9\uc911\uc785\ub2c8\ub2e4..."))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.35089dc3.chunk.js.map