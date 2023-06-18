import { SYSTEM_ID } from "../../constants.mjs";

import JcomItemBaseSheet from "./JcomItemBaseSheet.mjs";

export default class JcomTalentSheet extends JcomItemBaseSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: [SYSTEM_ID, "sheet", "talent"],
			closeOnSubmit: true,
			height: 480,
			resizable: true,
			submitOnChange: false,
			submitOnClose: true,
			width: 520,
		});
	}

	/** @override */
	get template() {
		return `systems/${SYSTEM_ID}/templates/items/talent.hbs`;
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}

}
