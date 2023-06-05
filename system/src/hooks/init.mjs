import {SYSTEM, SYSTEM_ID, SYSTEM_NAME} from "../constants.mjs";

import JohnCarterActor from "../documents/actors/JohnCarterActor.mjs";
import JohnCarterAdventurerDataModel from "../datamodels/actors/JohnCarterAdventurerDataModel.mjs";
import JohnCarterEnemyDataModel from "../datamodels/actors/JohnCarterEnemyDataModel.mjs";
import JohnCarterEnemySheet from "../sheets/actors/JohnCarterEnemySheet.mjs";
import JohnCarterAdventurerSheet from "../sheets/actors/JohnCarterAdventurerSheet.mjs";

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
		adventurer: JohnCarterAdventurerDataModel,
		enemy: JohnCarterEnemyDataModel,
	};

	CONFIG.Item.dataModels = {};
}

function registerDocumentClasses() {
	CONFIG.Actor.documentClass = JohnCarterActor;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet(
		SYSTEM_ID,
		JohnCarterAdventurerSheet,
		{
			types: ["adventurer"],
			makeDefault: true,
		}
	);

	Actors.registerSheet(
		SYSTEM_ID,
		JohnCarterEnemySheet,
		{
			types: ["enemy"],
			makeDefault: true,
		}
	);
}
