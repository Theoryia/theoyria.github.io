import { contactHandles, contactListeners } from "./contactPrepareListeners.mjs"
import { onLoadWindowSize } from "./mainPage.mjs"


export function contactInit(){
    
    contactHandles()
    contactListeners()
    onLoadWindowSize()
    console.log(`contact`);
    contactHandles()
    contactListeners()
}

window.addEventListener('load', contactInit())