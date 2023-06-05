import { SYSTEM_ID } from "../../constants.mjs";

import JohnCarterActorBaseSheet from "./JohnCarterActorBaseSheet.mjs";

export default class JohnCarterEnemySheet extends JohnCarterActorBaseSheet {

	/** @override */
	get template() {
		return `systems/${SYSTEM_ID}/templates/actors/enemy.hbs`;
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}

}
