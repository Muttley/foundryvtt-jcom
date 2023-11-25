export default class JcomItemBaseSheet extends ItemSheet {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: [SYSTEM_ID, "sheet", "item"],
			closeOnSubmit: true,
			height: 480,
			resizable: true,
			submitOnChange: false,
			submitOnClose: true,
			width: 520,
		});
	}

	/** @override */
	get template() {
		return `systems/${SYSTEM_ID}/templates/items/${this.item.type}.hbs`;
	}

	/** @inheritdoc */
	get title() {
		return `[${this.item.type}] ${this.item.name}`;
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}
}
