// Minimal stand-in for the one Workers runtime module this project uses, so
// editors do not flag the import. Installing @cloudflare/workers-types for a
// single class would be more machinery than the Worker itself.
declare module 'cloudflare:email' {
	export class EmailMessage {
		constructor(from: string, to: string, raw: string);
		readonly from: string;
		readonly to: string;
	}
}
