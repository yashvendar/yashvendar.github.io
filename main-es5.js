function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./component/nav-menu/nav-menu.component */
    "./src/app/component/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "wrapper"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["@font-face {\n  font-family: alex-brush;\n  src: url('alex_brush.ttf');\n}\nsection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: auto;\n  position: relative;\n  font-family: \"Segoe UI\", sans-serif;\n}\n.main-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  color: white;\n  font-family: alex-brush, sans-serif;\n  font-size: 4rem;\n}\n.contact-mail[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  height: 100px;\n  font-family: alex-brush, sans-serif;\n  font-size: 4rem;\n  margin-top: 10vh;\n  z-index: 2;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 600px) {\n  video[_ngcontent-%COMP%] {\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  #video-background[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100vw;\n  }\n\n  #video-background-2[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100vw;\n  }\n\n  .main-title[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n\n  .social-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100vw;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .projects-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    padding-top: 20px;\n  }\n\n  .contact-mail[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  .footer-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n@media screen and (max-width: 850px) and (max-height: 500px) {\n  .main-title[_ngcontent-%COMP%] {\n    top: 15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 80%;\n    top: 0;\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .about-img[_ngcontent-%COMP%] {\n    height: 50vh;\n    width: 50vw;\n  }\n\n  .projects[_ngcontent-%COMP%] {\n    margin: 0 2%;\n  }\n\n  .project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 245px;\n    width: 245px;\n  }\n\n  .footer-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhc2h2ZW5kYXIvRG9jdW1lbnRzL0FuZ3VsYXIvcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyx1QkFBQTtFQUF5QiwwQkFBQTtBQ0dwQztBRERBO0VBQVMsaUJBQUE7RUFBbUIsWUFBQTtFQUFhLGtCQUFBO0VBQW1CLG1DQUFBO0FDTzVEO0FETEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDUUo7QURMRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDUUo7QURMRSxnQ0FBQTtBQUNBO0VBQ0U7SUFBUSxvQkFBQTtPQUFBLGlCQUFBO0VDU1Y7O0VEUkU7SUFBb0IsYUFBQTtJQUFlLFlBQUE7RUNhckM7O0VEWkU7SUFBc0IsYUFBQTtJQUFlLFlBQUE7RUNpQnZDOztFRGhCRTtJQUFjLGlCQUFBO0VDb0JoQjs7RURuQkU7SUFBd0IsZUFBQTtFQ3VCMUI7O0VEdEJFO0lBQVEsWUFBQTtJQUFjLDBDQUFBO0VDMkJ4Qjs7RUQxQkU7SUFBYSxlQUFBO0VDOEJmOztFRDdCRTtJQUFrQixlQUFBO0lBQWlCLGlCQUFBO0VDa0NyQzs7RURqQ0U7SUFBZ0IsZUFBQTtFQ3FDbEI7O0VEcENFO0lBQXdCLGlCQUFBO0VDd0MxQjtBQUNGO0FEdENFLGtDQUFBO0FBQ0E7RUFDRTtJQUFjLFFBQUE7RUN5Q2hCOztFRHhDRTtJQUFRLFVBQUE7SUFBWSxNQUFBO0VDNkN0Qjs7RUQ1Q0U7SUFBYSxlQUFBO0VDZ0RmOztFRC9DRTtJQUFhLFlBQUE7SUFBYyxXQUFBO0VDb0Q3Qjs7RURuREU7SUFBWSxZQUFBO0VDdURkOztFRHRERTtJQUFtQixhQUFBO0lBQWUsWUFBQTtFQzJEcEM7O0VEMURFO0lBQXdCLGlCQUFBO0VDOEQxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZXtmb250LWZhbWlseTogYWxleC1icnVzaDsgc3JjOnVybCguLi9hc3NldHMvZm9udC9hbGV4X2JydXNoLnR0Zil9XG5cbnNlY3Rpb257IG1pbi1oZWlnaHQ6IDEwMHZoOyBoZWlnaHQ6YXV0bzsgcG9zaXRpb246cmVsYXRpdmU7IGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLHNhbnMtc2VyaWY7fVxuXG4ubWFpbi10aXRsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IGFsZXgtYnJ1c2gsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA0cmVtO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0gQ29udGVudCBTZWN0aW9uIC0tLS0tLS0tLS0tLS0tXG4gIC5jb250YWN0LW1haWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LWZhbWlseTogYWxleC1icnVzaCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLyogTGFyZ2UgU21hcnRwaG9uZSAoVmVydGljYWwpICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgdmlkZW8geyBvYmplY3QtZml0OiBjb3ZlcjsgfVxuICAgICN2aWRlby1iYWNrZ3JvdW5kIHsgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMHZ3OyB9XG4gICAgI3ZpZGVvLWJhY2tncm91bmQtMiB7IGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dzsgfVxuICAgIC5tYWluLXRpdGxlIHsgZm9udC1zaXplOiAzLjVyZW07IH1cbiAgICAuc29jaWFsLWljb25zIGZhLWljb24geyBmb250LXNpemU6IDJyZW07IH1cbiAgICAuY2FyZCB7IHdpZHRoOiAxMDB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7IH1cbiAgICAuY2FyZC10ZXh0IHsgZm9udC1zaXplOiAxcmVtOyB9XG4gICAgLnByb2plY3RzLXRpdGxlIHsgZm9udC1zaXplOiAycmVtOyBwYWRkaW5nLXRvcDogMjBweDsgfVxuICAgIC5jb250YWN0LW1haWwgeyBmb250LXNpemU6IDNyZW07IH1cbiAgICAuZm9vdGVyLWljb25zIGZhLWljb24geyBtYXJnaW4tbGVmdDogMjBweDsgfVxuICB9XG4gIFxuICAvKiBMYXJnZSBTbWFydHBob25lIChIb3Jpem9udGFsKSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgIC5tYWluLXRpdGxlIHsgdG9wOiAxNSU7IH1cbiAgICAuY2FyZCB7IHdpZHRoOiA4MCU7IHRvcDogMDsgfVxuICAgIC5jYXJkLXRleHQgeyBmb250LXNpemU6IDFyZW07IH1cbiAgICAuYWJvdXQtaW1nIHsgaGVpZ2h0OiA1MHZoOyB3aWR0aDogNTB2dzsgfVxuICAgIC5wcm9qZWN0cyB7IG1hcmdpbjogMCAyJTsgfVxuICAgIC5wcm9qZWN0LWltZyBpbWcgeyBoZWlnaHQ6IDI0NXB4OyB3aWR0aDogMjQ1cHg7IH1cbiAgICAuZm9vdGVyLWljb25zIGZhLWljb24geyBtYXJnaW4tbGVmdDogMjBweDsgfVxuICB9XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGFsZXgtYnJ1c2g7XG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250L2FsZXhfYnJ1c2gudHRmKTtcbn1cbnNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogYWxleC1icnVzaCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4uY29udGFjdC1tYWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBhbGV4LWJydXNoLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogTGFyZ2UgU21hcnRwaG9uZSAoVmVydGljYWwpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICB2aWRlbyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAjdmlkZW8tYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAjdmlkZW8tYmFja2dyb3VuZC0yIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxuXG4gIC5zb2NpYWwtaWNvbnMgZmEtaWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cblxuICAuY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAucHJvamVjdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5jb250YWN0LW1haWwge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIC5mb290ZXItaWNvbnMgZmEtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbi8qIExhcmdlIFNtYXJ0cGhvbmUgKEhvcml6b250YWwpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAubWFpbi10aXRsZSB7XG4gICAgdG9wOiAxNSU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAuY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuYWJvdXQtaW1nIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDUwdnc7XG4gIH1cblxuICAucHJvamVjdHMge1xuICAgIG1hcmdpbjogMCAyJTtcbiAgfVxuXG4gIC5wcm9qZWN0LWltZyBpbWcge1xuICAgIGhlaWdodDogMjQ1cHg7XG4gICAgd2lkdGg6IDI0NXB4O1xuICB9XG5cbiAgLmZvb3Rlci1pY29ucyBmYS1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/nav-menu/nav-menu.component */
    "./src/app/component/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/resume/resume.component */
    "./src/app/component/resume/resume.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");

    var appRoutes = [{
      path: "",
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
    }, {
      path: "resume",
      component: _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"]
    }];

    var AppModule = function AppModule(library) {
      _classCallCheck(this, AppModule);

      //library.addIconPacks(fas);
      library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCodepen"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faYoutube"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMedium"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFacebook"]);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
        enableTracing: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
            enableTracing: true
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["fab", "github"];
    };

    var _c1 = function _c1() {
      return ["fab", "linkedin"];
    };

    var _c2 = function _c2() {
      return ["fab", "codepen"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 117,
      vars: 12,
      consts: [[1, "wrapper"], ["id", "home"], ["loop", "", "muted", "", "autoplay", "", "id", "video-background"], ["src", "../assets/videos/header-background.mp4", "type", "video/mp4"], [1, "video-overlay"], [1, "main-title"], [1, "social-icons"], ["href", "https://github.com/yashvendar", "target", "_blank", "rel", "noopener"], [3, "icon"], ["href", "https://www.linkedin.com/in/yashvendar-badsiwal-004a79152/", "target", "_blank", "rel", "noopener"], ["href", "https://codepen.io/yashvendar", "target", "_blank", "rel", "noopener"], ["id", "about"], [1, "card"], ["src", "../assets/profile.jpeg", "alt", "Profile Picture", 1, "about-image"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "/resume", "routerLinkActive", "active"], [1, "card-button"], ["id", "projects"], [1, "projects"], [1, "projects-title"], [1, "project-group-1"], [1, "project-item"], [1, "project-img"], ["href", "https://jacinto.design"], ["src", "../assets/img/project-1.png", "alt", "Project"], [1, "project-caption"], [1, "project-title"], ["href", "https://github.com/yashvendar/E-BOOK.github.io"], [1, "github-link"], ["href", "https://github.com/yashvendar/E-BOOK.github.io", "title", "View Github Repository"], ["href", "https://Pedes2020.com"], ["href", "https://Pedes2020.com", "title", "View Github Repository"], ["href", "https://github.com/yashvendar/Todo-backend-with-nestJS"], ["href", "https://github.com/yashvendar/Todo-backend-with-nestJS", "title", "View Github Repository"], [1, "project-group-2"], ["href", "https://website.Pedes2020.com"], ["href", "https://github.com/yashvendar/flipr-Hackathon-6", "title", "View Github Repository"], ["href", "https://github.com/yashvendar/calculator"], ["href", "https://github.com/yashvendar/calculator", "title", "View Github Repository"], ["href", "https://github.com/yashvendar/Angular-course-assignment"], ["href", "https://github.com/yashvendar/Angular-course-assignment", "title", "View Github Repository"], [1, "background"], ["id", "contact"], ["href", "mailto:yashvendarbadsiwal@gmail.com", "target", "_blank", "rel", "noopener", 1, "contact-mail"], [1, "red"], ["loop", "", "muted", "", "autoplay", "", "id", "video-background-2"], ["src", "../assets/img/video-game-background.mp4", "type", "video/mp4"], ["id", "footer"], [1, "footer-icons"], ["title", "Github", 2, "margin-left", "0", 3, "icon"], ["title", "Codepen", 3, "icon"], ["title", "Linkedin", 3, "icon"], [1, "footer-text"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your Title is Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur a tempora odio, recusandae eius reiciendis fugit libero? Accusamus harum ullam provident, quibusdam ut nihil distinctio quo, minus debitis alias perspiciatis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "View Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Click to View Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "E-bookshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pedes2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Todo in NestJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Flipr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Restaurant web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Github");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "@ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " yashalwar4@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "video", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "source", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "fa-icon", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "fa-icon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "fa-icon", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Yashvendar Badsiwal - 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: auto;\n  position: relative;\n  font-family: \"Segoe UI\", sans-serif;\n}\n\n#home[_ngcontent-%COMP%] {\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#video-background[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: auto;\n}\n\nvideo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.video-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.main-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  color: white;\n  font-family: alex-brush, sans-serif;\n  font-size: 4rem;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60%;\n}\n\n.social-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  padding: 7.5px 15px;\n  cursor: pointer;\n}\n\n.social-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover {\n  color: #202020;\n  background-color: white;\n}\n\n#about[_ngcontent-%COMP%] {\n  background-color: white;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%233c3b3e' fill-opacity='0.16' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E\");\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5vh;\n  height: auto;\n  width: 60vw;\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  flex-direction: column;\n}\n\n.about-image[_ngcontent-%COMP%] {\n  height: 45vh;\n  margin: 0 auto;\n  border-radius: 50%;\n  box-shadow: 2px 5px 10px 4px rgba(0, 0, 0, 0.25);\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0 1.2rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n  font-size: 2.5rem;\n  width: 100%;\n  padding-bottom: 25px;\n  border-bottom: 1px solid black;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-top: 0;\n  font-size: 1rem;\n}\n\n.card-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.card-button[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: #c91616;\n  padding: 0.5rem;\n  margin-top: 3vh;\n  border-radius: 5px;\n  box-shadow: 0 0.3rem rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n}\n\n.card-button[_ngcontent-%COMP%]:active {\n  transform: translate(0, 0.3rem);\n  box-shadow: 0 0.1rem rgba(0, 0, 0, 0.65);\n}\n\n#projects[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.projects[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 10%;\n}\n\n.projects-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5rem;\n  font-weight: 500;\n}\n\n.project-group-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.project-group-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 10vh;\n}\n\n.project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 325px;\n  width: 325px;\n  transition: all 0.3s ease-in-out;\n}\n\n.project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(0.97);\n  transition: all 0.3s ease-in-out;\n}\n\n.project-item[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 100px;\n  min-height: 150px;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin: 0 auto;\n}\n\n.project-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c91616;\n  transition: all 0.3s ease-in-out;\n}\n\n.github-link[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  margin-top: 1vh;\n}\n\n.github-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c91616;\n  transition: all 0.3s ease-in-out;\n}\n\n#contact[_ngcontent-%COMP%] {\n  \n  \n  \n  display: flex;\n  justify-content: center;\n}\n\n.contact-mail[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  height: 100px;\n  font-family: alex-brush, sans-serif;\n  font-size: 4rem;\n  margin-top: 10vh;\n  z-index: 2;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n}\n\n.contact-mail[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  transition: 0.5s ease-in-out;\n}\n\n#video-background-2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: auto;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #c91616;\n}\n\n.business-card[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: auto;\n}\n\n#footer[_ngcontent-%COMP%] {\n  background-color: black;\n  min-height: unset;\n  height: 150px;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n  padding-top: 2rem;\n}\n\n.footer-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-left: 1vw;\n}\n\n.footer-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover {\n  color: #c91616;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (max-width: 600px) {\n  video[_ngcontent-%COMP%] {\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  #video-background[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100vw;\n  }\n\n  #video-background-2[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100vw;\n  }\n\n  .main-title[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n\n  .social-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100vw;\n    background-color: rgba(255, 255, 255, 0.7);\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .projects-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    padding-top: 20px;\n  }\n\n  .contact-mail[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  .footer-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n\n\n@media screen and (max-width: 850px) and (max-height: 500px) {\n  .main-title[_ngcontent-%COMP%] {\n    top: 15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 80%;\n    top: 0;\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .about-img[_ngcontent-%COMP%] {\n    height: 50vh;\n    width: 50vw;\n  }\n\n  .projects[_ngcontent-%COMP%] {\n    margin: 0 2%;\n  }\n\n  .project-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 245px;\n    width: 245px;\n  }\n\n  .footer-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhc2h2ZW5kYXIvRG9jdW1lbnRzL0FuZ3VsYXIvcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFTLGlCQUFBO0VBQW1CLFlBQUE7RUFBYSxrQkFBQTtFQUFtQixtQ0FBQTtBQ0c1RDs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQ1NKOztBRExBO0VBQ0ksdUJBQUE7RUFDQSwydUtBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDU0o7O0FEUEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQ1lKOztBRFZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFhBO0VBQ0kscUJBQUE7QUNjSjs7QURaQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSwrQkFBQTtFQUNBLHdDQUFBO0FDZ0JKOztBRGJBO0VBQVksdUJBQUE7QUNpQlo7O0FEaEJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNtQkY7O0FEakJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ3VCRjs7QURyQkE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FDd0JGOztBRHRCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3lCRjs7QUR2QkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzBCRjs7QUR4QkE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUMyQkY7O0FEekJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FDNkJGOztBRDFCQTtFQUNJLDZCQUFBO0VBRUEscUJBQUE7RUFDQTs7O2lDQUFBO0VBS0EsYUFBQTtFQUNBLHVCQUFBO0FDMkJKOztBRHpCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDNEJKOztBRDFCRTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7QUM2Qko7O0FEM0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDOEJKOztBRDVCRTtFQUNFLGNBQUE7QUMrQko7O0FEN0JFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNnQ0o7O0FENUJBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDOEJKOztBRDVCRTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQytCTjs7QUQ3QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNnQ0o7O0FEOUJFO0VBQ0UsY0FBQTtBQ2lDSjs7QUQvQkU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FDa0NKOztBRC9CRSwrREFBQTs7QUFFQSwrQkFBQTs7QUFJQSx5QkFBQTs7QUFJQSwyQkFBQTs7QUFJQSw4QkFBQTs7QUFJQSx3QkFBQTs7QUFJQSx3Q0FBQTs7QUFJQSwyQ0FBQTs7QUFJQSxxQ0FBQTs7QUFJQSxzQkFBQTs7QUFJQSxTQUFBOztBQUlBLGdDQUFBOztBQUNBO0VBQ0U7SUFBUSxvQkFBQTtPQUFBLGlCQUFBO0VDSVY7O0VESEU7SUFBb0IsYUFBQTtJQUFlLFlBQUE7RUNRckM7O0VEUEU7SUFBc0IsYUFBQTtJQUFlLFlBQUE7RUNZdkM7O0VEWEU7SUFBYyxpQkFBQTtFQ2VoQjs7RURkRTtJQUF3QixlQUFBO0VDa0IxQjs7RURqQkU7SUFBUSxZQUFBO0lBQWMsMENBQUE7RUNzQnhCOztFRHJCRTtJQUFhLGVBQUE7RUN5QmY7O0VEeEJFO0lBQWtCLGVBQUE7SUFBaUIsaUJBQUE7RUM2QnJDOztFRDVCRTtJQUFnQixlQUFBO0VDZ0NsQjs7RUQvQkU7SUFBd0IsaUJBQUE7RUNtQzFCO0FBQ0Y7O0FEakNFLGtDQUFBOztBQUNBO0VBQ0U7SUFBYyxRQUFBO0VDb0NoQjs7RURuQ0U7SUFBUSxVQUFBO0lBQVksTUFBQTtFQ3dDdEI7O0VEdkNFO0lBQWEsZUFBQTtFQzJDZjs7RUQxQ0U7SUFBYSxZQUFBO0lBQWMsV0FBQTtFQytDN0I7O0VEOUNFO0lBQVksWUFBQTtFQ2tEZDs7RURqREU7SUFBbUIsYUFBQTtJQUFlLFlBQUE7RUNzRHBDOztFRHJERTtJQUF3QixpQkFBQTtFQ3lEMUI7QUFDRjs7QUR2REUseUJBQUE7O0FBSUEsYUFBQTs7QUFJQSxpQkFBQTs7QUFJQSw4QkFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZm9udC1mYWNle2ZvbnQtZmFtaWx5OiBhbGV4LWJydXNoOyBzcmM6dXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvYWxleF9icnVzaC50dGZcIil9XG5cbnNlY3Rpb257IG1pbi1oZWlnaHQ6IDEwMHZoOyBoZWlnaHQ6YXV0bzsgcG9zaXRpb246cmVsYXRpdmU7IGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLHNhbnMtc2VyaWY7fVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLSBIb21lIHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS1cbiNob21le1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3ZpZGVvLWJhY2tncm91bmR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbnZpZGVve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbi52aWRlby1vdmVybGF5e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsMCwwLjQpO1xufVxuLm1haW4tdGl0bGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBhbGV4LWJydXNoLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5zb2NpYWwtaWNvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo2MCU7XG59XG4uc29jaWFsLWljb25zIGZhLWljb257XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA3LjVweCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zb2NpYWwtaWNvbnMgZmEtaWNvbjpob3ZlcntcbiAgICBjb2xvcjojMjAyMDIwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0gQWJvdXQgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tXG5cbiNhYm91dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzA0IDMwNCcgd2lkdGg9JzMwNCcgaGVpZ2h0PSczMDQnJTNFJTNDcGF0aCBmaWxsPSclMjMzYzNiM2UnIGZpbGwtb3BhY2l0eT0nMC4xNicgZD0nTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLmNhcmR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXZoO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNjB2dztcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hYm91dC1pbWFnZXtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCA0cHggcmdiYSgwLCAwLDAsMC4yNSk7XG59XG4uY2FyZC1ib2R5e1xuICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xufVxuLmNhcmQtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4uY2FyZC10ZXh0e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG4uY2FyZC1ib2R5IGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNhcmQtYnV0dG9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsMjIsMjIpO1xuICAgIHBhZGRpbmc6MC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwLjNyZW0gcmdiYSgwLCAwLDAsMC42NSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZC1idXR0b246YWN0aXZle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuM3JlbSk7XG4gICAgYm94LXNoYWRvdzogMCAwLjFyZW0gcmdiYSgwLCAwLDAsMC42NSk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLSBQcm9qZWN0IFNlY3Rpb24gLS0tLS0tLS0tLS0tLS1cbiNwcm9qZWN0cyB7IGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgMTAlO1xufVxuLnByb2plY3RzLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcm9qZWN0LWdyb3VwLTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2plY3QtZ3JvdXAtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG4ucHJvamVjdC1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAzMjVweDtcbiAgd2lkdGg6IDMyNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5wcm9qZWN0LWltZyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5wcm9qZWN0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuLnByb2plY3QtdGl0bGUge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucHJvamVjdC10aXRsZSBhOmhvdmVyIHtcbiAgY29sb3I6IHJnYigyMDEsMjIsMjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5naXRodWItbGluayB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG4uZ2l0aHViLWxpbmsgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjAxLDIyLDIyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLSBDb250ZW50IFNlY3Rpb24gLS0tLS0tLS0tLS0tLS1cbiNjb250YWN0IHsgXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gIFxuICAgIC8qIEJhY2tncm91bmQgSW1hZ2UgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltZy9tb3VudGFpbi1iYWNrZ3JvdW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cbiAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29udGFjdC1tYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6IGFsZXgtYnJ1c2gsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAuY29udGFjdC1tYWlsOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gICN2aWRlby1iYWNrZ3JvdW5kLTIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5yZWQge1xuICAgIGNvbG9yOiByZ2IoMjAxLDIyLDIyKTtcbiAgfVxuICAuYnVzaW5lc3MtY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogYXV0bzsgXG4gIH1cbiAgXG4vLyAtLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgU2VjdGlvbiAtLS0tLS0tLS0tLS0tLS1cbiNmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgIGhlaWdodDogMTUwcHg7IFxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZm9vdGVyLWljb25ze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gIH1cbiAgLmZvb3Rlci1pY29ucyBmYS1pY29uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgfVxuICAuZm9vdGVyLWljb25zIGZhLWljb246aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjAxLDIyLDIyKTtcbiAgfVxuICAuZm9vdGVyLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gIC8qIE1vbml0b3IgLSBObyBCb29rbWFya3MgQmFyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MzhweCkge1xuICB9XG4gIFxuICAvKiBNb25pdG9yIC0gRnVsbHNjcmVlbiAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODAwcHgpIGFuZCAobWluLWhlaWdodDogMTAwMHB4KSB7XG4gIH1cbiAgXG4gIC8qIExhcHRvcCAtIEJvb2ttYXJrcyBCYXIgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgwMHB4KSB7XG4gIH1cbiAgXG4gIC8qIExhcHRvcCAtIE5vIEJvb2ttYXJrcyBCYXIgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSBhbmQgKG1heC13aWR0aDogMTc5OXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2MHB4KSB7XG4gIH1cbiAgXG4gIC8qIExhcHRvcCAtIEZ1bGxzY3JlZW4gKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMwMHB4KSBhbmQgKG1heC13aWR0aDogMTc5OXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7XG4gIH1cbiAgXG4gIC8qIExhcHRvcCAtIDEzNjYgeCA3NjggLSBCb29rbWFya3MgQmFyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogMTM2NnB4KSB7XG4gIH1cbiAgXG4gIC8qIExhcHRvcCAtIDEzNjYgeCA3NjggLSBObyBCb29rbWFya3MgQmFyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogMTM2NnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcyMHB4KSB7XG4gIH1cbiAgXG4gIC8qIExhcHRvcCAtIDEzNjYgeCA3NjggLSBGdWxsc2NyZWVuICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDogMTM2NnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc1OXB4KSB7XG4gIH1cbiAgXG4gIC8qIGlQYWQgLSBIb3Jpem9udGFsICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gIH1cbiAgXG4gIC8qIGlQYWQgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgfVxuICBcbiAgLyogTGFyZ2UgU21hcnRwaG9uZSAoVmVydGljYWwpICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgdmlkZW8geyBvYmplY3QtZml0OiBjb3ZlcjsgfVxuICAgICN2aWRlby1iYWNrZ3JvdW5kIHsgaGVpZ2h0OiAxMDB2aDsgd2lkdGg6IDEwMHZ3OyB9XG4gICAgI3ZpZGVvLWJhY2tncm91bmQtMiB7IGhlaWdodDogMTAwdmg7IHdpZHRoOiAxMDB2dzsgfVxuICAgIC5tYWluLXRpdGxlIHsgZm9udC1zaXplOiAzLjVyZW07IH1cbiAgICAuc29jaWFsLWljb25zIGZhLWljb24geyBmb250LXNpemU6IDJyZW07IH1cbiAgICAuY2FyZCB7IHdpZHRoOiAxMDB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNyk7IH1cbiAgICAuY2FyZC10ZXh0IHsgZm9udC1zaXplOiAxcmVtOyB9XG4gICAgLnByb2plY3RzLXRpdGxlIHsgZm9udC1zaXplOiAycmVtOyBwYWRkaW5nLXRvcDogMjBweDsgfVxuICAgIC5jb250YWN0LW1haWwgeyBmb250LXNpemU6IDNyZW07IH1cbiAgICAuZm9vdGVyLWljb25zIGZhLWljb24geyBtYXJnaW4tbGVmdDogMjBweDsgfVxuICB9XG4gIFxuICAvKiBMYXJnZSBTbWFydHBob25lIChIb3Jpem9udGFsKSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgIC5tYWluLXRpdGxlIHsgdG9wOiAxNSU7IH1cbiAgICAuY2FyZCB7IHdpZHRoOiA4MCU7IHRvcDogMDsgfVxuICAgIC5jYXJkLXRleHQgeyBmb250LXNpemU6IDFyZW07IH1cbiAgICAuYWJvdXQtaW1nIHsgaGVpZ2h0OiA1MHZoOyB3aWR0aDogNTB2dzsgfVxuICAgIC5wcm9qZWN0cyB7IG1hcmdpbjogMCAyJTsgfVxuICAgIC5wcm9qZWN0LWltZyBpbWcgeyBoZWlnaHQ6IDI0NXB4OyB3aWR0aDogMjQ1cHg7IH1cbiAgICAuZm9vdGVyLWljb25zIGZhLWljb24geyBtYXJnaW4tbGVmdDogMjBweDsgfVxuICB9XG4gIFxuICAvKiBpUGhvbmUgWCAtIEhvcml6b250YWwqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjRweCkgYW5kIChtYXgtaGVpZ2h0OiAzNzZweCkge1xuICB9XG4gIFxuICAvKiBpUGhvbmUgWCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCkge1xuICB9XG4gIFxuICAvKiBpUGhvbmUgNi83LzggKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc2cHgpIGFuZCAobWF4LWhlaWdodDogNjY4cHgpIHtcbiAgfVxuICBcbiAgLyogaVBob25lIDYvNy84IC0gSG9yaXpvbnRhbCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjhweCkgYW5kIChtYXgtaGVpZ2h0OiAzNzZweCkge1xuICB9Iiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbn1cblxuI2hvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN2aWRlby1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG52aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi52aWRlby1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGFsZXgtYnJ1c2gsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG59XG5cbi5zb2NpYWwtaWNvbnMgZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA3LjVweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgZmEtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjMjAyMDIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzA0IDMwNCcgd2lkdGg9JzMwNCcgaGVpZ2h0PSczMDQnJTNFJTNDcGF0aCBmaWxsPSclMjMzYzNiM2UnIGZpbGwtb3BhY2l0eT0nMC4xNicgZD0nTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1dmg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDYwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hYm91dC1pbWFnZSB7XG4gIGhlaWdodDogNDV2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAxLjJyZW07XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5jYXJkLXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jYXJkLWJvZHkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcmQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkxNjE2O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAuM3JlbSByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQtYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuM3JlbSk7XG4gIGJveC1zaGFkb3c6IDAgMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG5cbiNwcm9qZWN0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgMTAlO1xufVxuXG4ucHJvamVjdHMtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJvamVjdC1ncm91cC0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtZ3JvdXAtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG5cbi5wcm9qZWN0LWltZyBpbWcge1xuICBoZWlnaHQ6IDMyNXB4O1xuICB3aWR0aDogMzI1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucHJvamVjdC1pbWcgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2plY3QtdGl0bGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjYzkxNjE2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmdpdGh1Yi1saW5rIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmdpdGh1Yi1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogI2M5MTYxNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNjb250YWN0IHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gIC8qIEJhY2tncm91bmQgSW1hZ2UgKi9cbiAgLyogYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWcvbW91bnRhaW4tYmFja2dyb3VuZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1tYWlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBhbGV4LWJydXNoLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhY3QtbWFpbDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jdmlkZW8tYmFja2dyb3VuZC0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNjOTE2MTY7XG59XG5cbi5idXNpbmVzcy1jYXJkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIGhlaWdodDogMTUwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9vdGVyLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5mb290ZXItaWNvbnMgZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDF2dztcbn1cblxuLmZvb3Rlci1pY29ucyBmYS1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNjOTE2MTY7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTW9uaXRvciAtIE5vIEJvb2ttYXJrcyBCYXIgKi9cbi8qIE1vbml0b3IgLSBGdWxsc2NyZWVuICovXG4vKiBMYXB0b3AgLSBCb29rbWFya3MgQmFyICovXG4vKiBMYXB0b3AgLSBObyBCb29rbWFya3MgQmFyICovXG4vKiBMYXB0b3AgLSBGdWxsc2NyZWVuICovXG4vKiBMYXB0b3AgLSAxMzY2IHggNzY4IC0gQm9va21hcmtzIEJhciAqL1xuLyogTGFwdG9wIC0gMTM2NiB4IDc2OCAtIE5vIEJvb2ttYXJrcyBCYXIgKi9cbi8qIExhcHRvcCAtIDEzNjYgeCA3NjggLSBGdWxsc2NyZWVuICovXG4vKiBpUGFkIC0gSG9yaXpvbnRhbCAqL1xuLyogaVBhZCAqL1xuLyogTGFyZ2UgU21hcnRwaG9uZSAoVmVydGljYWwpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICB2aWRlbyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICAjdmlkZW8tYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAjdmlkZW8tYmFja2dyb3VuZC0yIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxuXG4gIC5zb2NpYWwtaWNvbnMgZmEtaWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIH1cblxuICAuY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAucHJvamVjdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIC5jb250YWN0LW1haWwge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIC5mb290ZXItaWNvbnMgZmEtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbi8qIExhcmdlIFNtYXJ0cGhvbmUgKEhvcml6b250YWwpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAubWFpbi10aXRsZSB7XG4gICAgdG9wOiAxNSU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAuY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuYWJvdXQtaW1nIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IDUwdnc7XG4gIH1cblxuICAucHJvamVjdHMge1xuICAgIG1hcmdpbjogMCAyJTtcbiAgfVxuXG4gIC5wcm9qZWN0LWltZyBpbWcge1xuICAgIGhlaWdodDogMjQ1cHg7XG4gICAgd2lkdGg6IDI0NXB4O1xuICB9XG5cbiAgLmZvb3Rlci1pY29ucyBmYS1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuLyogaVBob25lIFggLSBIb3Jpem9udGFsKi9cbi8qIGlQaG9uZSBYICovXG4vKiBpUGhvbmUgNi83LzggKi9cbi8qIGlQaG9uZSA2LzcvOCAtIEhvcml6b250YWwgKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/nav-menu/nav-menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/nav-menu/nav-menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppComponentNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);
      }

      _createClass(NavMenuComponent, [{
        key: "SidebarOn",
        value: function SidebarOn() {
          var nav = document.getElementsByClassName('desktop-nav')[0];
          var toggle = document.getElementById('sidebar-toggle');
          nav.classList.remove('display-none');
          toggle.classList.add('display-none');
        }
      }, {
        key: "SidebarOff",
        value: function SidebarOff() {
          var nav = document.getElementsByClassName('desktop-nav')[0];
          var toggle = document.getElementById('sidebar-toggle');
          nav.classList.add('display-none');
          toggle.classList.remove('display-none');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
      return new (t || NavMenuComponent)();
    };

    NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavMenuComponent,
      selectors: [["app-nav-menu"]],
      decls: 16,
      vars: 0,
      consts: [[1, "sidebar-container", 3, "mouseover", "mouseout"], ["id", "sidebar-toggle", 1, "sidebar-toggle"], [1, "sidebar-items", "desktop-nav", "display-none"], ["href", "#home"], ["href", "#about"], ["href", "#projects"], ["href", "#content"]],
      template: function NavMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NavMenuComponent_Template_div_mouseover_0_listener() {
            return ctx.SidebarOn();
          })("mouseout", function NavMenuComponent_Template_div_mouseout_0_listener() {
            return ctx.SidebarOff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sidebar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  display: initial;\n  z-index: 1;\n  height: auto;\n  width: auto;\n}\n\n.sidebar-toggle[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-family: \"segoe UI\", sans-serif;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 112px;\n  margin: 40px;\n  padding: 10px;\n  text-transform: uppercase;\n}\n\n.sidebar-items[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  list-style: none;\n  font-size: 3rem;\n  transition: 0.4s;\n}\n\na[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.sidebar-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"segoe UI\", sans-serif;\n  cursor: pointer;\n  padding: 2px 14px 5px;\n  margin-bottom: 20px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.sidebar-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: rgba(0, 0, 0, 0.85);\n  background-color: #fbfbfb;\n  transition: 0.3s;\n}\n\n.desktop-nav[_ngcontent-%COMP%] {\n  display: initial;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhc2h2ZW5kYXIvRG9jdW1lbnRzL0FuZ3VsYXIvcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50L25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDSUo7O0FERkE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUFjLGdCQUFBO0FDT2Q7O0FETkE7RUFBZSxhQUFBO0FDVWYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbn1cbi5zaWRlYmFyLXRvZ2dsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdzZWdvZSBVSScsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMC41KTtcbiAgICB3aWR0aDogMTEycHg7XG4gICAgbWFyZ2luOiA0MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zaWRlYmFyLWl0ZW1ze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG59XG5hLGxpe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWRlYmFyLWl0ZW1zIGxpe1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdzZWdvZSBVSScsc2Fucy1zZXJpZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMnB4IDE0cHggNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuNSk7XG59XG4uc2lkZWJhci1pdGVtcyBsaTpob3ZlcntcbiAgICBjb2xvcjpyZ2IoMCwwLDAsMC44NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgICB0cmFuc2l0aW9uOjAuM3M7XG59XG4uZGVza3RvcC1uYXZ7IGRpc3BsYXk6IGluaXRpYWw7fVxuLmRpc3BsYXktbm9uZXsgZGlzcGxheTogbm9uZTt9IiwiLnNpZGViYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uc2lkZWJhci10b2dnbGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcInNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTEycHg7XG4gIG1hcmdpbjogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNpZGViYXItaXRlbXMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuYSwgbGkge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWRlYmFyLWl0ZW1zIGxpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwic2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAycHggMTRweCA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2lkZWJhci1pdGVtcyBsaTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZGVza3RvcC1uYXYge1xuICBkaXNwbGF5OiBpbml0aWFsO1xufVxuXG4uZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-menu',
          templateUrl: './nav-menu.component.html',
          styleUrls: ['./nav-menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/resume/resume.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/resume/resume.component.ts ***!
    \******************************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppComponentResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var _c0 = function _c0() {
      return ["far", "gem"];
    };

    var _c1 = function _c1() {
      return ["fab", "html5"];
    };

    var _c2 = function _c2() {
      return ["fab", "css3-alt"];
    };

    var _c3 = function _c3() {
      return ["fab", "js-square"];
    };

    var _c4 = function _c4() {
      return ["fab", "angular"];
    };

    var _c5 = function _c5() {
      return ["fab", "react"];
    };

    var _c6 = function _c6() {
      return ["fas", "certificate"];
    };

    var _c7 = function _c7() {
      return ["fas", "trophy"];
    };

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 155,
      vars: 38,
      consts: [[1, "resume-wrapper"], [1, "background"], ["id", "resume-nav", 1, "resume-nav"], [1, "logo"], ["href", "#"], [1, "img-logo"], ["src", "../../../assets/profile.jpeg", "alt", "Yashvendar", 1, "rounded-img"], ["href", "/resume#intro"], ["href", "/resume#experience"], ["href", "/resume#education"], ["href", "/resume#skills"], ["href", "/resume#interests"], ["href", "/resume#awards"], ["id", "intro"], [1, "about-content", "content-padding"], [1, "main-title", "title", 2, "font-size", "50px"], [1, "red"], [1, "sub-title", "title"], ["href", "mailto:yashvendarbadsiwal@gmail.com"], [1, "main-text", "main"], ["id", "experience"], [1, "experience-content", "content-padding"], [1, "section-title", "title"], [1, "item-wrapper"], [1, "item"], [1, "item-title", "title"], [1, "item-subtitle", "title"], [1, "item-text", "main"], [1, "item-right"], [1, "item-date", "main", "red", "align"], ["id", "education"], [1, "education-content", "content-padding"], [1, "item-text", "main", "small-text"], ["id", "skills"], [1, "skills-content", "content-padding"], [1, "skill-icons", "red"], [1, "icons", "no-margin-left"], ["id", "diamond", "title", "Sketch", 1, "skill-icon", 3, "icon"], [1, "icons"], ["title", "HTML", 1, "skill-icon", 3, "icon"], ["title", "CSS", 1, "skill-icon", 3, "icon"], ["title", "Javascript", 1, "skill-icon", 3, "icon"], ["title", "Angular", 1, "skill-icon", 3, "icon"], ["title", "React", 1, "skill-icon", 3, "icon"], [1, "list"], [1, "list-item"], [1, "trophy", 3, "icon"], [1, "main", "indent"], ["id", "interests"], [1, "interests-content", "content-padding"], ["id", "awards"], [1, "awards-content", "content-padding"], [1, "section-title", "title", "line-height"], [1, "main", "indent", "small-text"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Awards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Yashvendar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Badsiwal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Alwar \xB7 Rajasthan \xB7 India \xB7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "yashvendarbadsiwal@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "I am currently working as a Senior Developer at CBC. I've created full-stack projects with React, Node servers, and databases with PostgreSQL. I have a strong foundation in design, education, and music that influences my work. I am very good at solving problems and I look forward to future challenges and expanding my knowledge and skills. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "article", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Front-end Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "PLAQSHA (Startup)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Working on internal web applications, specializing in design and front-end development with ReactJS. Most of my focus is on UI/UX, including mock-ups using Sketch and a focus on advanced CSS and responsive design principles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Oct. 2020 - Nov. 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "article", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "MNIT JAipur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Bachelor of Technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Computer Science and Engineering ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 6.46 CGPA till VII semester. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Aug 2017 - June 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "fa-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "fa-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "fa-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "fa-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "fa-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "fa-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "ReactJS, Redux Store, Gatsby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Angular, Node JS, Next JS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Responsive Design & Advanced CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "HTML5, CSS3, Adobe XD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Linux Ubuntu/ RedHat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Java, Javascript , C++, Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Outside of my work I have many other passions and hobbies. I have been writing and recording music for 15 years, which is a very rewarding outlet. I've also played hockey since I was 8 years old, including two years playing for Changwon City, South Korea. I have written, directed, and acted in film and theatre, including original works featured at both York University theatres.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "I loved playing video games from an early age and I indulge in my free time thanks to a custom gaming PC I built in 2017. I am very interested in science fiction and am always reading up on the latest technological advancements. I hope to work in the field of virtual reality later in my career.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "section", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Awards & Certifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Flipr Full-stack Hackathon 6.0 - Distinguished to A-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "IEEE - Pedes2020 website Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "MongoDB University - MongoDB basics by MongoDB University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Coursera - Angular by Hong Kong University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Coursera - Bootstrap 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Coursera - ReactJS by Hong Kong University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "fa-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Udemy - jQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c7));
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]],
      styles: ["@font-face {\n  font-family: open-sans;\n  src: url('opensans-reg.ttf');\n}\n@font-face {\n  font-family: saira-ec;\n  src: url('saira-extra-cond-reg.ttf');\n}\n.resume-wrapper[_ngcontent-%COMP%] {\n  font-family: \"Segoe UI\", sans-serif;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  scroll-behavior: smooth;\n  z-index: 5;\n}\n.background[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: white;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000000' fill-opacity='0.04' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E\");\n}\nsection[_ngcontent-%COMP%] {\n  color: black;\n  margin-left: 20%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 100vh;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: saira-ec, sans-serif;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n.item-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: #868e96;\n  margin-top: -5px;\n}\n.sub-title[_ngcontent-%COMP%] {\n  line-height: 2.5rem;\n  font-weight: 500;\n  font-size: 2rem;\n  margin: 0;\n  color: #868e96;\n}\n.sub-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #D30000;\n}\n.main[_ngcontent-%COMP%] {\n  font-family: open-sans, sans-serif;\n  font-size: 1.25rem;\n  color: #868e96;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.red[_ngcontent-%COMP%] {\n  color: #D30000;\n}\n.dark-red[_ngcontent-%COMP%] {\n  color: #990000;\n}\n.align[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.content-padding[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 5vw 0 1vw;\n}\n\n.resume-nav[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  background: #000;\n  width: 18%;\n  height: 100%;\n}\n.resume-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  margin-right: 40px;\n  color: #777;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.resume-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e4e4e4;\n}\n.resume-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .resume-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-within {\n  color: #fff;\n}\n.rounded-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  max-width: 10rem;\n  max-height: 10rem;\n  border: 0.5rem solid rgba(255, 255, 255, 0.2);\n}\n.text-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-bars[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  top: 25.5vh;\n}\n.main-title[_ngcontent-%COMP%] {\n  line-height: 6rem;\n  font-size: 7rem;\n  font-weight: 700;\n  margin: 0;\n}\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 3vh;\n  position: absolute;\n  left: -80px;\n}\n.social-icons[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  flex-direction: row;\n  margin-left: 50px;\n}\n.circle[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n}\n#linkedin[_ngcontent-%COMP%] {\n  left: 70%;\n}\n#medium[_ngcontent-%COMP%] {\n  left: 70%;\n}\n#instagram[_ngcontent-%COMP%] {\n  left: 70%;\n}\n#youtube[_ngcontent-%COMP%] {\n  left: 50%;\n}\n\n.experience-content[_ngcontent-%COMP%] {\n  top: 5vh;\n}\n.item-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 7vh;\n}\n.item[_ngcontent-%COMP%] {\n  width: 70%;\n  display: block;\n}\n.item-right[_ngcontent-%COMP%] {\n  width: 30%;\n  display: block;\n}\n.item-date[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.education-content[_ngcontent-%COMP%] {\n  top: 25.5vh;\n}\n\n.skills-content[_ngcontent-%COMP%] {\n  top: 25.5vh;\n}\n.skill-icons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 5vh;\n  margin-bottom: 8vh;\n}\n.icons[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  flex-direction: row;\n  margin-left: 75px;\n}\n.no-margin-left[_ngcontent-%COMP%] {\n  margin-left: -1vw;\n}\n.skill-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n}\n#diamond[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.interests-content[_ngcontent-%COMP%] {\n  top: 25.5vh;\n}\n\n.awards-content[_ngcontent-%COMP%] {\n  top: 25.5vh;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list-item[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.trophy[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n.indent[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 10px;\n}\n\n@media screen and (min-width: 800px) and (min-height: 945px) {\n  .about-content[_ngcontent-%COMP%] {\n    top: 32vh;\n  }\n\n  .education-content[_ngcontent-%COMP%] {\n    top: 32vh;\n  }\n\n  .skills-content[_ngcontent-%COMP%] {\n    top: 32vh;\n  }\n\n  .interests-content[_ngcontent-%COMP%] {\n    top: 32vh;\n  }\n\n  .awards-content[_ngcontent-%COMP%] {\n    top: 32vh;\n  }\n}\n@media screen and (min-width: 800px) and (min-height: 901px) and (max-height: 944px) {\n  .about-content[_ngcontent-%COMP%] {\n    top: 31vh;\n  }\n\n  .education-content[_ngcontent-%COMP%] {\n    top: 31vh;\n  }\n\n  .skills-content[_ngcontent-%COMP%] {\n    top: 31vh;\n  }\n\n  .interests-content[_ngcontent-%COMP%] {\n    top: 31vh;\n  }\n\n  .awards-content[_ngcontent-%COMP%] {\n    top: 31vh;\n  }\n}\n@media screen and (min-width: 800px) and (min-height: 780px) and (max-height: 900px) {\n  .about-content[_ngcontent-%COMP%] {\n    top: 28vh;\n  }\n\n  .education-content[_ngcontent-%COMP%] {\n    top: 28vh;\n  }\n\n  .skills-content[_ngcontent-%COMP%] {\n    top: 28vh;\n  }\n\n  .interests-content[_ngcontent-%COMP%] {\n    top: 28vh;\n  }\n\n  .awards-content[_ngcontent-%COMP%] {\n    top: 28vh;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .rounded-img[_ngcontent-%COMP%] {\n    max-width: 7rem;\n    max-height: 7rem;\n    border-width: 0.25rem;\n  }\n\n  .education-content[_ngcontent-%COMP%] {\n    top: 10vh;\n  }\n\n  .skills-content[_ngcontent-%COMP%] {\n    top: 20vh;\n  }\n\n  .interests-content[_ngcontent-%COMP%] {\n    top: 20vh;\n  }\n\n  .awards-content[_ngcontent-%COMP%] {\n    top: 20vh;\n  }\n}\n\n@media screen and (max-width: 1080px) {\n  section[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .content-padding[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n\n  \n  .navbar-background[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    background-color: black;\n    z-index: 100;\n  }\n\n  .menu-bars[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n    display: initial;\n    font-size: 35px;\n    color: white;\n    margin-left: 10px;\n  }\n\n  .resume-nav[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    width: 100%;\n    height: 210px;\n    opacity: 0.95;\n    flex-direction: column;\n    z-index: 20;\n    top: -500px;\n    transition: 0.75s ease;\n  }\n\n  .resume-nav-expand[_ngcontent-%COMP%] {\n    top: 0;\n    transition: 0.3s ease;\n  }\n\n  .resume-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-left: -40px;\n  }\n\n  .resume-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin-right: 5px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .rounded-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .text-logo[_ngcontent-%COMP%] {\n    color: white;\n    display: inherit;\n    position: absolute;\n    top: 3px;\n    left: 33%;\n    z-index: 70;\n    font-size: 30px;\n    margin-bottom: 0;\n  }\n\n  \n  .social-icons[_ngcontent-%COMP%] {\n    left: -65px;\n  }\n\n  .social-icons[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    margin-left: 40px;\n  }\n\n  .circle[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  .icon[_ngcontent-%COMP%] {\n    font-size: 1.65rem;\n  }\n\n  #linkedin[_ngcontent-%COMP%] {\n    left: 60%;\n  }\n\n  #medium[_ngcontent-%COMP%] {\n    left: 60%;\n  }\n\n  #instagram[_ngcontent-%COMP%] {\n    left: 60%;\n  }\n\n  #youtube[_ngcontent-%COMP%] {\n    left: 45%;\n  }\n\n  \n  .skill-icons[_ngcontent-%COMP%] {\n    margin-left: -77px;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  .skill-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  #diamond[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n\n@media screen and (min-width: 650px) and (max-width: 768px) {\n  .text-logo[_ngcontent-%COMP%] {\n    left: 41%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .align[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n\n  \n  .item-wrapper[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5vh;\n  }\n\n  .item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .item-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  \n  .line-height[_ngcontent-%COMP%] {\n    line-height: 4rem;\n    margin-bottom: 1vh;\n  }\n}\n\n@media screen and (max-width: 375px) and (min-height: 700px) {\n  .small-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n@media screen and (max-width: 375px) and (max-height: 699px) {\n  .about-content[_ngcontent-%COMP%] {\n    top: 10vh;\n  }\n\n  .education-content[_ngcontent-%COMP%] {\n    top: 10vh;\n  }\n\n  .skills-content[_ngcontent-%COMP%] {\n    top: 10vh;\n  }\n\n  .interests-content[_ngcontent-%COMP%] {\n    top: 10vh;\n  }\n\n  .awards-content[_ngcontent-%COMP%] {\n    top: 10vh;\n  }\n\n  .small-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhc2h2ZW5kYXIvRG9jdW1lbnRzL0FuZ3VsYXIvcG9ydGZvbGlvL3NyYy9hcHAvY29tcG9uZW50L3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsc0JBQUE7RUFBd0IsNEJBQUE7QUNHckM7QURGQTtFQUFhLHFCQUFBO0VBQXVCLG9DQUFBO0FDTXBDO0FESkE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDTUY7QURKQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSwydUtBQUE7QUNPRjtBRExBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRE5BO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQ1NGO0FEUEE7RUFDRSxlQUFBO0FDVUY7QURSQTtFQUNFLGlCQUFBO0FDV0Y7QURUQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNZRjtBRFZBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ2FGO0FEWEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFpBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNlRjtBRGJBO0VBQ0UsZ0JBQUE7QUNnQkY7QURkQTtFQUNFLGNBQUE7QUNpQkY7QURmQTtFQUNFLGNBQUE7QUNrQkY7QURoQkE7RUFDRSw0QkFBQTtBQ21CRjtBRGpCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUNvQkY7QURqQkEsd0VBQUE7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDbUJGO0FEakJBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNvQkY7QURsQkE7RUFDRSxjQUFBO0FDcUJGO0FEbkJBO0VBQ0UsV0FBQTtBQ3NCRjtBRHBCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FDdUJGO0FEckJBO0VBQ0UsYUFBQTtBQ3dCRjtBRHRCQTtFQUNFLGFBQUE7QUN5QkY7QUR2QkEsZ0dBQUE7QUFDQTtFQUNFLFdBQUE7QUMwQkY7QUR4QkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUMyQkY7QUR6QkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzRCRjtBRDFCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUM2QkY7QUQzQkE7RUFDRSxpQkFBQTtBQzhCRjtBRDVCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUMrQkY7QUQ3QkE7RUFDRSxTQUFBO0FDZ0NGO0FEOUJBO0VBQ0UsU0FBQTtBQ2lDRjtBRC9CQTtFQUNFLFNBQUE7QUNrQ0Y7QURoQ0E7RUFDRSxTQUFBO0FDbUNGO0FEakNBLHNFQUFBO0FBQ0E7RUFDRSxRQUFBO0FDb0NGO0FEbENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDcUNGO0FEbkNBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNzQ0Y7QURwQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ3VDRjtBRHJDQTtFQUNFLGVBQUE7QUN3Q0Y7QUR0Q0EsdUVBQUE7QUFDQTtFQUNFLFdBQUE7QUN5Q0Y7QUR2Q0EsdUVBQUE7QUFDQTtFQUNFLFdBQUE7QUMwQ0Y7QUR4Q0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDMkNGO0FEekNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQzRDRjtBRDFDQTtFQUNFLGlCQUFBO0FDNkNGO0FEM0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUM4Q0Y7QUQ1Q0E7RUFDRSxlQUFBO0FDK0NGO0FEN0NBLHVFQUFBO0FBQ0E7RUFDRSxXQUFBO0FDZ0RGO0FEOUNBLHVFQUFBO0FBQ0E7RUFDRSxXQUFBO0FDaURGO0FEL0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDa0RGO0FEaERBO0VBQ0UsaUJBQUE7QUNtREY7QURqREE7RUFDRSxjQUFBO0FDb0RGO0FEbERBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ3FERjtBRGxEQSx1RUFBQTtBQUNBO0VBQ0U7SUFBaUIsU0FBQTtFQ3NEakI7O0VEckRBO0lBQXFCLFNBQUE7RUN5RHJCOztFRHhEQTtJQUFrQixTQUFBO0VDNERsQjs7RUQzREE7SUFBcUIsU0FBQTtFQytEckI7O0VEOURBO0lBQWtCLFNBQUE7RUNrRWxCO0FBQ0Y7QURqRUE7RUFDRTtJQUFpQixTQUFBO0VDb0VqQjs7RURuRUE7SUFBcUIsU0FBQTtFQ3VFckI7O0VEdEVBO0lBQWtCLFNBQUE7RUMwRWxCOztFRHpFQTtJQUFxQixTQUFBO0VDNkVyQjs7RUQ1RUE7SUFBa0IsU0FBQTtFQ2dGbEI7QUFDRjtBRC9FQTtFQUNFO0lBQWlCLFNBQUE7RUNrRmpCOztFRGpGQTtJQUFxQixTQUFBO0VDcUZyQjs7RURwRkE7SUFBa0IsU0FBQTtFQ3dGbEI7O0VEdkZBO0lBQXFCLFNBQUE7RUMyRnJCOztFRDFGQTtJQUFrQixTQUFBO0VDOEZsQjtBQUNGO0FEN0ZBO0VBQ0U7SUFBZSxlQUFBO0lBQWlCLGdCQUFBO0lBQWtCLHFCQUFBO0VDa0dsRDs7RURqR0E7SUFBcUIsU0FBQTtFQ3FHckI7O0VEcEdBO0lBQWtCLFNBQUE7RUN3R2xCOztFRHZHQTtJQUFxQixTQUFBO0VDMkdyQjs7RUQxR0E7SUFBa0IsU0FBQTtFQzhHbEI7QUFDRjtBRDdHQSxhQUFBO0FBQ0E7RUFDRTtJQUNFLGNBQUE7RUMrR0Y7O0VEN0dBO0lBQ0UsZUFBQTtFQ2dIRjs7RUQ5R0EseUVBQUE7RUFDQTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VDaUhGOztFRC9HQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ2tIRjs7RURoSEE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtFQ21IRjs7RURqSEE7SUFDRSxNQUFBO0lBQ0EscUJBQUE7RUNvSEY7O0VEbEhBO0lBQ0Usa0JBQUE7RUNxSEY7O0VEbkhBO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VDc0hGOztFRHBIQTtJQUNFLGFBQUE7RUN1SEY7O0VEckhBO0lBQ0UsYUFBQTtFQ3dIRjs7RUR0SEE7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ3lIRjs7RUR2SEEsK0RBQUE7RUFDQTtJQUNFLFdBQUE7RUMwSEY7O0VEeEhBO0lBQ0UsaUJBQUE7RUMySEY7O0VEekhBO0lBQ0UsZUFBQTtFQzRIRjs7RUQxSEE7SUFDRSxrQkFBQTtFQzZIRjs7RUQzSEE7SUFDRSxTQUFBO0VDOEhGOztFRDVIQTtJQUNFLFNBQUE7RUMrSEY7O0VEN0hBO0lBQ0UsU0FBQTtFQ2dJRjs7RUQ5SEE7SUFDRSxTQUFBO0VDaUlGOztFRC9IQSw4REFBQTtFQUNBO0lBQ0Usa0JBQUE7RUNrSUY7O0VEaElBO0lBQ0UsaUJBQUE7RUNtSUY7O0VEaklBO0lBQ0UsZUFBQTtFQ29JRjs7RURsSUE7SUFDRSxpQkFBQTtFQ3FJRjtBQUNGO0FEbklBLFNBQUE7QUFDQTtFQUNFO0lBQWEsU0FBQTtFQ3NJYjtBQUNGO0FEcklBLGlCQUFBO0FBQ0E7RUFDRTtJQUNFLDJCQUFBO0VDdUlGOztFRHJJQSw4REFBQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0VDd0lGOztFRHRJQTtJQUNFLFdBQUE7RUN5SUY7O0VEdklBO0lBQ0UsV0FBQTtFQzBJRjs7RUR4SUEsNkRBQUE7RUFDQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUMySUY7QUFDRjtBRHpJQSxhQUFBO0FBQ0E7RUFDRTtJQUFjLGlCQUFBO0VDNElkO0FBQ0Y7QUQzSUEsaUJBQUE7QUFDQTtFQUNFO0lBQWlCLFNBQUE7RUM4SWpCOztFRDdJQTtJQUFxQixTQUFBO0VDaUpyQjs7RURoSkE7SUFBa0IsU0FBQTtFQ29KbEI7O0VEbkpBO0lBQXFCLFNBQUE7RUN1SnJCOztFRHRKQTtJQUFrQixTQUFBO0VDMEpsQjs7RUR6SkE7SUFBYyxpQkFBQTtFQzZKZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IG9wZW4tc2Fuczsgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udC9vcGVuc2Fucy1yZWcudHRmXCIpIH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogc2FpcmEtZWM7IHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnQvc2FpcmEtZXh0cmEtY29uZC1yZWcudHRmXCIpIH1cblxuLnJlc3VtZS13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHotaW5kZXg6IDU7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7IFxuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwNCAzMDQnIHdpZHRoPSczMDQnIGhlaWdodD0nMzA0JyUzRSUzQ3BhdGggZmlsbD0nJTIzMDAwMDAwJyBmaWxsLW9wYWNpdHk9JzAuMDQnIGQ9J000NC4xIDIyNGE1IDUgMCAxIDEgMCAySDB2LTJoNDQuMXptMTYwIDQ4YTUgNSAwIDEgMSAwIDJIODJ2LTJoMTIyLjF6bTU3LjgtNDZhNSA1IDAgMSAxIDAtMkgzMDR2MmgtNDIuMXptMCAxNmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem02LjItMTE0YTUgNSAwIDEgMSAwIDJoLTg2LjJhNSA1IDAgMSAxIDAtMmg4Ni4yem0tMjU2LTQ4YTUgNSAwIDEgMSAwIDJIMHYtMmgxMi4xem0xODUuOCAzNGE1IDUgMCAxIDEgMC0yaDg2LjJhNSA1IDAgMSAxIDAgMmgtODYuMnpNMjU4IDEyLjFhNSA1IDAgMSAxLTIgMFYwaDJ2MTIuMXptLTY0IDIwOGE1IDUgMCAxIDEtMiAwdi01NC4yYTUgNSAwIDEgMSAyIDB2NTQuMnptNDgtMTk4LjJWODBoNjJ2MmgtNjRWMjEuOWE1IDUgMCAxIDEgMiAwem0xNiAxNlY2NGg0NnYyaC00OFYzNy45YTUgNSAwIDEgMSAyIDB6bS0xMjggOTZWMjA4aDE2djEyLjFhNSA1IDAgMSAxLTIgMFYyMTBoLTE2di03Ni4xYTUgNSAwIDEgMSAyIDB6bS01LjktMjEuOWE1IDUgMCAxIDEgMCAySDExNHY0OEg4NS45YTUgNSAwIDEgMSAwLTJIMTEydi00OGgxMi4xem0tNi4yIDEzMGE1IDUgMCAxIDEgMC0ySDE3NnYtNzQuMWE1IDUgMCAxIDEgMiAwVjI0MmgtNjAuMXptLTE2LTY0YTUgNSAwIDEgMSAwLTJIMTE0djQ4aDEwLjFhNSA1IDAgMSAxIDAgMkgxMTJ2LTQ4aC0xMC4xek02NiAyODQuMWE1IDUgMCAxIDEtMiAwVjI3NEg1MHYzMGgtMnYtMzJoMTh2MTIuMXpNMjM2LjEgMTc2YTUgNSAwIDEgMSAwIDJIMjI2djk0aDQ4djMyaC0ydi0zMGgtNDh2LTk4aDEyLjF6bTI1LjgtMzBhNSA1IDAgMSAxIDAtMkgyNzR2NDQuMWE1IDUgMCAxIDEtMiAwVjE0NmgtMTAuMXptLTY0IDk2YTUgNSAwIDEgMSAwLTJIMjA4di04MGgxNnYtMTRoLTQyLjFhNSA1IDAgMSAxIDAtMkgyMjZ2MThoLTE2djgwaC0xMi4xem04Ni4yLTIxMGE1IDUgMCAxIDEgMCAySDI3MlYwaDJ2MzJoMTAuMXpNOTggMTAxLjlWMTQ2SDUzLjlhNSA1IDAgMSAxIDAtMkg5NnYtNDIuMWE1IDUgMCAxIDEgMiAwek01My45IDM0YTUgNSAwIDEgMSAwLTJIODBWMGgydjM0SDUzLjl6bTYwLjEgMy45VjY2SDgydjY0SDY5LjlhNSA1IDAgMSAxIDAtMkg4MFY2NGgzMlYzNy45YTUgNSAwIDEgMSAyIDB6TTEwMS45IDgyYTUgNSAwIDEgMSAwLTJIMTI4VjM3LjlhNSA1IDAgMSAxIDIgMFY4MmgtMjguMXptMTYtNjRhNSA1IDAgMSAxIDAtMkgxNDZ2NDQuMWE1IDUgMCAxIDEtMiAwVjE4aC0yNi4xem0xMDIuMiAyNzBhNSA1IDAgMSAxIDAgMkg5OHYxNGgtMnYtMTZoMTI0LjF6TTI0MiAxNDkuOVYxNjBoMTZ2MzRoLTE2djYyaDQ4djQ4aC0ydi00NmgtNDh2LTY2aDE2di0zMGgtMTZ2LTEyLjFhNSA1IDAgMSAxIDIgMHpNNTMuOSAxOGE1IDUgMCAxIDEgMC0ySDY0VjJINDhWMGgxOHYxOEg1My45em0xMTIgMzJhNSA1IDAgMSAxIDAtMkgxOTJWMGg1MHYyaC00OHY0OGgtMjguMXptLTQ4LTQ4YTUgNSAwIDAgMS05LjgtMmgyLjA3YTMgMyAwIDEgMCA1LjY2IDBIMTc4djM0aC0xOFYyMS45YTUgNSAwIDEgMSAyIDBWMzJoMTRWMmgtNTguMXptMCA5NmE1IDUgMCAxIDEgMC0ySDEzN2wzMi0zMmgzOVYyMS45YTUgNSAwIDEgMSAyIDBWNjZoLTQwLjE3bC0zMiAzMkgxMTcuOXptMjguMSA5MC4xYTUgNSAwIDEgMS0yIDB2LTc2LjUxTDE3NS41OSA4MEgyMjRWMjEuOWE1IDUgMCAxIDEgMiAwVjgyaC00OS41OUwxNDYgMTEyLjQxdjc1LjY5em0xNiAzMmE1IDUgMCAxIDEtMiAwdi05OS41MUwxODQuNTkgOTZIMzAwLjFhNSA1IDAgMCAxIDMuOS0zLjl2Mi4wN2EzIDMgMCAwIDAgMCA1LjY2djIuMDdhNSA1IDAgMCAxLTMuOS0zLjlIMTg1LjQxTDE2MiAxMjEuNDF2OTguNjl6bS0xNDQtNjRhNSA1IDAgMSAxLTIgMHYtMy41MWw0OC00OFY0OGgzMlYwaDJ2NTBINjZ2NTUuNDFsLTQ4IDQ4djIuNjl6TTUwIDUzLjl2NDMuNTFsLTQ4IDQ4VjIwOGgyNi4xYTUgNSAwIDEgMSAwIDJIMHYtNjUuNDFsNDgtNDhWNTMuOWE1IDUgMCAxIDEgMiAwem0tMTYgMTZWODkuNDFsLTM0IDM0di0yLjgybDMyLTMyVjY5LjlhNSA1IDAgMSAxIDIgMHpNMTIuMSAzMmE1IDUgMCAxIDEgMCAySDkuNDFMMCA0My40MVY0MC42TDguNTkgMzJoMy41MXptMjY1LjggMThhNSA1IDAgMSAxIDAtMmgxOC42OWw3LjQxLTcuNDF2Mi44MkwyOTcuNDEgNTBIMjc3Ljl6bS0xNiAxNjBhNSA1IDAgMSAxIDAtMkgyODh2LTcxLjQxbDE2LTE2djIuODJsLTE0IDE0VjIxMGgtMjguMXptLTIwOCAzMmE1IDUgMCAxIDEgMC0ySDY0di0yMi41OUw0MC41OSAxOTRIMjEuOWE1IDUgMCAxIDEgMC0ySDQxLjQxTDY2IDIxNi41OVYyNDJINTMuOXptMTUwLjIgMTRhNSA1IDAgMSAxIDAgMkg5NnYtNTYuNkw1Ni42IDE2MkgzNy45YTUgNSAwIDEgMSAwLTJoMTkuNUw5OCAyMDAuNlYyNTZoMTA2LjF6bS0xNTAuMiAyYTUgNSAwIDEgMSAwLTJIODB2LTQ2LjU5TDQ4LjU5IDE3OEgyMS45YTUgNSAwIDEgMSAwLTJINDkuNDFMODIgMjA4LjU5VjI1OEg1My45ek0zNCAzOS44djEuNjFMOS40MSA2Nkgwdi0yaDguNTlMMzIgNDAuNTlWMGgydjM5Ljh6TTIgMzAwLjFhNSA1IDAgMCAxIDMuOSAzLjlIMy44M0EzIDMgMCAwIDAgMCAzMDIuMTdWMjU2aDE4djQ4aC0ydi00NkgydjQyLjF6TTM0IDI0MXY2M2gtMnYtNjJIMHYtMmgzNHYxek0xNyAxOEgwdi0yaDE2VjBoMnYxOGgtMXptMjczLTJoMTR2MmgtMTZWMGgydjE2em0tMzIgMjczdjE1aC0ydi0xNGgtMTR2MTRoLTJ2LTE2aDE4djF6TTAgOTIuMUE1LjAyIDUuMDIgMCAwIDEgNiA5N2E1IDUgMCAwIDEtNiA0Ljl2LTIuMDdhMyAzIDAgMSAwIDAtNS42NlY5Mi4xek04MCAyNzJoMnYzMmgtMnYtMzJ6bTM3LjkgMzJoLTIuMDdhMyAzIDAgMCAwLTUuNjYgMGgtMi4wN2E1IDUgMCAwIDEgOS44IDB6TTUuOSAwQTUuMDIgNS4wMiAwIDAgMSAwIDUuOVYzLjgzQTMgMyAwIDAgMCAzLjgzIDBINS45em0yOTQuMiAwaDIuMDdBMyAzIDAgMCAwIDMwNCAzLjgzVjUuOWE1IDUgMCAwIDEtMy45LTUuOXptMy45IDMwMC4xdjIuMDdhMyAzIDAgMCAwLTEuODMgMS44M2gtMi4wN2E1IDUgMCAwIDEgMy45LTMuOXpNOTcgMTAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMC0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTQ4IDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA0OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMC0zMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzIgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTY0YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDk2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTQ0YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAzMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0zMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTk2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0zMiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMC0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTQ5IDM2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTMzIDY4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtNDhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDI0MGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTY0YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0zMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTgwLTE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA0OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMC0zMmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTExMiAxNzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTE3IDE4MGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTE3IDg0YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzIgNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbnNlY3Rpb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7IFxuICBoZWlnaHQ6IGZpdC1jb250ZW50OyBcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4udGl0bGUge1xuICBmb250LWZhbWlseTogc2FpcmEtZWMsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMDtcbn0gXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cbi5pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG4uaXRlbS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzg2OGU5NjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5zdWItdGl0bGUge1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM4NjhlOTY7XG59XG4uc3ViLXRpdGxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRDMwMDAwO1xufVxuLm1haW4ge1xuICBmb250LWZhbWlseTogb3Blbi1zYW5zLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjODY4ZTk2O1xufVxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnJlZCB7XG4gIGNvbG9yOiAjRDMwMDAwO1xufVxuLmRhcmstcmVkIHtcbiAgY29sb3I6ICM5OTAwMDA7XG59XG4uYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtcGFkZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA1dncgMCAxdnc7XG59XG5cbi8qIE5hdmlnYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnJlc3VtZS1uYXYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgd2lkdGg6IDE4JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlc3VtZS1uYXYgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlc3VtZS1uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XG59XG4ucmVzdW1lLW5hdiBhOmFjdGl2ZSwgLnJlc3VtZS1uYXYgYTpmb2N1cy13aXRoaW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yb3VuZGVkLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgbWF4LWhlaWdodDogMTByZW07XG4gIGJvcmRlcjogLjVyZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XG59XG4udGV4dC1sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51LWJhcnMgZmEtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKiBBYm91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uYWJvdXQtY29udGVudCB7XG4gIHRvcDogMjUuNXZoO1xufVxuLm1haW4tdGl0bGUge1xuICBsaW5lLWhlaWdodDogNnJlbTtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDA7XG59XG4uc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC04MHB4O1xufVxuLnNvY2lhbC1pY29ucyAuaWNvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5jaXJjbGUge1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cbi5pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuI2xpbmtlZGluIHtcbiAgbGVmdDogNzAlO1xufVxuI21lZGl1bSB7IFxuICBsZWZ0OiA3MCU7XG59XG4jaW5zdGFncmFtIHtcbiAgbGVmdDogNzAlO1xufVxuI3lvdXR1YmUge1xuICBsZWZ0OiA1MCU7XG59XG4vKiBFeHBlcmllbmNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmV4cGVyaWVuY2UtY29udGVudCB7XG4gIHRvcDogNXZoO1xufVxuLml0ZW0td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbn1cbi5pdGVtIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaXRlbS1yaWdodCB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLml0ZW0tZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi8qIEVkdWNhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmVkdWNhdGlvbi1jb250ZW50IHtcbiAgdG9wOiAyNS41dmg7XG59XG4vKiBTa2lsbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5za2lsbHMtY29udGVudCB7XG4gIHRvcDogMjUuNXZoO1xufVxuLnNraWxsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tYm90dG9tOiA4dmg7XG59XG4uaWNvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogNzVweDtcbn1cbi5uby1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXZ3O1xufVxuLnNraWxsLWljb24ge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiNkaWFtb25kIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuLyogSW50ZXJlc3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uaW50ZXJlc3RzLWNvbnRlbnQge1xuICB0b3A6IDI1LjV2aDtcbn1cbi8qIEF3YXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmF3YXJkcy1jb250ZW50IHtcbiAgdG9wOiAyNS41dmg7XG59XG4ubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGlzdC1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udHJvcGh5IHtcbiAgY29sb3I6ICM4NjhlOTY7XG59XG4uaW5kZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduIE1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWluLWhlaWdodDogOTQ1cHgpIHtcbiAgLmFib3V0LWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cbiAgLmVkdWNhdGlvbi1jb250ZW50IHsgdG9wOiAzMnZoOyB9XG4gIC5za2lsbHMtY29udGVudCB7IHRvcDogMzJ2aDsgfVxuICAuaW50ZXJlc3RzLWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cbiAgLmF3YXJkcy1jb250ZW50IHsgdG9wOiAzMnZoOyB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MDFweCkgYW5kIChtYXgtaGVpZ2h0OiA5NDRweCkge1xuICAuYWJvdXQtY29udGVudCB7IHRvcDogMzF2aDsgfVxuICAuZWR1Y2F0aW9uLWNvbnRlbnQgeyB0b3A6IDMxdmg7IH1cbiAgLnNraWxscy1jb250ZW50IHsgdG9wOiAzMXZoOyB9XG4gIC5pbnRlcmVzdHMtY29udGVudCB7IHRvcDogMzF2aDsgfVxuICAuYXdhcmRzLWNvbnRlbnQgeyB0b3A6IDMxdmg7IH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5hYm91dC1jb250ZW50IHsgdG9wOiAyOHZoOyB9XG4gIC5lZHVjYXRpb24tY29udGVudCB7IHRvcDogMjh2aDsgfVxuICAuc2tpbGxzLWNvbnRlbnQgeyB0b3A6IDI4dmg7IH1cbiAgLmludGVyZXN0cy1jb250ZW50IHsgdG9wOiAyOHZoOyB9XG4gIC5hd2FyZHMtY29udGVudCB7IHRvcDogMjh2aDsgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5yb3VuZGVkLWltZyB7IG1heC13aWR0aDogN3JlbTsgbWF4LWhlaWdodDogN3JlbTsgYm9yZGVyLXdpZHRoOiAuMjVyZW07IH1cbiAgLmVkdWNhdGlvbi1jb250ZW50IHsgdG9wOiAxMHZoOyB9XG4gIC5za2lsbHMtY29udGVudCB7IHRvcDogMjB2aDsgfVxuICAuaW50ZXJlc3RzLWNvbnRlbnQgeyB0b3A6IDIwdmg7IH1cbiAgLmF3YXJkcy1jb250ZW50IHsgdG9wOiAyMHZoOyB9XG59XG4vKiA8IExhcHRvcCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5jb250ZW50LXBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuICAvKiBOYXZpZ2F0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAubmF2YmFyLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5tZW51LWJhcnMgZmEtaWNvbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5yZXN1bWUtbmF2IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgb3BhY2l0eTogLjk1O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgei1pbmRleDogMjA7XG4gICAgdG9wOiAtNTAwcHg7XG4gICAgdHJhbnNpdGlvbjogMC43NXMgZWFzZTtcbiAgfVxuICAucmVzdW1lLW5hdi1leHBhbmQge1xuICAgIHRvcDogMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIH1cbiAgLnJlc3VtZS1uYXYgdWwge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgfVxuICAucmVzdW1lLW5hdiBhIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLmxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnJvdW5kZWQtaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC50ZXh0LWxvZ28ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAzMyU7XG4gICAgei1pbmRleDogNzA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLyogQWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAuc29jaWFsLWljb25zIHtcbiAgICBsZWZ0OiAtNjVweDtcbiAgfVxuICAuc29jaWFsLWljb25zIC5pY29ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLmNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIC5pY29uIHtcbiAgICBmb250LXNpemU6IDEuNjVyZW07XG4gIH1cbiAgI2xpbmtlZGluIHtcbiAgICBsZWZ0OiA2MCU7XG4gIH1cbiAgI21lZGl1bSB7XG4gICAgbGVmdDogNjAlO1xuICB9XG4gICNpbnN0YWdyYW0ge1xuICAgIGxlZnQ6IDYwJTtcbiAgfVxuICAjeW91dHViZSB7XG4gICAgbGVmdDogNDUlO1xuICB9XG4gIC8qIFNraWxscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAuc2tpbGwtaWNvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAtNzdweDtcbiAgfVxuICAuaWNvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG4gIC5za2lsbC1pY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgI2RpYW1vbmQge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG4vKiBpUGFkICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50ZXh0LWxvZ28geyBsZWZ0OiA0MSU7IH1cbn1cbi8qIExhcmdlIE1vYmlsZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLyogRXhwZXJpZW5jZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC5pdGVtLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgfVxuICAuaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLml0ZW0tcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC8qIEF3YXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC5saW5lLWhlaWdodCB7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG59XG4vKiBpUGhvbmUgWCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcbiAgLnNtYWxsLXRleHQgeyBmb250LXNpemU6IC45cmVtOyB9XG59XG4vKiBpUGhvbmUgNi83LzggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY5OXB4KSB7XG4gIC5hYm91dC1jb250ZW50IHsgdG9wOiAxMHZoOyB9XG4gIC5lZHVjYXRpb24tY29udGVudCB7IHRvcDogMTB2aDsgfVxuICAuc2tpbGxzLWNvbnRlbnQgeyB0b3A6IDEwdmg7IH1cbiAgLmludGVyZXN0cy1jb250ZW50IHsgdG9wOiAxMHZoOyB9XG4gIC5hd2FyZHMtY29udGVudCB7IHRvcDogMTB2aDsgfVxuICAuc21hbGwtdGV4dCB7IGZvbnQtc2l6ZTogLjlyZW07IH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2FucztcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udC9vcGVuc2Fucy1yZWcudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBzYWlyYS1lYztcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udC9zYWlyYS1leHRyYS1jb25kLXJlZy50dGZcIik7XG59XG4ucmVzdW1lLXdyYXBwZXIge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB6LWluZGV4OiA1O1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzA0IDMwNCcgd2lkdGg9JzMwNCcgaGVpZ2h0PSczMDQnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAwMDAnIGZpbGwtb3BhY2l0eT0nMC4wNCcgZD0nTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG5zZWN0aW9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhaXJhLWVjLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDA7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4uaXRlbS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uaXRlbS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzg2OGU5NjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzg2OGU5Njtcbn1cblxuLnN1Yi10aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0QzMDAwMDtcbn1cblxuLm1haW4ge1xuICBmb250LWZhbWlseTogb3Blbi1zYW5zLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjODY4ZTk2O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI0QzMDAwMDtcbn1cblxuLmRhcmstcmVkIHtcbiAgY29sb3I6ICM5OTAwMDA7XG59XG5cbi5hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LXBhZGRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgNXZ3IDAgMXZ3O1xufVxuXG4vKiBOYXZpZ2F0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ucmVzdW1lLW5hdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB3aWR0aDogMTglO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yZXN1bWUtbmF2IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlc3VtZS1uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZTRlNGU0O1xufVxuXG4ucmVzdW1lLW5hdiBhOmFjdGl2ZSwgLnJlc3VtZS1uYXYgYTpmb2N1cy13aXRoaW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJvdW5kZWQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXgtd2lkdGg6IDEwcmVtO1xuICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgYm9yZGVyOiAwLjVyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4udGV4dC1sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtYmFycyBmYS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogQWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmFib3V0LWNvbnRlbnQge1xuICB0b3A6IDI1LjV2aDtcbn1cblxuLm1haW4tdGl0bGUge1xuICBsaW5lLWhlaWdodDogNnJlbTtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTgwcHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgLmljb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5jaXJjbGUge1xuICBmb250LXNpemU6IDMuNXJlbTtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDU1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNsaW5rZWRpbiB7XG4gIGxlZnQ6IDcwJTtcbn1cblxuI21lZGl1bSB7XG4gIGxlZnQ6IDcwJTtcbn1cblxuI2luc3RhZ3JhbSB7XG4gIGxlZnQ6IDcwJTtcbn1cblxuI3lvdXR1YmUge1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIEV4cGVyaWVuY2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZXhwZXJpZW5jZS1jb250ZW50IHtcbiAgdG9wOiA1dmg7XG59XG5cbi5pdGVtLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pdGVtLXJpZ2h0IHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pdGVtLWRhdGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi8qIEVkdWNhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmVkdWNhdGlvbi1jb250ZW50IHtcbiAgdG9wOiAyNS41dmg7XG59XG5cbi8qIFNraWxscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnNraWxscy1jb250ZW50IHtcbiAgdG9wOiAyNS41dmg7XG59XG5cbi5za2lsbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgbWFyZ2luLWJvdHRvbTogOHZoO1xufVxuXG4uaWNvbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogNzVweDtcbn1cblxuLm5vLW1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xdnc7XG59XG5cbi5za2lsbC1pY29uIHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDU1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNkaWFtb25kIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4vKiBJbnRlcmVzdHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5pbnRlcmVzdHMtY29udGVudCB7XG4gIHRvcDogMjUuNXZoO1xufVxuXG4vKiBBd2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5hd2FyZHMtY29udGVudCB7XG4gIHRvcDogMjUuNXZoO1xufVxuXG4ubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5saXN0LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRyb3BoeSB7XG4gIGNvbG9yOiAjODY4ZTk2O1xufVxuXG4uaW5kZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduIE1lZGlhIFF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWluLWhlaWdodDogOTQ1cHgpIHtcbiAgLmFib3V0LWNvbnRlbnQge1xuICAgIHRvcDogMzJ2aDtcbiAgfVxuXG4gIC5lZHVjYXRpb24tY29udGVudCB7XG4gICAgdG9wOiAzMnZoO1xuICB9XG5cbiAgLnNraWxscy1jb250ZW50IHtcbiAgICB0b3A6IDMydmg7XG4gIH1cblxuICAuaW50ZXJlc3RzLWNvbnRlbnQge1xuICAgIHRvcDogMzJ2aDtcbiAgfVxuXG4gIC5hd2FyZHMtY29udGVudCB7XG4gICAgdG9wOiAzMnZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MDFweCkgYW5kIChtYXgtaGVpZ2h0OiA5NDRweCkge1xuICAuYWJvdXQtY29udGVudCB7XG4gICAgdG9wOiAzMXZoO1xuICB9XG5cbiAgLmVkdWNhdGlvbi1jb250ZW50IHtcbiAgICB0b3A6IDMxdmg7XG4gIH1cblxuICAuc2tpbGxzLWNvbnRlbnQge1xuICAgIHRvcDogMzF2aDtcbiAgfVxuXG4gIC5pbnRlcmVzdHMtY29udGVudCB7XG4gICAgdG9wOiAzMXZoO1xuICB9XG5cbiAgLmF3YXJkcy1jb250ZW50IHtcbiAgICB0b3A6IDMxdmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDkwMHB4KSB7XG4gIC5hYm91dC1jb250ZW50IHtcbiAgICB0b3A6IDI4dmg7XG4gIH1cblxuICAuZWR1Y2F0aW9uLWNvbnRlbnQge1xuICAgIHRvcDogMjh2aDtcbiAgfVxuXG4gIC5za2lsbHMtY29udGVudCB7XG4gICAgdG9wOiAyOHZoO1xuICB9XG5cbiAgLmludGVyZXN0cy1jb250ZW50IHtcbiAgICB0b3A6IDI4dmg7XG4gIH1cblxuICAuYXdhcmRzLWNvbnRlbnQge1xuICAgIHRvcDogMjh2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5yb3VuZGVkLWltZyB7XG4gICAgbWF4LXdpZHRoOiA3cmVtO1xuICAgIG1heC1oZWlnaHQ6IDdyZW07XG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xuICB9XG5cbiAgLmVkdWNhdGlvbi1jb250ZW50IHtcbiAgICB0b3A6IDEwdmg7XG4gIH1cblxuICAuc2tpbGxzLWNvbnRlbnQge1xuICAgIHRvcDogMjB2aDtcbiAgfVxuXG4gIC5pbnRlcmVzdHMtY29udGVudCB7XG4gICAgdG9wOiAyMHZoO1xuICB9XG5cbiAgLmF3YXJkcy1jb250ZW50IHtcbiAgICB0b3A6IDIwdmg7XG4gIH1cbn1cbi8qIDwgTGFwdG9wICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuY29udGVudC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cblxuICAvKiBOYXZpZ2F0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAubmF2YmFyLWJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG5cbiAgLm1lbnUtYmFycyBmYS1pY29uIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAucmVzdW1lLW5hdiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB0b3A6IC01MDBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjc1cyBlYXNlO1xuICB9XG5cbiAgLnJlc3VtZS1uYXYtZXhwYW5kIHtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICB9XG5cbiAgLnJlc3VtZS1uYXYgdWwge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgfVxuXG4gIC5yZXN1bWUtbmF2IGEge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnJvdW5kZWQtaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRleHQtbG9nbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDMzJTtcbiAgICB6LWluZGV4OiA3MDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC8qIEFib3V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLnNvY2lhbC1pY29ucyB7XG4gICAgbGVmdDogLTY1cHg7XG4gIH1cblxuICAuc29jaWFsLWljb25zIC5pY29ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAuY2lyY2xlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xuICB9XG5cbiAgI2xpbmtlZGluIHtcbiAgICBsZWZ0OiA2MCU7XG4gIH1cblxuICAjbWVkaXVtIHtcbiAgICBsZWZ0OiA2MCU7XG4gIH1cblxuICAjaW5zdGFncmFtIHtcbiAgICBsZWZ0OiA2MCU7XG4gIH1cblxuICAjeW91dHViZSB7XG4gICAgbGVmdDogNDUlO1xuICB9XG5cbiAgLyogU2tpbGxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC5za2lsbC1pY29ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IC03N3B4O1xuICB9XG5cbiAgLmljb25zIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxuXG4gIC5za2lsbC1pY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICAjZGlhbW9uZCB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbi8qIGlQYWQgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRleHQtbG9nbyB7XG4gICAgbGVmdDogNDElO1xuICB9XG59XG4vKiBMYXJnZSBNb2JpbGUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogRXhwZXJpZW5jZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC5pdGVtLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgfVxuXG4gIC5pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pdGVtLXJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8qIEF3YXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC5saW5lLWhlaWdodCB7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xuICB9XG59XG4vKiBpUGhvbmUgWCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcbiAgLnNtYWxsLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG4vKiBpUGhvbmUgNi83LzggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY5OXB4KSB7XG4gIC5hYm91dC1jb250ZW50IHtcbiAgICB0b3A6IDEwdmg7XG4gIH1cblxuICAuZWR1Y2F0aW9uLWNvbnRlbnQge1xuICAgIHRvcDogMTB2aDtcbiAgfVxuXG4gIC5za2lsbHMtY29udGVudCB7XG4gICAgdG9wOiAxMHZoO1xuICB9XG5cbiAgLmludGVyZXN0cy1jb250ZW50IHtcbiAgICB0b3A6IDEwdmg7XG4gIH1cblxuICAuYXdhcmRzLWNvbnRlbnQge1xuICAgIHRvcDogMTB2aDtcbiAgfVxuXG4gIC5zbWFsbC10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/yashvendar/Documents/Angular/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map