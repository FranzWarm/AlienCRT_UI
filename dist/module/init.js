Hooks.once("ready", () => {
	try {
		const Character = CONFIG?.Actor?.sheetClasses?.character?.["alienrpg.alienrpgActorSheet"]?.cls;
		const Synth = CONFIG?.Actor?.sheetClasses?.synthetic?.["alienrpg.alienrpgSynthActorSheet"]?.cls;
		if (!Character || !Synth)
			throw new Error(
				"Could not locate the alienrpg.alienrpgActorSheet or alienrpg.alienrpgSynthActorSheet classes on the CONFIG object. \n There may be an issue with the order in which the module is loaded."
			);

		class aliencrtActorSheet extends Character {
			/** @override */
			get template() {
				return "modules/alien-crt-ui/templates/actor/character-sheet.html";
			}
		}
		class aliencrtSynthActorSheet extends Synth {
			/** @override */
			get template() {
				return "modules/alien-crt-ui/templates/actor/synth-sheet.html";
			}
		}

		Actors.registerSheet("alienrpg", aliencrtActorSheet, { types: ["character"], makeDefault: true }); //makeDefault: true is what makes this alternate sheet the default sheet when creating an "actor".
		Actors.registerSheet("alienrpg", aliencrtSynthActorSheet, { types: ["synthetic"], makeDefault: true });
	} catch (error) {
		ui.notifications.error(
			"Error: Failed to initialize the Alien CRT UI. See the DevTools Console for details."
		);
		console.error("Failed to initialize Alien CRT UI: " + error);
	}
});
