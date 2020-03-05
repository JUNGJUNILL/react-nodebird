webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "c:\\git Repository\\react-nodebird\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //next에서는 이거 안해도 된다. 





 //react hooks 나오기 전 방식 
//const Home = ({user,dispath,login,logout}) =>{
//react hooks방식

var Home = function Home() {
  var dispath = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); //리덕스 액션 실행기 

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user,
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts; //useSelector로 리덕스 state전체를 가져올 수 있다. 
  //useState가 useSelector로 바뀌었다고 생각하자.


  console.log(user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // dispath({
    //     type:LOG_IN, 
    //     data:{
    //         nickname:'준일정',
    //     }
    // })
    dispath(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["loginAction"]);
  }, []);
  /*
  useEffect(()=>{
  
      login(); 
  
  },[])
  */

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, user ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\uB85C\uADF8\uC778 \uD588\uC2B5\uB2C8\uB2E4.", user.nickname) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), mainPosts.map(function (v, i) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  }));
};
/*
//리덕스 state를 리엑트 props로 만들겠다.
//react hooks 나오기 전 방식 
function mapStateToProps(state){
    return {
        user:state.user,
    }
}

function mapDispatchToProps(dispath){
    return{
        login: ()=>dispath(loginAction), 
        logout:()=>dispath(logOutAction), 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
*/


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8f69b39a2283ce43bf1f.hot-update.js.map