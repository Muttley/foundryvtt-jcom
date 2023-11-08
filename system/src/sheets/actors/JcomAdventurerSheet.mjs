import JcomActorBaseSheet from "./JcomActorBaseSheet.mjs";

export default class JcomAventurerSheet extends JcomActorBaseSheet {

	/** @override */
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			width: 720,
			height: 780,
		});
	}

	/** @override */
	async getData() {
		const context = await super.getData();
		return context;
	}

}
