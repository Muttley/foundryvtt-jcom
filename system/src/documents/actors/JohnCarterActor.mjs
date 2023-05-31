/**
 * Extend the basic ActorSheet with some shared behaviors
 */
export default class JohnCarterActor extends Actor {

	prepareDerivedData() {
		switch (this.type) {
			case "adventurer": return this._prepareAdventurerDerivedData();
		}
	}

	async _prepareAdventurerDerivedData() {
		console.log(this.type);
	}
}
