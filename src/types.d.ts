interface Module {
	name: string;
	address: string;
	source?: string;
	metadata?: any;
}

interface SystemJS {
	normalize(dep: string, parent: string): Promise<string>;
	fetch(load: Module): Promise<string>;

	typescriptOptions?: any;
}

declare var System: SystemJS;
declare var __moduleName: string;

interface ResolveFunction {
	(dep: string, parent?: string): Promise<string>;
}

interface FetchFunction {
	(address: string): Promise<string>;
}

interface TypeScriptOptions {
	tsconfig?: boolean | string;
	typeCheck?: boolean | string;
	resolveAmbientRefs?: boolean;
}