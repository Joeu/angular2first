System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BrandService;
    return {
        setters:[],
        execute: function() {
            BrandService = (function () {
                function BrandService() {
                }
                BrandService.prototype.getBrands = function () {
                    return ["Brand1", "Brand2", "Brand3"];
                };
                return BrandService;
            }());
            exports_1("BrandService", BrandService);
        }
    }
});
//# sourceMappingURL=brands.service.js.map