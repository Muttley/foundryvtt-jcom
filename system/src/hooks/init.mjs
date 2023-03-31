import {SYSTEM, SYSTEM_ID, SYSTEM_NAME} from "../constants.mjs";

export function init() {
	console.log(`${SYSTEM_NAME} | Initializing  System`);

	CONFIG.SYSTEM = SYSTEM;
}
