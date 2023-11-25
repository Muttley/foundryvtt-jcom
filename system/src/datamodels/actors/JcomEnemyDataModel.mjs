import JcomAttributesDataModel from "../partials/JcomAttributesDataModel.mjs";

export default class JcomEnemyDataModel extends foundry.abstract.DataModel {

	/** @inheritDoc */
	static _enableV10Validation = false;

	/** @inheritDoc */
	static defineSchema() {
		const fields = foundry.data.fields;

		return {
			attributes: new fields.SchemaField(
				JcomAttributesDataModel.defineSchema()
			),
		};
	}
}
