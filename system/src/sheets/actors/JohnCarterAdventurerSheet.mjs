import { SYSTEM_ID } from "../../constants.mjs";

import JohnCarterActorBaseSheet from "./JohnCarterActorBaseSheet.mjs";

export default class JohnCarterAventurerSheet extends JohnCarterActorBaseSheet {

	/** @override */
	get template() {
		return `systems/${SYSTEM_ID}/templates/actors/adventurer.hbs`;
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}

}
