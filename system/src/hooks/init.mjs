import {SYSTEM, SYSTEM_ID, SYSTEM_NAME} from "../constants.mjs";

import JcomActor from "../documents/actors/JcomActor.mjs";
import JcomAdventurerDataModel from "../datamodels/actors/JcomAdventurerDataModel.mjs";
import JcomAdventurerSheet from "../sheets/actors/JcomAdventurerSheet.mjs";
import JcomEnemyDataModel from "../datamodels/actors/JcomEnemyDataModel.mjs";
import JcomEnemySheet from "../sheets/actors/JcomEnemySheet.mjs";
import JcomItem from "../documents/items/JcomItem.mjs";
import JcomTalentDataModel from "../datamodels/items/JcomTalentDataModel.mjs";
import JcomTalentSheet from "../sheets/items/JcomTalentSheet.mjs";

import registerSystemSettings from "../settings.mjs";

export function init() {
	console.log(`${SYSTEM_NAME} | Initializing System`);

	CONFIG.SYSTEM = SYSTEM;

	registerDataModels();
	registerDocumentSheets();
	registerDocumentClasses();
	registerSystemSettings();
}

function registerDataModels() {
	CONFIG.Actor.dataModels = {
		adventurer: JcomAdventurerDataModel,
		enemy: JcomEnemyDataModel,
	};

	CONFIG.Item.dataModels = {
		talent: JcomTalentDataModel,
	};
}

function registerDocumentClasses() {
	CONFIG.Actor.documentClass = JcomActor;
	CONFIG.Item.documentClass = JcomItem;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet(SYSTEM_ID, JcomAdventurerSheet, {types: ["adventurer"], makeDefault: true});
	Actors.registerSheet(SYSTEM_ID, JcomEnemySheet, {types: ["enemy"], makeDefault: true});

	Items.registerSheet(SYSTEM_ID, JcomTalentSheet, {types: ["talent"], makeDefault: true});
}
