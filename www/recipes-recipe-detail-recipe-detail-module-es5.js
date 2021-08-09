function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipe-detail-recipe-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeDetailRecipeDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recipes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ loadedRecipe.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDeleteRecipe()\"><ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"loadedRecipe.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\">{{ loadedRecipe.title }}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let ingredient of loadedRecipe.ingredients\">\n            {{ ingredient }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-detail/recipe-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: RecipeDetailPageRoutingModule */

  /***/
  function srcAppRecipesRecipeDetailRecipeDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailPageRoutingModule", function () {
      return RecipeDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipe-detail.page */
    "./src/app/recipes/recipe-detail/recipe-detail.page.ts");

    var routes = [{
      path: '',
      component: _recipe_detail_page__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailPage"]
    }];

    var RecipeDetailPageRoutingModule = function RecipeDetailPageRoutingModule() {
      _classCallCheck(this, RecipeDetailPageRoutingModule);
    };

    RecipeDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RecipeDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-detail/recipe-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: RecipeDetailPageModule */

  /***/
  function srcAppRecipesRecipeDetailRecipeDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailPageModule", function () {
      return RecipeDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _recipe_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipe-detail-routing.module */
    "./src/app/recipes/recipe-detail/recipe-detail-routing.module.ts");
    /* harmony import */


    var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipe-detail.page */
    "./src/app/recipes/recipe-detail/recipe-detail.page.ts");

    var RecipeDetailPageModule = function RecipeDetailPageModule() {
      _classCallCheck(this, RecipeDetailPageModule);
    };

    RecipeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recipe_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailPageRoutingModule"]],
      declarations: [_recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailPage"]]
    })], RecipeDetailPageModule);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-detail/recipe-detail.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipeDetailRecipeDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-detail/recipe-detail.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail.page.ts ***!
    \*************************************************************/

  /*! exports provided: RecipeDetailPage */

  /***/
  function srcAppRecipesRecipeDetailRecipeDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailPage", function () {
      return RecipeDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../recipes.service */
    "./src/app/recipes/recipes.service.ts");

    var RecipeDetailPage = /*#__PURE__*/function () {
      function RecipeDetailPage(activatedRoute, recipesService, router, alertCtrl) {
        _classCallCheck(this, RecipeDetailPage);

        this.activatedRoute = activatedRoute;
        this.recipesService = recipesService;
        this.router = router;
        this.alertCtrl = alertCtrl;
      }

      _createClass(RecipeDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
              // redirect
              _this.router.navigate(['/recipes']);

              return;
            }

            var recipeId = paramMap.get('recipeId');
            _this.loadedRecipe = _this.recipesService.getRecipe(recipeId);
          });
        }
      }, {
        key: "onDeleteRecipe",
        value: function onDeleteRecipe() {
          var _this2 = this;

          this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete the recipe?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: 'Delete',
              handler: function handler() {
                _this2.recipesService.deleteRecipe(_this2.loadedRecipe.id);

                _this2.router.navigate(['/recipes']);
              }
            }]
          }).then(function (alertEl) {
            alertEl.present();
          });
        }
      }]);

      return RecipeDetailPage;
    }();

    RecipeDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    RecipeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipe-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recipe-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recipe-detail.page.scss */
      "./src/app/recipes/recipe-detail/recipe-detail.page.scss"))["default"]]
    })], RecipeDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=recipes-recipe-detail-recipe-detail-module-es5.js.map