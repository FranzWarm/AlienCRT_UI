/**
 * This template can be used as boiler plate for the other sheets.
 * This only overrides the actor sheet (somewhat weirdly named as it is the "character sheet" and not the common "actor sheet").
 * If you want to edit the other sheets like the synth / creature / vehicle / territory and so on, separate overrides needs to be done through the same method as below.
 */

import { alienrpgActorSheet } from "../../../../systems/alienrpg/module/actor/actor-sheet.js";

export class aliencrtActorSheet extends alienrpgActorSheet {
	constructor(...args) {
		super(...args);
	}

	/** @override */
	get template() {
		return "modules/alien-crt-ui/templates/actor/character-sheet.html";
	}

}
export default aliencrtActorSheet;
