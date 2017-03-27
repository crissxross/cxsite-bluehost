"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CollapseToggleDirective = (function () {
    function CollapseToggleDirective() {
        this.isCollapsed = true;
        this.collapsedOutput = new core_1.EventEmitter();
    }
    Object.defineProperty(CollapseToggleDirective.prototype, "collapsed", {
        get: function () {
            return this.isCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    CollapseToggleDirective.prototype.onClick = function () {
        this.isCollapsed = !this.isCollapsed;
        this.collapsedOutput.emit(this.isCollapsed);
    };
    __decorate([
        core_1.Input()
    ], CollapseToggleDirective.prototype, "isCollapsed");
    __decorate([
        core_1.Output()
    ], CollapseToggleDirective.prototype, "collapsedOutput");
    __decorate([
        core_1.HostListener('click')
    ], CollapseToggleDirective.prototype, "onClick");
    CollapseToggleDirective = __decorate([
        core_1.Directive({
            selector: '[collapseToggle]',
            exportAs: 'collapsible'
        })
    ], CollapseToggleDirective);
    return CollapseToggleDirective;
}());
exports.CollapseToggleDirective = CollapseToggleDirective;
//# sourceMappingURL=collapse-toggle.directive.js.map