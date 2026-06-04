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
                <button id="OpenCreateToDo"> + Agregar </button>
            </div>

            <div id="re_render_mapTasks_appID">
                ${Map_Tasks()}
            </div>

        </div>
    `;
}

