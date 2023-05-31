export default class JohnCarterAdventurerDataModel extends foundry.abstract.DataModel {

	/** @inheritDoc */
	static _enableV10Validation = false;

	/** @inheritDoc */
	static defineSchema() {
		const fields = foundry.data.fields;

		return {
			attributes: new fields.SchemaField({
				cunning: new fields.NumberField({min: 0, max: 12, initial: 0, integer: true}),
				daring:  new fields.NumberField({min: 0, max: 12, initial: 0, integer: true}),
				empathy: new fields.NumberField({min: 0, max: 12, initial: 0, integer: true}),
				might:   new fields.NumberField({min: 0, max: 12, initial: 0, integer: true}),
				passion: new fields.NumberField({min: 0, max: 12, initial: 0, integer: true}),
				reason:  new fields.NumberField({min: 0, max: 12, initial: 0, integer: true}),
			}),
			biography: new fields.HTMLField(),
		};
	}
}
