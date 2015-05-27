if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('components/home/home');
var MyAppComponent = (function () {
    function MyAppComponent(router) {
        this.name = 'Alice';
        router.subscribe(function (url) { return console.log('Navigated'); });
        router.config({ 'path': '/home', 'component': home_1.Home })
            .then(function (_) { return console.log("Home Registered"); }, function (err) { return console.log(err); });
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "<h1>Hello {{ name }}</h1><router-outlet></router-outlet>",
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent, router_1.routerInjectables);
