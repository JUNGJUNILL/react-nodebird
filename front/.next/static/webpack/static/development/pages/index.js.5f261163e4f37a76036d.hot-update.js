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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "c:\\git Repository\\react-nodebird\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //next에서는 이거 안해도 된다. 




var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '정준일'
    },
    content: '첫번째 게시글',
    img: 'https://cdn.eyesmag.com/wp-content/uploads/2019/05/2019-parasite-film-by-bong-reasons-to-be-waiting-06.jpg'
  }]
};

var Home = function Home(_ref) {
  var user = _ref.user;

  /*
  const dispath = useDispatch(); //리덕스 액션 실행기 
    const {user,isLoggedIn} = useSelector(state=>state.user); 
               //useSelector로 리덕스 state전체를 가져올 수 있다. 
               //useState가 useSelector로 바뀌었다고 생각하자.
    console.log(user); 
  useEffect(()=>{
      // dispath({
      //     type:LOG_IN, 
      //     data:{
      //         nickname:'준일정',
      //     }
      // })
      dispath(loginAction); 
    },[]); 
  */
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, user ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\uB85C\uADF8\uC778 \uD588\uC2B5\uB2C8\uB2E4.", user.nickname) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), dummy.isLoggedIn && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      marginBottom: 20
    },
    encType: "multipart/form-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB2C8?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      "float": 'right'
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, dummy.imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: i,
      style: {
        display: 'inline-block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("img", {
      src: "http://localhost:3065/" + v,
      style: {
        width: '200px'
      },
      alt: v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "\uC81C\uAC70")));
  }))), dummy.mainPosts.map(function (v, i) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      key: i,
      cover: v.img && __jsx("img", {
        alt: "example",
        src: v.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }),
      actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "retweet",
        key: "retweet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "heart",
        key: "heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "message",
        key: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "ellipsis",
        key: "ellipsis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })],
      extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\uD314\uB85C\uC6B0"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, v.User.nickname[0]),
      title: v.User.nickname,
      description: v.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }));
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(Home));

/***/ })

})
//# sourceMappingURL=index.js.5f261163e4f37a76036d.hot-update.js.map