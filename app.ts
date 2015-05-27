/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />
import { Component, View, bootstrap } from 'angular2/angular2';
import { bind } from 'angular2/di';
import { routerInjectables, Router, RouterOutlet, RouterLink } from 'angular2/router';
import { Home } from 'components/home/home';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: "<h1>Hello {{ name }}</h1><router-outlet></router-outlet>",
  directives: [RouterOutlet, RouterLink]
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor(router:Router) {
    this.name = 'Alice';
    router.subscribe((url) => console.log('Navigated'));
    router.config( { 'path': '/home', 'component': Home  } )
    .then((_) => console.log("Home Registered"), err => console.log(err));
          //.then(() => router.navigate('/home'), err => console.log(err));
  }
}

bootstrap(MyAppComponent, routerInjectables);