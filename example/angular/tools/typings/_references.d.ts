
declare module example {
	interface IExampleService {
		greet(name: string): string;
	}
}

declare module "angular" {
   export function module(name: string, deps: Array<string>);
}

declare var __moduleName;
