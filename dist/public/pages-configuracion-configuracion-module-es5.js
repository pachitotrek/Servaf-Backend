(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracion-configuracion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/configuracion.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracion/configuracion.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n<div>\n  <ion-router-outlet></ion-router-outlet>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/instrumentos/instrumentos.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracion/instrumentos/instrumentos.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Instrumentos Predeterminados</ion-title>\n    </ion-toolbar>\n    <form  [formGroup]=\"form\" *ngIf=\"state\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Caudalimetro</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"rvm\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Temperatura de entrada del Agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"t_entrada_agua\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Tiempo (Cronometro)</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temp_ambiente\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Humedad Relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Presion de entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_entrada\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Presion de Salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_salida\">\n                    <ion-select-option *ngFor=\"let a of instrumentos\" [value]=\"a._id\">{{a.patron}}</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <ion-item button color=\"primary\" text-center (click)=\"update()\">\n              <ion-label>Guardar</ion-label>\n            </ion-item>\n          </div>\n        </div>\n  \n      </div>\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/parametros/parametros.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracion/parametros/parametros.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Parametros Predeterminados</ion-title>\n    </ion-toolbar>\n    <form [formGroup]=\"form\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Numero de observaciones por medidor en cada prueba</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" formControlName=\"repeticiones\" class=\"form-control\"  aria-describedby=\"emailHelp\">\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Coeficiente de expansion termico-volumetrico del material del RVM</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" formControlName=\"coef_rvm\" aria-describedby=\"emailHelp\"  >\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Coeficiente de expansion termico-volumetrico del agua </label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" formControlName=\"coef_agua\" aria-describedby=\"emailHelp\"  >\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Compresibilidad del agua (kPa-1)</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" formControlName=\"compre_agua\" aria-describedby=\"emailHelp\"  >\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Incertidumbre de Coeficiente de expansion termico-volumetrico del material RVM</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_rvm\" aria-describedby=\"emailHelp\"  >\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Incertidumbre de Coeficiente de expansion termico-volumetrico del agua (C)</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_agua\" aria-describedby=\"emailHelp\"  >\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-6 mt-2\">Incertidumbre de compresibilidad del agua (KPa) Numero de observaciones por medidor en cada prueba</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_compre_agua\" aria-describedby=\"emailHelp\" >\n                  </div>\n                </div>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Usar Codigos internos para medidores?</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"codigos\">\n                    <ion-select-option value=\"Si\">SI</ion-select-option>\n                    <ion-select-option value=\"No\">NO</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Usar Archivo excel para la salida de codigo de barras?</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"excel\">\n                    <ion-select-option value=\"Si\">SI</ion-select-option>\n                    <ion-select-option value=\"No\">NO</ion-select-option>                  \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n          <div class=\"col-sm-12 mt-2\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Habilitar registro de depuracion de resultados?</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"registro\">\n                    <ion-select-option value=\"Si\">SI</ion-select-option>\n                    <ion-select-option value=\"No\">NO</ion-select-option>                 \n                  </ion-select>\n                </ion-item>\n              </div>          \n            </div>\n          </div>\n    \n        </div>\n        <div class=\"row mb-5\">\n          <div class=\"col-sm-12\">\n            <ion-item button color=\"primary\" text-center (click)=\"update()\">\n              <ion-label>Guardar</ion-label>\n            </ion-item>\n          </div>\n        </div>\n  \n      </div>\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/configuracion/configuracion-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageRoutingModule", function() { return ConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracion.page */ "./src/app/pages/configuracion/configuracion.page.ts");
/* harmony import */ var _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instrumentos/instrumentos.component */ "./src/app/pages/configuracion/instrumentos/instrumentos.component.ts");
/* harmony import */ var _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parametros/parametros.component */ "./src/app/pages/configuracion/parametros/parametros.component.ts");






var routes = [
    {
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionPage"], children: [
            {
                path: 'instrumentos', component: _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_4__["InstrumentosComponent"]
            },
            {
                path: 'parametros', component: _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_5__["ParametrosComponent"]
            },
        ]
    }
];
var ConfiguracionPageRoutingModule = /** @class */ (function () {
    function ConfiguracionPageRoutingModule() {
    }
    ConfiguracionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConfiguracionPageRoutingModule);
    return ConfiguracionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracion-routing.module */ "./src/app/pages/configuracion/configuracion-routing.module.ts");
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion.page */ "./src/app/pages/configuracion/configuracion.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instrumentos/instrumentos.component */ "./src/app/pages/configuracion/instrumentos/instrumentos.component.ts");
/* harmony import */ var _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parametros/parametros.component */ "./src/app/pages/configuracion/parametros/parametros.component.ts");










var ConfiguracionPageModule = /** @class */ (function () {
    function ConfiguracionPageModule() {
    }
    ConfiguracionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionPageRoutingModule"]
            ],
            declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionPage"], _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_8__["InstrumentosComponent"], _parametros_parametros_component__WEBPACK_IMPORTED_MODULE_9__["ParametrosComponent"]]
        })
    ], ConfiguracionPageModule);
    return ConfiguracionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/configuracion/configuracion.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracion/configuracion.page.ts ***!
  \***********************************************************/
/*! exports provided: ConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function() { return ConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfiguracionPage = /** @class */ (function () {
    function ConfiguracionPage() {
    }
    ConfiguracionPage.prototype.ngOnInit = function () {
    };
    ConfiguracionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracion',
            template: __webpack_require__(/*! raw-loader!./configuracion.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/configuracion.page.html"),
            styles: [__webpack_require__(/*! ./configuracion.page.scss */ "./src/app/pages/configuracion/configuracion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfiguracionPage);
    return ConfiguracionPage;
}());



/***/ }),

/***/ "./src/app/pages/configuracion/instrumentos/instrumentos.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/configuracion/instrumentos/instrumentos.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNpb24vaW5zdHJ1bWVudG9zL2luc3RydW1lbnRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/configuracion/instrumentos/instrumentos.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/configuracion/instrumentos/instrumentos.component.ts ***!
  \****************************************************************************/
/*! exports provided: InstrumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentosComponent", function() { return InstrumentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");





var InstrumentosComponent = /** @class */ (function () {
    function InstrumentosComponent(api, aux) {
        this.api = api;
        this.aux = aux;
        this.instrumentos = [];
        this.default = [];
        this.state = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            t_entrada_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            temp_ambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            presion_entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            presion_salida: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    }
    InstrumentosComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.getDefault();
    };
    InstrumentosComponent.prototype.getAll = function () {
        var _this = this;
        this.api.getAllInstrumentos().subscribe(function (resp) {
            if (resp.ok) {
                _this.instrumentos = resp.data;
            }
        });
    };
    InstrumentosComponent.prototype.getDefault = function () {
        var _this = this;
        this.api.getDefaultInstrumentos().subscribe(function (resp) {
            if (resp.ok) {
                _this.default = resp.data[0];
                _this.form.patchValue({ _id: _this.default._id });
                _this.form.patchValue({ rvm: _this.default.rvm });
                _this.form.patchValue({ t_entrada_agua: _this.default.t_entrada_agua });
                _this.form.patchValue({ tiempo: _this.default.tiempo });
                _this.form.patchValue({ temp_ambiente: _this.default.temp_ambiente });
                _this.form.patchValue({ humedad: _this.default.humedad });
                _this.form.patchValue({ presion_entrada: _this.default.presion_entrada });
                _this.form.patchValue({ presion_salida: _this.default.presion_salida });
                _this.state = true;
            }
        });
    };
    InstrumentosComponent.prototype.update = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.updateDefaultInstrumento(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "Ha sido editado sus parametros definidos");
                        _this.getAll();
                        _this.getDefault();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    InstrumentosComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] }
    ]; };
    InstrumentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instrumentos',
            template: __webpack_require__(/*! raw-loader!./instrumentos.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/instrumentos/instrumentos.component.html"),
            styles: [__webpack_require__(/*! ./instrumentos.component.scss */ "./src/app/pages/configuracion/instrumentos/instrumentos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"]])
    ], InstrumentosComponent);
    return InstrumentosComponent;
}());



/***/ }),

/***/ "./src/app/pages/configuracion/parametros/parametros.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/configuracion/parametros/parametros.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNpb24vcGFyYW1ldHJvcy9wYXJhbWV0cm9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/configuracion/parametros/parametros.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/configuracion/parametros/parametros.component.ts ***!
  \************************************************************************/
/*! exports provided: ParametrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametrosComponent", function() { return ParametrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ParametrosComponent = /** @class */ (function () {
    function ParametrosComponent(api, aux) {
        this.api = api;
        this.aux = aux;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            repeticiones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            coef_rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            coef_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            compre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            incertidumbre_rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            incertidumbre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            incertidumbre_compre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            codigos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            excel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            registro: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
    }
    ParametrosComponent.prototype.ngOnInit = function () {
        this.getDefault();
    };
    ParametrosComponent.prototype.getDefault = function () {
        var _this = this;
        this.api.getDefaultParametros().subscribe(function (resp) {
            if (resp.ok) {
                _this.default = resp.data[0];
                _this.form.patchValue({ _id: _this.default._id });
                _this.form.patchValue({ repeticiones: _this.default.repeticiones });
                _this.form.patchValue({ coef_rvm: _this.default.coef_rvm });
                _this.form.patchValue({ coef_agua: _this.default.coef_agua });
                _this.form.patchValue({ compre_agua: _this.default.compre_agua });
                _this.form.patchValue({ incertidumbre_rvm: _this.default.incertidumbre_rvm });
                _this.form.patchValue({ incertidumbre_agua: _this.default.incertidumbre_agua });
                _this.form.patchValue({ incertidumbre_compre_agua: _this.default.incertidumbre_compre_agua });
                _this.form.patchValue({ codigos: _this.default.codigos });
                _this.form.patchValue({ excel: _this.default.excel });
                _this.form.patchValue({ registro: _this.default.registro });
            }
        });
    };
    ParametrosComponent.prototype.update = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.updateDefaultParametros(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "Ha sido editado sus parametros definidos");
                        _this.getDefault();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    ParametrosComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"] }
    ]; };
    ParametrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parametros',
            template: __webpack_require__(/*! raw-loader!./parametros.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracion/parametros/parametros.component.html"),
            styles: [__webpack_require__(/*! ./parametros.component.scss */ "./src/app/pages/configuracion/parametros/parametros.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"]])
    ], ParametrosComponent);
    return ParametrosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuracion-configuracion-module-es5.js.map