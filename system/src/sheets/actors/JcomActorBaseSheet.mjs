export default class JcomActorBaseSheet extends ActorSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: [SYSTEM_ID, "sheet", "actor"],
			closeOnSubmit: true,
			resizable: true,
			submitOnChange: true,
			submitOnClose: true,
		});
	}

	/** @override */
	get template() {
		return `systems/${SYSTEM_ID}/templates/actors/${this.actor.type}.hbs`;
	}

	/** @inheritdoc */
	get title() {
		return `[${this.actor.type}] ${this.actor.name}`;
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}
}
