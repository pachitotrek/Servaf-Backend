(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ensayos-ensayos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ensayos/ensayos.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ensayos/ensayos.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <app-menu></app-menu>\n</ion-header>\n<ion-content>  \n    <div class=\"container-fluid m-0 p-0\">\n      <ion-toolbar color=\"dark\">\n        <ion-title>Agregar Banco de Calibracion</ion-title>\n      </ion-toolbar>\n      <form [formGroup]=\"form\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-6 mt-2\">Numero</label>\n                    <div class=\"col-sm-6\">\n                      <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" formControlName=\"numero\">\n                    </div>\n                  </div>\n                </div>          \n              </div>\n            </div>\n            <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-6 mt-2\">Identificacion</label>\n                    <div class=\"col-sm-6\">\n                      <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" formControlName=\"identificacion\" >\n                    </div>\n                  </div>\n                </div>          \n              </div>\n            </div>\n            <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <ion-item>\n                    <ion-label>Tipo</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo\">\n                      <ion-select-option value=\"Automatico\">Automatico</ion-select-option>\n                      <ion-select-option value=\"Manual\">Manual</ion-select-option>               \n                    </ion-select>\n                  </ion-item>\n                </div>          \n              </div>\n            </div>\n            <!-- <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <ion-item>\n                    <ion-label>Automatico?</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"automatico\">\n                      <ion-select-option value=\"Si\">SI</ion-select-option>\n                      <ion-select-option value=\"No\">NO</ion-select-option>                 \n                    </ion-select>\n                  </ion-item>\n                </div>          \n              </div>\n            </div> -->\n            <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-6 mt-2\">Cantidad de Lineas</label>\n                    <div class=\"col-sm-6\">\n                      <input type=\"number\" class=\"form-control\" formControlName=\"lineas\" aria-describedby=\"emailHelp\" value=\"1\" >\n                    </div>\n                  </div>\n                </div>          \n              </div>\n            </div>\n            <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-6 mt-2\">Medidores / Linea</label>\n                    <div class=\"col-sm-6\">\n                      <input type=\"number\" class=\"form-control\" formControlName=\"medidores\" aria-describedby=\"emailHelp\" value=\"1\" >\n                    </div>\n                  </div>\n                </div>          \n              </div>\n            </div>\n            <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlTextarea1\">Descripcion</label>\n                <textarea class=\"form-control\" formControlName=\"descripcion\" rows=\"3\"></textarea>\n              </div>\n            </div>              \n          </div>\n          <div class=\"row mb-5\">\n            <div class=\"col-sm-12\">\n              <ion-item button color=\"primary\" text-center (click)=\"crear()\" [disabled]=\"!form.valid\">\n                <ion-label>Agregar</ion-label>\n              </ion-item>\n            </div>\n          </div>\n    \n        </div>\n      </form>\n    </div>\n  \n \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ensayos/ensayos-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ensayos/ensayos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EnsayosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsayosPageRoutingModule", function() { return EnsayosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ensayos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensayos.page */ "./src/app/pages/ensayos/ensayos.page.ts");




var routes = [
    {
        path: '',
        component: _ensayos_page__WEBPACK_IMPORTED_MODULE_3__["EnsayosPage"]
    }
];
var EnsayosPageRoutingModule = /** @class */ (function () {
    function EnsayosPageRoutingModule() {
    }
    EnsayosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EnsayosPageRoutingModule);
    return EnsayosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ensayos/ensayos.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ensayos/ensayos.module.ts ***!
  \*************************************************/
/*! exports provided: EnsayosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsayosPageModule", function() { return EnsayosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ensayos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ensayos-routing.module */ "./src/app/pages/ensayos/ensayos-routing.module.ts");
/* harmony import */ var _ensayos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ensayos.page */ "./src/app/pages/ensayos/ensayos.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");








var EnsayosPageModule = /** @class */ (function () {
    function EnsayosPageModule() {
    }
    EnsayosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                _ensayos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnsayosPageRoutingModule"]
            ],
            declarations: [_ensayos_page__WEBPACK_IMPORTED_MODULE_6__["EnsayosPage"]]
        })
    ], EnsayosPageModule);
    return EnsayosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ensayos/ensayos.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/ensayos/ensayos.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vuc2F5b3MvZW5zYXlvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ensayos/ensayos.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ensayos/ensayos.page.ts ***!
  \***********************************************/
/*! exports provided: EnsayosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsayosPage", function() { return EnsayosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");






var EnsayosPage = /** @class */ (function () {
    function EnsayosPage(api, aux, eventos) {
        this.api = api;
        this.aux = aux;
        this.eventos = eventos;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            automatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            lineas: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            medidores: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    EnsayosPage.prototype.ngOnInit = function () {
    };
    EnsayosPage.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.crearBanco(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Banco de Ensayos ha sido creado");
                        _this.form.reset();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    EnsayosPage.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"] },
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_5__["EventosService"] }
    ]; };
    EnsayosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ensayos',
            template: __webpack_require__(/*! raw-loader!./ensayos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ensayos/ensayos.page.html"),
            styles: [__webpack_require__(/*! ./ensayos.page.scss */ "./src/app/pages/ensayos/ensayos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_5__["EventosService"]])
    ], EnsayosPage);
    return EnsayosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ensayos-ensayos-module-es5.js.map