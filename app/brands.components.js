System.register(['angular2/core', './brands.service'], function(exports_1, context_1) {
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
    var core_1, brands_service_1;
    var BrandsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (brands_service_1_1) {
                brands_service_1 = brands_service_1_1;
            }],
        execute: function() {
            BrandsComponent = (function () {
                function BrandsComponent(brandService) {
                    this.title = "Here are some Brands!";
                    this.brands = brandService.getBrands();
                }
                BrandsComponent = __decorate([
                    core_1.Component({
                        selector: 'brands',
                        template: "\n        <h2>Brands</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor=\"#brand of brands\">\n                {{ brand }}\n            </li>\n        </ul>\n        ",
                        providers: [brands_service_1.BrandService]
                    }), 
                    __metadata('design:paramtypes', [brands_service_1.BrandService])
                ], BrandsComponent);
                return BrandsComponent;
            }());
            exports_1("BrandsComponent", BrandsComponent);
        }
    }
});
//# sourceMappingURL=brands.components.js.map