(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuario/usuario.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-menu></app-menu>\n </ion-header>\n \n <ion-content>\n \n   <div class=\"container-fluid\">\n \n     <div class=\"row\" *ngIf=\"ready\">\n       <div class=\"col-sm-8\">\n         <div class=\"text-center mt-2\">\n           <ion-item text-center color=\"primary\">\n             <ion-label>Mi Usuario</ion-label>\n           </ion-item>\n           <div class=\"text-center table-responsive\">\n             <table class=\"table\">\n               <thead class=\"thead-dark\">\n                 <tr>\n                   <th scope=\"col\">Nombre</th>\n                   <th scope=\"col\">Apellido</th>\n                   <th scope=\"col\">Username</th>\n                   <th scope=\"col\">Cargo</th>\n                   <th scope=\"col\">Gestionar</th>\n                 </tr>\n               </thead>\n               <tbody>\n                 <tr>\n                   <th scope=\"row\">{{usuario.nombre}}</th>\n                   <td>{{usuario.apellido}}</td>\n                   <td>{{usuario.username}}</td>\n                   <td>{{usuario.cargo}}</td>\n                   <td style=\"max-width: 130px;\" text-center>\n                     <ion-button (click)=\"setUser(usuario)\" size=\"small\" color=\"success\">\n                       <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                     </ion-button>\n                     <ion-button (click)=\"setPass(usuario._id)\" size=\"small\" color=\"secondary\">\n                       <ion-icon slot=\"icon-only\" name=\"lock\"></ion-icon>\n                     </ion-button>\n                     <ion-button (click)=\"delete(usuario)\" size=\"small\" color=\"danger\">\n                       <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                     </ion-button>\n                   </td>\n                 </tr>\n               </tbody>\n             </table>      \n           </div>\n         </div>\n       </div>\n       <div class=\"col-sm-4\">\n         <div *ngIf=\"pannel\">\n           <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"edit\">\n             <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n             <ion-label>Editar Usuario</ion-label>\n           </ion-item> \n         </div>\n         <form [formGroup]=\"form\" (ngSubmit)=\"crear()\" *ngIf=\"pannel\">\n           <div class=\"form-group\">\n             <label>Nombre</label>\n             <input type=\"text\" class=\"form-control\" formControlName=\"nombre\" aria-describedby=\"\">\n             <small class=\"form-text text-muted\">Nombre del Usuario</small>\n           </div>\n           <div class=\"form-group\">\n             <label>Apellido</label>\n             <input type=\"text\" class=\"form-control\" formControlName=\"apellido\" aria-describedby=\"\">\n             <small class=\"form-text text-muted\">Apellido del Usuario</small>\n           </div>\n           <div class=\"form-group\">\n            <label>Usuario</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Usuario para ingresar</small>\n          </div>\n           <div class=\"form-group\">\n             <label>Cargo</label>\n             <input type=\"text\" class=\"form-control\" formControlName=\"cargo\" aria-describedby=\"\">\n             <small class=\"form-text text-muted\">Cargo del Usuario</small>\n           </div>     \n           <div class=\"form-group\">\n             <label for=\"exampleFormControlSelect1\">Tipo de Usuario</label>\n             <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"role\">\n               <option value=\"1\">Administrador</option>\n               <option value=\"2\">Coordinador</option>\n               <option value=\"3\">Operador</option>\n             </select>\n           </div>     \n          \n           <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\"  *ngIf=\"!edit\">Crear Usuario</button>\n           <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"update()\"  *ngIf=\"edit\">Actualizar Usuario</button>\n         </form>\n         <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"editpass\" >\n           <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n           <ion-label>Cambiar Contraseña del Usuario</ion-label>\n         </ion-item>  \n         <form [formGroup]=\"form2\" (ngSubmit)=\"updatePass()\" *ngIf=\"editpass\">\n           <div class=\"form-group\">\n             <label>Nueva Contraseña</label>\n             <input type=\"password\" class=\"form-control\" formControlName=\"pass\" aria-describedby=\"\">\n             <small class=\"form-text text-muted\">Nueva Contraseña del Usuario</small>\n           </div>\n           <div class=\"form-group\">\n             <label>Repetir la Contraseña</label>\n             <input type=\"password\" class=\"form-control\" formControlName=\"pass2\" aria-describedby=\"\">\n             <small class=\"form-text text-muted\">Repita Contraseña del Usuario</small>\n           </div>          \n           <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form2.valid\">Actualizar Usuario</button>\n         </form> \n       </div>\n \n     </div>\n \n   </div>\n \n \n </ion-content>\n \n"

/***/ }),

/***/ "./src/app/pages/usuario/usuario-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/usuario/usuario-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageRoutingModule", function() { return UsuarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.page */ "./src/app/pages/usuario/usuario.page.ts");




var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioPage"]
    }
];
var UsuarioPageRoutingModule = /** @class */ (function () {
    function UsuarioPageRoutingModule() {
    }
    UsuarioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsuarioPageRoutingModule);
    return UsuarioPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-routing.module */ "./src/app/pages/usuario/usuario-routing.module.ts");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/pages/usuario/usuario.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");








var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioPageRoutingModule"]
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.ts ***!
  \***********************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");






var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(aux, uS, ls) {
        this.aux = aux;
        this.uS = uS;
        this.ls = ls;
        this.edit = true;
        this.editpass = false;
        this.pannel = true;
        this.usuario = [];
        this.ready = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            creado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pass2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    UsuarioPage.prototype.ngOnInit = function () {
        this.getUsuario();
    };
    UsuarioPage.prototype.crear = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.uS.register(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Usuario ha sido creado");
                        _this.getDatosUsuario(_this.usuario._id);
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
    UsuarioPage.prototype.update = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.uS.update(_this.form.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Usuario ha sido actualizado");
                        _this.getUsuario();
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
    UsuarioPage.prototype.getDatosUsuario = function (id) {
        var _this = this;
        this.uS.GetUser(id).subscribe(function (resp) {
            if (resp.ok) {
                _this.usuario = resp.data[0];
                _this.ready = true;
            }
        });
    };
    UsuarioPage.prototype.setPass = function (id) {
        this.editpass = true;
        this.pannel = false;
        this.form2.patchValue({ _id: id });
    };
    UsuarioPage.prototype.setUser = function (item) {
        this.form.setValue(item);
    };
    UsuarioPage.prototype.refresh = function () {
        this.editpass = false;
        this.pannel = true;
    };
    UsuarioPage.prototype.getUsuario = function () {
        var _this = this;
        this.ls.cargarStorage('usuario').then(function (data) {
            _this.usuario = data;
            _this.getDatosUsuario(_this.usuario._id);
        });
    };
    UsuarioPage.prototype.updatePass = function () {
        var _this = this;
        this.aux.createLoading().then(function (x) {
            _this.uS.updatePass(_this.form2.value).subscribe(function (resp) {
                if (resp.ok) {
                    _this.aux.dismissLoading().then(function (b) {
                        _this.aux.createAlert("Exito", "El Ha cambiado la contraseña ha sido actualizada");
                        _this.getUsuario();
                        _this.form2.reset();
                    });
                }
            });
        }).catch(function (e) {
            _this.aux.dismissLoading().then(function (b) {
                _this.aux.createAlert("Error desconocido", "Error por favor contacte con soporte");
            });
        });
    };
    UsuarioPage.ctorParameters = function () { return [
        { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
    ]; };
    UsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! raw-loader!./usuario.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/pages/usuario/usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], UsuarioPage);
    return UsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-module-es5.js.map