import { SYSTEM_ID } from "../../constants.mjs";

import JohnCarterActorSheet from "./JohnCarterActorSheet.mjs";

export default class JohnCarterAventurerSheet extends JohnCarterActorSheet {

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
