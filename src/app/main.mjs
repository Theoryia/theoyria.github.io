import { mainHandles } from "./mainPrepareListeners.mjs";
import { mainListeners } from "./mainPrepareListeners.mjs";
import { onLoadWindowSize } from "./mainPage.mjs";




export function init() {
  console.log(`home`);
  mainHandles()
  console.log(`handles`);
  mainListeners()
  console.log(`listeners`);
  // mainPageRequisits();
  onLoadWindowSize();
  console.log(`onWinodw`);
}

window.addEventListener("load", init());

