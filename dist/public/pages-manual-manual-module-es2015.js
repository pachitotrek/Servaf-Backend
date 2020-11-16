(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manual-manual-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manual/manual.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manual/manual.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\" *ngFor=\"let item of items\">\n                <ion-card color=\"primary\" style=\"max-width: 350px;\">\n                    <ion-card-header>\n                        <ion-card-subtitle>{{item.seccion}}</ion-card-subtitle>\n                        <ion-card-title>{{item.titulo}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <div>\n                            <video width=\"300\" controls>\n                                <source [src]=\"item.imagen | imagen:'video'\" type=\"video/mp4\">                         \n                                Your browser does not support HTML video.\n                            </video>                        \n\n                        </div>\n\n                        {{item.descripcion}}\n                    </ion-card-content>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/manual/manual-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/manual/manual-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageRoutingModule", function() { return ManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual.page */ "./src/app/pages/manual/manual.page.ts");




const routes = [
    {
        path: '',
        component: _manual_page__WEBPACK_IMPORTED_MODULE_3__["ManualPage"]
    }
];
let ManualPageRoutingModule = class ManualPageRoutingModule {
};
ManualPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/manual/manual.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/manual/manual.module.ts ***!
  \***********************************************/
/*! exports provided: ManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPageModule", function() { return ManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manual-routing.module */ "./src/app/pages/manual/manual-routing.module.ts");
/* harmony import */ var _manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manual.page */ "./src/app/pages/manual/manual.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let ManualPageModule = class ManualPageModule {
};
ManualPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManualPageRoutingModule"]
        ],
        declarations: [_manual_page__WEBPACK_IMPORTED_MODULE_6__["ManualPage"]]
    })
], ManualPageModule);



/***/ }),

/***/ "./src/app/pages/manual/manual.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/manual/manual.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnVhbC9tYW51YWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/manual/manual.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/manual/manual.page.ts ***!
  \*********************************************/
/*! exports provided: ManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualPage", function() { return ManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let ManualPage = class ManualPage {
    constructor(api) {
        this.api = api;
        this.items = [];
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.api.GetTutoriales().subscribe((resp) => {
            if (resp.ok) {
                this.items = resp.data;
            }
        });
    }
};
ManualPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ManualPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual',
        template: __webpack_require__(/*! raw-loader!./manual.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manual/manual.page.html"),
        styles: [__webpack_require__(/*! ./manual.page.scss */ "./src/app/pages/manual/manual.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], ManualPage);



/***/ })

}]);
//# sourceMappingURL=pages-manual-manual-module-es2015.js.map