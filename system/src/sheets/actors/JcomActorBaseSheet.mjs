import { SYSTEM_ID } from "../../constants.mjs";

export default class JcomActorBaseSheet extends ActorSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: [SYSTEM_ID, "sheet"],
			closeOnSubmit: true,
			height: 480,
			resizable: true,
			submitOnChange: false,
			submitOnClose: true,
			width: 520,
		});
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}
}
