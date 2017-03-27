"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ListWorksComponent = (function () {
    function ListWorksComponent() {
    }
    __decorate([
        core_1.Input()
    ], ListWorksComponent.prototype, "listWorks");
    ListWorksComponent = __decorate([
        core_1.Component({
            selector: 'app-list-works',
            templateUrl: './list-works.component.html',
            styleUrls: ['../showcase.component.css', './list-works.component.css'],
            animations: [
                core_1.trigger('panelState', [
                    core_1.state('open', core_1.style({ opacity: 1, height: '*' })),
                    core_1.transition('void => *', [
                        core_1.style({ opacity: 0, height: '0' }),
                        core_1.animate('200ms ease-in-out')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('200ms ease-in-out', core_1.style({ opacity: 0, height: 0 }))
                    ])
                ])
            ]
        })
    ], ListWorksComponent);
    return ListWorksComponent;
}());
exports.ListWorksComponent = ListWorksComponent;
//# sourceMappingURL=list-works.component.js.map