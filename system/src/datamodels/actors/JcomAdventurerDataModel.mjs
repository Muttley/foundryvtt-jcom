import JcomAttributesDataModel from "../partials/JcomAttributesDataModel.mjs";

export default class JcomAdventurerDataModel extends foundry.abstract.DataModel {

	/** @inheritDoc */
	static _enableV10Validation = false;

	/** @inheritDoc */
	static defineSchema() {
		const fields = foundry.data.fields;

		return {
			attributes: new fields.SchemaField(
				JcomAttributesDataModel.defineSchema()
			),
			biography: new fields.HTMLField(),
			momentum:  new fields.SchemaField({
				generated: new fields.NumberField({min: 0, initial: 0, integer: true}),
				stored:    new fields.NumberField({min: 0, initial: 0, integer: true}),
			}),
		};
	}
}
