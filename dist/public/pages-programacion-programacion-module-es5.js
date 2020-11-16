(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-programacion-programacion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/ajustes/ajustes.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/ajustes/ajustes.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item color=\"dark\">\n          <ion-label>Crear Nueva Orden de Trabajo</ion-label>\n        </ion-item>\n      </div>\n    </div>\n\n    <form [formGroup]=\"form\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">      \n          <div class=\"col-sm-4\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Consecutivo</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" formControlName=\"orden\" class=\"form-control form-control-sm\"  disabled>\n              </div>\n            </div>\n            \n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item lines=\"none\">\n              <ion-label>Supervisor</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"ordenante\">\n                <ion-select-option *ngFor=\"let u of usuarios\" [value]=\"u._id\">{{u.nombre}}  {{u.apellido}}</ion-select-option>                \n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item lines=\"none\">\n              <ion-label>Encargado</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"encargado\">\n                <ion-select-option *ngFor=\"let u of usuarios\" [value]=\"u._id\">{{u.nombre}}  {{u.apellido}}</ion-select-option>                \n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item lines=\"none\">\n              <ion-label>Tipo de Ensayo</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"ensayo\">\n                <ion-select-option value=\"1\">Calibracion</ion-select-option>\n                <ion-select-option value=\"2\">Perdida de Carga</ion-select-option>\n                <ion-select-option value=\"3\">Presion Hidroestatica</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item lines=\"none\">\n              <ion-label>Banco de Calibracion</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"banco\">\n                <ion-select-option *ngFor=\"let b of bancos\" [value]=\"b._id\">{{b.identificacion}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item lines=\"none\">\n              <ion-label>Fecha de Programacion</ion-label>\n              <ion-datetime displayFormat=\"YYYY-MM-DD\" picker-format=\"YYYY-MM-DD\" placeholder=\"Seleccione Fecha\"\n                formControlName=\"fecha_programacion\"></ion-datetime>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item lines=\"none\">\n              <ion-label>Hora de Programacion</ion-label>\n              <ion-datetime displayFormat=\"HH:mm\" picker-format=\"h:mm A\" placeholder=\"Seleccione\"\n                formControlName=\"hora_programacion\">\n              </ion-datetime>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item lines=\"none\">\n              <ion-label>Duracion estimada</ion-label>\n              <ion-input type=\"number\" required formControlName=\"duracion\"></ion-input>\n            </ion-item>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <ion-item color=\"primary\" lines=\"none\">\n              <ion-label>Parametros de Calibracion</ion-label>\n            </ion-item>        \n\n\n          </div>       \n         \n\n          <div class=\"container-fluid p-4\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8\">Numero de observaciones por medidor en cada prueba</label>\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" formControlName=\"repeticiones\" class=\"form-control\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8\">Coeficiente de expansion termico-volumetrico del material del RVM</label>\n                      <div class=\"col-sm-4 \">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"coef_rvm\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8 \">Coeficiente de expansion termico-volumetrico del agua </label>\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"coef_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8\">Compresibilidad del agua (kPa-1)</label>\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"compre_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8\">Incertidumbre de Coeficiente de expansion termico-volumetrico del material\n                        RVM</label>\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_rvm\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8\">Incertidumbre de Coeficiente de expansion termico-volumetrico del agua\n                        (C)</label>\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group row\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-8\">Incertidumbre de compresibilidad del agua (KPa) Numero de observaciones\n                        por medidor en cada prueba</label>\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"incertidumbre_compre_agua\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"row mb-5\">\n              <div class=\"col-sm-12\">\n                <ion-item button color=\"primary\" text-center (click)=\"save()\" [disabled]=\"!form.valid\">\n                  <ion-label>Guardar</ion-label>\n                </ion-item>\n              </div>\n            </div>\n\n          </div>\n\n\n\n\n\n\n        </div>\n\n      </div>\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/calibrar/calibrar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/calibrar/calibrar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item color=\"medium\">\n          <ion-label>Resumen de la Orden</ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Estado</th>\n              <th scope=\"col\">Banco de Calibracion</th>\n              <th scope=\"col\">Encargado</th>\n              <th scope=\"col\">Ordenante</th>\n              <th scope=\"col\">Fecha de Realizacion</th>\n              <th scope=\"col\">Duracion</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\">{{orden.orden}}</th>\n              <td>{{orden.status}}</td>\n              <td>{{orden.banco?.identificacion}}</td>\n              <td>{{orden.encargado?.nombre}}  {{orden.encargado?.apellido}}</td>\n              <td></td>\n              <td>{{orden.fecha_programacion | date:'yyy - MM -dd'}} {{orden.hora_programacion | date:'hh:mm ss a'}} </td>\n              <td>{{orden.duracion}} minutos</td>\n            </tr>         \n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item color=\"primary\">\n          <ion-label>Medidores Calibrados</ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-12\" *ngFor=\"let item of medidores\">\n        <app-medidor [id]=\"item\"></app-medidor>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/certificados/certificados.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/certificados/certificados.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Ordenes de Trabajo Finalizadas</ion-title>\n        </ion-toolbar>\n      </div>\n      <div class=\"col-sm-12 mb-3\">\n        <form action=\"\" [formGroup]=\"form\">\n          <ion-item>\n            <ion-label>Desde</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"inicio\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Hasta</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"fin\"></ion-datetime>\n          </ion-item>\n  \n          <ion-item button (click)=\"get()\"  color=\"primary\" text-center>\n            <ion-label>Buscar</ion-label>\n          </ion-item>\n        </form>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <div class=\"container\">\n          <ion-card text-center>\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\"># Orden</th>\n                  <th scope=\"col\">Tipo de Orden</th>\n                  <th scope=\"col\">Programada para </th>                \n                  <th scope=\"col\">Hora de Inicio</th>\n                  <th scope=\"col\">Fecha de Creacion</th>\n                  <th scope=\"col\">Descargar</th>\n                  <th scope=\"col\">Ver Orden</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ordenes\">\n                  <th scope=\"row\">{{item.orden}}</th>\n                  <td *ngIf=\"item.tipo==1\">Calibracion</td>\n                  <td *ngIf=\"item.tipo==2\">Perdida de Carga</td>\n                  <td *ngIf=\"item.tipo==3\">Presion Hidroestatica</td>\n                  <td>{{item.fecha_programacion | date:'yyyy-MM-dd'}}</td>\n                  <td>{{item.hora_programacion | date:'hh:mm ss a'}}</td>                             \n                  <td>{{item.fecha | date:'yyyy-MM-dd'}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"primary\">\n                      <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n                    </ion-button>\n                  </td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"primary\">\n                      <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>            \n              </tbody>\n            </table>        \n          </ion-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/consultar/consultar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/consultar/consultar.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row m-0 p-0\">\n      <div class=\"col-sm-12 mt-2 p-0\">\n        <ion-item color=\"primary\">\n          <ion-label>Consulte sus Ordenes de Trabajo</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mb-3\">\n        <form action=\"\" [formGroup]=\"form\">\n          <ion-item>\n            <ion-label>Desde</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"inicio\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Hasta</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"fin\"></ion-datetime>\n          </ion-item>\n  \n          <ion-item button (click)=\"get()\"  color=\"primary\" text-center>\n            <ion-label>Buscar</ion-label>\n          </ion-item>\n        </form>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <tr text-center>\n              <th scope=\"col\"># Orden</th>\n              <th scope=\"col\">Encargado</th>\n              <th scope=\"col\">Numero de Medidores</th>\n              <th scope=\"col\">Fecha de Ingreso</th>\n              <th scope=\"col\">Fecha de Programacion</th>\n              <th scope=\"col\">Descargar</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of ordenes\" text-center>\n              <th scope=\"row\">{{item.orden}}</th>\n              <td>{{item.encargado?.nombre}} {{item.encargado?.apellido}}</td>\n              <td>{{item.medidores.length}}</td>\n              <td>{{item.fecha | date:'yyyy-MM-dd' }}</td>\n              <td>{{item.fecha_programacion | date:'yyyy-MM-dd' }}</td>\n              <td>\n                <ion-button (click)=\"go(item._id)\" size=\"small\" color=\"primary\">\n                  <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n                </ion-button>\n              </td>\n            </tr>        \n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/crear/crear.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/crear/crear.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item color=\"dark\" class=\"mt-2\">\n          <ion-label>Medidores Disponibles</ion-label>\n        </ion-item>\n      </div>   \n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-12\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Serial</th>\n                <th scope=\"col\">Marca</th>\n                <th scope=\"col\">Modelo</th>\n                <!-- <th scope=\"col\">Año</th> -->\n                <th scope=\"col\">Tipo</th>\n                <th scope=\"col\">Norma</th>\n                <th scope=\"col\">Clase o Rango</th>\n                <th scope=\"col\">Diametro</th>\n                <th scope=\"col\">Apto</th>\n                <th scope=\"col\">Cliente</th>\n                <th scope=\"col\">Seleccionar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of medidores\" class=\"text-center\">\n                <th scope=\"row\">{{item.orden}}</th>\n                <td>{{item.datos.serie}}</td>\n                <td>{{item.datos.marca?.titulo}}</td>\n                <td>{{item.datos.modelo?.titulo}}</td>\n                <!-- <td>{{item.datos.fabricacion}}</td> -->\n                <td>{{item.metrologicas.principio}}</td>\n                <td>{{item.metrologicas.norma}}</td>\n                <td *ngIf=\"item.type !=='3'\">R{{item.metrologicas?.relacion}}</td>\n                <td *ngIf=\"item.type =='3'\"> {{item.metrologicas?.clase}}</td>\n                <td> {{item.metrologicas?.diametro}} </td>\n                <td *ngIf=\"item.estado=='true'\">Si</td>\n                <td *ngIf=\"item.estado=='false'\">No</td>\n                <td>{{item.cliente?.nombre}}</td>\n                <td class=\"p-0\">\n                  <ion-button (click)=\"push(item)\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item color=\"dark\" class=\"mt-2\">\n          <ion-label>Medidores Seleccionados</ion-label>\n        </ion-item>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-12\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Serial</th>\n                <th scope=\"col\">Marca</th>\n                <th scope=\"col\">Modelo</th>\n                <!-- <th scope=\"col\">Año</th> -->\n                <th scope=\"col\">Tipo</th>\n                <th scope=\"col\">Norma</th>\n                <th scope=\"col\">Clase o Rango</th>\n                <th scope=\"col\">Diametro</th>\n                <th scope=\"col\">Apto</th>\n                <th scope=\"col\">Cliente</th>\n                <th scope=\"col\">Seleccionar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of select\" class=\"text-center\">\n                <th scope=\"row\">{{item.orden}}</th>\n                <td>{{item.datos.serie}}</td>\n                <td>{{item.datos.marca?.titulo}}</td>\n                <td>{{item.datos.modelo?.titulo}}</td>              \n                <td>{{item.metrologicas.principio}}</td>\n                <td>{{item.metrologicas.norma}}</td>\n                <td *ngIf=\"item.type !=='3'\">R{{item.metrologicas?.relacion}}</td>\n                <td *ngIf=\"item.type =='3'\"> {{item.metrologicas?.clase}}</td>\n                <td> {{item.metrologicas?.diametro}} </td>\n                <td *ngIf=\"item.estado=='true'\">Si</td>\n                <td *ngIf=\"item.estado=='false'\">No</td>\n                <td>{{item.cliente?.nombre}}</td>\n                <td class=\"p-0\">\n                  <ion-button (click)=\"delete(item)\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item lines=\"none\">\n          <ion-button (click)=\"next()\" expand=\"block\" color=\"primary\" slot=\"end\" size=\"small\" *ngIf=\"select.length > 0\">\n            Siguiente\n          </ion-button>         \n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/ctrabajo/ctrabajo.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/ctrabajo/ctrabajo.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div id=\"carta_landscape\" *ngIf=\"status\">\n\n    <!--Primer tabla-->\n    <table class=\"tablasup\">\n      <tbody>\n        <tr>\n          <td colspan=\"4\" rowspan=\"3\"><img src=\"/assets/images/servaf.png\" class=\"logo1 padding-y\" alt=\"Logo de SERVAF\"></td>\n          <td colspan=\"4\" rowspan=\"3\">ORDEN DE TRABAJO</td>\n          <td class=\"text-left border-right-0\">Código:</td>\n          <td class=\"border-left-0 text-left\" colspan=\"3\">LCM-FOR-DT-059</td>\n        </tr>\n        <tr>\n          <td class=\"text-left border-right-0\">Fecha:</td>\n          <td class=\"border-left-0 text-left\" colspan=\"3\">2018 Junio 13</td>\n        </tr>\n        <tr>\n          <td class=\"text-left border-right-0\">Página:</td>\n          <td class=\"border-left-0 text-left\" colspan=\"3\">1 de 2</td>\n        </tr>\n        <tr>\n          <td class=\"border-0 padding-y\" colspan=\"12\">\n            <table class=\"mini\">\n              <tbody>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-bottom-0 white\">ESPACIO INTENCIONALMENTE EN BLANCO</td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">N° de Orden:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.orden}}</td>\n                  <td colspan=\"2\" class=\"border-0 padding-xs-y\"></td>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Encargado:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.encargado?.nombre}} {{orden.encargado?.apellido}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Creador:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.ordenante?.nombre}} {{orden.ordenante?.apellido}}</td>\n                  <td colspan=\"2\" class=\"border-0 padding-xs-y\"></td>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Inicio programado:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.fecha_programacion | date:'yyyy /MM /dd'}}: {{orden.hora_programacion | date:'hh:mm'}} </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Fecha de elaboración:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.fecha | date:'yyyy /MM /dd'}}\n                    16:40</td>\n                  <td colspan=\"2\" class=\"border-0 padding-xs-y\"></td>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Duración estimada:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.duracion}} minutos\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Tipo de ensayo:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">Calibración\n                  </td>\n                  <td colspan=\"2\" class=\"border-0 padding-xs-y\"></td>\n                  <td colspan=\"2\" class=\"border-0 text-left padding-xs-y\">Banco de calibración:</td>\n                  <td colspan=\"3\"\n                    class=\"border-right-0 border-left-0 border-top-0 border-bottom text-left padding-xs-y\">{{orden.banco?.identificacion}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-bottom-0 upper text-left\" style=\"padding: 10px 0 10px 0;\">\n                    MEDIDORES</td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-top-0 border-bottom-0 white\">ESPACIO INTENCIONALMENTE EN\n                    BLANCO</td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-top-0 border-bottom-0\">\n                    <table class=\"mini2\">\n                      <tbody>\n                        <tr>\n                          <td class=\"padding-y\">Consecutivo</td>\n                          <td class=\"padding-y\">Número de serie</td>\n                          <td class=\"padding-y\">Orden de entrada</td>\n                        </tr>\n                        <tr *ngFor=\"let item of medidores\">\n                          <td class=\"padding-xs-y\">{{item.orden}}</td>\n                          <td class=\"padding-xs-y\">{{item.datos?.serie}}</td>\n                          <td class=\"padding-xs-y\">{{item.orden_entrada?.orden}}</td>\n                        </tr>                \n                      </tbody>\n                    </table>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-bottom-0 upper text-left\" style=\"padding: 20px 0 10px 0;\">\n                    INSTRUMENTOS</td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-top-0 border-bottom-0\">\n                    <table class=\"mini3\">\n                      <tbody>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-y\"><b>Prueba Caudal Minimo </b> </td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Serial</b></td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Indicador</b></td>\n                          <td colspan=\"3\" class=\"padding-y\"><b>Certificado calibración</b></td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Fecha calibración</b></td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_caudal.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_caudal.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_caudal.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_caudal.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_caudal.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_humedad.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_humedad.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_humedad.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_humedad.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_humedad.fecha_calibracion}}</td>\n                        </tr>     \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_presion_entrada.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_presion_entrada.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_presion_entrada.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_presion_entrada.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_presion_entrada.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_presion_salida.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_presion_salida.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_presion_salida.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_presion_salida.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_presion_salida.fecha_calibracion}}</td>\n                        </tr>    \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_rvm.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_rvm.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_rvm.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_rvm.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_rvm.fecha_calibracion}}</td>\n                        </tr>  \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_t_entrada_agua.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_t_entrada_agua.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_t_entrada_agua.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_t_entrada_agua.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_t_entrada_agua.fecha_calibracion}}</td>\n                        </tr>   \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_temp_ambiente.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_temp_ambiente.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_temp_ambiente.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_temp_ambiente.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_temp_ambiente.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q1_temprvm.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q1_temprvm.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_temprvm.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q1_temprvm.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q1_temprvm.fecha_calibracion}}</td>\n                        </tr>\n                                                     \n                      </tbody>\n                    </table>      \n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-top-0 border-bottom-0\">\n                    <table class=\"mini3\">\n                      <tbody>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-y\"> <b> Prueba Caudal de Transicion </b> </td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Serial</b></td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Indicador</b></td>\n                          <td colspan=\"3\" class=\"padding-y\"><b>Certificado calibración</b></td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Fecha calibración</b></td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_caudal.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_caudal.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_caudal.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_caudal.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_caudal.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_humedad.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_humedad.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_humedad.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_humedad.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_humedad.fecha_calibracion}}</td>\n                        </tr>     \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_presion_entrada.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_presion_entrada.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_presion_entrada.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_presion_entrada.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_presion_entrada.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_presion_salida.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_presion_salida.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_presion_salida.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_presion_salida.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_presion_salida.fecha_calibracion}}</td>\n                        </tr>    \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_rvm.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_rvm.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_rvm.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_rvm.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_rvm.fecha_calibracion}}</td>\n                        </tr>  \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_t_entrada_agua.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_t_entrada_agua.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_t_entrada_agua.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_t_entrada_agua.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_t_entrada_agua.fecha_calibracion}}</td>\n                        </tr>   \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_temp_ambiente.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_temp_ambiente.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_temp_ambiente.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_temp_ambiente.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_temp_ambiente.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q2_temprvm.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q2_temprvm.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_temprvm.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q2_temprvm.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q2_temprvm.fecha_calibracion}}</td>\n                        </tr>               \n                      </tbody>\n                    </table>      \n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"12\" class=\"border-0 border-top-0 border-bottom-0\">\n                    <table class=\"mini3\">\n                      <tbody>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-y\"> <b>Prueba Caudal Nominal </b>  </td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Serial</b></td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Indicador</b></td>\n                          <td colspan=\"3\" class=\"padding-y\"><b>Certificado calibración</b></td>\n                          <td colspan=\"2\" class=\"padding-y\"><b>Fecha calibración</b></td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_caudal.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_caudal.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_caudal.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_caudal.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_caudal.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_humedad.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_humedad.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_humedad.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_humedad.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_humedad.fecha_calibracion}}</td>\n                        </tr>     \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_presion_entrada.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_presion_entrada.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_presion_entrada.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_presion_entrada.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_presion_entrada.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_presion_salida.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_presion_salida.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_presion_salida.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_presion_salida.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_presion_salida.fecha_calibracion}}</td>\n                        </tr>    \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_rvm.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_rvm.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_rvm.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_rvm.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_rvm.fecha_calibracion}}</td>\n                        </tr>  \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_t_entrada_agua.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_t_entrada_agua.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_t_entrada_agua.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_t_entrada_agua.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_t_entrada_agua.fecha_calibracion}}</td>\n                        </tr>   \n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_temp_ambiente.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_temp_ambiente.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_temp_ambiente.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_temp_ambiente.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_temp_ambiente.fecha_calibracion}}</td>\n                        </tr>\n                        <tr>\n                          <td colspan=\"3\" class=\"padding-xs-y italic\">{{q3_temprvm.patron}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y upper\">{{q3_temprvm.codigo}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_temprvm.escalas}}</td>\n                          <td colspan=\"3\" class=\"padding-xs-y upper\">{{q3_temprvm.certificado}}</td>\n                          <td colspan=\"2\" class=\"padding-xs-y\">{{q3_temprvm.fecha_calibracion}}</td>\n                        </tr>             \n                      </tbody>\n                    </table>      \n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-footer m-0 p-0\" style=\"font-size: 9pt; text-align: center;\">\n      <table class=\"footer\">\n        <tbody>\n          <tr>\n            <td class=\"thead upper padding-y thead\">ELABORÓ</td>\n            <td class=\"thead upper padding-y thead\">REVISÓ</td>\n            <td class=\"thead upper padding-y thead\">APROBÓ</td>\n            <td class=\"thead upper padding-y thead\">VERSIÓN</td>\n          </tr>\n          <tr>\n            <td class=\"padding-xs-y upper\">LUIS HERNÁN DURÁN GARCÍA</td>\n            <td class=\"padding-xs-y upper\">EDGAR FERNANDO LOZANO CALDERÓN</td>\n            <td class=\"padding-xs-y upper\">ALVARO TORRES CADENA</td>\n            <td class=\"padding-xs-y upper\" rowspan=\"2\">2</td>\n          </tr>\n          <tr>\n            <td class=\"padding-xs-y upper\">COORDINADOR LABORATORIO CALIBRACIÓN<br> DE MEDIDORES</td>\n            <td class=\"padding-xs-y upper\">DIRECTOR DE PLANEACIÓN Y CALIDAD</td>\n            <td class=\"padding-xs-y upper\">GERENTES (S)</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"row\" id=\"noprint\">\n  <div class=\"col-sm-12\">\n    <ion-button (click)=\"print()\" expand=\"block\"  shape=\"round\" color=\"primary\">\n      Imprimir\n    </ion-button>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/editarmedidor/editarmedidor.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/editarmedidor/editarmedidor.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"form\" class=\"mb-4\">\n    <div class=\"container-fluid m-0 p-4\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"m-0 p-0\">\n            <ion-item color=\"primary\" lines=\"none\">\n              <ion-label class=\"list-ios\" style=\"margin: 0px !important;\">Informacion General</ion-label>\n            </ion-item>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\"> \n            <ion-label>Cliente</ion-label>\n            <ion-select placeholder=\"Seleccione\" formControlName=\"cliente\">\n              <ion-select-option *ngFor=\"let a of clientes\" [value]=\"a._id\">{{a.nombre}}</ion-select-option>            \n            </ion-select>\n          </ion-item>\n        </div>     \n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">Año de Fabricacion</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"number\" formControlName=\"fabricacion\" class=\"form-control\">\n            </div>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>Marca Comercial</ion-label>      \n              <ion-select placeholder=\"Seleccione\" formControlName=\"marca\">\n                <ion-select-option *ngFor=\"let a of marcas\" [value]=\"a._id\">{{a.titulo}}</ion-select-option>            \n              </ion-select>\n            <ion-button (click)=\"addMarca()\" expand=\"block\" shape=\"round\">\n              Otro\n            </ion-button>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>Modelo</ion-label>\n            <ion-select placeholder=\"Seleccione\" formControlName=\"modelo\">\n              <ion-select-option *ngFor=\"let a of modelos\" [value]=\"a._id\">{{a.titulo}}</ion-select-option>            \n            </ion-select>\n            <ion-button (click)=\"addModelo()\" expand=\"block\" shape=\"round\">\n              Otro\n            </ion-button>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">Numero de Serie.</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"text\" formControlName=\"serie\" class=\"form-control\">\n            </div>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">Lectura de Entrada.</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"number\" formControlName=\"entrada\" class=\"form-control\">\n            </div>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <div class=\"form-row\">\n              <div class=\"col-sm-9\">\n                <ion-item lines=\"none\">\n                  <ion-label>Incidencias</ion-label>\n                  <ion-select multiple=\"true\" cancelText=\"Cancel\" okText=\"Ok\" formControlName=\"incidencias\">\n                    <ion-select-option *ngFor=\"let d of incidencias\" [value]=\"d.titulo\">{{d.titulo}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n              <div class=\"col-sm-3\">\n                <ion-button (click)=\"addIncidencia()\" expand=\"block\" shape=\"round\" slot=\"end\" size=\"small\" class=\"mt-3\">\n                  Otro\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>Apto para calibrar</ion-label>\n            <ion-select placeholder=\"Select One\" formControlName=\"estado\">\n              <ion-select-option value=\"true\">Apto</ion-select-option>\n              <ion-select-option value=\"false\">No Apto</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n      </div>\n   \n      <div class=\"col-sm-12 mt-2\">\n        <ion-item button (click)=\"crear()\" [disabled]=\"!form.valid\" color=\"primary\" text-center>\n          <ion-label>Actualizar Medidor</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  editarmetrologicas works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"form\" class=\"mb-4\">\n    <div class=\"container-fluid m-0 p-4\" *ngIf=\"state\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <ion-item color=\"primary\" lines=\"none\">\n            <ion-label class=\"list-ios\" style=\"margin: 0px !important;\">Informacion Tecnica</ion-label>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>1.Norma de Referencia</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"norma\"\n              (ionChange)=\"setNorma($event.target.value)\">\n              <ion-select-option *ngFor=\"let n of normas\" [value]=\"n.norma\">{{n.norma}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>2.Caudal permanente [m3/h]</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"q3\">\n              <ion-select-option *ngFor=\"let f of norma.caudal\" [value]=\"f\">{{f}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        \n\n        <div class=\"col-sm-12\" *ngIf=\"uno\">\n          <ion-item lines=\"none\">\n            <ion-label>3.Clase de Precision</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"precision\">\n              <ion-select-option *ngFor=\"let p of norma.precision\" [value]=\"p\">{{p}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"!tres\">\n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">4.Presion máxima permisible [bar]</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"number\" formControlName=\"pmaxp\" class=\"form-control\" id=\"exampleInputEmail1\" value=\"10\"\n                aria-describedby=\"emailHelp\">\n            </div>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>5.Pérdida de presion [bar]</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"pperdida\">\n              <ion-select-option *ngFor=\"let pp of norma.ppresion\" [value]=\"pp\">{{pp}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"!tres\" >\n          <ion-item lines=\"none\">\n            <ion-label>6.Rango de medicion (Q3/Q1)</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"q3q1\">\n              <ion-select-option *ngFor=\"let r of norma.rango\" [value]=\"r\">{{r}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"!tres\" >\n          <ion-item lines=\"none\">\n            <ion-label>7.Q2/Q1</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"q2q1\">\n              <ion-select-option value=\"1.6\">1.6</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"!tres\">\n          <ion-item lines=\"none\">\n            <ion-label>8.Clase de Temperatura</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"clasetemp\">\n              <ion-select-option *ngFor=\"let t of norma.temp\" [value]=\"t\">{{t}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"uno\" >\n          <ion-item lines=\"none\">\n            <ion-label>9.Sensibilidad aguas arriba</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"aguasarriba\">\n              <ion-select-option *ngFor=\"let wa of norma.swa\" [value]=\"wa\">{{wa}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"uno\">\n          <ion-item lines=\"none\">\n            <ion-label>10.Sensibilidad aguas abajo</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"aguasabajo\">\n              <ion-select-option *ngFor=\"let wd of norma.swd\" [value]=\"wd\">{{wd}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"tres\">\n          <ion-item lines=\"none\">\n            <ion-label>11.Identificador [ N ( m3/h) ]</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"identificador\">\n              <ion-select-option *ngFor=\"let f of norma.caudal\" [value]=\"f\">{{f}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"tres\">\n          <ion-item lines=\"none\">\n            <ion-label>12.Clase Metrologica</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"clase\">\n              <ion-select-option *ngFor=\"let c of clase\" [value]=\"c\">{{c}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\" *ngIf=\"tres\">        \n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">13.Presion Nominal [bar]</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"number\" formControlName=\"pnominal\" class=\"form-control\" id=\"exampleInputEmail1\" value=10\n                aria-describedby=\"emailHelp\">\n            </div>\n          </ion-item>\n        </div>\n\n\n\n\n        <div class=\"col-sm-12\">\n          <ion-item color=\"primary\" lines=\"none\">\n            <ion-label class=\"list-ios\" style=\"margin: 0px !important;\">Informacion Metrologica</ion-label>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>8.Tipo de Indicador</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo\">\n              <ion-select-option *ngFor=\"let item of ind\" [value]=\"item\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>9.Principio Fisico</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"principio\">\n              <ion-select-option *ngFor=\"let item of prf\" [value]=\"item\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>10.Posicion</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"posicion\">\n              <ion-select-option *ngFor=\"let item of pos\" [value]=\"item\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">11 Diametro Nominal [mm].</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"number\" formControlName=\"diametro\" class=\"form-control\" aria-describedby=\"emailHelp\">\n            </div>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <ion-label>12.Rango [m3]</ion-label>\n            <ion-select placeholder=\"Seleccione Una\" formControlName=\"rango\">\n              <ion-select-option *ngFor=\"let item of rg\" [value]=\"item.value\">{{item.titulo}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div class=\"col-sm-12\">\n          <ion-item lines=\"none\">\n            <label class=\"col-sm-6 mt-2 ml-0 p-0\">13.Division de escala [l]</label>\n            <div class=\"col-sm-6 mt-1\">\n              <input type=\"number\" formControlName=\"escala\" class=\"form-control\">\n            </div>\n          </ion-item>\n        </div>\n      </div>\n   \n      <div class=\"col-sm-12 mt-2\">\n        <ion-item button (click)=\"crear()\" [disabled]=\"!form.valid\" color=\"primary\" text-center>\n          <ion-label>Actualizar Medidor</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/finales/finales.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/finales/finales.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form action=\"\" [formGroup]=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ion-item lines=\"none\">\n          <ion-label>Prueba {{tipo}} </ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-6\">\n        <!-- <ion-item lines=\"none\">\n          <ion-label>Repeticion No {{rp}} </ion-label>              \n        </ion-item> -->\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"text-center\">\n          <ion-text color=\"primary\">\n            <h4>Defina condiciones Finales</h4>\n          </ion-text>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp. Ambiente</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temp\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Humedad. Relativa</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"humedad\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"save()\" [disabled]=\"!form.valid\">\n          <ion-label>Guardar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/generar/generar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/generar/generar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\" id=\"noprint\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div>\n          <div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"container\">\n              <h1 class=\"display-4\">Certificado Generado con exito !!</h1>\n              <p class=\"lead\">Descargue de nuevo el certificado</p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-sm-12 mt-5 mb-5\" id=\"noprint\">\n        <ion-item color=\"primary\" id=\"noprint\">\n          <ion-button (click)=\"print()\" expand=\"block\" slot=\"end\" color=\"light\" id=\"noprint\">\n            Imprimir\n          </ion-button>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content> \n\n<div id=\"print\" *ngIf=\"ready\"  [ngClass]=\"{'derogado':item.derogado==='true'}\"  >\n  <div class=\"encabezado\" style=\"background: #ffff;\">\n    <div class=\"membreteL ml-2\">\n      LABORATORIO CALIBRACIÓN DE MEDIDORES <br>\n      EMPRESA DE SERVICIOS DE FLORENCIA S.A. E.S. <br>\n      SERVAF S.A. E.S.P. <br>\n      N.I.T.: 800.169.470-7\n    </div>\n    <div class=\"logo1\">\n      <img src=\"/assets/images/servaf.jpg\" style=\"width: 90px; margin-right: 1rem;\" alt=\"Logo de Servaf S.A. E.S.\">\n    </div>\n    <div class=\"logo2 mr-1\">\n      <img src=\"/assets/images/onac.png\" style=\"width: 119px;\" alt=\"Logo de ONAC, Organismo de Acreditación.\">\n    </div>\n  </div>\n\n \n\n  <div class=\"contenido all blanco\">\n    <table class=\"Table1 all\">\n      <thead>\n        <tr>\n          <th style=\"background-color: white; border: 0;\" colspan=\"2\"></th>\n          <th colspan=\"3\" class=\"thead\">CERTIFICADO DE CALIBRACIÓN N°</th>\n          <th colspan=\"3\" style=\"background-color: white; color: #00305F !important;\">{{item.year}}-{{item.consecutivo}}\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">DATOS DEL SOLICITANTE</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" class=\"thead\">NOMBRE SOLICITANTE</td>\n          <td colspan=\"4\" class=\"upper\">{{item.cliente?.nombre}}</td>\n          <td class=\"thead\">FECHA DE EMISIÓN</td>\n          <td>{{trabajo.fecha | date:'yyyy-MM-dd'}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" class=\"thead\">DIRECCIÓN SOLICITANTE</td>\n          <td colspan=\"2\">{{item.cliente?.direccion}}</td>\n          <td class=\"thead\">FECHA DE RECEPCIÓN</td>\n          <td>{{entrada.fecha | date:'yyyy-MM-dd'}}</td>\n          <td class=\"thead\">FECHA DE CALIBRACIÓN</td>\n          <td>{{trabajo.fecha | date:'yyyy-MM-dd'}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" class=\"thead\">N.I.T., R.U.T., C.C</td>\n          <td colspan=\"2\">{{item.cliente?.numero}}</td>\n          <td class=\"thead\">INSTRUMENTO A CALIBRAR</td>\n          <td colspan=\"3\">Medidor de agua potable fría</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">DESCRIPCIÓN DEL INSTRUMENTO A CALIBRAR</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">Serie</td>\n          <td colspan=\"2\">Marca</td>\n          <td>Modelo</td>\n          <td>Tipo</td>\n          <td>Clase Pr.</td>\n          <td>Año Fabr.</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">{{item.datos?.serie}}</td>\n          <td colspan=\"2\" class=\"upper\">{{item.datos.marca?.titulo}}</td>\n          <td class=\"upper\">{{item.datos.modelo?.titulo}}</td>\n          <td>{{item.metrologicas?.principio}}</td>\n          <td *ngIf=\"item.type !=='3'\">{{item.metrologicas?.precision}}</td>\n          <td *ngIf=\"item.type =='3'\">NA</td>\n          <td>{{item.datos.fabricacion}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">Q3 (m3/h)</td>\n          <td colspan=\"2\">Capacidad máx. escala (m3)</td>\n          <td>Div Min Escala (I)</td>\n          <td>DN (mm)</td>\n          <td colspan=\"2\">Rango Medición</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">{{item.metrologicas?.q3 | number:'1.0-2'}}</td>\n          <td colspan=\"2\">{{item.metrologicas?.rango}}</td>\n          <td>{{item.metrologicas?.escala | number:'1.0-2'}}</td>\n          <td>{{item.metrologicas?.diametro | number:'1.0-2'}}</td>\n          <td colspan=\"2\" *ngIf=\"item.type !=='3'\">R{{rango}}</td>\n          <td colspan=\"2\" *ngIf=\"item.type =='3'\" >NA</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">Lectura entrada</td>\n          <td colspan=\"2\" *ngIf=\"item.type !== '3'\">Clase de temperatura</td>\n          <td colspan=\"2\" *ngIf=\"item.type=='3'\">Clase M.</td>\n          <td colspan=\"2\">Clase de sensibilidad de flujo</td>\n          <td colspan=\"2\">Norma estándar</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" class=\"upper\">{{item.datos.lectura}}</td>\n          <td colspan=\"2\" class=\"upper\" *ngIf=\"item.type !=='3'\">{{item.metrologicas?.clasetemp || \"NA\"}}</td>\n          <td colspan=\"2\" class=\"upper\" *ngIf=\"item.type=='3'\">{{item.metrologicas?.clase}}</td>\n          <td colspan=\"2\" class=\"upper\" *ngIf=\"item.type !=='3'\">{{item.metrologicas?.aguasarriba || \"NA\"}} /\n            {{item.metrologicas?.aguasabajo || \"NA\"}}</td>\n          <td colspan=\"2\" class=\"upper\" *ngIf=\"item.type =='3'\">NA</td>\n\n          <td colspan=\"2\" class=\"upper\">{{item.metrologicas?.norma}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">TRAZABILIDAD</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"text-left\" style=\"padding: 0.3rem;font-size: 11px;\">Los patrones utilizados en la calibración de los\n            medidores de agua están trazados a patrones nacionales e internacionales de las magnitudes respectivas. Los\n            cuales se relacionan a continuación al Sistema Internacional.</td>\n        </tr>\n        <tr class=\"all\">\n          <td colspan=\"2\">Patrón</td>\n          <td>Código Patrón</td>\n          <td colspan=\"2\">Certificado de Calibración</td>\n          <td>Fecha de Calibración</td>\n          <td colspan=\"2\">Fuente de Trazabilidad</td>\n        </tr>\n        <tr *ngFor=\"let c of instrumentos\">\n          <td colspan=\"2\" class=\"upper\">{{c.patron}}</td>\n          <td class=\"upper\">{{c.codigo}}</td>\n          <td colspan=\"2\" class=\"upper\">{{c.certificado}}</td>\n          <td class=\"upper\">{{c.fecha_calibracion | date:'yyyy-MM-dd'}}</td>\n          <td colspan=\"2\" class=\"upper\">{{c.fuente}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">MÉTODO DE CALIBRACIÓN</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"text-left\" style=\"padding: 0.3rem;\">\n            El método empleado es la recolección del volumen indicado en el medidor con el volumen indicado\n            por un recipiente volumétrico, tomado como patrón, de conformidad con el numeral 7.4.2.1 de la norma\n            NTC-ISO 4064-2:2016.\n            El error relativo es la diferencia entre el volumen registrado en el medidor y el volumen medido en el\n            recipiente volumétrico patrón de trabajo.\n            <div class=\"flex-calibracion\" style=\"margin-top: 0.3rem;\">\n              <img src=\"/assets/images/formula1.png\" alt=\"Imagen de Fórmula de Calibración\">\n              <div class=\"ml-3\">Donde:\n                <p class=\"text-left m-0 p-0\">Vi = Volumen registrado en el medidor como la diferencia entre el volumen\n                  inicial y final.</p>\n                <p class=\"text-left m-0 p-0\">Va = Volumen medido en el recipiente volumétrico patrón.</p>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">CONDICIONES DURANTE LA CALIBRACIÓN</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"space\">\n            <p class=\"p-0 m-0 text-left\" style=\"padding: 0.3rem;\">\n              Las condiciones ambientales y la temperatura del agua del laboratio durante la calibración fueron las\n              siguientes:\n            </p>\n            <table class=\"Table1\">\n              <tbody>\n                <tr>\n                  <td class=\"mini border-0\"></td>\n                  <td class=\"mini minithead\" colspan=\"3\">Caudal (l/h)</td>\n                  <td class=\"mini minithead\" colspan=\"3\">Presión de Entrada (kPa)</td>\n                  <td class=\"mini minithead\" colspan=\"3\">Presión de Salida (kPa)</td>\n                  <td class=\"mini minithead\" colspan=\"3\">Temperatura Línea (°C)</td>\n                  <td class=\"mini minithead\" colspan=\"3\">Temperatura RVM (°C)</td>\n                </tr>\n                <tr>\n                  <td class=\"mini border-0\"></td>\n                  <td class=\"mini minithead\">Mínimo</td>\n                  <td class=\"mini minithead\">Máximo</td>\n                  <td class=\"mini minithead\">Promedio</td>\n                  <td class=\"mini minithead\">Mínimo</td>\n                  <td class=\"mini minithead\">Máximo</td>\n                  <td class=\"mini minithead\">Promedio</td>\n                  <td class=\"mini minithead\">Mínimo</td>\n                  <td class=\"mini minithead\">Máximo</td>\n                  <td class=\"mini minithead\">Promedio</td>\n                  <td class=\"mini minithead\">Mínimo</td>\n                  <td class=\"mini minithead\">Máximo</td>\n                  <td class=\"mini minithead\">Promedio</td>\n                  <td class=\"mini minithead\">Mínimo</td>\n                  <td class=\"mini minithead\">Máximo</td>\n                  <td class=\"mini minithead\">Promedio</td>\n                </tr>\n                <tr>\n                  <td class=\"mini\">Q1</td>\n                  <td class=\"mini\">{{datos.caudalq1_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq1_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq1_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq1_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq1_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq1_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq1_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq1_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq1_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq1_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq1_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq1_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq1_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq1_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq1_pro | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                  <td class=\"mini\">Q2</td>\n                  <td class=\"mini\">{{datos.caudalq2_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq2_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq2_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq2_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq2_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq2_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq2_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq2_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq2_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq2_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq2_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq2_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq2_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq2_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq2_pro | number:'1.2-2' }}</td>\n                </tr>\n                <tr>\n                  <td class=\"mini\">Q3</td>\n                  <td class=\"mini\">{{datos.caudalq3_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq3_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq3_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq3_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq3_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq3_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq3_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq3_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq3_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq3_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq3_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq3_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq3_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq3_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq3_pro | number:'1.2-2' }}</td>\n                </tr>\n                <tr *ngIf=\"q4.length>0\">\n                  <td class=\"mini\">Q4</td>\n                  <td class=\"mini\">{{datos.caudalq4_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq4_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.caudalq4_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq4_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq4_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.pentradaq4_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq4_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq4_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.psalidaq4_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq4_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq4_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.tlineaq4_pro | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq4_min | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq4_max | number:'1.2-2' }}</td>\n                  <td class=\"mini\">{{datos.trvmq4_pro | number:'1.2-2' }}</td>\n                </tr>\n\n             \n\n              </tbody>\n            </table>\n            <div class=\"flex-calibracion\" style=\"margin-top: 0.3rem; font-size: 8pt;\">\n              <table class=\"TableMini\">\n                <tbody>\n                  <tr>\n                    <td class=\"mini2\"></td>\n                    <td class=\"mini2\">Humedad<br>relativa (%)</td>\n                    <td class=\"mini2\">Temperatura<br>ambiente (°C)</td>\n                  </tr>\n                  <tr>\n                    <td class=\"mini2\">Mínimo</td>\n                    <td class=\"mini2\">{{datos.humedad_min | number:'1.2-2'}}</td>\n                    <td class=\"mini2\">{{datos.tem_amb_min | number:'1.1-2'}}</td>\n                  </tr>\n                  <tr>\n                    <td class=\"noborder mini2\">Máximo</td>\n                    <td class=\"noborder mini2\">{{datos.humedad_max | number:'1.2-2'}}</td>\n                    <td class=\"noborder mini2\">{{datos.tem_amb_max | number:'1.1-2'}}</td>\n                  </tr>\n                  <tr>\n                    <td class=\"mini2\">Promedio</td>\n                    <td class=\"mini2\">{{datos.humedad_pro | number:'1.2-2'}}</td>\n                    <td class=\"mini2\">{{datos.tem_amb_pro | number:'1.1-1'}}</td>\n                  </tr>\n                </tbody>\n              </table>\n              <div style=\"margin-left: 0.3rem;\">\n                <p class=\"text-left m-0 p-0\">\n                  Este certificado expresa el resultado de las mediciones realizadas. No podrá ser reproducido total o\n                  parcialmente\n                  excepto cuando se haya obtenido previamente permiso por escrito del Laboratorio que lo emite.\n                </p>\n                <p class=\"text-left m-0 p-0\">\n                  Los resultados contenidos en el siguiente certificado se refieren al momento y condiciones en que se\n                  realizaron las mediciones. El laboratorio que lo emite no se responsabiliza de los perjuicios que\n                  puedan\n                  derivarse del uso inadecuado de los instrumentos calibrados.\n                </p>\n                <p class=\"text-left m-0 p-0\">\n                  El laboratorio no se responsabiliza de la información suministrada por el cliente (Dirección y NIT).\n                  El medidor bajo calibración no fue objeto de muestreo por parte de este laboratorio, el ítem fue\n                  calibrado\n                  tal como se recibió.\n                </p>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">INCERTIDUMBRE DE LA MEDICIÓN</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"text-left\" style=\"padding: 0.3rem;\">\n            La incertidumbre reportada es la estándar compuesta multiplicada por el factor de cubrimiento K = 2,\n            con el cual se logró una distribución normal y un nivel de confianza de aproximadamente 95%.\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"thead\">RESULTADOS DE LA CALIBRACIÓN</td>\n        </tr>\n        <tr>\n          <td>Prueba</td>\n          <td>Caudal de Prueba (l/h) Promedio</td>\n          <td>Volumen Medidor (Vi) Promedio</td>\n          <td>Volumen Real (Va) Promedio</td>\n          <td>Error Promedio (%)</td>\n          <td>Incertidumbre Expandida (%)</td>\n          <td>EMP + / -</td>\n          <td>Factor de Cubrimiento K</td>\n        </tr>\n        <tr>\n          <td>{{item.q1_resultados.prueba}}</td>\n          <td>{{item.q1_resultados.nominal  }}</td>\n          <td>{{item.q1_resultados.Dvx }}</td>\n          <td>{{item.q1_resultados.vx }}</td>\n          <td>{{item.q1_resultados.Error_promedio }}</td>\n          <td>{{item.q1_resultados.Ue }}</td>\n          <td>5</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>{{item.q2_resultados.prueba}}</td>\n          <td>{{item.q2_resultados.nominal   }}</td>\n          <td>{{item.q2_resultados.Dvx }}</td>\n          <td>{{item.q2_resultados.vx }}</td>\n          <td>{{item.q2_resultados.Error_promedio }}</td>\n          <td>{{item.q2_resultados.Ue }}</td>\n          <td>2</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>{{item.q3_resultados.prueba}}</td>\n          <td>{{item.q3_resultados.nominal   }}</td>\n          <td>{{item.q3_resultados.Dvx }}</td>\n          <td>{{item.q3_resultados.vx }}</td>\n          <td>{{item.q3_resultados.Error_promedio }}</td>\n          <td>{{item.q3_resultados.Ue }}</td>\n          <td>2</td>\n          <td>2</td>\n        </tr>\n        <tr *ngIf=\"q4.length>0\">\n          <td>{{item.q4_resultados.prueba}}</td>\n          <td>{{item.q4_resultados.nominal   }}</td>\n          <td>{{item.q4_resultados.Dvx }}</td>\n          <td>{{item.q4_resultados.vx }}</td>\n          <td>{{item.q4_resultados.Error_promedio }}</td>\n          <td>{{item.q4_resultados.Ue }}</td>\n          <td>2</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"paddingtotal text-left\">\n            <p class=\"m-0 p-0\">\n              <sup class=\"mr-1\">1</sup>\n              Q1 o Qmin caudal mínimo, Q2 o Qt caudal transición, Q3 o Qp caudal permanente;\n              estas definiciones corresponden a los numerales 3.3.2, 3.3.3, 3.3.4 y 3.3.5 de\n              la NTC-ISO 4064-1:2016.\n            </p>\n            <p class=\"m-0 p-0\">\n              <sup class=\"mr-1\">2</sup>\n              El error máximo permisible corresponde al establecido con el cliente en la revisión del contrato.\n            </p>\n            <p class=\"m-0 p-0\">\n              <sup class=\"mr-1\">3</sup>\n              Los datos reportados en la sección de RESULTADOS DE LA CALIBRACIÓN son el resultado de tres repeticiones\n              por\n              caudal.\n            </p>\n          </td>\n        </tr>     \n        <tr>\n          <td colspan=\"8\" class=\"thead\">FIRMAS AUTORIZADAS</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\" class=\"border-0\">\n            <div class=\"flex-firma\">\n              <p class=\"mb-6\">Calibró:</p>\n              <p class=\"border-top ml-3 mr-3 mt-2 mb-1\">{{item.calibro?.nombre}} {{item.calibro?.apellido}}<br>{{item.calibro?.cargo}}</p>\n            </div>\n          </td>\n          <td colspan=\"4\" class=\"border-0\">\n            <div class=\"flex-firma\">\n              <p class=\"mb-6\">Revisó y aprobó:</p>\n              <p class=\"border-top ml-3 mr-3 mt-2 mb-1\">{{item.ingreso?.nombre}} {{item.ingreso?.apellido}}<br>{{item.ingreso?.cargo}}</p>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"8\" class=\"border-0 upper\">- FIN DEL CERTIFICADO -</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr>\n          <td class=\"border-0\">\n            <p>Página 1 de 1</p>\n          </td>\n          <td colspan=\"6\" class=\"border-0\">\n            <p class=\"text-center\" style=\"margin-left: 20px;\">SERVAF S.A. E.S.P.<br>Carrera 9 Calle 27 Esquina Estación Torasso<br>Teléfono 435-1268 Ext.: 206</p>\n          </td>\n          <td class=\"border-0\">\n            <p>LCM-FOR-014  <br> Versión 9</p>\n          </td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n\n  <!-- <div class=\"flex-footer m-0 p-0 all\" style=\"margin-left: 15px; font-size: 9pt; text-align: center;\">\n    <p>Página 1 de 1</p>\n    <p class=\"ml-2\">SERVAF S.A. E.S.P.<br>Carrera 9 Calle 27 Esquina Estación Torasso<br>Teléfono 435-1268 Ext.: 206</p>\n    <p>LCM-FOR-014 - Versión 9</p>\n  </div> -->\n  <div class=\"text-center mb-3 p-0 all\" *ngIf=\"item?.derogado=='true'\">\n    <div style=\"font-size: 13px;\">\n      <p scope=\"col\"><b class=\"text-danger\">Este certificado de No:</b><b class=\"text-black\"> {{item.year}}-{{item.consecutivo}} </b> <b class=\"text-danger\"> Ha sido reemplazado por el certificado No:</b> \n      <b class=\"text-black\">{{item.oldcertificado}}</b> </p>         \n    </div>\n  </div>\n  <div class=\"text-center mb-1 p-0 all\" *ngIf=\"item?.derogado=='false' && item?.oldcertificado\">\n    <div style=\"font-size: 13px;\">\n      <p scope=\"col\"><b class=\"text-danger\">Este certificado de No:</b><b class=\"text-black\"> {{item.year}}-{{item.consecutivo}} </b> <b class=\"text-danger\"> Remplaza a el certificado No:</b> \n      <b class=\"text-black\">{{item.oldcertificado}}</b> </p>         \n    </div>\n \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/informedos/informedos.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/informedos/informedos.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id=\"noprint\">\n  <div class=\"container\" *ngIf=\"ready\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div>\n          <div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"container\">\n              <h1 class=\"display-4\">Certificado Generado con exito !!</h1>\n              <p class=\"lead\">Descargue de nuevo el certificado</p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-sm-12 mt-5 mb-5\" id=\"noprint\">\n        <ion-item color=\"primary\" id=\"noprint\">\n          <ion-button (click)=\"print()\" expand=\"block\" slot=\"end\" color=\"light\" id=\"noprint\">\n            Imprimir\n          </ion-button>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<div id=\"print\">\n  <div id=\"legal\" *ngIf=\"ready\">\n    <div class=\"encabezado\">\n      <div class=\"logo1\">\n        <img src=\"/assets/images/servaf.png\" style=\"width: 120px; margin-right: 1rem;height: 120px;\"\n          alt=\"Logo de Servaf S.A. E.S.\">\n      </div>\n      <div class=\"membreteL\">\n        LABORATORIO DE MEDIDORES <br>\n        EMPRESA DE SERVICIOS DE FLORENCIA S.A. E.S. <br>\n        SERVAF S.A. E.S.P. <br>\n        N.I.T.: 800.169.470-7\n      </div>\n\n    </div>\n\n\n    <div class=\"contenido\">\n      <table class=\"Table1\">\n        <tbody>\n          <tr>\n            <td colspan=\"8\" class=\"thead\" style=\"font-weight: bold;\">DATOS DEL SOLICITANTE</td>\n          </tr>\n          <tr>\n            <td colspan=\"1\" class=\"thead my-1\">NOMBRE SOLICITANTE</td>\n            <td colspan=\"2\" class=\"upper my-1\">{{item?.cliente?.nombre}}</td>\n            <td colspan=\"2\" class=\"thead my-1\">INFORME DE CALIBRACIÓN No.</td>\n            <td colspan=\"3\" class=\"upper my-1\" style=\"font-weight: bold;\">\n              {{item.year}}-{{item.consecutivo}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"1\" class=\"thead my-1\">DIRECCIÓN SOLICITANTE</td>\n            <td colspan=\"2\" class=\"my-1\">{{item?.cliente?.direccion}}</td>\n            <td class=\"thead my-1\">FECHA DE RECEPCIÓN</td>\n            <td class=\"my-1\">{{item?.orden_entrada?.fecha | date:'yyyy-MM-dd'}}</td>\n            <td class=\"thead\">FECHA DE VERIFICACIÓN</td>\n            <td class=\"my-1\" colspan=\"3\">{{item?.orden_trabajo?.fecha | date:'yyyy-MM-dd'}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" class=\"thead my-1\">{{item?.cliente?.identificacion}}</td>\n            <td colspan=\"6\" class=\"text-left my-1\"> {{item?.cliente?.numero}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"3\" class=\"thead my-1\">INSTRUMENTO A CALIBRAR</td>\n            <td colspan=\"5\" class=\"thead my-1\">MEDIDOR DE AGUA</td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" style=\"color: #ffffff !important;\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" class=\"thead\" style=\"font-weight: bold;\">DESCRIPCIÓN DEL INSTRUMENTO A CALIBRAR</td>\n          </tr>\n          <tr>\n            <td class=\"thead\">SERIE</td>\n            <td class=\"thead\">MARCA</td>\n            <td class=\"thead\">DIÁMETRO</td>\n            <td class=\"thead\">TIPO</td>\n            <td class=\"thead\">CLASE</td>\n            <td class=\"thead\">CÓDIGO</td>\n            <td class=\"thead\">LECTURA</td>\n          </tr>\n          <tr>\n            <td>{{item?.datos?.serie}}</td>\n            <td>{{item?.datos?.marca?.titulo}}</td>\n            <td>{{item?.metrologicas?.diametro}}</td>\n            <td>{{item?.metrologicas?.principio}}</td>\n            <td>{{item?.datos?.modelo?.titulo}}</td>\n            <td>{{item?.orden}}</td>\n            <td>{{item?.datos?.lectura}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" class=\"thead\" style=\"font-weight: bold;\">DECLARACIÓN DE INCONFORMIDAD DEL MEDIDOR:</td>\n          </tr>\n          <tr>\n            <td colspan=\"5\" rowspan=\"2\" class=\"text-left\">\n              EL MEDIDOR PRESENTA REGISTRO DE ANOMALÍAS EN SU RECEPCIÓN PARA SER CALIBRADO DE ACUERDO CON LAS\n              ESPECIFICACIONES TÉCNICAS DE LA NORMA APLICADA.\n            </td>\n            <td class=\"thead\" colspan=\"4\">NORMA : AÑO</td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">{{item?.metrologicas?.norma}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" style=\"color: #ffffff !important;\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" class=\"thead\" style=\"font-weight: bold;\">OBSERVACIONES:</td>\n          </tr>\n          <tr>\n            <td colspan=\"6\" class=\"thead text-left\">DECLARACIÓN DE INCONFORMIDAD DEL MEDIDOR:</td>\n            <td colspan=\"2\" class=\"thead\">RESULTADOS</td>\n          </tr>\n          <tr *ngFor=\"let a of item.incidencias; let i = index\">\n            <td>{{i + 1 }}</td>\n            <td colspan=\"5\" class=\"text-left upper\">{{a}}</td>\n            <td colspan=\"2\"> X </td>\n          </tr>\n\n          <tr>\n            <td colspan=\"8\" class=\"thead\" style=\"font-weight: bold;\">REFERENCIAS NORMATIVAS: LEY 142 ART. 144 DE 1974;\n              RESOLUCIÓN 457 DE 2008 ART. 13; CIRCULAR 006 DE 2007 2,7,1.</td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" class=\"thead\" style=\"font-weight: bold;\">FIRMAS AUTORIZADAS</td>\n          </tr>\n          <tr>\n            <td colspan=\"4\" style=\"font-weight: bold;\">Elaboró</td>\n            <td colspan=\"4\" class=\"thead\">REGISTRO FOTOGRÁFICO</td>\n          </tr>\n          <tr>\n            <td colspan=\"4\" style=\"height: 100px;\">\n            </td>\n            <td colspan=\"4\" rowspan=\"5\">\n              <div *ngFor=\"let i of imagenes\" class=\"foto\">\n                <img [src]=\"i.imagen | imagen:'medidor'\" height=\"200\" alt=\"\">\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"4\"><b>Metrólogo</b><br>Fabio Aturo Zambrano Ico</td>\n          </tr>\n          <tr>\n            <td colspan=\"4\" style=\"font-weight: bold;\">Revisó</td>\n          </tr>\n          <tr>\n            <td colspan=\"4\" style=\"height: 100px;\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"4\"><b>Coordinador Laboratorio</b><br>Edgar Fernando Lozano Calderón</td>\n          </tr>\n          <tr>\n            <td colspan=\"8\" class=\"border-0 upper\">- FIN DEL INFORME -</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n\n    <footer class=\"flex-footer\" style=\"font-size: 9pt; text-align: center;margin-top: 100px;\">\n      <p>Página 1 de 1</p>\n      <p>SERVAF S.A. E.S.P.<br>Carrera 9 Calle 27 Esquina Estación Torasso<br>Teléfono 435-1268 Ext.: 206</p>\n      <p>INFORME DE CALIBRACIÓN<br>LCM-FOR-023 - Versión 1</p>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/iniciales/iniciales.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/iniciales/iniciales.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form action=\"\" [formGroup]=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ion-item lines=\"none\">\n          <ion-label>Prueba {{tipo}} </ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-6\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"text-center\">\n          <ion-text color=\"primary\">\n            <h4>Defina condiciones Iniciales</h4>\n          </ion-text>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp. Ambiente</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temp\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Humedad. Relativa</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"humedad\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">%</span>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"save()\" [disabled]=\"!form.valid\">\n          <ion-label>Guardar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/instrumentos/instrumentos.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/instrumentos/instrumentos.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Informacion General</ion-title>\n    </ion-toolbar>\n    \n      <div class=\"container-fluid\" *ngIf=\"state\">\n        <div class=\"row\">      \n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Consecutivo</label>\n              <div class=\"col-sm-3\">\n                <input type=\"number\" [value]=\"datos.orden\"  class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>            \n          </div>\n          <div class=\"col-sm-6\" style=\"border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))\">\n            <div class=\"row p-1 \">\n              <label class=\"col-sm-6 ml-3 p-1\">Tipo de Prueba</label>\n              <div class=\"col-sm-3\">\n                <input type=\"text\" [value]=\"tipo\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" disabled>\n              </div>\n            </div>            \n          </div>              \n        </div> \n        <!-- <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <form action=\"\" [formGroup]=\"form\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 m-0 p-0\">\n                    <ion-item color=\"dark\">\n                      <ion-label>Recipientes Volumetricos Teoricos</ion-label>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <ion-item>\n                      <ion-label>Q1</ion-label>\n                      <ion-select placeholder=\"Select One\" formControlName=\"vlq1\">\n                        <ion-select-option value=5>5 L</ion-select-option>\n                        <ion-select-option value=10>10 L</ion-select-option>\n                        <ion-select-option value=20>20 L</ion-select-option>\n                        <ion-select-option value=100>100 L</ion-select-option>\n                      </ion-select>\n                    </ion-item>          \n                  </div>\n                  <div class=\"col-sm-6\">\n                    <ion-item>\n                      <ion-label>Q2</ion-label>\n                      <ion-select placeholder=\"Select One\" formControlName=\"vlq2\">\n                        <ion-select-option value=5>5 L</ion-select-option>\n                        <ion-select-option value=10>10 L</ion-select-option>\n                        <ion-select-option value=20>20 L</ion-select-option>\n                        <ion-select-option value=100>100 L</ion-select-option>\n                      </ion-select>\n                    </ion-item>          \n                  </div>\n                  <div class=\"col-sm-6\">\n                    <ion-item>\n                      <ion-label>Q3</ion-label>\n                      <ion-select placeholder=\"Select One\" formControlName=\"vlq3\">\n                        <ion-select-option value=5>5 L</ion-select-option>\n                        <ion-select-option value=10>10 L</ion-select-option>\n                        <ion-select-option value=20>20 L</ion-select-option>\n                        <ion-select-option value=100>100 L</ion-select-option>\n                      </ion-select>\n                    </ion-item>          \n                  </div>\n                  <div class=\"col-sm-6\">\n                    <ion-item>\n                      <ion-label>Q4</ion-label>\n                      <ion-select placeholder=\"Select One\" formControlName=\"vlq4\" *ngIf=\"valueq4\">\n                        <ion-select-option value=5>5 L</ion-select-option>\n                        <ion-select-option value=10>10 L</ion-select-option>\n                        <ion-select-option value=20>20 L</ion-select-option>\n                        <ion-select-option value=100>100 L</ion-select-option>\n                      </ion-select>\n                    </ion-item>          \n                  </div>\n                </div>\n              </div>\n            </form>\n\n\n          </div>\n        </div> -->\n        <div class=\"row\">\n          <ion-toolbar color=\"dark\">\n            <ion-title>Instrumentos</ion-title>\n          </ion-toolbar>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq1\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title> Q1. Caudal Minimo <strong class=\"ml-5\"> {{nominaluno | number:'2.0-2'}} l/h  </strong> </ion-card-title>\n                </ion-card-header>                         \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"t_entrada_agua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"rvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_entrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temp_ambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_salida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>                \n              </ion-card>\n            </form>\n          </div>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq2\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title> Q2. Caudal de Transicion <strong class=\"ml-5\"> {{nominaldos | number:'2.0-2'}} l/h  </strong></ion-card-title>\n                </ion-card-header>                    \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"t_entrada_agua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"rvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_entrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temp_ambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_salida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>   \n                \n              </ion-card>\n            </form>\n          </div>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq3\">\n              <ion-card>\n                <ion-card-header color=\"primary\">                \n                  <ion-card-title> Q3. Caudal Nominal  <strong class=\"ml-5\"> {{nominaltres | number:'2.0-2'}} l/h  </strong></ion-card-title>\n                </ion-card-header>                      \n                <ion-item>\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"t_entrada_agua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"rvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_entrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temp_ambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_salida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>   \n                \n              </ion-card>\n            </form>\n          </div>\n          <div class=\"col-sm-6\">\n            <form [formGroup]=\"formq4\">\n              <ion-card>\n                <ion-item color=\"primary\">\n                  <ion-label>Q4.Caudal Maximol  <strong class=\"ml-5\"> {{nominalcuatro | number:'2.0-2'}} l/h  </strong> </ion-label>\n                  <ion-checkbox color=\"primary\" (ionChange)=\"updateq4()\" checked=\"valueq4\"></ion-checkbox>\n                </ion-item>                                 \n                <ion-item  *ngIf=\"valueq4\">\n                  <ion-label>Temperatura del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temprvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Temperatura del agua</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"t_entrada_agua\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Volumen del R.V.M</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"rvm\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Tiempo</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"tiempo\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Caudal</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"caudal\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Presion de Entrada</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_entrada\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Temperatura ambiente</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"temp_ambiente\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Humedad relativa</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"humedad\">\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>\n                <ion-item *ngIf=\"valueq4\">\n                  <ion-label>Presion de salida</ion-label>\n                  <ion-select placeholder=\"Seleccione Una\" formControlName=\"presion_salida\" >\n                    <ion-select-option *ngFor=\"let u of instrumentos\" [value]=\"u._id\">{{u.codigo}} ( {{u.patron}} )</ion-select-option>                \n                  </ion-select>\n                </ion-item>   \n              </ion-card>\n            </form>\n          </div>\n\n         \n        </div>        \n      </div>\n    \n  </div>\n  \n  <div class=\"row mb-5\">\n    <div class=\"col-sm-12\">\n      <ion-item button color=\"primary\" text-center (click)=\"save()\" >\n        <ion-label>Guardar</ion-label>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/listamedidores/listamedidores.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/listamedidores/listamedidores.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row m-0 p-0\">\n      <div class=\"col-sm-12 mt-2 p-0\">\n        <ion-item color=\"primary\">\n          <ion-label>Consulte sus Medidores Calibrados</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mb-3\">\n        <form action=\"\" [formGroup]=\"form\">\n          <div class=\"form-group row mt-4\">\n            <label for=\"colFormLabelSm\" class=\"col-sm-2 col-form-label col-form-label-sm\">SERIAL</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"serial\" placeholder=\"Introduce el serial del medidor\">\n            </div>\n          </div>\n          <ion-item button (click)=\"get()\" color=\"primary\" text-center>\n            <ion-label>Buscar</ion-label>\n          </ion-item>\n        </form>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <tr text-center>\n              <th scope=\"col\">Certificado No</th>\n              <th scope=\"col\">Serial</th>\n              <th scope=\"col\">Marca</th>\n              <th scope=\"col\">Modelo</th>             \n              <th scope=\"col\">Cliente</th>\n              <th scope=\"col\">O. Trabajo</th>\n              <th scope=\"col\">O. Entrada</th>\n              <th scope=\"col\">Apto</th>\n              <th scope=\"col\">Informe</th>\n              <th scope=\"col\">Datos</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of items\" text-center>\n              <th>{{item.consecutivo}}</th>\n              <th scope=\"row\">{{item.datos.serie}}</th>\n              <td>{{item.datos?.marca?.titulo}}</td>\n              <td>{{item.datos?.modelo?.titulo}}</td>\n              <td>{{item.cliente?.nombre}}</td>\n              <td>{{item.orden_trabajo?.orden}}</td>\n              <td>{{item.orden_entrada?.orden}}</td>\n              <td *ngIf=\"item.estado=='true'\">Si</td>\n              <td *ngIf=\"item.estado=='false'\">No</td>   \n              <td class=\"p-0\" *ngIf=\"item.estado=='true'\">\n                <ion-button (click)=\"download(item._id)\" size=\"small\" color=\"primary\">\n                  <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n                </ion-button>\n              </td>\n              <td class=\"p-0\" *ngIf=\"item.estado=='false'\">\n                <ion-button (click)=\"go(item._id)\" size=\"small\" color=\"primary\">\n                  <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n                </ion-button>\n              </td>\n              <td class=\"p-0\" *ngIf=\"item.estado=='true'\">\n                <ion-button (click)=\"godatos(item._id)\" size=\"small\" color=\"primary\">\n                  <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                </ion-button>\n              </td>\n              \n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/medidor/medidor.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/medidor/medidor.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 mt-3\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Panel de Correcion del Certificado</ion-label>\n          </ion-item>\n        </div>     \n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"text-center\">\n          <h4>Datos Generales</h4>\n        </div>\n        <div *ngIf=\"item\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Serial</th>\n                <th scope=\"col\">Marca</th>\n                <th scope=\"col\">Modelo</th>\n                <th scope=\"col\">Año</th>\n                <th scope=\"col\">Tipo</th>\n                <th scope=\"col\">Cliente</th>\n                <th scope=\"col\">Apto</th>         \n              </tr>\n            </thead>\n            <tbody>\n              <tr  class=\"text-center\">\n                <th scope=\"row\">{{item.orden}}</th>\n                <td>{{item.datos.serie}}</td>\n                <td>{{item.datos.marca?.titulo}}</td>\n                <td>{{item.datos.modelo?.titulo}}</td>\n                <td>{{item.datos.fabricacion}}</td>\n                <td>{{item.metrologicas.principio}}</td>\n                <td>{{item.cliente?.nombre}}</td>\n                <td *ngIf=\"item.estado=='true'\">Si</td>\n                <td *ngIf=\"item.estado=='false'\">No</td>              \n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"text-center\" *ngIf=\"item\">\n          <ion-item color=\"medium\" lines=\"none\" *ngIf=\"item?.derogado =='false'\">\n            <ion-label>Editar Caracteristicas Generales</ion-label>\n            <ion-button (click)=\"launcheditar()\" slot=\"end\" expand=\"block\" color=\"primary\">\n              <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon> Editar\n            </ion-button>\n          </ion-item>\n        </div>    \n      </div>\n\n      <div class=\"col-sm-12 mt-5\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Panel de Correcion de Caracteristicas Metrologicas</ion-label>\n          </ion-item>\n        </div>     \n\n        <div class=\"text-center\" *ngIf=\"item\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\"># Certificado</th>\n                <th scope=\"col\">Norma</th>\n                <th scope=\"col\">Caudal Permanente</th>\n                <th scope=\"col\">Principio Fisico</th>\n                <th scope=\"col\">Rango [m3]</th>\n                <th scope=\"col\">Division Escala</th>\n                <th scope=\"col\">Diametro</th>\n                <th scope=\"col\" *ngIf=\"item.type !=='3'\">Rango</th>\n                <th scope=\"col\" *ngIf=\"item.type =='3'\" >Clase</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">{{item.year}}-{{item.consecutivo}}</th>\n                <td>{{item.metrologicas?.norma}}</td>\n                <td>{{item.metrologicas?.q3}}</td>\n                <td>{{item.metrologicas?.principio}}</td>\n                <td>{{item.metrologicas?.rango}}</td>\n                <td>{{item.metrologicas?.escala}}</td>\n                <td>{{item.metrologicas?.diametro}}</td>\n                <td *ngIf=\"item.type !=='3'\">R{{item.metrologicas?.relacion}}</td>\n                <td *ngIf=\"item.type =='3'\">{{item.metrologicas?.clase}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n            \n        <div class=\"text-center mt-3\" *ngIf=\"item\">\n          <ion-item color=\"medium\" lines=\"none\" *ngIf=\"item?.derogado =='false'\">\n            <ion-label>Editar Caracteristicas Metrologicas</ion-label>\n            <ion-button (click)=\"launcheditar2()\" slot=\"end\" expand=\"block\" color=\"primary\">\n              <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon> Editar\n            </ion-button>\n          </ion-item>\n        </div>\n      </div>\n\n\n      <div class=\"col-sm-12 mt-5\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Editar Condiciones Ambientales</ion-label>\n          </ion-item>         \n        </div>\n        <div *ngIf=\"ambientales\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Prueba</th>\n                <th scope=\"col\">Temp Ambiente [°C]</th>\n                <th scope=\"col\">Humedad %</th>\n                <th scope=\"col\" *ngIf=\"item?.derogado =='false'\">Editar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let x of ambientales; let i = index\"  class=\"text-center\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{x.prueba}}</td>\n                <td>{{x.temp_ambiente | number:'1.2-2'}}</td>\n                <td>{{x.humedad | number:'1.2-2'}}</td>  \n                <td class=\"p-0\" *ngIf=\"item?.derogado =='false'\">\n                  <ion-button (click)=\"editarambientales(x)\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>         \n            </tbody>\n          </table>\n        </div>\n\n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Prueba Q1</ion-label>\n          </ion-item>  \n        </div>\n        <div *ngIf=\"q1\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Caudal [ L/h ]</th>\n                <th scope=\"col\">Presion Entrada [ kPa ]</th>\n                <th scope=\"col\">Presion Salida [ kPa ]</th>\n                <th scope=\"col\">Temperatura del Agua [ °C ]</th>\n                <th scope=\"col\">Temperatura del R.V.M [ °C ]</th>\n                <th scope=\"col\">Volumen del R.V.M [ L ]</th>\n                <th scope=\"col\">Tiempo [ h ]</th>\n                <th scope=\"col\">Inicial </th>\n                <th scope=\"col\">Final </th>\n                <th scope=\"col\" *ngIf=\"item?.derogado =='false'\">Editar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let a of q1; let i = index\" class=\"text-center\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{a.caudal | number:'1.2-2'}}</td>\n                <td>{{a.pentrada | number:'1.2-2'}}</td>\n                <td>{{a.psalida | number:'1.2-2'}}</td>\n                <td>{{a.tempagua | number:'1.2-2'}}</td>\n                <td>{{a.temprvm | number:'1.2-2'}}</td>\n                <td>{{a.volumenrvm | number:'1.2-2'}}</td>\n                <td>{{a.time / 3600  | number:'1.2-2'}}</td>\n                <td>{{a.inicial  | number:'1.2-2'}}</td>\n                <td>{{a.final  | number:'1.2-2'}}</td>\n                <td class=\"p-0\" *ngIf=\"item?.derogado =='false'\">\n                  <ion-button (click)=\"editar(a,'1')\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>             \n            </tbody>\n          </table>  \n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <ion-item color=\"primary\" lines=\"none\" text-center>\n          <ion-label>Prueba Q2</ion-label>\n        </ion-item>  \n        <div *ngIf=\"q2\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Caudal [ l/h ]</th>\n                <th scope=\"col\">Presion Entrada [ kpa ]</th>\n                <th scope=\"col\">Presion Salida [ kpa ]</th>\n                <th scope=\"col\">Temperatura del Agua [ C ]</th>\n                <th scope=\"col\">Temperatura del R.V.M [ C ]</th>\n                <th scope=\"col\">Volumen del R.V.M [ L ]</th>\n                <th scope=\"col\">Tiempo [ h ]</th>\n                <th scope=\"col\">Inicial </th>\n                <th scope=\"col\">Final </th>\n                <th scope=\"col\" *ngIf=\"item?.derogado =='false'\">Editar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let a of q2; let i = index\" class=\"text-center\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{a.caudal | number:'1.2-2'}}</td>\n                <td>{{a.pentrada | number:'1.2-2'}}</td>\n                <td>{{a.psalida | number:'1.2-2'}}</td>\n                <td>{{a.tempagua | number:'1.2-2'}}</td>\n                <td>{{a.temprvm | number:'1.2-2'}}</td>\n                <td>{{a.volumenrvm | number:'1.2-2'}}</td>\n                <td>{{a.time / 3600  | number:'1.2-2'}}</td>\n                <td>{{a.inicial  | number:'1.2-2'}}</td>\n                <td>{{a.final  | number:'1.2-2'}}</td>\n                <td class=\"p-0\" *ngIf=\"item?.derogado =='false'\">\n                  <ion-button (click)=\"editar(a,'2')\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>             \n            </tbody>\n          </table>  \n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Prueba Q3</ion-label>\n          </ion-item>  \n        </div>\n        <div *ngIf=\"q3\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Caudal [ l/h ]</th>\n                <th scope=\"col\">Presion Entrada [ kpa ]</th>\n                <th scope=\"col\">Presion Salida [ kpa ]</th>\n                <th scope=\"col\">Temperatura del Agua [ C ]</th>\n                <th scope=\"col\">Temperatura del R.V.M [ C ]</th>\n                <th scope=\"col\">Volumen del R.V.M [ L ]</th>\n                <th scope=\"col\">Tiempo [ h ]</th>\n                <th scope=\"col\">Inicial </th>\n                <th scope=\"col\">Final </th>\n                <th scope=\"col\" *ngIf=\"item?.derogado =='false'\">Editar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let a of q3; let i = index\" class=\"text-center\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{a.caudal | number:'1.2-2'}}</td>\n                <td>{{a.pentrada | number:'1.2-2'}}</td>\n                <td>{{a.psalida | number:'1.2-2'}}</td>\n                <td>{{a.tempagua | number:'1.2-2'}}</td>\n                <td>{{a.temprvm | number:'1.2-2'}}</td>\n                <td>{{a.volumenrvm | number:'1.2-2'}}</td>\n                <td>{{a.time / 3600  | number:'1.2-2'}}</td>\n                <td>{{a.inicial  | number:'1.2-2'}}</td>\n                <td>{{a.final  | number:'1.2-2'}}</td>\n                <td class=\"p-0\" *ngIf=\"item?.derogado =='false'\" >\n                  <ion-button (click)=\"editar(a,'3')\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>             \n            </tbody>\n          </table>  \n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Prueba Q4</ion-label>\n          </ion-item>  \n        </div>\n        <div *ngIf=\"q4\">\n          <table class=\"table\">\n            <thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Caudal [ l/h ]</th>\n                <th scope=\"col\">Presion Entrada [ kpa ]</th>\n                <th scope=\"col\">Presion Salida [ kpa ]</th>\n                <th scope=\"col\">Temperatura del Agua [ C ]</th>\n                <th scope=\"col\">Temperatura del R.V.M [ C ]</th>\n                <th scope=\"col\">Volumen del R.V.M [ L ]</th>\n                <th scope=\"col\">Tiempo [ h ]</th>\n                <th scope=\"col\">Inicial </th>\n                <th scope=\"col\">Final </th>\n                <th scope=\"col\" *ngIf=\"item?.derogado =='false'\">Editar</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let a of q4; let i = index\" class=\"text-center\">\n                <th scope=\"row\">{{i + 1}}</th>\n                <td>{{a.caudal | number:'1.2-2'}}</td>\n                <td>{{a.pentrada | number:'1.2-2'}}</td>\n                <td>{{a.psalida | number:'1.2-2'}}</td>\n                <td>{{a.tempagua | number:'1.2-2'}}</td>\n                <td>{{a.temprvm | number:'1.2-2'}}</td>\n                <td>{{a.volumenrvm | number:'1.2-2'}}</td>\n                <td>{{a.time / 3600  | number:'1.2-2'}}</td>\n                <td>{{a.inicial  | number:'1.2-2'}}</td>\n                <td>{{a.final  | number:'1.2-2'}}</td>\n                <td class=\"p-0\" *ngIf=\"item?.derogado =='false'\" >\n                  <ion-button (click)=\"editar(a,'4')\" size=\"small\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>             \n            </tbody>\n          </table>  \n        </div>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"item?.derogado =='false'\">\n        <ion-item color=\"medium\">\n          <ion-label>Generar Denuevo el certificado</ion-label>\n          <ion-button (click)=\"generar()\" expand=\"block\" shape=\"round\" slot=\"end\" color=\"primary\">\n            Generar\n          </ion-button>\n        </ion-item>\n      </div>\n\n      <div class=\"col-sm-12 mt-5\" *ngIf=\"item?.derogado =='true'\">\n        <div class=\"jumbotron jumbotron-fluid\">\n          <div class=\"container\">\n            <h1 class=\"display-4\">Certificado No Valido</h1>\n            <p class=\"lead\">Este Certificado ya no es valido. Ha sido reemplazado por el certificado # {{item.oldcertificado}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 mt-5\" *ngIf=\"item?.derogado =='false'\">\n        <div class=\"text-center\">\n          <ion-item color=\"primary\" lines=\"none\" text-center>\n            <ion-label>Declarar No Conforme el certificado</ion-label>\n          </ion-item>  \n        </div>\n        <div class=\"text-center mb-5\">\n          <form action=\"\" [formGroup]=\"form\">\n            <div class=\"form-row mb-5\">\n              <div class=\"col-sm-12\">\n                <ion-item lines=\"none\">\n                  <ion-label>Desea Generar un nuevo certificado</ion-label>\n                  <ion-select placeholder=\"Seleccione\" formControlName=\"nuevo\">\n                    <ion-select-option value=\"0\">Si</ion-select-option>\n                    <ion-select-option value=\"1\">No</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n            </div>\n            <div class=\"form-row mb-5\">\n              <div class=\"col-sm-12\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Observaciones</span>\n                  </div>\n                  <textarea class=\"form-control\" aria-label=\"With textarea\" formControlName=\"observacion\" placeholder=\"Describa de manera corta la razon por la cual desea declarar no conforme el certificado\"></textarea>\n                </div>\n              </div>\n            </div>            \n            <ion-item color=\"ligth\">\n              <ion-label>Declarar No conforme</ion-label>\n              <ion-button (click)=\"derogar()\" expand=\"block\" shape=\"round\" color=\"danger\" [disabled]=\"!form.valid\">\n                Salvar\n              </ion-button>\n            </ion-item>\n\n          </form>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/ordenes/ordenes.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/ordenes/ordenes.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>  \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 m-0 p-0\">\n        <ion-toolbar color=\"dark\">\n          <ion-title>Ordenes de Trabajo por Calibrar</ion-title>\n        </ion-toolbar>\n      </div>\n      <div class=\"col-sm-12\">\n        <form action=\"\" [formGroup]=\"form\">\n          <ion-item>\n            <ion-label>Desde</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"inicio\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>Hasta</ion-label>\n            <ion-datetime displayFormat=\"YYYY MM DD\" placeholder=\"Seleccionar Fecha\" formControlName=\"fin\"></ion-datetime>\n          </ion-item>\n  \n          <ion-item button (click)=\"get()\" color=\"primary\" text-center>\n            <ion-label>Buscar</ion-label>\n          </ion-item>\n        </form>\n      </div>\n      <div class=\"col-sm-12 m-0 p-0\">\n        <div class=\"container\">\n          <ion-card text-center>\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\"># Orden</th>\n                  <th scope=\"col\">Tipo de Orden</th>\n                  <th scope=\"col\">Programada para </th>                \n                  <th scope=\"col\">Hora de Inicio</th>\n                  <th scope=\"col\">Fecha de Creacion</th>\n                  <th scope=\"col\">Gestionar</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of ordenes\">\n                  <th scope=\"row\">{{item.orden}}</th>\n                  <td *ngIf=\"item.tipo==1\">Calibracion</td>\n                  <td *ngIf=\"item.tipo==2\">Perdida de Carga</td>\n                  <td *ngIf=\"item.tipo==3\">Presion Hidroestatica</td>\n                  <td>{{item.fecha_programacion | date:'yyyy-MM-dd'}}</td>\n                  <td>{{item.hora_programacion | date:'hh:mm ss a'}}</td>                             \n                  <td>{{item.fecha | date:'yyyy-MM-dd'}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"open(item._id)\" size=\"small\" color=\"success\">\n                      <ion-icon slot=\"icon-only\" name=\"share-alt\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>            \n              </tbody>\n            </table>        \n          </ion-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/programacion.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/programacion.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/pruebas/pruebas.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/pruebas/pruebas.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\" *ngIf=\"!complete\">\n        <form action=\"\" [formGroup]=\"form\">\n          <ion-card>\n            <ion-item>\n              <ion-label>Seleccione el Tipo de Prueba </ion-label>\n              <ion-select placeholder=\"Seleccionar\" formControlName=\"tipo\">\n                <ion-select-option *ngFor=\"let p of pruebas\" [value]=\"p.tipo\">{{p.tipo}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card>\n          <ion-toolbar>\n            <ion-item button text-center color=\"primary\" (click)=\"nav()\">\n              <ion-label>Empezar</ion-label>\n            </ion-item>\n          </ion-toolbar> \n        </form>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"complete\">\n        <div>\n          <div class=\"jumbotron jumbotron-fluid\">\n            <div class=\"container\">\n              <h1 class=\"display-4\">Orden de trabajo Terminada</h1>\n              <p class=\"lead\">Haz completado la orden de trabajo . Procede a cerrar la orden para poder generar los certificados</p>\n            </div>\n          </div>\n        </div>       \n        <ion-item button color=\"primary\" text-center class=\"mt-5\" (click)=\"cerrar()\">\n          <ion-label>Cerrar Orden</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/q1/q1.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/q1/q1.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form action=\"\" [formGroup]=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Prueba {{tipo}} </ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Repeticion No {{repeticion}} </ion-label>\n        </ion-item>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Caudal</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"caudal\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">L/h</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Entrada</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"pentrada\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Salida</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"psalida\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp de la Linea</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"tempagua\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temprvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Volumen RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"volumenrvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">ml</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item lines=\"none\">\n          <ion-label>Duracion de la prueba</ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-4 mt-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Horas</span>\n          </div>\n          <input type=\"number\" formControlName=\"horas\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-sm-4 mt-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Minutos</span>\n          </div>\n          <input type=\"number\" formControlName=\"minutos\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-sm-4 mt-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Segundos</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"segundos\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"save()\" [disabled]=\"!form.valid\" *ngIf=\"!ready\">\n          <ion-label>Guardar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"col-sm-12\" *ngIf=\"ready\">\n    <div *ngFor=\"let item of medidores\">\n      <app-me [id]=\"item\" [data]=data></app-me>\n    </div>\n  </div>\n\n\n  <div class=\"col-sm-12\" *ngIf=\"ready\">\n    <ion-item button text-center color=\"primary\" (click)=\"next()\">\n      <ion-label>Continuar</ion-label>\n    </ion-item>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/q2/q2.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/q2/q2.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form action=\"\" [formGroup]=\"form\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Prueba {{tipo}} </ion-label>              \n        </ion-item>\n      </div>\n      <div class=\"col-sm-6\">\n        <ion-item>\n          <ion-label>Repeticion No {{repeticion}} </ion-label>              \n        </ion-item>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Caudal</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"caudal\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">L/h</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Entrada</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"pentrada\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Presion Salida</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"psalida\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">bar</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp de la Linea</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"tempagua\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Temp RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"temprvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">°C</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Volumen RVM</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"volumenrvm\">\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"basic-addon2\">ml</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item lines=\"none\">\n          <ion-label>Duracion de la prueba</ion-label>\n        </ion-item>\n      </div>\n      <div class=\"col-sm-4 mt-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Horas</span>\n          </div>\n          <input type=\"number\" formControlName=\"horas\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-sm-4 mt-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Minutos</span>\n          </div>\n          <input type=\"number\" formControlName=\"minutos\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-sm-4 mt-3\">\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Segundos</span>\n          </div>\n          <input type=\"number\" class=\"form-control\" formControlName=\"segundos\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item button text-center color=\"primary\" (click)=\"save()\" [disabled]=\"!form.valid\" *ngIf=\"!ready\">\n          <ion-label>Guardar</ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"col-sm-12\" *ngIf=\"ready\">\n    <div *ngFor=\"let item of medidores\">\n      <app-me [id]=\"item\" [data]=data></app-me>\n    </div>\n  </div>\n\n\n  <div class=\"col-sm-12\" *ngIf=\"ready\">\n    <ion-item button text-center color=\"primary\" (click)=\"next()\">\n      <ion-label>Continuar</ion-label>\n    </ion-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/q3/q3.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/programacion/q3/q3.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  q3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/programacion/ajustes/ajustes.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/ajustes/ajustes.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Ion-item {\n  font-size: 12px;\n}\n\n.col-sm-6 {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2FqdXN0ZXMvQzpcXFByb3llY3Rvc1xcc2VydmFmXFxzZXJ2YWZhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9ncmFtYWNpb25cXGFqdXN0ZXNcXGFqdXN0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9hanVzdGVzL2FqdXN0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9ncmFtYWNpb24vYWp1c3Rlcy9hanVzdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiSW9uLWl0ZW17XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbC1zbS02e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59IiwiSW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb2wtc20tNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/programacion/ajustes/ajustes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/programacion/ajustes/ajustes.component.ts ***!
  \*****************************************************************/
/*! exports provided: AjustesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesComponent", function() { return AjustesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");








var AjustesComponent = /** @class */ (function () {
    function AjustesComponent(api, route, router, us, ls, aux) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.us = us;
        this.ls = ls;
        this.aux = aux;
        this.bancos = [];
        this.default = [];
        this.usuarios = [];
        this.medidores = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            ordenante: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            encargado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
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
            incertidumbre_compre_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            medidores: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    AjustesComponent.prototype.ngOnInit = function () {
        this.run();
    };
    AjustesComponent.prototype.run = function () {
        this.getBancos();
        this.getDefault();
        this.getUsuarios();
        this.getConsecutivo();
        this.setMedidores();
    };
    AjustesComponent.prototype.getBancos = function () {
        var _this = this;
        this.api.getBancos().subscribe(function (resp) {
            if (resp.ok) {
                _this.bancos = resp.data;
            }
        });
    };
    AjustesComponent.prototype.getDefault = function () {
        var _this = this;
        this.api.getDefaultParametros().subscribe(function (resp) {
            if (resp.ok) {
                _this.default = resp.data[0];
                _this.form.patchValue({ repeticiones: _this.default.repeticiones });
                _this.form.patchValue({ coef_rvm: _this.default.coef_rvm });
                _this.form.patchValue({ coef_agua: _this.default.coef_agua });
                _this.form.patchValue({ compre_agua: _this.default.compre_agua });
                _this.form.patchValue({ incertidumbre_rvm: _this.default.incertidumbre_rvm });
                _this.form.patchValue({ incertidumbre_agua: _this.default.incertidumbre_agua });
                _this.form.patchValue({ incertidumbre_compre_agua: _this.default.incertidumbre_compre_agua });
            }
        });
    };
    AjustesComponent.prototype.save = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.crearOrdenTrabajo(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "La Orden ha sido agregada");
                        _this.ls.eliminarStorage('medidores');
                        var id = resp.data._id;
                        _this.router.navigate(["/trabajo/instrumentos/" + id]);
                        // this.router.navigate(['/trabajo/instrumentos'],{queryParams:{id:resp.data_id}});
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    AjustesComponent.prototype.getUsuarios = function () {
        var _this = this;
        this.us.GetUsers().subscribe(function (resp) {
            if (resp.ok) {
                _this.usuarios = resp.usuarios;
            }
        });
    };
    AjustesComponent.prototype.setMedidores = function () {
        var _this = this;
        this.ls.cargarStorage('medidores').then(function (data) {
            _this.form.patchValue({ medidores: data });
        });
    };
    AjustesComponent.prototype.getConsecutivo = function () {
        var _this = this;
        this.api.Consecutivo().subscribe(function (resp) {
            if (resp.ok) {
                var consecutivo = resp.numero;
                _this.form.patchValue({ orden: consecutivo });
            }
        });
    };
    AjustesComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__["AuxService"] }
    ]; };
    AjustesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajustes',
            template: __webpack_require__(/*! raw-loader!./ajustes.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/ajustes/ajustes.component.html"),
            styles: [__webpack_require__(/*! ./ajustes.component.scss */ "./src/app/pages/programacion/ajustes/ajustes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_7__["AuxService"]])
    ], AjustesComponent);
    return AjustesComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/calibrar/calibrar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/programacion/calibrar/calibrar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9jYWxpYnJhci9jYWxpYnJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/programacion/calibrar/calibrar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/calibrar/calibrar.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalibrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalibrarComponent", function() { return CalibrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var CalibrarComponent = /** @class */ (function () {
    function CalibrarComponent(route, api) {
        this.route = route;
        this.api = api;
        this.orden = [];
        this.medidores = [];
    }
    CalibrarComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getOrden(this.id);
    };
    CalibrarComponent.prototype.getOrden = function (id) {
        var _this = this;
        this.api.GetOrdenClosed(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.orden = resp.data[0];
                console.log(_this.orden);
                _this.medidores = _this.orden.medidores;
            }
        });
    };
    CalibrarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    CalibrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calibrar',
            template: __webpack_require__(/*! raw-loader!./calibrar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/calibrar/calibrar.component.html"),
            styles: [__webpack_require__(/*! ./calibrar.component.scss */ "./src/app/pages/programacion/calibrar/calibrar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], CalibrarComponent);
    return CalibrarComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/certificados/certificados.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/programacion/certificados/certificados.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9jZXJ0aWZpY2Fkb3MvY2VydGlmaWNhZG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/programacion/certificados/certificados.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/programacion/certificados/certificados.component.ts ***!
  \***************************************************************************/
/*! exports provided: CertificadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadosComponent", function() { return CertificadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CertificadosComponent = /** @class */ (function () {
    function CertificadosComponent(api, router) {
        this.api = api;
        this.router = router;
        this.ordenes = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    }
    CertificadosComponent.prototype.ngOnInit = function () {
        this.getOrdenes();
    };
    CertificadosComponent.prototype.getOrdenes = function () {
        var _this = this;
        this.api.GetCloseOrden(this.form.value).subscribe(function (resp) {
            if (resp.ok) {
                _this.ordenes = resp.data;
            }
        });
    };
    CertificadosComponent.prototype.open = function (id) {
        this.router.navigate(["/trabajo/certificados/" + id]);
    };
    CertificadosComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CertificadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificados',
            template: __webpack_require__(/*! raw-loader!./certificados.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/certificados/certificados.component.html"),
            styles: [__webpack_require__(/*! ./certificados.component.scss */ "./src/app/pages/programacion/certificados/certificados.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CertificadosComponent);
    return CertificadosComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/consultar/consultar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/programacion/consultar/consultar.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9jb25zdWx0YXIvY29uc3VsdGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/programacion/consultar/consultar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/programacion/consultar/consultar.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConsultarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarComponent", function() { return ConsultarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ConsultarComponent = /** @class */ (function () {
    function ConsultarComponent(api, router) {
        this.api = api;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    ConsultarComponent.prototype.ngOnInit = function () { };
    ConsultarComponent.prototype.get = function () {
        var _this = this;
        this.api.certificadoTrabajo(this.form.value).subscribe(function (resp) {
            if (resp.ok) {
                _this.ordenes = resp.data;
                console.log(_this.ordenes);
            }
        });
    };
    ConsultarComponent.prototype.go = function (id) {
        this.router.navigate(["/trabajo/generartrabajo/" + id]);
    };
    ConsultarComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ConsultarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultar',
            template: __webpack_require__(/*! raw-loader!./consultar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/consultar/consultar.component.html"),
            styles: [__webpack_require__(/*! ./consultar.component.scss */ "./src/app/pages/programacion/consultar/consultar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConsultarComponent);
    return ConsultarComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/crear/crear.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/programacion/crear/crear.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  font-size: 12px;\n  padding: 8px;\n}\n\ntd {\n  font-size: 12px;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2NyZWFyL0M6XFxQcm95ZWN0b3NcXHNlcnZhZlxcc2VydmFmYXBwL3NyY1xcYXBwXFxwYWdlc1xccHJvZ3JhbWFjaW9uXFxjcmVhclxcY3JlYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9jcmVhci9jcmVhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2NyZWFyL2NyZWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbnRke1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59IiwidGgge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/programacion/crear/crear.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/programacion/crear/crear.component.ts ***!
  \*************************************************************/
/*! exports provided: CrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComponent", function() { return CrearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CrearComponent = /** @class */ (function () {
    function CrearComponent(api, local, router) {
        this.api = api;
        this.local = local;
        this.router = router;
        this.medidores = [];
        this.select = [];
    }
    CrearComponent.prototype.ngOnInit = function () {
        this.getMedidores();
    };
    CrearComponent.prototype.ionViewWillEnter = function () {
        this.getMedidores();
    };
    CrearComponent.prototype.getMedidores = function () {
        var _this = this;
        this.api.getMedidoresSave().subscribe(function (resp) {
            if (resp.ok) {
                _this.medidores = resp.data;
            }
        });
    };
    CrearComponent.prototype.push = function (item) {
        this.select.push(item);
        this.medidores = this.medidores.filter(function (e) { return e._id != item._id; });
    };
    CrearComponent.prototype.delete = function (item) {
        this.select = this.select.filter(function (e) { return e._id != item._id; });
        this.medidores.push(item);
    };
    CrearComponent.prototype.next = function () {
        this.local.SaveStorage('medidores', this.select);
        this.router.navigate(['/trabajo/generales']);
    };
    CrearComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CrearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crear',
            template: __webpack_require__(/*! raw-loader!./crear.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/crear/crear.component.html"),
            styles: [__webpack_require__(/*! ./crear.component.scss */ "./src/app/pages/programacion/crear/crear.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CrearComponent);
    return CrearComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/ctrabajo/ctrabajo.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/programacion/ctrabajo/ctrabajo.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  font-size: 9pt !important;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  height: 98%;\n}\n\n* {\n  color: #000 !important;\n}\n\n#carta_landscape {\n  width: 816px !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  align-content: flex-start;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  margin: auto;\n  margin-top: 0px !important;\n}\n\n.logo1 {\n  position: relative;\n  width: 73.813px !important;\n}\n\n.white {\n  color: white !important;\n}\n\n.padding-xs-y {\n  padding: 2px 0 2px 0 !important;\n}\n\n.padding-y {\n  padding: 5px 0 5px 0 !important;\n}\n\n.upper {\n  text-transform: uppercase;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.p-0 {\n  padding: 0;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.ml-3 {\n  margin-left: 1rem;\n}\n\n.mr-3 {\n  margin-right: 1rem;\n}\n\n.mb-3 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 2rem;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #000 !important;\n}\n\n.mr-1 {\n  margin-right: 0.3rem;\n}\n\n.flex-footer {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  align-content: flex-end;\n  margin-top: 10px !important;\n}\n\ntable.tablasup {\n  border: 1px #000000;\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n}\n\ntable.tablasup td {\n  border-color: black;\n  border-style: double;\n  padding: 0 0.3rem 0 0.3rem;\n}\n\ntable.tablasup tbody td {\n  font-size: 10px;\n  width: 63.695px;\n}\n\ntable.mini {\n  position: relative;\n  top: 0;\n  border: 1px #000000;\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n}\n\ntable.mini td {\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n  padding: 0 0.3rem 0 0.3rem;\n}\n\ntable.mini tbody td {\n  font-size: 10px;\n  width: 63.695px;\n}\n\ntable.mini2 {\n  position: relative;\n  top: 0;\n  border: 1px #000000;\n  text-align: center;\n  border-collapse: collapse;\n}\n\ntable.mini2 td {\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n  padding: 0 0.3rem 0 0.3rem;\n}\n\ntable.mini2 tbody td {\n  font-size: 10px;\n  width: 127.39px;\n}\n\ntable.mini3 {\n  position: relative;\n  top: 0;\n  width: 100%;\n  border: 1px #000000;\n  text-align: center;\n  border-collapse: collapse;\n  margin: 10px 0 10Px 0;\n}\n\ntable.mini3 td {\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n  padding: 0 0.3rem 0 0.3rem;\n}\n\ntable.mini3 tbody td {\n  font-size: 10px;\n  width: auto;\n}\n\ntable.footer {\n  position: relative;\n  top: 0;\n  width: 100%;\n  border: 1px #000000;\n  text-align: center;\n  border-collapse: collapse;\n}\n\ntable.footer td {\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n  padding: 0 0.3rem 0 0.3rem;\n}\n\ntable.footer tbody td {\n  font-size: 10px;\n  width: auto;\n}\n\n.thead {\n  background-color: #cccccc;\n}\n\n.border-white {\n  border: 1px solid white;\n}\n\n.border-left-0, td.border-left-0 {\n  border-left: none !important;\n}\n\n.border-right-0, td.border-right-0 {\n  border-right: none !important;\n}\n\n.border-0, td.border-0 {\n  border: none !important;\n}\n\n.border-bottom-0, td.border-bottom-0 {\n  border-bottom: none !important;\n}\n\n.border-top-0, td.border-top-0 {\n  border-top: none !important;\n}\n\n.italic {\n  font-style: italic;\n}\n\n@media print {\n  /* invert the display (show/hide) properties of the main */\n  /* aplication component and the printing component       */\n  #noprint > * {\n    display: none;\n  }\n\n  @page {\n    size: A4 portrait;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2N0cmFiYWpvL0M6XFxQcm95ZWN0b3NcXHNlcnZhZlxcc2VydmFmYXBwL3NyY1xcYXBwXFxwYWdlc1xccHJvZ3JhbWFjaW9uXFxjdHJhYmFqb1xcY3RyYWJham8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9jdHJhYmFqby9jdHJhYmFqby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQUcsc0JBQUE7QUNFSDs7QURBQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsMEJBQUE7VUFBQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUNJSjs7QURGQTtFQUNJLHVCQUFBO0FDS0o7O0FESEE7RUFDRSwrQkFBQTtBQ01GOztBREpBO0VBQ0ksK0JBQUE7QUNPSjs7QURMQTtFQUNFLHlCQUFBO0FDUUY7O0FETkE7RUFDSSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksaUJBQUE7QUNVSjs7QURSQTtFQUNJLFVBQUE7QUNXSjs7QURUQTtFQUNJLG9CQUFBO0FDWUo7O0FEVkE7RUFDSSxpQkFBQTtBQ2FKOztBRFhBO0VBQ0Usa0JBQUE7QUNjRjs7QURaQTtFQUNJLG1CQUFBO0FDZUo7O0FEYkE7RUFDSSxtQkFBQTtBQ2dCSjs7QURkQTtFQUNJLHdDQUFBO0FDaUJKOztBRGZBO0VBQ0ksb0JBQUE7QUNrQko7O0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNtQkY7O0FEaEJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ21CRjs7QURqQkE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ3VCRjs7QURyQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ3dCRjs7QUR0QkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUMwQkY7O0FEeEJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUMyQkY7O0FEekJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDNEJGOztBRDFCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDNkJGOztBRDNCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDOEJGOztBRDVCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUMrQkY7O0FEN0JBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNnQ0Y7O0FEOUJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0UseUJBQUE7QUNrQ0Y7O0FEaENBO0VBQ0UsdUJBQUE7QUNtQ0Y7O0FEakNBO0VBQ0UsNEJBQUE7QUNvQ0Y7O0FEbENBO0VBQ0UsNkJBQUE7QUNxQ0Y7O0FEbkNBO0VBQ0UsdUJBQUE7QUNzQ0Y7O0FEcENBO0VBQ0UsOEJBQUE7QUN1Q0Y7O0FEckNBO0VBQ0UsMkJBQUE7QUN3Q0Y7O0FEdENBO0VBQ0Usa0JBQUE7QUN5Q0Y7O0FEdENBO0VBQ0ksMERBQUE7RUFDQSwwREFBQTtFQUVBO0lBQWUsYUFBQTtFQ3lDakI7O0VEeENFO0lBQU8saUJBQUE7RUM0Q1Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9jdHJhYmFqby9jdHJhYmFqby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7XHJcbiAgICBmb250LXNpemU6OXB0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDpleGFjdDtcclxuICAgIGNvbG9yLWFkanVzdDpleGFjdDtcclxuICAgIGhlaWdodDogOTglO1xyXG59IFxyXG4gICAgXHJcbioge2NvbG9yOiMwMDAgIWltcG9ydGFudDsgfSBcclxuXHJcbiNjYXJ0YV9sYW5kc2NhcGV7XHJcbiAgICB3aWR0aDogODE2cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLmxvZ28xe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDczLjgxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZGRpbmcteHMteXtcclxuICBwYWRkaW5nOiAycHggMCAycHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWRkaW5nLXl7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi51cHBlcntcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0LWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnAtMHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm0tMHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tbC0ze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuLm1yLTN7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5tYi0ze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4ubWItNntcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmJvcmRlci1ib3R0b217XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tci0xe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbn1cclxuLmZsZXgtZm9vdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUudGFibGFzdXAge1xyXG4gIGJvcmRlcjogMXB4ICMwMDAwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGFibGUudGFibGFzdXAgdGR7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICBwYWRkaW5nOiAwIDAuM3JlbSAwIDAuM3JlbTtcclxufVxyXG50YWJsZS50YWJsYXN1cCB0Ym9keSB0ZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdpZHRoOiA2My42OTVweDtcclxufVxyXG50YWJsZS5taW5pIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlcjogMXB4ICMwMDAwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGFibGUubWluaSB0ZHtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZzogMCAwLjNyZW0gMCAwLjNyZW07XHJcbn1cclxudGFibGUubWluaSB0Ym9keSB0ZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdpZHRoOiA2My42OTVweDtcclxufVxyXG50YWJsZS5taW5pMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBib3JkZXI6IDFweCAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbnRhYmxlLm1pbmkyIHRke1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAwIDAuM3JlbSAwIDAuM3JlbTtcclxufVxyXG50YWJsZS5taW5pMiB0Ym9keSB0ZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdpZHRoOiAxMjcuMzlweDtcclxufVxyXG50YWJsZS5taW5pMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCAjMDAwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIG1hcmdpbjogMTBweCAwIDEwUHggMDtcclxufVxyXG50YWJsZS5taW5pMyB0ZHtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZzogMCAwLjNyZW0gMCAwLjNyZW07XHJcbn1cclxudGFibGUubWluaTMgdGJvZHkgdGQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG50YWJsZS5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggIzAwMDAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50YWJsZS5mb290ZXIgdGR7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDAgMC4zcmVtIDAgMC4zcmVtO1xyXG59XHJcbnRhYmxlLmZvb3RlciB0Ym9keSB0ZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi50aGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG59XHJcbi5ib3JkZXItd2hpdGV7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLmJvcmRlci1sZWZ0LTAsIHRkLmJvcmRlci1sZWZ0LTB7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcbi5ib3JkZXItcmlnaHQtMCwgdGQuYm9yZGVyLXJpZ2h0LTB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlci0wLCB0ZC5ib3JkZXItMHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLWJvdHRvbS0wLCB0ZC5ib3JkZXItYm90dG9tLTB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3JkZXItdG9wLTAsIHRkLmJvcmRlci10b3AtMHtcclxuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0YWxpY3tcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAvKiBpbnZlcnQgdGhlIGRpc3BsYXkgKHNob3cvaGlkZSkgcHJvcGVydGllcyBvZiB0aGUgbWFpbiAqL1xyXG4gICAgLyogYXBsaWNhdGlvbiBjb21wb25lbnQgYW5kIHRoZSBwcmludGluZyBjb21wb25lbnQgICAgICAgKi9cclxuICAgIFxyXG4gICAgI25vcHJpbnQgPiAqIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gICAgQHBhZ2Uge3NpemU6IEE0IHBvcnRyYWl0fVxyXG5cclxufSIsImh0bWwsIGJvZHkge1xuICBmb250LXNpemU6IDlwdCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuKiB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbiNjYXJ0YV9sYW5kc2NhcGUge1xuICB3aWR0aDogODE2cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDczLjgxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGFkZGluZy14cy15IHtcbiAgcGFkZGluZzogMnB4IDAgMnB4IDAgIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmcteSB7XG4gIHBhZGRpbmc6IDVweCAwIDVweCAwICFpbXBvcnRhbnQ7XG59XG5cbi51cHBlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ubWwtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubXItMyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm1iLTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubWItNiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcbn1cblxuLm1yLTEge1xuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcbn1cblxuLmZsZXgtZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUudGFibGFzdXAge1xuICBib3JkZXI6IDFweCAjMDAwMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZS50YWJsYXN1cCB0ZCB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBwYWRkaW5nOiAwIDAuM3JlbSAwIDAuM3JlbTtcbn1cblxudGFibGUudGFibGFzdXAgdGJvZHkgdGQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiA2My42OTVweDtcbn1cblxudGFibGUubWluaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBib3JkZXI6IDFweCAjMDAwMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZS5taW5pIHRkIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDAgMC4zcmVtIDAgMC4zcmVtO1xufVxuXG50YWJsZS5taW5pIHRib2R5IHRkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogNjMuNjk1cHg7XG59XG5cbnRhYmxlLm1pbmkyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMXB4ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUubWluaTIgdGQge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZzogMCAwLjNyZW0gMCAwLjNyZW07XG59XG5cbnRhYmxlLm1pbmkyIHRib2R5IHRkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogMTI3LjM5cHg7XG59XG5cbnRhYmxlLm1pbmkzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMTBweCAwIDEwUHggMDtcbn1cblxudGFibGUubWluaTMgdGQge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZzogMCAwLjNyZW0gMCAwLjNyZW07XG59XG5cbnRhYmxlLm1pbmkzIHRib2R5IHRkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxudGFibGUuZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRhYmxlLmZvb3RlciB0ZCB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiAwIDAuM3JlbSAwIDAuM3JlbTtcbn1cblxudGFibGUuZm9vdGVyIHRib2R5IHRkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbn1cblxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYm9yZGVyLWxlZnQtMCwgdGQuYm9yZGVyLWxlZnQtMCB7XG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtMCwgdGQuYm9yZGVyLXJpZ2h0LTAge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci0wLCB0ZC5ib3JkZXItMCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS0wLCB0ZC5ib3JkZXItYm90dG9tLTAge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLTAsIHRkLmJvcmRlci10b3AtMCB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLyogaW52ZXJ0IHRoZSBkaXNwbGF5IChzaG93L2hpZGUpIHByb3BlcnRpZXMgb2YgdGhlIG1haW4gKi9cbiAgLyogYXBsaWNhdGlvbiBjb21wb25lbnQgYW5kIHRoZSBwcmludGluZyBjb21wb25lbnQgICAgICAgKi9cbiAgI25vcHJpbnQgPiAqIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgQHBhZ2Uge1xuICAgIHNpemU6IEE0IHBvcnRyYWl0O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/programacion/ctrabajo/ctrabajo.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/ctrabajo/ctrabajo.component.ts ***!
  \*******************************************************************/
/*! exports provided: CtrabajoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrabajoComponent", function() { return CtrabajoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var CtrabajoComponent = /** @class */ (function () {
    function CtrabajoComponent(route, api, titleService) {
        this.route = route;
        this.api = api;
        this.titleService = titleService;
        this.orden = [];
        this.medidores = [];
        this.instrumentos = [];
        this.status = true;
        this.q1_caudal = [];
        this.q1_humedad = [];
        this.q1_presion_entrada = [];
        this.q1_presion_salida = [];
        this.q1_rvm = [];
        this.q1_t_entrada_agua = [];
        this.q1_temp_ambiente = [];
        this.q1_tiempo = [];
        this.q1_temprvm = [];
        this.q2_caudal = [];
        this.q2_humedad = [];
        this.q2_presion_entrada = [];
        this.q2_presion_salida = [];
        this.q2_rvm = [];
        this.q2_t_entrada_agua = [];
        this.q2_temp_ambiente = [];
        this.q2_tiempo = [];
        this.q2_temprvm = [];
        this.q3_caudal = [];
        this.q3_humedad = [];
        this.q3_presion_entrada = [];
        this.q3_presion_salida = [];
        this.q3_rvm = [];
        this.q3_t_entrada_agua = [];
        this.q3_temp_ambiente = [];
        this.q3_tiempo = [];
        this.q3_temprvm = [];
    }
    CtrabajoComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getOrden(this.id);
        this.getMedidores(this.id);
    };
    CtrabajoComponent.prototype.getOrden = function (id) {
        var _this = this;
        this.api.certificadoOrdenTrabajo(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.orden = resp.data[0];
                _this.q1_caudal = _this.orden.instrumentos_q1.caudal;
                _this.q1_humedad = _this.orden.instrumentos_q1.humedad;
                _this.q1_presion_entrada = _this.orden.instrumentos_q1.presion_entrada;
                _this.q1_presion_salida = _this.orden.instrumentos_q1.presion_salida;
                _this.q1_rvm = _this.orden.instrumentos_q1.rvm;
                _this.q1_t_entrada_agua = _this.orden.instrumentos_q1.t_entrada_agua;
                _this.q1_temp_ambiente = _this.orden.instrumentos_q1.temp_ambiente;
                _this.q1_temprvm = _this.orden.instrumentos_q1.temprvm;
                _this.q2_caudal = _this.orden.instrumentos_q2.caudal;
                _this.q2_humedad = _this.orden.instrumentos_q2.humedad;
                _this.q2_presion_entrada = _this.orden.instrumentos_q2.presion_entrada;
                _this.q2_presion_salida = _this.orden.instrumentos_q2.presion_salida;
                _this.q2_rvm = _this.orden.instrumentos_q2.rvm;
                _this.q2_t_entrada_agua = _this.orden.instrumentos_q2.t_entrada_agua;
                _this.q2_temp_ambiente = _this.orden.instrumentos_q2.temp_ambiente;
                _this.q2_temprvm = _this.orden.instrumentos_q2.temprvm;
                _this.q3_caudal = _this.orden.instrumentos_q3.caudal;
                _this.q3_humedad = _this.orden.instrumentos_q3.humedad;
                _this.q3_presion_entrada = _this.orden.instrumentos_q3.presion_entrada;
                _this.q3_presion_salida = _this.orden.instrumentos_q3.presion_salida;
                _this.q3_rvm = _this.orden.instrumentos_q3.rvm;
                _this.q3_t_entrada_agua = _this.orden.instrumentos_q3.t_entrada_agua;
                _this.q3_temp_ambiente = _this.orden.instrumentos_q3.temp_ambiente;
                _this.q3_temprvm = _this.orden.instrumentos_q3.temprvm;
                _this.instrumentos = _this.orden.instrumentos;
                _this.status = true;
            }
        });
    };
    CtrabajoComponent.prototype.getMedidores = function (id) {
        var _this = this;
        this.api.certificadoOrdenTrabajoMedidores(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.medidores = resp.data;
            }
        });
    };
    CtrabajoComponent.prototype.changeTitle = function (id) {
        this.titleService.setTitle(id);
    };
    CtrabajoComponent.prototype.print = function () {
        var titulo = "OT-LMC-" + this.orden.orden;
        this.changeTitle(titulo);
        window.print();
        this.changeTitle('ServafAPP');
    };
    CtrabajoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    CtrabajoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ctrabajo',
            template: __webpack_require__(/*! raw-loader!./ctrabajo.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/ctrabajo/ctrabajo.component.html"),
            styles: [__webpack_require__(/*! ./ctrabajo.component.scss */ "./src/app/pages/programacion/ctrabajo/ctrabajo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], CtrabajoComponent);
    return CtrabajoComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/editarmedidor/editarmedidor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/programacion/editarmedidor/editarmedidor.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9lZGl0YXJtZWRpZG9yL2VkaXRhcm1lZGlkb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/editarmedidor/editarmedidor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/programacion/editarmedidor/editarmedidor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditarmedidorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarmedidorComponent", function() { return EditarmedidorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var src_app_components_modalmodelo_modalmodelo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modalmodelo/modalmodelo.component */ "./src/app/components/modalmodelo/modalmodelo.component.ts");
/* harmony import */ var src_app_components_modalmarca_modalmarca_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/modalmarca/modalmarca.component */ "./src/app/components/modalmarca/modalmarca.component.ts");
/* harmony import */ var src_app_components_modalincidencia_modalincidencia_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/modalincidencia/modalincidencia.component */ "./src/app/components/modalincidencia/modalincidencia.component.ts");
/* harmony import */ var src_app_components_modalclientes_modalclientes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modalclientes/modalclientes.component */ "./src/app/components/modalclientes/modalclientes.component.ts");











var EditarmedidorComponent = /** @class */ (function () {
    function EditarmedidorComponent(api, aux, modalController, eventos) {
        var _this = this;
        this.api = api;
        this.aux = aux;
        this.modalController = modalController;
        this.eventos = eventos;
        this.item = [];
        this.clase = [
            "A", "B", "C", "D"
        ];
        this.modelos = [];
        this.marcas = [];
        this.incidencias = [];
        this.clientes = [];
        this.normas = [];
        this.norma = [];
        this.ind = [
            "Analogico", "Digital", "Mixto"
        ];
        this.pos = [
            "Horizontal", "Vertical", "Cualquiera"
        ];
        this.rg = [
            {
                value: '999.0', titulo: '0 - 999'
            },
            {
                value: '9999.0', titulo: '0 - 9999'
            },
            {
                value: '99999.0', titulo: '0 - 99999'
            },
            {
                value: '999999.0', titulo: '0 - 999999'
            }
        ];
        this.prf = [
            "Velocidad", "Volumetrico", "Electromagnetico"
        ];
        this.uno = true;
        this.dos = false;
        this.tres = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fabricacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            marca: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            serie: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            incidencias: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.modelos$ = eventos.getNewModelo().subscribe(function (x) {
            _this.getModelos();
        });
        this.marcas$ = eventos.getNewMarca().subscribe(function (x) {
            _this.getMarcas();
        });
        this.incidencia$ = eventos.getNewIncidencia().subscribe(function (x) {
            _this.getIncidencias();
        });
    }
    EditarmedidorComponent.prototype.ngOnInit = function () {
        this.run();
        console.log(this.item);
        this.patch();
    };
    EditarmedidorComponent.prototype.portChange = function (event) {
        console.log('port:', event.value);
        console.log(this.form.value);
    };
    EditarmedidorComponent.prototype.patch = function () {
        this.form.patchValue({ _id: this.item._id });
        this.form.patchValue({ fabricacion: this.item.datos.fabricacion });
        this.form.patchValue({ marca: this.item.datos.marca._id });
        this.form.patchValue({ modelo: this.item.datos.modelo._id });
        this.form.patchValue({ serie: this.item.datos.serie });
        this.form.patchValue({ entrada: this.item.datos.lectura });
        this.form.patchValue({ incidencias: this.item.incidencias });
        this.form.patchValue({ cliente: this.item.cliente });
        this.form.patchValue({ estado: this.item.estado });
    };
    EditarmedidorComponent.prototype.addModelo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_modalmodelo_modalmodelo_component__WEBPACK_IMPORTED_MODULE_7__["ModalmodeloComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditarmedidorComponent.prototype.addMarca = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_modalmarca_modalmarca_component__WEBPACK_IMPORTED_MODULE_8__["ModalmarcaComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditarmedidorComponent.prototype.addIncidencia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_modalincidencia_modalincidencia_component__WEBPACK_IMPORTED_MODULE_9__["ModalincidenciaComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditarmedidorComponent.prototype.addcliente = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_modalclientes_modalclientes_component__WEBPACK_IMPORTED_MODULE_10__["ModalclientesComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditarmedidorComponent.prototype.run = function () {
        this.getMarcas();
        this.getModelos();
        this.getIncidencias();
        this.getNormas();
        this.getClientes();
    };
    EditarmedidorComponent.prototype.getModelos = function () {
        var _this = this;
        this.api.getModelo().subscribe(function (resp) {
            if (resp.ok) {
                _this.modelos = resp.data;
            }
        });
    };
    EditarmedidorComponent.prototype.getMarcas = function () {
        var _this = this;
        this.api.getMarcas().subscribe(function (resp) {
            if (resp.ok) {
                _this.marcas = resp.data;
            }
        });
    };
    EditarmedidorComponent.prototype.getIncidencias = function () {
        var _this = this;
        this.api.getIncidencias().subscribe(function (resp) {
            if (resp.ok) {
                _this.incidencias = resp.data;
            }
        });
    };
    EditarmedidorComponent.prototype.getClientes = function () {
        var _this = this;
        this.api.GetClientes().subscribe(function (resp) {
            if (resp.ok) {
                _this.clientes = resp.clientes;
                console.log(_this.clientes);
            }
        });
    };
    EditarmedidorComponent.prototype.getNormas = function () {
        var _this = this;
        this.api.getNormas().subscribe(function (resp) {
            if (resp.ok) {
                _this.normas = resp.data;
                console.log(_this.normas);
            }
        });
    };
    EditarmedidorComponent.prototype.setNorma = function (item) {
        if (item == "NTC 4064-1 : 2016") {
            this.uno = true;
            this.dos = false;
            this.tres = false;
            this.form.patchValue({ type: 1 });
        }
        else if (item == "NTC 1063-1 : 2007") {
            this.uno = false;
            this.dos = true;
            this.tres = false;
            this.form.patchValue({ type: 2 });
        }
        else if (item == "NTC 1063-1 : 1995") {
            this.uno = false;
            this.dos = false;
            this.tres = true;
            this.form.patchValue({ type: 3 });
        }
        this.norma = this.normas.find(function (e) { return e.norma == item; });
    };
    EditarmedidorComponent.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.updateMedidor(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Medidor ha sido Actualizado");
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
    EditarmedidorComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditarmedidorComponent.prototype, "item", void 0);
    EditarmedidorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editarmedidor',
            template: __webpack_require__(/*! raw-loader!./editarmedidor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/editarmedidor/editarmedidor.component.html"),
            styles: [__webpack_require__(/*! ./editarmedidor.component.scss */ "./src/app/pages/programacion/editarmedidor/editarmedidor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"]])
    ], EditarmedidorComponent);
    return EditarmedidorComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9lZGl0YXJtZXRyb2xvZ2ljYXMvZWRpdGFybWV0cm9sb2dpY2FzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditarmetrologicasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarmetrologicasComponent", function() { return EditarmetrologicasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditarmetrologicasComponent = /** @class */ (function () {
    function EditarmetrologicasComponent() {
    }
    EditarmetrologicasComponent.prototype.ngOnInit = function () { };
    EditarmetrologicasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editarmetrologicas',
            template: __webpack_require__(/*! raw-loader!./editarmetrologicas.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.html"),
            styles: [__webpack_require__(/*! ./editarmetrologicas.component.scss */ "./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditarmetrologicasComponent);
    return EditarmetrologicasComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9lZGl0YXJtZXRyb2xvZ2ljYXMyL2VkaXRhcm1ldHJvbG9naWNhczIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Editarmetrologicas2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editarmetrologicas2Component", function() { return Editarmetrologicas2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");







var Editarmetrologicas2Component = /** @class */ (function () {
    function Editarmetrologicas2Component(api, aux, modalController, eventos) {
        this.api = api;
        this.aux = aux;
        this.modalController = modalController;
        this.eventos = eventos;
        this.item = [];
        this.state = false;
        this.normas = [];
        this.norma = [];
        this.clase = [
            "A", "B", "C", "D"
        ];
        this.ind = [
            "Analogico", "Digital", "Mixto"
        ];
        this.pos = [
            "Horizontal", "Vertical", "Cualquiera"
        ];
        this.rg = [
            {
                value: '999.0', titulo: '0 - 999'
            },
            {
                value: '9999.0', titulo: '0 - 9999'
            },
            {
                value: '99999.0', titulo: '0 - 99999'
            },
            {
                value: '999999.0', titulo: '0 - 999999'
            }
        ];
        this.prf = [
            "Velocidad", "Volumetrico", "Electromagnetico"
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            norma: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            q3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            precision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            pmaxp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            pperdida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            q3q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            q2q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1.6),
            clasetemp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            aguasarriba: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            aguasabajo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            principio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            posicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            diametro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            rango: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            escala: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            identificador: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            pnominal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            clase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    Editarmetrologicas2Component.prototype.ngOnInit = function () {
        this.getNormas();
        this.form.patchValue({ _id: this.item._id });
        console.log(this.item);
    };
    Editarmetrologicas2Component.prototype.getNormas = function () {
        var _this = this;
        this.api.getNormas().subscribe(function (resp) {
            if (resp.ok) {
                _this.normas = resp.data;
                _this.setNorma(_this.item.metrologicas.norma);
            }
        });
    };
    Editarmetrologicas2Component.prototype.setNorma = function (it) {
        if (it == "NTC 4064-1 : 2016") {
            this.uno = true;
            this.dos = false;
            this.tres = false;
            var q3q1 = this.item.metrologicas.q3 / this.item.metrologicas.q1;
            this.form.patchValue({ type: 1 });
            this.form.patchValue({ norma: this.item.metrologicas.norma });
            this.form.patchValue({ q3: this.item.metrologicas.q3 });
            this.form.patchValue({ precision: this.item.metrologicas.precision });
            this.form.patchValue({ pmaxp: this.item.metrologicas.pmaxp });
            this.form.patchValue({ pperdida: this.item.metrologicas.pperdida });
            this.form.patchValue({ q3q1: q3q1 });
            this.form.patchValue({ clasetemp: this.item.metrologicas.clasetemp });
            this.form.patchValue({ aguasarriba: this.item.metrologicas.aguasarriba });
            this.form.patchValue({ aguasabajo: this.item.metrologicas.aguasabajo });
            this.form.patchValue({ tipo: this.item.metrologicas.tipo });
            this.form.patchValue({ principio: this.item.metrologicas.principio });
            this.form.patchValue({ posicion: this.item.metrologicas.posicion });
            this.form.patchValue({ diametro: this.item.metrologicas.diametro });
            this.form.patchValue({ rango: this.item.metrologicas.rango });
            this.form.patchValue({ escala: this.item.metrologicas.escala });
        }
        else if (it == "NTC 1063-1 : 2007") {
            this.uno = false;
            this.dos = true;
            this.tres = false;
            var q3q1 = this.item.metrologicas.q3 / this.item.metrologicas.q1;
            this.form.patchValue({ type: 2 });
            this.form.patchValue({ norma: this.item.metrologicas.norma });
            this.form.patchValue({ q3: this.item.metrologicas.q3 });
            this.form.patchValue({ precision: this.item.metrologicas.precision });
            this.form.patchValue({ pmaxp: this.item.metrologicas.pmaxp });
            this.form.patchValue({ pperdida: this.item.metrologicas.pperdida });
            this.form.patchValue({ q3q1: q3q1 });
            this.form.patchValue({ clasetemp: this.item.metrologicas.clasetemp });
            this.form.patchValue({ aguasarriba: this.item.metrologicas.aguasarriba });
            this.form.patchValue({ aguasabajo: this.item.metrologicas.aguasabajo });
            this.form.patchValue({ tipo: this.item.metrologicas.tipo });
            this.form.patchValue({ principio: this.item.metrologicas.principio });
            this.form.patchValue({ posicion: this.item.metrologicas.posicion });
            this.form.patchValue({ diametro: this.item.metrologicas.diametro });
            this.form.patchValue({ rango: this.item.metrologicas.rango });
            this.form.patchValue({ escala: this.item.metrologicas.escala });
        }
        else if (it == "NTC 1063-1 : 1995") {
            this.uno = false;
            this.dos = false;
            this.tres = true;
            this.form.patchValue({ type: 3 });
            this.form.patchValue({ norma: this.item.metrologicas.norma });
            this.form.patchValue({ q3: this.item.metrologicas.q3 });
            this.form.patchValue({ precision: this.item.metrologicas.precision });
            this.form.patchValue({ pmaxp: this.item.metrologicas.pmaxp });
            this.form.patchValue({ pperdida: this.item.metrologicas.pperdida });
            this.form.patchValue({ clasetemp: this.item.metrologicas.clasetemp });
            this.form.patchValue({ tipo: this.item.metrologicas.tipo });
            this.form.patchValue({ principio: this.item.metrologicas.principio });
            this.form.patchValue({ posicion: this.item.metrologicas.posicion });
            this.form.patchValue({ diametro: this.item.metrologicas.diametro });
            this.form.patchValue({ clase: this.item.metrologicas.clase });
            this.form.patchValue({ escala: this.item.metrologicas.escala });
            this.form.patchValue({ pnominal: this.item.metrologicas.pnominal });
            this.form.patchValue({ identificador: this.item.metrologicas.identificador });
            this.form.patchValue({ rango: this.item.metrologicas.rango });
        }
        this.norma = this.normas.find(function (e) { return e.norma == it; });
        this.state = true;
    };
    Editarmetrologicas2Component.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.updateMedidor2(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Medidor ha sido actualizado");
                        _this.modalController.dismiss();
                        _this.eventos.newUpdateAlert();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    Editarmetrologicas2Component.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Editarmetrologicas2Component.prototype, "item", void 0);
    Editarmetrologicas2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editarmetrologicas2',
            template: __webpack_require__(/*! raw-loader!./editarmetrologicas2.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.html"),
            styles: [__webpack_require__(/*! ./editarmetrologicas2.component.scss */ "./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_6__["EventosService"]])
    ], Editarmetrologicas2Component);
    return Editarmetrologicas2Component;
}());



/***/ }),

/***/ "./src/app/pages/programacion/finales/finales.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/finales/finales.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9maW5hbGVzL2ZpbmFsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/finales/finales.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/programacion/finales/finales.component.ts ***!
  \*****************************************************************/
/*! exports provided: FinalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalesComponent", function() { return FinalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FinalesComponent = /** @class */ (function () {
    function FinalesComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            medidores: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prueba: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    FinalesComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.repeticion = parseInt(this.repeticion);
        this.rp = this.repeticion;
        this.getTrabajo(this.id);
    };
    FinalesComponent.prototype.getTrabajo = function (id) {
        var _this = this;
        this.api.getOrdenTrabajo(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.datos = resp.data[0];
                _this.form.patchValue({ medidores: _this.datos.medidores });
                _this.form.patchValue({ orden: _this.id });
                _this.form.patchValue({ prueba: _this.tipo });
            }
        });
    };
    FinalesComponent.prototype.save = function () {
        var _this = this;
        this.api.updateTest(this.id, this.tipo).subscribe(function (resp) {
            if (resp.ok) {
                _this.api.condiciones(_this.form.value).subscribe(function (resp) {
                    if (resp.ok) {
                        _this.router.navigate(["/trabajo/pruebas/" + _this.id]);
                    }
                });
            }
        });
    };
    FinalesComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    FinalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finales',
            template: __webpack_require__(/*! raw-loader!./finales.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/finales/finales.component.html"),
            styles: [__webpack_require__(/*! ./finales.component.scss */ "./src/app/pages/programacion/finales/finales.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FinalesComponent);
    return FinalesComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/generar/generar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/generar/generar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".derogado {\n  background-image: url(\"/assets/images/obsoleto.png\");\n}\n\n#print {\n  display: none;\n}\n\n#noprint {\n  display: block;\n}\n\n/* invert the display (show/hide) properties of the main */\n\n/* aplication component and the printing component       */\n\n@media print {\n  #noprint > * {\n    display: none;\n  }\n\n  #print {\n    display: block;\n    min-width: 815, 99999px !important;\n    max-width: 816, 0px !important;\n    font-size: 14px;\n  }\n\n  .derogado {\n    background-image: url(\"/assets/images/obsoleto.png\");\n    background-size: cover;\n  }\n\n  .thead {\n    background-color: lightgray;\n  }\n\n  .encabezado {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    align-content: center;\n  }\n\n  .contenido {\n    min-height: 84vh;\n  }\n\n  .membreteL {\n    position: relative;\n    min-width: 563px !important;\n  }\n\n  .logo1 {\n    position: relative;\n    width: 120px !important;\n    margin-top: 2mm;\n    margin-bottom: 2mm;\n  }\n\n  .logo2 {\n    position: relative;\n    width: 120px !important;\n    margin-top: 2mm;\n    margin-bottom: 2mm;\n  }\n\n  table.Table1 {\n    min-width: 100% !important;\n    text-align: center;\n    border-collapse: collapse;\n  }\n\n  table.Table1 td, table.Table1 th {\n    border: 1px solid #000000;\n  }\n\n  table.Table1 tbody td {\n    font-size: 9pt;\n    color: #000000;\n    word-wrap: break-word;\n  }\n\n  td {\n    min-width: 94.667px;\n  }\n\n  td table.Table1 thead,\n.thead {\n    background: #D8D8D8 !important;\n  }\n\n  table.Table1 thead th, .thead {\n    font-size: 9pt;\n    text-transform: uppercase;\n    font-weight: normal;\n    color: #000000;\n    border-left: 1px solid #000000;\n  }\n\n  .padding {\n    padding: 5px 0 5px 0;\n  }\n\n  .upper {\n    text-transform: uppercase;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .p-0 {\n    padding: 0;\n  }\n\n  .m-0 {\n    margin: 0 !important;\n  }\n\n  .ml-3 {\n    margin-left: 1rem;\n  }\n\n  .mr-3 {\n    margin-right: 1rem;\n  }\n\n  .mb-3 {\n    margin-bottom: 1rem;\n  }\n\n  .mb-6 {\n    margin-bottom: 2rem;\n  }\n\n  .border-top {\n    border-top: 1px solid black !important;\n  }\n\n  .mr-1 {\n    margin-right: 0.3rem;\n  }\n\n  .paddingtotal {\n    padding: 0.3rem;\n  }\n\n  .flex-calibracion {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: nowrap;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n            align-items: center;\n    align-content: center;\n  }\n\n  .flex-firma {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n    align-content: center;\n  }\n\n  .border-0 {\n    border: 0 none !important;\n  }\n\n  .space {\n    border-left: 0 none white !important;\n    border-right: 0 none white !important;\n  }\n\n  .mini {\n    min-width: 46px !important;\n    max-width: 46.333px !important;\n    font-size: 8pt !important;\n  }\n\n  .mini2 {\n    min-width: 66px !important;\n    max-width: 66.333px !important;\n    font-size: 8pt !important;\n  }\n\n  .minithead {\n    background: #D8D8D8;\n    text-transform: none;\n    font-weight: normal;\n    color: #000000;\n    border-left: 1px solid #000000;\n  }\n\n  .TableMini {\n    border: 1px solid #000000;\n    text-align: center;\n    border-collapse: collapse;\n  }\n\n  .noborder {\n    border-top: 0 none white !important;\n    border-bottom: 0 none white !important;\n  }\n\n  .flex-footer {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    align-content: flex-end;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2dlbmVyYXIvQzpcXFByb3llY3Rvc1xcc2VydmFmXFxzZXJ2YWZhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9ncmFtYWNpb25cXGdlbmVyYXJcXGdlbmVyYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9nZW5lcmFyL2dlbmVyYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvREFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRFNJLDBEQUFBOztBQUNBLDBEQUFBOztBQUlGO0VBRUU7SUFBZSxhQUFBO0VDVGpCOztFRFdFO0lBQ0UsY0FBQTtJQUNBLGtDQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0VDUko7O0VEWUU7SUFDRSxvREFBQTtJQUNBLHNCQUFBO0VDVEo7O0VEaUJFO0lBQ0ksMkJBQUE7RUNkTjs7RURpQkU7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDRiw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EscUJBQUE7RUNkSjs7RURpQkU7SUFDRSxnQkFBQTtFQ2RKOztFRGlCRTtJQUNJLGtCQUFBO0lBQ0EsMkJBQUE7RUNkTjs7RURnQkU7SUFDSSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDYk47O0VEZUU7SUFDSSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDWk47O0VEZUU7SUFDSSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7RUNaTjs7RURjSTtJQUNFLHlCQUFBO0VDWE47O0VEYUk7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0VDVk47O0VEWUk7SUFDRSxtQkFBQTtFQ1ROOztFRFdJOztJQUVFLDhCQUFBO0VDUk47O0VEVUk7SUFDRSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSw4QkFBQTtFQ1BOOztFRFVFO0lBQ0ksb0JBQUE7RUNQTjs7RURTRTtJQUNJLHlCQUFBO0VDTk47O0VEUUU7SUFDSSxnQkFBQTtFQ0xOOztFRE9FO0lBQ0ksVUFBQTtFQ0pOOztFRE1FO0lBQ0ksb0JBQUE7RUNITjs7RURLRTtJQUNJLGlCQUFBO0VDRk47O0VESUU7SUFDRSxrQkFBQTtFQ0RKOztFREdBO0lBQ0ksbUJBQUE7RUNBSjs7RURFQTtJQUNJLG1CQUFBO0VDQ0o7O0VEQ0k7SUFDSSxzQ0FBQTtFQ0VSOztFREFFO0lBQ0Usb0JBQUE7RUNHSjs7RURERTtJQUNJLGVBQUE7RUNJTjs7RURERTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7WUFBQSwyQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxxQkFBQTtFQ0lOOztFREZJO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EsMEJBQUE7WUFBQSxvQkFBQTtJQUNBLHFCQUFBO0VDS047O0VERkk7SUFDRSx5QkFBQTtFQ0tOOztFREhFO0lBQ0ksb0NBQUE7SUFDQSxxQ0FBQTtFQ01OOztFREpFO0lBQ0ksMEJBQUE7SUFDQSw4QkFBQTtJQUNBLHlCQUFBO0VDT047O0VETEU7SUFDRSwwQkFBQTtJQUNBLDhCQUFBO0lBQ0EseUJBQUE7RUNRSjs7RURORTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSw4QkFBQTtFQ1NKOztFRFBBO0lBQ0kseUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VDVUo7O0VEUkE7SUFDSSxtQ0FBQTtJQUNBLHNDQUFBO0VDV0o7O0VEVEE7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7WUFBQSxxQkFBQTtJQUNBLHVCQUFBO0VDWUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9nZW5lcmFyL2dlbmVyYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5kZXJvZ2Fkb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL29ic29sZXRvLnBuZycpO1xyXG59XHJcblxyXG4jcHJpbnR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI25vcHJpbnR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qIGludmVydCB0aGUgZGlzcGxheSAoc2hvdy9oaWRlKSBwcm9wZXJ0aWVzIG9mIHRoZSBtYWluICovXHJcbiAgICAvKiBhcGxpY2F0aW9uIGNvbXBvbmVudCBhbmQgdGhlIHByaW50aW5nIGNvbXBvbmVudCAgICAgICAqL1xyXG4gICAgXHJcblxyXG5cclxuICBAbWVkaWEgcHJpbnR7XHJcblxyXG4gICAgI25vcHJpbnQgPiAqIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuICAgICNwcmludCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtaW4td2lkdGg6IDgxNSw5OTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogODE2LDAwMDAwcHggIWltcG9ydGFudDsgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5kZXJvZ2Fkb3tcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9vYnNvbGV0by5wbmcnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAuYmxhbmNve1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC50aGVhZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7IFxyXG4gICAgfVxyXG5cclxuICAgIC5lbmNhYmV6YWRve1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW5pZG97XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDg0dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbWJyZXRlTHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1NjNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxvZ28xe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAybW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMm1tO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDs7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMm1tO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJtbTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZS5UYWJsZTEge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlLlRhYmxlMSB0ZCwgdGFibGUuVGFibGUxIHRoIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlLlRhYmxlMSB0Ym9keSB0ZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICB9XHJcbiAgICAgIHRke1xyXG4gICAgICAgIG1pbi13aWR0aDogOTQuNjY3cHg7XHJcbiAgICAgIH0gXHJcbiAgICAgIHRkIFxyXG4gICAgICB0YWJsZS5UYWJsZTEgdGhlYWQsIC50aGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Q4RDhEOCAhaW1wb3J0YW50OyAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGFibGUuVGFibGUxIHRoZWFkIHRoLCAudGhlYWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgIC5wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xyXG4gICAgfVxyXG4gICAgLnVwcGVye1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAudGV4dC1sZWZ0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gICAgLnAtMHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm0tMHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tbC0ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLm1yLTN7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcbiAgLm1iLTN7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIC5tYi02e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICAgICAgLmJvcmRlci10b3B7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgLm1yLTF7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG4gIH1cclxuICAgIC5wYWRkaW5ndG90YWx7XHJcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWNhbGlicmFjaW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmZsZXgtZmlybWF7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgLmJvcmRlci0we1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3BhY2V7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDAgbm9uZSB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMCBub25lIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWluaXtcclxuICAgICAgICBtaW4td2lkdGg6IDQ2cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ2LjMzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5taW5pMntcclxuICAgICAgbWluLXdpZHRoOiA2NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogNjYuMzMzcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiA4cHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgICAubWluaXRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogI0Q4RDhEODtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgLlRhYmxlTWluaSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIH1cclxuICAubm9ib3JkZXJ7XHJcbiAgICAgIGJvcmRlci10b3A6IDAgbm9uZSAgd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMCBub25lIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mbGV4LWZvb3RlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5kZXJvZ2FkbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL29ic29sZXRvLnBuZ1wiKTtcbn1cblxuI3ByaW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI25vcHJpbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogaW52ZXJ0IHRoZSBkaXNwbGF5IChzaG93L2hpZGUpIHByb3BlcnRpZXMgb2YgdGhlIG1haW4gKi9cbi8qIGFwbGljYXRpb24gY29tcG9uZW50IGFuZCB0aGUgcHJpbnRpbmcgY29tcG9uZW50ICAgICAgICovXG5AbWVkaWEgcHJpbnQge1xuICAjbm9wcmludCA+ICoge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjcHJpbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogODE1LCA5OTk5OXB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MTYsIDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5kZXJvZ2FkbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb2Jzb2xldG8ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAudGhlYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgfVxuXG4gIC5lbmNhYmV6YWRvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbmlkbyB7XG4gICAgbWluLWhlaWdodDogODR2aDtcbiAgfVxuXG4gIC5tZW1icmV0ZUwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDU2M3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubG9nbzEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAybW07XG4gICAgbWFyZ2luLWJvdHRvbTogMm1tO1xuICB9XG5cbiAgLmxvZ28yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMm1tO1xuICAgIG1hcmdpbi1ib3R0b206IDJtbTtcbiAgfVxuXG4gIHRhYmxlLlRhYmxlMSB7XG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0YWJsZS5UYWJsZTEgdGQsIHRhYmxlLlRhYmxlMSB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgfVxuXG4gIHRhYmxlLlRhYmxlMSB0Ym9keSB0ZCB7XG4gICAgZm9udC1zaXplOiA5cHQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgdGQge1xuICAgIG1pbi13aWR0aDogOTQuNjY3cHg7XG4gIH1cblxuICB0ZCB0YWJsZS5UYWJsZTEgdGhlYWQsXG4udGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICNEOEQ4RDggIWltcG9ydGFudDtcbiAgfVxuXG4gIHRhYmxlLlRhYmxlMSB0aGVhZCB0aCwgLnRoZWFkIHtcbiAgICBmb250LXNpemU6IDlwdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB9XG5cbiAgLnBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xuICB9XG5cbiAgLnVwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5wLTAge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubS0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tbC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuXG4gIC5tci0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cblxuICAubWItMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5tYi02IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLmJvcmRlci10b3Age1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICB9XG5cbiAgLnBhZGRpbmd0b3RhbCB7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICB9XG5cbiAgLmZsZXgtY2FsaWJyYWNpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZmxleC1maXJtYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuYm9yZGVyLTAge1xuICAgIGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3BhY2Uge1xuICAgIGJvcmRlci1sZWZ0OiAwIG5vbmUgd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgbm9uZSB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1pbmkge1xuICAgIG1pbi13aWR0aDogNDZweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNDYuMzMzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDhwdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1pbmkyIHtcbiAgICBtaW4td2lkdGg6IDY2cHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDY2LjMzM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiA4cHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5taW5pdGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICNEOEQ4RDg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDAwMDA7XG4gIH1cblxuICAuVGFibGVNaW5pIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB9XG5cbiAgLm5vYm9yZGVyIHtcbiAgICBib3JkZXItdG9wOiAwIG5vbmUgd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAwIG5vbmUgd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbGV4LWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/generar/generar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/programacion/generar/generar.component.ts ***!
  \*****************************************************************/
/*! exports provided: GenerarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarComponent", function() { return GenerarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var GenerarComponent = /** @class */ (function () {
    function GenerarComponent(api, titleService, alertController, route, router, aux) {
        this.api = api;
        this.titleService = titleService;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.aux = aux;
        this.ready = false;
        this.inf = false;
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
        this.item = [];
        this.q1 = [];
        this.q2 = [];
        this.q3 = [];
        this.q4 = [];
        this.ambientales = [];
        this.datos = [];
        this.nominales = [];
    }
    GenerarComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getMedidor(this.id);
    };
    GenerarComponent.prototype.changeTitle = function (id) {
        this.titleService.setTitle(id);
    };
    GenerarComponent.prototype.getMedidor = function (id) {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.getMedidor(id).subscribe(function (resp) {
                if (resp.ok) {
                    _this.item = resp.data[0];
                    _this.cliente = _this.item.cliente;
                    _this.metologicas = _this.item.metrologicas;
                    _this.instrumentos = _this.item.instrumentos;
                    _this.entrada = _this.item.orden_entrada;
                    _this.trabajo = _this.item.orden_trabajo;
                    _this.q1 = _this.item.q1;
                    _this.q2 = _this.item.q2;
                    _this.q3 = _this.item.q3;
                    _this.q4 = _this.item.q4;
                    _this.ambientales = _this.item.ambientales;
                    _this.rango = _this.metologicas.relacion || "NA";
                    if (_this.item.type == "3") {
                        _this.api.getnominaluno(_this.metologicas.clase, _this.metologicas.diametro).subscribe(function (resp) {
                            if (resp.ok) {
                                _this.nominales = resp.data.valores;
                                _this.nominaluno = _this.nominales[0];
                                _this.nominaldos = _this.nominales[1];
                                _this.nominaltres = _this.nominales[2];
                            }
                        });
                    }
                    else {
                        _this.api.getnominaldos(_this.metologicas.relacion, _this.metologicas.diametro).subscribe(function (resp) {
                            if (resp.ok) {
                                _this.nominales = resp.data.valores;
                                _this.nominaluno = _this.nominales[0];
                                _this.nominaldos = _this.nominales[1];
                                _this.nominaltres = _this.nominales[2];
                            }
                        });
                    }
                    _this.descargar(_this.id, "certificado");
                }
            });
        }).catch(function (error) {
        });
    };
    GenerarComponent.prototype.descargar = function (id, tipo) {
        var _this = this;
        this.api.downloadCertificado(id, tipo).subscribe(function (resp) {
            if (resp.ok) {
                _this.datos = resp.data;
                _this.inf = true;
                _this.ready = true;
                _this.aux.dismissLoading();
                setTimeout(function () {
                    _this.print();
                }, 1500);
            }
        });
    };
    GenerarComponent.prototype.print = function () {
        var titulo = this.item.year + "-" + this.item.consecutivo;
        this.changeTitle(titulo);
        window.print();
        this.changeTitle('ServafAPP');
    };
    GenerarComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_5__["AuxService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('print', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GenerarComponent.prototype, "content", void 0);
    GenerarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generar',
            template: __webpack_require__(/*! raw-loader!./generar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/generar/generar.component.html"),
            styles: [__webpack_require__(/*! ./generar.component.scss */ "./src/app/pages/programacion/generar/generar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_5__["AuxService"]])
    ], GenerarComponent);
    return GenerarComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/informedos/informedos.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/programacion/informedos/informedos.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nhtml, body {\n  font-size: 12pt !important;\n  font-family: Arial, Helvetica, sans-serif;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n* {\n  color: #000 !important;\n}\n#legal {\n  min-width: 815, 99999px !important;\n  max-width: 816, 0px !important;\n}\n.encabezado {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  width: 100%;\n  /* hacemos que la cabecera ocupe el ancho completo de la página */\n  left: 0;\n  /* Posicionamos la cabecera al lado izquierdo */\n  top: 0;\n  /* Posicionamos la cabecera pegada arriba */\n  position: fixed;\n  /* Hacemos que la cabecera tenga una posición fija */\n}\n.contenido {\n  min-height: 80vh;\n}\n.membreteL {\n  position: relative;\n  width: calc(100% - 120px) !important;\n  text-align: center;\n}\n.logo1 {\n  position: relative;\n  width: 120px !important;\n}\n.foto {\n  margin-top: 10px;\n}\ntable.Table1 {\n  min-width: 100% !important;\n  text-align: center;\n  border-collapse: collapse;\n  min-height: 80vh;\n}\ntable.Table1 td, table.Table1 th {\n  border: 1px solid #000000;\n}\ntable.Table1 tbody td {\n  font-size: 9pt;\n  color: #000000;\n  word-wrap: break-word;\n}\ntd table.Table1 thead,\n.thead {\n  background: #D8D8D8 !important;\n}\ntable.Table1 thead th, .thead {\n  font-size: 9pt;\n  text-transform: uppercase;\n  font-weight: normal;\n  color: #000000;\n  border-left: 1px solid #000000;\n}\n.upper {\n  text-transform: uppercase;\n}\n.text-left {\n  text-align: left;\n}\n.my-1 {\n  margin: 0.3rem 0 0.3rem 0 !important;\n}\n.flex-firma {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  align-content: center;\n}\n.flex-footer {\n  margin-top: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  align-content: flex-end;\n}\n#print {\n  display: none;\n}\n#noprint {\n  display: block;\n}\n@media print {\n  /* invert the display (show/hide) properties of the main */\n  /* aplication component and the printing component       */\n  #noprint > * {\n    display: none;\n  }\n\n  #print {\n    display: block;\n  }\n\n  .foto {\n    height: 200px;\n    width: auto;\n  }\n\n  #legal {\n    min-width: 815, 99999px !important;\n    max-width: 816, 0px !important;\n  }\n\n  .encabezado {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    align-content: center;\n  }\n\n  .membreteL {\n    position: relative;\n    width: calc(100% - 120px) !important;\n    text-align: center;\n  }\n\n  .logo1 {\n    position: relative;\n    width: 120px !important;\n  }\n\n  table.Table1 {\n    min-width: 100% !important;\n    text-align: center;\n    border-collapse: collapse;\n  }\n\n  table.Table1 td, table.Table1 th {\n    border: 1px solid #000000;\n  }\n\n  table.Table1 tbody td {\n    font-size: 9pt;\n    color: #000000;\n    word-wrap: break-word;\n  }\n\n  td table.Table1 thead,\n.thead {\n    background: #D8D8D8 !important;\n  }\n\n  table.Table1 thead th, .thead {\n    font-size: 9pt;\n    text-transform: uppercase;\n    font-weight: normal;\n    color: #000000;\n    border-left: 1px solid #000000;\n  }\n\n  .upper {\n    text-transform: uppercase;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .my-1 {\n    margin: 0.3rem 0 0.3rem 0 !important;\n  }\n\n  .flex-firma {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: stretch;\n            align-items: stretch;\n    align-content: center;\n  }\n\n  .flex-footer {\n    margin-top: auto;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    align-content: flex-end;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2luZm9ybWVkb3MvaW5mb3JtZWRvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2luZm9ybWVkb3MvQzpcXFByb3llY3Rvc1xcc2VydmFmXFxzZXJ2YWZhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9ncmFtYWNpb25cXGluZm9ybWVkb3NcXGluZm9ybWVkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0NBO0VBQUcsc0JBQUE7QURHSDtBQ0RBO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtBRElKO0FDRkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQWEsaUVBQUE7RUFDZCxPQUFBO0VBQVMsK0NBQUE7RUFDVCxNQUFBO0VBQVEsMkNBQUE7RUFDUixlQUFBO0VBQWlCLG9EQUFBO0FEU2xCO0FDTkE7RUFDRSxnQkFBQTtBRFNGO0FDUEE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QURVSjtBQ1JBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBRFdKO0FDVEE7RUFDRSxnQkFBQTtBRFlGO0FDVkE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBRGFKO0FDWEU7RUFDRSx5QkFBQTtBRGNKO0FDWkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FEZUo7QUNiRTs7RUFFRSw4QkFBQTtBRGdCSjtBQ2RFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QURpQko7QUNmRTtFQUNJLHlCQUFBO0FEa0JOO0FDaEJFO0VBQ0ksZ0JBQUE7QURtQk47QUNqQkU7RUFDRSxvQ0FBQTtBRG9CSjtBQ2xCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDBCQUFBO1VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBRHFCSjtBQ25CQztFQUNHLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSx1QkFBQTtBRHNCSjtBQ25CQTtFQUNFLGFBQUE7QURzQkY7QUNuQkE7RUFDRSxjQUFBO0FEc0JGO0FDbEJBO0VBQ0UsMERBQUE7RUFDQSwwREFBQTtFQUVBO0lBQWUsYUFBQTtFRHFCZjs7RUNuQkE7SUFDRSxjQUFBO0VEc0JGOztFQ25CQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VEc0JGOztFQ25CQTtJQUNFLGtDQUFBO0lBQ0EsOEJBQUE7RURzQkY7O0VDbkJGO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLHFCQUFBO0VEc0JBOztFQ3BCRjtJQUNJLGtCQUFBO0lBQ0Esb0NBQUE7SUFDQSxrQkFBQTtFRHVCRjs7RUNyQkY7SUFDSSxrQkFBQTtJQUNBLHVCQUFBO0VEd0JGOztFQ3RCRjtJQUNJLDBCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFRHlCRjs7RUN2QkE7SUFDRSx5QkFBQTtFRDBCRjs7RUN4QkE7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0VEMkJGOztFQ3pCQTs7SUFFRSw4QkFBQTtFRDRCRjs7RUMxQkE7SUFDRSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSw4QkFBQTtFRDZCRjs7RUMzQkE7SUFDSSx5QkFBQTtFRDhCSjs7RUM1QkE7SUFDSSxnQkFBQTtFRCtCSjs7RUM3QkE7SUFDRSxvQ0FBQTtFRGdDRjs7RUM5QkE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7SUFDQSwwQkFBQTtZQUFBLG9CQUFBO0lBQ0EscUJBQUE7RURpQ0Y7O0VDL0JEO0lBQ0csZ0JBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7WUFBQSxxQkFBQTtJQUNBLHVCQUFBO0VEa0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9ncmFtYWNpb24vaW5mb3JtZWRvcy9pbmZvcm1lZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaHRtbCwgYm9keSB7XG4gIGZvbnQtc2l6ZTogMTJwdCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xufVxuXG4qIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuI2xlZ2FsIHtcbiAgbWluLXdpZHRoOiA4MTUsIDk5OTk5cHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MTYsIDBweCAhaW1wb3J0YW50O1xufVxuXG4uZW5jYWJlemFkbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhhY2Vtb3MgcXVlIGxhIGNhYmVjZXJhIG9jdXBlIGVsIGFuY2hvIGNvbXBsZXRvIGRlIGxhIHDDoWdpbmEgKi9cbiAgbGVmdDogMDtcbiAgLyogUG9zaWNpb25hbW9zIGxhIGNhYmVjZXJhIGFsIGxhZG8gaXpxdWllcmRvICovXG4gIHRvcDogMDtcbiAgLyogUG9zaWNpb25hbW9zIGxhIGNhYmVjZXJhIHBlZ2FkYSBhcnJpYmEgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBIYWNlbW9zIHF1ZSBsYSBjYWJlY2VyYSB0ZW5nYSB1bmEgcG9zaWNpw7NuIGZpamEgKi9cbn1cblxuLmNvbnRlbmlkbyB7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59XG5cbi5tZW1icmV0ZUwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCkgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nbzEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZm90byB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnRhYmxlLlRhYmxlMSB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG59XG5cbnRhYmxlLlRhYmxlMSB0ZCwgdGFibGUuVGFibGUxIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxudGFibGUuVGFibGUxIHRib2R5IHRkIHtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbnRkIHRhYmxlLlRhYmxlMSB0aGVhZCxcbi50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNEOEQ4RDggIWltcG9ydGFudDtcbn1cblxudGFibGUuVGFibGUxIHRoZWFkIHRoLCAudGhlYWQge1xuICBmb250LXNpemU6IDlwdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLnVwcGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5teS0xIHtcbiAgbWFyZ2luOiAwLjNyZW0gMCAwLjNyZW0gMCAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1maXJtYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4LWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuI3ByaW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI25vcHJpbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLyogaW52ZXJ0IHRoZSBkaXNwbGF5IChzaG93L2hpZGUpIHByb3BlcnRpZXMgb2YgdGhlIG1haW4gKi9cbiAgLyogYXBsaWNhdGlvbiBjb21wb25lbnQgYW5kIHRoZSBwcmludGluZyBjb21wb25lbnQgICAgICAgKi9cbiAgI25vcHJpbnQgPiAqIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3ByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5mb3RvIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgI2xlZ2FsIHtcbiAgICBtaW4td2lkdGg6IDgxNSwgOTk5OTlweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogODE2LCAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5lbmNhYmV6YWRvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLm1lbWJyZXRlTCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCkgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubG9nbzEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIHRhYmxlLlRhYmxlMSB7XG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cblxuICB0YWJsZS5UYWJsZTEgdGQsIHRhYmxlLlRhYmxlMSB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgfVxuXG4gIHRhYmxlLlRhYmxlMSB0Ym9keSB0ZCB7XG4gICAgZm9udC1zaXplOiA5cHQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgdGQgdGFibGUuVGFibGUxIHRoZWFkLFxuLnRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRDhEOEQ4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICB0YWJsZS5UYWJsZTEgdGhlYWQgdGgsIC50aGVhZCB7XG4gICAgZm9udC1zaXplOiA5cHQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDtcbiAgfVxuXG4gIC51cHBlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAubXktMSB7XG4gICAgbWFyZ2luOiAwLjNyZW0gMCAwLjNyZW0gMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsZXgtZmlybWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZsZXgtZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn0iLCJodG1sLCBib2R5e1xyXG4gICAgZm9udC1zaXplOjEycHQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7XHJcbiAgICBjb2xvci1hZGp1c3Q6ZXhhY3Q7XHJcbn0gIFxyXG4gICAgXHJcbioge2NvbG9yOiMwMDAgIWltcG9ydGFudDsgfSBcclxuXHJcbiNsZWdhbHtcclxuICAgIG1pbi13aWR0aDogODE1LDk5OTk5cHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogODE2LDAwMDAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZW5jYWJlemFkb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBoYWNlbW9zIHF1ZSBsYSBjYWJlY2VyYSBvY3VwZSBlbCBhbmNobyBjb21wbGV0byBkZSBsYSBww6FnaW5hICovXHJcblx0bGVmdDogMDsgLyogUG9zaWNpb25hbW9zIGxhIGNhYmVjZXJhIGFsIGxhZG8gaXpxdWllcmRvICovXHJcblx0dG9wOiAwOyAvKiBQb3NpY2lvbmFtb3MgbGEgY2FiZWNlcmEgcGVnYWRhIGFycmliYSAqL1xyXG5cdHBvc2l0aW9uOiBmaXhlZDsgLyogSGFjZW1vcyBxdWUgbGEgY2FiZWNlcmEgdGVuZ2EgdW5hIHBvc2ljacOzbiBmaWphICovXHJcbn1cclxuXHJcbi5jb250ZW5pZG97XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxufVxyXG4ubWVtYnJldGVMe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dvMXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3Rve1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxudGFibGUuVGFibGUxIHtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG4gIHRhYmxlLlRhYmxlMSB0ZCwgdGFibGUuVGFibGUxIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgfVxyXG4gIHRhYmxlLlRhYmxlMSB0Ym9keSB0ZCB7XHJcbiAgICBmb250LXNpemU6IDlwdDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICB0ZCBcclxuICB0YWJsZS5UYWJsZTEgdGhlYWQsIC50aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDhEOEQ4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRhYmxlLlRhYmxlMSB0aGVhZCB0aCwgLnRoZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDtcclxuICB9XHJcbiAgLnVwcGVye1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAudGV4dC1sZWZ0e1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiAgLm15LTF7XHJcbiAgICBtYXJnaW46IDAuM3JlbSAwIDAuM3JlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuICAuZmxleC1maXJtYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAuZmxleC1mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiNwcmludCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI25vcHJpbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAvKiBpbnZlcnQgdGhlIGRpc3BsYXkgKHNob3cvaGlkZSkgcHJvcGVydGllcyBvZiB0aGUgbWFpbiAqL1xyXG4gIC8qIGFwbGljYXRpb24gY29tcG9uZW50IGFuZCB0aGUgcHJpbnRpbmcgY29tcG9uZW50ICAgICAgICovXHJcbiAgXHJcbiAgI25vcHJpbnQgPiAqIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gICNwcmludCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5mb3Rve1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgI2xlZ2Fse1xyXG4gICAgbWluLXdpZHRoOiA4MTUsOTk5OTlweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA4MTYsMDAwMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW5jYWJlemFkb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tZW1icmV0ZUx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ28xe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUuVGFibGUxIHtcclxuICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgdGFibGUuVGFibGUxIHRkLCB0YWJsZS5UYWJsZTEgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICB9XHJcbiAgdGFibGUuVGFibGUxIHRib2R5IHRkIHtcclxuICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIHRkIFxyXG4gIHRhYmxlLlRhYmxlMSB0aGVhZCwgLnRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6ICNEOEQ4RDggIWltcG9ydGFudDtcclxuICB9XHJcbiAgdGFibGUuVGFibGUxIHRoZWFkIHRoLCAudGhlYWQge1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIH1cclxuICAudXBwZXJ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC50ZXh0LWxlZnR7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuICAubXktMXtcclxuICAgIG1hcmdpbjogMC4zcmVtIDAgMC4zcmVtIDAgIWltcG9ydGFudDtcclxufVxyXG4gIC5mbGV4LWZpcm1he1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuIC5mbGV4LWZvb3RlcntcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/programacion/informedos/informedos.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/programacion/informedos/informedos.component.ts ***!
  \***********************************************************************/
/*! exports provided: InformedosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformedosComponent", function() { return InformedosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var InformedosComponent = /** @class */ (function () {
    function InformedosComponent(route, api) {
        this.route = route;
        this.api = api;
        this.ready = false;
        this.imagenes = [];
    }
    InformedosComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.get(this.id);
    };
    InformedosComponent.prototype.get = function (id) {
        var _this = this;
        this.api.getMedidor3(id).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!resp.ok) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, resp.data[0]];
                    case 1:
                        _a.item = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.item.imagenes];
                    case 2:
                        _b.imagenes = _c.sent();
                        this.ready = true;
                        setTimeout(function () {
                            _this.print();
                        }, 1000);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    InformedosComponent.prototype.print = function () {
        window.print();
    };
    InformedosComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('print', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InformedosComponent.prototype, "doc", void 0);
    InformedosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informedos',
            template: __webpack_require__(/*! raw-loader!./informedos.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/informedos/informedos.component.html"),
            styles: [__webpack_require__(/*! ./informedos.component.scss */ "./src/app/pages/programacion/informedos/informedos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], InformedosComponent);
    return InformedosComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/iniciales/iniciales.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/programacion/iniciales/iniciales.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9pbmljaWFsZXMvaW5pY2lhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/programacion/iniciales/iniciales.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/programacion/iniciales/iniciales.component.ts ***!
  \*********************************************************************/
/*! exports provided: InicialesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicialesComponent", function() { return InicialesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InicialesComponent = /** @class */ (function () {
    function InicialesComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            medidores: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            prueba: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    InicialesComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.repeticion = parseInt(this.repeticion);
        this.rp = this.repeticion;
        this.getTrabajo(this.id);
    };
    InicialesComponent.prototype.getTrabajo = function (id) {
        var _this = this;
        this.api.getOrdenTrabajo(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.datos = resp.data[0];
                _this.form.patchValue({ medidores: _this.datos.medidores });
                _this.form.patchValue({ orden: _this.id });
                _this.form.patchValue({ prueba: _this.tipo });
            }
        });
    };
    InicialesComponent.prototype.save = function () {
        var _this = this;
        this.api.condiciones(this.form.value).subscribe(function (resp) {
            if (resp.ok) {
                _this.router.navigate(["/trabajo/q1/" + _this.id], { queryParams: { tipo: _this.tipo, numero: _this.repeticion } });
            }
        });
    };
    InicialesComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    InicialesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-iniciales',
            template: __webpack_require__(/*! raw-loader!./iniciales.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/iniciales/iniciales.component.html"),
            styles: [__webpack_require__(/*! ./iniciales.component.scss */ "./src/app/pages/programacion/iniciales/iniciales.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], InicialesComponent);
    return InicialesComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/instrumentos/instrumentos.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/programacion/instrumentos/instrumentos.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Ion-select {\n  max-width: 70% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL2luc3RydW1lbnRvcy9DOlxcUHJveWVjdG9zXFxzZXJ2YWZcXHNlcnZhZmFwcC9zcmNcXGFwcFxccGFnZXNcXHByb2dyYW1hY2lvblxcaW5zdHJ1bWVudG9zXFxpbnN0cnVtZW50b3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9pbnN0cnVtZW50b3MvaW5zdHJ1bWVudG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9pbnN0cnVtZW50b3MvaW5zdHJ1bWVudG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiSW9uLXNlbGVjdHtcclxuICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIklvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/instrumentos/instrumentos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/programacion/instrumentos/instrumentos.component.ts ***!
  \***************************************************************************/
/*! exports provided: InstrumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentosComponent", function() { return InstrumentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");






var InstrumentosComponent = /** @class */ (function () {
    function InstrumentosComponent(api, route, router, aux) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.aux = aux;
        this.instrumentos = [];
        this.state = false;
        this.banco = "";
        this.default = [];
        this.seleccion = [];
        this.valueq4 = false;
        this.unique = "";
        this.formq1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_salida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t_entrada_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp_ambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.formq2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_salida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t_entrada_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp_ambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.formq3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_salida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t_entrada_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp_ambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.formq4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            humedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_entrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            presion_salida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            t_entrada_agua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temp_ambiente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tiempo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    InstrumentosComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        console.log(this.id);
        this.getTrabajo(this.id);
        this.getInstrumentos();
        this.getDefault();
    };
    InstrumentosComponent.prototype.getInstrumentos = function () {
        var _this = this;
        this.api.getAllInstrumentos().subscribe(function (resp) {
            if (resp.ok) {
                _this.instrumentos = resp.data;
            }
        });
    };
    InstrumentosComponent.prototype.getTrabajo = function (id) {
        var _this = this;
        this.api.getOrdenTrabajo(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.datos = resp.data[0];
                _this.formq1.patchValue({ orden: _this.id });
                _this.formq2.patchValue({ orden: _this.id });
                _this.formq3.patchValue({ orden: _this.id });
                _this.formq4.patchValue({ orden: _this.id });
                _this.unique = _this.datos.medidores[0];
                _this.getMedidor(_this.unique);
                if (_this.datos.tipo == 1) {
                    _this.tipo = "Calibracion";
                }
                else if (_this.datos.tipo == 2) {
                    _this.tipo = "Perdida de Carga";
                }
                else {
                    _this.tipo = "Presion Hidroestatica";
                }
            }
        });
    };
    InstrumentosComponent.prototype.getDefault = function () {
        var _this = this;
        this.api.getDefaultInstrumentos().subscribe(function (resp) {
            if (resp.ok) {
                _this.default = resp.data[0];
                _this.formq1.patchValue({ rvm: _this.default.rvm });
                _this.formq1.patchValue({ t_entrada_agua: _this.default.t_entrada_agua });
                _this.formq1.patchValue({ tiempo: _this.default.tiempo });
                _this.formq1.patchValue({ temp_ambiente: _this.default.temp_ambiente });
                _this.formq1.patchValue({ humedad: _this.default.humedad });
                _this.formq1.patchValue({ presion_entrada: _this.default.presion_entrada });
                _this.formq1.patchValue({ presion_salida: _this.default.presion_salida });
                _this.formq1.patchValue({ caudal: _this.default.caudal });
                _this.formq1.patchValue({ temprvm: _this.default.temprvm });
                _this.formq2.patchValue({ rvm: _this.default.rvm });
                _this.formq2.patchValue({ t_entrada_agua: _this.default.t_entrada_agua });
                _this.formq2.patchValue({ tiempo: _this.default.tiempo });
                _this.formq2.patchValue({ temp_ambiente: _this.default.temp_ambiente });
                _this.formq2.patchValue({ humedad: _this.default.humedad });
                _this.formq2.patchValue({ presion_entrada: _this.default.presion_entrada });
                _this.formq2.patchValue({ presion_salida: _this.default.presion_salida });
                _this.formq2.patchValue({ caudal: _this.default.caudal });
                _this.formq2.patchValue({ temprvm: _this.default.temprvm });
                _this.formq3.patchValue({ rvm: _this.default.rvm });
                _this.formq3.patchValue({ t_entrada_agua: _this.default.t_entrada_agua });
                _this.formq3.patchValue({ tiempo: _this.default.tiempo });
                _this.formq3.patchValue({ temp_ambiente: _this.default.temp_ambiente });
                _this.formq3.patchValue({ humedad: _this.default.humedad });
                _this.formq3.patchValue({ presion_entrada: _this.default.presion_entrada });
                _this.formq3.patchValue({ presion_salida: _this.default.presion_salida });
                _this.formq3.patchValue({ caudal: _this.default.caudal });
                _this.formq3.patchValue({ temprvm: _this.default.temprvm });
                _this.formq4.patchValue({ rvm: _this.default.rvm });
                _this.formq4.patchValue({ t_entrada_agua: _this.default.t_entrada_agua });
                _this.formq4.patchValue({ tiempo: _this.default.tiempo });
                _this.formq4.patchValue({ temp_ambiente: _this.default.temp_ambiente });
                _this.formq4.patchValue({ humedad: _this.default.humedad });
                _this.formq4.patchValue({ presion_entrada: _this.default.presion_entrada });
                _this.formq4.patchValue({ presion_salida: _this.default.presion_salida });
                _this.formq4.patchValue({ caudal: _this.default.caudal });
                _this.formq4.patchValue({ temprvm: _this.default.temprvm });
                _this.state = true;
            }
        });
    };
    InstrumentosComponent.prototype.save = function () {
        var _this = this;
        var data = [];
        if (this.valueq4) {
            data.push(this.formq1.value);
            data.push(this.formq2.value);
            data.push(this.formq3.value);
            data.push(this.formq4.value);
        }
        else {
            data.push(this.formq1.value);
            data.push(this.formq2.value);
            data.push(this.formq3.value);
        }
        data.forEach(function (e) {
            _this.agregar(e.rvm);
            _this.agregar(e.t_entrada_agua);
            _this.agregar(e.tiempo);
            _this.agregar(e.presion_entrada);
            _this.agregar(e.temp_ambiente);
            _this.agregar(e.humedad);
            _this.agregar(e.caudal);
            _this.agregar(e.presion_salida);
            _this.agregar(e.temprvm);
        });
        var a;
        if (this.valueq4) {
            a = {
                instrumentos: this.seleccion,
                medidores: this.datos.medidores,
                id: this.id,
                q1: this.formq1.value,
                q2: this.formq2.value,
                q3: this.formq3.value,
                q4: this.formq4.value
            };
        }
        else {
            a = {
                instrumentos: this.seleccion,
                medidores: this.datos.medidores,
                id: this.id,
                q1: this.formq1.value,
                q2: this.formq2.value,
                q3: this.formq3.value,
                q4: this.valueq4
            };
        }
        this.api.addInstrumentosTrabajo(a).subscribe(function (resp) {
            if (resp.ok) {
                _this.aux.createAlert("Exito", "Orden de Trabajo Creada");
                _this.router.navigate(['/trabajo/ordenes']);
            }
        });
    };
    InstrumentosComponent.prototype.agregar = function (id) {
        var i = this.seleccion.findIndex(function (e) { return e == id; });
        if (i == -1) {
            this.seleccion.push(id);
        }
    };
    InstrumentosComponent.prototype.updateq4 = function () {
        if (this.valueq4) {
            this.valueq4 = false;
        }
        else {
            this.valueq4 = true;
        }
    };
    InstrumentosComponent.prototype.getMedidor = function (id) {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.getMedidor(id).subscribe(function (resp) {
                console.log(resp);
                if (resp.ok) {
                    _this.item = resp.data[0];
                    _this.metologicas = _this.item.metrologicas;
                    _this.rango = _this.metologicas.relacion || "NA";
                    if (_this.item.type == "3") {
                        _this.api.getnominaluno(_this.metologicas.clase, _this.metologicas.diametro).subscribe(function (resp) {
                            if (resp.ok) {
                                _this.nominales = resp.data.valores;
                                _this.nominaluno = _this.nominales[0].caudal;
                                _this.nominaldos = _this.nominales[1].caudal;
                                _this.nominaltres = _this.nominales[2].caudal;
                                _this.nominalcuatro = _this.nominales[2].caudal * 2;
                                console.log(_this.nominaluno);
                                _this.aux.dismissLoading();
                            }
                        }, function (error) {
                            var q1 = _this.metologicas.q3 / _this.metologicas.q3q1;
                            var q2 = 1.6 * q1;
                            var q4 = 1.25 * _this.metologicas.q3;
                            _this.nominaluno = q1;
                            _this.nominaldos = q2;
                            _this.nominaltres = _this.metologicas.q3;
                            _this.nominalcuatro = q4;
                            _this.aux.dismissLoading();
                        });
                    }
                    else {
                        _this.api.getnominaldos(_this.metologicas.relacion, _this.metologicas.diametro).subscribe(function (resp) {
                            if (resp.ok) {
                                _this.nominales = resp.data.valores;
                                _this.nominaluno = _this.nominales[0].caudal;
                                _this.nominaldos = _this.nominales[1].caudal;
                                _this.nominaltres = _this.nominales[2].caudal;
                                _this.nominalcuatro = _this.nominales[2].caudal * 1.25;
                                _this.aux.dismissLoading();
                            }
                        }, function (error) {
                            _this.nominaluno = _this.metologicas.q1;
                            _this.nominaldos = _this.metologicas.q2;
                            _this.nominaltres = _this.metologicas.q3;
                            _this.nominalcuatro = _this.metologicas.q4;
                            _this.aux.dismissLoading();
                        });
                    }
                }
            });
        }).catch(function (error) {
        });
    };
    InstrumentosComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_5__["AuxService"] }
    ]; };
    InstrumentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instrumentos',
            template: __webpack_require__(/*! raw-loader!./instrumentos.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/instrumentos/instrumentos.component.html"),
            styles: [__webpack_require__(/*! ./instrumentos.component.scss */ "./src/app/pages/programacion/instrumentos/instrumentos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_5__["AuxService"]])
    ], InstrumentosComponent);
    return InstrumentosComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/listamedidores/listamedidores.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/programacion/listamedidores/listamedidores.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9saXN0YW1lZGlkb3Jlcy9saXN0YW1lZGlkb3Jlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/programacion/listamedidores/listamedidores.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/programacion/listamedidores/listamedidores.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListamedidoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListamedidoresComponent", function() { return ListamedidoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ListamedidoresComponent = /** @class */ (function () {
    function ListamedidoresComponent(api, router) {
        this.api = api;
        this.router = router;
        this.items = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            serial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    ListamedidoresComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ListamedidoresComponent.prototype.ionViewWillEnter = function () {
        this.get();
    };
    ListamedidoresComponent.prototype.get = function () {
        var _this = this;
        this.api.getMedidores(this.form.value).subscribe(function (resp) {
            if (resp.ok) {
                _this.items = resp.data;
                console.log(_this.items);
            }
        });
    };
    ListamedidoresComponent.prototype.download = function (id) {
        this.router.navigate(["/trabajo/generar/" + id]);
    };
    ListamedidoresComponent.prototype.go = function (id) {
        this.router.navigate(["/trabajo/informe/" + id]);
    };
    ListamedidoresComponent.prototype.godatos = function (id) {
        this.router.navigate(["/trabajo/medidor/" + id]);
    };
    ListamedidoresComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ListamedidoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listamedidores',
            template: __webpack_require__(/*! raw-loader!./listamedidores.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/listamedidores/listamedidores.component.html"),
            styles: [__webpack_require__(/*! ./listamedidores.component.scss */ "./src/app/pages/programacion/listamedidores/listamedidores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListamedidoresComponent);
    return ListamedidoresComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/medidor/medidor.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/medidor/medidor.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZ3JhbWFjaW9uL21lZGlkb3IvQzpcXFByb3llY3Rvc1xcc2VydmFmXFxzZXJ2YWZhcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9ncmFtYWNpb25cXG1lZGlkb3JcXG1lZGlkb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9tZWRpZG9yL21lZGlkb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9ncmFtYWNpb24vbWVkaWRvci9tZWRpZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIioge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/programacion/medidor/medidor.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/programacion/medidor/medidor.component.ts ***!
  \*****************************************************************/
/*! exports provided: MedidorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedidorComponent", function() { return MedidorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_ambientales_ambientales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/ambientales/ambientales.component */ "./src/app/components/ambientales/ambientales.component.ts");
/* harmony import */ var src_app_components_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/propiedades/propiedades.component */ "./src/app/components/propiedades/propiedades.component.ts");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editarmedidor_editarmedidor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../editarmedidor/editarmedidor.component */ "./src/app/pages/programacion/editarmedidor/editarmedidor.component.ts");
/* harmony import */ var _editarmetrologicas2_editarmetrologicas2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../editarmetrologicas2/editarmetrologicas2.component */ "./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.ts");












var MedidorComponent = /** @class */ (function () {
    function MedidorComponent(api, alertController, route, router, modalController, eventos, aux) {
        var _this = this;
        this.api = api;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.eventos = eventos;
        this.aux = aux;
        eventos.getNewupdate().subscribe(function (x) {
            _this.getMedidor(_this.id);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            nuevo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    }
    MedidorComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getMedidor(this.id);
        this.form.patchValue({ _id: this.id });
    };
    MedidorComponent.prototype.ionViewWillEnter = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getMedidor(this.id);
        this.form.patchValue({ _id: this.id });
    };
    MedidorComponent.prototype.getMedidor = function (id) {
        var _this = this;
        this.api.getMedidor(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.item = resp.data[0];
                _this.cliente = _this.item.cliente;
                _this.metologicas = _this.item.metrologicas;
                _this.instrumentos = _this.item.instrumentos;
                _this.entrada = _this.item.orden_entrada;
                _this.trabajo = _this.item.orden_trabajo;
                _this.q1 = _this.item.q1;
                _this.q2 = _this.item.q2;
                _this.q3 = _this.item.q3;
                _this.q4 = _this.item.q4;
                _this.ambientales = _this.item.ambientales;
            }
        });
    };
    MedidorComponent.prototype.editarambientales = function (datos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_ambientales_ambientales_component__WEBPACK_IMPORTED_MODULE_5__["AmbientalesComponent"],
                            componentProps: {
                                'id': this.id,
                                'datos': datos
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
    MedidorComponent.prototype.editar = function (datos, tipo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_components_propiedades_propiedades_component__WEBPACK_IMPORTED_MODULE_6__["PropiedadesComponent"],
                            componentProps: {
                                'id': this.id,
                                'datos': datos,
                                'tipo': tipo
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
    MedidorComponent.prototype.generar = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            var a = {
                id: _this.trabajo._id
            };
            _this.api.terminarorden(a).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "Medidor Actualizado puede descargar el certificado actualizado");
                        _this.router.navigate(['/trabajo/lista']);
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error al generar los certificados", "Error por favor revise las condiciones de calibracion");
            });
        });
    };
    MedidorComponent.prototype.launcheditar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editarmedidor_editarmedidor_component__WEBPACK_IMPORTED_MODULE_10__["EditarmedidorComponent"],
                            componentProps: {
                                'item': this.item
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
    MedidorComponent.prototype.launcheditar2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editarmetrologicas2_editarmetrologicas2_component__WEBPACK_IMPORTED_MODULE_11__["Editarmetrologicas2Component"],
                            componentProps: {
                                'item': this.item
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
    MedidorComponent.prototype.derogar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Esta Seguro??!',
                            message: 'Estas seguro de derogar este certificado!!!',
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.form.reset();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.crear();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MedidorComponent.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.api.derogar(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Medidor ha sido modificado");
                        _this.router.navigate(['/trabajo/lista']);
                        _this.eventos.newUpdateAlert();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    MedidorComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__["EventosService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_8__["AuxService"] }
    ]; };
    MedidorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! raw-loader!./medidor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/medidor/medidor.component.html"),
            styles: [__webpack_require__(/*! ./medidor.component.scss */ "./src/app/pages/programacion/medidor/medidor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__["EventosService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_8__["AuxService"]])
    ], MedidorComponent);
    return MedidorComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/ordenes/ordenes.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/ordenes/ordenes.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9vcmRlbmVzL29yZGVuZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/ordenes/ordenes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/programacion/ordenes/ordenes.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrdenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesComponent", function() { return OrdenesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var OrdenesComponent = /** @class */ (function () {
    function OrdenesComponent(api, router) {
        this.api = api;
        this.router = router;
        this.ordenes = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            inicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            fin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    }
    OrdenesComponent.prototype.ngOnInit = function () {
        this.getOrdenes();
    };
    OrdenesComponent.prototype.ionViewWillEnter = function () {
        this.getOrdenes();
    };
    OrdenesComponent.prototype.getOrdenes = function () {
        var _this = this;
        this.api.getOrdenesTrabajo().subscribe(function (resp) {
            if (resp.ok) {
                _this.ordenes = resp.data;
            }
        });
    };
    OrdenesComponent.prototype.open = function (id) {
        this.router.navigate(["/trabajo/pruebas/" + id]);
    };
    OrdenesComponent.ctorParameters = function () { return [
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    OrdenesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ordenes',
            template: __webpack_require__(/*! raw-loader!./ordenes.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/ordenes/ordenes.component.html"),
            styles: [__webpack_require__(/*! ./ordenes.component.scss */ "./src/app/pages/programacion/ordenes/ordenes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrdenesComponent);
    return OrdenesComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/programacion-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/programacion-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProgramacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramacionPageRoutingModule", function() { return ProgramacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _programacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programacion.page */ "./src/app/pages/programacion/programacion.page.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/programacion/crear/crear.component.ts");
/* harmony import */ var _ajustes_ajustes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajustes/ajustes.component */ "./src/app/pages/programacion/ajustes/ajustes.component.ts");
/* harmony import */ var _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instrumentos/instrumentos.component */ "./src/app/pages/programacion/instrumentos/instrumentos.component.ts");
/* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./src/app/pages/programacion/ordenes/ordenes.component.ts");
/* harmony import */ var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pruebas/pruebas.component */ "./src/app/pages/programacion/pruebas/pruebas.component.ts");
/* harmony import */ var _q1_q1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./q1/q1.component */ "./src/app/pages/programacion/q1/q1.component.ts");
/* harmony import */ var _q2_q2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./q2/q2.component */ "./src/app/pages/programacion/q2/q2.component.ts");
/* harmony import */ var _q3_q3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./q3/q3.component */ "./src/app/pages/programacion/q3/q3.component.ts");
/* harmony import */ var _iniciales_iniciales_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iniciales/iniciales.component */ "./src/app/pages/programacion/iniciales/iniciales.component.ts");
/* harmony import */ var _finales_finales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finales/finales.component */ "./src/app/pages/programacion/finales/finales.component.ts");
/* harmony import */ var _certificados_certificados_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./certificados/certificados.component */ "./src/app/pages/programacion/certificados/certificados.component.ts");
/* harmony import */ var _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calibrar/calibrar.component */ "./src/app/pages/programacion/calibrar/calibrar.component.ts");
/* harmony import */ var _generar_generar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./generar/generar.component */ "./src/app/pages/programacion/generar/generar.component.ts");
/* harmony import */ var _ctrabajo_ctrabajo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ctrabajo/ctrabajo.component */ "./src/app/pages/programacion/ctrabajo/ctrabajo.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/programacion/consultar/consultar.component.ts");
/* harmony import */ var _informedos_informedos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./informedos/informedos.component */ "./src/app/pages/programacion/informedos/informedos.component.ts");
/* harmony import */ var _listamedidores_listamedidores_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./listamedidores/listamedidores.component */ "./src/app/pages/programacion/listamedidores/listamedidores.component.ts");
/* harmony import */ var _medidor_medidor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./medidor/medidor.component */ "./src/app/pages/programacion/medidor/medidor.component.ts");






















var routes = [
    {
        path: '',
        component: _programacion_page__WEBPACK_IMPORTED_MODULE_3__["ProgramacionPage"], children: [
            {
                path: '', component: _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__["CrearComponent"]
            },
            {
                path: 'generales', component: _ajustes_ajustes_component__WEBPACK_IMPORTED_MODULE_5__["AjustesComponent"]
            },
            {
                path: 'instrumentos/:id', component: _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_6__["InstrumentosComponent"]
            },
            {
                path: 'ordenes', component: _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__["OrdenesComponent"]
            },
            {
                path: 'pruebas/:id', component: _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_8__["PruebasComponent"]
            },
            {
                path: 'q1/:id', component: _q1_q1_component__WEBPACK_IMPORTED_MODULE_9__["Q1Component"]
            },
            {
                path: 'q2/:id', component: _q2_q2_component__WEBPACK_IMPORTED_MODULE_10__["Q2Component"]
            },
            {
                path: 'q3/:id', component: _q3_q3_component__WEBPACK_IMPORTED_MODULE_11__["Q3Component"]
            },
            {
                path: 'iniciales/:id', component: _iniciales_iniciales_component__WEBPACK_IMPORTED_MODULE_12__["InicialesComponent"]
            },
            {
                path: 'finales/:id', component: _finales_finales_component__WEBPACK_IMPORTED_MODULE_13__["FinalesComponent"]
            },
            {
                path: 'q3/:id', component: _q3_q3_component__WEBPACK_IMPORTED_MODULE_11__["Q3Component"]
            },
            {
                path: 'ordenes', component: _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_7__["OrdenesComponent"]
            },
            {
                path: 'certificados/:id', component: _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_15__["CalibrarComponent"]
            },
            {
                path: 'generar/:id', component: _generar_generar_component__WEBPACK_IMPORTED_MODULE_16__["GenerarComponent"]
            },
            {
                path: 'informe/:id', component: _informedos_informedos_component__WEBPACK_IMPORTED_MODULE_19__["InformedosComponent"]
            },
            {
                path: 'generartrabajo/:id', component: _ctrabajo_ctrabajo_component__WEBPACK_IMPORTED_MODULE_17__["CtrabajoComponent"]
            },
            {
                path: 'finalizadas', component: _certificados_certificados_component__WEBPACK_IMPORTED_MODULE_14__["CertificadosComponent"]
            },
            {
                path: 'consultar', component: _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_18__["ConsultarComponent"]
            },
            {
                path: 'lista', component: _listamedidores_listamedidores_component__WEBPACK_IMPORTED_MODULE_20__["ListamedidoresComponent"]
            },
            {
                path: 'medidor/:id', component: _medidor_medidor_component__WEBPACK_IMPORTED_MODULE_21__["MedidorComponent"]
            },
        ]
    }
];
var ProgramacionPageRoutingModule = /** @class */ (function () {
    function ProgramacionPageRoutingModule() {
    }
    ProgramacionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProgramacionPageRoutingModule);
    return ProgramacionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/programacion/programacion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/programacion/programacion.module.ts ***!
  \***********************************************************/
/*! exports provided: ProgramacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramacionPageModule", function() { return ProgramacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _programacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programacion-routing.module */ "./src/app/pages/programacion/programacion-routing.module.ts");
/* harmony import */ var _programacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programacion.page */ "./src/app/pages/programacion/programacion.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/programacion/crear/crear.component.ts");
/* harmony import */ var _ajustes_ajustes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ajustes/ajustes.component */ "./src/app/pages/programacion/ajustes/ajustes.component.ts");
/* harmony import */ var _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instrumentos/instrumentos.component */ "./src/app/pages/programacion/instrumentos/instrumentos.component.ts");
/* harmony import */ var _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ordenes/ordenes.component */ "./src/app/pages/programacion/ordenes/ordenes.component.ts");
/* harmony import */ var _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calibrar/calibrar.component */ "./src/app/pages/programacion/calibrar/calibrar.component.ts");
/* harmony import */ var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pruebas/pruebas.component */ "./src/app/pages/programacion/pruebas/pruebas.component.ts");
/* harmony import */ var _q1_q1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./q1/q1.component */ "./src/app/pages/programacion/q1/q1.component.ts");
/* harmony import */ var _q2_q2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./q2/q2.component */ "./src/app/pages/programacion/q2/q2.component.ts");
/* harmony import */ var _q3_q3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./q3/q3.component */ "./src/app/pages/programacion/q3/q3.component.ts");
/* harmony import */ var _iniciales_iniciales_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./iniciales/iniciales.component */ "./src/app/pages/programacion/iniciales/iniciales.component.ts");
/* harmony import */ var _finales_finales_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./finales/finales.component */ "./src/app/pages/programacion/finales/finales.component.ts");
/* harmony import */ var _certificados_certificados_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./certificados/certificados.component */ "./src/app/pages/programacion/certificados/certificados.component.ts");
/* harmony import */ var _generar_generar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./generar/generar.component */ "./src/app/pages/programacion/generar/generar.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/programacion/consultar/consultar.component.ts");
/* harmony import */ var _ctrabajo_ctrabajo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ctrabajo/ctrabajo.component */ "./src/app/pages/programacion/ctrabajo/ctrabajo.component.ts");
/* harmony import */ var _informedos_informedos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./informedos/informedos.component */ "./src/app/pages/programacion/informedos/informedos.component.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _medidor_medidor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./medidor/medidor.component */ "./src/app/pages/programacion/medidor/medidor.component.ts");
/* harmony import */ var _listamedidores_listamedidores_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./listamedidores/listamedidores.component */ "./src/app/pages/programacion/listamedidores/listamedidores.component.ts");
/* harmony import */ var _editarmedidor_editarmedidor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editarmedidor/editarmedidor.component */ "./src/app/pages/programacion/editarmedidor/editarmedidor.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _editarmetrologicas_editarmetrologicas_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./editarmetrologicas/editarmetrologicas.component */ "./src/app/pages/programacion/editarmetrologicas/editarmetrologicas.component.ts");
/* harmony import */ var _editarmetrologicas2_editarmetrologicas2_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./editarmetrologicas2/editarmetrologicas2.component */ "./src/app/pages/programacion/editarmetrologicas2/editarmetrologicas2.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
































var ProgramacionPageModule = /** @class */ (function () {
    function ProgramacionPageModule() {
    }
    ProgramacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _editarmedidor_editarmedidor_component__WEBPACK_IMPORTED_MODULE_27__["EditarmedidorComponent"],
                _editarmetrologicas_editarmetrologicas_component__WEBPACK_IMPORTED_MODULE_29__["EditarmetrologicasComponent"],
                _editarmetrologicas2_editarmetrologicas2_component__WEBPACK_IMPORTED_MODULE_30__["Editarmetrologicas2Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_24__["PipesModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_28__["IonicSelectableModule"],
                _programacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgramacionPageRoutingModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["Title"]
            ],
            declarations: [_programacion_page__WEBPACK_IMPORTED_MODULE_6__["ProgramacionPage"], _medidor_medidor_component__WEBPACK_IMPORTED_MODULE_25__["MedidorComponent"], _editarmetrologicas_editarmetrologicas_component__WEBPACK_IMPORTED_MODULE_29__["EditarmetrologicasComponent"], _editarmetrologicas2_editarmetrologicas2_component__WEBPACK_IMPORTED_MODULE_30__["Editarmetrologicas2Component"], _editarmedidor_editarmedidor_component__WEBPACK_IMPORTED_MODULE_27__["EditarmedidorComponent"], _listamedidores_listamedidores_component__WEBPACK_IMPORTED_MODULE_26__["ListamedidoresComponent"], _informedos_informedos_component__WEBPACK_IMPORTED_MODULE_23__["InformedosComponent"], _crear_crear_component__WEBPACK_IMPORTED_MODULE_8__["CrearComponent"], _certificados_certificados_component__WEBPACK_IMPORTED_MODULE_19__["CertificadosComponent"], _generar_generar_component__WEBPACK_IMPORTED_MODULE_20__["GenerarComponent"], _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_21__["ConsultarComponent"], _ctrabajo_ctrabajo_component__WEBPACK_IMPORTED_MODULE_22__["CtrabajoComponent"],
                _iniciales_iniciales_component__WEBPACK_IMPORTED_MODULE_17__["InicialesComponent"], _finales_finales_component__WEBPACK_IMPORTED_MODULE_18__["FinalesComponent"], _ajustes_ajustes_component__WEBPACK_IMPORTED_MODULE_9__["AjustesComponent"], _instrumentos_instrumentos_component__WEBPACK_IMPORTED_MODULE_10__["InstrumentosComponent"], _ordenes_ordenes_component__WEBPACK_IMPORTED_MODULE_11__["OrdenesComponent"], _calibrar_calibrar_component__WEBPACK_IMPORTED_MODULE_12__["CalibrarComponent"], _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_13__["PruebasComponent"], _q1_q1_component__WEBPACK_IMPORTED_MODULE_14__["Q1Component"], _q2_q2_component__WEBPACK_IMPORTED_MODULE_15__["Q2Component"], _q3_q3_component__WEBPACK_IMPORTED_MODULE_16__["Q3Component"]]
        })
    ], ProgramacionPageModule);
    return ProgramacionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/programacion/programacion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/programacion/programacion.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9wcm9ncmFtYWNpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/programacion/programacion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/programacion/programacion.page.ts ***!
  \*********************************************************/
/*! exports provided: ProgramacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramacionPage", function() { return ProgramacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgramacionPage = /** @class */ (function () {
    function ProgramacionPage() {
    }
    ProgramacionPage.prototype.ngOnInit = function () {
    };
    ProgramacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programacion',
            template: __webpack_require__(/*! raw-loader!./programacion.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/programacion.page.html"),
            styles: [__webpack_require__(/*! ./programacion.page.scss */ "./src/app/pages/programacion/programacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgramacionPage);
    return ProgramacionPage;
}());



/***/ }),

/***/ "./src/app/pages/programacion/pruebas/pruebas.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/pruebas/pruebas.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9wcnVlYmFzL3BydWViYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/programacion/pruebas/pruebas.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/programacion/pruebas/pruebas.component.ts ***!
  \*****************************************************************/
/*! exports provided: PruebasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebasComponent", function() { return PruebasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");








var PruebasComponent = /** @class */ (function () {
    function PruebasComponent(router, route, alertController, api, aux, lc) {
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.api = api;
        this.aux = aux;
        this.lc = lc;
        this.pruebas = [];
        this.complete = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    PruebasComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.setuser();
        // this.getOrden(this.id);
    };
    PruebasComponent.prototype.ionViewWillEnter = function () {
        this.id = this.route.snapshot.paramMap.get("id");
        this.getOrden(this.id);
    };
    PruebasComponent.prototype.ionViewDidLeave = function () {
        this.pruebas = [];
    };
    PruebasComponent.prototype.getOrden = function (id) {
        var _this = this;
        this.api.getOrdenTrabajo(id).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!resp.ok) return [3 /*break*/, 2];
                        b = resp.data[0].pruebas;
                        return [4 /*yield*/, b.forEach(function (e) {
                                if (e.status) {
                                    _this.pruebas.push({
                                        tipo: e.tipo
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (this.pruebas.length == 0) {
                            this.complete = true;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    PruebasComponent.prototype.nav = function () {
        var a = this.form.value;
        this.pruebas = [];
        this.router.navigate(["/trabajo/iniciales/" + this.id], { queryParams: { tipo: a.tipo, numero: 1 } });
    };
    PruebasComponent.prototype.setuser = function () {
        var _this = this;
        this.lc.cargarStorage('usuario').then(function (data) {
            _this.usuario = data;
        });
    };
    PruebasComponent.prototype.close = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            var a = {
                id: _this.id,
                usuario: _this.usuario._id
            };
            _this.api.terminarorden(a).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "Orden Cerrada puede descargar los certificados");
                        _this.router.navigate(['/trabajo/ordenes']);
                    });
                }
            });
        }).catch(function (e) {
            console.log(e);
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error al generar los certificados", "Error por favor revise las condiciones de calibracion");
            });
        });
    };
    PruebasComponent.prototype.cerrar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cerrar Orden!',
                            mode: 'ios',
                            message: 'Desea usted cerrar esta orden ?. Recuerde si ya termino todas las pruebas de Aceptar !!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.close();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PruebasComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_6__["AuxService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
    ]; };
    PruebasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pruebas',
            template: __webpack_require__(/*! raw-loader!./pruebas.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/pruebas/pruebas.component.html"),
            styles: [__webpack_require__(/*! ./pruebas.component.scss */ "./src/app/pages/programacion/pruebas/pruebas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_6__["AuxService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], PruebasComponent);
    return PruebasComponent;
}());



/***/ }),

/***/ "./src/app/pages/programacion/q1/q1.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/programacion/q1/q1.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9xMS9xMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/programacion/q1/q1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/programacion/q1/q1.component.ts ***!
  \*******************************************************/
/*! exports provided: Q1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q1Component", function() { return Q1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");






var Q1Component = /** @class */ (function () {
    function Q1Component(route, router, api, lc) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.lc = lc;
        this.medidores = [];
        this.ready = false;
        this.data = [];
        this.numeros = null;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            repeticion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            psalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            horas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            minutos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            segundos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    Q1Component.prototype.ngOnInit = function () {
        this.form.reset();
        this.ready = false;
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.getTrabajo(this.id);
        this.getdefaults();
    };
    Q1Component.prototype.ionViewWillEnter = function () {
        this.form.reset();
        this.ready = false;
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.getTrabajo(this.id);
        this.getdefaults();
    };
    Q1Component.prototype.getTrabajo = function (id) {
        var _this = this;
        this.api.getOrdenTrabajo(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.datos = resp.data[0];
                _this.medidores = _this.datos.medidores;
                _this.form.patchValue({ repeticion: _this.repeticion });
                _this.form.patchValue({ orden: _this.id });
                _this.form.patchValue({ tipo: _this.tipo });
            }
        });
    };
    Q1Component.prototype.save = function () {
        this.data = this.form.value;
        this.ready = true;
    };
    Q1Component.prototype.getdefaults = function () {
        var _this = this;
        this.api.getDefaultParametros().subscribe(function (resp) {
            if (resp.ok) {
                _this.parametros = resp.data[0];
                _this.numeros = _this.parametros.repeticiones;
                console.log(_this.numeros);
            }
        });
    };
    Q1Component.prototype.next = function () {
        var numero = parseInt(this.repeticion) + 1;
        this.ready = false;
        if (parseInt(this.repeticion) >= this.numeros) {
            this.router.navigate(["/trabajo/finales/" + this.id], { queryParams: { tipo: this.tipo, numero: numero } });
        }
        else {
            this.router.navigate(["/trabajo/q2/" + this.id], { queryParams: { tipo: this.tipo, numero: numero } });
        }
    };
    Q1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
    ]; };
    Q1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q1',
            template: __webpack_require__(/*! raw-loader!./q1.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/q1/q1.component.html"),
            styles: [__webpack_require__(/*! ./q1.component.scss */ "./src/app/pages/programacion/q1/q1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], Q1Component);
    return Q1Component;
}());



/***/ }),

/***/ "./src/app/pages/programacion/q2/q2.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/programacion/q2/q2.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9xMi9xMi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/programacion/q2/q2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/programacion/q2/q2.component.ts ***!
  \*******************************************************/
/*! exports provided: Q2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q2Component", function() { return Q2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");






var Q2Component = /** @class */ (function () {
    function Q2Component(route, router, api, lc) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.lc = lc;
        this.medidores = [];
        this.ready = false;
        this.data = [];
        this.numeros = null;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            orden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            repeticion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            caudal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pentrada: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            psalida: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tempagua: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            temprvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            volumenrvm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            horas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            minutos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            segundos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    Q2Component.prototype.ngOnInit = function () {
        this.ready = false;
        this.form.reset();
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.getTrabajo(this.id);
        this.getdefaults();
    };
    Q2Component.prototype.ionViewWillEnter = function () {
        this.ready = false;
        this.form.reset();
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.queryParamMap.get("tipo");
        this.repeticion = this.route.snapshot.queryParamMap.get("numero");
        this.getTrabajo(this.id);
        this.getdefaults();
    };
    Q2Component.prototype.getTrabajo = function (id) {
        var _this = this;
        this.api.getOrdenTrabajo(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.datos = resp.data[0];
                _this.medidores = _this.datos.medidores;
                _this.form.patchValue({ repeticion: _this.repeticion });
                _this.form.patchValue({ orden: _this.id });
                _this.form.patchValue({ tipo: _this.tipo });
            }
        });
    };
    Q2Component.prototype.save = function () {
        this.data = this.form.value;
        this.ready = true;
    };
    Q2Component.prototype.getdefaults = function () {
        var _this = this;
        this.api.getDefaultParametros().subscribe(function (resp) {
            if (resp.ok) {
                _this.parametros = resp.data[0];
                console.log(_this.parametros);
                _this.numeros = _this.parametros.repeticiones;
            }
        });
    };
    Q2Component.prototype.next = function () {
        var numero = parseInt(this.repeticion) + 1;
        this.ready = false;
        if (parseInt(this.repeticion) > this.numeros) {
            this.router.navigate(["/trabajo/finales/" + this.id], { queryParams: { tipo: this.tipo, numero: numero } });
        }
        else {
            this.router.navigate(["/trabajo/q1/" + this.id], { queryParams: { tipo: this.tipo, numero: numero } });
        }
    };
    Q2Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
    ]; };
    Q2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q2',
            template: __webpack_require__(/*! raw-loader!./q2.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/q2/q2.component.html"),
            styles: [__webpack_require__(/*! ./q2.component.scss */ "./src/app/pages/programacion/q2/q2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], Q2Component);
    return Q2Component;
}());



/***/ }),

/***/ "./src/app/pages/programacion/q3/q3.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/programacion/q3/q3.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hY2lvbi9xMy9xMy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/programacion/q3/q3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/programacion/q3/q3.component.ts ***!
  \*******************************************************/
/*! exports provided: Q3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q3Component", function() { return Q3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Q3Component = /** @class */ (function () {
    function Q3Component() {
    }
    Q3Component.prototype.ngOnInit = function () { };
    Q3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-q3',
            template: __webpack_require__(/*! raw-loader!./q3.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/programacion/q3/q3.component.html"),
            styles: [__webpack_require__(/*! ./q3.component.scss */ "./src/app/pages/programacion/q3/q3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Q3Component);
    return Q3Component;
}());



/***/ })

}]);
//# sourceMappingURL=pages-programacion-programacion-module-es5.js.map