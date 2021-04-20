import { alienrpgSynthActorSheet } from "../../../../systems/alienrpg/module/actor/synth-sheet.js";

export class aliencrtSynthActorSheet extends alienrpgSynthActorSheet {
	constructor(...args) {
		super(...args);
	}

	/** @override */
	get template() {
		return "modules/alien-crt-ui/templates/actor/synth-sheet.html";
	}
}
export default aliencrtSynthActorSheet;
