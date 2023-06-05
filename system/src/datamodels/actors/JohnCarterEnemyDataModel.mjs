import AttributesDataModel from "../AttributesDataModel.mjs";

export default class JohnCarterEnemyDataModel extends foundry.abstract.DataModel {

	/** @inheritDoc */
	static _enableV10Validation = false;

	/** @inheritDoc */
	static defineSchema() {
		const fields = foundry.data.fields;

		return {
			attributes: new fields.SchemaField(
				AttributesDataModel.defineSchema()
			),
		};
	}
}
