(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,o){e.exports=o(244)},198:function(e,t,o){},242:function(e,t,o){},244:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(26),s=o.n(r),c=o(9),l=o(11),i=o(10),u=o(12),h=o(60),p="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},m=function(){return fetch("".concat(p,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},b=function(e,t){return fetch("".concat(p,"/books/").concat(e.id),{method:"PUT",headers:Object(h.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},d=function(e,t){return fetch("".concat(p,"/search"),{method:"POST",headers:Object(h.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=(o(198),o(247)),g=o(245),E=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={shelfSelection:o.props.book.shelf||"none"},o.onChangeShelf=function(e,t){o.setState({shelfSelection:t}),o.props.onChangeShelf(e,t)},o.componentWillReceiveProps=function(e){o.props=e,o.setState({shelfSelection:o.props.book.shelf})},o.render=function(){return n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:o.state.shelfSelection,onChange:function(e){return o.onChangeShelf(o.props.book,e.target.value)}},n.a.createElement("option",{value:"",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))},o}return Object(u.a)(t,e),t}(a.Component),w=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={shelfPicker:o.props.book.shelf||"none"},o.render=function(){var e=o.props.book.authors&&o.props.book.authors.join(" | "),t=o.props.book.imageLinks&&"url(".concat(o.props.book.imageLinks.thumbnail,")");return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("button",{className:"book-cover-button",onClick:function(e){return o.props.onUpdateQuickView(e,o.props.book)}},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:t}})),n.a.createElement(E,{book:o.props.book,onChangeShelf:o.props.onChangeShelf})),n.a.createElement("div",{className:"book-title"},o.props.book.title),n.a.createElement("div",{className:"book-authors"},e))},o}return Object(u.a)(t,e),t}(a.Component),S=function(e){return e.sort(function(e,t){var o=e.title.toUpperCase(),a=t.title.toUpperCase();return o<a?-1:o>a?1:0})},y=function(e,t){var o={};return e.forEach(function(e){return o[e.id]=e.shelf}),t.forEach(function(e){e.shelf=o[e.id]||"none"}),t},C=o(59),N=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={shelfPicker:o.props.book.shelf||"none",isShowingModal:!1,book:o.props.book},o.componentWillReceiveProps=function(e){o.props=e,o.setState({isShowingModal:e.showModal,book:e.book,shelfPicker:o.props.book.shelf||"none"})},o.handleClose=function(){o.setState({isShowingModal:!1,book:{}}),o.props.onCloseModal()},o.buildAuthors=function(){var e=o.props.book.authors;return Array.isArray(e)?n.a.createElement("ol",null,e.map(function(e){return n.a.createElement("li",{key:e},e)})):null},o.render=function(){var e=o.props.book.imageLinks&&"url(".concat(o.props.book.imageLinks.thumbnail,")");return n.a.createElement("div",null,o.state.isShowingModal&&n.a.createElement(C.ModalContainer,{onClose:o.handleClose},n.a.createElement(C.ModalDialog,{onClose:o.handleClose},n.a.createElement("div",{className:"book-quick-view"},n.a.createElement("div",{className:"book-title"},n.a.createElement("h2",null,o.props.book.title)),n.a.createElement("div",{className:"book-quick-view-details"},n.a.createElement("div",{className:"book-left"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:e}})),n.a.createElement("div",{className:"book-right"},1===o.props.book.authors.length&&n.a.createElement("h3",null,"Author"),o.props.book.authors.length>1&&n.a.createElement("h3",null,"Authors"),n.a.createElement("div",{className:"book-authors"},o.buildAuthors()),n.a.createElement("div",{className:"book-pages"},o.props.book.pageCount&&n.a.createElement("span",null,o.props.book.pageCount,"\xa0 pages")),n.a.createElement("div",{className:"book-info-link"},o.props.book.infoLink&&n.a.createElement("a",{href:o.props.book.infoLink,target:"_blank",rel:"noopener noreferrer"},"See more details")),n.a.createElement(E,{book:o.props.book,onChangeShelf:o.props.onChangeShelf})))))))},o}return Object(u.a)(t,e),t}(a.Component),j=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",books:[],quickView:{},showModal:!1},o.queryTimer=null,o.changeQuery=function(e){clearTimeout(o.queryTimer),o.setState({query:e}),o.queryTimer=setTimeout(o.updateSearch,250)},o.updateSearch=function(){""!==o.state.query?d(o.state.query).then(function(e){var t=[],a=!1;void 0===e||e.error&&"empty query"!==e.error?a=!0:e.length&&(t=y(o.props.selectedBooks,e),t=S(t)),o.setState({error:a,books:t})}):o.setState({error:!1,books:[]})},o.componentWillReceiveProps=function(e){o.props=e;var t=y(o.props.selectedBooks,o.state.books);t=S(t),o.setState({books:t})},o.updateQuickView=function(e,t){o.setState({quickView:t,showModal:!0})},o.closeQuickView=function(){o.setState({quickView:{},showModal:!1})},o.render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(g.a,{className:"close-search",to:"/"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(e){return o.changeQuery(e.target.value)},value:o.state.query.value}))),n.a.createElement("div",{className:"search-books-results"},o.state.error&&n.a.createElement("div",{className:"search-error"},"There was a problem with your search"),!o.state.error&&n.a.createElement("span",{className:"search-count"},"we have ",o.state.books.length,"\xa0books on your search"),n.a.createElement("ol",{className:"books-grid"},o.state.books&&o.state.books.map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(w,{book:e,onChangeShelf:o.props.onChangeShelf,onUpdateQuickView:o.updateQuickView}))}))),n.a.createElement("div",{className:"search-quick-view"},n.a.createElement(N,{book:o.state.quickView,showModal:o.state.showModal,onCloseModal:o.closeQuickView,onChangeShelf:o.props.onChangeShelf}))))},o}return Object(u.a)(t,e),t}(a.Component),O=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},o.props.shelf.name),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},o.props.shelf.books.map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(w,{book:e,onChangeShelf:o.props.onChangeShelf,onUpdateQuickView:o.props.onUpdateQuickView}))}))))},o}return Object(u.a)(t,e),t}(a.Component),M=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={quickView:{}},o.componentDidMount=function(){o.props.onRefreshAllBooks()},o.updateShelves=function(){return[{name:"Currently Reading",books:o.props.books.filter(function(e){return"currentlyReading"===e.shelf})},{name:"Want to Read",books:o.props.books.filter(function(e){return"wantToRead"===e.shelf})},{name:"Read",books:o.props.books.filter(function(e){return"read"===e.shelf})}]},o.updateQuickView=function(e,t){e.preventDefault(),o.setState({quickView:t,showModal:!0})},o.closeQuickView=function(){o.setState({quickView:{},showModal:!1})},o.render=function(){var e=[];return o.props.books&&o.props.books.length&&(e=o.updateShelves()),n.a.createElement("div",null,n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,e&&e.map(function(e){return n.a.createElement(O,{key:e.name,shelf:e,onChangeShelf:o.props.onChangeShelf,onUpdateQuickView:o.updateQuickView})}))),n.a.createElement("div",{className:"open-search"},n.a.createElement(g.a,{to:"/search"},"Add a book"))),n.a.createElement("div",{className:"shelves-quick-view"},n.a.createElement(N,{book:o.state.quickView,showModal:o.state.showModal,onCloseModal:o.closeQuickView,onChangeShelf:o.props.onChangeShelf})))},o}return Object(u.a)(t,e),t}(a.Component),q=function(e){function t(){var e,o;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={booksArray:[],newBook:!0},o.componentDidMount=function(){o.state.newBook&&o.shelfRefresh()},o.shelfRefresh=function(){m().then(function(e){o.setState({books:S(e),newBook:!1})})},o.bookAdded=function(){o.setState({newBook:!0})},o.changeShelf=function(e,t){b(e,t).then(function(a){var n=o.state.books.slice(0),r=n.filter(function(t){return t.id===e.id});r.length?r[0].shelf=t:(n.push(e),n=S(n)),o.setState({books:n})})},o.render=function(){return n.a.createElement("div",{className:"app"},n.a.createElement(v.a,{exact:!0,path:"/",render:function(){return n.a.createElement(M,{books:o.state.books,onChangeShelf:o.changeShelf,onRefreshAllBooks:o.shelfRefresh})}}),n.a.createElement(v.a,{exact:!0,path:"/search",render:function(){return n.a.createElement(j,{selectedBooks:o.state.books,onChangeShelf:o.changeShelf})}}))},o}return Object(u.a)(t,e),t}(n.a.Component),V=(o(242),o(246));s.a.render(n.a.createElement(V.a,null,n.a.createElement(q,null)),document.getElementById("root"))}},[[107,2,1]]]);
//# sourceMappingURL=main.d049b35a.chunk.js.map