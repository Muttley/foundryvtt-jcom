/**
 * Extend the basic ActorSheet with some shared behaviors
 */
export default class JcomActor extends Actor {

	async _prepareAdventurerDerivedData() {
		jcom.logger.debug(`Preparing derived data for ${this.type}`);
	}


	async _prepareEnemyDerivedData() {
		jcom.logger.debug(`Preparing derived data for ${this.type}`);
	}


	maxSavedMomentum() {
		return Math.min(...Object.values(this.system.attributes));
	}


	momentumAvailable() {
		return this.system.stored + this.system.generated;
	}


	prepareDerivedData() {
		switch (this.type) {
			case "adventurer": return this._prepareAdventurerDerivedData();
			case "enemy": return this._prepareEnemyDerivedData();
		}
	}

}
