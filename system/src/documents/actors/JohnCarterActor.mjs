import Logger from "../../utils/Logger.mjs";

/**
 * Extend the basic ActorSheet with some shared behaviors
 */
export default class JohnCarterActor extends Actor {

	prepareDerivedData() {
		switch (this.type) {
			case "adventurer": return this._prepareAdventurerDerivedData();
			case "enemy": return this._prepareEnemyDerivedData();
		}
	}

	async _prepareAdventurerDerivedData() {
		Logger.debug(`Preparing derived data for ${this.type}`);
	}

	async _prepareEnemyDerivedData() {
		Logger.debug(`Preparing derived data for ${this.type}`);
	}

	maxSavedMomentum() {
		return Math.min(...Object.values(this.system.attributes));
	}

	momentumAvailable() {
		return this.system.stored + this.system.generated;
	}

}
