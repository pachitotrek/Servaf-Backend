(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ingreso-ingreso-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/informe/informe.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ingreso/informe/informe.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid fondo\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div id=\"carta_landscape\">\n\n          <!--Primer tabla-->\n\n          <table class=\"Table1 mb-3\">\n            <tbody>\n              <tr class=\"border-esp\">\n                <td colspan=\"3\" rowspan=\"3\">\n                  <img src=\"/assets/images/servaf.png\" class=\"logo1\" alt=\"Logo de SERVAF\">\n                </td>\n                <td colspan=\"6\" rowspan=\"3\" class=\"upper\">ORDEN DE ENTRADA</td>\n                <td class=\"border-right-0 text-left\">Código:</td>\n                <td colspan=\"3\" class=\"upper text-left\">LCM-FOR-DT-045</td>\n              </tr>\n              <tr class=\"border-esp\">\n                <td class=\"border-right-0 text-left\">Fecha:</td>\n                <td colspan=\"3\" class=\"upper text-left\">2018 Junio 13</td>\n              </tr>\n              <tr class=\"border-esp\">\n                <td class=\"border-right-0 text-left\">Página:</td>\n                <td colspan=\"3\" class=\"upper text-left\">1 de 1</td>\n              </tr>\n              <tr>\n                <td colspan=\"13\" class=\"border-0 border-bottom-0 white\">ESPACIO INTENCIONALMENTE EN BLANCO</td>\n              </tr>\n              <tr>\n                <td class=\"border-0 text-right\">N° de Orden:</td>\n                <td colspan=\"4\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">{{orden.orden}}</td>\n                <td colspan=\"3\" class=\"border-0\"></td>\n                <td class=\"border-0 text-right\">Encargado:</td>\n                <td colspan=\"4\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">{{orden.creado?.nombre}} {{orden.creado?.apellido}}</td>\n              </tr>\n              <tr>\n                <td class=\"border-0 text-right\">Cliente:</td>\n                <td colspan=\"4\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left upper\">{{orden.cliente?.nombre}}</td>\n                <td colspan=\"3\" class=\"border-0\"></td>\n                <td class=\"border-0 text-right\">Fecha:</td>\n                <td colspan=\"4\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">{{orden.fecha | date:'yyyy / MM / dd'}}</td>\n              </tr>\n              <tr>\n                <td colspan=\"13\" class=\"border-0 border-bottom-0 white\">ESPACIO INTENCIONALMENTE EN BLANCO</td>\n              </tr>\n              <tr>\n                <td>Consecutivo</td>\n                <td>Serial</td>\n                <td>Marca</td>\n                <td>Modelo</td>\n                <td>Año</td>\n                <td>Posición</td>\n                <td>Tipo</td>\n                <td>Indicador</td>\n                <td>Diámetro<br>[mm]</td>\n                <td>Pérdida de presión<br>[bar]</td>\n                <td>Presión nominal<br>[bar]</td>\n                <td>Rango<br>[m3]</td>\n                <td>División de escala [l]</td>\n              </tr>\n              <tr>\n                <td colspan=\"13\" class=\"border-0 border-bottom-0 white\">ESPACIO INTENCIONALMENTE EN BLANCO</td>\n              </tr>\n              <!-- <tr>\n                <td class=\"border-0\"></td>\n                <td colspan=\"2\" class=\"border-0 text-left\">Norma</td>\n                <td colspan=\"3\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">NTC 4064:2016\n                </td>\n              </tr>\n              <tr>\n                <td class=\"border-0\"></td>\n                <td colspan=\"2\" class=\"border-0 text-left\">Caudal permanente [m3/h]</td>\n                <td colspan=\"3\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">2.5</td>\n              </tr>\n              <tr>\n                <td class=\"border-0\"></td>\n                <td colspan=\"2\" class=\"border-0 text-left\">Clase metrológica</td>\n                <td colspan=\"3\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">2</td>\n              </tr>\n              <tr>\n                <td class=\"border-0\"></td>\n                <td colspan=\"2\" class=\"border-0 text-left\">Rango de medición</td>\n                <td colspan=\"3\" class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left\">160.0</td>\n              </tr> -->\n              <tr>\n                <td colspan=\"13\" class=\"border-0 border-bottom-0 white\">ESPACIO INTENCIONALMENTE EN BLANCO</td>\n              </tr>\n              <tr *ngFor=\"let item of medidores\">\n                <td class=\"theadclaro\">{{item.orden}}</td>\n                <td class=\"theadclaro\">{{item.datos?.serie}}</td>\n                <td class=\"theadclaro upper\">{{item.datos.marca.titulo}}</td>\n                <td class=\"theadclaro upper\">{{item.datos.modelo.titulo}}</td>\n                <td class=\"theadclaro\">{{item.datos?.fabricacion}}</td>\n                <td class=\"theadclaro\">{{item.metrologicas?.posicion}}</td>\n                <td class=\"theadclaro\">{{item.metrologicas?.principio}}</td>\n                <td class=\"theadclaro\">{{item.metrologicas?.tipo}}</td>\n                <td class=\"theadclaro\">{{item.metrologicas?.diametro}}</td>\n                <td class=\"theadclaro\">0.63</td>\n                <td class=\"theadclaro\">10.0</td>\n                <td class=\"theadclaro\">{{item.metrologicas?.rango}}</td>\n                <td class=\"theadclaro\">{{item.metrologicas?.escala}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"flex-footer m-0 p-0\" style=\"font-size: 9pt; text-align: center;\">\n            <table class=\"Table1\">\n              <tbody>\n                <tr>\n                  <td class=\"thead upper padding\">ELABORÓ</td>\n                  <td class=\"thead upper padding\">REVISÓ</td>\n                  <td class=\"thead upper padding\">APROBÓ</td>\n                  <td class=\"thead upper padding\">VERSIÓN</td>\n                </tr>\n                <tr>\n                  <td class=\"padding upper\">LUIS HERNÁN DURÁN GARCÍA</td>\n                  <td class=\"padding upper\">EDGAR FERNANDO LOZANO CALDERÓN</td>\n                  <td class=\"padding upper\">ALVARO TORRES CADENA</td>\n                  <td class=\"padding upper\" rowspan=\"2\">2</td>\n                </tr>\n                <tr>\n                  <td class=\"padding upper\">COORDINADOR LABORATORIO CALIBRACIÓN DE MEDIDORES</td>\n                  <td class=\"padding upper\">DIRECTOR DE PLANEACIÓN Y CALIDAD</td>\n                  <td class=\"padding upper\">GERENTES (S)</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    \n  </div>\n</ion-content>\n        <div class=\"row\" id=\"noprint\">\n          <div class=\"col-sm-12\">\n            <ion-button (click)=\"print()\" expand=\"block\"  shape=\"round\" color=\"primary\">\n              Imprimir\n            </ion-button>\n          </div>\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/ingreso.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ingreso/ingreso.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <app-menu></app-menu>\n</ion-header>\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/inicio/inicio.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ingreso/inicio/inicio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row m-0 p-0\">\n      <div class=\"col-sm-12 mt-2 p-0\">\n        <ion-item color=\"primary\">\n          <ion-label>Consulte sus Ordenes de Entrada</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mb-3\">\n        <form action=\"\" [formGroup]=\"form\">\n          <ion-item>\n            <ion-label>Desde</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"inicio\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Hasta</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"fin\"></ion-datetime>\n          </ion-item>\n  \n          <ion-item button (click)=\"get()\" [disabled]=\"!form.valid\" color=\"primary\" text-center>\n            <ion-label>Buscar</ion-label>\n          </ion-item>\n        </form>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <tr text-center>\n              <th scope=\"col\"># Orden</th>\n              <th scope=\"col\">Ordenantes</th>\n              <th scope=\"col\">Numero de Medidores</th>\n              <th scope=\"col\">Fecha de Ingreso</th>\n              <th scope=\"col\">Descargar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of ordenes\" text-center>\n              <th scope=\"row\">{{item.orden}}</th>\n              <td>{{item.creado?.nombre}} {{item.creado?.apellido}}</td>\n              <td>{{item.medidores.length}}</td>\n              <td>{{item.fecha | date:'yyyy-MM-dd' }}</td>\n              <td>\n                <ion-button (click)=\"go(item._id)\" size=\"small\" color=\"primary\">\n                  <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n                </ion-button>\n              </td>\n            </tr>        \n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/nuevo/nuevo.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ingreso/nuevo/nuevo.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mt-3\">\n        <ion-item color=\"primary\">\n          <ion-label>Nueva Orden de Entrada</ion-label>\n        </ion-item>\n        <table class=\"table\">\n          <thead>\n            <tr text-center>              \n              <th scope=\"col\">Persona que Ingresa</th>\n              <th scope=\"col\">No de Medidores</th>\n              <th scope=\"col\">Fecha</th>                \n            </tr>\n          </thead>\n          <tbody>\n            <tr text-center>\n              \n              <td>{{usuario.nombre}} {{usuario.apellido}}</td>\n              <td>{{medidores.length}}</td>\n              <td>{{fecha | date:'yyyy-MM-dd'}}</td>\n            </tr>         \n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-sm-12\">\n        <form action=\"\" [formGroup]=\"form\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ion-item lines=\"none\"> \n                  <ion-label>Cliente</ion-label>\n                  <ionic-selectable formControlName=\"cliente\" itemValueField=\"_id\" itemTextField=\"nombre\" [items]=\"clientes\"\n                    [canSearch]=\"true\" (onChange)=\"portChange($event)\">\n                  </ionic-selectable>\n                </ion-item>\n              </div>\n              <div class=\"col-sm-6\">\n                <ion-item button (click)=\"addcliente()\" lines=\"none\" shape=\"round\">\n                  <ion-label>Crear Nuevo cliente</ion-label>\n                </ion-item>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-sm-12\">\n        <ion-item color=\"primary\">\n          <ion-label>Ingrese Nuevos Medidores</ion-label>\n          <ion-button (click)=\"launch()\" expand=\"block\" slot=\"end\" color=\"light\" size=\"small\" class=\"mr-2\">\n            Agregar\n          </ion-button>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Serial</th>\n              <th scope=\"col\">Marca</th>\n              <th scope=\"col\">Modelo</th>\n              <th scope=\"col\">Año</th>\n              <th scope=\"col\">Tipo</th>\n              <th scope=\"col\">Apto</th>\n              <th scope=\"col\">Gestionar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of medidores\">\n              <th scope=\"row\">{{item.orden}}</th>\n              <td>{{item.datos.serie}}</td>\n              <td>{{item.datos.marca?.titulo}}</td>\n              <td>{{item.datos.modelo?.titulo}}</td>\n              <td>{{item.datos.fabricacion}}</td>\n              <td>{{item.metrologicas.principio}}</td>\n              <td *ngIf=\"item.estado=='true'\">Si</td>\n              <td *ngIf=\"item.estado=='false'\">No</td>\n              <td class=\"p-0\">\n                <ion-button (click)=\"delete(item._id)\" size=\"small\" color=\"danger\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-sm-12\">\n        <ion-item button color=\"primary\" text-center (click)=\"close()\" *ngIf=\"medidores.length > 0\" [disabled]=\"!form.valid\">\n          <ion-label>Terminar Ingreso</ion-label>\n        </ion-item>\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ingreso/informe/informe.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/ingreso/informe/informe.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  font-size: 12pt !important;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  height: 98%;\n}\n\n* {\n  color: #000 !important;\n}\n\n#carta_landscape {\n  min-width: 1055px !important;\n  max-width: 1056px !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  align-content: flex-start;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n  margin-top: 0px !important;\n}\n\n.logo1 {\n  position: relative;\n  width: 73.813px !important;\n}\n\ntable.Table1 {\n  min-width: 100% !important;\n  text-align: center;\n  border-collapse: collapse;\n}\n\n.border-esp {\n  border-style: double !important;\n}\n\ntable.Table1 td, table.Table1 th {\n  border: 1px solid #000000;\n}\n\ntable.Table1 tbody td {\n  font-size: 9pt;\n  color: #000000;\n  word-wrap: break-word;\n}\n\ntd {\n  width: 77.128px !important;\n}\n\ntd table.Table1 thead,\n.thead {\n  background: #D8D8D8 !important;\n}\n\n.theadclaro {\n  background: #ebebeb !important;\n}\n\ntable.Table1 thead th, .thead {\n  font-size: 9pt;\n  text-transform: uppercase;\n  font-weight: normal;\n  color: #000000;\n}\n\n.white {\n  color: white !important;\n}\n\n.padding {\n  padding: 5px 0 5px 0;\n}\n\n.upper {\n  text-transform: uppercase;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.ml-3 {\n  margin-left: 1rem;\n}\n\n.mr-3 {\n  margin-right: 1rem;\n}\n\n.mb-3 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 2rem;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #000 !important;\n}\n\n.border-left-0 {\n  border-left: 1px solid white !important;\n}\n\n.border-right-0 {\n  border-right: 1px solid white !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 1px solid white !important;\n}\n\n.border-top-0 {\n  border-top: 1px solid white !important;\n}\n\n.border-0 {\n  border: 0 none !important;\n}\n\n.mr-1 {\n  margin-right: 0.3rem;\n}\n\n.paddingtotal {\n  padding: 0.3rem;\n}\n\n.space {\n  border-left: 0 none white !important;\n  border-right: 0 none white !important;\n}\n\n.noborder {\n  border-top: 0 none white !important;\n  border-bottom: 0 none white !important;\n}\n\n.flex-footer {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  align-content: flex-end;\n}\n\n@media print {\n  /* invert the display (show/hide) properties of the main */\n  /* aplication component and the printing component       */\n  #noprint > * {\n    display: none;\n  }\n\n  fondo {\n    orientation: landscape;\n  }\n\n  @page {\n    size: A4 landscape;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ncmVzby9pbmZvcm1lL0M6XFxQcm95ZWN0b3NcXHNlcnZhZlxcc2VydmFmYXBwL3NyY1xcYXBwXFxwYWdlc1xcaW5ncmVzb1xcaW5mb3JtZVxcaW5mb3JtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5ncmVzby9pbmZvcm1lL2luZm9ybWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLDREQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUFHLHNCQUFBO0FDRUg7O0FEQUE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QURBQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERBO0VBQ0MsK0JBQUE7QUNJRDs7QURGRTtFQUNFLHlCQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDTUo7O0FESkU7RUFDRSwwQkFBQTtBQ09KOztBREpFOztFQUVFLDhCQUFBO0FDT0o7O0FETEU7RUFDRSw4QkFBQTtBQ1FKOztBRE5FO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEU7RUFDSSx1QkFBQTtBQ1VOOztBRFJFO0VBQ0ksb0JBQUE7QUNXTjs7QURURTtFQUNJLHlCQUFBO0FDWU47O0FEVkU7RUFDSSxnQkFBQTtBQ2FOOztBRFhBO0VBQ0ksaUJBQUE7QUNjSjs7QURaRTtFQUNJLFVBQUE7QUNlTjs7QURiRTtFQUNJLG9CQUFBO0FDZ0JOOztBRGRFO0VBQ0ksaUJBQUE7QUNpQk47O0FEZkU7RUFDRSxrQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxtQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxtQkFBQTtBQ29CSjs7QURsQkE7RUFDSSx3Q0FBQTtBQ3FCSjs7QURuQkE7RUFDSSx1Q0FBQTtBQ3NCSjs7QURwQkE7RUFDSSx3Q0FBQTtBQ3VCSjs7QURyQkE7RUFDSSx5Q0FBQTtBQ3dCSjs7QUR0QkE7RUFDSSxzQ0FBQTtBQ3lCSjs7QUR2QkE7RUFDSSx5QkFBQTtBQzBCSjs7QUR4QkE7RUFDSSxvQkFBQTtBQzJCSjs7QUR6QkU7RUFDSSxlQUFBO0FDNEJOOztBRDFCRTtFQUNJLG9DQUFBO0VBQ0EscUNBQUE7QUM2Qk47O0FEM0JBO0VBQ0ksbUNBQUE7RUFDQSxzQ0FBQTtBQzhCSjs7QUQ1QkE7RUFDRSxrQkFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNGLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsdUJBQUE7QUMrQkY7O0FEMUJBO0VBQ0ksMERBQUE7RUFDQSwwREFBQTtFQUVBO0lBQWUsYUFBQTtFQzZCakI7O0VEM0JFO0lBQ0ksc0JBQUE7RUM4Qk47O0VEMUJFO0lBQU8sa0JBQUE7RUM4QlQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZ3Jlc28vaW5mb3JtZS9pbmZvcm1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcclxuICAgIGZvbnQtc2l6ZToxMnB0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDpleGFjdDtcclxuICAgIGNvbG9yLWFkanVzdDpleGFjdDtcclxuICAgIGhlaWdodDogOTglO1xyXG59IFxyXG4gICAgXHJcbioge2NvbG9yOiMwMDAgIWltcG9ydGFudDsgfSBcclxuXHJcbiNjYXJ0YV9sYW5kc2NhcGV7XHJcbiAgICBtaW4td2lkdGg6IDEwNTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDU2cHggIWltcG9ydGFudDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5sb2dvMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA3My44MTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZS5UYWJsZTEge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuLmJvcmRlci1lc3B7XHJcbiBib3JkZXItc3R5bGU6IGRvdWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbiAgdGFibGUuVGFibGUxIHRkLCB0YWJsZS5UYWJsZTEgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICB9XHJcbiAgdGFibGUuVGFibGUxIHRib2R5IHRkIHtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIHRke1xyXG4gICAgd2lkdGg6IDc3LjEyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB0ZCBcclxuICB0YWJsZS5UYWJsZTEgdGhlYWQsIC50aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDhEOEQ4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50aGVhZGNsYXJve1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB0YWJsZS5UYWJsZTEgdGhlYWQgdGgsIC50aGVhZCB7XHJcbiAgICBmb250LXNpemU6IDlwdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC53aGl0ZXtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wYWRkaW5ne1xyXG4gICAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcclxuICB9XHJcbiAgLnVwcGVye1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAudGV4dC1sZWZ0e1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuICAucC0we1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAubS0we1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1sLTN7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuICAubXItM3tcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4ubWItM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLm1iLTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5ib3JkZXItYm90dG9te1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLWxlZnQtMHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLXJpZ2h0LTB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3JkZXItYm90dG9tLTB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLXRvcC0we1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci0we1xyXG4gICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubXItMXtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG59XHJcbiAgLnBhZGRpbmd0b3RhbHtcclxuICAgICAgcGFkZGluZzogMC4zcmVtO1xyXG4gIH1cclxuICAuc3BhY2V7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAwIG5vbmUgd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwIG5vbmUgd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbi5ub2JvcmRlcntcclxuICAgIGJvcmRlci10b3A6IDAgbm9uZSAgd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDAgbm9uZSB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mbGV4LWZvb3RlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAvKiBpbnZlcnQgdGhlIGRpc3BsYXkgKHNob3cvaGlkZSkgcHJvcGVydGllcyBvZiB0aGUgbWFpbiAqL1xyXG4gICAgLyogYXBsaWNhdGlvbiBjb21wb25lbnQgYW5kIHRoZSBwcmludGluZyBjb21wb25lbnQgICAgICAgKi9cclxuICAgIFxyXG4gICAgI25vcHJpbnQgPiAqIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuICAgIGZvbmRve1xyXG4gICAgICAgIG9yaWVudGF0aW9uOiBsYW5kc2NhcGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBwYWdlIHtzaXplOiBBNCBsYW5kc2NhcGV9XHJcbiAgICBcclxufSIsImh0bWwsIGJvZHkge1xuICBmb250LXNpemU6IDEycHQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgaGVpZ2h0OiA5OCU7XG59XG5cbioge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4jY2FydGFfbGFuZHNjYXBlIHtcbiAgbWluLXdpZHRoOiAxMDU1cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDU2cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDczLjgxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLlRhYmxlMSB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5ib3JkZXItZXNwIHtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGUgIWltcG9ydGFudDtcbn1cblxudGFibGUuVGFibGUxIHRkLCB0YWJsZS5UYWJsZTEgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG50YWJsZS5UYWJsZTEgdGJvZHkgdGQge1xuICBmb250LXNpemU6IDlwdDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxudGQge1xuICB3aWR0aDogNzcuMTI4cHggIWltcG9ydGFudDtcbn1cblxudGQgdGFibGUuVGFibGUxIHRoZWFkLFxuLnRoZWFkIHtcbiAgYmFja2dyb3VuZDogI0Q4RDhEOCAhaW1wb3J0YW50O1xufVxuXG4udGhlYWRjbGFybyB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWIgIWltcG9ydGFudDtcbn1cblxudGFibGUuVGFibGUxIHRoZWFkIHRoLCAudGhlYWQge1xuICBmb250LXNpemU6IDlwdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwO1xufVxuXG4udXBwZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnAtMCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tLTAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLm1sLTMge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm1yLTMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5tYi0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1iLTYge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC0wIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXJpZ2h0LTAge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS0wIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLTAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci0wIHtcbiAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1yLTEge1xuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbn1cblxuLnBhZGRpbmd0b3RhbCB7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLnNwYWNlIHtcbiAgYm9yZGVyLWxlZnQ6IDAgbm9uZSB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZSB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubm9ib3JkZXIge1xuICBib3JkZXItdG9wOiAwIG5vbmUgd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAvKiBpbnZlcnQgdGhlIGRpc3BsYXkgKHNob3cvaGlkZSkgcHJvcGVydGllcyBvZiB0aGUgbWFpbiAqL1xuICAvKiBhcGxpY2F0aW9uIGNvbXBvbmVudCBhbmQgdGhlIHByaW50aW5nIGNvbXBvbmVudCAgICAgICAqL1xuICAjbm9wcmludCA+ICoge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBmb25kbyB7XG4gICAgb3JpZW50YXRpb246IGxhbmRzY2FwZTtcbiAgfVxuXG4gIEBwYWdlIHtcbiAgICBzaXplOiBBNCBsYW5kc2NhcGU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/ingreso/informe/informe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ingreso/informe/informe.component.ts ***!
  \************************************************************/
/*! exports provided: InformeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeComponent", function() { return InformeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var InformeComponent = /** @class */ (function () {
    function InformeComponent(route, api, titleService) {
        this.route = route;
        this.api = api;
        this.titleService = titleService;
        this.orden = [];
        this.medidores = [];
        this.status = true;
    }
    InformeComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getOrden(this.id);
        this.getMedidores(this.id);
    };
    InformeComponent.prototype.getOrden = function (id) {
        var _this = this;
        this.api.certificadoOrden(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.orden = resp.data[0];
            }
        });
    };
    InformeComponent.prototype.getMedidores = function (id) {
        var _this = this;
        this.api.certificadoOrdenMedidores(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.medidores = resp.data;
                console.log(_this.medidores);
            }
        });
    };
    InformeComponent.prototype.changeTitle = function (id) {
        this.titleService.setTitle(id);
    };
    InformeComponent.prototype.print = function () {
        var titulo = "OE-LMC-" + this.orden.orden;
        this.changeTitle(titulo);
        window.print();
        this.changeTitle('ServafAPP');
    };
    InformeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    InformeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informe',
            template: __webpack_require__(/*! raw-loader!./informe.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/informe/informe.component.html"),
            styles: [__webpack_require__(/*! ./informe.component.scss */ "./src/app/pages/ingreso/informe/informe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], InformeComponent);
    return InformeComponent;
}());



/***/ }),

/***/ "./src/app/pages/ingreso/ingreso-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ingreso/ingreso-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: IngresoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoPageRoutingModule", function() { return IngresoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ingreso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingreso.page */ "./src/app/pages/ingreso/ingreso.page.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/pages/ingreso/inicio/inicio.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/pages/ingreso/nuevo/nuevo.component.ts");
/* harmony import */ var _informe_informe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informe/informe.component */ "./src/app/pages/ingreso/informe/informe.component.ts");







var routes = [
    {
        path: '',
        component: _ingreso_page__WEBPACK_IMPORTED_MODULE_3__["IngresoPage"], children: [
            {
                path: '', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__["NuevoComponent"]
            },
            {
                path: 'nuevo', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__["NuevoComponent"]
            },
            {
                path: 'consultar', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"]
            },
            {
                path: 'informe/:id', component: _informe_informe_component__WEBPACK_IMPORTED_MODULE_6__["InformeComponent"]
            }
        ]
    }
];
var IngresoPageRoutingModule = /** @class */ (function () {
    function IngresoPageRoutingModule() {
    }
    IngresoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IngresoPageRoutingModule);
    return IngresoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ingreso/ingreso.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ingreso/ingreso.module.ts ***!
  \*************************************************/
/*! exports provided: IngresoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoPageModule", function() { return IngresoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ingreso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingreso-routing.module */ "./src/app/pages/ingreso/ingreso-routing.module.ts");
/* harmony import */ var _ingreso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingreso.page */ "./src/app/pages/ingreso/ingreso.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/pages/ingreso/inicio/inicio.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/pages/ingreso/nuevo/nuevo.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _informe_informe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./informe/informe.component */ "./src/app/pages/ingreso/informe/informe.component.ts");












var IngresoPageModule = /** @class */ (function () {
    function IngresoPageModule() {
    }
    IngresoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"],
                _ingreso_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngresoPageRoutingModule"]
            ],
            declarations: [_ingreso_page__WEBPACK_IMPORTED_MODULE_6__["IngresoPage"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_8__["InicioComponent"], _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_9__["NuevoComponent"], _informe_informe_component__WEBPACK_IMPORTED_MODULE_11__["InformeComponent"]]
        })
    ], IngresoPageModule);
    return IngresoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ingreso/ingreso.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/ingreso/ingreso.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZ3Jlc28vaW5ncmVzby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ingreso/ingreso.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ingreso/ingreso.page.ts ***!
  \***********************************************/
/*! exports provided: IngresoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoPage", function() { return IngresoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IngresoPage = /** @class */ (function () {
    function IngresoPage() {
    }
    IngresoPage.prototype.ngOnInit = function () {
    };
    IngresoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingreso',
            template: __webpack_require__(/*! raw-loader!./ingreso.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/ingreso.page.html"),
            styles: [__webpack_require__(/*! ./ingreso.page.scss */ "./src/app/pages/ingreso/ingreso.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IngresoPage);
    return IngresoPage;
}());



/***/ }),

/***/ "./src/app/pages/ingreso/inicio/inicio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/ingreso/inicio/inicio.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZ3Jlc28vaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ingreso/inicio/inicio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/ingreso/inicio/inicio.component.ts ***!
  \**********************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InicioComponent = /** @class */ (function () {
    function InicioComponent(api, router) {
        this.api = api;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    InicioComponent.prototype.ngOnInit = function () { };
    InicioComponent.prototype.get = function () {
        var _this = this;
        this.api.getingresos(this.form.value).subscribe(function (resp) {
            if (resp.ok) {
                _this.ordenes = resp.data;
                console.log(_this.ordenes);
            }
        });
    };
    InicioComponent.prototype.go = function (id) {
        this.router.navigate(["/ingreso/informe/" + id]);
    };
    InicioComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/pages/ingreso/inicio/inicio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/pages/ingreso/nuevo/nuevo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/ingreso/nuevo/nuevo.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ncmVzby9udWV2by9DOlxcUHJveWVjdG9zXFxzZXJ2YWZcXHNlcnZhZmFwcC9zcmNcXGFwcFxccGFnZXNcXGluZ3Jlc29cXG51ZXZvXFxudWV2by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW5ncmVzby9udWV2by9udWV2by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZ3Jlc28vbnVldm8vbnVldm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSIsInRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ingreso/nuevo/nuevo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ingreso/nuevo/nuevo.component.ts ***!
  \********************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_modalmedidor_modalmedidor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/modalmedidor/modalmedidor.component */ "./src/app/components/modalmedidor/modalmedidor.component.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_modalclientes_modalclientes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/modalclientes/modalclientes.component */ "./src/app/components/modalclientes/modalclientes.component.ts");










var NuevoComponent = /** @class */ (function () {
    function NuevoComponent(eventos, api, modalController, aux, lc) {
        var _this = this;
        this.eventos = eventos;
        this.api = api;
        this.modalController = modalController;
        this.aux = aux;
        this.lc = lc;
        this.clientes = [];
        this.medidores = [];
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
        this.lengthOfCode = 15;
        this.usuario = [];
        this.fecha = "";
        this.subscripcion = eventos.getNewMedidor().subscribe(function (x) {
            _this.getMedidores();
        });
        this.incidencia$ = eventos.getNewClient().subscribe(function (x) {
            _this.getClientes();
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
    }
    NuevoComponent.prototype.ngOnInit = function () {
        this.getMedidores();
        this.setuser();
        this.fecha = Date.now();
        this.getClientes();
    };
    NuevoComponent.prototype.portChange = function (event) {
        console.log('port:', event.value);
    };
    NuevoComponent.prototype.launch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_modalmedidor_modalmedidor_component__WEBPACK_IMPORTED_MODULE_5__["ModalmedidorComponent"],
                            cssClass: 'large'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NuevoComponent.prototype.getClientes = function () {
        var _this = this;
        this.api.GetClientes().subscribe(function (resp) {
            if (resp.ok) {
                _this.clientes = resp.clientes;
            }
        });
    };
    NuevoComponent.prototype.getMedidores = function () {
        var _this = this;
        this.api.getMedidoresOpen().subscribe(function (resp) {
            if (resp.ok) {
                _this.medidores = resp.data;
            }
        });
    };
    NuevoComponent.prototype.setuser = function () {
        var _this = this;
        this.lc.cargarStorage('usuario').then(function (data) {
            _this.usuario = data;
        });
    };
    NuevoComponent.prototype.addcliente = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_modalclientes_modalclientes_component__WEBPACK_IMPORTED_MODULE_9__["ModalclientesComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NuevoComponent.prototype.close = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            var a = {
                a: 'ok',
                medidores: _this.medidores,
                usuario: _this.usuario._id,
                cliente: _this.form.value.cliente._id
            };
            _this.api.cerrarIngreso(a).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "La Orden ha sido agregada");
                        _this.eventos.newMedidorlert();
                        _this.getMedidores();
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
    NuevoComponent.prototype.delete = function (id) {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.DeleteMedidor(id).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Medidor ha sido Eliminado");
                        _this.eventos.newMedidorlert();
                        _this.getMedidores();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    NuevoComponent.prototype.makeRandom = function (lengthOfCode, possible) {
        var text = "";
        for (var i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    NuevoComponent.ctorParameters = function () { return [
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_2__["EventosService"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_6__["AuxService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    NuevoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nuevo',
            template: __webpack_require__(/*! raw-loader!./nuevo.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ingreso/nuevo/nuevo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo.component.scss */ "./src/app/pages/ingreso/nuevo/nuevo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_2__["EventosService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_6__["AuxService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], NuevoComponent);
    return NuevoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ingreso-ingreso-module-es5.js.map