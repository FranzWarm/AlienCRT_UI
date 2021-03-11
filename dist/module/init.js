import { aliencrtActorSheet } from "./sheet/character-sheet.js";

Hooks.once("init", () => {
    Actors.registerSheet("alienrpg", aliencrtActorSheet, { types: ["character"], makeDefault: true }); //makeDefault: true is what makes this alternate sheet the default sheet when creating an "actor".
});