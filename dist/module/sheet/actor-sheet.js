/**
 * This template can be used as boiler plate for the other sheets.
 * This only overrides the actor sheet (somewhat weirdly named as it is the "character sheet" and not the common "actor sheet").
 * If you want to edit the other sheets like the synth / creature / vehicle / territory and so on, separate overrides needs to be done through the same method as below.
 */

import { alienrpgActorSheet } from "/systems/alienrpg/module/actor/actor-sheet.js";

export class aliencrtActorSheet extends alienrpgActorSheet {
  constructor(...args) {
    super(...args);
  }
  
  get template() {
    const path = 'modules/alien-crt-ui/templates/actor/';
    return `${path}actor-sheet.html`;
  }

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['alienrpg', 'sheet', 'actor', 'actor-sheet'],
      /** template: 'modules/alien-crt-ui/templates/actor/actor-sheet.html', */
      width: 740,
      height: 741,
      tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'general' }],
    });
  }
}
export default aliencrtActorSheet;
