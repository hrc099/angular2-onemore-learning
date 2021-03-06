"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyComponent = (function () {
    function MyComponent() {
        this.title = 'Hello world!';
        this.imageLink = 'http://placehold.it/350x150';
        this.note;
    }
    MyComponent.prototype.runClick = function () {
        console.log('Click!');
    };
    MyComponent.prototype.saySomething = function (e) {
        console.log(e.target.value);
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n        <h1>{{title}}</h1>\n        <img [src]=\"imageLink\">\n        <br>\n        <button (click)=\"runClick()\">Click</button>\n        <input type=\"text\" [(ngModel)]=\"note\" (keyup.enter)=\"saySomething($event)\">\n        {{note}}\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my-component.component.js.map