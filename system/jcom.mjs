import {init} from "./src/hooks/init.mjs";
import {setup} from "./src/hooks/setup.mjs";

Hooks.once("init", init);
Hooks.once("setup", setup);
