/// <reference path="../es6-promise/es6-promise.d.ts" />

interface _OnNextFunc {
  (url:string);
}

interface _ConfigArgs {
	path: string;
	component?: any;
	redirectTo?: string;
	alias?: string;
}

declare module "angular2/router" {
	class Pipeline {
		
	}
	
	class Router {
		config(config: _ConfigArgs): Promise<Boolean>
		config(config: _ConfigArgs[]): Promise<Boolean>
		navigate(url:string): Promise<Boolean>
		subscribe(onNext:_OnNextFunc)
	}
	
	class RootRouter extends Router {
		constructor(pipeline:Pipeline);
	}
	
	function RouterOutlet(): void;
	function RouterLink(): void;
	
	function RouteConfig(config: _ConfigArgs): (target: any) => any;
	function RouteConfig(config: _ConfigArgs[]): (target: any) => any;

	var routerInjectables:any[];
}