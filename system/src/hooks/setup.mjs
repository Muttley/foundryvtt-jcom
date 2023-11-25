export function setup() {
	jcom.logger.log("Setup Hook");

	// Localize all the strings in the game config in advance
	//
	for (const obj in jcom.config) {
		if ({}.hasOwnProperty.call(jcom.config, obj)) {
			for (const el in jcom.config[obj]) {
				if ({}.hasOwnProperty.call(jcom.config[obj], el)) {
					if (typeof jcom.config[obj][el] === "string") {
						jcom.config[obj][el] = game.i18n.localize(
							jcom.config[obj][el]
						);
					}
				}
			}
		}
	}
}
