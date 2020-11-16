(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordenes-ordenes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/consultar/consultar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordenes/consultar/consultar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>  \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Ordenes de Entrada Pendientes</ion-title>\n        </ion-toolbar>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <div class=\"container\">\n          <ion-card text-center>\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\"># Orden</th>\n                  <th scope=\"col\">Cliente</th>\n                  <th scope=\"col\">Fecha de Creacion</th>\n                  <th scope=\"col\">Crear Orden de Trabajo</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ordenes\">\n                  <th scope=\"row\">{{item.orden}}</th>\n                  <td>{{item.cliente?.nombre}}</td>\n                  <td>{{item.fecha | date}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"primary\">\n                      <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>            \n              </tbody>\n            </table>        \n          </ion-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/crear/crear.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordenes/crear/crear.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Crear una Nueva Orden de Entrada</ion-title>\n    </ion-toolbar>\n  \n    <form [formGroup]=\"form\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-sm-4 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Consecutivo</label>\n              <div class=\"col-sm-4\">\n                <input type=\"number\" formControlName=\"orden\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>\n          </div>  \n          <div class=\"col-sm-6\">\n            <ion-item>\n                <ion-label>Clientes Actuales</ion-label>\n                <ionic-selectable formControlName=\"cliente\"  itemValueField=\"_id\" itemTextField=\"nombre\" [items]=\"clientes\"\n                  [canSearch]=\"true\" (onChange)=\"portChange($event)\">\n                </ionic-selectable>\n            </ion-item>  \n          </div>\n          <div class=\"col-sm-2\">\n            <ion-item button (click)=\"addcliente()\">\n              <ion-label>Crear Nuevo cliente</ion-label>\n            </ion-item>\n          </div>\n        </div>\n        <div class=\"row\">\n          <ion-toolbar color=\"dark\">\n            <ion-title>Informacion Normativa</ion-title>\n          </ion-toolbar>\n          <ion-toolbar>\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>1.Norma de Referencia</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"norma\" (ionChange)=\"setNorma($event.target.value)\" >\n                      <ion-select-option *ngFor=\"let n of normas\" [value]=\"n.norma\">{{n.norma}}</ion-select-option>                      \n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>2.Caudal permanente [m3/h]</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"q3\">                \n                      <ion-select-option *ngFor=\"let f of norma.caudal\" [value]=\"f\">{{f}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>3.Clase de Precision</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"precision\">\n                      <ion-select-option *ngFor=\"let p of norma.precision\" [value]=\"p\">{{p}}</ion-select-option>                     \n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <label class=\"col-sm-6 mt-2 ml-0 p-0\">4.Presion máxima permisible [bar]</label>\n                    <div class=\"col-sm-6 mt-1\">\n                      <input type=\"number\" formControlName=\"pmaxp\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"10\"\n                        aria-describedby=\"emailHelp\">\n                    </div>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>5.Pérdida de presion [bar]</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"pperdida\">                  \n                      <ion-select-option *ngFor=\"let pp of norma.ppresion\" [value]=\"pp\">{{pp}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>6.Rango de medicion (Q3/Q1)</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"q3q1\">                  \n                      <ion-select-option *ngFor=\"let r of norma.rango\" [value]=\"r\">{{r}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>7.Q2/Q1</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"q2q1\">                  \n                      <ion-select-option  value=\"1.6\">1.6</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>8.Clase de Temperatura</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"clasetemp\">                  \n                      <ion-select-option *ngFor=\"let t of norma.temp\" [value]=\"t\">{{t}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>9.Sensibilidad aguas arriba</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"aguasarriba\">                  \n                      <ion-select-option *ngFor=\"let wa of norma.swa\" [value]=\"wa\">{{wa}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-6\">\n                  <ion-item>\n                    <ion-label>10.Sensibilidad aguas abajo</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\" formControlName=\"aguasabajo\">                  \n                      <ion-select-option *ngFor=\"let wd of norma.swd\" [value]=\"wd\">{{wd}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </ion-toolbar>\n          <ion-toolbar color=\"dark\">\n            <ion-title>Informacion metrologica</ion-title>\n          </ion-toolbar>\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-sm-4 m-0 p-0\">\n                <ion-item>\n                  <ion-label>8.Tipo de Indicador</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo\">              \n                    <ion-select-option *ngFor=\"let item of ind\" [value]=\"item\">{{item}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n              <div class=\"col-sm-4 m-0 p-0\">\n                <ion-item>\n                  <ion-label>9.Principio Fisico</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"principio\">                \n                    <ion-select-option *ngFor=\"let item of prf\" [value]=\"item\">{{item}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n              <div class=\"col-sm-4 m-0 p-0\">\n                <ion-item>\n                  <ion-label>10.Posicion</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"posicion\">                  \n                    <ion-select-option *ngFor=\"let item of pos\" [value]=\"item\">{{item}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n              <div class=\"col-sm-4 m-0 p-0\">\n                <div class=\"form-group row pl-2\">\n                  <label class=\"col-sm-6 mt-3\">11.Diametro Nominal [mm]</label>\n                  <div class=\"col-sm-6\">\n                    <input type=\"number\" class=\"form-control mt-2\" formControlName=\"diametro\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-4 m-0 p-0\">\n                <ion-item>\n                  <ion-label>12.Rango [m3]</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"rango\">                   \n                    <ion-select-option *ngFor=\"let item of rg\" [value]=\"item\">{{item}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n              <div class=\"col-sm-4 m-0 p-0\">\n                <ion-item>\n                  <ion-label class=\"col-sm-6 mt-2 ml-0 p-0\">13.Resolucion de escala [l]</ion-label>\n                  <input type=\"number\" class=\"col-sm-6 mt-2 ml-0 p-0\" formControlName=\"escala\">\n                  <!-- <ion-select placeholder=\"Seleccione Una\" formControlName=\"escala\">                   \n                    <ion-select-option *ngFor=\"let item of ind\" [value]=\"item\">{{item}}</ion-select-option>\n                  </ion-select> -->\n                </ion-item>\n              </div>\n            </div>\n          </div>  \n        </div>\n  \n      </div>\n\n      <ion-toolbar color=\"dark\" class=\"pr-3\">\n\n        <ion-button (click)=\"save()\" [disabled]=\"!form.valid\" expand=\"block\" color=\"light\" slot=\"end\" >\n          Siguiente\n        </ion-button>\n        \n      </ion-toolbar>\n     \n    </form>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/items/items.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordenes/items/items.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Asocie los Medidores de la Orden</ion-title>\n        </ion-toolbar>\n        <div>\n          <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Numero de Serie</th>                \n                <th scope=\"col\">Año de Fabricacion</th>\n                <th scope=\"col\">Marca Comercial</th>\n                <th scope=\"col\">Modelo</th>\n                <th scope=\"col\">Eliminar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of medidores\">\n                <th scope=\"row\">{{item.serie}}</th>\n                <td>{{item.fabricacion}}</td>\n                <td>{{item.marca}}</td>\n                <td>{{item.modelo}}</td>\n                <td style=\"max-width: 130px;\" text-center>                 \n                  <ion-button (click)=\"delete(item._id)\" size=\"small\" color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>             \n            </tbody>           \n          </table>   \n          <ion-toolbar color=\"dark\" class=\"pr-3\">\n            <ion-button (click)=\"add()\"  expand=\"block\" color=\"light\" slot=\"end\" >\n             Agregar\n            </ion-button>\n            <ion-button (click)=\"continue()\"  expand=\"block\" color=\"success\" slot=\"end\" >\n              Siguiente\n             </ion-button>\n\n            \n          </ion-toolbar>      \n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/ordenes.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordenes/ordenes.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n<div>\n  <ion-router-outlet></ion-router-outlet>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/review/review.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ordenes/review/review.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Resumen de la Orden</ion-title>\n        </ion-toolbar>\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 p-2\">\n              <p class=\"p-0 m-0\">Orden No: {{orden.orden}}</p>\n              <p class=\"p-0 m-0\">Cliente: {{orden.cliente?.nombre}}</p>\n              <p class=\"p-0 m-0\">{{orden.cliente?.identificacion}}: {{orden.cliente?.numero}}</p>\n              <p class=\"p-0 m-0\">Email: {{orden.cliente?.email}}</p>\n              <p class=\"p-0 m-0\">Telefono: {{orden.cliente?.telefono}}</p>             \n              <p class=\"p-0 m-0\">Creada: {{orden.fecha | date}}</p>\n            </div>         \n            <div class=\"col-sm-4 p-2\">\n              <p class=\"p-0 m-0\"> Norma: {{orden.norma}} </p>\n              <p class=\"p-0 m-0\">Q1: {{orden.q1 | number}}</p>\n              <p class=\"p-0 m-0\">Q2: {{orden.q2 | number}}</p>\n              <p class=\"p-0 m-0\">Q3: {{orden.q3 | number}}</p>\n              <p class=\"p-0 m-0\">Q4: {{orden.q4 | number}}</p>\n              <p class=\"p-0 m-0\">Diametro: {{orden.diametro | number}}</p>\n              <p class=\"p-0 m-0\">Precision: {{orden.precision}}</p>\n              <p class=\"p-0 m-0\">Presion Max Permisible: {{orden.pmaxp | number}}</p>\n              <p class=\"p-0 m-0\">Clase de Temperatura: {{orden.clasetemp}}</p>\n              <p class=\"p-0 m-0\">Perdida de Presion: {{orden.pperdida}}</p>\n              <p class=\"p-0 m-0\">Rango: {{orden.rango}}</p>\n            </div>\n            <div class=\"col-sm-4 p-2\">\n              <p class=\"p-0 m-0\"> Sensibilidad Aguas Abajo: {{orden.aguasabajo}} </p>\n              <p class=\"p-0 m-0\">Sensibilidad Aguas Arriba: {{orden.aguasarriba}}</p>\n              <p class=\"p-0 m-0\">Tipo: {{orden.tipo}}</p>\n              <p class=\"p-0 m-0\">Principio Fisico: {{orden.principio}}</p>\n              <p class=\"p-0 m-0\">Posicion: {{orden.posicion}}</p>\n              <p class=\"p-0 m-0\">Escala: {{orden.escala | number}}</p>\n            </div>     \n          </div>\n        </div>\n        <ion-toolbar color=\"dark\">\n          <ion-title>Medidores Asociados</ion-title>\n        </ion-toolbar>\n        <div>\n          <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Numero de Serie</th>\n                <th scope=\"col\">Año de Fabricacion</th>\n                <th scope=\"col\">Marca Comercial</th>\n                <th scope=\"col\">Modelo</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of medidores\">\n                <th scope=\"row\">{{item.serie}}</th>\n                <td>{{item.fabricacion}}</td>\n                <td>{{item.marca}}</td>\n                <td>{{item.modelo}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\" class=\"pr-3 pl-3\">\n          <ion-button (click)=\"continue()\" expand=\"block\" color=\"danger\" slot=\"start\">\n            Cancelar\n          </ion-button>\n          <ion-button (click)=\"continue()\" expand=\"block\" color=\"success\" slot=\"end\">\n            Siguiente\n          </ion-button>\n        </ion-toolbar>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ordenes/consultar/consultar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/ordenes/consultar/consultar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVuZXMvY29uc3VsdGFyL2NvbnN1bHRhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ordenes/consultar/consultar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ordenes/consultar/consultar.component.ts ***!
  \****************************************************************/
/*! exports provided: ConsultarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarComponent", function() { return ConsultarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ConsultarComponent = class ConsultarComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.ordenes = [];
    }
    ngOnInit() {
        this.getOrdenes();
    }
    getOrdenes() {
        this.api.getOrdenesOpen().subscribe((resp) => {
            if (resp.ok) {
                this.ordenes = resp.data;
            }
        });
    }
    open(id) {
        this.router.navigate([`/trabajo/open/${id}`]);
    }
};
ConsultarComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ConsultarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultar',
        template: __webpack_require__(/*! raw-loader!./consultar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/consultar/consultar.component.html"),
        styles: [__webpack_require__(/*! ./consultar.component.scss */ "./src/app/pages/ordenes/consultar/consultar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ConsultarComponent);



/***/ }),

/***/ "./src/app/pages/ordenes/crear/crear.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/ordenes/crear/crear.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVuZXMvY3JlYXIvY3JlYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ordenes/crear/crear.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ordenes/crear/crear.component.ts ***!
  \********************************************************/
/*! exports provided: CrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComponent", function() { return CrearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_modalclientes_modalclientes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/modalclientes/modalclientes.component */ "./src/app/components/modalclientes/modalclientes.component.ts");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









class Port {
}
let CrearComponent = class CrearComponent {
    constructor(api, modal, eventos, aux, router) {
        this.api = api;
        this.modal = modal;
        this.eventos = eventos;
        this.aux = aux;
        this.router = router;
        this.aguasarriba = [
            "U0", "U3", "U5", "U15", 'U0S', "U3S", "U5S", "U10S"
        ];
        this.aguasabajo = [
            "D0", "D3", "D5", "D0S", "D3S"
        ];
        this.q2q1 = 1.6;
        this.ind = [
            "Analogico", "Digital", "Mixto"
        ];
        this.pos = [
            "Horizontal", "Vertical", "Cualquiera"
        ];
        this.rg = [
            "0 - 999", "0 - 9999", "0 - 99999", "0 - 999999"
        ];
        this.prf = [
            "Velocidad", "Volumetrico", "Electromagnetico"
        ];
        this.isItemAvailable = false;
        this.clientes = [];
        this.normas = [];
        this.norma = [];
        this.orden = [];
        this.subscripcion = eventos.getNewClient().subscribe((x) => {
            this.getClientes();
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            norma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            q3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            precision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pmaxp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pperdida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            q3q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            q2q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            clasetemp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            aguasarriba: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            aguasabajo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            principio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            posicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            diametro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rango: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            escala: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }
    ngOnInit() {
        this.getConsecutivo();
        this.getClientes();
        this.getNormas();
    }
    portChange(event) {
        console.log('port:', event.value);
    }
    save() {
        this.aux.createLoading().then((x) => {
            this.api.crearOrden(this.form.value).subscribe((resp) => {
                if (resp.ok) {
                    this.aux.dismissLoading().then((b) => {
                        this.orden = resp.data;
                        this.router.navigate(['/ordenes/medidores'], { queryParams: { id: this.orden._id } });
                    });
                }
            });
        }).catch((e) => {
            this.aux.dismissLoading().then((b) => {
                this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    }
    getConsecutivo() {
        this.api.Consecutivo().subscribe((resp) => {
            if (resp.ok) {
                let consecutivo = resp.data[0].orden + 1;
                this.form.patchValue({ orden: consecutivo });
            }
        });
    }
    getClientes() {
        this.api.GetClientes().subscribe((resp) => {
            if (resp.ok) {
                this.clientes = resp.clientes;
            }
        });
    }
    getNormas() {
        this.api.getNormas().subscribe((resp) => {
            if (resp.ok) {
                this.normas = resp.data;
            }
        });
    }
    setNorma(item) {
        this.norma = this.normas.find(e => e.norma == item);
    }
    addcliente() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_components_modalclientes_modalclientes_component__WEBPACK_IMPORTED_MODULE_5__["ModalclientesComponent"]
            });
            return yield modal.present();
        });
    }
};
CrearComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"] },
    { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__["AuxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
CrearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear',
        template: __webpack_require__(/*! raw-loader!./crear.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/crear/crear.component.html"),
        styles: [__webpack_require__(/*! ./crear.component.scss */ "./src/app/pages/ordenes/crear/crear.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__["AuxService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], CrearComponent);



/***/ }),

/***/ "./src/app/pages/ordenes/items/items.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/ordenes/items/items.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVuZXMvaXRlbXMvaXRlbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ordenes/items/items.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ordenes/items/items.component.ts ***!
  \********************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_modalmedidor_modalmedidor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modalmedidor/modalmedidor.component */ "./src/app/components/modalmedidor/modalmedidor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");








let ItemsComponent = class ItemsComponent {
    constructor(modalController, route, api, eventos, aux, router) {
        this.modalController = modalController;
        this.route = route;
        this.api = api;
        this.eventos = eventos;
        this.aux = aux;
        this.router = router;
        this.id = "";
        this.medidores = [];
        this.medidor$ = eventos.getNewMedidor().subscribe((x) => {
            // this.getMedidores(this.id);
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParamMap.get("id");
        // this.getMedidores(this.id);
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_modalmedidor_modalmedidor_component__WEBPACK_IMPORTED_MODULE_3__["ModalmedidorComponent"],
                componentProps: {
                    "id": this.id
                }
            });
            return yield modal.present();
        });
    }
    // getMedidores(id){
    //   this.api.getMedidoresOrden(id).subscribe((resp:any)=>{
    //     if(resp.ok){
    //       this.medidores=resp.data;
    //       console.log(this.medidores);
    //     }
    //   })
    // }
    // delete(item){
    //   this.aux.createLoading().then((x:any)=>{     
    //     this.api.DeleteMedidoresOrden(item).subscribe((resp:any)=>{      
    //       if(resp.ok){
    //         this.aux.dismissLoading().then((b:any)=>{           
    //           this.aux.createAlert("Exito","Medidor Eliminado");
    //           this.getMedidores(this.id);           
    //         })
    //       }
    //     });
    //   }).catch((e:any)=>{
    //     this.aux.dismissLoading().then((b:any)=>{
    //       this.aux.createAlert("Error desconocido","Error por favor contacte con soporte");
    //     })
    //   })
    // }
    continue() {
        this.router.navigate(['/ordenes/review'], { queryParams: { id: this.id } });
    }
};
ItemsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"] },
    { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__["AuxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: __webpack_require__(/*! raw-loader!./items.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/items/items.component.html"),
        styles: [__webpack_require__(/*! ./items.component.scss */ "./src/app/pages/ordenes/items/items.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__["AuxService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ItemsComponent);



/***/ }),

/***/ "./src/app/pages/ordenes/ordenes-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ordenes/ordenes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OrdenesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPageRoutingModule", function() { return OrdenesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ordenes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordenes.page */ "./src/app/pages/ordenes/ordenes.page.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/ordenes/crear/crear.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/ordenes/consultar/consultar.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/items.component */ "./src/app/pages/ordenes/items/items.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/pages/ordenes/review/review.component.ts");








const routes = [
    {
        path: '',
        component: _ordenes_page__WEBPACK_IMPORTED_MODULE_3__["OrdenesPage"], children: [
            {
                path: 'crear', component: _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__["CrearComponent"]
            },
            {
                path: 'medidores', component: _items_items_component__WEBPACK_IMPORTED_MODULE_6__["ItemsComponent"]
            },
            {
                path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"]
            },
            {
                path: 'consultar', component: _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_5__["ConsultarComponent"]
            },
        ]
    }
];
let OrdenesPageRoutingModule = class OrdenesPageRoutingModule {
};
OrdenesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdenesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ordenes/ordenes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ordenes/ordenes.module.ts ***!
  \*************************************************/
/*! exports provided: OrdenesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPageModule", function() { return OrdenesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordenes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordenes-routing.module */ "./src/app/pages/ordenes/ordenes-routing.module.ts");
/* harmony import */ var _ordenes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordenes.page */ "./src/app/pages/ordenes/ordenes.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/ordenes/crear/crear.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/ordenes/consultar/consultar.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./items/items.component */ "./src/app/pages/ordenes/items/items.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./review/review.component */ "./src/app/pages/ordenes/review/review.component.ts");













let OrdenesPageModule = class OrdenesPageModule {
};
OrdenesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
            src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
            _ordenes_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdenesPageRoutingModule"]
        ],
        declarations: [_ordenes_page__WEBPACK_IMPORTED_MODULE_6__["OrdenesPage"], _crear_crear_component__WEBPACK_IMPORTED_MODULE_8__["CrearComponent"], _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_9__["ConsultarComponent"], _items_items_component__WEBPACK_IMPORTED_MODULE_11__["ItemsComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"]]
    })
], OrdenesPageModule);



/***/ }),

/***/ "./src/app/pages/ordenes/ordenes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/ordenes/ordenes.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVuZXMvb3JkZW5lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ordenes/ordenes.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ordenes/ordenes.page.ts ***!
  \***********************************************/
/*! exports provided: OrdenesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesPage", function() { return OrdenesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrdenesPage = class OrdenesPage {
    constructor() { }
    ngOnInit() {
    }
};
OrdenesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordenes',
        template: __webpack_require__(/*! raw-loader!./ordenes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/ordenes.page.html"),
        styles: [__webpack_require__(/*! ./ordenes.page.scss */ "./src/app/pages/ordenes/ordenes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OrdenesPage);



/***/ }),

/***/ "./src/app/pages/ordenes/review/review.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/ordenes/review/review.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVuZXMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ordenes/review/review.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ordenes/review/review.component.ts ***!
  \**********************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let ReviewComponent = class ReviewComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.id = "";
        this.medidores = [];
        this.orden = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParamMap.get("id");
        this.getMedidores(this.id);
        this.getOrden(this.id);
    }
    getMedidores(id) {
        // this.api.getMedidoresOrden(id).subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.medidores=resp.data;        
        //   }
        // })
    }
    getOrden(id) {
        this.api.getOrden(id).subscribe((resp) => {
            if (resp.ok) {
                this.orden = resp.data[0];
                console.log(this.orden);
            }
        });
    }
    continue() {
        this.router.navigate(['/home']);
    }
};
ReviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ordenes/review/review.component.html"),
        styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/pages/ordenes/review/review.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ReviewComponent);



/***/ })

}]);
//# sourceMappingURL=pages-ordenes-ordenes-module-es2015.js.map