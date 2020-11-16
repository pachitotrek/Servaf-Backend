(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trabajo-trabajo-module"],{

/***/ "./node_modules/ngx-print/fesm2015/ngx-print.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-print/fesm2015/ngx-print.js ***!
  \******************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintDirective {
    constructor() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        cssFileName => `<link rel="stylesheet" type="text/css" href="${cssFileName}">`);
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(() => {
                window.print();
                setTimeout(function() { window.close(); }, 0);
              }, ${this.printDelay});
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
NgxPrintDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: "button[ngxPrint]"
            },] }
];
NgxPrintDirective.propDecorators = {
    printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintModule {
}
NgxPrintModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [NgxPrintDirective],
                imports: [],
                exports: [NgxPrintDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/addmedidores/addmedidores.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/addmedidores/addmedidores.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Informacion General</ion-title>\n    </ion-toolbar>    \n      <div class=\"container-fluid\" *ngIf=\"state\">\n        <div class=\"row\">      \n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Consecutivo</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" [value]=\"datos.orden\"  class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>            \n          </div>\n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Tipo de Prueba</label>\n              <div class=\"col-sm-3\">\n                <input type=\"text\" [value]=\"tipo\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>            \n          </div>              \n        </div> \n        <div class=\"row\">\n          <ion-toolbar color=\"dark\">\n            <ion-title>Medidores Disponibles</ion-title>\n          </ion-toolbar>\n          <div class=\"col-sm-12 p-3\" text-center>\n            <div>\n              <table class=\"table\">\n                <thead class=\"bg-info\">\n                  <tr>\n                    <th scope=\"col\">Numero de Serie</th>                \n                    <th scope=\"col\">Año de Fabricacion</th>\n                    <th scope=\"col\">Marca Comercial</th>\n                    <th scope=\"col\">Modelo</th>\n                    <th scope=\"col\">Agregar</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of medidores\">\n                    <th scope=\"row\">{{item.serie}}</th>\n                    <td>{{item.fabricacion}}</td>\n                    <td>{{item.marca}}</td>\n                    <td>{{item.modelo}}</td>\n                    <td style=\"max-width: 130px;\" text-center>                 \n                      <ion-button (click)=\"push(item)\" size=\"small\" color=\"primary\">\n                        <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                      </ion-button>\n                    </td>\n                  </tr>             \n                </tbody>           \n              </table> \n  \n              <!-- <ion-toolbar color=\"dark\" class=\"pr-3\">\n                <ion-button (click)=\"add()\"  expand=\"block\" color=\"light\" slot=\"end\" >\n                 Agregar\n                </ion-button>\n                <ion-button (click)=\"continue()\"  expand=\"block\" color=\"success\" slot=\"end\" >\n                  Siguiente\n                 </ion-button>\n    \n                \n              </ion-toolbar>       -->\n            </div>\n\n\n          </div>\n        </div>\n        <div class=\"row\">\n          <ion-toolbar color=\"dark\">\n            <ion-title>Medidores Selecionados</ion-title>\n          </ion-toolbar>\n          <div class=\"col-sm-12 p-3\" text-center>\n            <div>\n              <table class=\"table\">\n                <thead class=\"bg-info\">\n                  <tr>\n                    <th scope=\"col\">Numero de Serie</th>                \n                    <th scope=\"col\">Año de Fabricacion</th>\n                    <th scope=\"col\">Marca Comercial</th>\n                    <th scope=\"col\">Modelo</th>\n                    <th scope=\"col\">Quitar</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of seleccionados\">\n                    <th scope=\"row\">{{item.serie}}</th>\n                    <td>{{item.fabricacion}}</td>\n                    <td>{{item.marca}}</td>\n                    <td>{{item.modelo}}</td>\n                    <td style=\"max-width: 130px;\" text-center>                 \n                      <ion-button (click)=\"delete(item)\" size=\"small\" color=\"primary\">\n                        <ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\n                      </ion-button>\n                    </td>\n                  </tr>             \n                </tbody>           \n              </table> \n  \n              <ion-toolbar color=\"dark\" class=\"pr-3\">\n                <!-- <ion-button (click)=\"add()\"  expand=\"block\" color=\"light\" slot=\"end\" >\n                 Agregar\n                </ion-button> -->\n                <ion-button (click)=\"continue()\"  expand=\"block\" color=\"success\" slot=\"end\" >\n                  Siguiente\n                 </ion-button>\n    \n                \n              </ion-toolbar>      \n            </div>\n\n\n          </div>\n        </div>\n\n      </div>  \n  </div>\n</ion-content>      \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/calibrar/calibrar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/calibrar/calibrar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>  \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Ordenes de Trabajo Pendientes</ion-title>\n        </ion-toolbar>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <div class=\"container\">\n          <ion-card text-center>\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\"># Orden</th>\n                  <th scope=\"col\">Tipo de Prueba</th>\n                  <th scope=\"col\">Fecha de Creacion</th>\n                  <th scope=\"col\">Correr Prueba</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ordenes\">\n                  <th scope=\"row\">{{item.orden}}</th>\n                  <td *ngIf=\"item.tipo==1\">Calibracion</td>\n                  <td *ngIf=\"item.tipo==2\">Perdida de Carga</td>\n                  <td *ngIf=\"item.tipo==3\">Presion Hidroestatica</td>\n                  <td>{{item.fecha | date}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"primary\">\n                      <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>            \n              </tbody>\n            </table>        \n          </ion-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/consultar/consultar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/consultar/consultar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>  \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Ordenes de Entrada Pendientes</ion-title>\n        </ion-toolbar>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <div class=\"container\">\n          <ion-card text-center>\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\"># Orden</th>\n                  <th scope=\"col\">Cliente</th>\n                  <th scope=\"col\">Fecha de Creacion</th>\n                  <th scope=\"col\">Gestionar</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ordenes\">\n                  <th scope=\"row\">{{item.orden}}</th>\n                  <td>{{item.cliente?.nombre}}</td>\n                  <td>{{item.fecha | date}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"success\">\n                      <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>            \n              </tbody>\n            </table>        \n          </ion-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/crear/crear.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/crear/crear.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Crear una Nueva Orden de Trabajo</ion-title>\n    </ion-toolbar>\n\n    <form action=\"\" [formGroup]=\"form\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">      \n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Consecutivo</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" formControlName=\"orden\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>\n            \n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Encargado</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"encargado\">\n                <ion-select-option *ngFor=\"let u of usuarios\" [value]=\"u._id\">{{u.nombre}}  {{u.apellido}}</ion-select-option>                \n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Tipo de Ensayo</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"ensayo\">\n                <ion-select-option value=\"1\">Calibracion</ion-select-option>\n                <ion-select-option value=\"2\">Perdida de Carga</ion-select-option>\n                <ion-select-option value=\"3\">Presion Hidroestatica</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Banco de Calibracion</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"banco\">\n                <ion-select-option *ngFor=\"let b of bancos\" [value]=\"b._id\">{{b.identificacion}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item>\n              <ion-label>Fecha de Programacion</ion-label>\n              <ion-datetime displayFormat=\"MMM DD, YYYY\" picker-format=\"MMM DD, YYYY\" placeholder=\"Select Date\"\n                formControlName=\"fecha_programacion\"></ion-datetime>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item>\n              <ion-label>Hora de Programacion</ion-label>\n              <ion-datetime displayFormat=\"HH:mm\" picker-format=\"h:mm A\" placeholder=\"Seleccione\"\n                formControlName=\"hora_programacion\">\n              </ion-datetime>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item>\n              <ion-label>Duracion estimada</ion-label>\n              <ion-input type=\"number\" required formControlName=\"duracion\"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n        <div class=\"row\">\n          <ion-toolbar color=\"dark\">\n            <ion-title>Parametros de Calibracion</ion-title>\n          </ion-toolbar>\n          <ion-toolbar>\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <ion-item>\n                    <ion-label>1.Norma de Referencia</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\">\n                      <ion-select-option value=\"f\">{{datos.norma}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ion-item>\n                    <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Diametro Nominal [mm]</label>\n                    <div class=\"col-sm-6 mt-1\">\n                      <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" [value]=\"datos.diametro\"\n                        aria-describedby=\"emailHelp\">\n                    </div>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ion-item>\n                    <ion-label>3.Clase Metrologica de Precision</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\">\n                      <ion-select-option [value]=\"datos.precision\">{{datos.precision}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ion-item>\n                    <ion-label>Caudal permanente [m3/h]</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\">\n                      <ion-select-option [value]=\"datos.q3\">{{datos.q3}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n                <div class=\"col-sm-4\">\n                  <ion-item>\n                    <ion-label>Rango de Medicion Q3/Q1</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\">\n                      <ion-select-option [value]=\"q3q1\">{{q3q1}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>         \n                <div class=\"col-sm-4\">\n                  <ion-item>\n                    <ion-label>7.Q2/Q1</ion-label>\n                    <ion-select placeholder=\"Seleccione Una\">\n                      <ion-select-option [value]=\"q2q1\">{{q2q1}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </div>\n              </div>\n            </div>\n          </ion-toolbar>\n          <ion-toolbar color=\"dark\">\n            <ion-title>Informacion Adicional</ion-title>\n          </ion-toolbar>\n\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6\">Numero de observaciones por medidor en cada prueba</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" formControlName=\"repeticiones\" class=\"form-control\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6\">Coeficiente de expansion termico-volumetrico del material del RVM</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"coef_rvm\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6 \">Coeficiente de expansion termico-volumetrico del agua </label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"coef_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6\">Compresibilidad del agua (kPa-1)</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"compre_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6\">Incertidumbre de Coeficiente de expansion termico-volumetrico del material\n                        RVM</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_rvm\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6\">Incertidumbre de Coeficiente de expansion termico-volumetrico del agua\n                        (C)</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-6\">Incertidumbre de compresibilidad del agua (KPa) Numero de observaciones\n                        por medidor en cada prueba</label>\n                      <div class=\"col-sm-6\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_compre_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"row mb-5\">\n              <div class=\"col-sm-12\">\n                <ion-item button color=\"primary\" text-center (click)=\"save()\" [disabled]=\"!form.valid\">\n                  <ion-label>Guardar</ion-label>\n                </ion-item>\n              </div>\n            </div>\n\n          </div>\n\n\n\n\n\n\n        </div>\n\n      </div>\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/generar/generar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/generar/generar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id=\"noprint\">\n  <div class=\"container\" *ngIf=\"inf\" id=\"noprint\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-card color=\"primary\" text-center>\n          <h3>Haz Completado todas las pruebas pertenecientes a la orden. Puedes cerrar la orden y generar el informe\n          </h3>\n        </ion-card>\n\n        <ion-toolbar>\n          <ion-item button text-center color=\"success\" (click)=\"cerrar()\">\n            <ion-label>Cerrar Orden y Generar Informe</ion-label>\n          </ion-item>\n        </ion-toolbar>\n\n      \n\n      </div>\n    </div>\n  </div>\n \n\n  <div class=\"container\" *ngIf=\"ready\" id=\"noprint\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-12 p-4\" >\n        <div class=\"d-flex flex-row justify-content-between fuente\">\n          <div>\n            <p class=\"m-0 p-0\"> LABORATORIO CALIBRACION DE MEDIDORES </p>\n            <p class=\"m-0 p-0\">EMPRESA DE SERVICIOS DE FLORENCIA S.A E.S.P</p>\n            <p class=\"m-0 p-0\"> SERVAF S.A E.S.P.</p>\n            <p class=\"m-0 p-0\"> NIT: 800.169.470-7 </p>\n          </div>\n          <div class=\"d-flex flex-row pr-5\">\n            <div class=\"d-flex\">\n              <img src=\"/assets/images/servaf.png\" alt=\"\" height=\"30\">\n            </div>\n            <div class=\"d-flex flex-column\">\n              <img src=\"/assets/images/onac.png\" alt=\"\" height=\"30\">\n              <div class=\"text-center\">\n                <p class=\"m-0 p-0\"> Acreditado ISO/IEC 17025:2005</p>\n                <p class=\"m-0 p-0\"> 16-LAC-024</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <table>\n          <tbody class=\"text-center\">\n            <tr>\n              <td t=\"z\" colspan=\"5\" id=\"sjs-A7\"></td>\n              <td colspan=\"7\" t=\"s\" id=\"sjs-F7\" class=\"c a\">CERTIFICADO DE CALIBRACION No</td>\n              <td colspan=\"5\" t=\"z\" id=\"sjs-M7\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A8\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B8\" class=\"c\">DATOS DEL SOLICITANTE</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A9\"></td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-B9\" class=\"c\">NOMBRE SOLICITANTE</td>\n              <td colspan=\"8\" t=\"z\" id=\"sjs-F9\">{{entrada.cliente?.nombre}}</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-N9\" class=\"c\">FECHA DE EMISION</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-P9\">{{orden.fecha | date}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A10\"></td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-B10\" class=\"c\">DIRECCION SOLICITANTE</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-F10\">{{entrada.cliente?.direccion}}</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-I10\" class=\"c\">FECHA DE RECEPCION</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-L10\">{{entrada.fecha | date}}</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-N10\" class=\"c\">FECHA DE CALIBRACION</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-P10\">{{orden.fecha | date}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A11\"></td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-B11\" class=\"c\">NIT, RUT, C.C:</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-F11\">{{entrada.cliente?.numero}}</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-I11\" xml:space=\"preserve\" class=\"c\"> INSTRUMENTO A CALIBRAR</td>\n              <td colspan=\"6\" t=\"z\" id=\"sjs-L11\">Medidor de agua potable fria</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A12\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B12\" class=\"c\">DESCRIPCION DEL INSTRUMENTO A CALIBRAR</td>\n            </tr>\n            <tr>\n              <td></td>\n\n              <td colspan=\"3\" t=\"s\" id=\"sjs-B13\">Serie</td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-E13\">Marca</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-I13\">Modelo</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-L13\">Tipo</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-N13\">Rango M.</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-P13\">Año Fabricación</td>\n            </tr>\n            <tr *ngFor=\"let m of medidores\">\n              <td></td>\n\n              <td colspan=\"3\" t=\"n\" id=\"sjs-B14\">{{m.serie}}</td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-E14\">{{m.marca}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-I14\">{{m.modelo}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-L14\">{{entrada.tipo}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-N14\">{{entrada.rango}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-P14\">{{m.fabricacion}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A15\"></td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-B15\">Q3(m3/h)</td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-E15\">Capacidad Máxima Escala (m3)</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-I15\">Div Min Escala (l)</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-L15\">Diámetro (mm)</td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-N15\">Norma Estándar</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A16\"></td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-B16\">{{entrada.q3 | number:'1.0-2'}}</td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-E16\"></td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-I16\">{{entrada.escala | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-L16\">{{entrada.diametro | number:'1.0-2'}}</td>\n              <td rowspan=\"3\" colspan=\"4\" t=\"z\" id=\"sjs-N16\">{{entrada.norma}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A17\"></td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-B17\">Lectura de Entrada (m3)</td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-E17\">Clase de Temperatura</td>\n              <td colspan=\"5\" t=\"s\" id=\"sjs-I17\">Clase de Sensibilidad de Flujo</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A18\"></td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-B18\">0</td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-E18\">{{entrada.clasetemp}}</td>\n              <td colspan=\"5\" t=\"z\" id=\"sjs-I18\">{{entrada.aguasarriba}} / {{entrada.aguasabajo}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A19\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B19\" class=\"c\">TRAZABILIDAD</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A20\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B20\" xml:space=\"preserve\">Los patrones utilizados en la calibración de los\n                medidores de agua están trazados a patrones nacionales e internacionales de las magnitudes respectivas.\n                Los cuales se relacionan a continuación al Sistema Internacional. </td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A21\"></td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-B21\">Patrón</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-F21\">Código Patrón</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-H21\">Certificado de Calibración</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-K21\">Fecha de calibración</td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-N21\">Fuente de Trazabilidad</td>\n            </tr>\n            <tr *ngFor=\"let c of caudal\">\n              <td t=\"z\" id=\"sjs-A22\"></td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-B22\">{{c.patron}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F22\">{{c.codigo}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-H22\">{{c.certificado}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-K22\">{{c.fecha_calibracion | date}}</td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-N22\">{{c.fuente}}</td>\n            </tr>\n            <tr *ngFor=\"let c of temprvm\">\n              <td t=\"z\" id=\"sjs-A22\"></td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-B22\">{{c.patron}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F22\">{{c.codigo}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-H22\">{{c.certificado}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-K22\">{{c.fecha_calibracion | date}}</td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-N22\">{{c.fuente}}</td>\n            </tr>\n            <tr *ngFor=\"let c of tempagua\">\n              <td t=\"z\" id=\"sjs-A22\"></td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-B22\">{{c.patron}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F22\">{{c.codigo}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-H22\">{{c.certificado}}</td>\n              <td colspan=\"3\" t=\"z\" id=\"sjs-K22\">{{c.fecha_calibracion | date}}</td>\n              <td colspan=\"4\" t=\"z\" id=\"sjs-N22\">{{c.fuente}}</td>\n            </tr>\n\n\n            <tr>\n              <td t=\"z\" id=\"sjs-A34\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B34\" class=\"c\">METODO DE CALIBRACION</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A35\"></td>\n              <td rowspan=\"2\" colspan=\"16\" t=\"s\" id=\"sjs-B35\">El método empleado es la recolección, del volumen indicado\n                en el medidor con el volumen indicado por un recipiente volumétrico tomado como patrón, de conformidad\n                con el numeral 7.4.2.1 de la NTC-ISO 4064-2:2016.</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A36\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A37\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B37\" xml:space=\"preserve\">El error relativo es la diferencia entre el\n                volumen\n                registrado en el medidor y el volumen medido en el recipiente volumétrico patrón de trabajo. </td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A38\"></td>\n              <td rowspan=\"4\" colspan=\"6\" t=\"z\" id=\"sjs-B38\"></td>\n              <td colspan=\"10\" t=\"z\" id=\"sjs-H38\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A39\"></td>\n              <td t=\"s\" id=\"sjs-H39\">Donde:</td>\n              <td colspan=\"9\" t=\"s\" id=\"sjs-I39\">Vi = Volumen registrado en el medidor como la diferencia entre el\n                volumen\n                inicial y final</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A40\"></td>\n              <td t=\"z\" id=\"sjs-H40\"></td>\n              <td colspan=\"9\" t=\"s\" id=\"sjs-I40\" xml:space=\"preserve\">Va = Volumen medido en el recipiente volumétrico\n                patrón </td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A41\"></td>\n              <td t=\"z\" id=\"sjs-H41\"></td>\n              <td t=\"z\" id=\"sjs-I41\"></td>\n              <td t=\"z\" id=\"sjs-J41\"></td>\n              <td t=\"z\" id=\"sjs-K41\"></td>\n              <td t=\"z\" id=\"sjs-L41\"></td>\n              <td t=\"z\" id=\"sjs-M41\"></td>\n              <td t=\"z\" id=\"sjs-N41\"></td>\n              <td t=\"z\" id=\"sjs-O41\"></td>\n              <td t=\"z\" id=\"sjs-P41\"></td>\n              <td t=\"z\" id=\"sjs-Q41\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A42\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B42\" class=\"c\">CONDICIONES DURANTE LA CALIBRACION</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A43\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B43\">El promedio de las condiciones ambientales y la temperatura del agua\n                del\n                laboratorio durante el proceso de calibración fueron las siguientes:</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A44\"></td>\n              <td rowspan=\"2\" t=\"z\" id=\"sjs-B44\"></td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-C44\" class=\"c\">Caudal (l/h)</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-F44\" class=\"c\">Presión de Entrada (bar)</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-I44\" class=\"c\">Presión de Salida (bar)</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-L44\" class=\"c\">Temperatura Línea (°C)</td>\n              <td colspan=\"3\" t=\"s\" id=\"sjs-O44\" class=\"c\">Temperatura RVM (°C)</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A45\"></td>\n              <td t=\"s\" id=\"sjs-C45\" class=\"c\">Mínimo</td>\n              <td t=\"s\" id=\"sjs-D45\" class=\"c\">Máximo</td>\n              <td t=\"s\" id=\"sjs-E45\" class=\"c\">Promedio</td>\n              <td t=\"s\" id=\"sjs-F45\" class=\"c\">Mínimo</td>\n              <td t=\"s\" id=\"sjs-G45\" class=\"c\">Máximo</td>\n              <td t=\"s\" id=\"sjs-H45\" class=\"c\">Promedio</td>\n              <td t=\"s\" id=\"sjs-I45\" class=\"c\">Mínimo</td>\n              <td t=\"s\" id=\"sjs-J45\" class=\"c\">Máximo</td>\n              <td t=\"s\" id=\"sjs-K45\" class=\"c\">Promedio</td>\n              <td t=\"s\" id=\"sjs-L45\" class=\"c\">Mínimo</td>\n              <td t=\"s\" id=\"sjs-M45\" class=\"c\">Máximo</td>\n              <td t=\"s\" id=\"sjs-N45\" class=\"c\">Promedio</td>\n              <td t=\"s\" id=\"sjs-O45\" class=\"c\">Mínimo</td>\n              <td t=\"s\" id=\"sjs-P45\" class=\"c\">Máximo</td>\n              <td t=\"s\" id=\"sjs-Q45\" class=\"c\">Promedio</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A46\"></td>\n              <td t=\"z\" id=\"sjs-B46\"></td>\n              <td t=\"z\" id=\"sjs-C46\"></td>\n              <td t=\"z\" id=\"sjs-D46\"></td>\n              <td t=\"z\" id=\"sjs-E46\"></td>\n              <td t=\"z\" id=\"sjs-F46\"></td>\n              <td t=\"z\" id=\"sjs-G46\"></td>\n              <td t=\"z\" id=\"sjs-H46\"></td>\n              <td t=\"z\" id=\"sjs-I46\"></td>\n              <td t=\"z\" id=\"sjs-J46\"></td>\n              <td t=\"z\" id=\"sjs-K46\"></td>\n              <td t=\"z\" id=\"sjs-L46\"></td>\n              <td t=\"z\" id=\"sjs-M46\"></td>\n              <td t=\"z\" id=\"sjs-N46\"></td>\n              <td t=\"z\" id=\"sjs-O46\"></td>\n              <td t=\"z\" id=\"sjs-P46\"></td>\n              <td t=\"z\" id=\"sjs-Q46\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A50\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-B50\"></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-D50\">Humedad Relativa %</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-F50\" xml:space=\"preserve\">Temperatura Ambiente °C </td>\n              <td rowspan=\"4\" colspan=\"10\" t=\"s\" id=\"sjs-H50\">Este certificado expresa el resultado de las mediciones\n                realizadas. No podrá ser reproducido total o parcialmente excepto cuando se hayan obtenido previamente\n                permiso por escrito del laboratorio que lo emite.\n                <br>Los resultados contenidos en el siguiente certificado se refieren al momento y condiciones en que se\n                realizaron las mediciones. El laboratorio que lo emite no se responsabiliza de los perjuicios que puedan\n                derivarse del uso inadecuado de los instrumentos calibrados.\n                <br>El laboratorio no se responsabiliza de la información suministrada por el cliente (Dirección y Nit).\n                <br>El medidor bajo calibración no fue objeto de muestreo por parte de este Laboratorio, el ítem fue\n                calibrado tal como se recibió.</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A51\"></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-B51\">Mínima</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-D51\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F51\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A52\"></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-B52\">Máxima</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-D52\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F52\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A53\"></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-B53\">Promedio</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-D53\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F53\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A54\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B54\" class=\"c\">INCERTIDUMBRE DE LA MEDICION</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A55\"></td>\n              <td rowspan=\"2\" colspan=\"16\" t=\"s\" id=\"sjs-B55\">La incertidumbre reportada es la estándar compuesta\n                multiplicada por el factor de cubrimiento K= 2, con el cual se logro, una distribución normal, un nivel\n                de confianza de 95.45%.</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A56\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A57\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B57\" class=\"c\">RESULTADOS DE LA CALIBRACION<span\n                  style=\"font-size:11pt;\"><b><sup>3</sup></b></span></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A58\"></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-B58\">Prueba</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-D58\" xml:space=\"preserve\"> Caudal de Prueba (l/h) Promedio </td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-F58\">Volumen Medidor (l) Promedio, Vi</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-H58\">Volumen Real (l) Promedio, Va</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-J58\">Error (%) Promedio</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-L58\">Incertidumbre Expandida (%)</td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-N58\">EMP <span style=\"font-size:11pt;\"><sup>2</sup></span></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-P58\" xml:space=\"preserve\">Factor de Cubrimiento K </td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A59\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-B59\">Q1</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-D59\">{{resultados.caudalQ1 | number:'1.0-2' }}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F59\">{{resultados.volumenProQ1 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-H59\">{{resultados.volumenRealQ1 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-J59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-L59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-N59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-P59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A59\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-B59\">Q2</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-D59\">{{resultados.caudalQ2 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F59\">{{resultados.volumenProQ2 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-H59\">{{resultados.volumenRealQ2 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-J59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-L59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-N59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-P59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A59\"></td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-B59\">Q3</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-D59\">{{resultados.caudalQ3 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-F59\">{{resultados.volumenProQ3 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-H59\">{{resultados.volumenRealQ3 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-J59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-L59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-N59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n              <td colspan=\"2\" t=\"z\" id=\"sjs-P59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A62\"></td>\n              <td rowspan=\"3\" colspan=\"16\" t=\"s\" id=\"sjs-B62\"><span style=\"font-size:11pt;\"><sup>1</sup></span><span\n                  style=\"font-size:11pt;\"> Q1 o Qmin caudal mínimo, Q2 o Qt caudal transición, Q3 o Qp caudal\n                  permanente; estas definiciones corresponden a los numerales a los numerales 3.3.2, 3.3.3, 3,3.4 y\n                  3.3.5 de la NTC-ISO 4064-1:2016.<br></span><span style=\"font-size:11pt;\"><sup>2</sup></span><span\n                  style=\"font-size:11pt;\"> El Error Máximo Permisible corresponde al establecido por el cliente en el\n                  acuerdo de servicio.<br></span><span style=\"font-size:11pt;\"><sup>3</sup></span><span\n                  style=\"font-size:11pt;\"> Los datos reportados en la sección de RESULTADOS DE CALIBRACION son el\n                  resultado de tres repeticiones por caudal</span></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A63\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A64\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A66\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B66\" class=\"c\">FIRMAS AUTORIZADAS</td>\n            </tr>\n            <tr>\n              <td t=\"z\" colspan=\"5\" id=\"sjs-A68\"></td>\n              <td t=\"z\" id=\"sjs-F67\"></td>\n              <td t=\"z\" id=\"sjs-G67\"></td>\n              <td t=\"z\" id=\"sjs-H67\"></td>\n              <td t=\"z\" id=\"sjs-I67\"></td>\n              <td t=\"z\" id=\"sjs-J67\"></td>\n              <td t=\"z\" id=\"sjs-K67\"></td>\n              <td t=\"z\" id=\"sjs-L67\"></td>\n              <td t=\"z\" id=\"sjs-M67\"></td>\n              <td t=\"z\" id=\"sjs-N67\"></td>\n              <td t=\"z\" id=\"sjs-O67\"></td>\n              <td t=\"z\" id=\"sjs-P67\"></td>\n              <td t=\"z\" id=\"sjs-Q67\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" colspan=\"5\" id=\"sjs-A68\"></td>\n\n              <td colspan=\"2\" t=\"s\" id=\"sjs-F68\">Calibró</td>\n              <td t=\"z\" id=\"sjs-H68\"></td>\n              <td t=\"z\" id=\"sjs-I68\"></td>\n              <td t=\"z\" id=\"sjs-J68\"></td>\n              <td t=\"z\" id=\"sjs-K68\"></td>\n              <td colspan=\"2\" t=\"s\" id=\"sjs-L68\">Revisó y Aprobó</td>\n              <td t=\"z\" id=\"sjs-N68\"></td>\n              <td t=\"z\" id=\"sjs-O68\"></td>\n              <td t=\"z\" id=\"sjs-P68\"></td>\n              <td t=\"z\" id=\"sjs-Q68\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A69\"></td>\n              <td t=\"z\" id=\"sjs-B69\"></td>\n              <td t=\"z\" id=\"sjs-C69\"></td>\n              <td t=\"z\" id=\"sjs-D69\"></td>\n              <td t=\"z\" id=\"sjs-E69\"></td>\n              <td rowspan=\"3\" colspan=\"2\" t=\"z\" id=\"sjs-F69\"></td>\n              <td t=\"z\" id=\"sjs-H69\"></td>\n              <td t=\"z\" id=\"sjs-I69\"></td>\n              <td t=\"z\" id=\"sjs-J69\"></td>\n              <td t=\"z\" id=\"sjs-K69\"></td>\n              <td rowspan=\"3\" colspan=\"2\" t=\"z\" id=\"sjs-L69\"></td>\n              <td t=\"z\" id=\"sjs-N69\"></td>\n              <td t=\"z\" id=\"sjs-O69\"></td>\n              <td t=\"z\" id=\"sjs-P69\"></td>\n              <td t=\"z\" id=\"sjs-Q69\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A70\"></td>\n              <td t=\"z\" id=\"sjs-B70\"></td>\n              <td t=\"z\" id=\"sjs-C70\"></td>\n              <td t=\"z\" id=\"sjs-D70\"></td>\n              <td t=\"z\" id=\"sjs-E70\"></td>\n              <td t=\"z\" id=\"sjs-H70\"></td>\n              <td t=\"z\" id=\"sjs-I70\"></td>\n              <td t=\"z\" id=\"sjs-J70\"></td>\n              <td t=\"z\" id=\"sjs-K70\"></td>\n              <td t=\"z\" id=\"sjs-N70\"></td>\n              <td t=\"z\" id=\"sjs-O70\"></td>\n              <td t=\"z\" id=\"sjs-P70\"></td>\n              <td t=\"z\" id=\"sjs-Q70\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A71\"></td>\n              <td t=\"z\" id=\"sjs-B71\"></td>\n              <td t=\"z\" id=\"sjs-C71\"></td>\n              <td t=\"z\" id=\"sjs-D71\"></td>\n              <td t=\"z\" id=\"sjs-E71\"></td>\n              <td t=\"z\" id=\"sjs-H71\"></td>\n              <td t=\"z\" id=\"sjs-I71\"></td>\n              <td t=\"z\" id=\"sjs-J71\"></td>\n              <td t=\"z\" id=\"sjs-K71\"></td>\n              <td t=\"z\" id=\"sjs-N71\"></td>\n              <td t=\"z\" id=\"sjs-O71\"></td>\n              <td t=\"z\" id=\"sjs-P71\"></td>\n              <td t=\"z\" id=\"sjs-Q71\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A72\"></td>\n              <td t=\"z\" id=\"sjs-B72\"></td>\n              <td t=\"z\" id=\"sjs-C72\"></td>\n              <td t=\"z\" id=\"sjs-D72\"></td>\n              <td rowspan=\"2\" colspan=\"4\" t=\"s\" id=\"sjs-E72\">Metrólogo Laboratorio Metrólogo</td>\n              <td t=\"z\" id=\"sjs-I72\"></td>\n              <td t=\"z\" id=\"sjs-J72\"></td>\n              <td rowspan=\"2\" colspan=\"5\" t=\"s\" id=\"sjs-K72\">Administrador Laboratorio Coordinador Laboratorio de\n                Medidores</td>\n              <td t=\"z\" id=\"sjs-P72\"></td>\n              <td t=\"z\" id=\"sjs-Q72\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A73\"></td>\n              <td t=\"z\" id=\"sjs-B73\"></td>\n              <td t=\"z\" id=\"sjs-C73\"></td>\n              <td t=\"z\" id=\"sjs-D73\"></td>\n              <td t=\"z\" id=\"sjs-I73\"></td>\n              <td t=\"z\" id=\"sjs-J73\"></td>\n              <td t=\"z\" id=\"sjs-P73\"></td>\n              <td t=\"z\" id=\"sjs-Q73\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A74\"></td>\n              <td t=\"z\" id=\"sjs-B74\"></td>\n              <td t=\"z\" id=\"sjs-C74\"></td>\n              <td t=\"z\" id=\"sjs-D74\"></td>\n              <td t=\"z\" id=\"sjs-E74\"></td>\n              <td t=\"z\" id=\"sjs-F74\"></td>\n              <td t=\"z\" id=\"sjs-G74\"></td>\n              <td t=\"z\" id=\"sjs-H74\"></td>\n              <td t=\"z\" id=\"sjs-I74\"></td>\n              <td t=\"z\" id=\"sjs-J74\"></td>\n              <td t=\"z\" id=\"sjs-K74\"></td>\n              <td t=\"z\" id=\"sjs-L74\"></td>\n              <td t=\"z\" id=\"sjs-M74\"></td>\n              <td t=\"z\" id=\"sjs-N74\"></td>\n              <td t=\"z\" id=\"sjs-O74\"></td>\n              <td t=\"z\" id=\"sjs-P74\"></td>\n              <td t=\"z\" id=\"sjs-Q74\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A75\"></td>\n              <td t=\"z\" id=\"sjs-B75\"></td>\n              <td t=\"z\" id=\"sjs-C75\"></td>\n              <td t=\"z\" id=\"sjs-D75\"></td>\n              <td t=\"z\" id=\"sjs-E75\"></td>\n              <td t=\"z\" id=\"sjs-F75\"></td>\n              <td t=\"z\" id=\"sjs-G75\"></td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-H75\" xml:space=\"preserve\"> - FIN DEL CERTIFICADO -</td>\n              <td t=\"z\" id=\"sjs-L75\"></td>\n              <td t=\"z\" id=\"sjs-M75\"></td>\n              <td t=\"z\" id=\"sjs-N75\"></td>\n              <td t=\"z\" id=\"sjs-O75\"></td>\n              <td t=\"z\" id=\"sjs-P75\"></td>\n              <td t=\"z\" id=\"sjs-Q75\"></td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A76\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B76\">SERVAF S.A E.S.P</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A77\"></td>\n              <td colspan=\"16\" t=\"s\" id=\"sjs-B77\">Carrera 9 Calle 27 Esquina Estación Torasso</td>\n            </tr>\n            <tr>\n              <td t=\"z\" id=\"sjs-A78\"></td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-B78\">Página 1 de 1</td>\n              <td colspan=\"8\" t=\"s\" id=\"sjs-F78\">Teléfono 435-1268 Ext: 206</td>\n              <td colspan=\"4\" t=\"s\" id=\"sjs-N78\">LCM-FOR-014 - Versión 7</td>\n            </tr>\n          </tbody>\n        </table>\n\n\n      </div>\n\n    </div>\n  </div>\n\n  <ion-toolbar>\n    <!-- <button [useExistingCss]=\"true\" printSectionId=\"print\" ngxPrint>print</button> -->\n    <ion-button (click)=\"print()\" expand=\"block\" shape=\"round\" color=\"primary\" *ngIf=\"ready\">\n      Imprimir\n    </ion-button>\n\n  </ion-toolbar>\n</ion-content>\n\n<div class=\"container\" *ngIf=\"ready\" id=\"print\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-12 p-4\" >\n      <div class=\"d-flex flex-row justify-content-between fuente\">\n        <div>\n          <p class=\"m-0 p-0\"> LABORATORIO CALIBRACION DE MEDIDORES </p>\n          <p class=\"m-0 p-0\">EMPRESA DE SERVICIOS DE FLORENCIA S.A E.S.P</p>\n          <p class=\"m-0 p-0\"> SERVAF S.A E.S.P.</p>\n          <p class=\"m-0 p-0\"> NIT: 800.169.470-7 </p>\n        </div>\n        <div class=\"d-flex flex-row pr-5\">\n          <div class=\"d-flex\">\n            <img src=\"/assets/images/servaf.png\" alt=\"\" height=\"30\">\n          </div>\n          <div class=\"d-flex flex-column\">\n            <img src=\"/assets/images/onac.png\" alt=\"\" height=\"30\">\n            <div class=\"text-center\">\n              <p class=\"m-0 p-0\"> Acreditado ISO/IEC 17025:2005</p>\n              <p class=\"m-0 p-0\"> 16-LAC-024</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <table>\n        <tbody class=\"text-center\">\n          <tr>\n            <td t=\"z\" colspan=\"5\" id=\"sjs-A7\"></td>\n            <td colspan=\"7\" t=\"s\" id=\"sjs-F7\" class=\"c a\">CERTIFICADO DE CALIBRACION No</td>\n            <td colspan=\"5\" t=\"z\" id=\"sjs-M7\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A8\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B8\" class=\"c\">DATOS DEL SOLICITANTE</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A9\"></td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-B9\" class=\"c\">NOMBRE SOLICITANTE</td>\n            <td colspan=\"8\" t=\"z\" id=\"sjs-F9\">{{entrada.cliente?.nombre}}</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-N9\" class=\"c\">FECHA DE EMISION</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-P9\">{{orden.fecha | date}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A10\"></td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-B10\" class=\"c\">DIRECCION SOLICITANTE</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-F10\">{{entrada.cliente?.direccion}}</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-I10\" class=\"c\">FECHA DE RECEPCION</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-L10\">{{entrada.fecha | date}}</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-N10\" class=\"c\">FECHA DE CALIBRACION</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-P10\">{{orden.fecha | date}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A11\"></td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-B11\" class=\"c\">NIT, RUT, C.C:</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-F11\">{{entrada.cliente?.numero}}</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-I11\" xml:space=\"preserve\" class=\"c\"> INSTRUMENTO A CALIBRAR</td>\n            <td colspan=\"6\" t=\"z\" id=\"sjs-L11\">Medidor de agua potable fria</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A12\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B12\" class=\"c\">DESCRIPCION DEL INSTRUMENTO A CALIBRAR</td>\n          </tr>\n          <tr>\n            <td></td>\n\n            <td colspan=\"3\" t=\"s\" id=\"sjs-B13\">Serie</td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-E13\">Marca</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-I13\">Modelo</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-L13\">Tipo</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-N13\">Rango M.</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-P13\">Año Fabricación</td>\n          </tr>\n          <tr *ngFor=\"let m of medidores\">\n            <td></td>\n\n            <td colspan=\"3\" t=\"n\" id=\"sjs-B14\">{{m.serie}}</td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-E14\">{{m.marca}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-I14\">{{m.modelo}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-L14\">{{entrada.tipo}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-N14\">{{entrada.rango}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-P14\">{{m.fabricacion}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A15\"></td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-B15\">Q3(m3/h)</td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-E15\">Capacidad Máxima Escala (m3)</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-I15\">Div Min Escala (l)</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-L15\">Diámetro (mm)</td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-N15\">Norma Estándar</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A16\"></td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-B16\">{{entrada.q3 | number:'1.0-2'}}</td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-E16\"></td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-I16\">{{entrada.escala | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-L16\">{{entrada.diametro | number:'1.0-2'}}</td>\n            <td rowspan=\"3\" colspan=\"4\" t=\"z\" id=\"sjs-N16\">{{entrada.norma}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A17\"></td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-B17\">Lectura de Entrada (m3)</td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-E17\">Clase de Temperatura</td>\n            <td colspan=\"5\" t=\"s\" id=\"sjs-I17\">Clase de Sensibilidad de Flujo</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A18\"></td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-B18\">0</td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-E18\">{{entrada.clasetemp}}</td>\n            <td colspan=\"5\" t=\"z\" id=\"sjs-I18\">{{entrada.aguasarriba}} / {{entrada.aguasabajo}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A19\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B19\" class=\"c\">TRAZABILIDAD</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A20\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B20\" xml:space=\"preserve\">Los patrones utilizados en la calibración de los\n              medidores de agua están trazados a patrones nacionales e internacionales de las magnitudes respectivas.\n              Los cuales se relacionan a continuación al Sistema Internacional. </td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A21\"></td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-B21\" class=\"p-0\">Patrón</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-F21\" class=\"p-0\" >Código Patrón</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-H21\" class=\"p-0\">Certificado de Calibración</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-K21\" class=\"p-0\">Fecha de calibración</td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-N21\"class=\"p-0\">Fuente de Trazabilidad</td>\n          </tr>\n          <tr *ngFor=\"let c of caudal\">\n            <td t=\"z\" id=\"sjs-A22\"></td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-B22\" class=\"p-0\" >{{c.patron}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F22\" class=\"p-0\">{{c.codigo}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-H22\" class=\"p-0\">{{c.certificado}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-K22\" class=\"p-0\">{{c.fecha_calibracion | date}}</td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-N22\" class=\"p-0\">{{c.fuente}}</td>\n          </tr>\n          <tr *ngFor=\"let c of temprvm\">\n            <td t=\"z\" id=\"sjs-A22\"></td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-B22\" class=\"p-0\">{{c.patron}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F22\" class=\"p-0\" >{{c.codigo}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-H22\" class=\"p-0\">{{c.certificado}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-K22\" class=\"p-0\">{{c.fecha_calibracion | date}}</td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-N22\" class=\"p-0\">{{c.fuente}}</td>\n          </tr>\n          <tr *ngFor=\"let c of tempagua\">\n            <td t=\"z\" id=\"sjs-A22\"></td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-B22\" class=\"p-0\">{{c.patron}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F22\" class=\"p-0\">{{c.codigo}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-H22\" class=\"p-0\">{{c.certificado}}</td>\n            <td colspan=\"3\" t=\"z\" id=\"sjs-K22\" class=\"p-0\">{{c.fecha_calibracion | date}}</td>\n            <td colspan=\"4\" t=\"z\" id=\"sjs-N22\" class=\"p-0\">{{c.fuente}}</td>\n          </tr>\n\n\n          <tr>\n            <td t=\"z\" id=\"sjs-A34\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B34\" class=\"c\">METODO DE CALIBRACION</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A35\"></td>\n            <td rowspan=\"2\" colspan=\"16\" t=\"s\" id=\"sjs-B35\">El método empleado es la recolección, del volumen indicado\n              en el medidor con el volumen indicado por un recipiente volumétrico tomado como patrón, de conformidad\n              con el numeral 7.4.2.1 de la NTC-ISO 4064-2:2016.</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A36\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A37\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B37\" xml:space=\"preserve\">El error relativo es la diferencia entre el\n              volumen\n              registrado en el medidor y el volumen medido en el recipiente volumétrico patrón de trabajo. </td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A38\"></td>\n            <td rowspan=\"4\" colspan=\"6\" t=\"z\" id=\"sjs-B38\"></td>\n            <td colspan=\"10\" t=\"z\" id=\"sjs-H38\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A39\"></td>\n            <td t=\"s\" id=\"sjs-H39\">Donde:</td>\n            <td colspan=\"9\" t=\"s\" id=\"sjs-I39\">Vi = Volumen registrado en el medidor como la diferencia entre el\n              volumen\n              inicial y final</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A40\"></td>\n            <td t=\"z\" id=\"sjs-H40\"></td>\n            <td colspan=\"9\" t=\"s\" id=\"sjs-I40\" xml:space=\"preserve\">Va = Volumen medido en el recipiente volumétrico\n              patrón </td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A41\"></td>\n            <td t=\"z\" id=\"sjs-H41\"></td>\n            <td t=\"z\" id=\"sjs-I41\"></td>\n            <td t=\"z\" id=\"sjs-J41\"></td>\n            <td t=\"z\" id=\"sjs-K41\"></td>\n            <td t=\"z\" id=\"sjs-L41\"></td>\n            <td t=\"z\" id=\"sjs-M41\"></td>\n            <td t=\"z\" id=\"sjs-N41\"></td>\n            <td t=\"z\" id=\"sjs-O41\"></td>\n            <td t=\"z\" id=\"sjs-P41\"></td>\n            <td t=\"z\" id=\"sjs-Q41\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A42\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B42\" class=\"c\">CONDICIONES DURANTE LA CALIBRACION</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A43\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B43\">El promedio de las condiciones ambientales y la temperatura del agua\n              del\n              laboratorio durante el proceso de calibración fueron las siguientes:</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A44\"></td>\n            <td rowspan=\"2\" t=\"z\" id=\"sjs-B44\"></td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-C44\" class=\"c\">Caudal (l/h)</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-F44\" class=\"c\">Presión de Entrada (bar)</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-I44\" class=\"c\">Presión de Salida (bar)</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-L44\" class=\"c\">Temperatura Línea (°C)</td>\n            <td colspan=\"3\" t=\"s\" id=\"sjs-O44\" class=\"c\">Temperatura RVM (°C)</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A45\"></td>\n            <td t=\"s\" id=\"sjs-C45\" class=\"c\">Mínimo</td>\n            <td t=\"s\" id=\"sjs-D45\" class=\"c\">Máximo</td>\n            <td t=\"s\" id=\"sjs-E45\" class=\"c\">Promedio</td>\n            <td t=\"s\" id=\"sjs-F45\" class=\"c\">Mínimo</td>\n            <td t=\"s\" id=\"sjs-G45\" class=\"c\">Máximo</td>\n            <td t=\"s\" id=\"sjs-H45\" class=\"c\">Promedio</td>\n            <td t=\"s\" id=\"sjs-I45\" class=\"c\">Mínimo</td>\n            <td t=\"s\" id=\"sjs-J45\" class=\"c\">Máximo</td>\n            <td t=\"s\" id=\"sjs-K45\" class=\"c\">Promedio</td>\n            <td t=\"s\" id=\"sjs-L45\" class=\"c\">Mínimo</td>\n            <td t=\"s\" id=\"sjs-M45\" class=\"c\">Máximo</td>\n            <td t=\"s\" id=\"sjs-N45\" class=\"c\">Promedio</td>\n            <td t=\"s\" id=\"sjs-O45\" class=\"c\">Mínimo</td>\n            <td t=\"s\" id=\"sjs-P45\" class=\"c\">Máximo</td>\n            <td t=\"s\" id=\"sjs-Q45\" class=\"c\">Promedio</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A46\"></td>\n            <td t=\"z\" id=\"sjs-B46\"></td>\n            <td t=\"z\" id=\"sjs-C46\"></td>\n            <td t=\"z\" id=\"sjs-D46\"></td>\n            <td t=\"z\" id=\"sjs-E46\"></td>\n            <td t=\"z\" id=\"sjs-F46\"></td>\n            <td t=\"z\" id=\"sjs-G46\"></td>\n            <td t=\"z\" id=\"sjs-H46\"></td>\n            <td t=\"z\" id=\"sjs-I46\"></td>\n            <td t=\"z\" id=\"sjs-J46\"></td>\n            <td t=\"z\" id=\"sjs-K46\"></td>\n            <td t=\"z\" id=\"sjs-L46\"></td>\n            <td t=\"z\" id=\"sjs-M46\"></td>\n            <td t=\"z\" id=\"sjs-N46\"></td>\n            <td t=\"z\" id=\"sjs-O46\"></td>\n            <td t=\"z\" id=\"sjs-P46\"></td>\n            <td t=\"z\" id=\"sjs-Q46\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A50\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-B50\"></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-D50\">Humedad Relativa %</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-F50\" xml:space=\"preserve\">Temperatura Ambiente °C </td>\n            <td rowspan=\"4\" colspan=\"10\" t=\"s\" id=\"sjs-H50\">Este certificado expresa el resultado de las mediciones\n              realizadas. No podrá ser reproducido total o parcialmente excepto cuando se hayan obtenido previamente\n              permiso por escrito del laboratorio que lo emite.\n              <br>Los resultados contenidos en el siguiente certificado se refieren al momento y condiciones en que se\n              realizaron las mediciones. El laboratorio que lo emite no se responsabiliza de los perjuicios que puedan\n              derivarse del uso inadecuado de los instrumentos calibrados.\n              <br>El laboratorio no se responsabiliza de la información suministrada por el cliente (Dirección y Nit).\n              <br>El medidor bajo calibración no fue objeto de muestreo por parte de este Laboratorio, el ítem fue\n              calibrado tal como se recibió.</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A51\"></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-B51\">Mínima</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-D51\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F51\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A52\"></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-B52\">Máxima</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-D52\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F52\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A53\"></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-B53\">Promedio</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-D53\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F53\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A54\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B54\" class=\"c\">INCERTIDUMBRE DE LA MEDICION</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A55\"></td>\n            <td rowspan=\"2\" colspan=\"16\" t=\"s\" id=\"sjs-B55\">La incertidumbre reportada es la estándar compuesta\n              multiplicada por el factor de cubrimiento K= 2, con el cual se logro, una distribución normal, un nivel\n              de confianza de 95.45%.</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A56\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A57\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B57\" class=\"c\">RESULTADOS DE LA CALIBRACION<span\n                style=\"font-size:11pt;\"><b><sup>3</sup></b></span></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A58\"></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-B58\">Prueba</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-D58\" xml:space=\"preserve\"> Caudal de Prueba (l/h) Promedio </td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-F58\">Volumen Medidor (l) Promedio, Vi</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-H58\">Volumen Real (l) Promedio, Va</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-J58\">Error (%) Promedio</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-L58\">Incertidumbre Expandida (%)</td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-N58\">EMP <span style=\"font-size:11pt;\"><sup>2</sup></span></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-P58\" xml:space=\"preserve\">Factor de Cubrimiento K </td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A59\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-B59\">Q1</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-D59\">{{resultados.caudalQ1 | number:'1.0-2' }}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F59\">{{resultados.volumenProQ1 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-H59\">{{resultados.volumenRealQ1 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-J59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-L59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-N59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-P59\">{{resultados.errorQ1 | number:'1.0-2'}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A59\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-B59\">Q2</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-D59\">{{resultados.caudalQ2 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F59\">{{resultados.volumenProQ2 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-H59\">{{resultados.volumenRealQ2 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-J59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-L59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-N59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-P59\">{{resultados.errorQ2 | number:'1.0-2'}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A59\"></td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-B59\">Q3</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-D59\">{{resultados.caudalQ3 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-F59\">{{resultados.volumenProQ3 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-H59\">{{resultados.volumenRealQ3 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-J59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-L59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-N59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n            <td colspan=\"2\" t=\"z\" id=\"sjs-P59\">{{resultados.errorQ3 | number:'1.0-2'}}</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A62\"></td>\n            <td rowspan=\"3\" colspan=\"16\" t=\"s\" id=\"sjs-B62\"><span style=\"font-size:11pt;\"><sup>1</sup></span><span\n                style=\"font-size:11pt;\"> Q1 o Qmin caudal mínimo, Q2 o Qt caudal transición, Q3 o Qp caudal\n                permanente; estas definiciones corresponden a los numerales a los numerales 3.3.2, 3.3.3, 3,3.4 y\n                3.3.5 de la NTC-ISO 4064-1:2016.<br></span><span style=\"font-size:11pt;\"><sup>2</sup></span><span\n                style=\"font-size:11pt;\"> El Error Máximo Permisible corresponde al establecido por el cliente en el\n                acuerdo de servicio.<br></span><span style=\"font-size:11pt;\"><sup>3</sup></span><span\n                style=\"font-size:11pt;\"> Los datos reportados en la sección de RESULTADOS DE CALIBRACION son el\n                resultado de tres repeticiones por caudal</span></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A63\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A64\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A66\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B66\" class=\"c\">FIRMAS AUTORIZADAS</td>\n          </tr>\n          <tr>\n            <td t=\"z\" colspan=\"5\" id=\"sjs-A68\"></td>\n            <td t=\"z\" id=\"sjs-F67\"></td>\n            <td t=\"z\" id=\"sjs-G67\"></td>\n            <td t=\"z\" id=\"sjs-H67\"></td>\n            <td t=\"z\" id=\"sjs-I67\"></td>\n            <td t=\"z\" id=\"sjs-J67\"></td>\n            <td t=\"z\" id=\"sjs-K67\"></td>\n            <td t=\"z\" id=\"sjs-L67\"></td>\n            <td t=\"z\" id=\"sjs-M67\"></td>\n            <td t=\"z\" id=\"sjs-N67\"></td>\n            <td t=\"z\" id=\"sjs-O67\"></td>\n            <td t=\"z\" id=\"sjs-P67\"></td>\n            <td t=\"z\" id=\"sjs-Q67\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" colspan=\"5\" id=\"sjs-A68\"></td>\n\n            <td colspan=\"2\" t=\"s\" id=\"sjs-F68\">Calibró</td>\n            <td t=\"z\" id=\"sjs-H68\"></td>\n            <td t=\"z\" id=\"sjs-I68\"></td>\n            <td t=\"z\" id=\"sjs-J68\"></td>\n            <td t=\"z\" id=\"sjs-K68\"></td>\n            <td colspan=\"2\" t=\"s\" id=\"sjs-L68\">Revisó y Aprobó</td>\n            <td t=\"z\" id=\"sjs-N68\"></td>\n            <td t=\"z\" id=\"sjs-O68\"></td>\n            <td t=\"z\" id=\"sjs-P68\"></td>\n            <td t=\"z\" id=\"sjs-Q68\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A69\"></td>\n            <td t=\"z\" id=\"sjs-B69\"></td>\n            <td t=\"z\" id=\"sjs-C69\"></td>\n            <td t=\"z\" id=\"sjs-D69\"></td>\n            <td t=\"z\" id=\"sjs-E69\"></td>\n            <td rowspan=\"3\" colspan=\"2\" t=\"z\" id=\"sjs-F69\"></td>\n            <td t=\"z\" id=\"sjs-H69\"></td>\n            <td t=\"z\" id=\"sjs-I69\"></td>\n            <td t=\"z\" id=\"sjs-J69\"></td>\n            <td t=\"z\" id=\"sjs-K69\"></td>\n            <td rowspan=\"3\" colspan=\"2\" t=\"z\" id=\"sjs-L69\"></td>\n            <td t=\"z\" id=\"sjs-N69\"></td>\n            <td t=\"z\" id=\"sjs-O69\"></td>\n            <td t=\"z\" id=\"sjs-P69\"></td>\n            <td t=\"z\" id=\"sjs-Q69\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A70\"></td>\n            <td t=\"z\" id=\"sjs-B70\"></td>\n            <td t=\"z\" id=\"sjs-C70\"></td>\n            <td t=\"z\" id=\"sjs-D70\"></td>\n            <td t=\"z\" id=\"sjs-E70\"></td>\n            <td t=\"z\" id=\"sjs-H70\"></td>\n            <td t=\"z\" id=\"sjs-I70\"></td>\n            <td t=\"z\" id=\"sjs-J70\"></td>\n            <td t=\"z\" id=\"sjs-K70\"></td>\n            <td t=\"z\" id=\"sjs-N70\"></td>\n            <td t=\"z\" id=\"sjs-O70\"></td>\n            <td t=\"z\" id=\"sjs-P70\"></td>\n            <td t=\"z\" id=\"sjs-Q70\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A71\"></td>\n            <td t=\"z\" id=\"sjs-B71\"></td>\n            <td t=\"z\" id=\"sjs-C71\"></td>\n            <td t=\"z\" id=\"sjs-D71\"></td>\n            <td t=\"z\" id=\"sjs-E71\"></td>\n            <td t=\"z\" id=\"sjs-H71\"></td>\n            <td t=\"z\" id=\"sjs-I71\"></td>\n            <td t=\"z\" id=\"sjs-J71\"></td>\n            <td t=\"z\" id=\"sjs-K71\"></td>\n            <td t=\"z\" id=\"sjs-N71\"></td>\n            <td t=\"z\" id=\"sjs-O71\"></td>\n            <td t=\"z\" id=\"sjs-P71\"></td>\n            <td t=\"z\" id=\"sjs-Q71\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A72\"></td>\n            <td t=\"z\" id=\"sjs-B72\"></td>\n            <td t=\"z\" id=\"sjs-C72\"></td>\n            <td t=\"z\" id=\"sjs-D72\"></td>\n            <td rowspan=\"2\" colspan=\"4\" t=\"s\" id=\"sjs-E72\">Metrólogo Laboratorio Metrólogo</td>\n            <td t=\"z\" id=\"sjs-I72\"></td>\n            <td t=\"z\" id=\"sjs-J72\"></td>\n            <td rowspan=\"2\" colspan=\"5\" t=\"s\" id=\"sjs-K72\">Administrador Laboratorio Coordinador Laboratorio de\n              Medidores</td>\n            <td t=\"z\" id=\"sjs-P72\"></td>\n            <td t=\"z\" id=\"sjs-Q72\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A73\"></td>\n            <td t=\"z\" id=\"sjs-B73\"></td>\n            <td t=\"z\" id=\"sjs-C73\"></td>\n            <td t=\"z\" id=\"sjs-D73\"></td>\n            <td t=\"z\" id=\"sjs-I73\"></td>\n            <td t=\"z\" id=\"sjs-J73\"></td>\n            <td t=\"z\" id=\"sjs-P73\"></td>\n            <td t=\"z\" id=\"sjs-Q73\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A74\"></td>\n            <td t=\"z\" id=\"sjs-B74\"></td>\n            <td t=\"z\" id=\"sjs-C74\"></td>\n            <td t=\"z\" id=\"sjs-D74\"></td>\n            <td t=\"z\" id=\"sjs-E74\"></td>\n            <td t=\"z\" id=\"sjs-F74\"></td>\n            <td t=\"z\" id=\"sjs-G74\"></td>\n            <td t=\"z\" id=\"sjs-H74\"></td>\n            <td t=\"z\" id=\"sjs-I74\"></td>\n            <td t=\"z\" id=\"sjs-J74\"></td>\n            <td t=\"z\" id=\"sjs-K74\"></td>\n            <td t=\"z\" id=\"sjs-L74\"></td>\n            <td t=\"z\" id=\"sjs-M74\"></td>\n            <td t=\"z\" id=\"sjs-N74\"></td>\n            <td t=\"z\" id=\"sjs-O74\"></td>\n            <td t=\"z\" id=\"sjs-P74\"></td>\n            <td t=\"z\" id=\"sjs-Q74\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A75\"></td>\n            <td t=\"z\" id=\"sjs-B75\"></td>\n            <td t=\"z\" id=\"sjs-C75\"></td>\n            <td t=\"z\" id=\"sjs-D75\"></td>\n            <td t=\"z\" id=\"sjs-E75\"></td>\n            <td t=\"z\" id=\"sjs-F75\"></td>\n            <td t=\"z\" id=\"sjs-G75\"></td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-H75\" xml:space=\"preserve\"> - FIN DEL CERTIFICADO -</td>\n            <td t=\"z\" id=\"sjs-L75\"></td>\n            <td t=\"z\" id=\"sjs-M75\"></td>\n            <td t=\"z\" id=\"sjs-N75\"></td>\n            <td t=\"z\" id=\"sjs-O75\"></td>\n            <td t=\"z\" id=\"sjs-P75\"></td>\n            <td t=\"z\" id=\"sjs-Q75\"></td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A76\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B76\">SERVAF S.A E.S.P</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A77\"></td>\n            <td colspan=\"16\" t=\"s\" id=\"sjs-B77\">Carrera 9 Calle 27 Esquina Estación Torasso</td>\n          </tr>\n          <tr>\n            <td t=\"z\" id=\"sjs-A78\"></td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-B78\">Página 1 de 1</td>\n            <td colspan=\"8\" t=\"s\" id=\"sjs-F78\">Teléfono 435-1268 Ext: 206</td>\n            <td colspan=\"4\" t=\"s\" id=\"sjs-N78\">LCM-FOR-014 - Versión 7</td>\n          </tr>\n        </tbody>\n      </table>\n\n\n    </div>\n\n  </div>\n</div>  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/informes/informes.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/informes/informes.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>  \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Ordenes de Trabajo Cerradas</ion-title>\n        </ion-toolbar>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <div class=\"container\">\n          <ion-card text-center>\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\"># Orden</th>\n                  <th scope=\"col\">Cliente</th>\n                  <th scope=\"col\">Fecha de Creacion</th>\n                  <th scope=\"col\">Consultar</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ordenes\">\n                  <th scope=\"row\">{{item.orden}}</th>\n                  <td>{{item.entrada.cliente?.nombre}}</td>\n                  <td>{{item.fecha | date}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"success\">\n                      <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>            \n              </tbody>\n            </table>        \n          </ion-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/instrumentos/instrumentos.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/instrumentos/instrumentos.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Informacion General</ion-title>\n    </ion-toolbar>\n    \n      <div class=\"container-fluid\" *ngIf=\"state\">\n        <div class=\"row\">      \n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Consecutivo</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" [value]=\"datos.orden\"  class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>            \n          </div>\n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Tipo de Prueba</label>\n              <div class=\"col-sm-3\">\n                <input type=\"text\" [value]=\"tipo\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>            \n          </div>              \n        </div> \n        <div class=\"row\">\n          <ion-toolbar color=\"dark\">\n            <ion-title>Instrumentos</ion-title>\n          </ion-toolbar>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq1\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title>Caudal Minimo</ion-card-title>\n                </ion-card-header>\n                <ion-item>\n                  <ion-label position=\"fixed\">Q1 litros/hora</ion-label>\n                  <ion-input class=\"text-right\" formControlName=\"caudal\"></ion-input>\n                </ion-item>             \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempagua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"volumenrvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionentrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionsalida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                \n              </ion-card>\n            </form>\n          </div>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq2\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title>Caudal de Transicion</ion-card-title>\n                </ion-card-header>\n                <ion-item>\n                  <ion-label position=\"fixed\">Q2 litros/hora</ion-label>\n                  <ion-input class=\"text-right\" formControlName=\"caudal\"></ion-input>\n                </ion-item>             \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempagua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"volumenrvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionentrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionsalida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                \n              </ion-card>\n            </form>\n          </div>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq3\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title>Caudal Nominal</ion-card-title>\n                </ion-card-header>\n                <ion-item>\n                  <ion-label position=\"fixed\">Q3 litros/hora</ion-label>\n                  <ion-input class=\"text-right\" formControlName=\"caudal\"></ion-input>\n                </ion-item>             \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempagua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"volumenrvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionentrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionsalida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                \n              </ion-card>\n            </form>\n          </div>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq4\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title>Caudal Maximo</ion-card-title>\n                </ion-card-header>\n                <ion-item>\n                  <ion-label position=\"fixed\">Q4 litros/hora</ion-label>\n                  <ion-input class=\"text-right\" formControlName=\"caudal\"></ion-input>\n                </ion-item>             \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempagua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"volumenrvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionentrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tempambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presionsalida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                \n              </ion-card>\n            </form>\n          </div>\n\n         \n        </div>        \n      </div>\n    \n  </div>\n  \n  <div class=\"row mb-5\">\n    <div class=\"col-sm-12\">\n      <ion-item button color=\"primary\" text-center (click)=\"save()\" >\n        <ion-label>Guardar</ion-label>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/pruebas/pruebas.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/pruebas/pruebas.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <form action=\"\" [formGroup]=\"form1\">\n          <ion-card>\n            <ion-item>\n              <ion-label>Seleccione el Tipo de Prueba </ion-label>\n              <ion-select placeholder=\"Seleccionar\" formControlName=\"tipo\" [disabled]=\"rep\">\n                <ion-select-option *ngFor=\"let q of pruebas\" [value]=\"q.tipo\">{{q.tipo}}</ion-select-option>            \n              </ion-select>\n            </ion-item>\n          </ion-card>\n          <ion-toolbar>       \n            <ion-item button text-center color=\"primary\" (click)=\"nav()\" *ngIf=\"!close\">\n              <ion-label>Empezar</ion-label>\n            </ion-item>\n          </ion-toolbar>\n          <ion-toolbar>       \n            <ion-item button text-center color=\"success\" (click)=\"generate()\" *ngIf=\"ready\">\n              <ion-label>Generar Informe</ion-label>\n            </ion-item>\n          </ion-toolbar>\n          <!-- <ion-toolbar>       \n            <ion-item button text-center color=\"success\" (click)=\"cerrar()\" *ngIf=\"close\">\n              <ion-label>Cerrar Orden</ion-label>\n            </ion-item>\n          </ion-toolbar> -->\n        </form>\n        <!-- <div class=\"container-fluid\">\n          <form action=\"\" [formGroup]=\"form\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <ion-item>\n                  <ion-label>Repeticion No {{repeticion}} </ion-label>              \n                </ion-item>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Caudal</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"caudal\">\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Humedad. Relativa</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"humedad\">\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Presion Entrada</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"pentrada\">\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Presion Salida</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"psalida\">\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Temp. Ambiente</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"temp\">\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Temp Agua</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"tempagua\">\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Temp RVM</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"temprvm\">\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Volumen RVM</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"volumenrvm\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <ion-item button text-center color=\"primary\" (click)=\"save()\">\n                  <ion-label>Guardar</ion-label>\n                </ion-item>\n              </div>\n            </div>\n          </form>\n\n          <div class=\"col-sm-12\" *ngIf=\"me\">\n            <div *ngFor=\"let item of medidores\">\n\n              <app-me [item]=\"item\" [orden]=orden._id></app-me>\n\n            </div>\n          </div>\n\n          <form [formGroup]=\"form2\" *ngIf=\"me\">\n            <div class=\"row\">\n              <div class=\"col-sm-4 mt-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Horas</span>\n                  </div>\n                  <input type=\"number\" formControlName=\"horas\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-4 mt-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Minutos</span>\n                  </div>\n                  <input type=\"number\" formControlName=\"minutos\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-4 mt-3\">\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Segundos</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"segundos\">\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <ion-item button text-center color=\"primary\" (click)=\"savetime()\">\n                  <ion-label>Continuar</ion-label>\n                </ion-item>\n              </div>\n            </div>\n          </form>\n\n        </div> -->\n      </div>\n    </div>\n\n\n\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/q1/q1.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/q1/q1.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form action=\"\" [formGroup]=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Prueba {{tipo}} </ion-label>              \n        </ion-item>\n      </div>\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Repeticion No {{rp}} </ion-label>              \n        </ion-item>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"uno\" >\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Caudal</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"caudal\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">L/h</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Humedad. Relativa</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"humedad\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Entrada</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"pentrada\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Salida</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"psalida\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp. Ambiente</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temp\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp Agua</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"tempagua\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temprvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Volumen RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"volumenrvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">ml</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"save()\" *ngIf=\"!dos\" [disabled]=\"!form.valid\">\n          <ion-label>Guardar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"col-sm-12\" *ngIf=\"dos\">\n    <div *ngFor=\"let item of medidores\">\n      <app-me [item]=\"item\" [orden]=orden._id></app-me>\n    </div>\n  </div>\n\n  <form [formGroup]=\"form2\" *ngIf=\"tres\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-card>\n          <ion-card-header>           \n            <ion-card-title>Duracion de la prueba</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-sm-4 mt-3\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Horas</span>\n                    </div>\n                    <input type=\"number\" formControlName=\"horas\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4 mt-3\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Minutos</span>\n                    </div>\n                    <input type=\"number\" formControlName=\"minutos\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4 mt-3\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Segundos</span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"segundos\">\n                  </div>\n                </div>\n              </div>\n            </div>            \n\n          </ion-card-content>\n        </ion-card>\n\n      </div>   \n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"savetime()\" [disabled]=\"!form2.valid\" >\n          <ion-label>Continuar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/q2/q2.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/q2/q2.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form action=\"\" [formGroup]=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Prueba {{tipo}} </ion-label>              \n        </ion-item>\n      </div>\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Repeticion No {{rp}} </ion-label>              \n        </ion-item>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"uno\" >\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Caudal</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"caudal\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">L/h</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Humedad. Relativa</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"humedad\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Entrada</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"pentrada\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Salida</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"psalida\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp. Ambiente</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temp\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp Agua</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"tempagua\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temprvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Volumen RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"volumenrvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">ml</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"save()\" *ngIf=\"!dos\" [disabled]=\"!form.valid\">\n          <ion-label>Guardar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"col-sm-12\" *ngIf=\"dos\">\n    <div *ngFor=\"let item of medidores\">\n      <app-me [item]=\"item\" [orden]=orden._id></app-me>\n    </div>\n  </div>\n\n  <form [formGroup]=\"form2\" *ngIf=\"tres\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-card>\n          <ion-card-header>           \n            <ion-card-title>Duracion de la prueba</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-sm-4 mt-3\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Horas</span>\n                    </div>\n                    <input type=\"number\" formControlName=\"horas\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4 mt-3\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Minutos</span>\n                    </div>\n                    <input type=\"number\" formControlName=\"minutos\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4 mt-3\">\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Segundos</span>\n                    </div>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"segundos\">\n                  </div>\n                </div>\n              </div>\n            </div>            \n\n          </ion-card-content>\n        </ion-card>\n\n      </div>   \n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"savetime()\" [disabled]=\"!form2.valid\" >\n          <ion-label>Continuar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/trabajo.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trabajo/trabajo.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n<div>\n  <ion-router-outlet></ion-router-outlet>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/trabajo/addmedidores/addmedidores.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/trabajo/addmedidores/addmedidores.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vYWRkbWVkaWRvcmVzL2FkZG1lZGlkb3Jlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/trabajo/addmedidores/addmedidores.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/trabajo/addmedidores/addmedidores.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddmedidoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedidoresComponent", function() { return AddmedidoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddmedidoresComponent = class AddmedidoresComponent {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.medidores = [];
        this.seleccionados = [];
        this.state = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getTrabajo(this.id);
    }
    getTrabajo(id) {
        // this.api.GetOpenOrden(id).subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.datos=resp.data[0];
        //     console.log(this.datos);
        //     this.getMedidores(this.datos.entrada._id);
        //     if(this.datos.tipo==1){
        //       this.tipo="Calibracion";
        //     }else if(this.datos.tipo==2){
        //       this.tipo="Perdida de Carga";
        //     }else{
        //       this.tipo="Presion Hidroestatica";
        //     }
        //     this.state=true;
        //     console.log(this.datos.orden);
        //   }
        // });
    }
    getMedidores(id) {
        // this.api.getMedidoresOrden(id).subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.medidores=resp.data;
        //     console.log(this.medidores);
        //   }
        // });
    }
    push(item) {
        this.seleccionados.push(item);
        this.medidores = this.medidores.filter(e => e._id != item._id);
        console.log(this.seleccionados);
    }
    delete(item) {
        this.seleccionados = this.seleccionados.filter(e => e._id != item._id);
        this.medidores.push(item);
    }
    continue() {
        let a = {
            "id": this.id,
            "seleccionados": this.seleccionados
        };
        this.api.addmedidores(a).subscribe((resp) => {
            if (resp.ok) {
                this.router.navigate(['/trabajo/crear']);
                console.log(resp);
            }
        });
    }
};
AddmedidoresComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddmedidoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addmedidores',
        template: __webpack_require__(/*! raw-loader!./addmedidores.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/addmedidores/addmedidores.component.html"),
        styles: [__webpack_require__(/*! ./addmedidores.component.scss */ "./src/app/pages/trabajo/addmedidores/addmedidores.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddmedidoresComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/calibrar/calibrar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/trabajo/calibrar/calibrar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vY2FsaWJyYXIvY2FsaWJyYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/trabajo/calibrar/calibrar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/trabajo/calibrar/calibrar.component.ts ***!
  \**************************************************************/
/*! exports provided: CalibrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrarComponent", function() { return CalibrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CalibrarComponent = class CalibrarComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.ordenes = [];
    }
    ngOnInit() {
        this.getOrdenes();
    }
    getOrdenes() {
        // this.api.getOrdenesOpenTrabajo().subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.ordenes=resp.data;
        //     console.log(this.ordenes);
        //   }
        // });
    }
    open(id) {
        this.router.navigate([`/trabajo/pruebas/${id}`]);
    }
};
CalibrarComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CalibrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calibrar',
        template: __webpack_require__(/*! raw-loader!./calibrar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/calibrar/calibrar.component.html"),
        styles: [__webpack_require__(/*! ./calibrar.component.scss */ "./src/app/pages/trabajo/calibrar/calibrar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CalibrarComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/consultar/consultar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/trabajo/consultar/consultar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vY29uc3VsdGFyL2NvbnN1bHRhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/trabajo/consultar/consultar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/trabajo/consultar/consultar.component.ts ***!
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
        template: __webpack_require__(/*! raw-loader!./consultar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/consultar/consultar.component.html"),
        styles: [__webpack_require__(/*! ./consultar.component.scss */ "./src/app/pages/trabajo/consultar/consultar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ConsultarComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/crear/crear.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/trabajo/crear/crear.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vY3JlYXIvY3JlYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/trabajo/crear/crear.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/trabajo/crear/crear.component.ts ***!
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");







// import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
}
let CrearComponent = class CrearComponent {
    constructor(api, route, router, us, ls) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.us = us;
        this.ls = ls;
        this.bancos = [];
        this.datos = [];
        this.q2q1 = null;
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
        this.default = [];
        this.usuarios = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ordenante: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            encargado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha_programacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            hora_programacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ensayo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            duracion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            repeticiones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            coef_rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            coef_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            compre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            incertidumbre_rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            incertidumbre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            incertidumbre_compre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getBancos();
        this.getDatos(this.id);
        this.getDefault();
        this.getConsecutivo();
        this.getUsuarios();
        this.setUser();
    }
    getBancos() {
        this.api.getBancos().subscribe((resp) => {
            if (resp.ok) {
                this.bancos = resp.data;
            }
        });
    }
    getDatos(id) {
        this.api.OpenOrden(id).subscribe((resp) => {
            if (resp.ok) {
                this.datos = resp.data[0];
                this.form.patchValue({ entrada: this.datos._id });
                this.q2q1 = this.datos.q2 / this.datos.q1;
                this.q3q1 = this.datos.q3 / this.datos.q1;
            }
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
    getDefault() {
        this.api.getDefaultParametros().subscribe((resp) => {
            if (resp.ok) {
                this.default = resp.data[0];
                this.form.patchValue({ repeticiones: this.default.repeticiones });
                this.form.patchValue({ coef_rvm: this.default.coef_rvm });
                this.form.patchValue({ coef_agua: this.default.coef_agua });
                this.form.patchValue({ compre_agua: this.default.compre_agua });
                this.form.patchValue({ incertidumbre_rvm: this.default.incertidumbre_rvm });
                this.form.patchValue({ incertidumbre_agua: this.default.incertidumbre_agua });
                this.form.patchValue({ incertidumbre_compre_agua: this.default.incertidumbre_compre_agua });
            }
        });
    }
    getUsuarios() {
        this.us.GetUsers().subscribe((resp) => {
            if (resp.ok) {
                this.usuarios = resp.usuarios;
                console.log(this.usuarios);
            }
        });
    }
    save() {
        this.api.crearOrdenTrabajo(this.form.value).subscribe((resp) => {
            if (resp.ok) {
                let id = resp.data._id;
                console.log(id);
                this.router.navigate([`/trabajo/instrumentos/${id}`]);
            }
        });
    }
    setUser() {
        this.ls.cargarStorage('usuario').then((data) => {
            this.form.patchValue({ ordenante: data._id });
        });
    }
};
CrearComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
CrearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear',
        template: __webpack_require__(/*! raw-loader!./crear.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/crear/crear.component.html"),
        styles: [__webpack_require__(/*! ./crear.component.scss */ "./src/app/pages/trabajo/crear/crear.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
], CrearComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/generar/generar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/trabajo/generar/generar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-size: 12px;\n}\n\n.fuente {\n  font-size: 12px;\n}\n\nthead {\n  border-color: white;\n  background-color: white;\n}\n\ntbody td.c {\n  background-color: lightgray;\n  border-style: ridge;\n  border-width: 0.5px;\n  border-color: black;\n}\n\ntbody td {\n  background-color: white;\n  border-style: ridge;\n  border-width: 0.5px;\n  border-color: black;\n}\n\ntbody tr.b td {\n  border-color: white;\n  background-color: white;\n}\n\n.a {\n  border-top: 0.5px black solid;\n}\n\n.do {\n  border-bottom: 0.5px black solid;\n}\n\n.i {\n  border-left: 0.5px black solid;\n}\n\n.d {\n  border-right: 0.5px black solid;\n}\n\n#print {\n  display: none;\n}\n\n@media print {\n  /* invert the display (show/hide) properties of the main */\n  /* aplication component and the printing component       */\n  #print {\n    display: block;\n    height: 279mm;\n    width: 216mm;\n    font-size: 12px;\n  }\n\n  #noprint {\n    display: none;\n  }\n\n  app-menu {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhYmFqby9nZW5lcmFyL0M6XFxQcm95ZWN0b3NcXHNlcnZhZlxcc2VydmFmYXBwL3NyY1xcYXBwXFxwYWdlc1xcdHJhYmFqb1xcZ2VuZXJhclxcZ2VuZXJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJhYmFqby9nZW5lcmFyL2dlbmVyYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUNLRjs7QURGQTtFQUNJLDZCQUFBO0FDS0o7O0FESEE7RUFDSSxnQ0FBQTtBQ01KOztBREhBO0VBQ0ksOEJBQUE7QUNNSjs7QURIQTtFQUNJLCtCQUFBO0FDTUo7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FERkE7RUFDSSwwREFBQTtFQUNBLDBEQUFBO0VBRUE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDSUo7O0VEREU7SUFDRSxhQUFBO0VDSUo7O0VEREU7SUFDSSxhQUFBO0VDSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vZ2VuZXJhci9nZW5lcmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmZ1ZW50ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG50aGVhZHtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG50Ym9keSB0ZC5je1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5OyAgICBcclxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG50Ym9keSB0ZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcclxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxudGJvZHkgdHIuYiB0ZHsgICAgICBcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXtcclxuICAgIGJvcmRlci10b3A6IDAuNXB4IGJsYWNrIHNvbGlkOyBcclxufVxyXG4uZG97XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBibGFjayBzb2xpZDsgXHJcbn1cclxuXHJcbi5pe1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuNXB4IGJsYWNrIHNvbGlkOyBcclxufVxyXG5cclxuLmR7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IGJsYWNrIHNvbGlkOyBcclxufVxyXG5cclxuI3ByaW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAvKiBpbnZlcnQgdGhlIGRpc3BsYXkgKHNob3cvaGlkZSkgcHJvcGVydGllcyBvZiB0aGUgbWFpbiAqL1xyXG4gICAgLyogYXBsaWNhdGlvbiBjb21wb25lbnQgYW5kIHRoZSBwcmludGluZyBjb21wb25lbnQgICAgICAgKi9cclxuICBcclxuICAgICNwcmludCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDI3OW1tO1xyXG4gICAgICB3aWR0aDogMjE2bW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgICNub3ByaW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuIiwidGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mdWVudGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnRoZWFkIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnRib2R5IHRkLmMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XG4gIGJvcmRlci13aWR0aDogMC41cHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbnRib2R5IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XG4gIGJvcmRlci13aWR0aDogMC41cHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbnRib2R5IHRyLmIgdGQge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmEge1xuICBib3JkZXItdG9wOiAwLjVweCBibGFjayBzb2xpZDtcbn1cblxuLmRvIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggYmxhY2sgc29saWQ7XG59XG5cbi5pIHtcbiAgYm9yZGVyLWxlZnQ6IDAuNXB4IGJsYWNrIHNvbGlkO1xufVxuXG4uZCB7XG4gIGJvcmRlci1yaWdodDogMC41cHggYmxhY2sgc29saWQ7XG59XG5cbiNwcmludCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC8qIGludmVydCB0aGUgZGlzcGxheSAoc2hvdy9oaWRlKSBwcm9wZXJ0aWVzIG9mIHRoZSBtYWluICovXG4gIC8qIGFwbGljYXRpb24gY29tcG9uZW50IGFuZCB0aGUgcHJpbnRpbmcgY29tcG9uZW50ICAgICAgICovXG4gICNwcmludCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAyNzltbTtcbiAgICB3aWR0aDogMjE2bW07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgI25vcHJpbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBhcHAtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/trabajo/generar/generar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/trabajo/generar/generar.component.ts ***!
  \************************************************************/
/*! exports provided: GenerarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarComponent", function() { return GenerarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let GenerarComponent = class GenerarComponent {
    constructor(api, alertController, route, router) {
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.ready = false;
        this.inf = true;
        this.resultados = [];
        this.orden = [];
        this.entrada = [];
        this.medidores = [];
        this.instrumentos = [];
        this.caudal = [];
        this.temprvm = [];
        this.tempagua = [];
        this.volumenrvm = [];
        this.tiempo = [];
        this.presionentrada = [];
        this.tempambiente = [];
        this.humedad = [];
        this.presionsalida = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.off = this.route.snapshot.queryParamMap.get("ok");
        if (this.off) {
            this.getResultados(this.id);
        }
    }
    cerrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cerrar Orden!',
                message: 'Desea Cerrar la orden ??',
                mode: "ios",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.save();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    save() {
        let a = {
            _id: this.id
        };
        this.api.closeordentrabajo(a).subscribe((resp) => {
            if (resp.ok) {
                this.generate();
            }
        });
    }
    generate() {
        let a = {
            orden: this.id
        };
        this.api.generarinforme(a).subscribe((resp) => {
            if (resp.ok) {
                // this.router.navigate(['/trabajo/calibrar']);
                this.getResultados(this.id);
            }
        });
    }
    getResultados(id) {
        this.api.getresultados(id).subscribe((resp) => {
            if (resp.ok) {
                this.resultados = resp.data[0];
                this.getOrden(id);
            }
        });
    }
    getOrden(id) {
        // this.api.GetOpenOrden(id).subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.orden=resp.data[0];
        //     console.log(resp)
        //     this.getOrdenEntrada(this.orden.entrada._id)
        //     this.getmedidores(this.id); 
        //     this.getInstrumentos(this.id);      
        //   }
        // })
    }
    getOrdenEntrada(id) {
        this.api.getOrden(id).subscribe((resp) => {
            if (resp.ok) {
                this.entrada = resp.data[0];
            }
        });
    }
    getmedidores(id) {
        this.api.GetOMedidoresTrabajo(id).subscribe((resp) => {
            if (resp.ok) {
                this.medidores = resp.data;
                this.ready = true;
                this.inf = false;
            }
        });
    }
    getInstrumentos(id) {
        this.api.getAllInstrumentosOrden(id).subscribe((resp) => {
            if (resp.ok) {
                this.instrumentos = resp.data;
                this.instrumentos.forEach(e => {
                    this.caudal.push(e.caudal);
                    this.temprvm.push(e.temprvm);
                    this.tempagua.push(e.tempagua);
                    this.volumenrvm.push(e.volumenrvm);
                    this.tiempo.push(e.tiempo);
                    this.presionentrada.push(e.presionentrada);
                    this.tempambiente.push(e.tempambiente);
                    this.humedad.push(e.humedad);
                    this.presionsalida.push(e.presionsalida);
                });
                this.ready = true;
                this.inf = false;
            }
        });
    }
    print() {
        window.print();
    }
};
GenerarComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GenerarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generar',
        template: __webpack_require__(/*! raw-loader!./generar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/generar/generar.component.html"),
        styles: [__webpack_require__(/*! ./generar.component.scss */ "./src/app/pages/trabajo/generar/generar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], GenerarComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/informes/informes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/trabajo/informes/informes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vaW5mb3JtZXMvaW5mb3JtZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/trabajo/informes/informes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/trabajo/informes/informes.component.ts ***!
  \**************************************************************/
/*! exports provided: InformesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformesComponent", function() { return InformesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InformesComponent = class InformesComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.ordenes = [];
    }
    ngOnInit() {
        this.getOrdenes();
    }
    getOrdenes() {
        // this.api.GetCloseOrden().subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.ordenes=resp.data;    
        //   }
        // });
    }
    open(id) {
        this.router.navigate([`/trabajo/generar/${id}`], { queryParams: { ok: '1' } });
    }
};
InformesComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InformesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informes',
        template: __webpack_require__(/*! raw-loader!./informes.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/informes/informes.component.html"),
        styles: [__webpack_require__(/*! ./informes.component.scss */ "./src/app/pages/trabajo/informes/informes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], InformesComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/instrumentos/instrumentos.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/trabajo/instrumentos/instrumentos.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vaW5zdHJ1bWVudG9zL2luc3RydW1lbnRvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/trabajo/instrumentos/instrumentos.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/trabajo/instrumentos/instrumentos.component.ts ***!
  \**********************************************************************/
/*! exports provided: InstrumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentosComponent", function() { return InstrumentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let InstrumentosComponent = class InstrumentosComponent {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.instrumentos = [];
        this.state = false;
        this.banco = "";
        this.formq1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionsalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.formq2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionsalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.formq3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionsalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.formq4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presionsalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getTrabajo(this.id);
        this.getInstrumentos();
    }
    ionViewWillEnter() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getTrabajo(this.id);
        this.getInstrumentos();
    }
    getTrabajo(id) {
        // this.api.GetOpenOrden(id).subscribe((resp:any)=>{
        //   if(resp.ok){
        //     this.datos=resp.data[0];
        //     let q=this.datos.entrada;    
        //     this.formq1.patchValue({orden:this.id});
        //     this.formq2.patchValue({orden:this.id});
        //     this.formq3.patchValue({orden:this.id});
        //     this.formq4.patchValue({orden:this.id});
        //     this.formq1.patchValue({caudal:q.q1});
        //     this.formq2.patchValue({caudal:q.q2});
        //     this.formq3.patchValue({caudal:q.q3});
        //     this.formq4.patchValue({caudal:q.q4});
        //     if(this.datos.tipo==1){
        //       this.tipo="Calibracion";
        //     }else if(this.datos.tipo==2){
        //       this.tipo="Perdida de Carga";
        //     }else{
        //       this.tipo="Presion Hidroestatica";
        //     }
        //     this.state=true;       
        //   }
        // });
    }
    getInstrumentos() {
        this.api.getAllInstrumentos().subscribe((resp) => {
            if (resp.ok) {
                this.instrumentos = resp.data;
            }
        });
    }
    save() {
        let a = {
            q1: this.formq1.value,
            q2: this.formq2.value,
            q3: this.formq3.value,
            q4: this.formq4.value,
        };
        this.api.saveInstrumentosOrdenTrabajo(a).subscribe((resp) => {
            if (resp.ok) {
                this.router.navigate([`/trabajo/medidores/${this.id}`]);
            }
        });
    }
};
InstrumentosComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InstrumentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-instrumentos',
        template: __webpack_require__(/*! raw-loader!./instrumentos.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/instrumentos/instrumentos.component.html"),
        styles: [__webpack_require__(/*! ./instrumentos.component.scss */ "./src/app/pages/trabajo/instrumentos/instrumentos.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], InstrumentosComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/pruebas/pruebas.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/trabajo/pruebas/pruebas.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vcHJ1ZWJhcy9wcnVlYmFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/trabajo/pruebas/pruebas.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/trabajo/pruebas/pruebas.component.ts ***!
  \************************************************************/
/*! exports provided: PruebasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebasComponent", function() { return PruebasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let PruebasComponent = class PruebasComponent {
    constructor(api, route, router, alertController) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.orden = [];
        this.registros = [];
        this.datos = [];
        this.close = false;
        this.repeticion = null;
        this.pruebas = [];
        this.default = [
            { tipo: "Q1" },
            { tipo: "Q2" },
            { tipo: "Q3" }
        ];
        this.ready = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            repeticion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            psalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.form1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            horas: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            minutos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            segundos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.getpruebas(this.id);
        // this.getMedidores(this.id);
        this.getdefaults();
        // this.getstate();
    }
    nav() {
        let a = this.form1.value;
        this.router.navigate([`/trabajo/corrida/${this.id}`], { queryParams: { tipo: a.tipo, numero: 1 } });
    }
    // set(){
    //   this.pruebas= this.pruebas.filter(e=>e != this.tipo);
    //   console.log(this.pruebas);
    // }
    getpruebas(id) {
        this.api.getpruebas(id).subscribe((resp) => {
            if (resp.ok) {
                this.pruebas = resp.data;
                if (this.pruebas.length == 0) {
                    this.router.navigate([`/trabajo/generar/${this.id}`]);
                }
                else if (this.pruebas.length == this.parametros.repeticiones) {
                    this.ready = true;
                }
                else {
                }
            }
        });
    }
    cerrar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cerrar Prueba!',
                message: 'Desea Cerrar la prueba <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.save();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    save() {
        let a = {
            _id: this.id
        };
        this.api.closeordentrabajo(a).subscribe((resp) => {
            if (resp.ok) {
                this.router.navigate([`/trabajo/calibrar`]);
            }
        });
    }
    generate() {
        let a = {
            _id: this.id
        };
        this.api.generarinforme(a).subscribe((resp) => {
            console.log(resp);
        });
    }
    // set(){
    //   this.repeticion=this.repeticion+1;
    //   if(this.repeticion > this.parametros.repeticiones){
    //       this.form.reset();
    //       this.form1.reset();
    //       this.form2.reset();
    //       this.rep=false;
    //       this.in=false;
    //       this.me=false;
    //       this.du=false;
    //   }else{
    //     this.form.patchValue({repeticion:this.repeticion});
    //     this.form.patchValue({tipo:a.tipo});
    //     this.form.patchValue({orden:this.id});   
    //     this.rep=true;
    //     this.in=true;
    //     this.me=true;
    //   }
    // }
    // savetime(){
    //   this.api.savetime(this.form2.value).subscribe((resp:any)=>{
    //       if(resp.ok){                    
    //         this.form.reset();
    //         this.set();
    //       }
    //   });
    // }
    // getstate(){
    //   this.api.getstatecorrida(this.id).subscribe((resp:any)=>{
    //     if(resp.ok){
    //       this.corridaactual=resp.data;
    //       this.q1 =this.corridaactual.find(e=>e.tipo=="Q1");    
    //       this.q2 =this.corridaactual.find(e=>e.tipo=="Q2");    
    //       this.q3 =this.corridaactual.find(e=>e.tipo=="Q3"); 
    //       this.q4 =this.corridaactual.find(e=>e.tipo=="Q4");     
    //     }
    //   })
    // }
    getdefaults() {
        this.api.getDefaultParametros().subscribe((resp) => {
            if (resp.ok) {
                this.parametros = resp.data[0];
                console.log(this.parametros);
            }
        });
    }
};
PruebasComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
PruebasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pruebas',
        template: __webpack_require__(/*! raw-loader!./pruebas.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/pruebas/pruebas.component.html"),
        styles: [__webpack_require__(/*! ./pruebas.component.scss */ "./src/app/pages/trabajo/pruebas/pruebas.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], PruebasComponent);



/***/ }),

/***/ "./src/app/pages/trabajo/q1/q1.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/trabajo/q1/q1.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vcTEvcTEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/trabajo/q1/q1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/trabajo/q1/q1.component.ts ***!
  \**************************************************/
/*! exports provided: Q1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q1Component", function() { return Q1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let Q1Component = class Q1Component {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.uno = true;
        this.dos = false;
        this.tres = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            repeticion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            psalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            horas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            minutos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            segundos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.repeticion = parseInt(this.repeticion);
        this.getMedidores(this.id);
        this.getdefaults();
        this.set();
        this.dos = false;
    }
    ionViewWillEnter() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.repeticion = parseInt(this.repeticion);
        this.getMedidores(this.id);
        this.getdefaults();
        this.set();
        this.dos = false;
    }
    getMedidores(id) {
        this.api.GetOMedidoresTrabajo(id).subscribe((resp) => {
            if (resp.ok) {
                this.medidores = resp.data;
            }
        });
    }
    save() {
        this.datos = this.form.value;
        this.api.iniciales(this.form.value).subscribe((resp) => {
            if (resp.ok) {
                this.orden = resp.data;
                this.form2.patchValue({ _id: this.orden._id });
                this.dos = true;
                this.tres = true;
            }
        });
    }
    getdefaults() {
        this.api.getDefaultParametros().subscribe((resp) => {
            if (resp.ok) {
                this.parametros = resp.data[0];
            }
        });
    }
    savetime() {
        this.api.savetime(this.form2.value).subscribe((resp) => {
            if (resp.ok) {
                if (this.repeticion > this.parametros.repeticiones) {
                    this.form.reset();
                    this.form2.reset();
                    let a = {
                        orden: this.id,
                        tipo: this.tipo
                    };
                    this.api.updatepruebas(a).subscribe((resp) => {
                        if (resp.ok) {
                            this.router.navigate([`/trabajo/pruebas/${this.id}`]);
                        }
                    });
                }
                else {
                    this.form.reset();
                    this.form2.reset();
                    this.uno = true;
                    this.dos = false;
                    this.tres = false;
                    this.router.navigate([`/trabajo/corridad/${this.id}`], { queryParams: { tipo: this.tipo, numero: this.repeticion } });
                }
            }
        });
    }
    set() {
        this.form.patchValue({ tipo: this.tipo });
        this.form.patchValue({ repeticion: this.repeticion });
        this.form.patchValue({ orden: this.id });
        this.repeticion++;
        this.rp = this.repeticion - 1;
    }
};
Q1Component.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Q1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-q1',
        template: __webpack_require__(/*! raw-loader!./q1.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/q1/q1.component.html"),
        styles: [__webpack_require__(/*! ./q1.component.scss */ "./src/app/pages/trabajo/q1/q1.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], Q1Component);



/***/ }),

/***/ "./src/app/pages/trabajo/q2/q2.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/trabajo/q2/q2.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWJham8vcTIvcTIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/trabajo/q2/q2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/trabajo/q2/q2.component.ts ***!
  \**************************************************/
/*! exports provided: Q2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q2Component", function() { return Q2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let Q2Component = class Q2Component {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.uno = true;
        this.dos = false;
        this.tres = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            repeticion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            psalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            horas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            minutos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            segundos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.repeticion = parseInt(this.repeticion);
        this.getMedidores(this.id);
        this.getdefaults();
        this.set();
    }
    ionViewWillEnter() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.repeticion = parseInt(this.repeticion);
        this.getMedidores(this.id);
        this.getdefaults();
        this.set();
    }
    getMedidores(id) {
        this.api.GetOMedidoresTrabajo(id).subscribe((resp) => {
            if (resp.ok) {
                this.medidores = resp.data;
            }
        });
    }
    save() {
        this.datos = this.form.value;
        this.api.iniciales(this.form.value).subscribe((resp) => {
            if (resp.ok) {
                this.orden = resp.data;
                this.form2.patchValue({ _id: this.orden._id });
                this.dos = true;
                this.tres = true;
            }
        });
    }
    getdefaults() {
        this.api.getDefaultParametros().subscribe((resp) => {
            if (resp.ok) {
                this.parametros = resp.data[0];
            }
        });
    }
    savetime() {
        this.api.savetime(this.form2.value).subscribe((resp) => {
            if (resp.ok) {
                if (this.repeticion > this.parametros.repeticiones) {
                    this.form.reset();
                    this.form2.reset();
                    let a = {
                        orden: this.id,
                        tipo: this.tipo
                    };
                    this.api.updatepruebas(a).subscribe((resp) => {
                        if (resp.ok) {
                            this.router.navigate([`/trabajo/generar/${this.id}`]);
                        }
                    });
                }
                else {
                    this.router.navigate([`/trabajo/corrida/${this.id}`], { queryParams: { tipo: this.tipo, numero: this.repeticion } });
                }
            }
        });
    }
    set() {
        this.form.patchValue({ tipo: this.tipo });
        this.form.patchValue({ repeticion: this.repeticion });
        this.form.patchValue({ orden: this.id });
        this.repeticion++;
        this.rp = this.repeticion - 1;
    }
};
Q2Component.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Q2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-q2',
        template: __webpack_require__(/*! raw-loader!./q2.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/q2/q2.component.html"),
        styles: [__webpack_require__(/*! ./q2.component.scss */ "./src/app/pages/trabajo/q2/q2.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], Q2Component);



/***/ }),

/***/ "./src/app/pages/trabajo/trabajo-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/trabajo/trabajo-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TrabajoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoPageRoutingModule", function() { return TrabajoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trabajo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trabajo.page */ "./src/app/pages/trabajo/trabajo.page.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/trabajo/crear/crear.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/trabajo/consultar/consultar.component.ts");
/* harmony import */ var _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instrumentos/instrumentos.component */ "./src/app/pages/trabajo/instrumentos/instrumentos.component.ts");
/* harmony import */ var _addmedidores_addmedidores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addmedidores/addmedidores.component */ "./src/app/pages/trabajo/addmedidores/addmedidores.component.ts");
/* harmony import */ var _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calibrar/calibrar.component */ "./src/app/pages/trabajo/calibrar/calibrar.component.ts");
/* harmony import */ var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pruebas/pruebas.component */ "./src/app/pages/trabajo/pruebas/pruebas.component.ts");
/* harmony import */ var _q1_q1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./q1/q1.component */ "./src/app/pages/trabajo/q1/q1.component.ts");
/* harmony import */ var _q2_q2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./q2/q2.component */ "./src/app/pages/trabajo/q2/q2.component.ts");
/* harmony import */ var _generar_generar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./generar/generar.component */ "./src/app/pages/trabajo/generar/generar.component.ts");
/* harmony import */ var _informes_informes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./informes/informes.component */ "./src/app/pages/trabajo/informes/informes.component.ts");














const routes = [
    {
        path: '',
        component: _trabajo_page__WEBPACK_IMPORTED_MODULE_3__["TrabajoPage"], children: [
            {
                path: 'crear', component: _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_5__["ConsultarComponent"]
            },
            {
                path: 'open', component: _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__["CrearComponent"]
            },
            {
                path: 'instrumentos/:id', component: _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_6__["InstrumentosComponent"]
            },
            {
                path: 'medidores/:id', component: _addmedidores_addmedidores_component__WEBPACK_IMPORTED_MODULE_7__["AddmedidoresComponent"]
            },
            {
                path: 'calibrar', component: _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_8__["CalibrarComponent"]
            },
            {
                path: 'pruebas/:id', component: _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_9__["PruebasComponent"]
            },
            {
                path: 'corrida/:id', component: _q1_q1_component__WEBPACK_IMPORTED_MODULE_10__["Q1Component"]
            },
            {
                path: 'corridad/:id', component: _q2_q2_component__WEBPACK_IMPORTED_MODULE_11__["Q2Component"]
            },
            {
                path: 'generar/:id', component: _generar_generar_component__WEBPACK_IMPORTED_MODULE_12__["GenerarComponent"]
            },
            {
                path: 'informes', component: _informes_informes_component__WEBPACK_IMPORTED_MODULE_13__["InformesComponent"]
            },
        ]
    }
];
let TrabajoPageRoutingModule = class TrabajoPageRoutingModule {
};
TrabajoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrabajoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trabajo/trabajo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/trabajo/trabajo.module.ts ***!
  \*************************************************/
/*! exports provided: TrabajoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoPageModule", function() { return TrabajoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trabajo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trabajo-routing.module */ "./src/app/pages/trabajo/trabajo-routing.module.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");
/* harmony import */ var _trabajo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trabajo.page */ "./src/app/pages/trabajo/trabajo.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/trabajo/crear/crear.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/trabajo/consultar/consultar.component.ts");
/* harmony import */ var _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./instrumentos/instrumentos.component */ "./src/app/pages/trabajo/instrumentos/instrumentos.component.ts");
/* harmony import */ var _addmedidores_addmedidores_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addmedidores/addmedidores.component */ "./src/app/pages/trabajo/addmedidores/addmedidores.component.ts");
/* harmony import */ var _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calibrar/calibrar.component */ "./src/app/pages/trabajo/calibrar/calibrar.component.ts");
/* harmony import */ var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pruebas/pruebas.component */ "./src/app/pages/trabajo/pruebas/pruebas.component.ts");
/* harmony import */ var _q1_q1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./q1/q1.component */ "./src/app/pages/trabajo/q1/q1.component.ts");
/* harmony import */ var _q2_q2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./q2/q2.component */ "./src/app/pages/trabajo/q2/q2.component.ts");
/* harmony import */ var _generar_generar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./generar/generar.component */ "./src/app/pages/trabajo/generar/generar.component.ts");
/* harmony import */ var _informes_informes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./informes/informes.component */ "./src/app/pages/trabajo/informes/informes.component.ts");



















let TrabajoPageModule = class TrabajoPageModule {
};
TrabajoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_8__["ComponentesModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_6__["NgxPrintModule"],
            _trabajo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrabajoPageRoutingModule"]
        ],
        declarations: [_trabajo_page__WEBPACK_IMPORTED_MODULE_7__["TrabajoPage"], _informes_informes_component__WEBPACK_IMPORTED_MODULE_18__["InformesComponent"], _q1_q1_component__WEBPACK_IMPORTED_MODULE_15__["Q1Component"], _q2_q2_component__WEBPACK_IMPORTED_MODULE_16__["Q2Component"], _generar_generar_component__WEBPACK_IMPORTED_MODULE_17__["GenerarComponent"], _crear_crear_component__WEBPACK_IMPORTED_MODULE_9__["CrearComponent"], _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_10__["ConsultarComponent"], _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_11__["InstrumentosComponent"], _addmedidores_addmedidores_component__WEBPACK_IMPORTED_MODULE_12__["AddmedidoresComponent"], _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_13__["CalibrarComponent"], _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_14__["PruebasComponent"]]
    })
], TrabajoPageModule);



/***/ }),

/***/ "./src/app/pages/trabajo/trabajo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/trabajo/trabajo.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media print {\n  /* invert the display (show/hide) properties of the main */\n  /* aplication component and the printing component       */\n  #print {\n    display: block;\n  }\n\n  #noprint {\n    display: none;\n  }\n\n  app-menu {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhYmFqby9DOlxcUHJveWVjdG9zXFxzZXJ2YWZcXHNlcnZhZmFwcC9zcmNcXGFwcFxccGFnZXNcXHRyYWJham9cXHRyYWJham8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFiYWpvL3RyYWJham8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7RUFDQSwwREFBQTtFQUVBO0lBQ0UsY0FBQTtFQ0FKOztFREdFO0lBQ0UsYUFBQTtFQ0FKOztFREdFO0lBQ0ksYUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFiYWpvL3RyYWJham8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcclxuICAgIC8qIGludmVydCB0aGUgZGlzcGxheSAoc2hvdy9oaWRlKSBwcm9wZXJ0aWVzIG9mIHRoZSBtYWluICovXHJcbiAgICAvKiBhcGxpY2F0aW9uIGNvbXBvbmVudCBhbmQgdGhlIHByaW50aW5nIGNvbXBvbmVudCAgICAgICAqL1xyXG4gIFxyXG4gICAgI3ByaW50IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjbm9wcmludCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLW1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIH1cclxuIiwiQG1lZGlhIHByaW50IHtcbiAgLyogaW52ZXJ0IHRoZSBkaXNwbGF5IChzaG93L2hpZGUpIHByb3BlcnRpZXMgb2YgdGhlIG1haW4gKi9cbiAgLyogYXBsaWNhdGlvbiBjb21wb25lbnQgYW5kIHRoZSBwcmludGluZyBjb21wb25lbnQgICAgICAgKi9cbiAgI3ByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gICNub3ByaW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYXBwLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/trabajo/trabajo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/trabajo/trabajo.page.ts ***!
  \***********************************************/
/*! exports provided: TrabajoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoPage", function() { return TrabajoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrabajoPage = class TrabajoPage {
    constructor() { }
    ngOnInit() {
    }
};
TrabajoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trabajo',
        template: __webpack_require__(/*! raw-loader!./trabajo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trabajo/trabajo.page.html"),
        styles: [__webpack_require__(/*! ./trabajo.page.scss */ "./src/app/pages/trabajo/trabajo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrabajoPage);



/***/ })

}]);
//# sourceMappingURL=pages-trabajo-trabajo-module-es2015.js.map