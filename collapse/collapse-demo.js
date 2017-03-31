"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CollapseDemo = (function () {
    function CollapseDemo() {
        this._isCollapsedContent = false;
        this._isCollapsedImage = true;
    }
    return CollapseDemo;
}());
CollapseDemo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'collapse-demo',
        templateUrl: 'collapse-demo.html',
        styles: ["\n    .collapse { display: none; }\n    .collapse.in { display: block; }\n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      transition: height, visibility 0.35s ease;\n    }\n  "],
        encapsulation: core_1.ViewEncapsulation.None
    })
], CollapseDemo);
exports.CollapseDemo = CollapseDemo;
//# sourceMappingURL=collapse-demo.js.map