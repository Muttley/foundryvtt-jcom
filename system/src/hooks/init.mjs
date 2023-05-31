import {SYSTEM, SYSTEM_ID, SYSTEM_NAME} from "../constants.mjs";

// Documents
import JohnCarterActor from "../documents/actors/JohnCarterActor.mjs";

// Data Models
import JohnCarterAdventurerDataModel from "../datamodels/actors/JohnCarterAdventurerDataModel.mjs";

// Sheets
import JohnCarterAventurerSheet from "../sheets/actors/JohnCarterAventurerSheet.mjs";

export function init() {
	console.log(`${SYSTEM_NAME} | Initializing System`);

	CONFIG.SYSTEM = SYSTEM;

	registerDataModels();
	registerDocumentSheets();
	registerDocumentClasses();
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
