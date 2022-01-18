Hooks.once("ready", () => {
	const Character = CONFIG.Actor?.sheetClasses.character?.["alienrpg.alienrpgActorSheet"]?.cls;
	const Synth = CONFIG.Actor?.sheetClasses.synthetic?.["alienrpg.alienrpgSynthActorSheet"]?.cls;

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
});
