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
	/**@FranzWarm : The commented out stuff below doesn't seem to be necessary at the moment.*/
	// static get defaultOptions() {
	// 	return mergeObject(super.defaultOptions, {
	// 		classes: ["alienrpg", "sheet", "actor", "character-sheet"],
	// 		width: 740,
	// 		height: 741,
	// 		tabs: [
	// 			{
	// 				navSelector: ".sheet-tabs",
	// 				contentSelector: ".sheet-body",
	// 				initial: "general",
	// 			},
	// 		],
	// 	});
	// }
	// getData() {
	// 	const data = super.getData()
	// 	return data
	// }
	// activateListeners(html) {
	// 	super.activateListeners(html);
	// }
	// async _renderInner(...args) {
	// 	const html = await super._renderInner(...args);
	// 	return html
	// }
}
export default aliencrtActorSheet;
