import {SYSTEM, SYSTEM_ID, SYSTEM_NAME} from "../constants.mjs";

import JcomActor from "../documents/JcomActor.mjs";
import JcomItem from "../documents/JcomItem.mjs";

import * as jcomDataModels from "../datamodels/_module.mjs";
import * as jcomSheets from "../sheets/_module.mjs";

import Logger from "../utils/Logger.mjs";

import registerSystemSettings from "../settings.mjs";

export function init() {
	console.log(`${SYSTEM_NAME} | Initializing System`);

	CONFIG.SYSTEM = SYSTEM;

	globalThis.SYSTEM_ID = SYSTEM_ID;
	globalThis.SYSTEM_NAME = SYSTEM_NAME;

	globalThis.jcom = {
		config: SYSTEM,
		logger: Logger,
	};

	registerDataModels();
	registerDocumentSheets();
	registerDocumentClasses();
	registerSystemSettings();
}

function registerDataModels() {
	CONFIG.Actor.dataModels = {
		adventurer: jcomDataModels.JcomAdventurerDataModel,
		enemy: jcomDataModels.JcomEnemyDataModel,
	};

	CONFIG.Item.dataModels = {
		talent: jcomDataModels.JcomTalentDataModel,
		race: jcomDataModels.JcomRaceDataModel,
	};
}

function registerDocumentClasses() {
	CONFIG.Actor.documentClass = JcomActor;
	CONFIG.Item.documentClass = JcomItem;
}

function registerDocumentSheets() {
	Actors.unregisterSheet("core", ActorSheet);
	Items.unregisterSheet("core", ItemSheet);

	Actors.registerSheet(
		SYSTEM_ID,
		jcomSheets.JcomAdventurerSheet,
		{
			makeDefault: true,
			types: ["adventurer"],
		}
	);

	Actors.registerSheet(
		SYSTEM_ID,
		jcomSheets.JcomEnemySheet,
		{
			makeDefault: true,
			types: ["enemy"],
		}
	);


	Items.registerSheet(
		SYSTEM_ID,
		jcomSheets.JcomRaceSheet,
		{
			makeDefault: true,
			types: ["race"],
		}
	);

	Items.registerSheet(
		SYSTEM_ID,
		jcomSheets.JcomTalentSheet,
		{
			makeDefault: true,
			types: ["talent"],
		}
	);
}
