System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BeverageService;
    return {
        setters:[],
        execute: function() {
            BeverageService = (function () {
                function BeverageService() {
                }
                BeverageService.prototype.getBeverages = function () {
                    return ["Leffe", "Chimay", "Erdinger"];
                };
                return BeverageService;
            }());
            exports_1("BeverageService", BeverageService);
        }
    }
});
//# sourceMappingURL=beverages.service.js.map