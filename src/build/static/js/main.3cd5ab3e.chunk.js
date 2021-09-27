(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{26:function(e,r,n){},27:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n(5),i=n.n(a),s=n(3),c=n(10),o=n(14),d=n(4),u=n(2),l="SET_FRIEND_NAME",f="ADD_FRIEND_TO_LIST",j="SET_SEARCH_TERM",b="DELETE_FRIEND",O="ADD_TO_FAVOURITE",m="REMOVE_FROM_FAVOURITE",h="SORT_BY_FAVOURITE",p="SET_ERROR_MSG",v="HANDLE_PAGINATION_CLICK",g={friendName:"",friendList:[],searchTerm:"",favFriends:[],errorMessage:"",currentPage:1,friendsPerPage:4},y=c.b;var x=Object(c.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case l:return Object(u.a)(Object(u.a)({},e),{},{friendName:r.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{errorMessage:r.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{currentPage:Number(r.payload)});case f:return Object(u.a)(Object(u.a)({},e),{},{friendList:Object(d.a)(r.payload),errorMessage:""});case j:return Object(u.a)(Object(u.a)({},e),{},{searchTerm:r.payload,errorMessage:""});case b:case O:case m:case h:return Object(u.a)(Object(u.a)({},e),{},{friendList:Object(d.a)(r.payload)});default:return e}}),y(Object(c.a)(o.a)));function N(e){return{type:p,payload:e}}var F=n(1),T={setFriendName:function(e){return{type:l,payload:e}},addFriendToList:function(e){return function(r,n){var t=n().friendList;-1===t.indexOf(e)&&t.push({name:e,is_favourite:!1,id:t.length}),r({type:f,payload:t})}},setErrorMessage:N},E=Object(s.b)((function(e){return{friendName:e.friendName,friendList:e.friendList}}),T)((function(e){var r=e.friendName,n=e.setFriendName,t=e.addFriendToList,a=e.setErrorMessage;e.friendList;return Object(F.jsx)("div",{className:"add-friend-container",children:Object(F.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),""===r?a("Please enter friend name"):t(r)}(e)},children:Object(F.jsx)("input",{id:"friendName",name:"friendName",value:r,onChange:function(e){return n(e.target.value)},placeholder:"Enter your friend's name"})})})})),_=n(6),L=n(7),P=n(9),C=n(8),M=function(e){Object(P.a)(n,e);var r=Object(C.a)(n);function n(){var e;Object(_.a)(this,n);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=r.call.apply(r,[this].concat(a))).renderFriendList=function(){var r=e.props,n=r.friendList,t=r.deleteFriend,a=r.addToFavourite,i=r.removeFromFavourite,s=(r.favFriends,r.currentPage),c=r.friendsPerPage,o=s*c,d=o-c,u=n.slice(d,o).map((function(e,r){return Object(F.jsxs)("li",{id:"friend",className:"friend",children:[Object(F.jsx)("a",{href:"#",className:"friend-name",children:e.name}),Object(F.jsx)("span",{className:"material-icons outlined delete",onClick:function(){return t(e)},children:"delete_outline"}),!e.is_favourite&&Object(F.jsx)("span",{className:"material-icons fav",onClick:function(){return a(e)},children:"star_border"}),e.is_favourite&&Object(F.jsx)("span",{className:"material-icons fav",onClick:function(){return i(e)},children:"star"}),Object(F.jsx)("div",{className:"sub-text",children:"is your friend"})]},r)}));return Object(F.jsx)("ul",{id:"friend-list",className:"friend-list",children:u})},e}return Object(L.a)(n,[{key:"render",value:function(){return Object(F.jsx)("div",{children:this.renderFriendList()})}}]),n}(t.Component),R={deleteFriend:function(e){return function(r,n){var t=n().friendList,a=t.indexOf(e);a>-1&&t.splice(a,1),r({type:b,payload:t})}},addToFavourite:function(e){return function(r,n){var t=n().friendList,a=t,i=a.indexOf(e);i>-1&&e===t[i]&&(e.is_favourite=!0),r({type:O,payload:a})}},removeFromFavourite:function(e){return function(r,n){var t=n().friendList,a=t.indexOf(e);a>-1&&e===t[a]&&(e.is_favourite=!1),r({type:m,payload:t})}}},I=Object(s.b)((function(e){return{friendList:e.friendList,favFriends:e.favFriends,currentPage:e.currentPage,friendsPerPage:e.friendsPerPage}}),R)(M),k={setSearchTerm:function(e){return{type:j,payload:e}},setErrorMessage:N,searchFriend:function(e){return function(e,r){var n,t,a,i;for(n=document.getElementById("searchTerm").value.toUpperCase(),t=document.getElementById("friend-list").getElementsByTagName("li"),i=0;i<t.length;i++)((a=t[i].getElementsByTagName("a")[0]).textContent||a.innerText).toUpperCase().indexOf(n)>-1?t[i].style.display="":t[i].style.display="none"}}},A=Object(s.b)((function(e){return{searchTerm:e.searchTerm}}),k)((function(e){var r=e.searchTerm,n=e.setSearchTerm,t=e.searchFriend,a=(e.friendName,e.setErrorMessage);return Object(F.jsxs)("div",{className:"search-friend-container",children:[Object(F.jsx)("input",{id:"searchTerm",name:"searchTerm",value:r,onChange:function(e){return n(e.target.value)},placeholder:"search",className:"search-box"}),Object(F.jsx)("span",{class:"material-icons search",onClick:function(){""===r?a("Please enter search value"):t(r)},children:"search"})]})})),D={sortByFavourite:function(e){return function(e,r){var n=r().friendList.sort((function(e,r){return r.is_favourite-e.is_favourite}));e({type:h,payload:n})}}},S=Object(s.b)(null,D)((function(e){var r=e.sortByFavourite;return Object(F.jsx)("div",{className:"sort-by-fav",onClick:r,children:Object(F.jsx)("span",{class:"material-icons outlined sort",children:"sort"})})})),B=Object(s.b)((function(e){return{errorMessage:e.errorMessage}}))((function(e){var r=e.errorMessage;return Object(F.jsx)("div",{className:"error-msg-container",children:r})})),U=function(e){Object(P.a)(n,e);var r=Object(C.a)(n);function n(){return Object(_.a)(this,n),r.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){for(var e=this.props,r=e.friendList,n=e.friendsPerPage,t=e.handlePaginationClick,a=[],i=1;i<=Math.ceil(r.length/n);i++)a.push(i);var s=a.map((function(e){return Object(F.jsx)("li",{className:"page",id:e,onClick:function(e){return t(e.target.id)},children:e},e)}));return Object(F.jsx)("div",{id:"page-numbers",className:"page-numbers",children:s})}}]),n}(t.Component),w={handlePaginationClick:function(e){return{type:v,payload:e}}},V=Object(s.b)((function(e){return{friendList:e.friendList,currentPage:e.currentPage,friendsPerPage:e.friendsPerPage}}),w)(U),G=function(){return Object(F.jsxs)("div",{className:"friends-list-container",children:[Object(F.jsx)("div",{className:"title",children:"Friends List"}),Object(F.jsx)(E,{}),Object(F.jsx)(A,{}),Object(F.jsx)(B,{}),Object(F.jsx)(S,{}),Object(F.jsx)(I,{}),Object(F.jsx)(V,{})]})},H=(n(26),document.getElementById("root"));i.a.render(Object(F.jsx)(s.a,{store:x,children:Object(F.jsx)(G,{})}),H)}},[[27,1,2]]]);
//# sourceMappingURL=main.3cd5ab3e.chunk.js.map