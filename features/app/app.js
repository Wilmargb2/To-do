import { Cards } from "./Children/Cards/Cards.js";
import { Filters } from "./Children/Filters/Filters.js";
import { Create_ToDo } from "./Children/Create_ToDo/Create_ToDo.js";
import { Map_Tasks } from "./Children/Map_Tasks/Map_Tasks.js";

//--> Functions and Hooks
import "./Hooks_Funcs/ShowCTModal.js";

export function App() {
    return `
        <div class="app__container">
            <!-- Create_ToDo -->
            ${Create_ToDo()}

            <!-- Cards -->
            <div id="re_render_cards_appID">
                ${Cards()}
            </div>

            <!-- Filters -->
            ${Filters()}

            <div class="app__addNoteContainer"> 
                <button id="OpenCreateToDo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Agregar
                </button>
            </div>

            <div id="re_render_mapTasks_appID">
                ${Map_Tasks()}
            </div>

        </div>
    `;
}

