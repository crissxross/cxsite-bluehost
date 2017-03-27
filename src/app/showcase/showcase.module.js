"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var showcase_component_1 = require('./showcase.component');
var featured_works_component_1 = require('./featured-works/featured-works.component');
var list_works_component_1 = require('./list-works/list-works.component');
var collapse_toggle_directive_1 = require('../shared/collapse-toggle.directive');
var ShowcaseModule = (function () {
    function ShowcaseModule() {
    }
    ShowcaseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MaterialModule
            ],
            declarations: [
                showcase_component_1.ShowcaseComponent,
                featured_works_component_1.FeaturedWorksComponent,
                list_works_component_1.ListWorksComponent,
                collapse_toggle_directive_1.CollapseToggleDirective
            ],
            exports: [showcase_component_1.ShowcaseComponent]
        })
    ], ShowcaseModule);
    return ShowcaseModule;
}());
exports.ShowcaseModule = ShowcaseModule;
//# sourceMappingURL=showcase.module.js.map