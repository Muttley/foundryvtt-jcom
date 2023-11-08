import JcomBaseItemDataModel from "./JcomBaseItemDataModel.mjs";

export default class JcomRaceDataModel extends JcomBaseItemDataModel {

	/** @inheritDoc */
	static _enableV10Validation = false;

	/** @inheritDoc */
	static defineSchema() {
		// const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
		};
	}
}
