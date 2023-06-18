import { SYSTEM_ID } from "../../constants.mjs";

import JcomActorBaseSheet from "./JcomActorBaseSheet.mjs";

export default class JcomEnemySheet extends JcomActorBaseSheet {

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
