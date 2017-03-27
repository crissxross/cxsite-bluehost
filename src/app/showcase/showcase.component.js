"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var featured_data_1 = require('./featured-works/featured-data');
var list_data_1 = require('./list-works/list-data');
var ShowcaseComponent = (function () {
    function ShowcaseComponent(_router) {
        this._router = _router;
        this.featuredWorks = featured_data_1.FEATUREDWORKS;
        this.listWorks = list_data_1.LISTWORKS;
    }
    ShowcaseComponent = __decorate([
        core_1.Component({
            selector: 'app-showcase',
            template: "\n  <app-featured-works [featuredWorks]=\"featuredWorks\"></app-featured-works>\n  <app-list-works [listWorks]=\"listWorks\"></app-list-works>\n  ",
            styleUrls: ['./showcase.component.css']
        })
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());
exports.ShowcaseComponent = ShowcaseComponent;
//# sourceMappingURL=showcase.component.js.map