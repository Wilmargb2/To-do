import { Cards } from "../../app/Children/Cards/Cards.js";
export function Re_Render_Cards() {
    document.getElementById("re_render_cards_appID").innerHTML = Cards();
}