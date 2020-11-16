(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clientes-clientes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/clientes/clientes.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/clientes/clientes.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"text-center mt-2\">\n          <ion-item text-center color=\"primary\">\n            <ion-label>Clientes Actuales</ion-label>\n          </ion-item>\n          <div class=\"text-center table-responsive\">\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\">Nombre</th>\n                  <th scope=\"col\">Tipo</th>\n                  <th scope=\"col\">Numero</th>\n                  <th scope=\"col\">Telefono</th>\n                  <th scope=\"col\">Email</th>\n                  <th scope=\"col\">Ciudad</th>\n                  <th scope=\"col\">Gestionar</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of clientes\">\n                  <th scope=\"row\">{{item.nombre}}</th>\n                  <td>{{item.identificacion}}</td>\n                  <td>{{item.numero}}</td>\n                  <td>{{item.telefono}}</td>\n                  <td>{{item.email}}</td>\n                  <td>{{item.ciudad}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"set(item)\" size=\"small\" color=\"success\">\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>               \n                  </td>\n                </tr>\n              </tbody>\n            </table>      \n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div *ngIf=\"pannel\">\n          <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"edit\">\n            <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n            <ion-label>Editar Cliente</ion-label>\n          </ion-item>\n          <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"!edit\">\n            <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n            <ion-label>Crear Cliente</ion-label>\n          </ion-item>      \n        </div>\n        <form [formGroup]=\"form\" (ngSubmit)=\"crear()\" *ngIf=\"pannel\">\n          <div class=\"form-group\">\n            <label>Nombre</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"nombre\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Nombre del Cliente</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Tipo de identificacion</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"identificacion\">\n              <option value=\"C.C\">C.C</option>\n              <option value=\"NIT\">NIT</option>\n              <option value=\"RUT\">RUT</option>\n            </select>\n           \n            <small class=\"form-text text-muted\">Identificacion del Cliente</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Numero de Identificacion</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"numero\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Numero de Identificacion del cliente</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Direccion</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"direccion\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Direccion del Cliente</small>\n          </div>\n          <div class=\"form-group\" *ngIf=\"!edit\">\n            <label>Telefono</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"telefono\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Telefono del cliente</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Email del cliente</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Ciudad</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"ciudad\" aria-describedby=\"\">\n         \n          </div>     \n         \n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\"  *ngIf=\"!edit\">Crear Cliente</button>\n          <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"update()\"  *ngIf=\"edit\">Actualizar Cliente</button>\n        </form>\n   \n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/clientes/clientes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/clientes/clientes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function() { return ClientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes.page */ "./src/app/pages/clientes/clientes.page.ts");




var routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
    }
];
var ClientesPageRoutingModule = /** @class */ (function () {
    function ClientesPageRoutingModule() {
    }
    ClientesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ClientesPageRoutingModule);
    return ClientesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/clientes/clientes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.module.ts ***!
  \***************************************************/
/*! exports provided: ClientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientes-routing.module */ "./src/app/pages/clientes/clientes-routing.module.ts");
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clientes.page */ "./src/app/pages/clientes/clientes.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");








var ClientesPageModule = /** @class */ (function () {
    function ClientesPageModule() {
    }
    ClientesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesPageRoutingModule"]
            ],
            declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"]]
        })
    ], ClientesPageModule);
    return ClientesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/clientes/clientes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGVzL2NsaWVudGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/clientes/clientes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.ts ***!
  \*************************************************/
/*! exports provided: ClientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPage", function() { return ClientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");





var ClientesPage = /** @class */ (function () {
    function ClientesPage(api, aux) {
        this.api = api;
        this.aux = aux;
        this.edit = false;
        this.pannel = true;
        this.clientes = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            creado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pass2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ClientesPage.prototype.ngOnInit = function () {
        this.getClientes();
    };
    ClientesPage.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.crearClientes(_this.form.value).subscribe(function (resp) {
                console.log(resp);
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El cliente ha sido creado");
                        _this.getClientes();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    ClientesPage.prototype.getClientes = function () {
        var _this = this;
        this.api.GetClientes().subscribe(function (resp) {
            if (resp.ok) {
                _this.clientes = resp.clientes;
            }
        });
    };
    ClientesPage.prototype.set = function (item) {
        this.form.setValue(item);
        this.edit = true;
    };
    ClientesPage.prototype.refresh = function () {
        this.form.reset();
        this.edit = false;
    };
    ClientesPage.prototype.update = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.editClientes(_this.form.value).subscribe(function (resp) {
                console.log(resp);
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El cliente ha sido actualizado");
                        _this.edit = false;
                        _this.getClientes();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    ClientesPage.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] }
    ]; };
    ClientesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! raw-loader!./clientes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/clientes/clientes.page.html"),
            styles: [__webpack_require__(/*! ./clientes.page.scss */ "./src/app/pages/clientes/clientes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"]])
    ], ClientesPage);
    return ClientesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-clientes-clientes-module-es5.js.map