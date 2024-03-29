/**
 * Register all of the system"s settings.
 */
export default function registerSystemSettings() {
	game.settings.register("jcom", "debugEnabled", {
		name: "JCOM.settings.debugEnabled.name",
		hint: "JCOM.settings.debugEnabled.hint",
		scope: "world",
		type: Boolean,
		config: true,
		default: false,
		requiresReload: true,
	});
}
