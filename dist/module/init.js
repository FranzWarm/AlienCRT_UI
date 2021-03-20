import { aliencrtActorSheet } from "./sheet/character-sheet.js";
import { aliencrtSynthActorSheet } from "./sheet/synth-sheet.js";

//Hooks.once("init", () => {
    Actors.registerSheet("alienrpg", aliencrtActorSheet, { types: ["character"], makeDefault: true }); //makeDefault: true is what makes this alternate sheet the default sheet when creating an "actor".
	Actors.registerSheet("alienrpg", aliencrtSynthActorSheet, { types: ["synthetic"], makeDefault: true });
//});