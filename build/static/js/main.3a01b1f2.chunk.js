(this.webpackJsonptravelatr=this.webpackJsonptravelatr||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(19),i=n.n(a),r=n(5),o=(n(25),n(15)),j=n(2),l=(n(26),n(3)),d=n(10),b=n(8),h=n(0),u=function(e){var t=e.setUser,n=e.isShowLogin,s=Object(c.useState)({username:"",password:""}),a=Object(j.a)(s,2),i=a[0],r=a[1],o=Object(c.useState)([]),u=Object(j.a)(o,2),O=u[0],x=u[1],m=Object(l.f)();function p(e){r(Object(b.a)(Object(b.a)({},i),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(h.jsx)("div",{className:"".concat(n?"active":""," show"),children:Object(h.jsx)("div",{className:"login-form",children:Object(h.jsx)("div",{className:"formbox center",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:7000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json().then((function(t){if(e.ok)return t;throw t}))})).then((function(e){var n=e.user,c=e.token;localStorage.setItem("token",c),t(n),m.push("/"),setTimeout((function(){window.location.reload()}),0)})).catch((function(e){console.log(e,"login error"),e&&x(e.errors)}))},children:[Object(h.jsx)("div",{className:"icon center",children:Object(h.jsx)("i",{className:"far fa-user fa-2x"})}),Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"username",id:"",placeholder:"Enter Username",value:i.username,onChange:p}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"password",id:"",placeholder:"Enter Password",value:i.password,onChange:p}),Object(h.jsx)("br",{})]}),O.map((function(e){return Object(h.jsx)("p",{style:{color:"red"},children:e},e)})),Object(h.jsx)("button",{type:"submit",className:"btn",children:"LOGIN"})]})})})})};var O=function(e){var t=e.user,n=e.setUser,s=Object(c.useState)(!0),a=Object(j.a)(s,2),i=a[0],o=a[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)(r.b,{to:"/",id:"logo",children:Object(h.jsx)("i",{className:"fas fa-map-marked-alt",children:"Sky Tours & Travel"})}),Object(h.jsx)(r.b,{to:"/",className:"home-text",children:"Home"})]}),Object(h.jsx)("div",{children:t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.b,{to:"/destination-list",className:"destination-btn",children:"Destinations"}),Object(h.jsx)(r.b,{to:"/profile",className:"favorite",children:"My Favorite"}),Object(h.jsx)(r.b,{to:"/profile",className:"profile",children:Object(h.jsx)("i",{className:"far fa-user-circle"})}),Object(h.jsx)(r.b,{to:"/",onClick:function(){localStorage.removeItem("token"),n(null)},className:"logout-btn",children:"Logout"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(r.b,{to:"/",onClick:function(){o((function(e){return!e})),console.log(i)},className:"loginicon",children:[i,"Sign In"]}),Object(h.jsx)(r.b,{to:"/signup",className:"loggedinicon",children:"Sign Up"}),Object(h.jsx)(l.c,{children:Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(u,{setUser:n,isShowLogin:i})})})]})})]})})},x=n.p+"static/media/JakobOwens-img.4e3dfab9.jpeg";var m=function(e){var t=e.setUser,n=Object(c.useState)({first_name:"",last_name:"",username:"",location:"",password:""}),s=Object(j.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)([]),o=Object(j.a)(r,2),u=o[0],O=o[1],m=Object(l.f)();function p(e){i(Object(b.a)(Object(b.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))}var f=a.first_name,v=a.last_name,g=a.location,y=a.username,N=a.password;return Object(h.jsxs)("div",{className:"signup-form",children:[Object(h.jsx)("div",{className:"form-box center",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:7000/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json().then((function(t){if(e.ok)return t;throw t}))})).then((function(e){var n=e.user,c=e.token;localStorage.setItem("token",c),t(n),m.push("/"),setTimeout((function(){window.location.reload()}),0)})).catch((function(e){O(e.errors)}))},children:[Object(h.jsx)("div",{className:"icon center",children:Object(h.jsx)("i",{className:"far fa-user fa-2x"})}),Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"first_name",id:"",placeholder:"Enter first name",value:f,onChange:p}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"last_name",id:"",placeholder:"Enter last name",value:v,onChange:p}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Location"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"location",id:"",placeholder:"Enter location",value:g,onChange:p}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"username",id:"",placeholder:"Enter username",value:y,onChange:p}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"password",id:"",placeholder:"Enter password",value:N,onChange:p}),Object(h.jsx)("br",{})]}),u.map((function(e){return Object(h.jsx)("p",{style:{color:"red"},children:e},e)})),Object(h.jsx)("button",{type:"submit",className:"btn",children:"SIGN UP"})]})}),Object(h.jsx)("img",{id:"background-img",src:x,alt:"background-img"})]})},p=function(e){var t=e.destination,n=t.id,c=t.name,s=t.image,a=t.description,i=t.likes,r=Object(l.f)();return Object(h.jsxs)("div",{className:"destination-card",children:[Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:s,alt:c})}),Object(h.jsx)("h3",{children:c}),Object(h.jsx)("p",{children:a}),Object(h.jsxs)("label",{className:"like",children:["\u2665",i.length]}),Object(h.jsx)("button",{className:"view-more-btn",onClick:function(){r.push("/destination/".concat(n))},children:"View More"})]})},f=function(e){var t=e.favoriteList,n=e.isLoaded,c=e.handleAddFavorite,s=e.handleDeleteFavorite,a=(e.likesCount,e.destinations);if(console.log(a),!n)return Object(h.jsx)("h2",{children:"Loading..."});var i=function(e){var t=e.target.id;fetch("http://localhost:7000/favorites/".concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then(s)},r=t.map((function(e){return Object(h.jsxs)("span",{style:{width:"300px"},children:[Object(h.jsx)(p,{destination:e.destination,handleAddFavorite:c}),Object(h.jsxs)("button",{id:e.id,className:"delete-btn",onClick:i,children:[Object(h.jsx)("i",{className:"fas fa-trash-alt"}),"REMOVE"]})]},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"My Favorite List"}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"destination",children:t?r:"loading"})]})},v=function(e){var t=e.user,n=e.setUser,s=e.handleAddFavorite,a=e.handleDeleteFavorite,i=e.favoriteList,r=e.isLoaded,o=Object(c.useState)({first_name:t.first_name,last_name:t.last_name,username:t.username,location:t.location,password:t.password}),l=Object(j.a)(o,2),u=l[0],O=l[1];function x(e){O(Object(b.a)(Object(b.a)({},u),{},Object(d.a)({},e.target.name,e.target.value)))}var m=u.first_name,p=u.last_name,v=u.location,g=u.username,y=u.password;return Object(h.jsxs)("div",{className:"container-box",children:[Object(h.jsx)("div",{className:"profile-form",onSubmit:function(e){e.preventDefault();var t=localStorage.getItem("token");fetch("http://localhost:7000/me",{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(u)}).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}))},children:Object(h.jsxs)("form",{className:"my-profile",children:[Object(h.jsxs)("h1",{children:[t.username,"'s Profile"]}),Object(h.jsx)("label",{children:"First Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"first_name",className:"profile-box",value:m,onChange:x}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Last Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"last_name",className:"profile-box",value:p,onChange:x}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Location"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"location",className:"profile-box",value:v,onChange:x}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"username",className:"profile-box",value:g,onChange:x}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",name:"password",className:"profile-box",value:y,onChange:x}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Update",className:"update-btn"})]})}),Object(h.jsx)("div",{className:"favorite-list",children:Object(h.jsx)(f,{user:t,handleAddFavorite:s,handleDeleteFavorite:a,favoriteList:i,isLoaded:r})})]})},g=n.p+"static/media/background.be237f4c.jpeg",y=function(){return Object(h.jsxs)("div",{className:"home-page",children:[Object(h.jsx)("h3",{children:"To travel is to live"}),Object(h.jsx)("h1",{children:"Your Journey Begins"}),Object(h.jsx)("img",{id:"background-img",src:g,alt:"background"})]})},N=function(e){var t=e.name,n=(e.toggleSearch,Object(c.useState)([])),s=Object(j.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)([]),o=Object(j.a)(r,2),l=o[0],u=o[1],O=Object(c.useState)([]),x=Object(j.a)(O,2),m=x[0],p=x[1],f=Object(c.useState)({country:"",currency:"",destination:"",outbound:"",origin:"",inbound:""}),v=Object(j.a)(f,2),g=v[0],y=v[1],N=function(e){y(Object(b.a)(Object(b.a)({},g),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"flight-search-form",children:Object(h.jsx)("div",{className:"search-box",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch(""===g.inbound?"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/".concat(g.country,"/").concat(g.currency,"/en-US/").concat(g.origin,"-sky/").concat(g.destination,"-sky/").concat(g.outbound):"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/".concat(g.country,"/").concat(g.currency,"/en-US/").concat(g.origin,"-sky/").concat(g.destination,"-sky/").concat(g.outbound,"?inboundpartialdate=").concat(g.inbound),{method:"GET",headers:{"x-rapidapi-key":"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SKY_KEY),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){!function(e){var t=e.Carriers.map((function(e){return Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Carrier Id"}),Object(h.jsx)("th",{children:"Airline"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.CarrierId}),Object(h.jsx)("td",{children:e.Name})]})]},e.Name)}));i(t);var n=e.Places.map((function(e){return Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Airport"}),Object(h.jsx)("th",{children:"Location"}),Object(h.jsx)("th",{children:"Airport code"}),Object(h.jsx)("th",{children:"Place Id"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.Name}),Object(h.jsxs)("td",{children:[e.CityName," - ",e.CountryName]}),Object(h.jsx)("td",{children:e.SkyscannerCode}),Object(h.jsx)("td",{children:e.PlaceId})]})]},e.Name)}));u(n);var c=e.Quotes.map((function(e){return Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Flight type"}),Object(h.jsx)("th",{children:"Minimum Price"}),Object(h.jsx)("th",{children:"Carrier Id"}),Object(h.jsx)("th",{children:"Departure date"}),Object(h.jsx)("th",{children:"Quote date"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.Direct?"Direct":"Indirect"}),Object(h.jsxs)("td",{children:["$ ",e.MinPrice]}),Object(h.jsx)("td",{children:e.OutboundLeg.CarrierIds}),Object(h.jsx)("td",{children:e.OutboundLeg.DepartureDate}),Object(h.jsx)("td",{children:e.QuoteDateTime})]})]},e.QuoteId)}));p(c)}(e),console.log(e)})).catch((function(e){console.error(e)}))},children:[Object(h.jsxs)("h3",{id:"flight-text",children:["Search for flight to ",t]}),Object(h.jsx)("label",{children:"Country:"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"country",value:g.country,onChange:N,placeholder:"Country you're currently in..."}),Object(h.jsx)("label",{children:"Currency:"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"currency",value:g.currency,onChange:N,placeholder:"Currency for flight results..."}),Object(h.jsx)("label",{children:"Destination:"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"destination",value:g.destination,onChange:N,placeholder:"Destination airport code..."}),Object(h.jsx)("label",{children:"Outbound Date:"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"outbound",value:g.outbound,onChange:N,placeholder:"Outbound date yyyy-mm-dd, or 'anytime'..."}),Object(h.jsx)("label",{children:"Origin:"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"origin",value:g.origin,onChange:N,placeholder:"Origin airport code..."}),Object(h.jsx)("label",{children:"Inbound Date:"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"inbound",value:g.inbound,onChange:N,placeholder:"Inbound date yyyy-mm-dd, or 'anytime' (leave blank if one way \ud83d\ude09)..."}),Object(h.jsx)("button",{type:"submit",className:"flight-search-button",children:"Search"})]})})}),Object(h.jsxs)("div",{className:"flight-info",children:[a,l,m]})]})};function S(e){var t=e.review,n=t.author_name,c=t.profile_photo_url,s=t.rating,a=t.relative_time_description,i=t.text;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{children:n}),Object(h.jsx)("img",{src:c,alt:"avatar"}),Object(h.jsxs)("p",{children:[s," | ",a]}),Object(h.jsx)("p",{children:i})]})}function C(e){var t=e.reviews.map((function(e){return Object(h.jsx)(S,{review:e},e.author_name)}));return Object(h.jsx)("div",{children:t})}function k(e){var t=e.photo;return Object(h.jsx)("img",{src:t,alt:"google-img"})}function w(e){var t=e.photos,n=Object(c.useState)(0),s=Object(j.a)(n,2),a=s[0],i=s[1],r=t.slice(a,a+2).map((function(e){return Object(h.jsx)(k,{photo:e},e)}));return Object(h.jsxs)("div",{className:"photo-container",children:[Object(h.jsx)("div",{children:r}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"flight-button more",onClick:function(){i((function(e){return(e+2)%t.length}))},children:Object(h.jsx)("i",{class:"fas fa-chevron-right"})})})]})}var _=function(e){var t=e.user,n=e.handleAddFavorite,s=e.favoriteList,a=Object(c.useState)(null),i=Object(j.a)(a,2),r=i[0],o=i[1],d=Object(c.useState)(!1),b=Object(j.a)(d,2),u=b[0],O=b[1],x=Object(c.useState)(!1),m=Object(j.a)(x,2),p=m[0],f=m[1],v=Object(c.useState)(!1),g=Object(j.a)(v,2),y=g[0],S=g[1],k=Object(l.g)().id;if(Object(c.useEffect)((function(){fetch("http://localhost:7000/destinations/".concat(k)).then((function(e){return e.json()})).then((function(e){var t=s.find((function(e){return e.destination.id===parseInt(k)}));f(!!t),o(e),O(!0)}))}),[k,s]),!u)return Object(h.jsx)("h2",{className:"loading",children:"Loading..."});var _=r.name,L=r.image,F=r.description,T=r.us,E=r.airport_code,D=r.photos,P=r.rating,A=r.reviews,I=r.user_ratings_total,U=r.likes;return Object(h.jsxs)("div",{className:"details-box",children:[Object(h.jsx)("div",{className:"img-details",children:Object(h.jsx)("img",{src:L,alt:_})}),Object(h.jsxs)("div",{className:"destination-details",children:[Object(h.jsx)("h3",{children:_}),Object(h.jsx)("p",{children:F}),Object(h.jsx)("h4",{children:T?"Domestic":"International"}),Object(h.jsxs)("h5",{children:["Airport code: ",E]}),Object(h.jsxs)("span",{className:"like-btn",onClick:function(){fetch("http://localhost:7000/likes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,destination_id:k})}).then((function(e){return e.json()})).then((function(e){o(e),console.log(e)}))},children:["\u2665 ",Object(h.jsxs)("strong",{children:[U.length," Likes"]})]}),Object(h.jsxs)("button",{className:"fav-btn",onClick:function(){fetch("http://localhost:7000/favorites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.id,destination_id:k})}).then((function(e){return e.json()})).then((function(e){!function(e){f((function(e){return!e})),n(e)}(e)}))},children:[p?"Added":"Add"," to favorites"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("button",{className:"flight-button more",onClick:function(){S((function(e){return!e}))},children:[y?"Hide":"Show"," Flight Search "]}),y&&Object(h.jsx)(N,{toggleSearch:y,name:_})]}),Object(h.jsx)("div",{className:"review-details",children:Object(h.jsxs)("span",{style:{display:P?"block":"none"},children:[Object(h.jsx)("p",{children:P}),Object(h.jsx)("p",{children:A?Object(h.jsx)(C,{reviews:A}):null}),Object(h.jsxs)("p",{children:[I," reviews "]})]})}),Object(h.jsx)(w,{photos:D})]})},L=function(e){var t=e.searchText,n=e.onSearch,c=e.checkBox,s=e.onCheckBox,a=e.sort,i=e.onSort;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:"search",children:[Object(h.jsx)("input",{className:"search-name",type:"text",placeholder:"Search place name...",value:t,onChange:n}),Object(h.jsx)("button",{className:"search-button",type:"submit",children:Object(h.jsx)("i",{className:"fas fa-search-location"})})]}),Object(h.jsx)("label",{id:"checkbox-label",children:"International"}),Object(h.jsx)("input",{type:"checkbox",id:"checkbox",checked:c?"true":"",onChange:s}),Object(h.jsx)("label",{id:"sort-text",children:"Sort by"}),Object(h.jsxs)("select",{className:"ui fluid dropdown",id:"sort",value:a,onChange:i,children:[Object(h.jsx)("option",{value:"popularity",children:"Popularity"}),Object(h.jsx)("option",{value:"name",children:"Name"})]})]})},F=n.p+"static/media/beach.f1deb69a.jpeg",T=function(e){var t=e.destinations,n=e.isLoaded,s=e.handleAddFavorite,a=Object(c.useState)(""),i=Object(j.a)(a,2),r=i[0],l=i[1],d=Object(c.useState)(!1),b=Object(j.a)(d,2),u=b[0],O=b[1],x=Object(c.useState)("popularity"),m=Object(j.a)(x,2),f=m[0],v=m[1],g=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})),y=Object(o.a)(g).filter((function(e){return u?!e.us:e})).sort((function(e,t){return"name"===f?e.name.localeCompare(t.name):0})).map((function(e){return Object(h.jsx)(p,{destination:e,handleAddFavorite:s},e.id)}));return n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"destination-container",children:[Object(h.jsx)("h1",{children:"PLAN YOUR ESCAPE"}),Object(h.jsx)(L,{searchText:r,onSearch:function(e){l(e.target.value)},checkBox:u,onCheckBox:function(){O((function(e){return!e}))},sort:f,onSort:function(e){v(e.target.value)}}),Object(h.jsx)("img",{id:"landscape-img",src:F,alt:"landscape"})]}),Object(h.jsx)("div",{className:"destination",children:y})]}):Object(h.jsx)("h2",{children:"Loading..."})};var E=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),i=Object(j.a)(a,2),r=i[0],d=i[1],b=Object(c.useState)(!1),u=Object(j.a)(b,2),x=u[0],p=u[1],f=Object(c.useState)(null),g=Object(j.a)(f,2),N=g[0],S=g[1];function C(e){S([].concat(Object(o.a)(N),[e])),console.log(e,"new favorite")}return Object(c.useEffect)((function(){fetch("http://localhost:7000/destinations").then((function(e){return e.json()})).then((function(e){d(e),p(!0)}))}),[]),Object(c.useEffect)((function(){var e=localStorage.getItem("token");fetch("http://localhost:7000/me",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json().then((function(t){if(e.ok)return t;throw t}))})).then((function(e){s(e),console.log(e.favorites,"user's favs"),S(e.favorites)}))}),[]),console.log(N,"fav list"),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{user:n,setUser:s}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/signup",children:Object(h.jsx)(m,{setUser:s})}),Object(h.jsx)(l.a,{exact:!0,path:"/profile",children:Object(h.jsx)(v,{user:n,setUser:s,handleAddFavorite:C,handleDeleteFavorite:function(e){var t=N.filter((function(t){return t.id!==e.id}));S(t)},favoriteList:N,isLoaded:x})}),Object(h.jsx)(l.a,{exact:!0,path:"/destination-list",children:Object(h.jsx)(T,{destinations:r,isLoaded:x})}),Object(h.jsx)(l.a,{exact:!0,path:"/destination/:id",children:Object(h.jsx)(_,{user:n,handleAddFavorite:C,favoriteList:N})}),Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(y,{setUser:s})})]})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(E,{})})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.3a01b1f2.chunk.js.map