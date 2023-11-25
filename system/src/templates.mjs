export default function() {
	const partials = [
		"systems/jcom/templates/actors/adventurer/abilities.hbs",
	];

	const paths = {};
	for (const path of partials) {
		const [key] = path.split("/").slice(3).join("/").split(".");

		jcom.logger.debug(`Registering template "${key}" at path "${path}"`);

		paths[key] = path;
	}

	return loadTemplates(paths);
}
