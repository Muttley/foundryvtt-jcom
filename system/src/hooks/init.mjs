import {SYSTEM, SYSTEM_ID, SYSTEM_NAME} from "../constants.mjs";

import JohnCarterActor from "../documents/actors/JohnCarterActor.mjs";
import JohnCarterAdventurerDataModel from "../datamodels/actors/JohnCarterAdventurerDataModel.mjs";
import JohnCarterAventurerSheet from "../sheets/actors/JohnCarterAventurerSheet.mjs";

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
	};

	CONFIG.Item.dataModels = {};
}

function registerDocumentClasses() {
	CONFIG.Actor.documentClass = JohnCarterActor;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	// Actors
	Actors.registerSheet(
		SYSTEM_ID,
		JohnCarterAventurerSheet,
		{
			types: ["adventurer"],
			makeDefault: true,
		}
	);
}
