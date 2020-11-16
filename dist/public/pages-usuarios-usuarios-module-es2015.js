(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuarios-usuarios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuarios/usuarios.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuarios/usuarios.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <app-menu></app-menu>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"text-center mt-2\">\n          <ion-item text-center color=\"primary\">\n            <ion-label>Usuarios Actuales</ion-label>\n          </ion-item>\n          <div class=\"text-center table-responsive\">\n            <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th scope=\"col\">Nombre</th>\n                  <th scope=\"col\">Apellido</th>\n                  <th scope=\"col\">Username</th>\n                  <th scope=\"col\">Cargo</th>\n                  <th scope=\"col\">Gestionar</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of usuarios\">\n                  <th scope=\"row\">{{item.nombre}}</th>\n                  <td>{{item.apellido}}</td>\n                  <td>{{item.username}}</td>\n                  <td>{{item.cargo}}</td>\n                  <td style=\"max-width: 130px;\" text-center>\n                    <ion-button (click)=\"setUser(item)\" size=\"small\" color=\"success\">\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"setPass(item._id)\" size=\"small\" color=\"secondary\">\n                      <ion-icon slot=\"icon-only\" name=\"lock\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"delete(item)\" size=\"small\" color=\"danger\">\n                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>      \n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div *ngIf=\"pannel\">\n          <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"edit\">\n            <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n            <ion-label>Editar Usuario</ion-label>\n          </ion-item>\n          <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"!edit\">\n            <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n            <ion-label>Crear Usuario</ion-label>\n          </ion-item>      \n        </div>\n        <form [formGroup]=\"form\" (ngSubmit)=\"crear()\" *ngIf=\"pannel\">\n          <div class=\"form-group\">\n            <label>Nombre</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"nombre\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Nombre del Usuario</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Apellido</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"apellido\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Apellido del Usuario</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Usuario</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Usuario para ingresar</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Cargo</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"cargo\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Cargo del Usuario</small>\n          </div>     \n          <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Tipo de Usuario</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"role\">\n              <option value=\"1\">Administrador</option>\n              <option value=\"2\">Coordinador</option>\n              <option value=\"3\">Operador</option>\n            </select>\n          </div>     \n         \n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\"  *ngIf=\"!edit\">Crear Usuario</button>\n          <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"update()\"  *ngIf=\"edit\">Actualizar Usuario</button>\n        </form>\n        <ion-item color=\"primary\" text-center class=\"mt-2\" *ngIf=\"editpass\" >\n          <ion-icon name=\"refresh-circle\" slot=\"end\" (click)=\"refresh()\"></ion-icon>\n          <ion-label>Cambiar Contraseña del Usuario</ion-label>\n        </ion-item>  \n        <form [formGroup]=\"form2\" (ngSubmit)=\"updatePass()\" *ngIf=\"editpass\">\n          <div class=\"form-group\">\n            <label>Nueva Contraseña</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"pass\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Nueva Contraseña del Usuario</small>\n          </div>\n          <div class=\"form-group\">\n            <label>Repetir la Contraseña</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"pass2\" aria-describedby=\"\">\n            <small class=\"form-text text-muted\">Repita Contraseña del Usuario</small>\n          </div>          \n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form2.valid\">Actualizar Usuario</button>\n        </form>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/usuarios/usuarios-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function() { return UsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/pages/usuarios/usuarios.page.ts");




const routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.module.ts ***!
  \***************************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/pages/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/pages/usuarios/usuarios.page.ts");
/* harmony import */ var src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/componentes.module */ "./src/app/components/componentes.module.ts");








let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_components_componentes_module__WEBPACK_IMPORTED_MODULE_7__["ComponentesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"]
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })
], UsuariosPageModule);



/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.page.ts ***!
  \*************************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auxiliar.service */ "./src/app/services/auxiliar.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





let UsuariosPage = class UsuariosPage {
    constructor(aux, uS) {
        this.aux = aux;
        this.uS = uS;
        this.edit = false;
        this.editpass = false;
        this.pannel = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            creado: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.form2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            pass2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.getUsuarios();
    }
    crear() {
        this.aux.createLoading().then((x) => {
            this.uS.register(this.form.value).subscribe((resp) => {
                if (resp.ok) {
                    this.aux.dismissLoading().then((b) => {
                        this.aux.createAlert("Exito", "El Usuario ha sido creado");
                        this.getUsuarios();
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
    getUsuarios() {
        this.uS.GetUsers().subscribe((resp) => {
            if (resp.ok) {
                this.usuarios = resp.usuarios;
            }
        });
    }
    setPass(id) {
        this.editpass = true;
        this.pannel = false;
        this.form2.patchValue({ _id: id });
    }
    setUser(item) {
        this.form.setValue(item);
        this.edit = true;
    }
    refresh() {
        this.editpass = false;
        this.pannel = true;
        this.form.reset();
    }
    update() {
        this.aux.createLoading().then((x) => {
            this.uS.update(this.form.value).subscribe((resp) => {
                if (resp.ok) {
                    this.aux.dismissLoading().then((b) => {
                        this.aux.createAlert("Exito", "El Usuario ha sido actualizado");
                        this.getUsuarios();
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
    updatePass() {
        this.aux.createLoading().then((x) => {
            this.uS.updatePass(this.form2.value).subscribe((resp) => {
                if (resp.ok) {
                    this.aux.dismissLoading().then((b) => {
                        this.aux.createAlert("Exito", "El Ha cambiado la contraseña ha sido actualizada");
                        this.getUsuarios();
                        this.form2.reset();
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
UsuariosPage.ctorParameters = () => [
    { type: src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
UsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: __webpack_require__(/*! raw-loader!./usuarios.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuarios/usuarios.page.html"),
        styles: [__webpack_require__(/*! ./usuarios.page.scss */ "./src/app/pages/usuarios/usuarios.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auxiliar_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], UsuariosPage);



/***/ })

}]);
//# sourceMappingURL=pages-usuarios-usuarios-module-es2015.js.map