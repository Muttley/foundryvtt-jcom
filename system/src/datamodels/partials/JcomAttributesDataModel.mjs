export default class JcomAttributesDataModel extends foundry.abstract.DataModel {

	/** @inheritDoc */
	static _enableV10Validation = false;

	/** @inheritDoc */
	static defineSchema() {
		const fields = foundry.data.fields;

		return {
			cunning: new fields.NumberField({min: 4, max: 12, initial: 4, integer: true}),
			daring: new fields.NumberField({min: 4, max: 12, initial: 4, integer: true}),
			empathy: new fields.NumberField({min: 4, max: 12, initial: 4, integer: true}),
			might: new fields.NumberField({min: 4, max: 12, initial: 4, integer: true}),
			passion: new fields.NumberField({min: 4, max: 12, initial: 4, integer: true}),
			reason: new fields.NumberField({min: 4, max: 12, initial: 4, integer: true}),
		};
	}
}
