import { aliencrtActorSheet } from "../module/sheet/character-sheet.js";
import { aliencrtSynthActorSheet } from "../module/sheet/synth-sheet.js";

    Actors.registerSheet("alienrpg", aliencrtActorSheet, { types: ["character"], makeDefault: true }); //makeDefault: true is what makes this alternate sheet the default sheet when creating an "actor".
	Actors.registerSheet("alienrpg", aliencrtSynthActorSheet, { types: ["synthetic"], makeDefault: true });
