(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(21),o=a(4),r=a(5),c=a(6),s=a(8),l=a(7),i=a(9),u=a(0),h=a.n(u),f=a(12),m="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:d},p=function(e,t){return fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(o.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},k=function(e){return fetch("".concat(m,"/search"),{method:"POST",headers:Object(o.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=(a(24),a(3)),E=a(13);var g=function(e){for(var t=e.rating,a=e.numberOfStars,n=[],o=0;o<a;o++)o<t?n.push(h.a.createElement("span",{key:o,className:"fa fa-star checked"})):n.push(h.a.createElement("span",{key:o,className:"fa fa-star"}));return h.a.createElement("div",null,n)};var S=function(e){var t=e.book.imageLinks?e.book.imageLinks.thumbnail:null,a=e.book.title,n=e.book.authors,o=e.book.shelf,r=e.book.averageRating;return h.a.createElement("div",{className:"book"},h.a.createElement("div",{className:"book-top"},h.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+t+'")'}}),h.a.createElement("div",{className:"book-shelf-changer"},h.a.createElement("select",{defaultValue:o,onChange:function(t){return a=t.target.value,void e.onChangeShelf(a,e.book);var a}},h.a.createElement("option",{value:"move",disabled:!0},"Move to..."),h.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),h.a.createElement("option",{value:"wantToRead"},"Want to Read"),h.a.createElement("option",{value:"read"},"Read"),h.a.createElement("option",{value:"none"},"None")))),h.a.createElement("div",{className:"book-title"},a),h.a.createElement("div",{className:"book-authors"},n?n.join(" & "):null),h.a.createElement(g,{rating:r,numberOfStars:5}))};var y=function(e){var t=e.books,a=e.heading,n=t&&Array.isArray(t)?t.map(function(t){return h.a.createElement("li",{key:t.id},h.a.createElement(S,{book:t,onChangeShelf:e.onChangeShelf}))}):null;return h.a.createElement("div",{className:"list-books"},a?h.a.createElement("div",{className:"list-books-content"},h.a.createElement("div",null,h.a.createElement("div",{className:"bookshelf"},h.a.createElement("h2",{className:"bookshelf-title"},a),h.a.createElement("div",{className:"bookshelf-books"},h.a.createElement("ol",{className:"books-grid"},n))))):h.a.createElement("ol",{className:"books-grid"},n))},j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).updateSearch=function(e){var t=a.props.books;e?(a.setState(function(){return{searchText:e}}),k(e).then(function(n){Array.isArray(n)||(n=[]),n.forEach(function(e){var a=t.find(function(t){return t.id===e.id});e.shelf=null!=a?a.shelf:"none"}),e===a.state.searchText&&a.setState(function(e){return Object(o.a)({},e,{showBooks:n})})})):a.setState(function(){return{showBooks:[],searchText:""}})},a.updateSearchThrottled=Object(E.b)(500,a.updateSearch),a.updateSearchDebounced=Object(E.a)(500,a.updateSearch),a.handleInputChange=function(e){var t=e.target.value;t.length<5?a.updateSearchThrottled(t):a.updateSearchDebounced(t)},a.state={searchText:"",showBooks:[]},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateSearch(this.state.searchText)}},{key:"render",value:function(){return h.a.createElement("div",{className:"search-books"},h.a.createElement("div",{className:"search-books-bar"},h.a.createElement(v.b,{to:"/",className:"close-search"},"Close"),h.a.createElement("div",{className:"search-books-input-wrapper"},h.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:this.handleInputChange}))),h.a.createElement("div",{className:"search-books-results"},h.a.createElement(y,{books:this.state.showBooks,onChangeShelf:this.props.onChangeShelf})))}}]),t}(h.a.Component);var O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).groupBooksByShelf=function(e){return e.reduce(function(e,t){return(e[t.shelf]=e[t.shelf]||[]).push(t),e},{})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.groupBooksByShelf(this.props.books);return h.a.createElement("div",null,Object.keys(t).map(function(a){return 0===t[a].length?null:h.a.createElement(y,{key:a,books:t[a],shelf:a,heading:(n=a,n.replace(/([A-Z])/g,function(e){return" ".concat(e)}).replace(/^./,function(e){return e.toUpperCase()}).trim()),onChangeShelf:e.props.onChangeShelf});var n}),h.a.createElement("div",{className:"open-search"},h.a.createElement(v.b,{to:"/search"},"Search Books")))}}]),t}(h.a.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleChangeShelf=function(e,t){p(t,e).then(function(r){t.shelf=e,a.setState(function(e){return Object(o.a)({},e,{books:Object(n.a)(e.books.filter(function(e){return e.id!==t.id})).concat([t])})}),console.log("updated",r)})},a.state={books:[]},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/books"),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState(function(){return{books:t}})})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement(f.a,{exact:!0,path:"/",render:function(){return h.a.createElement("div",null,h.a.createElement("div",{className:"list-books-title"},h.a.createElement("h1",null,"MyReads")),h.a.createElement(O,{books:e.state.books,onChangeShelf:e.handleChangeShelf}))}}),h.a.createElement(f.a,{path:"/search",render:function(){return h.a.createElement(j,{books:e.state.books,onChangeShelf:e.handleChangeShelf})}}))}}]),t}(h.a.Component),C=a(20),w=a.n(C);a(34);w.a.render(h.a.createElement(v.a,null,h.a.createElement(N,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.d28b84d6.chunk.js.map