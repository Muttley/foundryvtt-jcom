import {SYSTEM_ID} from "./src/constants.mjs";
import {init} from "./src/hooks/init.mjs";

Hooks.once("init", init);
