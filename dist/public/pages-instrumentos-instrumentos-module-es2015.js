(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-instrumentos-instrumentos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/consultar/consultar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instrumentos/consultar/consultar.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"text-center mt-2\">\n          <ion-item text-center color=\"primary\">\n            <ion-label>Instrumentos Actuales</ion-label>\n          </ion-item>\n          <div class=\"text-center table-responsive\">\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\">Patron</th>\n                  <th scope=\"col\">Codigo</th>\n                  <th scope=\"col\">Certificado</th>\n                  <th scope=\"col\">Fuente</th>\n                  <th scope=\"col\">Fecha de Calibracion</th>\n                  <th scope=\"col\">Gestionar</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of instrumentos\">\n                  <th scope=\"row\">{{item.patron}}</th>\n                  <td>{{item.codigo}}</td>\n                  <td>{{item.certificado}}</td>\n                  <td>{{item.fuente}}</td>\n                  <td>{{item.fecha_calibracion | date:'yyyy-MM-dd'}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"push(item)\" size=\"small\" color=\"primary\">\n                      <ion-icon slot=\"icon-only\" name=\"construct\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"look(item._id)\" size=\"small\" color=\"tertiary\">\n                      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n                    </ion-button>       \n                    <ion-button (click)=\"nav(item._id)\" size=\"small\" color=\"success\">\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>             \n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/crear/crear.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instrumentos/crear/crear.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Crear un Nuevo Instrumento</ion-title>\n    </ion-toolbar>\n    <form [formGroup]=\"form\">\n      <div class=\"container-fluid m-0 p-1\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Patron</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"patron\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Codigo Patron</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"codigo\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Serial</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"serial\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Certificado de Calibracion</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"certificado\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Fuente de Trazabilidad</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"fuente\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Fecha de calibracion</label>\n              <div class=\"col-sm-6\">\n                <input type=\"date\" formControlName=\"fecha_calibracion\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <ion-item>\n              <ion-label>Tipo de Instrumento</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"instrumento\"\n                (ionChange)=\"changeType($event.target.value)\">\n                <ion-select-option *ngFor=\"let o of opciones\" [value]=\"o.tipo\">{{o.tipo}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-2\">\n            <ion-item>\n              <ion-button (click)=\"onClick()\" expand=\"block\" shape=\"round\" slot=\"end\" size=\"small\">\n                otro\n              </ion-button>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Cantidad de Escalas</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"escalas\"\n                (ionChange)=\"escalas($event.target.value)\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </div>\n        <ion-toolbar color=\"dark\">\n          <ion-title>Indicaciones de Escala</ion-title>\n        </ion-toolbar>\n        <div class=\"row\">\n          <div class=\"col-sm-12\" *ngIf=\"escalauno\">\n            <ion-toolbar color=\"primary\">\n              <ion-title>Escala Principal</ion-title>\n            </ion-toolbar>\n            <ion-toolbar>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-4 mt-2\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-12\">\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                          [value]=\"select.uno.propiedad\" disabled>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>1.Tipo de Indicador</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo_uno\">\n                        <ion-select-option *ngFor=\"let c of select.uno.clase\" [value]=\"c\">{{c}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>2.Unidad</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"unidad_uno\">\n                        <ion-select-option *ngFor=\"let u of select.uno.unidad\" [value]=\"u.escala\">{{u.escala}}\n                        </ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Inferior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"limite_inferior_uno\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Superior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\n                          formControlName=\"limite_superior_uno\" aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">3.Division de Escala</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\n                          formControlName=\"division_escala_uno\" aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-12\">\n                    <ion-item>\n                      <label class=\"col-sm-3 mt-2 ml-0 p-0\">4.Descripcion</label>\n                      <div class=\"col-sm-9 mt-1\">\n                        <textarea class=\"form-control\" formControlName=\"descripcion_uno\" rows=\"4\"></textarea>\n                      </div>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n            </ion-toolbar>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"escalados\">\n\n            <ion-toolbar color=\"medium\">\n              <ion-title>Escala Secundaria</ion-title>\n            </ion-toolbar>\n            <ion-toolbar>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-4 mt-2\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-12\">\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                          [value]=\"select.dos.propiedad\" disabled>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>1.Tipo de Indicador</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo_dos\">\n                        <ion-select-option *ngFor=\"let c of select.dos.clase\" [value]=\"c\">{{c}}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>2.Unidad</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"unidad_dos\">\n                        <ion-select-option *ngFor=\"let u of select.dos.unidad\" [value]=\"u.escala\">{{u.escala}}\n                        </ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Inferior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"limite_inferior_dos\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Superior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\n                          formControlName=\"limite_superior_dos\" aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">3.Division de Escala</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\n                          formControlName=\"division_escala_dos\" aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-12\">\n                    <ion-item>\n                      <label class=\"col-sm-3 mt-2 ml-0 p-0\">4.Descripcion</label>\n                      <div class=\"col-sm-9 mt-1\">\n                        <textarea class=\"form-control\" formControlName=\"descripcion_dos\" rows=\"4\"></textarea>\n                      </div>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n            </ion-toolbar>\n\n\n          </div>\n        </div>\n\n\n\n\n\n        <ion-toolbar>\n\n          <ion-button (click)=\"crear()\" color=\"primary\" slot=\"end\">\n            <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            Guardar\n          </ion-button>\n\n        </ion-toolbar>\n\n\n\n\n\n\n\n\n\n\n      </div>\n    </form>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/instrumentos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instrumentos/instrumentos.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n<div>\n  <ion-router-outlet></ion-router-outlet>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/item/item.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instrumentos/item/item.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"container-fluid m-0 p-0\">\n    <ion-toolbar color=\"dark\">\n      <ion-title>Crear un Nuevo Instrumento</ion-title>\n    </ion-toolbar>\n\n    <form [formGroup]=\"form\">\n      <div class=\"container-fluid m-0 p-1\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Patron</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"patron\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Codigo Patron</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"codigo\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Serial</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"serial\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Certificado de Calibracion</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"certificado\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Fuente de Trazabilidad</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" formControlName=\"fuente\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 mt-2\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 mt-2\">Fecha de calibracion</label>\n              <div class=\"col-sm-6\">\n                <input type=\"date\" formControlName=\"fecha_calibracion\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Tipo de Instrumento</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"instrumento\"  (ionChange)=\"changeType($event.target.value)\">\n                <ion-select-option *ngFor=\"let o of opciones\" [value]=\"o.tipo\">{{o.tipo}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Cantidad de Escalas</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"escalas\" (ionChange)=\"escalas($event.target.value)\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"col-sm-6\">\n            <ion-item>\n              <ion-label>Estado del Instrumento</ion-label>\n              <ion-select placeholder=\"Seleccione Una\" formControlName=\"status\">\n                <ion-select-option [value]=\"true\">Activo</ion-select-option>\n                <ion-select-option [value]=\"false\">Desactivo</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </div>\n        <ion-toolbar color=\"dark\">\n          <ion-title>Indicaciones de Escala</ion-title>\n        </ion-toolbar>\n        <div class=\"row\">\n          <div class=\"col-sm-12\" *ngIf=\"escalauno\">\n            <ion-toolbar color=\"primary\">\n              <ion-title>Escala Principal</ion-title>\n            </ion-toolbar>\n            <ion-toolbar>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-4 mt-2\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-12\">\n                        <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\"\n                          [value]=\"select.uno.propiedad\" disabled>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>1.Tipo de Indicador</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo_uno\">\n                        <ion-select-option *ngFor=\"let c of select.uno.clase\" [value]=\"c\">{{c}}</ion-select-option>                      \n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>2.Unidad</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"unidad_uno\">\n                        <ion-select-option *ngFor=\"let u of select.uno.unidad\" [value]=\"u.escala\">{{u.escala}}</ion-select-option>                      \n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Inferior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"limite_inferior_uno\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Superior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"limite_superior_uno\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">3.Division de Escala</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"division_escala_uno\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-12\">\n                    <ion-item>\n                      <label class=\"col-sm-3 mt-2 ml-0 p-0\">4.Descripcion</label>\n                      <div class=\"col-sm-9 mt-1\">\n                        <textarea class=\"form-control\" formControlName=\"descripcion_uno\" rows=\"4\"></textarea>\n                      </div>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n            </ion-toolbar>\n          </div>\n\n          <div class=\"col-sm-12\" *ngIf=\"escalados\">\n\n            <ion-toolbar color=\"medium\">\n              <ion-title>Escala Secundaria</ion-title>\n            </ion-toolbar>\n            <ion-toolbar>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-4 mt-2\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-12\">\n                        <input type=\"text\" class=\"form-control\"  aria-describedby=\"emailHelp\"\n                          [value]=\"select.dos.propiedad\" disabled>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>1.Tipo de Indicador</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"tipo_dos\">\n                        <ion-select-option *ngFor=\"let c of select.dos.clase\" [value]=\"c\">{{c}}</ion-select-option>                      \n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <ion-label>2.Unidad</ion-label>\n                      <ion-select placeholder=\"Seleccione Una\" formControlName=\"unidad_dos\">\n                        <ion-select-option *ngFor=\"let u of select.dos.unidad\" [value]=\"u.escala\">{{u.escala}}</ion-select-option>                      \n                      </ion-select>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Inferior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"limite_inferior_dos\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">2.Limite Superior</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"limite_superior_dos\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <ion-item>\n                      <label class=\"col-sm-6 mt-2 ml-0 p-0\">3.Division de Escala</label>\n                      <div class=\"col-sm-6 mt-1\">\n                        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"division_escala_dos\"\n                          aria-describedby=\"emailHelp\">\n                      </div>\n                    </ion-item>\n                  </div>\n                  <div class=\"col-sm-12\">\n                    <ion-item>\n                      <label class=\"col-sm-3 mt-2 ml-0 p-0\">4.Descripcion</label>\n                      <div class=\"col-sm-9 mt-1\">\n                        <textarea class=\"form-control\" formControlName=\"descripcion_dos\" rows=\"4\"></textarea>\n                      </div>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n            </ion-toolbar>\n\n\n          </div>\n        </div>\n\n\n\n\n\n        <ion-toolbar>\n\n          <ion-button (click)=\"crear()\" color=\"primary\" slot=\"end\">\n            <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            Guardar\n          </ion-button>      \n\n        </ion-toolbar>\n\n\n\n\n\n\n\n\n\n\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/set/set.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/instrumentos/set/set.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <ion-item color=\"dark\">\n          <ion-label>Editar C.M.C</ion-label>\n          <ion-button (click)=\"new()\" slot=\"end\" expand=\"block\" color=\"light\" shape=\"round\">\n            Nuevo C.M.C\n          </ion-button>\n        </ion-item>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Equipo Patron</th>\n              <th scope=\"col\">Descripcion</th>\n              <th scope=\"col\">Incertidumbre Expandida</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of cmc\">\n              <td>\n                {{item.instrumento?.patron}}              \n              </td>\n              <td>\n                {{item.instrumento?.codigo}}\n              </td>\n              <td>\n                <p class=\"mt-2\">\n                  {{item.error}}\n                </p>\n              </td>             \n              <td>\n                <ion-button (click)=\"update(item)\" expand=\"block\" shape=\"round\" color=\"primary\" size=\"small\">\n                  Actualizar\n                </ion-button>\n              </td>\n            </tr>      \n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/instrumentos/consultar/consultar.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/instrumentos/consultar/consultar.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydW1lbnRvcy9jb25zdWx0YXIvY29uc3VsdGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/instrumentos/consultar/consultar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/instrumentos/consultar/consultar.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConsultarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarComponent", function() { return ConsultarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_setcalibracion_setcalibracion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/setcalibracion/setcalibracion.component */ "./src/app/components/setcalibracion/setcalibracion.component.ts");
/* harmony import */ var src_app_components_historicalibracion_historicalibracion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/historicalibracion/historicalibracion.component */ "./src/app/components/historicalibracion/historicalibracion.component.ts");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");








let ConsultarComponent = class ConsultarComponent {
    constructor(api, router, modalController, eventos) {
        this.api = api;
        this.router = router;
        this.modalController = modalController;
        this.eventos = eventos;
        this.instrumentos = [];
        eventos.getNewCalibracion().subscribe((x) => {
            this.getAll();
        });
    }
    ngOnInit() {
        this.getAll();
    }
    ionViewWillEnter() {
        this.getAll();
    }
    getAll() {
        this.api.getAllInstrumentos().subscribe((resp) => {
            if (resp.ok) {
                this.instrumentos = resp.data;
            }
        });
    }
    nav(id) {
        this.api.getInstrumento(id).subscribe((resp) => {
            if (resp.ok) {
                this.router.navigate([`/instrumentos/item/${id}`]);
            }
        });
    }
    push(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_setcalibracion_setcalibracion_component__WEBPACK_IMPORTED_MODULE_5__["SetcalibracionComponent"],
                componentProps: {
                    'item': item
                },
                cssClass: 'extralarge'
            });
            return yield modal.present();
        });
    }
    look(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_historicalibracion_historicalibracion_component__WEBPACK_IMPORTED_MODULE_6__["HistoricalibracionComponent"],
                componentProps: {
                    'id': id
                },
                cssClass: 'extralarge'
            });
            return yield modal.present();
        });
    }
};
ConsultarComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__["EventosService"] }
];
ConsultarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultar',
        template: __webpack_require__(/*! raw-loader!./consultar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/consultar/consultar.component.html"),
        styles: [__webpack_require__(/*! ./consultar.component.scss */ "./src/app/pages/instrumentos/consultar/consultar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__["EventosService"]])
], ConsultarComponent);



/***/ }),

/***/ "./src/app/pages/instrumentos/crear/crear.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/instrumentos/crear/crear.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydW1lbnRvcy9jcmVhci9jcmVhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/instrumentos/crear/crear.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/instrumentos/crear/crear.component.ts ***!
  \*************************************************************/
/*! exports provided: CrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearComponent", function() { return CrearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");





class Port {
}
let CrearComponent = class CrearComponent {
    constructor(api, aux) {
        this.api = api;
        this.aux = aux;
        this.opciones = [];
        this.select = [];
        this.escalauno = false;
        this.escalados = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            patron: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            codigo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            serial: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            certificado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            fuente: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            fecha_calibracion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            instrumento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            escalas: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            propiedad_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            tipo_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            unidad_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            limite_inferior_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            limite_superior_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            division_escala_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            descripcion_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            propiedad_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            tipo_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            unidad_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            limite_inferior_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            limite_superior_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            division_escala_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            descripcion_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
    }
    ngOnInit() {
        this.OpcionesInstrumentos();
    }
    OpcionesInstrumentos() {
        this.api.OpcionesInstrumentos().subscribe((resp) => {
            if (resp.ok) {
                console.log(resp);
                this.opciones = resp.data;
            }
        });
    }
    changeType(event) {
        let id = event;
        this.select = this.opciones.find(e => e.tipo == id);
        console.log(this.select);
    }
    escalas(event) {
        if (event == 1) {
            this.escalauno = true;
            this.escalados = false;
            this.form.patchValue({ propiedad_uno: this.select.uno.propiedad });
        }
        else if (event == 2) {
            this.escalados = true;
            this.form.patchValue({ propiedad_uno: this.select.uno.propiedad });
            this.form.patchValue({ propiedad_dos: this.select.dos.propiedad });
        }
        else {
            this.escalados = false;
            this.escalauno = false;
        }
    }
    crear() {
        this.aux.createLoading().then((x) => {
            this.api.crearInstrumento(this.form.value).subscribe((resp) => {
                console.log(resp);
                if (resp.ok) {
                    this.aux.dismissLoading().then((b) => {
                        this.aux.createAlert("Exito", "El Instrumento ha sido creado");
                        this.form.reset();
                    });
                }
            });
        }).catch((e) => {
            this.aux.dismissLoading().then((b) => {
                this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    }
};
CrearComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] }
];
CrearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear',
        template: __webpack_require__(/*! raw-loader!./crear.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/crear/crear.component.html"),
        styles: [__webpack_require__(/*! ./crear.component.scss */ "./src/app/pages/instrumentos/crear/crear.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"]])
], CrearComponent);



/***/ }),

/***/ "./src/app/pages/instrumentos/instrumentos-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/instrumentos/instrumentos-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InstrumentosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentosPageRoutingModule", function() { return InstrumentosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _instrumentos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instrumentos.page */ "./src/app/pages/instrumentos/instrumentos.page.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/instrumentos/crear/crear.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/instrumentos/consultar/consultar.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/item.component */ "./src/app/pages/instrumentos/item/item.component.ts");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set/set.component */ "./src/app/pages/instrumentos/set/set.component.ts");








const routes = [
    {
        path: '',
        component: _instrumentos_page__WEBPACK_IMPORTED_MODULE_3__["InstrumentosPage"], children: [
            {
                path: 'crear', component: _crear_crear_component__WEBPACK_IMPORTED_MODULE_4__["CrearComponent"]
            },
            {
                path: 'consultar', component: _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_5__["ConsultarComponent"]
            },
            {
                path: 'item/:id', component: _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"]
            },
            {
                path: 'set', component: _set_set_component__WEBPACK_IMPORTED_MODULE_7__["SetComponent"]
            }
        ]
    }
];
let InstrumentosPageRoutingModule = class InstrumentosPageRoutingModule {
};
InstrumentosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InstrumentosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/instrumentos/instrumentos.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/instrumentos/instrumentos.module.ts ***!
  \***********************************************************/
/*! exports provided: InstrumentosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentosPageModule", function() { return InstrumentosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _instrumentos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instrumentos-routing.module */ "./src/app/pages/instrumentos/instrumentos-routing.module.ts");
/* harmony import */ var _instrumentos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instrumentos.page */ "./src/app/pages/instrumentos/instrumentos.page.ts");
/* harmony import */ var _crear_crear_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crear/crear.component */ "./src/app/pages/instrumentos/crear/crear.component.ts");
/* harmony import */ var _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consultar/consultar.component */ "./src/app/pages/instrumentos/consultar/consultar.component.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item/item.component */ "./src/app/pages/instrumentos/item/item.component.ts");
/* harmony import */ var _set_set_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./set/set.component */ "./src/app/pages/instrumentos/set/set.component.ts");












let InstrumentosPageModule = class InstrumentosPageModule {
};
InstrumentosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_9__["ComponentesModule"],
            _instrumentos_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstrumentosPageRoutingModule"]
        ],
        declarations: [_instrumentos_page__WEBPACK_IMPORTED_MODULE_6__["InstrumentosPage"], _crear_crear_component__WEBPACK_IMPORTED_MODULE_7__["CrearComponent"], _consultar_consultar_component__WEBPACK_IMPORTED_MODULE_8__["ConsultarComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"], _set_set_component__WEBPACK_IMPORTED_MODULE_11__["SetComponent"]]
    })
], InstrumentosPageModule);



/***/ }),

/***/ "./src/app/pages/instrumentos/instrumentos.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/instrumentos/instrumentos.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydW1lbnRvcy9pbnN0cnVtZW50b3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/instrumentos/instrumentos.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/instrumentos/instrumentos.page.ts ***!
  \*********************************************************/
/*! exports provided: InstrumentosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentosPage", function() { return InstrumentosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InstrumentosPage = class InstrumentosPage {
    constructor() { }
    ngOnInit() {
    }
};
InstrumentosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-instrumentos',
        template: __webpack_require__(/*! raw-loader!./instrumentos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/instrumentos.page.html"),
        styles: [__webpack_require__(/*! ./instrumentos.page.scss */ "./src/app/pages/instrumentos/instrumentos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InstrumentosPage);



/***/ }),

/***/ "./src/app/pages/instrumentos/item/item.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/instrumentos/item/item.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydW1lbnRvcy9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/instrumentos/item/item.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/instrumentos/item/item.component.ts ***!
  \***********************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ItemComponent = class ItemComponent {
    constructor(api, aux, route, router) {
        this.api = api;
        this.aux = aux;
        this.route = route;
        this.router = router;
        this.item = [];
        this.opciones = [];
        this.select = [];
        this.escalauno = false;
        this.escalados = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            patron: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            codigo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            serial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            certificado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fuente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha_calibracion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            instrumento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            escalas: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            propiedad_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tipo_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            unidad_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            limite_inferior_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            limite_superior_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            division_escala_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            descripcion_uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            propiedad_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            tipo_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            unidad_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            limite_inferior_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            limite_superior_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            division_escala_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            descripcion_dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.OpcionesInstrumentos();
        this.getOne(this.id);
    }
    ionViewWillEnter() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.OpcionesInstrumentos();
        this.getOne(this.id);
    }
    getOne(id) {
        this.api.getInstrumento(id).subscribe((resp) => {
            if (resp.ok) {
                this.item = resp.data[0];
                this.form.setValue(this.item);
                this.changeType2(this.item.instrumento);
            }
        });
    }
    OpcionesInstrumentos() {
        this.api.OpcionesInstrumentos().subscribe((resp) => {
            if (resp.ok) {
                this.opciones = resp.data;
            }
        });
    }
    changeType(event) {
        let id = event;
        this.select = this.opciones.find(e => e.tipo == id);
    }
    changeType2(tipo) {
        this.select = this.opciones.find(e => e.tipo == tipo);
    }
    escalas(event) {
        if (event == 1) {
            this.escalauno = true;
            this.escalados = false;
            this.form.patchValue({ propiedad_uno: this.select.uno.propiedad });
        }
        else if (event == 2) {
            this.escalados = true;
            this.form.patchValue({ propiedad_uno: this.select.uno.propiedad });
            this.form.patchValue({ propiedad_dos: this.select.dos.propiedad });
        }
        else {
            this.escalados = false;
            this.escalauno = false;
        }
    }
    crear() {
        this.aux.createLoading().then((x) => {
            this.api.updateInstrumento(this.form.value).subscribe((resp) => {
                if (resp.ok) {
                    this.aux.dismissLoading().then((b) => {
                        this.aux.createAlert("Exito", "El Instrumento ha sido editado");
                        this.form.reset();
                        this.router.navigate(['/instrumentos/consultar']);
                    });
                }
            });
        }).catch((e) => {
            this.aux.dismissLoading().then((b) => {
                this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    }
};
ItemComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: __webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/item/item.component.html"),
        styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/pages/instrumentos/item/item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ItemComponent);



/***/ }),

/***/ "./src/app/pages/instrumentos/set/set.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/instrumentos/set/set.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc3RydW1lbnRvcy9zZXQvc2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/instrumentos/set/set.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/instrumentos/set/set.component.ts ***!
  \*********************************************************/
/*! exports provided: SetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetComponent", function() { return SetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_modal_cmc_modal_cmc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal-cmc/modal-cmc.component */ "./src/app/components/modal-cmc/modal-cmc.component.ts");
/* harmony import */ var src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/eventos.service */ "./src/app/services/eventos.service.ts");
/* harmony import */ var src_app_components_modal_cmcnew_modal_cmcnew_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/modal-cmcnew/modal-cmcnew.component */ "./src/app/components/modal-cmcnew/modal-cmcnew.component.ts");









let SetComponent = class SetComponent {
    constructor(api, aux, modalController, eventos) {
        this.api = api;
        this.aux = aux;
        this.modalController = modalController;
        this.eventos = eventos;
        this.items = [];
        this.cmc = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            uno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            uno_valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            dos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            dos_valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            tres: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            tres_valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cuatro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cuatro_valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        eventos.getNewModelo().subscribe((x) => {
            this.getDefaults();
        });
    }
    ngOnInit() {
        this.get();
        this.getDefaults();
    }
    get() {
        this.api.getvolumen().subscribe((resp) => {
            if (resp.ok) {
                this.items = resp.data;
            }
        });
    }
    getDefaults() {
        this.api.getcmc().subscribe((resp) => {
            if (resp.ok) {
                this.cmc = resp.data;
            }
        });
    }
    update(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_modal_cmc_modal_cmc_component__WEBPACK_IMPORTED_MODULE_6__["ModalCMCComponent"],
                componentProps: {
                    'item': item
                }
            });
            return yield modal.present();
        });
    }
    new() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_modal_cmcnew_modal_cmcnew_component__WEBPACK_IMPORTED_MODULE_8__["ModalCMCNewComponent"],
            });
            return yield modal.present();
        });
    }
};
SetComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__["EventosService"] }
];
SetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set',
        template: __webpack_require__(/*! raw-loader!./set.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/instrumentos/set/set.component.html"),
        styles: [__webpack_require__(/*! ./set.component.scss */ "./src/app/pages/instrumentos/set/set.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_app_services_eventos_service__WEBPACK_IMPORTED_MODULE_7__["EventosService"]])
], SetComponent);



/***/ })

}]);
//# sourceMappingURL=pages-instrumentos-instrumentos-module-es2015.js.map