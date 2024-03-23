function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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
  "./src/app/animation/animation.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/animation/animation.component.ts ***!
    \**************************************************/

  /*! exports provided: AnimationComponent */

  /***/
  function srcAppAnimationAnimationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationComponent", function () {
      return AnimationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnimationComponent = /*#__PURE__*/function () {
      function AnimationComponent() {
        _classCallCheck(this, AnimationComponent);
      }

      _createClass(AnimationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationComponent;
    }();

    AnimationComponent.ɵfac = function AnimationComponent_Factory(t) {
      return new (t || AnimationComponent)();
    };

    AnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimationComponent,
      selectors: [["app-animation"]],
      decls: 2,
      vars: 0,
      consts: [[1, "main"], [1, "box"]],
      template: function AnimationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".box[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  background-color: red;\n  animation-name: box;\n  position: relative;\n  animation-duration: 5s;\n  animation-delay: 10s;\n  opacity: 0.5;\n  animation-iteration-count: 3;\n}\n\n@keyframes box {\n  0% {\n    background-color: red;\n    left: 0px;\n    top: 0px;\n  }\n  25% {\n    background-color: green;\n    left: 200px;\n    top: 0px;\n    transform: rotate(30deg);\n    transform: rotate(90deg);\n  }\n  50% {\n    background-color: yellow;\n    top: 200px;\n    left: 200px;\n    transform: rotate(30deg);\n  }\n  75% {\n    background-color: black;\n    left: 0px;\n    top: 200px;\n    transform: rotate(30deg);\n  }\n  100% {\n    background-color: saddlebrown;\n    left: 0px;\n    top: 0px;\n    transform: rotate(30deg);\n  }\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  margin-top: 100px;\n}\n\n.baloon1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 120px;\n  animation-name: balloon1;\n  animation-duration: 10s;\n  position: relative;\n  top: 600px;\n  animation-iteration-count: 3;\n}\n\n.baloonTop1[_ngcontent-%COMP%] {\n  height: 95px;\n  width: 85px;\n  border-radius: 52%;\n  background-color: yellow;\n  box-shadow: 0px 0px 2px grey;\n}\n\n.whole[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.baloondown1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.baloonLine1[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 80px;\n  border: 1px solid grey;\n}\n\n@keyframes balloon1 {\n  0% {\n    top: 600px;\n  }\n  100% {\n    top: -200px;\n  }\n}\n\n.baloon2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 120px;\n  animation-name: balloon2;\n  animation-duration: 10s;\n  position: relative;\n  top: 600px;\n  animation-iteration-count: 3;\n  animation-delay: 2s;\n}\n\n.baloonTop2[_ngcontent-%COMP%] {\n  height: 126px;\n  width: 100%;\n  border-radius: 52%;\n  background-color: yellow;\n  box-shadow: 0px 0px 2px grey;\n}\n\n.baloondown2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.baloonLine2[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 80px;\n  border: 1px solid grey;\n}\n\n@keyframes balloon2 {\n  0% {\n    top: 600px;\n  }\n  100% {\n    top: -200px;\n  }\n}\n\n.baloon3[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 120px;\n  animation-name: balloon3;\n  animation-duration: 10s;\n  position: relative;\n  top: 600px;\n  animation-iteration-count: 3;\n  animation-delay: 1s;\n}\n\n.baloonTop3[_ngcontent-%COMP%] {\n  height: 126px;\n  width: 100%;\n  border-radius: 52%;\n  background-color: yellow;\n  box-shadow: 0px 0px 2px grey;\n}\n\n.baloondown3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.baloonLine3[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 80px;\n  border: 1px solid grey;\n}\n\n@keyframes balloon3 {\n  0% {\n    top: 600px;\n  }\n  100% {\n    top: -200px;\n  }\n}\n\n.baloon4[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 120px;\n  animation-name: balloon4;\n  animation-duration: 10s;\n  position: relative;\n  top: 600px;\n  animation-iteration-count: 3;\n  animation-delay: 3s;\n}\n\n.baloonTop4[_ngcontent-%COMP%] {\n  height: 126px;\n  width: 100%;\n  border-radius: 52%;\n  background-color: yellow;\n  box-shadow: 0px 0px 2px grey;\n}\n\n.baloondown4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.baloonLine4[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 80px;\n  border: 1px solid grey;\n}\n\n@keyframes balloon4 {\n  0% {\n    top: 600px;\n  }\n  100% {\n    top: -200px;\n  }\n}\n\n.Ball_background[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 695px;\n}\n\n.ball[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-color: white;\n  border-radius: 25px;\n  box-shadow: 0px 0px 5px #e7e5e5;\n  position: relative;\n  top: 643px;\n  left: 700px;\n  animation-name: ball;\n  animation-duration: 15s;\n  animation-timing-function: calc();\n}\n\n@keyframes ball {\n  10% {\n    left: 0;\n    top: 300px;\n  }\n  20% {\n    left: 700px;\n    top: 0px;\n  }\n  30% {\n    left: 1469px;\n    top: 300px;\n  }\n  40% {\n    left: 800px;\n    top: 643px;\n  }\n  50% {\n    left: 0;\n    top: 250px;\n  }\n  60% {\n    left: 650px;\n    top: 0px;\n  }\n  70% {\n    left: 1469px;\n    top: 350px;\n  }\n  80% {\n    left: 800px;\n    top: 643px;\n  }\n  90% {\n    left: 0;\n    top: 200px;\n  }\n  100% {\n    left: 900px;\n    top: 0px;\n  }\n}\n\n.Small_ball[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.Flex[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 695px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n}\n\n.Small_ball1[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall1;\n  animation-duration: 5s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball2[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall2;\n  animation-duration: 5s;\n  animation-delay: 1s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball3[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall3;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball4[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall4;\n  animation-duration: 5s;\n  animation-delay: 3s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball5[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall5;\n  animation-duration: 5s;\n  animation-delay: 4s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball6[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall6;\n  animation-duration: 5s;\n  animation-delay: 5s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball7[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall7;\n  animation-duration: 5s;\n  animation-delay: 6s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball8[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall8;\n  animation-duration: 5s;\n  animation-delay: 7s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball9[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall9;\n  animation-duration: 5s;\n  animation-delay: 8s;\n  animation-iteration-count: 3;\n}\n\n.Small_ball10[_ngcontent-%COMP%] {\n  position: relative;\n  top: 685px;\n  animation-name: SmallBall10;\n  animation-duration: 5s;\n  animation-delay: 9s;\n  animation-iteration-count: 3;\n}\n\n@keyframes SmallBall1 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall2 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall3 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall4 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall5 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall6 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall7 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall8 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall9 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n\n@keyframes SmallBall10 {\n  from {\n    top: 685px;\n  }\n  to {\n    top: -10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWF0aW9uL0M6XFxVc2Vyc1xcc3ViYXNoMjM0NTEzXFxEZXNrdG9wXFxMZWFybmluZ1xcQW5ndWxhciBMZWFybmluZ1xcYW5ndWxhciBkZW1vIHByb2plY3RcXHZzb2x2U2FtcGxlL3NyY1xcYXBwXFxhbmltYXRpb25cXGFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW5pbWF0aW9uL2FuaW1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREVBO0VBQ0k7SUFBRyxxQkFBQTtJQUFzQixTQUFBO0lBQVMsUUFBQTtFQ0lwQztFREhFO0lBQUksdUJBQUE7SUFBd0IsV0FBQTtJQUFZLFFBQUE7SUFBUSx3QkFBQTtJQUF5Qix3QkFBQTtFQ1UzRTtFRFRFO0lBQUksd0JBQUE7SUFBeUIsVUFBQTtJQUFVLFdBQUE7SUFBVyx3QkFBQTtFQ2VwRDtFRGRFO0lBQUksdUJBQUE7SUFBd0IsU0FBQTtJQUFTLFVBQUE7SUFBVSx3QkFBQTtFQ29CakQ7RURuQkU7SUFBSyw2QkFBQTtJQUE4QixTQUFBO0lBQVUsUUFBQTtJQUFRLHdCQUFBO0VDeUJ2RDtBQUNGOztBRHhCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUMwQko7O0FEeEJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUN5Qko7O0FEdEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFHQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUN1Qko7O0FEckJBO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUN1Qko7O0FEckJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSTtJQUFHLFVBQUE7RUMyQkw7RUQxQkU7SUFBSyxXQUFBO0VDNkJQO0FBQ0Y7O0FENUJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQzRCSjs7QUR6QkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUdBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQzBCSjs7QUR4QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzJCSjs7QUR6QkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDNEJKOztBRDFCQTtFQUNJO0lBQUcsVUFBQTtFQzhCTDtFRDdCRTtJQUFLLFdBQUE7RUNnQ1A7QUFDRjs7QUQvQkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDK0JKOztBRDVCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBR0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDNkJKOztBRDNCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDOEJKOztBRDVCQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUMrQko7O0FEN0JBO0VBQ0k7SUFBRyxVQUFBO0VDaUNMO0VEaENFO0lBQUssV0FBQTtFQ21DUDtBQUNGOztBRGxDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUEsd0JBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNrQ0o7O0FEL0JBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFHQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNnQ0o7O0FEOUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNpQ0o7O0FEL0JBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ2tDSjs7QURoQ0E7RUFDSTtJQUFHLFVBQUE7RUNvQ0w7RURuQ0U7SUFBSyxXQUFBO0VDc0NQO0FBQ0Y7O0FEckNBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FDdUNKOztBRHJDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQ3dDSjs7QUR0Q0E7RUFDSTtJQUFJLE9BQUE7SUFBUSxVQUFBO0VDMkNkO0VEMUNFO0lBQUksV0FBQTtJQUFZLFFBQUE7RUM4Q2xCO0VEN0NFO0lBQUksWUFBQTtJQUFhLFVBQUE7RUNpRG5CO0VEaERFO0lBQUksV0FBQTtJQUFZLFVBQUE7RUNvRGxCO0VEbkRFO0lBQUksT0FBQTtJQUFRLFVBQUE7RUN1RGQ7RUR0REU7SUFBSSxXQUFBO0lBQVksUUFBQTtFQzBEbEI7RUR6REU7SUFBSSxZQUFBO0lBQWEsVUFBQTtFQzZEbkI7RUQ1REU7SUFBSSxXQUFBO0lBQVksVUFBQTtFQ2dFbEI7RUQvREU7SUFBSSxPQUFBO0lBQVEsVUFBQTtFQ21FZDtFRGxFRTtJQUFLLFdBQUE7SUFBWSxRQUFBO0VDc0VuQjtBQUNGOztBRHJFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ3VFSjs7QURyRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0Esa0JBQUE7QUN1RUo7O0FEcEVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDdUVKOztBRHJFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDd0VKOztBRHRFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDeUVKOztBRHZFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDMEVKOztBRHhFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDMkVKOztBRHpFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDNEVKOztBRDFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDNkVKOztBRDNFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDOEVKOztBRDVFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDK0VKOztBRDdFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDZ0ZKOztBRDlFQTtFQUNJO0lBQUssVUFBQTtFQ2tGUDtFRGpGRTtJQUFHLFVBQUE7RUNvRkw7QUFDRjs7QUQvRUE7RUFDSTtJQUFLLFVBQUE7RUNrRlA7RURqRkU7SUFBRyxVQUFBO0VDb0ZMO0FBQ0Y7O0FEbkZBO0VBQ0k7SUFBSyxVQUFBO0VDc0ZQO0VEckZFO0lBQUcsVUFBQTtFQ3dGTDtBQUNGOztBRHZGQTtFQUNJO0lBQUssVUFBQTtFQzBGUDtFRHpGRTtJQUFHLFVBQUE7RUM0Rkw7QUFDRjs7QUQzRkE7RUFDSTtJQUFLLFVBQUE7RUM4RlA7RUQ3RkU7SUFBRyxVQUFBO0VDZ0dMO0FBQ0Y7O0FEL0ZBO0VBQ0k7SUFBSyxVQUFBO0VDa0dQO0VEakdFO0lBQUcsVUFBQTtFQ29HTDtBQUNGOztBRG5HQTtFQUNJO0lBQUssVUFBQTtFQ3NHUDtFRHJHRTtJQUFHLFVBQUE7RUN3R0w7QUFDRjs7QUR2R0E7RUFDSTtJQUFLLFVBQUE7RUMwR1A7RUR6R0U7SUFBRyxVQUFBO0VDNEdMO0FBQ0Y7O0FEM0dBO0VBQ0k7SUFBSyxVQUFBO0VDOEdQO0VEN0dFO0lBQUcsVUFBQTtFQ2dITDtBQUNGOztBRC9HQTtFQUNJO0lBQUssVUFBQTtFQ2tIUDtFRGpIRTtJQUFHLFVBQUE7RUNvSEw7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICBcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMTBzO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcclxufVxyXG5Aa2V5ZnJhbWVzIGJveHtcclxuICAgIDAle2JhY2tncm91bmQtY29sb3I6IHJlZDtsZWZ0OjBweDt0b3A6MHB4O31cclxuICAgIDI1JXtiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtsZWZ0OiAyMDBweDt0b3A6MHB4O3RyYW5zZm9ybTogcm90YXRlKDMwZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7fVxyXG4gICAgNTAle2JhY2tncm91bmQtY29sb3I6IHllbGxvdzt0b3A6MjAwcHg7bGVmdDoyMDBweDt0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7fVxyXG4gICAgNzUle2JhY2tncm91bmQtY29sb3I6IGJsYWNrO2xlZnQ6MHB4O3RvcDoyMDBweDt0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7fVxyXG4gICAgMTAwJXtiYWNrZ3JvdW5kLWNvbG9yOiBzYWRkbGVicm93bjtsZWZ0OiAwcHg7dG9wOjBweDt0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7fVxyXG59XHJcbi5tYWlue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmJhbG9vbjF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uMTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTAwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2MDBweDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XHJcbiAgICBcclxufVxyXG4uYmFsb29uVG9wMXtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICBcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggZ3JleTtcclxufVxyXG4ud2hvbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYmFsb29uZG93bjF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iYWxvb25MaW5lMXtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcbkBrZXlmcmFtZXMgYmFsbG9vbjF7XHJcbiAgICAwJXt0b3A6IDYwMHB4O31cclxuICAgIDEwMCV7dG9wOi0yMDBweH1cclxufVxyXG4uYmFsb29uMntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24yO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMDAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDYwMHB4O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgICBcclxufVxyXG4uYmFsb29uVG9wMntcclxuICAgIGhlaWdodDogMTI2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XHJcbn1cclxuLmJhbG9vbmRvd24ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFsb29uTGluZTJ7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJhbGxvb24ye1xyXG4gICAgMCV7dG9wOiA2MDBweDt9XHJcbiAgICAxMDAle3RvcDotMjAwcHh9XHJcbn1cclxuLmJhbG9vbjN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uMztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTAwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2MDBweDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgXHJcbn1cclxuLmJhbG9vblRvcDN7XHJcbiAgICBoZWlnaHQ6IDEyNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBncmV5O1xyXG59XHJcbi5iYWxvb25kb3duM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJhbG9vbkxpbmUze1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuQGtleWZyYW1lcyBiYWxsb29uM3tcclxuICAgIDAle3RvcDogNjAwcHg7fVxyXG4gICAgMTAwJXt0b3A6LTIwMHB4fVxyXG59XHJcbi5iYWxvb240e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYmFsbG9vbjQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNjAwcHg7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICAgIFxyXG59XHJcbi5iYWxvb25Ub3A0e1xyXG4gICAgaGVpZ2h0OiAxMjZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggZ3JleTtcclxufVxyXG4uYmFsb29uZG93bjR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iYWxvb25MaW5lNHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcbkBrZXlmcmFtZXMgYmFsbG9vbjR7XHJcbiAgICAwJXt0b3A6IDYwMHB4O31cclxuICAgIDEwMCV7dG9wOi0yMDBweH1cclxufVxyXG4uQmFsbF9iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDY5NXB4O1xyXG59XHJcbi5iYWxse1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMjMxLCAyMjksIDIyOSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDY0M3B4O1xyXG4gICAgbGVmdDogNzAwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYmFsbDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY2FsYygpO1xyXG59XHJcbkBrZXlmcmFtZXMgYmFsbHtcclxuICAgIDEwJXtsZWZ0OiAwO3RvcDozMDBweH1cclxuICAgIDIwJXtsZWZ0OiA3MDBweDt0b3A6MHB4fVxyXG4gICAgMzAle2xlZnQ6IDE0NjlweDt0b3A6MzAwcHh9XHJcbiAgICA0MCV7bGVmdDogODAwcHg7dG9wOjY0M3B4fVxyXG4gICAgNTAle2xlZnQ6IDA7dG9wOjI1MHB4fVxyXG4gICAgNjAle2xlZnQ6IDY1MHB4O3RvcDowcHh9XHJcbiAgICA3MCV7bGVmdDogMTQ2OXB4O3RvcDozNTBweH1cclxuICAgIDgwJXtsZWZ0OiA4MDBweDt0b3A6NjQzcHh9XHJcbiAgICA5MCV7bGVmdDogMDt0b3A6MjAwcHh9XHJcbiAgICAxMDAle2xlZnQ6IDkwMHB4O3RvcDowcHh9XHJcbn1cclxuLlNtYWxsX2JhbGx7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5GbGV4e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDY5NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gY29sdW1uLWdhcDogMTUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLlNtYWxsX2JhbGwxe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjY4NXB4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6U21hbGxCYWxsMTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xyXG59XHJcbi5TbWFsbF9iYWxsMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo2ODVweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOlNtYWxsQmFsbDI7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XHJcbn1cclxuLlNtYWxsX2JhbGwze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjY4NXB4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6U21hbGxCYWxsMztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XHJcbn1cclxuLlNtYWxsX2JhbGw0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjY4NXB4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6U21hbGxCYWxsNDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcclxufVxyXG4uU21hbGxfYmFsbDV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6Njg1cHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTpTbWFsbEJhbGw1O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xyXG59XHJcbi5TbWFsbF9iYWxsNntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo2ODVweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOlNtYWxsQmFsbDY7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA1cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XHJcbn1cclxuLlNtYWxsX2JhbGw3e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOjY4NXB4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6U21hbGxCYWxsNztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDZzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcclxufVxyXG4uU21hbGxfYmFsbDh7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6Njg1cHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTpTbWFsbEJhbGw4O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogN3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xyXG59XHJcbi5TbWFsbF9iYWxsOXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo2ODVweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOlNtYWxsQmFsbDk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA4cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XHJcbn1cclxuLlNtYWxsX2JhbGwxMHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDo2ODVweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOlNtYWxsQmFsbDEwO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogOXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xyXG59XHJcbkBrZXlmcmFtZXMgU21hbGxCYWxsMXtcclxuICAgIGZyb217dG9wOjY4NXB4fVxyXG4gICAgdG97dG9wOi0xMHB4fVxyXG4gICAgLy8gMjUle3RvcDo1MDBweDtoZWlnaHQ6IDE1cHg7d2lkdGg6IDE1cHg7Ym9yZGVyLXJhZGl1czogNTAlO31cclxuICAgIC8vIDUwJXt0b3A6MzUwcHg7aGVpZ2h0OiAxMHB4O3dpZHRoOiAxMHB4O2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcbiAgICAvLyA3NSV7dG9wOjIwMHB4O2hlaWdodDogMTVweDt3aWR0aDogMTVweDtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4gICAgLy8gMTAwJXt0b3A6LTEwcHg7aGVpZ2h0OiAxMHB4O3dpZHRoOiAxMHB4O2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGwye1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGwze1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGw0e1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGw1e1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGw2e1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGw3e1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGw4e1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGw5e1xyXG4gICAgZnJvbXt0b3A6Njg1cHh9XHJcbiAgICB0b3t0b3A6LTEwcHh9XHJcbn1cclxuQGtleWZyYW1lcyBTbWFsbEJhbGwxMHtcclxuICAgIGZyb217dG9wOjY4NXB4fVxyXG4gICAgdG97dG9wOi0xMHB4fVxyXG59IiwiLmJveCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBhbmltYXRpb24tbmFtZTogYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMTBzO1xuICBvcGFjaXR5OiAwLjU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XG59XG5cbkBrZXlmcmFtZXMgYm94IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgMjUlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBsZWZ0OiAyMDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogMjAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMjAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNhZGRsZWJyb3duO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbn1cbi5tYWluIHtcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmJhbG9vbjEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24xO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDYwMHB4O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uYmFsb29uVG9wMSB7XG4gIGhlaWdodDogOTVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBncmV5O1xufVxuXG4ud2hvbGUge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYmFsb29uZG93bjEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJhbG9vbkxpbmUxIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxvb24xIHtcbiAgMCUge1xuICAgIHRvcDogNjAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtMjAwcHg7XG4gIH1cbn1cbi5iYWxvb24yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTIwcHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWxsb29uMjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2MDBweDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuLmJhbG9vblRvcDIge1xuICBoZWlnaHQ6IDEyNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGdyZXk7XG59XG5cbi5iYWxvb25kb3duMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmFsb29uTGluZTIge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbkBrZXlmcmFtZXMgYmFsbG9vbjIge1xuICAwJSB7XG4gICAgdG9wOiA2MDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0yMDBweDtcbiAgfVxufVxuLmJhbG9vbjMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxvb24zO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDYwMHB4O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uYmFsb29uVG9wMyB7XG4gIGhlaWdodDogMTI2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggZ3JleTtcbn1cblxuLmJhbG9vbmRvd24zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYWxvb25MaW5lMyB7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cblxuQGtleWZyYW1lcyBiYWxsb29uMyB7XG4gIDAlIHtcbiAgICB0b3A6IDYwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogLTIwMHB4O1xuICB9XG59XG4uYmFsb29uNCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEyMHB4O1xuICBhbmltYXRpb24tbmFtZTogYmFsbG9vbjQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjAwcHg7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XG59XG5cbi5iYWxvb25Ub3A0IHtcbiAgaGVpZ2h0OiAxMjZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBncmV5O1xufVxuXG4uYmFsb29uZG93bjQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJhbG9vbkxpbmU0IHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxvb240IHtcbiAgMCUge1xuICAgIHRvcDogNjAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtMjAwcHg7XG4gIH1cbn1cbi5CYWxsX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA2OTVweDtcbn1cblxuLmJhbGwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2U3ZTVlNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDY0M3B4O1xuICBsZWZ0OiA3MDBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGw7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjYWxjKCk7XG59XG5cbkBrZXlmcmFtZXMgYmFsbCB7XG4gIDEwJSB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDMwMHB4O1xuICB9XG4gIDIwJSB7XG4gICAgbGVmdDogNzAwcHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgMzAlIHtcbiAgICBsZWZ0OiAxNDY5cHg7XG4gICAgdG9wOiAzMDBweDtcbiAgfVxuICA0MCUge1xuICAgIGxlZnQ6IDgwMHB4O1xuICAgIHRvcDogNjQzcHg7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMjUwcHg7XG4gIH1cbiAgNjAlIHtcbiAgICBsZWZ0OiA2NTBweDtcbiAgICB0b3A6IDBweDtcbiAgfVxuICA3MCUge1xuICAgIGxlZnQ6IDE0NjlweDtcbiAgICB0b3A6IDM1MHB4O1xuICB9XG4gIDgwJSB7XG4gICAgbGVmdDogODAwcHg7XG4gICAgdG9wOiA2NDNweDtcbiAgfVxuICA5MCUge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAyMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA5MDBweDtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuLlNtYWxsX2JhbGwge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uRmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDY5NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5TbWFsbF9iYWxsMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2ODVweDtcbiAgYW5pbWF0aW9uLW5hbWU6IFNtYWxsQmFsbDE7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XG59XG5cbi5TbWFsbF9iYWxsMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2ODVweDtcbiAgYW5pbWF0aW9uLW5hbWU6IFNtYWxsQmFsbDI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XG59XG5cbi5TbWFsbF9iYWxsMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2ODVweDtcbiAgYW5pbWF0aW9uLW5hbWU6IFNtYWxsQmFsbDM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjg1cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBTbWFsbEJhbGw0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjg1cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBTbWFsbEJhbGw1O1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjg1cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBTbWFsbEJhbGw2O1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDVzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjg1cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBTbWFsbEJhbGw3O1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDZzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjg1cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBTbWFsbEJhbGw4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDdzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjg1cHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBTbWFsbEJhbGw5O1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tZGVsYXk6IDhzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xufVxuXG4uU21hbGxfYmFsbDEwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDY4NXB4O1xuICBhbmltYXRpb24tbmFtZTogU21hbGxCYWxsMTA7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogOXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XG59XG5cbkBrZXlmcmFtZXMgU21hbGxCYWxsMSB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsMiB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsMyB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsNCB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsNSB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsNiB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsNyB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsOCB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsOSB7XG4gIGZyb20ge1xuICAgIHRvcDogNjg1cHg7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogLTEwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgU21hbGxCYWxsMTAge1xuICBmcm9tIHtcbiAgICB0b3A6IDY4NXB4O1xuICB9XG4gIHRvIHtcbiAgICB0b3A6IC0xMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-animation',
          templateUrl: './animation.component.html',
          styleUrls: ['./animation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    /* harmony import */


    var _segment_master_segment_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./segment-master/segment-master.component */
    "./src/app/segment-master/segment-master.component.ts");
    /* harmony import */


    var _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mapping/mapping.component */
    "./src/app/mapping/mapping.component.ts");
    /* harmony import */


    var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-login/user-login.component */
    "./src/app/user-login/user-login.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _grade_grade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grade/grade.component */
    "./src/app/grade/grade.component.ts");
    /* harmony import */


    var _excel_upload_excel_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./excel-upload/excel-upload.component */
    "./src/app/excel-upload/excel-upload.component.ts");

    var routes = [{
      path: 'SegmentMaster',
      component: _segment_master_segment_master_component__WEBPACK_IMPORTED_MODULE_2__["SegmentMasterComponent"]
    }, {
      path: 'd',
      component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"]
    }, {
      path: 'UserLogin',
      component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"]
    }, {
      path: 'nav',
      component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]
    }, {
      path: 'mapping',
      component: _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_3__["MappingComponent"]
    }, {
      path: '',
      component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_6__["GradeComponent"]
    }, {
      path: 'excel',
      component: _excel_upload_excel_upload_component__WEBPACK_IMPORTED_MODULE_7__["ExcelUploadComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

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


    var _photos_shower_photos_shower_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./photos-shower/photos-shower.component */
    "./src/app/photos-shower/photos-shower.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'vsolvSample';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-photos-shower");
        }
      },
      directives: [_photos_shower_photos_shower_component__WEBPACK_IMPORTED_MODULE_1__["PhotosShowerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _segment_master_segment_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./segment-master/segment-master.component */
    "./src/app/segment-master/segment-master.component.ts");
    /* harmony import */


    var _segment_add_segment_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./segment-add/segment-add.component */
    "./src/app/segment-add/segment-add.component.ts");
    /* harmony import */


    var _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mapping/mapping.component */
    "./src/app/mapping/mapping.component.ts");
    /* harmony import */


    var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-login/user-login.component */
    "./src/app/user-login/user-login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _grade_grade_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./grade/grade.component */
    "./src/app/grade/grade.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _ctc_ctc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ctc/ctc.component */
    "./src/app/ctc/ctc.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _month_payroll_report_month_payroll_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./month-payroll-report/month-payroll-report.component */
    "./src/app/month-payroll-report/month-payroll-report.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _frame_frame_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./frame/frame.component */
    "./src/app/frame/frame.component.ts");
    /* harmony import */


    var _animation_animation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./animation/animation.component */
    "./src/app/animation/animation.component.ts");
    /* harmony import */


    var _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./ng-class/ng-class.component */
    "./src/app/ng-class/ng-class.component.ts");
    /* harmony import */


    var _excel_upload_excel_upload_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./excel-upload/excel-upload.component */
    "./src/app/excel-upload/excel-upload.component.ts");
    /* harmony import */


    var _region_master_region_master_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./region-master/region-master.component */
    "./src/app/region-master/region-master.component.ts");
    /* harmony import */


    var _element_element_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./element/element.component */
    "./src/app/element/element.component.ts");
    /* harmony import */


    var _photos_shower_photos_shower_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./photos-shower/photos-shower.component */
    "./src/app/photos-shower/photos-shower.component.ts");
    /* harmony import */


    var _dbt_screen_dbt_screen_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./dbt-screen/dbt-screen.component */
    "./src/app/dbt-screen/dbt-screen.component.ts"); // import { CharttComponent } from './chartt/chartt.component';
    // import { HomeComponent } from './home/home.component';


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _segment_master_segment_master_component__WEBPACK_IMPORTED_MODULE_5__["SegmentMasterComponent"], _segment_add_segment_add_component__WEBPACK_IMPORTED_MODULE_6__["SegmentAddComponent"], _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_7__["MappingComponent"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _grade_grade_component__WEBPACK_IMPORTED_MODULE_13__["GradeComponent"], _ctc_ctc_component__WEBPACK_IMPORTED_MODULE_21__["CTCComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"], _month_payroll_report_month_payroll_report_component__WEBPACK_IMPORTED_MODULE_24__["MonthPayrollReportComponent"], _frame_frame_component__WEBPACK_IMPORTED_MODULE_26__["FrameComponent"], _animation_animation_component__WEBPACK_IMPORTED_MODULE_27__["AnimationComponent"], _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_28__["NgClassComponent"], _region_master_region_master_component__WEBPACK_IMPORTED_MODULE_30__["RegionMasterComponent"], _excel_upload_excel_upload_component__WEBPACK_IMPORTED_MODULE_29__["ExcelUploadComponent"], _element_element_component__WEBPACK_IMPORTED_MODULE_31__["ElementComponent"], _photos_shower_photos_shower_component__WEBPACK_IMPORTED_MODULE_32__["PhotosShowerComponent"], _dbt_screen_dbt_screen_component__WEBPACK_IMPORTED_MODULE_33__["DbtScreenComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _segment_master_segment_master_component__WEBPACK_IMPORTED_MODULE_5__["SegmentMasterComponent"], _segment_add_segment_add_component__WEBPACK_IMPORTED_MODULE_6__["SegmentAddComponent"], _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_7__["MappingComponent"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _grade_grade_component__WEBPACK_IMPORTED_MODULE_13__["GradeComponent"], _ctc_ctc_component__WEBPACK_IMPORTED_MODULE_21__["CTCComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"], _month_payroll_report_month_payroll_report_component__WEBPACK_IMPORTED_MODULE_24__["MonthPayrollReportComponent"], _frame_frame_component__WEBPACK_IMPORTED_MODULE_26__["FrameComponent"], _animation_animation_component__WEBPACK_IMPORTED_MODULE_27__["AnimationComponent"], _ng_class_ng_class_component__WEBPACK_IMPORTED_MODULE_28__["NgClassComponent"], _region_master_region_master_component__WEBPACK_IMPORTED_MODULE_30__["RegionMasterComponent"], _excel_upload_excel_upload_component__WEBPACK_IMPORTED_MODULE_29__["ExcelUploadComponent"], _element_element_component__WEBPACK_IMPORTED_MODULE_31__["ElementComponent"], _photos_shower_photos_shower_component__WEBPACK_IMPORTED_MODULE_32__["PhotosShowerComponent"], _dbt_screen_dbt_screen_component__WEBPACK_IMPORTED_MODULE_33__["DbtScreenComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ctc/ctc.component.ts":
  /*!**************************************!*\
    !*** ./src/app/ctc/ctc.component.ts ***!
    \**************************************/

  /*! exports provided: CTCComponent */

  /***/
  function srcAppCtcCtcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CTCComponent", function () {
      return CTCComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CTCComponent_mat_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var food_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r4.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r4.viewValue, " ");
      }
    }

    function CTCComponent_mat_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var food_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r5.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r5.viewValue, " ");
      }
    }

    function CTCComponent_mat_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var food_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", food_r6.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", food_r6.viewValue, " ");
      }
    }

    function CTCComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CTCComponent = /*#__PURE__*/function () {
      function CTCComponent() {
        _classCallCheck(this, CTCComponent);

        this.foods = [{
          value: 'steak-0',
          viewValue: 'Steak'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }];
        this.hide = false;
      }

      _createClass(CTCComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Gross",
        value: function Gross() {
          this.hide = true;
        }
      }]);

      return CTCComponent;
    }();

    CTCComponent.ɵfac = function CTCComponent_Factory(t) {
      return new (t || CTCComponent)();
    };

    CTCComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CTCComponent,
      selectors: [["app-ctc"]],
      decls: 54,
      vars: 4,
      consts: [[1, "container", "mt-5"], [1, "col-12", "name"], [1, "col-12", "mt-5", "row"], [1, "col-4"], ["appearance", "outline", 1, "col-12"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container"], ["action", ""], [1, "row", "col-12", "border", "d-flex", "align-items-center", "bg-dark", "text-light", 2, "height", "50px"], [1, "col-3"], [1, "row", "col-12", "d-flex", "align-items-center", "skyblue"], ["appearance", "outline"], ["type", "number", "matInput", "", "formControlName", "monthtakeHome", 2, "text-align", "right"], ["matInput", "", "formControlName", "yrtakeHome", 2, "text-align", "right"], [1, "col-3", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "yrtakeHome", "formControlName", "", 2, "text-align", "right"]],
      template: function CTCComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " R. SELVAKUMAR's Pay Structure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Favorite food");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CTCComponent_mat_option_9_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Favorite food");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CTCComponent_mat_option_15_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Favorite food");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CTCComponent_mat_option_21_Template, 2, 2, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SALARY COMPONENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " CALCULATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MONTHLY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " YEARLY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Task Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CTCComponent_Template_div_click_44_listener() {
            return ctx.Gross();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gross Remuneration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CTCComponent_div_53_Template, 41, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]],
      styles: [".name[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.body[_ngcontent-%COMP%] {\n  background-color: skyblue;\n}\n\n.skyblue[_ngcontent-%COMP%] {\n  background-color: skyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3RjL0M6XFxVc2Vyc1xcc3ViYXNoMjM0NTEzXFxEZXNrdG9wXFxMZWFybmluZ1xcQW5ndWxhciBMZWFybmluZ1xcYW5ndWxhciBkZW1vIHByb2plY3RcXHZzb2x2U2FtcGxlL3NyY1xcYXBwXFxjdGNcXGN0Yy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3RjL2N0Yy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSx5QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY3RjL2N0Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1le1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBcclxufVxyXG4uc2t5Ymx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbn0iLCIubmFtZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xufVxuXG4uc2t5Ymx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CTCComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ctc',
          templateUrl: './ctc.component.html',
          styleUrls: ['./ctc.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dbt-screen/dbt-screen.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/dbt-screen/dbt-screen.component.ts ***!
    \****************************************************/

  /*! exports provided: DbtScreenComponent */

  /***/
  function srcAppDbtScreenDbtScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbtScreenComponent", function () {
      return DbtScreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var DbtScreenComponent = /*#__PURE__*/function () {
      function DbtScreenComponent() {
        _classCallCheck(this, DbtScreenComponent);
      }

      _createClass(DbtScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DbtScreenComponent;
    }();

    DbtScreenComponent.ɵfac = function DbtScreenComponent_Factory(t) {
      return new (t || DbtScreenComponent)();
    };

    DbtScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DbtScreenComponent,
      selectors: [["app-dbt-screen"]],
      decls: 26,
      vars: 0,
      consts: [[1, "main"], [1, "screen"], [1, "left"], [1, "right"], [1, "rightTop"], [1, "text-center"], [1, "rightBottom"], [1, "SignIn"], [1, "TypeSmall"], ["appearance", "outline"], ["matInput", ""]],
      template: function DbtScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Department Of Agriculture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Puducherry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type your name and password to sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "UserName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "forgot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"]],
      styles: [".main[_ngcontent-%COMP%] {\n  height: 695px;\n  width: 100%;\n  background-color: #1ab183;\n  padding: 60px 100px;\n}\n\n.screen[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n\n.left[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 70%;\n  background-image: url('farmer3.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px 0px 0px 10px;\n}\n\n.right[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 30%;\n}\n\n.rightTop[_ngcontent-%COMP%] {\n  height: 15%;\n  border-bottom: 1px solid grey;\n  padding: 5px;\n}\n\n.rightBottom[_ngcontent-%COMP%] {\n  height: 80%;\n  padding: 20px 80px;\n}\n\n.TypeSmall[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 8px;\n  font-weight: bold;\n}\n\n.SignIn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGJ0LXNjcmVlbi9DOlxcVXNlcnNcXHN1YmFzaDIzNDUxM1xcRGVza3RvcFxcTGVhcm5pbmdcXEFuZ3VsYXIgTGVhcm5pbmdcXGFuZ3VsYXIgZGVtbyBwcm9qZWN0XFx2c29sdlNhbXBsZS9zcmNcXGFwcFxcZGJ0LXNjcmVlblxcZGJ0LXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGJ0LXNjcmVlbi9kYnQtc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2RidC1zY3JlZW4vZGJ0LXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgaGVpZ2h0OiA2OTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWFiMTgzO1xyXG4gICAgcGFkZGluZzogNjBweCAxMDBweDtcclxufVxyXG4uc2NyZWVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZmFybWVyMy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweCA7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4ucmlnaHRUb3B7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5yaWdodEJvdHRvbXtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZzogMjBweCA4MHB4O1xyXG59XHJcbi5UeXBlU21hbGx7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLlNpZ25JbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59IiwiLm1haW4ge1xuICBoZWlnaHQ6IDY5NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYjE4MztcbiAgcGFkZGluZzogNjBweCAxMDBweDtcbn1cblxuLnNjcmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9mYXJtZXIzLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xufVxuXG4ucmlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5yaWdodFRvcCB7XG4gIGhlaWdodDogMTUlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucmlnaHRCb3R0b20ge1xuICBoZWlnaHQ6IDgwJTtcbiAgcGFkZGluZzogMjBweCA4MHB4O1xufVxuXG4uVHlwZVNtYWxsIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5TaWduSW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbtScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dbt-screen',
          templateUrl: './dbt-screen.component.html',
          styleUrls: ['./dbt-screen.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/element/element.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/element/element.component.ts ***!
    \**********************************************/

  /*! exports provided: ElementComponent */

  /***/
  function srcAppElementElementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementComponent", function () {
      return ElementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    var ElementComponent = /*#__PURE__*/function () {
      function ElementComponent() {
        _classCallCheck(this, ElementComponent);
      }

      _createClass(ElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ElementComponent;
    }();

    ElementComponent.ɵfac = function ElementComponent_Factory(t) {
      return new (t || ElementComponent)();
    };

    ElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ElementComponent,
      selectors: [["app-element"]],
      decls: 138,
      vars: 4,
      consts: [[1, "row", "ml-4"], [1, "col-md-2"], ["type", "text", "matInput", ""], [1, "dataWidth"], ["matInput", "", "format", "", "placeholder", "Choose a date", "formControlName", "logDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "btn", "btn-outline-primary", "bRadius"], [1, "fa", "fa-search"], [1, "table-responsive", "ml-4"], [1, "table", "table-bordered"], [1, "checkBox"], ["type", "checkbox"], ["matInput", "", "placeholder", "employee", "autocomplete", "off", "readonly", "true"], ["matInput", "", 3, "matDatepicker"], ["picker35", ""], ["matInput", "", "placeholder", "amount", "autocomplete", "off"], ["matInput", "", "placeholder", "amount", "autocomplete", "off", "readonly", "true"], ["fa-solid", "", "fa-pencil", ""], ["type", "checkbox", "name", "", "id", ""]],
      template: function ElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contractor Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Region");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Taluk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "District");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pan No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "GST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-datepicker", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Contractor Code and Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "District");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Region");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Taluk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Pan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "GST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Bulk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Active Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-datepicker", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepicker"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n  margin-left: 30px;\n  width: 100%;\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n.bRadius[_ngcontent-%COMP%] {\n  border-radius: 40px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  width: 20px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudC9DOlxcVXNlcnNcXHN1YmFzaDIzNDUxM1xcRGVza3RvcFxcTGVhcm5pbmdcXEFuZ3VsYXIgTGVhcm5pbmdcXGFuZ3VsYXIgZGVtbyBwcm9qZWN0XFx2c29sdlNhbXBsZS9zcmNcXGFwcFxcZWxlbWVudFxcZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWxlbWVudC9lbGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0FDSUo7O0FERkE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQ0tEIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudC9lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sdW1uLWdhcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvd3tcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuLmJSYWRpdXN7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG4uY2hlY2tCb3h7XHJcbiB3aWR0aDogMjBweDtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbn0iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIHdpZHRoOiA5OCU7XG59XG5cbi5iUmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICB3aWR0aDogOTUlO1xufVxuXG4uY2hlY2tCb3gge1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-element',
          templateUrl: './element.component.html',
          styleUrls: ['./element.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/excel-upload/excel-upload.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/excel-upload/excel-upload.component.ts ***!
    \********************************************************/

  /*! exports provided: ExcelUploadComponent */

  /***/
  function srcAppExcelUploadExcelUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelUploadComponent", function () {
      return ExcelUploadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.mjs");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["labelImport"];

    function ExcelUploadComponent_tr_21_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r4, " ");
      }
    }

    function ExcelUploadComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExcelUploadComponent_tr_21_td_1_Template, 2, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", d_r2);
      }
    }

    var ExcelUploadComponent = /*#__PURE__*/function () {
      function ExcelUploadComponent(shared) {
        _classCallCheck(this, ExcelUploadComponent);

        this.shared = shared;
      }

      _createClass(ExcelUploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = this.shared.emp.value;
          alert(this.name);
        } //   fileChange(file, files:FileList) {
        //     const target: DataTransfer = <DataTransfer>(<unknown>file.target);
        //     const filess:FileList=file.target.files
        //     this.labelImport.nativeElement.innerText = Array.from(filess)
        //     .map(f => f.name)
        //     .join(', ');
        //     this.images = file.target.files;
        //     const reader: FileReader = new FileReader();
        //     reader.readAsBinaryString(this.images[0]);
        //     reader.onload = (e: any) => {
        //       /* read workbook */
        //       const bstr: string = e.target.result;
        //       const wb = XLSX.read(bstr, { type: 'binary' });
        //       // const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        //       /* grab first sheet */
        //       const wsname: string = wb.SheetNames[0];
        //       const ws = wb.Sheets[wsname];
        //       // const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        //       /* save data */
        //       this.data =(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        //       console.log(this.data);
        //     console.log('Images',this.images)
        //     this.tableData = this.data;
        //       this.tableTitle = Object.keys(this.tableData[0]);
        //       this.tableRecords = this.tableData.slice(
        //         this.pageStartCount,
        //         this.pageEndCount
        //       );
        //   }
        // }

      }, {
        key: "fileChange",
        value: function fileChange(file, files) {
          var _this = this;

          var read = new FileReader();
          read.readAsBinaryString(file.target.files[0]);

          read.onload = function (e) {
            var blob = e.target.result;
            var BlobRead = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](blob, {
              type: 'binary'
            });
            var SheetNames = BlobRead.SheetNames[0];
            var Sheets = BlobRead.Sheets[SheetNames];
            _this.data = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(Sheets, {
              header: 1
            });
          };

          this.labelImport.nativeElement.innerText = Array.from(files).map(function (f) {
            return f.name;
          });
        }
      }, {
        key: "pageEndCount",
        value: function pageEndCount(pageStartCount, _pageEndCount) {
          throw new Error('Method not implemented.');
        }
      }, {
        key: "pageStartCount",
        value: function pageStartCount(_pageStartCount, pageEndCount) {
          throw new Error('Method not implemented.');
        }
      }]);

      return ExcelUploadComponent;
    }();

    ExcelUploadComponent.ɵfac = function ExcelUploadComponent_Factory(t) {
      return new (t || ExcelUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    ExcelUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExcelUploadComponent,
      selectors: [["app-excel-upload"]],
      viewQuery: function ExcelUploadComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelImport = _t.first);
        }
      },
      decls: 22,
      vars: 3,
      consts: [[1, "card"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "input-group", "mb-3"], [1, "custom-file"], ["type", "file", "formControlName", "files", "id", "importFile", 1, "custom-file-input", 3, "change"], ["for", "importFile", 1, "custom-file-label"], ["labelImport", ""], [1, "form-group"], ["type", "button", 1, "btn", "btn-warning"], [1, "fas", "fa-file-import"], ["type", "button", 1, "btn", "btn-outline-info", 2, "margin-left", "4%"], ["type", "button", 1, "btn", "btn-outline-info", 2, "margin-left", "35%"], [1, "table", "table-bordered", "align-center"], [4, "ngFor", "ngForOf"]],
      template: function ExcelUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExcelUploadComponent_Template_input_change_8_listener($event) {
            return ctx.fileChange($event, $event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Download Template ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExcelUploadComponent_tr_21_Template, 2, 1, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["table.table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjZWwtdXBsb2FkL0M6XFxVc2Vyc1xcc3ViYXNoMjM0NTEzXFxEZXNrdG9wXFxMZWFybmluZ1xcQW5ndWxhciBMZWFybmluZ1xcYW5ndWxhciBkZW1vIHByb2plY3RcXHZzb2x2U2FtcGxlL3NyY1xcYXBwXFxleGNlbC11cGxvYWRcXGV4Y2VsLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhjZWwtdXBsb2FkL2V4Y2VsLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZXhjZWwtdXBsb2FkL2V4Y2VsLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLnRhYmxlPnRyOmZpcnN0LWNoaWxkPiB0ZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwidGFibGUudGFibGUgPiB0cjpmaXJzdC1jaGlsZCA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-excel-upload',
          templateUrl: './excel-upload.component.html',
          styleUrls: ['./excel-upload.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, {
        labelImport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['labelImport']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/frame/frame.component.ts":
  /*!******************************************!*\
    !*** ./src/app/frame/frame.component.ts ***!
    \******************************************/

  /*! exports provided: FrameComponent */

  /***/
  function srcAppFrameFrameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameComponent", function () {
      return FrameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function FrameComponent_mat_chip_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function FrameComponent_mat_chip_3_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var chip_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.remove(chip_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chip_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectable", true)("removable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chip_r5, " ");
      }
    }

    function FrameComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r8.name, " ");
      }
    }

    function FrameComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9);
      }
    }

    var FrameComponent = /*#__PURE__*/function () {
      function FrameComponent() {
        _classCallCheck(this, FrameComponent);

        this.autocomplete = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.Dropdown = [{
          id: 1,
          name: 'subash'
        }, {
          id: 2,
          name: 'Rahul'
        }, {
          id: 3,
          name: 'Mahesh'
        }, {
          id: 4,
          name: 'Anand'
        }];
        this.ChipDropdown = ['Ramesh'];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.RemoveChip = [];
      }

      _createClass(FrameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.autocomplete.valueChanges.pipe(switchMap(value=>))
          var emp = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000);
        }
      }, {
        key: "Option",
        value: function Option(event) {
          var drop = event.option.value.name;
          var FoundDropdown = this.Dropdown.filter(function (name) {
            return name.name == drop;
          });
          var FoundChipdown = this.ChipDropdown.filter(function (name) {
            return name == drop;
          });

          if (FoundChipdown.length) {
            return;
          }

          if (FoundDropdown.length) {
            this.ChipDropdown.push(drop);
          }

          console.log('Drop', drop);
        }
      }, {
        key: "remove",
        value: function remove(chip) {
          this.RemoveChip.push(chip);
          var index = this.ChipDropdown.indexOf(chip);
          this.ChipDropdown.splice(index, 1);
        }
      }, {
        key: "displayW",
        value: function displayW(id) {// return id?id.name:undefined
        }
      }]);

      return FrameComponent;
    }();

    FrameComponent.ɵfac = function FrameComponent_Factory(t) {
      return new (t || FrameComponent)();
    };

    FrameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrameComponent,
      selectors: [["app-frame"]],
      decls: 12,
      vars: 8,
      consts: [["appearance", "outline"], ["chiplist", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "matAutocomplete", "formControl", "matChipInputFor", "matChipInputSeparatorKeyCodes"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "Remove", 4, "ngFor", "ngForOf"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""], [3, "value"], [1, "Remove"]],
      template: function FrameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-chip-list", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrameComponent_mat_chip_3_Template, 4, 3, "mat-chip", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function FrameComponent_Template_mat_autocomplete_optionSelected_5_listener($event) {
            return ctx.Option($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FrameComponent_mat_option_7_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Removed List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FrameComponent_div_11_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ChipDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2)("formControl", ctx.autocomplete)("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayW);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Dropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.RemoveChip);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: ["video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n\n.movie[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  margin-left: 250px;\n  margin-top: 200px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.Remove[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100px;\n  box-shadow: 0px 0px 2px #b4b3b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWUvQzpcXFVzZXJzXFxzdWJhc2gyMzQ1MTNcXERlc2t0b3BcXExlYXJuaW5nXFxBbmd1bGFyIExlYXJuaW5nXFxhbmd1bGFyIGRlbW8gcHJvamVjdFxcdnNvbHZTYW1wbGUvc3JjXFxhcHBcXGZyYW1lXFxmcmFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJhbWUvZnJhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mcmFtZS9mcmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInZpZGVve1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tb3ZpZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vIHRvcDoyMDtcclxuICAgIC8vIGxlZnQ6MjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi5SZW1vdmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiKDE4MCwgMTc5LCAxNzkpO1xyXG4gICAgXHJcbn0iLCJ2aWRlbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vdmllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5SZW1vdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNiNGIzYjM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-frame',
          templateUrl: './frame.component.html',
          styleUrls: ['./frame.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/grade/grade.component.ts":
  /*!******************************************!*\
    !*** ./src/app/grade/grade.component.ts ***!
    \******************************************/

  /*! exports provided: GradeComponent */

  /***/
  function srcAppGradeGradeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GradeComponent", function () {
      return GradeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var GradeComponent = /*#__PURE__*/function () {
      function GradeComponent(shared, router) {
        _classCallCheck(this, GradeComponent);

        this.shared = shared;
        this.router = router;
        this.Name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
      }

      _createClass(GradeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.shared.emp.next(this.Name.value);
          this.router.navigate(['/excel']); // this.dkkd()
        }
      }, {
        key: "dkkd",
        value: function dkkd() {
          alert(this.shared.emp.value);
        }
      }]);

      return GradeComponent;
    }();

    GradeComponent.ɵfac = function GradeComponent_Factory(t) {
      return new (t || GradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    GradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GradeComponent,
      selectors: [["app-grade"]],
      decls: 4,
      vars: 1,
      consts: [["type", "text", "matInput", "", 3, "formControl"], [3, "click"]],
      template: function GradeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_Template_button_click_2_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.Name);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlL2dyYWRlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grade',
          templateUrl: './grade.component.html',
          styleUrls: ['./grade.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mapping/mapping.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/mapping/mapping.component.ts ***!
    \**********************************************/

  /*! exports provided: MappingComponent */

  /***/
  function srcAppMappingMappingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MappingComponent", function () {
      return MappingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MappingComponent = /*#__PURE__*/function () {
      function MappingComponent() {
        _classCallCheck(this, MappingComponent);
      }

      _createClass(MappingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MappingComponent;
    }();

    MappingComponent.ɵfac = function MappingComponent_Factory(t) {
      return new (t || MappingComponent)();
    };

    MappingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MappingComponent,
      selectors: [["app-mapping"]],
      decls: 0,
      vars: 0,
      template: function MappingComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHBpbmcvbWFwcGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MappingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mapping',
          templateUrl: './mapping.component.html',
          styleUrls: ['./mapping.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/month-payroll-report/month-payroll-report.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/month-payroll-report/month-payroll-report.component.ts ***!
    \************************************************************************/

  /*! exports provided: MonthPayrollReportComponent */

  /***/
  function srcAppMonthPayrollReportMonthPayrollReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthPayrollReportComponent", function () {
      return MonthPayrollReportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MonthPayrollReportComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.Place);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.Pincode);
      }
    }

    var MonthPayrollReportComponent = /*#__PURE__*/function () {
      function MonthPayrollReportComponent() {
        _classCallCheck(this, MonthPayrollReportComponent);

        this.startDate = new Date(1990, 0, 1);
        this.DateFormgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          DatePicker: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.data = [{
          name: 'subash',
          age: 20,
          Place: 'London',
          Pincode: 612662
        }, {
          name: 'ramesh',
          age: 22,
          Place: 'America',
          Pincode: 612663
        }, {
          name: 'aravinth',
          age: 20,
          Place: 'India',
          Pincode: 612632
        }, {
          name: 'ravi',
          age: 25,
          Place: 'antartica',
          Pincode: 612662
        }];
      }

      _createClass(MonthPayrollReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MonthPayrollReportComponent;
    }();

    MonthPayrollReportComponent.ɵfac = function MonthPayrollReportComponent_Factory(t) {
      return new (t || MonthPayrollReportComponent)();
    };

    MonthPayrollReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MonthPayrollReportComponent,
      selectors: [["app-month-payroll-report"]],
      decls: 14,
      vars: 5,
      consts: [[1, "container", "mt-5"], ["action", "", 3, "formGroup"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 1, "toggle", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""], [1, "mt-5"], [1, "table", "table-dark", "border", "text-center"], ["style", "height: 80px;", 4, "ngFor", "ngForOf"], [2, "height", "80px"], [1, "border", "padding"]],
      template: function MonthPayrollReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MonthPayrollReportComponent_tr_13_Template, 9, 4, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.DateFormgroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startAt", ctx.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".padding[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtcGF5cm9sbC1yZXBvcnQvQzpcXFVzZXJzXFxzdWJhc2gyMzQ1MTNcXERlc2t0b3BcXExlYXJuaW5nXFxBbmd1bGFyIExlYXJuaW5nXFxhbmd1bGFyIGRlbW8gcHJvamVjdFxcdnNvbHZTYW1wbGUvc3JjXFxhcHBcXG1vbnRoLXBheXJvbGwtcmVwb3J0XFxtb250aC1wYXlyb2xsLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9udGgtcGF5cm9sbC1yZXBvcnQvbW9udGgtcGF5cm9sbC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9udGgtcGF5cm9sbC1yZXBvcnQvbW9udGgtcGF5cm9sbC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG59XHJcbi50b2dnbGV7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59IiwiLnBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLnRvZ2dsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthPayrollReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-month-payroll-report',
          templateUrl: './month-payroll-report.component.html',
          styleUrls: ['./month-payroll-report.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login-service.service */
    "./src/app/services/login-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function NavComponent_div_14_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_14_tr_37_Template_td_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var l_r4 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.edit(l_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_14_tr_37_Template_td_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var l_r4 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8["delete"](l_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r4 == null ? null : l_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r4 == null ? null : l_r4.component_type == null ? null : l_r4.component_type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r4 == null ? null : l_r4.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r4 == null ? null : l_r4.percentage);
      }
    }

    function NavComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Segment Master");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Segment Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_14_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.SegmentNameFun();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_14_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_14_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.add();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "S.no");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Segment Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Component Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Percentage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NavComponent_div_14_tr_37_Template, 17, 5, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.SegmentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list);
      }
    }

    function NavComponent_div_15_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pay_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pay_r15.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pay_r15.name);
      }
    }

    function NavComponent_div_15_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bonus_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bonus_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonus_r16.name);
      }
    }

    function NavComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Segment Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pay Component Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavComponent_div_15_mat_option_14_Template, 2, 2, "mat-option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bonus Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavComponent_div_15_mat_option_20_Template, 2, 2, "mat-option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Percentage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_15_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_15_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.componentType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.user.valid);
      }
    }

    function NavComponent_div_16_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pay_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pay_r22.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pay_r22.name);
      }
    }

    function NavComponent_div_16_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bonus_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bonus_r23.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bonus_r23.name);
      }
    }

    function NavComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Segment Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pay Component Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavComponent_div_16_mat_option_14_Template, 2, 2, "mat-option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Bonus Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavComponent_div_16_mat_option_20_Template, 2, 2, "mat-option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Percentage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_16_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_16_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.update();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.componentType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.editUser.valid);
      }
    } // import { HttpClient } from '@angular/common/http';


    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(login) {
        _classCallCheck(this, NavComponent);

        this.login = login;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          component_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.editUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          component_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.SegmentName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.segmentMaster = false;
        this.segmentAdd = false;
        this.SegmentEdit = false;
        this.payType = ['Basic', 'Allowance', 'BONUS', 'Deduction', 'salary', 'other earning'];
        this.bonusType = ['QUARTERLY', 'HALFYEARLY', 'YEARLY', 'MONTHLY', 'CUSTOM'];
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.segment();
          this.component();
          this.type(); // this.submit()
          // this.SegmentNameFun()
        }
      }, {
        key: "add",
        value: function add() {
          this.segmentMaster = false;
          this.segmentAdd = true;
          this.SegmentEdit = false;
        }
      }, {
        key: "segment",
        value: function segment() {
          this.segmentMaster = true;
          this.segmentAdd = false;
          this.SegmentEdit = false;
          this.login.Valueget().subscribe(function (data) {
            sessionStorage.setItem('data', JSON.stringify(data));
          });
          var l = JSON.parse(sessionStorage.getItem('data')); // console.log(this.list)

          this.list = l['data'];
          console.log(this.list);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.segmentMaster = true;
          this.segmentAdd = false;
          this.SegmentEdit = false;
        }
      }, {
        key: "submit",
        value: function submit() {
          this.segmentMaster = true;
          this.segmentAdd = false;
          this.login.Valuepost(this.user.value).subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "update",
        value: function update() {
          // this.id=JSON.parse(sessionStorage.getItem('data'))['data'].id
          this.segmentMaster = true;
          this.SegmentEdit = false;
          this.login.update(this.editUser.value).subscribe(function (data) {});
        }
      }, {
        key: "edit",
        value: function edit(index) {
          // this.l=i
          // const l=JSON.parse(sessionStorage.getItem('data'))
          // let s=l['data']
          this.login.edit(index.id).subscribe(function (data) {
            console.log(data);
          });
          this.editUser.patchValue({
            name: index.name,
            component_type: index.component_type.id,
            type: index.type.id,
            percentage: index.percentage,
            id: index.id
          });
          this.segmentMaster = false;
          this.SegmentEdit = true;
        } // edit(index:any,i:any){
        //   this.segmentMaster=false
        //   this.SegmentEdit=true
        //   this.editUser.patchValue({
        //     id:index.id,
        //     name:index.name,
        //     component_type:index.component_type.id,
        //     type:index.type.id,
        //     percentage:index.percentage,
        //   })
        //   console.log(this.list[i].id)
        // }

      }, {
        key: "delete",
        value: function _delete(index) {
          var _this2 = this;

          this.login["delete"](index).subscribe(function (data) {
            _this2.segment();
          });
        }
      }, {
        key: "type",
        value: function type() {
          var _this3 = this;

          this.login.type().subscribe(function (data) {
            _this3.types = data['data'];
          });
        }
      }, {
        key: "component",
        value: function component() {
          var _this4 = this;

          // const token=JSON.parse(sessionStorage.getItem('UserLogin')).token
          // const headers={'Authorization':'Token '+token}
          // this.http.get(this.url+'mstserv/payroll_component?name=',this.user.controls.component_type.value).subscribe(data=>{
          //   this.componentType=data
          // })
          this.login.component().subscribe(function (data) {
            _this4.componentType = data['data'];
            console.log(_this4.componentType);
          });
        } // SegmentName:string

      }, {
        key: "SegmentNameFun",
        value: function SegmentNameFun() {
          var _this5 = this;

          // if(this.list.name){
          //   //  this.SegmentName='&querry='+this.list.name
          //   let page=1
          // }
          // if(this.SegmentName){
          this.login.SegmentName(this.SegmentName.value).subscribe(function (data) {
            console.log('SegmentName', data);
            _this5.list = data['data'];
            console.log('list', _this5.list.name);
          }); // }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.SegmentName.reset();
          this.segment();
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 17,
      vars: 3,
      consts: [[1, "main"], [1, "left"], [1, "right"], [1, "navbar-center", "navbar-light", "navbar-expand", "head"], [1, "navbar-nav", "ml-auto", "d-flex"], [1, "nav-item"], [1, "nav-link"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "slide"], [1, "segment"], ["appearance", "outline", 1, ""], ["matInput", "", 1, "segment", 3, "formControl"], [1, "card", "search", "click", 3, "click"], [1, "clear"], [1, "btn", "card", "click", 3, "click"], [1, "add", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "click"], [2, "cursor", "pointer"], [1, "col-12"], ["action", "", 3, "formGroup"], [1, "display"], [1, ""], ["for", ""], ["type", "text", "formControlName", "name", 1, "form-control", "height"], ["for", "pay.id", 1, "d-block"], ["appearance", "outline", 1, "option"], ["formControlName", "component_type"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "", 1, "d-block"], ["formControlName", "type"], ["type", "text", "formControlName", "percentage", 1, "form-control", "height"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-light", 3, "disabled", "click"], [3, "value"], [1, "d-block"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mapping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_9_listener() {
            return ctx.segment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Segment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavComponent_div_14_Template, 38, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavComponent_div_15_Template, 30, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent_div_16_Template, 30, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.segmentMaster);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.segmentAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SegmentEdit);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      styles: [".main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.left[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n}\n\n.right[_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n.head[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 30px;\n       column-gap: 30px;\n}\n\n.search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 60px;\n  margin-bottom: 16px;\n}\n\n.clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin-bottom: 16px;\n}\n\n.add[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 30px;\n  margin-bottom: 16px;\n  background-color: rgba(45, 129, 155, 0.56);\n  cursor: pointer;\n}\n\n.option[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.height[_ngcontent-%COMP%] {\n  height: 52px;\n  margin-top: 2px;\n}\n\n.display[_ngcontent-%COMP%] {\n  display: flex;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n.click[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcc3ViYXNoMjM0NTEzXFxEZXNrdG9wXFxMZWFybmluZ1xcQW5ndWxhciBMZWFybmluZ1xcYW5ndWxhciBkZW1vIHByb2plY3RcXHZzb2x2U2FtcGxlL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDRUo7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FES0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFHSSxtQkFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sZWZ0e1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4ucmlnaHR7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcbi5oZWFke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uc2xpZGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XHJcbiAgIFxyXG59XHJcbi5zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICBcclxuXHJcbn1cclxuXHJcbi8vIC5zZWdtZW50IG1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4vLyB9XHJcbi5jbGVhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uYWRke1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMjksIDE1NSwgMC41Nik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm9wdGlvbntcclxuICAgIC8vIGhlaWdodDogMTBweDtcclxuICAgIC8vIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLmRpc3BsYXl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxufVxyXG4uY2xpY2t7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdCB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0IHtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmhlYWQge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAzMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jbGVhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFkZCB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMjksIDE1NSwgMC41Nik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWlnaHQge1xuICBoZWlnaHQ6IDUycHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxMHB4O1xufVxuXG4uY2xpY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ng-class/ng-class.component.ts":
  /*!************************************************!*\
    !*** ./src/app/ng-class/ng-class.component.ts ***!
    \************************************************/

  /*! exports provided: NgClassComponent */

  /***/
  function srcAppNgClassNgClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgClassComponent", function () {
      return NgClassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgClassComponent = /*#__PURE__*/function () {
      function NgClassComponent() {
        _classCallCheck(this, NgClassComponent);
      }

      _createClass(NgClassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NgClassComponent;
    }();

    NgClassComponent.ɵfac = function NgClassComponent_Factory(t) {
      return new (t || NgClassComponent)();
    };

    NgClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgClassComponent,
      selectors: [["app-ng-class"]],
      decls: 0,
      vars: 0,
      template: function NgClassComponent_Template(rf, ctx) {},
      styles: [".red[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctY2xhc3MvQzpcXFVzZXJzXFxzdWJhc2gyMzQ1MTNcXERlc2t0b3BcXExlYXJuaW5nXFxBbmd1bGFyIExlYXJuaW5nXFxhbmd1bGFyIGRlbW8gcHJvamVjdFxcdnNvbHZTYW1wbGUvc3JjXFxhcHBcXG5nLWNsYXNzXFxuZy1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmctY2xhc3MvbmctY2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uZy1jbGFzcy9uZy1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ng-class',
          templateUrl: './ng-class.component.html',
          styleUrls: ['./ng-class.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photos-shower/photos-shower.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/photos-shower/photos-shower.component.ts ***!
    \**********************************************************/

  /*! exports provided: PhotosShowerComponent */

  /***/
  function srcAppPhotosShowerPhotosShowerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosShowerComponent", function () {
      return PhotosShowerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotosShowerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotosShowerComponent_div_5_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var data_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.Image(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var PhotosShowerComponent = /*#__PURE__*/function () {
      function PhotosShowerComponent() {
        _classCallCheck(this, PhotosShowerComponent);

        this.data = '../../assets/wallpaper1.jpeg';
        this.List = ['../../assets/wallpaper1.jpeg', '../../assets/wallpaper2.jpeg', '../../assets/wallpaper3.jpeg', '../../assets/wallpaper4.jpeg', '../../assets/wallpaper5.jpeg', '../../assets/wallpaper6.jpeg', '../../assets/wallpaper7.jpeg', '../../assets/wallpaper8.jpeg', '../../assets/wallpaper9.jpeg', '../../assets/wallpaper10.jpeg', '../../assets/wallpaper11.jpeg', '../../assets/wallpaper12.jpeg', '../../assets/wallpaper13.jpeg', '../../assets/wallpaper14.jpeg'];
      }

      _createClass(PhotosShowerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Image",
        value: function Image(data) {
          this.data = data;
        }
      }]);

      return PhotosShowerComponent;
    }();

    PhotosShowerComponent.ɵfac = function PhotosShowerComponent_Factory(t) {
      return new (t || PhotosShowerComponent)();
    };

    PhotosShowerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotosShowerComponent,
      selectors: [["app-photos-shower"]],
      decls: 6,
      vars: 2,
      consts: [[1, "flex"], [1, "mainPhoto"], [1, "BigImg"], ["alt", "", 3, "src"], [1, "ScrollBar"], [4, "ngFor", "ngForOf"], [1, "Img", 3, "click"]],
      template: function PhotosShowerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhotosShowerComponent_div_5_Template, 3, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.mainPhoto[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ScrollBar[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 695px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.Img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 130px;\n  width: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  margin-top: 40px;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 8px;\n}\n\n.BigImg[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 350px;\n  width: 800px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  margin-top: 40px;\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zLXNob3dlci9DOlxcVXNlcnNcXHN1YmFzaDIzNDUxM1xcRGVza3RvcFxcTGVhcm5pbmdcXEFuZ3VsYXIgTGVhcm5pbmdcXGFuZ3VsYXIgZGVtbyBwcm9qZWN0XFx2c29sdlNhbXBsZS9zcmNcXGFwcFxccGhvdG9zLXNob3dlclxccGhvdG9zLXNob3dlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG9zLXNob3dlci9waG90b3Mtc2hvd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBRUMsYUFBQTtFQUNBLGFBQUE7RUFFRCxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9zLXNob3dlci9waG90b3Mtc2hvd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tYWluUGhvdG97XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uU2Nyb2xsQmFye1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIC8vICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICBoZWlnaHQ6IDY5NXB4O1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLkltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLkJpZ0ltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG59IiwiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpblBob3RvIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5TY3JvbGxCYXIge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDY5NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uSW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5CaWdJbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiA4MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotosShowerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photos-shower',
          templateUrl: './photos-shower.component.html',
          styleUrls: ['./photos-shower.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/region-master/region-master.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/region-master/region-master.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegionMasterComponent */

  /***/
  function srcAppRegionMasterRegionMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionMasterComponent", function () {
      return RegionMasterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["labelImport"];

    function RegionMasterComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Region Master");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.Search();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_1_Template_mat_icon_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.Add();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.NameSearch);
      }
    }

    function RegionMasterComponent_div_2_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r9.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r9.type, " ");
      }
    }

    function RegionMasterComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region Master Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegionMasterComponent_div_2_mat_option_18_Template, 2, 2, "mat-option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_2_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_2_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.CreateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.DropdownData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.CreateForm.valid);
      }
    }

    function RegionMasterComponent_div_3_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r14.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r14.type, " ");
      }
    }

    function RegionMasterComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Region Master Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegionMasterComponent_div_3_mat_option_18_Template, 2, 2, "mat-option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_3_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_3_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.update();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.EditForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.DropdownData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.EditForm.valid);
      }
    }

    function RegionMasterComponent_div_4_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_4_tr_13_Template_i_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var data_r19 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.edit(data_r19.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_4_tr_13_Template_i_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var data_r19 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23["delete"](data_r19.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.type.type);
      }
    }

    function RegionMasterComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegionMasterComponent_div_4_tr_13_Template, 9, 2, "tr", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_4_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.prevpage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "arrow_back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionMasterComponent_div_4_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.nextpage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "arrow_forward");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.SummaryData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.pagination.has_previous === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.pagination.index, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.pagination.has_next === false);
      }
    }

    var RegionMasterComponent = /*#__PURE__*/function () {
      function RegionMasterComponent() {
        _classCallCheck(this, RegionMasterComponent);

        this.isFileUpload = false;
        this.Action = 'payrollmaster_reportcolumns_upload';
        this.Searchform = true;
        this.Createform = false;
        this.Editform = false;
        this.Summarytable = true;
        this.pagination = {
          has_previous: false,
          has_next: false,
          index: 1
        };
        this.NameSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.CreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.EditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(RegionMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Summary(this.pagination.index);
          this.dropdown();
        }
      }, {
        key: "Add",
        value: function Add() {
          this.Searchform = false;
          this.Createform = true; // this.Editform=false

          this.Summarytable = false;
        }
      }, {
        key: "edit",
        value: function edit(i) {
          this.Searchform = false; // this.Createform=true

          this.Editform = true;
          this.Summarytable = false; // let id=this.EditForm.get('id').value
          // this.service.reportEditSummary(i).subscribe(data=>{
          //   this.EditForm.patchValue({
          //     name:data.name,
          //     type:data.type.id,
          //     id:data.id
          //   })
          // })

          this.Search();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.Searchform = true;
          this.Createform = false;
          this.Editform = false;
          this.Summarytable = true;
          this.CreateForm.reset();
          this.EditForm.reset();
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.CreateForm.value.name == '' || this.CreateForm.value.name == null) {// this.notification.showError('Please Enter Name')
          } else if (this.CreateForm.value.type == '' || this.CreateForm.value.type == null) {// this.notification.showError('Please Select Type')
          } else {// this.service.reportSubmit(this.CreateForm.value).subscribe(data=>{
            //   if(data.status=='success'){
            //     this.notification.showSuccess('Successfully Created')
            //     this.Searchform=true
            //     this.Createform=false
            //     this.Editform=false
            //     this.Summarytable=true
            //     this.Search()
            //     this.CreateForm.reset();
            //   }
            //   else if(data.name_message){
            //     this.notification.showError(data.name_message)
            //   }
            // })
          }
        }
      }, {
        key: "prevpage",
        value: function prevpage() {
          if (this.pagination.has_previous) {
            this.pagination.index = this.pagination.index - 1;
          }

          this.Summary(this.pagination.index);
        }
      }, {
        key: "nextpage",
        value: function nextpage() {
          if (this.pagination.has_next) {
            this.pagination.index = this.pagination.index + 1;
          }

          this.Summary(this.pagination.index);
        }
      }, {
        key: "update",
        value: function update() {
          if (this.EditForm.value.name == '' || this.EditForm.value.name == null) {// this.notification.showError('Please Enter Name')
          } else if (this.EditForm.value.type == '' || this.EditForm.value.type == null) {// this.notification.showError('Please Select Type')
          } else {// this.service.reportSubmit(this.EditForm.value).subscribe(data=>{
            //   if(data.status=='success'){
            //     this.notification.showSuccess('Successfully Updated')
            //     this.Searchform=true
            //     this.Createform=false
            //     this.Editform=false
            //     this.Summarytable=true
            //     this.Search()
            //     this.EditForm.reset();
            //   }
            //   else if(data.name_message){
            //     this.notification.showError(data.name_message)
            //   }
            // })
          }
        }
      }, {
        key: "Search",
        value: function Search() {// this.service.reportSummary(this.NameSearch.value,this.pagination.index).subscribe(data=>{
          //   this.SummaryData=data['data']
          // })
        }
      }, {
        key: "Summary",
        value: function Summary(page) {// this.service.reportSummary(this.NameSearch.value,page).subscribe(data=>{
          //   this.SummaryData=data['data']
          // })
        }
      }, {
        key: "delete",
        value: function _delete(i) {// this.service.reportDeleteSummary(i).subscribe(data=>{
          //   if(data.status=='success'){
          //     this.notification.showSuccess('Successfully Deleted')
          //     this.Search()
          //   }
          // })
        }
      }, {
        key: "clear",
        value: function clear() {
          this.NameSearch.reset();
          this.Search();
        }
      }, {
        key: "dropdown",
        value: function dropdown() {// this.service.reportDropdown().subscribe(data=>{
          //   this.DropdownData=data['data']
          // })
        }
      }, {
        key: "fileChange",
        value: function fileChange(file, files) {
          this.labelImport.nativeElement.innerText = Array.from(files).map(function (f) {
            return f.name;
          }).join(', ');
          this.images = file.target.files[0];
        }
      }, {
        key: "uploadfile",
        value: function uploadfile() {
          this.isFileUpload = true;
          this.Searchform = false;
          this.Createform = false;
          this.Editform = false;
          this.Summarytable = false;
        }
      }, {
        key: "uploadDocuments",
        value: function uploadDocuments() {// this.service.MasterUpload(this.Action,this.images).subscribe(data=>{
          //   this.notification.showSuccess(data.message)
          // })
        }
      }, {
        key: "downloadTemplate",
        value: function downloadTemplate() {
          var download = 'payrollmaster_reportcolumns_upload'; // this.service.MasterUploadDownload(download,1).subscribe(data=>{
          //   let binaryData = [];
          //   binaryData.push(data)
          //   let downloadUrl = window.URL.createObjectURL(new Blob(binaryData));
          //   let link = document.createElement('a');
          //   link.href = downloadUrl;
          //   link.download = "payrollmaster_reportcolumns_upload" + ".xlsx";
          //   link.click();
          // })
        }
      }, {
        key: "cancelupload",
        value: function cancelupload() {
          this.Searchform = true;
          this.Createform = false;
          this.Editform = false;
          this.Summarytable = true;
          this.isFileUpload = false;
        }
      }]);

      return RegionMasterComponent;
    }();

    RegionMasterComponent.ɵfac = function RegionMasterComponent_Factory(t) {
      return new (t || RegionMasterComponent)();
    };

    RegionMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegionMasterComponent,
      selectors: [["app-region-master"]],
      viewQuery: function RegionMasterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelImport = _t.first);
        }
      },
      decls: 5,
      vars: 4,
      consts: [[1, "pl-5", "mt-5", "container"], [4, "ngIf"], ["class", "padTable", 4, "ngIf"], [1, "ReportColumns"], [1, "row", "col-md-10"], [1, "col-3", "display", "pad"], ["action", ""], ["matInput", "", 3, "formControl"], [1, "row", "col-5", "display"], [1, "col-2"], ["mat-stroked-button", "", "type", "button", "aria-label", "Search", 1, "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "clear", 3, "click"], [1, "col-6"], ["type", "button", "mat-fab", "", 1, "add"], ["matTooltip", "Add", 2, "color", "black", 3, "click"], [1, "col-3"], [3, "formGroup"], [1, "col-12", "row"], [1, "col-6", "row"], ["type", "text", "matInput", "", "formControlName", "name"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-3", "mt-3"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", "ml-2", 3, "disabled", "click"], [3, "value"], [1, "padTable"], [1, "table-responsive", 2, "width", "600px"], [1, "table", "border", "text-center"], [1, "border"], [1, "border", "text-center"], [1, "border", "width", "text-center"], [4, "ngFor", "ngForOf"], [1, "col-sm-12", 2, "font-size", "small", "text-align", "right", "margin-bottom", "5%"], ["type", "button", "mat-icon-button", "", "color", "primary", 3, "disabled", "click"], [1, "fa-solid", "fa-pencil", 3, "click"], [1, "fa-solid", "fa-trash-can", 3, "click"]],
      template: function RegionMasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegionMasterComponent_div_1_Template, 23, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegionMasterComponent_div_2_Template, 24, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegionMasterComponent_div_3_Template, 24, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegionMasterComponent_div_4_Template, 22, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Searchform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Createform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Editform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Summarytable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      styles: [".display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.pad[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n\n.ReportColumns[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.padTable[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.fa-trash-can[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 10px;\n  color: red;\n  cursor: pointer;\n}\n\n.fa-pencil[_ngcontent-%COMP%] {\n  color: #474aff;\n  padding: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.add[_ngcontent-%COMP%] {\n  background-color: rgba(45, 129, 155, 0.56);\n}\n\n#add[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  background-color: rgba(45, 129, 155, 0.56);\n  margin-top: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 56%;\n  margin-left: 21%;\n}\n\n.custom-file-input[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaW9uLW1hc3Rlci9DOlxcVXNlcnNcXHN1YmFzaDIzNDUxM1xcRGVza3RvcFxcTGVhcm5pbmdcXEFuZ3VsYXIgTGVhcm5pbmdcXGFuZ3VsYXIgZGVtbyBwcm9qZWN0XFx2c29sdlNhbXBsZS9zcmNcXGFwcFxccmVnaW9uLW1hc3RlclxccmVnaW9uLW1hc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaW9uLW1hc3Rlci9yZWdpb24tbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURDQTtFQUVJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUVBLFVBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFFSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBRUksMENBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESEE7RUFDSSwyQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcmVnaW9uLW1hc3Rlci9yZWdpb24tbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ucGFke1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuLlJlcG9ydENvbHVtbnN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4ucGFkVGFibGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuLndpZHRoe1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuLmN1cnNvcntcclxuICAgIGN1cnNvcjpwb2ludGVyXHJcbn1cclxuLmZhLXRyYXNoLWNhbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGQ1O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGNvbG9yOiAjZmZhNTAwO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmEtcGVuY2lsIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZmY7XHJcbiAgICBjb2xvcjogIzQ3NGFmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMTI5LCAxNTUsIDAuNTYpO1xyXG59XHJcbiNhZGR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDEyOSwgMTU1LCAwLjU2KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDU2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMSU7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn0iLCIuZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhZCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5SZXBvcnRDb2x1bW5zIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wYWRUYWJsZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLndpZHRoIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS10cmFzaC1jYW4ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLXBlbmNpbCB7XG4gIGNvbG9yOiAjNDc0YWZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDEyOSwgMTU1LCAwLjU2KTtcbn1cblxuI2FkZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMjksIDE1NSwgMC41Nik7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDU2JTtcbiAgbWFyZ2luLWxlZnQ6IDIxJTtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-region-master',
          templateUrl: './region-master.component.html',
          styleUrls: ['./region-master.component.scss']
        }]
      }], function () {
        return [];
      }, {
        labelImport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['labelImport']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/segment-add/segment-add.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/segment-add/segment-add.component.ts ***!
    \******************************************************/

  /*! exports provided: SegmentAddComponent */

  /***/
  function srcAppSegmentAddSegmentAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentAddComponent", function () {
      return SegmentAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SegmentAddComponent = /*#__PURE__*/function () {
      function SegmentAddComponent() {
        _classCallCheck(this, SegmentAddComponent);
      }

      _createClass(SegmentAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SegmentAddComponent;
    }();

    SegmentAddComponent.ɵfac = function SegmentAddComponent_Factory(t) {
      return new (t || SegmentAddComponent)();
    };

    SegmentAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SegmentAddComponent,
      selectors: [["app-segment-add"]],
      decls: 2,
      vars: 0,
      template: function SegmentAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "segment-add works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZ21lbnQtYWRkL3NlZ21lbnQtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SegmentAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-segment-add',
          templateUrl: './segment-add.component.html',
          styleUrls: ['./segment-add.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/segment-master/segment-master.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/segment-master/segment-master.component.ts ***!
    \************************************************************/

  /*! exports provided: SegmentMasterComponent */

  /***/
  function srcAppSegmentMasterSegmentMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentMasterComponent", function () {
      return SegmentMasterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SegmentMasterComponent = /*#__PURE__*/function () {
      function SegmentMasterComponent() {
        _classCallCheck(this, SegmentMasterComponent);
      }

      _createClass(SegmentMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SegmentMasterComponent;
    }();

    SegmentMasterComponent.ɵfac = function SegmentMasterComponent_Factory(t) {
      return new (t || SegmentMasterComponent)();
    };

    SegmentMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SegmentMasterComponent,
      selectors: [["app-segment-master"]],
      decls: 2,
      vars: 0,
      template: function SegmentMasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Segment Master");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZ21lbnQtbWFzdGVyL3NlZ21lbnQtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SegmentMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-segment-master',
          templateUrl: './segment-master.component.html',
          styleUrls: ['./segment-master.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login-service.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/login-service.service.ts ***!
    \***************************************************/

  /*! exports provided: LoginServiceService */

  /***/
  function srcAppServicesLoginServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginServiceService", function () {
      return LoginServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginServiceService = /*#__PURE__*/function () {
      function LoginServiceService(http) {
        _classCallCheck(this, LoginServiceService);

        this.http = http;
        this.url = "http://139.59.32.22:8188/";
      }

      _createClass(LoginServiceService, [{
        key: "post",
        value: function post(form) {
          return this.http.post(this.url + 'usrserv/auth_token', form);
        }
      }, {
        key: "Valueget",
        value: function Valueget() {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http.get(this.url + 'mstserv/create_segmentmaster', {
            'headers': headers
          });
        }
      }, {
        key: "Valuepost",
        value: function Valuepost(form) {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http.post(this.url + 'mstserv/create_segmentmaster', form, {
            'headers': headers
          });
        }
      }, {
        key: "component",
        value: function component() {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http.get(this.url + 'mstserv/create_componenttype', {
            'headers': headers
          });
        }
      }, {
        key: "type",
        value: function type() {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http.get(this.url + 'mstserv/payrolldeduction_type_dropdown', {
            'headers': headers
          });
        }
      }, {
        key: "delete",
        value: function _delete(form) {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http["delete"](this.url + 'mstserv/segment_get/' + form, {
            'headers': headers
          });
        }
      }, {
        key: "edit",
        value: function edit(form) {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http.get(this.url + 'mstserv/segment_get/' + form, {
            'headers': headers
          });
        }
      }, {
        key: "update",
        value: function update(form) {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          }; // const ses=JSON.parse(sessionStorage.getItem('data'))
          // const session=ses['data'].id

          return this.http.post(this.url + "mstserv/create_segmentmaster", form, {
            'headers': headers
          });
        }
      }, {
        key: "SegmentName",
        value: function SegmentName(form) {
          var token = JSON.parse(sessionStorage.getItem('UserLogin')).token;
          var headers = {
            'Authorization': 'Token ' + token
          };
          return this.http.get(this.url + 'mstserv/create_segmentmaster?name=' + form + '&page=1', {
            'headers': headers
          });
        }
      }]);

      return LoginServiceService;
    }();

    LoginServiceService.ɵfac = function LoginServiceService_Factory(t) {
      return new (t || LoginServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginServiceService,
      factory: LoginServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared.service.ts":
  /*!***********************************!*\
    !*** ./src/app/shared.service.ts ***!
    \***********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.emp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      }

      _createClass(SharedService, [{
        key: "get",
        value: function get() {
          return this.emp;
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestComponent_tr_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_tr_46_Template_td_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var l_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.Edit(l_r1, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_tr_46_Template_td_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.Delete(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r1.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r1.Age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r1.Place);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r1.Work);
      }
    }

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);

        this.list = [];
        this.TestGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          Age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          Place: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          Work: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.list);
        }
      }, {
        key: "Submit",
        value: function Submit() {
          console.log("Submit", this.TestGroup.value);
          this.list.push(this.TestGroup.value);
          this.TestGroup.reset();
        }
      }, {
        key: "update",
        value: function update() {
          this.list[this.i] = this.TestGroup.value;
          this.TestGroup.reset();
        }
      }, {
        key: "Edit",
        value: function Edit(i, l) {
          this.i = l;
          console.log('i', i);
          this.TestGroup.patchValue({
            Name: i.Name,
            Age: i.Age,
            Place: i.Place,
            Work: i.Work
          });
        }
      }, {
        key: "Delete",
        value: function Delete(l) {
          this.list.splice(l);
          console.log(l);
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)();
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["app-test"]],
      decls: 47,
      vars: 3,
      consts: [[1, "container", "mt-5"], [1, "h2"], [1, "card", "p-5"], ["action", "", 3, "formGroup"], [1, "col-12", "row"], [1, "form-group", "col-6"], ["type", "text", "formControlName", "Name", "placeholder", "Name", 1, "form-control"], ["type", "number", "formControlName", "Age", "placeholder", "Age", 1, "form-control"], ["type", "text", "formControlName", "Place", "placeholder", "Place", 1, "form-control"], ["type", "text", "formControlName", "Work", "placeholder", "Work", 1, "form-control"], [1, "float-right", "mr-5", "mt-2"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "table", "border", "mt-2"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], [2, "cursor", "pointer", "color", "green", 3, "click"], [2, "cursor", "pointer", "color", "red", 3, "click"]],
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Student Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Place");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_button_click_24_listener() {
            return ctx.Submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_button_click_26_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "S.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Place");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TestComponent_tr_46_Template, 15, 5, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.TestGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.TestGroup.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test',
          templateUrl: './test.component.html',
          styleUrls: ['./test.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-login/user-login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/user-login/user-login.component.ts ***!
    \****************************************************/

  /*! exports provided: UserLoginComponent */

  /***/
  function srcAppUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
      return UserLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login-service.service */
    "./src/app/services/login-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UserLoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.output);
      }
    }

    var UserLoginComponent = /*#__PURE__*/function () {
      function UserLoginComponent(login, router) {
        _classCallCheck(this, UserLoginComponent);

        this.login = login;
        this.router = router;
        this.name = false;
        this.userlogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(UserLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp() {
          var _this6 = this;

          if (this.userlogin.controls.username.value == 'EMP007' && this.userlogin.controls.password.value == '1234') {
            this.login.post(this.userlogin.value).subscribe(function (data) {
              _this6.name = false;
              sessionStorage.setItem('UserLogin', JSON.stringify(data));
              console.log(data);
            });
            this.router.navigate(['nav']);
          } else {
            // console.log('incorrect username')
            if (this.userlogin.controls.username.value !== 'EMP007' || this.userlogin.controls.password.value !== '1234') {
              this.output = 'USER NOT FOUND';
              this.name = true;
            } // else if(this.userlogin.controls.username.value!=='EMP007'){
            //   this.output='Invalid username'
            //   this.name=true
            // }
            // else if(this.userlogin.controls.password.value!=='1234'){
            //   this.output='Invalid password'
            //   this.name=true
            // }

          }
        }
      }]);

      return UserLoginComponent;
    }();

    UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
      return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserLoginComponent,
      selectors: [["app-user-login"]],
      decls: 18,
      vars: 3,
      consts: [[1, "main"], ["class", "alert alert-warning col-2 float-right mt-5 pl-4 fix", "style", "margin-right: 70px;", "role", "alert", 4, "ngIf"], [1, "container"], [1, "card", "cards", "col-4", "border-dark"], [1, "text-center", "mt-2", "font"], ["action", "", 3, "formGroup"], [1, "form-group"], ["for", "", 1, "h5"], ["type", "text", "name", "name", "placeholder", "Enter username", "formControlName", "username", 1, "form-control", "bg-none"], ["type", "text", "name", "password", "placeholder", "Enter password", "formControlName", "password", 1, "form-control"], [1, "btn", "btn-primary", "float-right", "mb-3", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-warning", "col-2", "float-right", "mt-5", "pl-4", "fix", 2, "margin-right", "70px"], [1, "pl-1"]],
      template: function UserLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserLoginComponent_div_1_Template, 5, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_16_listener() {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userlogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userlogin.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: [".main[_ngcontent-%COMP%] {\n  background-image: url(walpy_1656910900013.png);\n  background-size: cover;\n  overflow: hidden;\n  background-color: none;\n  background-repeat: no-repeat;\n  height: 100%;\n}\n\n.cards[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin-left: 400px;\n  box-shadow: 0px 0px 5px black;\n  margin-top: 150px;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 14px;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  font-size: 14px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.fix[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi9DOlxcVXNlcnNcXHN1YmFzaDIzNDUxM1xcRGVza3RvcFxcTGVhcm5pbmdcXEFuZ3VsYXIgTGVhcm5pbmdcXGFuZ3VsYXIgZGVtbyBwcm9qZWN0XFx2c29sdlNhbXBsZS9zcmNcXGFwcFxcdXNlci1sb2dpblxcdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FESkE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHdhbHB5XzE2NTY5MTA5MDAwMTMucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNhcmRze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZml4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIubWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCh3YWxweV8xNjU2OTEwOTAwMDEzLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb250IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZml4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-login',
          templateUrl: './user-login.component.html',
          styleUrls: ['./user-login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
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
    /*! C:\Users\subash234513\Desktop\Learning\Angular Learning\angular demo project\vsolvSample\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map