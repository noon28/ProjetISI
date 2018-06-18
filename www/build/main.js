webpackJsonp([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__annonce_annonce__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriPage = /** @class */ (function () {
    function FavoriPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.annonces = [{ "ID": 1, "TITRE": "T2 - Metro Motte Picquet Grenelle", "DESCRIPTION": "Description Loue appartement type 2 de 35m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1200Euro(s)/mois CC", "SUPERFICIE": 35, "CP": 75014, "DELETED": 0, "DATE_EN": "2018-05-20T00:00:00.000Z", "ID_AUTHOR": 1, "PRIX": 1200, "LINK": "https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s", "TYPEBIEN": "Appartement", "MEUBLE": 0, "NBPIECES": 2, "VILLE": "Paris", "LOCATION": 1, "image": "http://mmf.logic-immo.com/mmf/ads/photo-prop-800x600/837/1/16c0455f-7770-4bfc-8501-b21652fd54b4.jpg" }, { "ID": 2, "TITRE": "T3 - Metro Motte Picquet Grenelle", "DESCRIPTION": "Description Loue appartement type 3 de 40m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1500Euro(s)/mois CC", "SUPERFICIE": 40, "CP": 75015, "DELETED": 0, "DATE_EN": "2017-11-12T00:00:00.000Z", "ID_AUTHOR": 2, "PRIX": 1500, "LINK": "https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s", "TYPEBIEN": "Appartement", "MEUBLE": 1, "NBPIECES": 3, "VILLE": "Paris", "LOCATION": 1, "image": "" }];
    }
    FavoriPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoriPage');
    };
    FavoriPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true, 'Menu');
    };
    FavoriPage.prototype.detailAnnonce = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__annonce_annonce__["a" /* AnnoncePage */], { "annonce": a, "comeFrom": "favori" });
    };
    FavoriPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favori',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/favori/favori.html"*/'\n<ion-header>\n  <ion-navbar>\n    <!-- LEFT SIDE -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- CENTER SIDE -->\n    <ion-title>Favori</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div>\n      <div *ngIf="flitre">\n        <div *ngFor="let a of data">\n          <ion-card (click)="detailAnnonce(a)">\n            <img *ngIf="a.image == \'\'" src="assets/imgs/noImage.jpg"/>\n            <img *ngIf="a.image != null" src="{{ a.image }}"/>\n            <ion-card-content>\n                <span class="cp-abs"><ion-label class="cp-rel">{{ a.CP }} - {{ a.VILLE }}</ion-label></span>\n              <ion-card-title >\n                {{ (a.TITRE.length>50)? (a.TITRE | slice:0:50)+\'..\':(a.TITRE) }}\n              </ion-card-title>\n              <p>\n                {{ (a.DESCRIPTION.length>100)? (a.DESCRIPTION | slice:0:100)+\'..\':(a.DESCRIPTION) }}\n              </p>\n              <ion-label class="prix-rel">{{ a.PRIX }} €</ion-label>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n      <div *ngIf="!flitre">\n        <div *ngFor="let a of annonces">\n          <ion-card (click)="detailAnnonce(a)">\n            <img *ngIf="a.image == \'\'" src="assets/imgs/noImage.jpg"/>\n            <img *ngIf="a.image != null" src="{{ a.image }}"/>\n            <ion-card-content>\n                <span class="cp-abs"><ion-label class="cp-rel">{{ a.CP }} - {{ a.VILLE }}</ion-label></span>\n              <ion-card-title >\n                {{ (a.TITRE.length>50)? (a.TITRE | slice:0:50)+\'..\':(a.TITRE) }}\n              </ion-card-title>\n              <p>\n                {{ (a.DESCRIPTION.length>100)? (a.DESCRIPTION | slice:0:100)+\'..\':(a.DESCRIPTION) }}\n              </p>\n              <ion-label class="prix-rel">{{ a.PRIX }} €</ion-label>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/favori/favori.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], FavoriPage);
    return FavoriPage;
}());

//# sourceMappingURL=favori.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpswdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-forgotpswd',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/forgotpswd/forgotpswd.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mot de passe oublié ? </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #27AE60;" class="no-scroll">\n  \n    <ion-item class="form">\n      <ion-label stacked class="titlelab">Email</ion-label>\n      <ion-input class="input" type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <button class="btn"ion-button (click)="requestSend()">Envoyer</button>\n</ion-content>\n'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/forgotpswd/forgotpswd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ForgotpswdPage);
    return ForgotpswdPage;
}());

//# sourceMappingURL=forgotpswd.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_md5__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_profil__ = __webpack_require__(40);
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

//PAGES

/**
 * Generated class for the ProfileditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileditPage = /** @class */ (function () {
    function ProfileditPage(navCtrl, navParams, alertCtrl, register) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.register = register;
        this.userConnect = navParams.get('userCo');
        console.log(this.userConnect.MDP);
    }
    ProfileditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileditPage');
    };
    ProfileditPage.prototype.checkInputEmpty = function () {
        this.missingparameter = false;
        if (this.nom == null || this.prenom == null || this.email == null || this.login == null || this.adresse == null || this.cp == null || this.ville == null) {
            this.AlertMissing();
            this.missingparameter = true;
        }
        if (!this.missingparameter) {
            this.mdp = this.userConnect.MDP;
            console.log(this.mdp);
            this.postUpdate();
        }
    };
    ProfileditPage.prototype.postUpdate = function () {
        this.people = [this.nom, this.prenom, this.login, this.mdp, this.email, this.adresse, this.cp, this.ville];
        this.newUserConnect = {
            ID: this.userConnect.ID,
            NOM: this.nom,
            PRENOM: this.prenom,
            LOGIN: this.login,
            MDP: this.mdp,
            MAIL: this.email,
            ADRESSE: this.adresse,
            CP: this.cp,
            VILLE: this.ville
        };
        console.log(this.newUserConnect);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profil_profil__["a" /* ProfilPage */], { userCo: this.newUserConnect });
        this.register.updateUser(this.people, this.userConnect.ID);
    };
    ProfileditPage.prototype.AlertMissing = function () {
        var alert = this.alertCtrl.create({
            title: 'Oups ...',
            subTitle: 'Un ou des champ(s) sont manquants pour compléter votre inscription',
            buttons: ['OK']
        });
        alert.present();
    };
    ProfileditPage.prototype.updatePwd = function () {
        if (this.mdpnew != null) {
            if (Object(__WEBPACK_IMPORTED_MODULE_0__assets_md5__["a" /* md5 */])(this.mdp) == this.userConnect.MDP) {
                this.mdp = Object(__WEBPACK_IMPORTED_MODULE_0__assets_md5__["a" /* md5 */])(this.mdpnew);
                console.log(this.mdp);
                console.log("this.updatePwd");
                this.postUpdate();
            }
        }
    };
    ProfileditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profiledit',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/profiledit/profiledit.html"*/'<!--\n  Generated template for the ProfileditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edition de votre profil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color: #27AE60; ">\n  <div>\n      <ion-item class="form">\n          <ion-label class="titlelab" stacked>Nom</ion-label>\n          <ion-input class="input" type="text"  value=\'{{ userConnect.NOM }}\' [(ngModel)]="nom"></ion-input>\n        </ion-item>\n      \n        <ion-item class="form">\n          <ion-label class="titlelab" stacked>Prenom</ion-label>\n          <ion-input class="input" type="text" value=\'{{ userConnect.PRENOM }}\'  [(ngModel)]="prenom"></ion-input>\n        </ion-item>\n        \n        <ion-item class="form">\n          <ion-label class="titlelab" stacked>Login</ion-label>\n          <ion-input class="input" readonly=true type="text" value=\'{{ userConnect.LOGIN }}\'  [(ngModel)]="login"></ion-input>\n        </ion-item>\n        \n        <ion-item class="form">\n          <ion-label class="titlelab" stacked>Email</ion-label>\n          <ion-input class="input" type="email"  value=\'{{ userConnect.MAIL }}\' [(ngModel)]="email"></ion-input>\n        </ion-item>\n        \n        <ion-item class="form">\n          <ion-label  class="titlelab" stacked>Adresse</ion-label>\n          <ion-input class="input" type="text" value=\'{{ userConnect.ADRESSE }}\' [(ngModel)]="adresse"></ion-input>\n        </ion-item>\n        \n        <ion-item class="form">\n          <ion-label class="titlelab" stacked>Code Postal</ion-label>\n          <ion-input class="input" type="number"  value=\'{{ userConnect.CP }}\' [(ngModel)]="cp" ></ion-input>\n        </ion-item>\n        \n        <ion-item class="form">\n          <ion-label class="titlelab" stacked>Ville</ion-label>\n          <ion-input class="input" type="text" value=\'{{ userConnect.VILLE }}\' [(ngModel)]="ville"></ion-input>\n        </ion-item>\n        <button ion-button  (click)="checkInputEmpty()" class="btn">Enregister</button>\n  </div>\n  <!--Partie Mot de passe-->\n  <div>\n    <br>\n    <br>\n    <p class="input">Modification Mot de Passe </p>\n    <ion-item class="form">\n        <ion-label  class="titlelab" stacked>Mot de Passe Actuel</ion-label>\n        <ion-input class="input" type="password"  [(ngModel)]="mdp"></ion-input>\n    </ion-item>\n    <ion-item class="form">\n        <ion-label  class="titlelab" stacked>Nouveau Mot de Passe </ion-label>\n        <ion-input class="input" type="password"  [(ngModel)]="mdpnew"></ion-input>\n    </ion-item>\n\n    <button ion-button  (click)="updatePwd()" class="btn">Valider</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/profiledit/profiledit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */]])
    ], ProfileditPage);
    return ProfileditPage;
}());

//# sourceMappingURL=profiledit.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_register__ = __webpack_require__(83);
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
        this.userApp = navParams.get('userApp');
        console.log('userApp : ' + this.userApp);
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.checkInputEmpty = function () {
        this.missingparameter = false;
        this.emailAlready == false;
        if (this.nom == null || this.prenom == null || this.email == null || this.login == null || this.mdp == null || this.adresse == null || this.cp == null || this.ville == null) {
            this.AlertMissing();
            this.missingparameter = true;
        }
        if (!this.missingparameter) {
            this.CheckEmail(this.email);
            if (!this.emailAlready) {
                this.registerUser();
            }
            else {
                this.AlertEmailAlready();
            }
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
    RegisterPage.prototype.CheckEmail = function (email) {
        for (var k in this.userApp) {
            console.log(email);
            console.log(this.userApp[k]);
            if (email == this.userApp[k]) {
                this.emailAlready = true;
            }
        }
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
                        role: 'cancel',
                        handler: function (data) {
                            _this.email = '';
                            _this.emailAlready = false;
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding style="background-color: #27AE60; ">  \n  \n    <ion-item class="form">\n      <ion-label class="titlelab" stacked>Nom</ion-label>\n      <ion-input class="input" type="text"  [(ngModel)]="nom"></ion-input>\n    </ion-item>\n  \n    <ion-item class="form">\n      <ion-label class="titlelab" stacked>Prenom</ion-label>\n      <ion-input class="input" type="text"   [(ngModel)]="prenom"></ion-input>\n    </ion-item>\n    \n    <ion-item class="form">\n      <ion-label class="titlelab" stacked>Login</ion-label>\n      <ion-input class="input" type="text"  [(ngModel)]="login"></ion-input>\n    </ion-item>\n    \n    <ion-item class="form">\n      <ion-label  class="titlelab" stacked>Mot de Passe</ion-label>\n      <ion-input class="input" type="password"  [(ngModel)]="mdp"></ion-input>\n    </ion-item>\n    \n    <ion-item class="form">\n      <ion-label class="titlelab" stacked>Email</ion-label>\n      <ion-input class="input" type="email"  [(ngModel)]="email"></ion-input>\n    </ion-item>\n    \n    <ion-item class="form">\n      <ion-label  class="titlelab" stacked>Adresse</ion-label>\n      <ion-input class="input" type="text"  [(ngModel)]="adresse"></ion-input>\n    </ion-item>\n    \n    <ion-item class="form">\n      <ion-label class="titlelab" stacked>Code Postal</ion-label>\n      <ion-input class="input" type="number"  [(ngModel)]="cp" ></ion-input>\n    </ion-item>\n    \n    <ion-item class="form">\n      <ion-label class="titlelab" stacked>Ville</ion-label>\n      <ion-input class="input" type="text"  [(ngModel)]="ville"></ion-input>\n    </ion-item>\n\n  \n  <button ion-button class="btn" (click)="checkInputEmpty()">Inscription</button>\n</ion-content>'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/register/register.html"*/,
            styles: ["\n    .ng-valid { border-color: green; }\n    .ng-invalid { border-color: red; }    \n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_register_register__["a" /* RegisterProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/annonce/annonce.module": [
		285,
		6
	],
	"../pages/favori/favori.module": [
		286,
		5
	],
	"../pages/forgotpswd/forgotpswd.module": [
		287,
		4
	],
	"../pages/login/login.module": [
		288,
		3
	],
	"../pages/profil/profil.module": [
		289,
		2
	],
	"../pages/profiledit/profiledit.module": [
		290,
		1
	],
	"../pages/register/register.module": [
		291,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnonceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
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


var AnnonceProvider = /** @class */ (function () {
    function AnnonceProvider(http) {
        this.http = http;
        this.annonces = {};
        console.log('Hello AnnonceProvider Provider');
        this.http = http;
        this.getHttpAnnonce();
    }
    AnnonceProvider.prototype.useAnnonces = function () {
        var jsonAnnonces;
        jsonAnnonces = JSON.parse(this.annonces);
        console.log(jsonAnnonces);
        console.log("test");
        return jsonAnnonces;
    };
    AnnonceProvider.prototype.getHttpAnnonce = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = 'http://lebonangle.ddns.net:3000/api/annonces';
                        this.http.get(link)
                            .subscribe(function (res) {
                            _this.annonces = res['_body'];
                            console.log(_this.annonces);
                        });
                        return [4 /*yield*/, this.annonces];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AnnonceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AnnonceProvider);
    return AnnonceProvider;
}());

//# sourceMappingURL=annonce.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
// Taken from https://github.com/killmenot/webtoolkit.md5
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favori_favori__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgotpswd_forgotpswd__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profiledit_profiledit__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_annonce_annonce__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_register_register__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_annonce_annonce__ = __webpack_require__(162);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotpswd_forgotpswd__["a" /* ForgotpswdPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favori_favori__["a" /* FavoriPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profiledit_profiledit__["a" /* ProfileditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_annonce_annonce__["a" /* AnnoncePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/annonce/annonce.module#AnnoncePageModule', name: 'AnnoncePage', segment: 'annonce', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favori/favori.module#FavoriPageModule', name: 'FavoriPage', segment: 'favori', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpswd/forgotpswd.module#ForgotpswdPageModule', name: 'ForgotpswdPage', segment: 'forgotpswd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profiledit/profiledit.module#ProfileditPageModule', name: 'ProfileditPage', segment: 'profiledit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotpswd_forgotpswd__["a" /* ForgotpswdPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favori_favori__["a" /* FavoriPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profiledit_profiledit__["a" /* ProfileditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_annonce_annonce__["a" /* AnnoncePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_register_register__["a" /* RegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_annonce_annonce__["a" /* AnnonceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favori_favori__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__ = __webpack_require__(40);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Annonces Immobilières', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'md-home', color: '' },
            { title: 'Favoris', component: __WEBPACK_IMPORTED_MODULE_6__pages_favori_favori__["a" /* FavoriPage */], icon: 'star', color: '' },
            { title: 'Profil', component: __WEBPACK_IMPORTED_MODULE_7__pages_profil_profil__["a" /* ProfilPage */], icon: 'md-contact', color: '' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/app/app.html"*/'<ion-menu id="Menu" [content]="content" class="side-menu-header no-scroll">\n    <ion-header>\n      <ion-toolbar>\n        <img  class="img" src="assets/imgs/pyramide.png" />\n        <!--<ion-title>Menu</ion-title>-->\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content class="side-menu">\n      <ion-list>\n        <button menuClose icon-start ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{p.icon}}"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  \n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profiledit_profiledit__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// PROVIDER

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams, auth, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.menu = menu;
        // receive the data send by other pages
        this.userConnect = navParams.get('userCo');
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true, 'Menu');
    };
    ProfilPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profiledit_profiledit__["a" /* ProfileditPage */], { userCo: this.userConnect });
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/profil/profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- LEFT SIDE -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- CENTER SIDE -->\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="mainDivProfil">\n    <div>\n      <ion-list>\n        <ion-item>\n          <span class="titlelab" >Nom</span>\n          <span class="infoProfil" >{{ userConnect.NOM }}</span>\n        </ion-item>\n        \n        <ion-item>\n          <span class="titlelab" >Prenom</span>\n          <span class="infoProfil" >{{ userConnect.PRENOM }}</span>\n        </ion-item>\n  \n        <ion-item>\n          <span class="titlelab" >Login</span>\n          <span class="infoProfil" >{{ userConnect.LOGIN }}</span>\n        </ion-item>\n  \n        <ion-item>\n          <span class="titlelab" >Email</span>\n          <span class="infoProfil" >{{ userConnect.MAIL }}</span>\n        </ion-item>\n  \n        <ion-item>\n          <span  class="titlelab" >Adresse</span>\n          <span class="infoProfil" >{{ userConnect.ADRESSE }}</span>\n        </ion-item>\n  \n        <ion-item>\n          <span class="titlelab" >Code Postal</span>\n          <span class="infoProfil" >{{ userConnect.CP }}</span>\n        </ion-item>\n  \n        <ion-item>\n          <span class="titlelab" >Ville</span>\n          <span class="infoProfil" >{{ userConnect.VILLE }}</span>\n        </ion-item>\n      </ion-list>\n\n    </div>\n\n    \n    <div>\n        \n      <button ion-button class="btn" (click)="edit()">Editer votre profil</button>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/profil/profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnoncePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnoncePage = /** @class */ (function () {
    function AnnoncePage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.imageDispo = false;
    }
    AnnoncePage.prototype.ionViewWillEnter = function () {
    };
    AnnoncePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnnoncePage');
        this.menu.enable(false, 'Menu');
        this.annonce = this.navParams.get('annonce');
        this.imageDispo = this.annonce.image != "";
        this.link = this.annonce.LINK;
        this.titre = this.annonce.TITRE;
        this.desc = this.annonce.DESCRIPTION;
        this.cp = this.annonce.CP;
        this.date = this.annonce.DATE_EN;
        this.location = this.annonce.LOCATION == 1 ? 'oui' : 'non';
        this.meuble = this.annonce.MEUBLE == 1 ? 'oui' : 'non';
        this.nbpiece = this.annonce.NBPIECES;
        this.prix = this.annonce.PRIX;
        this.superficie = this.annonce.SUPERFICIE;
        this.type = this.annonce.TYPEBIEN;
        this.ville = this.annonce.VILLE;
        this.comeFrom = this.navParams.get("comeFrom");
        console.log(this.annonce);
        console.log(this.comeFrom);
    };
    AnnoncePage.prototype.ajouterFav = function () {
    };
    AnnoncePage.prototype.retirerFav = function () {
    };
    AnnoncePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-annonce',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/annonce/annonce.html"*/'<ion-header>\n    <ion-navbar>\n  \n      <!-- CENTER SIDE -->\n      <ion-title>Annonce</ion-title>\n\n      <!-- RIGHT SIDE -->\n      <a href="{{ link }}">\n        <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="md-open" style="color: #FFF; padding-right: 10px;"></ion-icon>\n          </button>\n        </ion-buttons>\n      </a>\n      \n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <ion-card>\n      <div class="title-annonce">{{ titre }}</div>\n      <img *ngIf="!imageDispo" src="assets/imgs/noImage.jpg"/>\n      <img *ngIf="imageDispo" src="{{ annonce.image }}"/>\n      <span class="cp-abs"><ion-label class="cp-rel">{{ cp }} - {{ ville }}</ion-label></span>\n      <ion-item class="prix">{{ prix }}€ TTC</ion-item>\n      <div class="desc">{{ desc }}</div>\n      <ion-item>\n        <ion-icon name="md-home" class="logo"></ion-icon><span class="text-logo">Type de bien </span>\n        {{ type }} \n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-resize" class="logo"></ion-icon><span class="text-logo">Superficie </span>\n        {{ superficie }} m2\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-map" class="logo"></ion-icon><span class="text-logo">Nombre de Pièce(s) </span>\n        {{ nbpiece }}\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-cube" class="logo"></ion-icon><span class="text-logo">Meublé ? </span>\n        {{ meuble }} \n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-key" class="logo"></ion-icon><span class="text-logo">Location ? </span>\n        {{ location }}\n      </ion-item>\n      <ion-item class="date">{{ (date | slice:8:10) }}-{{ (date | slice:5:7) }}-{{ (date | slice:0:4)}}</ion-item>\n      <div *ngIf="comeFrom == \'home\'">\n          <button ion-button icon-start full class="fav-ajouter" (click)="ajouterFav()">\n            <ion-icon name="md-heart"></ion-icon>\n            Mettre en Favori\n          </button>\n      </div>\n      <div *ngIf="comeFrom == \'favori\'">\n          <button ion-button icon-start full class="fav-retirer" (click)="retirerFav()">\n            <ion-icon name="md-close"></ion-icon>\n            Retirer des Favoris\n          </button>\n        </div>\n    </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/annonce/annonce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], AnnoncePage);
    return AnnoncePage;
}());

//# sourceMappingURL=annonce.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpswd_forgotpswd__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(84);
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
    function LoginPage(navCtrl, navParams, auth, alertCtrl, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false, 'Menu');
    };
    LoginPage.prototype.checkAuthentification = function () {
        var userConnect;
        if ((this.email == null) || (this.password == null)) {
            this.AlertFailedAuth();
        }
        else {
            userConnect = this.auth.checkAuth(this.email, this.password);
        }
        if (userConnect != null) {
            // send data to other pages
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { userCo: userConnect });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilPage */], { userCo: userConnect });
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgotpswd_forgotpswd__["a" /* ForgotpswdPage */]);
    };
    LoginPage.prototype.register = function () {
        this.userEmail = this.auth.userMail();
        console.log("Inscription");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */], { userApp: this.userEmail });
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/login/login.html"*/'<ion-content padding style="background-color: #27AE60;" class="no-scroll">\n    <img  class="logo" align =\'center\' src="assets/imgs/logo-login.png" width="220px" />\n    \n        \n\n        <ion-item class="form">\n            <ion-label class="titlelab" floating>Email</ion-label>\n            <ion-input class="input" type="text" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n        <ion-item class="form">\n            <ion-label class="titlelab" floating>Password</ion-label>\n            <ion-input class="input" type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n\n    <ion-label class="btn-mdp mdpforgot" (click)="mdpforgot()">Mot de passe oublié ?</ion-label>\n    <ion-label class="btn-insc mdpforgot" (click)="register()">Inscription</ion-label>\n    <br/>\n    <button ion-button class="btn" (click)="checkAuthentification()">Connexion</button>\n    \n    \n</ion-content>'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_annonce_annonce__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__annonce_annonce__ = __webpack_require__(52);
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

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, annonceP, navParams, menu) {
        this.navCtrl = navCtrl;
        this.annonceP = annonceP;
        this.navParams = navParams;
        this.menu = menu;
        // Recherche variable
        this.ville_cp = "";
        this.loyer_min = "";
        this.loyer_max = "";
        this.surf_min = "";
        this.surf_max = "";
        this.piece_min = "";
        this.piece_max = "";
        this.maison = false;
        this.appart = false;
        this.terrain = false;
        this.parking = false;
        this.autre = false;
        //annonces : any = [{"ID":1,"TITRE":"T2 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 2 de 35m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1200Euro(s)/mois CC","SUPERFICIE":35,"CP":75014,"DELETED":0,"DATE_EN":"2018-05-20T00:00:00.000Z","ID_AUTHOR":1,"PRIX":1200,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":0,"NBPIECES":2,"VILLE":"Paris","LOCATION":1,"image":"http://mmf.logic-immo.com/mmf/ads/photo-prop-800x600/837/1/16c0455f-7770-4bfc-8501-b21652fd54b4.jpg"},{"ID":2,"TITRE":"T3 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 3 de 40m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1500Euro(s)/mois CC","SUPERFICIE":40,"CP":75015,"DELETED":0,"DATE_EN":"2017-11-12T00:00:00.000Z","ID_AUTHOR":2,"PRIX":1500,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":1,"NBPIECES":3,"VILLE":"Paris","LOCATION":1, "image":""}];
        this.annonces = [{ "ID": 1, "TITRE": "T2 - Metro Motte Picquet Grenelle", "DESCRIPTION": "Description Loue appartement type 2 de 35m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1200Euro(s)/mois CC", "SUPERFICIE": 35, "CP": 75014, "DELETED": 0, "DATE_EN": "2018-05-20T00:00:00.000Z", "ID_AUTHOR": 1, "PRIX": 1200, "LINK": "https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s", "TYPEBIEN": "Appartement", "MEUBLE": 0, "NBPIECES": 2, "VILLE": "Paris", "LOCATION": 1, "image": "http://mmf.logic-immo.com/mmf/ads/photo-prop-800x600/837/1/16c0455f-7770-4bfc-8501-b21652fd54b4.jpg" }, { "ID": 2, "TITRE": "T3 - Metro Motte Picquet Grenelle", "DESCRIPTION": "Description Loue appartement type 3 de 40m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1500Euro(s)/mois CC", "SUPERFICIE": 40, "CP": 75015, "DELETED": 0, "DATE_EN": "2017-11-12T00:00:00.000Z", "ID_AUTHOR": 2, "PRIX": 1500, "LINK": "https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s", "TYPEBIEN": "Appartement", "MEUBLE": 1, "NBPIECES": 3, "VILLE": "Paris", "LOCATION": 1, "image": "" }, { "ID": 3, "TITRE": "Appartement F2 30m2 - meublé", "DESCRIPTION": "A louer F2 - 33m². - zone pavillonnaire très clame.A 9 min à pied du RER B DRANCYProche commerces et toutes commodités.Appartement refait à neuf (plomberie, électricité, sol, chauffage, cuisine, salle de bain).ÉQUIPEMENTS:Double vitrage.Chauffage électrique.Ballon d'eau chaude.Cuisine équipée séparée :Loyer par mois : 670€ + 90 € de provisions pour charges = 760€ CCCautions : 2 mois de loyer hors charge : 1340€Disponible à partir du 15 Juillet 2018.", "SUPERFICIE": 30, "CP": 93700, "DELETED": 0, "DATE_EN": "2018-06-18T00:00:00.000Z", "ID_AUTHOR": 4, "PRIX": 760, "LINK": "https://www.leboncoin.fr/locations/1450374640.htm/?ca=12_s", "TYPEBIEN": "Appartement", "MEUBLE": 1, "NBPIECES": 2, "VILLE": "DRANCY", "LOCATION": 1, "image": "https://edito.seloger.com/sites/default/files/styles/manual_crop_640x412/public/guide/images/check-list-lumiosite-appartement.jpg?itok=C6yrQhs4" }, { "ID": 4, "TITRE": "Grand studio meublé quartier Olympiades-Tolbiac", "DESCRIPTION": "Grand studio meublé de 36 m² dont mezzanine 8 m² sous combles avec poutres apparentes, lit 2 pl dans la mezzanine. Grand séjour comprenant un canapé convertible, fenêtres double vitrage, une cheminée fonctionnelle, télévision fauteuils .L'entré avec placards. Cuisine équipée indépendante tout est fournie, Une salle de bains avec douche.Chauffage électrique. Porte blindée L'ensemble de l'électroménager et l'ameublement est neuf. Au 1er étage, sans voisins.L'appartement a été refait a neuf.Charges comprises (sauf eau et électricité). Cave.Possibilité location courte durée. Garanties et références demandées, idéal étudiant ou couple", "SUPERFICIE": 36, "CP": 75013, "DELETED": 0, "DATE_EN": "", "ID_AUTHOR": 3, "PRIX": 1280.00, "LINK": "https://www.leboncoin.fr/locations/1450373735.htm/?ca=12_s", "TYPEBIEN": "Appartement", "MEUBLE": 1, "NBPIECES": 1, "VILLE": "Paris", "LOCATION": 1, "image": "https://img0.leboncoin.fr/ad-image/9547aff40e26ef0f97c5d39fa7e59e6510ba3e64.jpg" }];
        this.annoncesfiltr = [];
        this.data = [];
        this.filtre = false;
        this.searchMenuVisible = 'invisible';
        this.annonceP.getHttpAnnonce();
        this.userConnect = navParams.get('userCo');
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true, 'Menu');
    };
    HomePage.prototype.useAnnonce = function () {
        this.annonceP.useAnnonces();
    };
    HomePage.prototype.toggleSearchMenu = function () {
        this.searchMenuVisible = (this.searchMenuVisible == 'visible') ? 'invisible' : 'visible';
        if (!this.checkFiltre()) {
            this.filtre = false;
        }
    };
    HomePage.prototype.rechercher = function () {
        this.annoncesfiltr = [];
        this.filtrer();
        this.toggleSearchMenu();
    };
    HomePage.prototype.filtrer = function () {
        if (this.checkFiltre()) {
            this.annoncesfiltr = this.annonces;
            var annonceTemp = [];
            this.filtre = true;
            // VILE - CP
            if (this.ville_cp != "") {
                for (var _i = 0, _a = this.annoncesfiltr; _i < _a.length; _i++) {
                    var a = _a[_i];
                    var ville = a.VILLE;
                    if (this.ville_cp.toLowerCase() == ville.toLowerCase() || this.ville_cp == a.CP) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // LOYER MIN
            if (this.loyer_min != "" && this.annoncesfiltr != []) {
                for (var _b = 0, _c = this.annoncesfiltr; _b < _c.length; _b++) {
                    var a = _c[_b];
                    if (a.PRIX >= this.loyer_min) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // LOYER MAX
            if (this.loyer_max != "" && this.annoncesfiltr != []) {
                for (var _d = 0, _e = this.annoncesfiltr; _d < _e.length; _d++) {
                    var a = _e[_d];
                    if (a.PRIX <= this.loyer_max) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // SURFACE MIN
            if (this.surf_min != "" && this.annoncesfiltr != []) {
                for (var _f = 0, _g = this.annoncesfiltr; _f < _g.length; _f++) {
                    var a = _g[_f];
                    if (a.SUPERFICIE >= this.surf_min) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // SURFACE MAX
            if (this.surf_max != "" && this.annoncesfiltr != []) {
                for (var _h = 0, _j = this.annoncesfiltr; _h < _j.length; _h++) {
                    var a = _j[_h];
                    if (a.SUPERFICIE <= this.surf_max) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // PIECE MIN
            if (this.piece_min != "" && this.annoncesfiltr != []) {
                for (var _k = 0, _l = this.annoncesfiltr; _k < _l.length; _k++) {
                    var a = _l[_k];
                    if (a.NBPIECES >= this.piece_min) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // PIECE MAX
            if (this.piece_max != "" && this.annoncesfiltr != []) {
                for (var _m = 0, _o = this.annoncesfiltr; _m < _o.length; _m++) {
                    var a = _o[_m];
                    if (a.NBPIECES <= this.piece_max) {
                        annonceTemp.push(a);
                    }
                }
                this.annoncesfiltr = annonceTemp;
                annonceTemp = [];
            }
            // MAISON
            if (this.maison != "" && this.annoncesfiltr != []) {
                for (var _p = 0, _q = this.annoncesfiltr; _p < _q.length; _p++) {
                    var a = _q[_p];
                    if (a.TYPEBIEN == 'Maison') {
                        annonceTemp.push(a);
                    }
                }
            }
            // APPARTEMENT
            if (this.appart != "" && this.annoncesfiltr != []) {
                for (var _r = 0, _s = this.annoncesfiltr; _r < _s.length; _r++) {
                    var a = _s[_r];
                    if (a.TYPEBIEN == 'Appartement') {
                        annonceTemp.push(a);
                    }
                }
            }
            // PARKING
            if (this.parking != "" && this.annoncesfiltr != []) {
                for (var _t = 0, _u = this.annoncesfiltr; _t < _u.length; _t++) {
                    var a = _u[_t];
                    if (a.TYPEBIEN == 'Parking') {
                        annonceTemp.push(a);
                    }
                }
            }
            // TERRAIN
            if (this.terrain != "" && this.annoncesfiltr != []) {
                for (var _v = 0, _w = this.annoncesfiltr; _v < _w.length; _v++) {
                    var a = _w[_v];
                    if (a.TYPEBIEN == 'Terrain') {
                        annonceTemp.push(a);
                    }
                }
            }
            // AUTRE
            if (this.autre != "" && this.annoncesfiltr != []) {
                for (var _x = 0, _y = this.annoncesfiltr; _x < _y.length; _x++) {
                    var a = _y[_x];
                    if (a.TYPEBIEN == 'Autre') {
                        annonceTemp.push(a);
                    }
                }
            }
            this.annoncesfiltr = (this.maison != "" || this.terrain != "" || this.autre != "" || this.appart != "" || this.parking != "") ? annonceTemp : this.annoncesfiltr;
        }
        else {
            this.filtre = false;
        }
    };
    HomePage.prototype.checkFiltre = function () {
        var check = this.ville_cp != "" || this.loyer_min != "" || this.loyer_max != "" || this.surf_max != "" || this.surf_min != "" || this.piece_min != "" || this.piece_max != "" || this.maison || this.terrain || this.parking || this.appart || this.autre;
        console.log("check ", check);
        return check;
    };
    HomePage.prototype.detailAnnonce = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__annonce_annonce__["a" /* AnnoncePage */], { "annonce": a, "comeFrom": "home" });
    };
    HomePage.prototype.vider = function () {
        this.ville_cp = "";
        this.loyer_min = "";
        this.loyer_max = "";
        this.surf_min = "";
        this.surf_max = "";
        this.piece_min = "";
        this.piece_max = "";
        this.maison = false;
        this.appart = false;
        this.terrain = false;
        this.parking = false;
        this.autre = false;
        this.filtre = false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n  \n      <!-- LEFT SIDE -->\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <!-- CENTER SIDE -->\n      <ion-title>Annonces Immobilières</ion-title>\n\n      <!-- RIGHT SIDE -->\n      <div class="left-button">\n        <ion-buttons end>\n          <button (click)="toggleSearchMenu()" ion-button icon-only>\n            <ion-icon name="ios-funnel"></ion-icon>\n          </button>\n        </ion-buttons>\n      </div>\n      \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    <div class="search-menu" [@myvisibility]="searchMenuVisible">\n      <br/>\n      <ion-input class="input-search-menu input-ville-cp" type="text" placeholder="Ville ou code postal" [(ngModel)]="ville_cp"></ion-input>\n      <br/>\n      <div class="double-input">\n        <ion-input class="input-search-menu input-short input-left" type="text" placeholder="Loyer Min" [(ngModel)]="loyer_min"></ion-input>\n        <span class="dash">-</span>\n        <ion-input class="input-search-menu input-short input-right" type="text" placeholder="Loyer Max" [(ngModel)]="loyer_max"></ion-input>\n      </div>\n      <br/>\n      <div class="double-input">\n        <ion-input class="input-search-menu input-short input-left" type="text" placeholder="Surface Min" [(ngModel)]="surf_min"></ion-input>\n        <span class="dash">-</span>\n        <ion-input class="input-search-menu input-short input-right" type="text" placeholder="Surface Max" [(ngModel)]="surf_max"></ion-input>\n      </div>\n      <br/>\n      <div class="double-input">\n        <ion-input class="input-search-menu input-short input-left" type="text" placeholder="Pièces Min" [(ngModel)]="piece_min"></ion-input>\n        <span class="dash">-</span>\n        <ion-input class="input-search-menu input-short input-right" type="text" placeholder="Pièces Max" [(ngModel)]="piece_max"></ion-input>\n      </div>\n      <div class="content-checkbox">\n        <ion-label class="title-checkbox">Type</ion-label>\n        <div class="checkbox-div inline-block">\n          <ion-checkbox color="checkbox" checked="false" class=" inline-block" [(ngModel)]="maison"></ion-checkbox>\n          <ion-label class="checkbox-label inline-block">Maison</ion-label>\n        </div>\n        <div class="checkbox-div inline-block">\n          <ion-checkbox color="checkbox" checked="false" class="inline-block" [(ngModel)]="appart"></ion-checkbox>\n          <ion-label class="checkbox-label inline-block">Appartement</ion-label>\n        </div>\n        <div class="checkbox-div inline-block">\n          <ion-checkbox color="checkbox" checked="false" class="inline-block" [(ngModel)]="terrain"></ion-checkbox>\n          <ion-label class="checkbox-label inline-block">Terrain</ion-label>\n        </div>\n        <div class="checkbox-div inline-block">\n          <ion-checkbox color="checkbox" checked="false" class="inline-block" [(ngModel)]="parking"></ion-checkbox>\n          <ion-label class="checkbox-label inline-block">Parking</ion-label>\n        </div>\n        <div class="checkbox-div inline-block">\n            <ion-checkbox color="checkbox" checked="false" class="inline-block" [(ngModel)]="autre"></ion-checkbox>\n            <ion-label class="checkbox-label inline-block">Autre</ion-label>\n        </div>\n        <button color="checkbox" ion-button class="vider" (click)="vider()">Reinitialiser</button>\n        <button color="checkbox" ion-button class="rechercher" (click)="rechercher()">Rechercher</button>\n      </div>\n    </div>\n    <div>\n      <div *ngIf="filtre">\n        <div *ngFor="let a of annoncesfiltr">\n          <ion-card (click)="detailAnnonce(a)">\n            <img *ngIf="a.image == \'\'" src="assets/imgs/noImage.jpg"/>\n            <img *ngIf="a.image != null" src="{{ a.image }}"/>\n            <ion-card-content>\n                <span class="cp-abs"><ion-label class="cp-rel">{{ a.CP }} - {{ a.VILLE }}</ion-label></span>\n              <ion-card-title >\n                {{ (a.TITRE.length>50)? (a.TITRE | slice:0:50)+\'..\':(a.TITRE) }}\n              </ion-card-title>\n              <p>\n                {{ (a.DESCRIPTION.length>100)? (a.DESCRIPTION | slice:0:100)+\'..\':(a.DESCRIPTION) }}\n              </p>\n              <!-- <ion-label class="">{{ (a.DATE_EN | slice:8:10) }}-{{ (a.DATE_EN | slice:5:7) }}-{{ (a.DATE_EN | slice:0:4)}}</ion-label> -->\n              <ion-label class="prix-rel">{{ a.PRIX }} €</ion-label>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n      <div *ngIf="!filtre">\n        <div *ngFor="let a of annonces">\n          <ion-card (click)="detailAnnonce(a)">\n            <img *ngIf="a.image == \'\'" src="assets/imgs/noImage.jpg"/>\n            <img *ngIf="a.image != null" src="{{ a.image }}"/>\n            <ion-card-content>\n                <span class="cp-abs"><ion-label class="cp-rel">{{ a.CP }} - {{ a.VILLE }}</ion-label></span>\n              <ion-card-title >\n                {{ (a.TITRE.length>50)? (a.TITRE | slice:0:50)+\'..\':(a.TITRE) }}\n              </ion-card-title>\n              <p>\n                {{ (a.DESCRIPTION.length>100)? (a.DESCRIPTION | slice:0:100)+\'..\':(a.DESCRIPTION) }}\n              </p>\n              <!-- <ion-label class="">{{ (a.DATE_EN | slice:8:10) }}-{{ (a.DATE_EN | slice:5:7) }}-{{ (a.DATE_EN | slice:0:4)}}</ion-label> -->\n              <ion-label class="prix-rel">{{ a.PRIX }} €</ion-label>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    \n  </ion-content>'/*ion-inline-end:"/Users/benjamin/Documents/GitKraken/ProjetISI/src/pages/home/home.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('myvisibility', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ height: 500, opacity: 1, visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ height: 0, opacity: 0, visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('invisible => visible', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, height: 0, visibility: 'visible', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: .5, height: 250, offset: 0.5 }),
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, height: 500, offset: 1.0 })
                        ]))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])('visible => invisible', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1, height: '*', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: .5, height: 250, offset: 0.5 }),
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0, height: 0, visibility: 'hidden', offset: 1.0 })
                        ]))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_annonce_annonce__["a" /* AnnonceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
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
    RegisterProvider.prototype.updateUser = function (tableau, id) {
        var _this = this;
        var jasonprepare = { nom: tableau[0], prenom: tableau[1], login: tableau[2], mdp: tableau[3], mail: tableau[4], adresse: tableau[5], cp: tableau[6], ville: tableau[7] };
        var link = "http://lebonangle.ddns.net:3000/api/users/" + id;
        console.log(link);
        this.http.put(link, jasonprepare)
            .subscribe(function (data) {
            _this.data.response = data["_body"];
            console.log(_this.data);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    RegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], RegisterProvider);
    return RegisterProvider;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_md5__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
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
        this.user = {};
        this.userSpec = {};
        console.log('Hello AuthProvider Provider');
        this.http = http;
        this.getHttpUser();
    }
    AuthProvider.prototype.checkAuth = function (email, password) {
        var md5password = Object(__WEBPACK_IMPORTED_MODULE_0__assets_md5__["a" /* md5 */])(password);
        var jsonUser;
        var test = false;
        console.log("checkAuth");
        console.log(this.user);
        jsonUser = JSON.parse(this.user);
        console.log(jsonUser);
        var length = Object.keys(jsonUser.users).length;
        console.log(length);
        for (var k in jsonUser.users) {
            if ((email == jsonUser.users[k].MAIL && md5password == jsonUser.users[k].MDP && jsonUser.users[k].DELETED == false)) {
                console.log("auth OK");
                this.userConnect = jsonUser.users[k];
                console.log(this.userConnect);
                test = true;
            }
            else {
                console.log("auth KO ");
            }
        }
        return this.userConnect;
    };
    AuthProvider.prototype.getHttpUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = 'http://lebonangle.ddns.net:3000/api/users';
                        this.http.get(link)
                            .subscribe(function (res) {
                            _this.user = res['_body'];
                            console.log(_this.user);
                        });
                        return [4 /*yield*/, this.user];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AuthProvider.prototype.userMail = function () {
        var jsonUser;
        var test = [];
        jsonUser = JSON.parse(this.user);
        var length = Object.keys(jsonUser.users).length;
        console.log(length);
        for (var k in jsonUser.users) {
            test.push(jsonUser.users[k].MAIL);
        }
        this.emailApp = test;
        return this.emailApp;
    };
    AuthProvider.prototype.getHttpUserSpec = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = 'http://lebonangle.ddns.net:3000/api/users/' + id;
                        this.http.get(link)
                            .subscribe(function (res) {
                            _this.userSpec = res['_body'];
                            console.log(_this.userSpec);
                        });
                        return [4 /*yield*/, this.user];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AuthProvider.prototype.userSpecif = function () {
        var jsonUser;
        jsonUser = JSON.parse(this.user);
        console.log(jsonUser);
        return jsonUser;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map