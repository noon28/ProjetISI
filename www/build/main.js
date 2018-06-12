webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpswdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotpswdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpswdPage = /** @class */ (function () {
    function ForgotpswdPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ForgotpswdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpswdPage');
    };
    ForgotpswdPage.prototype.afficher = function () {
        console.log(this.email);
    };
    ForgotpswdPage.prototype.requestSend = function () {
        var alert;
        if (this.email != null) {
            alert = this.alertCtrl.create({
                title: 'Requête envoyée',
                subTitle: 'Si votre email est associé à un compte, le mot de passe vous sera envoyé sous 24h',
                buttons: ['OK']
            });
        }
        else {
            alert = this.alertCtrl.create({
                title: 'Oups ...',
                subTitle: 'Merci de renseigner votre adresse mail',
                buttons: ['OK']
            });
        }
        alert.present();
    };
    ForgotpswdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpswd',template:/*ion-inline-start:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\forgotpswd\forgotpswd.html"*/'<!--\n  Generated template for the ForgotpswdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mot de passe oublié ? </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <button ion-button (click)="requestSend()">Envoyé</button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title align=\'center\'>Le bon coin </ion-title>\n    <ion-icon name="mail"></ion-icon>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\forgotpswd\forgotpswd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotpswdPage);
    return ForgotpswdPage;
}());

//# sourceMappingURL=forgotpswd.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//PROVIDERS 

var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, register) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.register = register;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.checkInputEmpty = function () {
        this.missingparameter = false;
        if (this.nom == null || this.prenom == null || this.email == null || this.login == null || this.mdp == null || this.adresse == null || this.cp == null || this.ville == null) {
            this.AlertMissing();
            this.missingparameter = true;
        }
        if (!this.missingparameter) {
            this.registerUser();
        }
    };
    RegisterPage.prototype.registerUser = function () {
        console.log('RegisterAct');
        console.log(this.nom);
        console.log(this.prenom);
        console.log(this.login);
        console.log(this.mdp);
        console.log(this.email);
        console.log(this.adresse);
        console.log(this.cp);
        console.log(this.ville);
        this.people = [this.nom, this.prenom, this.login, this.mdp, this.email, this.adresse, this.cp, this.ville];
        this.register.postUser(this.people);
        //PoPuP pour confirmer l'inscription et retour à la page de co 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        // POST API 
        //PoPuP pour confirmer l'inscription et retour à la page de co 
        //this.navCtrl.push(LoginPage);
    };
    RegisterPage.prototype.AlertMissing = function () {
        var alert = this.alertCtrl.create({
            title: 'Oups ...',
            subTitle: 'Un ou des champ(s) sont manquants pour compléter votre inscription',
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.CheckEmail = function () {
        this.emailAlready = false;
    };
    RegisterPage.prototype.AlertEmailAlready = function () {
        var _this = this;
        if (this.emailAlready == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Inscription',
                subTitle: 'Votre email est déja associé à un compte',
                buttons: [
                    {
                        text: 'Connexion',
                        role: 'connexion',
                        handler: function (data) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar >\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>  \n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nom</ion-label>\n      <ion-input type="text"  [(ngModel)]="nom"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Prenom</ion-label>\n      <ion-input type="text"   [(ngModel)]="prenom"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Login</ion-label>\n      <ion-input type="text"  [(ngModel)]="login"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Mot de Passe</ion-label>\n      <ion-input  type="password"  [(ngModel)]="mdp"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email"  [(ngModel)]="email"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Adresse</ion-label>\n      <ion-input type="text"  [(ngModel)]="adresse"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Code Postal</ion-label>\n      <ion-input type="number"  [(ngModel)]="cp" ></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Ville</ion-label>\n      <ion-input type="text"  [(ngModel)]="ville"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button class="btn" (click)="checkInputEmpty()">Inscription</button>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title align=\'center\'>Le bon coin </ion-title>\n    <ion-icon name="mail"></ion-icon>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\register\register.html"*/,
            styles: ["\n    .ng-valid { border-color: green; }\n    .ng-invalid { border-color: red; }    \n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgotpswd/forgotpswd.module": [
		275,
		2
	],
	"../pages/login/login.module": [
		276,
		1
	],
	"../pages/register/register.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            LeBonAngle\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    Le Bon Angle C\'est Notre Projet\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <p>\n\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(http) {
        this.http = http;
        console.log('Hello RegisterProvider Provider');
        this.http = http;
        this.data = {};
    }
    RegisterProvider.prototype.postUser = function (tableau) {
        var _this = this;
        var jasonprepare = { nom: tableau[0], prenom: tableau[1], login: tableau[2], mdp: tableau[3], mail: tableau[4], adresse: tableau[5], cp: tableau[6], ville: tableau[7] };
        var link = "http://lebonangle.ddns.net:3000/api/users";
        this.http.post(link, jasonprepare)
            .subscribe(function (data) {
            _this.data.response = data["_body"];
            console.log(_this.data);
            //créer pop up 
        }, function (error) {
            console.log("Oooops!");
        });
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], RegisterProvider);
    return RegisterProvider;
    var _a;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.testuser = {};
        console.log('Hello AuthProvider Provider');
        this.http = http;
        this.gethttpUser();
    }
    AuthProvider.prototype.checkAuth = function (email, password) {
        // API
        var jsonUser;
        var test = false;
        console.log("checkAuth");
        console.log(this.testuser);
        jsonUser = JSON.parse(this.testuser);
        console.log(jsonUser);
        var length = Object.keys(jsonUser.users).length;
        console.log(length);
        for (var k in jsonUser.users) {
            if ((email == jsonUser.users[k].MAIL && password == jsonUser.users[k].MDP)) {
                console.log("auth OK");
                test = true;
            }
            else {
                console.log("auth KO ");
            }
        }
        return test;
    };
    AuthProvider.prototype.gethttpUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = 'http://lebonangle.ddns.net:3000/api/users';
                        this.http.get(link)
                            .subscribe(function (res) {
                            _this.testuser = res['_body'];
                            console.log(_this.testuser);
                        });
                        return [4 /*yield*/, this.testuser];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgotpswd_forgotpswd__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_register_register__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// PAGES




// PROVIDER


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpswd_forgotpswd__["a" /* ForgotpswdPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forgotpswd/forgotpswd.module#ForgotpswdPageModule', name: 'ForgotpswdPage', segment: 'forgotpswd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpswd_forgotpswd__["a" /* ForgotpswdPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_register_register__["a" /* RegisterProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// PAGES

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotpswd_forgotpswd__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// PAGES



// PROVIDER

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.checkAuthentification = function () {
        if (this.auth.checkAuth(this.email, this.password)) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            this.AlertFailedAuth();
            //afficher un label identifiant incorrect
        }
    };
    LoginPage.prototype.afficher = function () {
        console.log(this.email);
        console.log(this.password);
    };
    LoginPage.prototype.mdpforgot = function () {
        console.log("Mot de passe oublié");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgotpswd_forgotpswd__["a" /* ForgotpswdPage */]);
    };
    LoginPage.prototype.register = function () {
        console.log("Inscription");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        //this.navCtrl.setRoot(RegisterPage);
    };
    LoginPage.prototype.AlertFailedAuth = function () {
        var alert = this.alertCtrl.create({
            title: 'Oups ...',
            subTitle: 'Identifiant incorrects',
            buttons: ['Retry']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\login\login.html"*/'<ion-content padding>\n\n    <img  class="logo" align =\'center\' src="../../assets/imgs/lebonangle1.png" width="150px" />\n\n    <ion-list>\n\n        <ion-label>{{test}}</ion-label>\n\n        <ion-item>\n\n                <ion-label stacked>Email</ion-label>\n\n            <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n    <button ion-button class="btn" (click)="checkAuthentification()">Connexion</button>\n\n    <ion-label class="mdpforgot" (click)="mdpforgot()">Mot de passe oublié ?</ion-label>\n\n    <ion-label class="mdpforgot" (click)="register()">Inscription</ion-label>\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\fouil\Desktop\EFREI\S6\IntroductionSystèmeINFO\GIT\ProjetISI\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map