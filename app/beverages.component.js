System.register(['angular2/core', './beverages.service', "./auto-grow.directive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, beverages_service_1, auto_grow_directive_1;
    var BeveragesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (beverages_service_1_1) {
                beverages_service_1 = beverages_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            BeveragesComponent = (function () {
                function BeveragesComponent(beverageService) {
                    this.title = "Drink some Beer!";
                    this.beverages = beverageService.getBeverages();
                }
                BeveragesComponent = __decorate([
                    core_1.Component({
                        selector: 'beverages',
                        template: "\n        <h2>Beverages</h2>\n        {{ title }}\n        <input type=\"text\" autoGrow/>\n        <ul>\n            <li *ngFor=\"#beverage of beverages\">\n                {{ beverage }}\n            </li>\n        </ul>\n        ",
                        providers: [beverages_service_1.BeverageService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [beverages_service_1.BeverageService])
                ], BeveragesComponent);
                return BeveragesComponent;
            }());
            exports_1("BeveragesComponent", BeveragesComponent);
        }
    }
});
//# sourceMappingURL=beverages.component.js.map