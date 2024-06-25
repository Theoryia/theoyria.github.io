import { queryTitleSize } from "./mainPage.mjs";

export function contactListeners() {
  window.addEventListener("resize", queryTitleSize);
}
