import { queryTitleSize } from "./mainPage.mjs";

const mel = {};

export function mainHandles() {
  mel.submitButton = document.querySelector("#submitButton");
  mel.worklink = document.querySelector("#work");
  mel.contactlink = document.querySelector(".contactlink");
  mel.worklink = document.querySelector("#work");
}

export function mainListeners() {
  window.addEventListener("resize", queryTitleSize);
}