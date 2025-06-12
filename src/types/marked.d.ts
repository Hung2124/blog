declare module 'marked' {
	export interface MarkedOptions {
		gfm?: boolean;
		breaks?: boolean;
		sanitize?: boolean;
		[key: string]: unknown;
	}

	export interface Token {
		type: string;
		raw: string;
		href?: string;
		title?: string;
		text?: string;
		tokens?: Token[];
		items?: Token[];
		ordered?: boolean;
		start?: number;
		loose?: boolean;
		task?: boolean;
		checked?: boolean;
		lang?: string;
		escaped?: boolean;
		[key: string]: unknown;
	}

	export class Renderer {
		constructor();
		link(token: Token): string;
		image(token: Token): string;
		table(token: Token): string;
		blockquote(token: Token): string;
		code(token: Token): string;
		listitem(token: Token): string;
		[key: string]: unknown;
	}

	interface MarkedInstance {
		(src: string, options?: MarkedOptions): string | Promise<string>;
		setOptions(options: MarkedOptions): void;
		use(options: { renderer?: Renderer }): void;
		Renderer: typeof Renderer;
	}

	export const marked: MarkedInstance;
}
