(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updatebanco-updatebanco-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/updatebanco/update/update.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/updatebanco/update/update.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-content>  \n     <div class=\"container-fluid m-0 p-0\">\n       <ion-toolbar color=\"dark\">\n         <ion-title>Agregar Banco de Calibracion</ion-title>\n       </ion-toolbar>\n       <form [formGroup]=\"form\">\n         <div class=\"container\">\n           <div class=\"row\">\n             <div class=\"col-sm-12 mt-2\">\n               <div class=\"form-group row\">\n                 <div class=\"col-sm-12\">\n                   <div class=\"form-group row\">\n                     <label class=\"col-sm-6 mt-2\">Numero</label>\n                     <div class=\"col-sm-6\">\n                       <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" formControlName=\"numero\">\n                     </div>\n                   </div>\n                 </div>          \n               </div>\n             </div>\n             <div class=\"col-sm-12 mt-2\">\n               <div class=\"form-group row\">\n                 <div class=\"col-sm-12\">\n                   <div class=\"form-group row\">\n                     <label class=\"col-sm-6 mt-2\">Identificacion</label>\n                     <div class=\"col-sm-6\">\n                       <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" formControlName=\"identificacion\" >\n                     </div>\n                   </div>\n                 </div>          \n               </div>\n             </div>\n             <div class=\"col-sm-12 mt-2\">\n               <div class=\"form-group row\">\n                 <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect1\">Tipo</label>\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\"  formControlName=\"tipo\">\n                      <option value=\"Si\">Automatico</option>\n                      <option value=\"No\">Manual</option>\n                    </select>\n                  </div>\n                 </div>          \n               </div>\n             </div>\n             <div class=\"col-sm-12 mt-2\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                 <div class=\"form-group\">\n                   <label for=\"exampleFormControlSelect1\">Estado Actual</label>\n                   <select class=\"form-control\" id=\"exampleFormControlSelect1\"  formControlName=\"status\">\n                     <option value=\"true\">Activo</option>\n                     <option value=\"false\">Inactivo</option>\n                   </select>\n                 </div>\n                </div>          \n              </div>\n            </div>\n             <div class=\"col-sm-12 mt-2\">\n               <div class=\"form-group row\">\n                 <div class=\"col-sm-12\">\n                   <div class=\"form-group row\">\n                     <label class=\"col-sm-6 mt-2\">Cantidad de Lineas</label>\n                     <div class=\"col-sm-6\">\n                       <input type=\"number\" class=\"form-control\" formControlName=\"lineas\" aria-describedby=\"emailHelp\" value=\"1\" >\n                     </div>\n                   </div>\n                 </div>          \n               </div>\n             </div>\n             <div class=\"col-sm-12 mt-2\">\n               <div class=\"form-group row\">\n                 <div class=\"col-sm-12\">\n                   <div class=\"form-group row\">\n                     <label class=\"col-sm-6 mt-2\">Medidores / Linea</label>\n                     <div class=\"col-sm-6\">\n                       <input type=\"number\" class=\"form-control\" formControlName=\"medidores\" aria-describedby=\"emailHelp\" value=\"1\" >\n                     </div>\n                   </div>\n                 </div>          \n               </div>\n             </div>\n             <div class=\"col-sm-12 mt-2\">\n               <div class=\"form-group\">\n                 <label for=\"exampleFormControlTextarea1\">Descripcion</label>\n                 <textarea class=\"form-control\" formControlName=\"descripcion\" rows=\"3\"></textarea>\n               </div>\n             </div>              \n           </div>\n           <div class=\"row mb-5\">\n             <div class=\"col-sm-12\">\n               <ion-item button color=\"primary\" text-center (click)=\"crear()\" [disabled]=\"!form.valid\">\n                 <ion-label>Agregar</ion-label>\n               </ion-item>\n             </div>\n           </div>\n     \n         </div>\n       </form>\n     </div>\n   \n  \n \n </ion-content>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/updatebanco/updatebanco.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/updatebanco/updatebanco.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-menu></app-menu>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mt-2\">\n        <ion-item color=\"dark\">\n          <ion-label>Lista de Bancos de Ensayos</ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead>\n            <tr class=\"text-center\">\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Indentificacion</th>\n              <th scope=\"col\">Tipo</th>\n              <th scope=\"col\">Descripcion</th>\n              <th scope=\"col\">Estado</th>\n              <th scope=\"col\">Gestionar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of bancos\" class=\"text-center\">\n              <th scope=\"row\">{{item.numero}}</th>\n              <td>{{item.identificacion}}</td>\n              <td>{{item.tipo}}</td>\n              <td>{{item.descripcion}}</td>\n              <td *ngIf=\"item.status==true\">ACTIVO</td>\n              <td *ngIf=\"item.status==false\">INACTIVO</td>\n              <td>\n                <ion-button (click)=\"go(item)\" size=\"small\" color=\"primary\">\n                  <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                </ion-button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/updatebanco/update/update.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/updatebanco/update/update.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZWJhbmNvL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/updatebanco/update/update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/updatebanco/update/update.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(api, aux, eventos, modalController) {
        this.api = api;
        this.aux = aux;
        this.eventos = eventos;
        this.modalController = modalController;
        this.item = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            automatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            lineas: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            medidores: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.set();
    };
    UpdateComponent.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.updateBanco(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Banco de Ensayos ha sido actualizado");
                        _this.form.reset();
                        _this.eventos.newUpdateAlert();
                        _this.modalController.dismiss();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    UpdateComponent.prototype.set = function () {
        this.form.setValue(this.item);
    };
    UpdateComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"] },
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_5__["EventosService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UpdateComponent.prototype, "item", void 0);
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/updatebanco/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/pages/updatebanco/update/update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_5__["EventosService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/updatebanco/updatebanco-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/updatebanco/updatebanco-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatebancoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatebancoPageRoutingModule", function() { return UpdatebancoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updatebanco_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatebanco.page */ "./src/app/pages/updatebanco/updatebanco.page.ts");




var routes = [
    {
        path: '',
        component: _updatebanco_page__WEBPACK_IMPORTED_MODULE_3__["UpdatebancoPage"]
    }
];
var UpdatebancoPageRoutingModule = /** @class */ (function () {
    function UpdatebancoPageRoutingModule() {
    }
    UpdatebancoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdatebancoPageRoutingModule);
    return UpdatebancoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/updatebanco/updatebanco.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/updatebanco/updatebanco.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatebancoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatebancoPageModule", function() { return UpdatebancoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatebanco_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updatebanco-routing.module */ "./src/app/pages/updatebanco/updatebanco-routing.module.ts");
/* harmony import */ var _updatebanco_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatebanco.page */ "./src/app/pages/updatebanco/updatebanco.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/pages/updatebanco/update/update.component.ts");









var UpdatebancoPageModule = /** @class */ (function () {
    function UpdatebancoPageModule() {
    }
    UpdatebancoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _updatebanco_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatebancoPageRoutingModule"]
            ],
            declarations: [_updatebanco_page__WEBPACK_IMPORTED_MODULE_6__["UpdatebancoPage"], _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"]]
        })
    ], UpdatebancoPageModule);
    return UpdatebancoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/updatebanco/updatebanco.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/updatebanco/updatebanco.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZWJhbmNvL3VwZGF0ZWJhbmNvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/updatebanco/updatebanco.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/updatebanco/updatebanco.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatebancoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatebancoPage", function() { return UpdatebancoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/update.component */ "./src/app/pages/updatebanco/update/update.component.ts");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");







var UpdatebancoPage = /** @class */ (function () {
    function UpdatebancoPage(api, aux, modalController, eventos) {
        var _this = this;
        this.api = api;
        this.aux = aux;
        this.modalController = modalController;
        this.eventos = eventos;
        this.bancos = [];
        eventos.getNewupdate().subscribe(function (x) {
            _this.getAll();
        });
    }
    UpdatebancoPage.prototype.ngOnInit = function () {
        this.getAll();
    };
    UpdatebancoPage.prototype.getAll = function () {
        var _this = this;
        this.api.getBancos().subscribe(function (resp) {
            if (resp.ok) {
                _this.bancos = resp.data;
                console.log(_this.bancos);
            }
        });
    };
    UpdatebancoPage.prototype.go = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"],
                            componentProps: {
                                'item': item
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UpdatebancoPage.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"] }
    ]; };
    UpdatebancoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatebanco',
            template: __webpack_require__(/*! raw-loader!./updatebanco.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/updatebanco/updatebanco.page.html"),
            styles: [__webpack_require__(/*! ./updatebanco.page.scss */ "./src/app/pages/updatebanco/updatebanco.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"]])
    ], UpdatebancoPage);
    return UpdatebancoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-updatebanco-updatebanco-module-es5.js.map