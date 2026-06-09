import { GetData } from "./Hooks_Funcs/GetData.js";
import { ChevronUp } from "../../../shared/Icons/ChevronUp.js";
import { XClose } from "../../../shared/Icons/XClose.js";
import { Trash } from "../../../shared/Icons/Trash.js";
import { ListToDo } from "../../../shared/Icons/ListToDo.js";
import { Calendar } from "../../../shared/Icons/Calendar.js";
import { Clock } from "../../../shared/Icons/Clock.js";
import "./Hooks_Funcs/ExpandToggle.js";
import "./Hooks_Funcs/CompleteTask.js";
import "./Hooks_Funcs/DeleteTask.js";
import "./Hooks_Funcs/CloseTask.js";

export function Map_Tasks() {
    const Data = GetData();

    return `
        <div class="app__mapTasksContainer">
            ${Data.map((item) => `
                <div class="app__taskCard" data-task-id="${item.id}">

                    <div class="app__taskLeft">
                        <input
                            type="checkbox"
                            class="app__taskCheckbox"
                            data-task-id="${item.id}"
                            ${item.state === "Completada" ? "checked" : ""}
                            ${item.state === "Cerrada" || item.state === "Vencida" ? "disabled" : ""}
                        />
                    </div>

                    <div class="app__taskContent">

                        <div class="app__taskHeader">

                            <div class="app__taskTitleSection">
                                <h3>${ListToDo({ size: 20 })} ${item.title}</h3>

                                <span class="app__taskBadge app__taskBadge--${item.state.toLowerCase()}">
                                    ${item.state}
                                </span>

                                <span class="app__taskPriority app__taskPriority--${item.priority.toLowerCase()}">
                                    ${item.priority}
                                </span>
                            </div>

                            <div class="app__taskActions">
                                ${item.state !== "Cerrada" ? `
                                    <button class="app__taskAction app__taskAction--close" data-task-id="${item.id}" title="Cerrar tarea">
                                        ${XClose({ size: 18 })}
                                    </button>
                                ` : ""}
                                <button class="app__taskAction app__taskAction--delete" data-task-id="${item.id}" title="Eliminar tarea">
                                    ${Trash({ size: 18 })}
                                </button>
                                <button class="app__taskExpand">
                                    ${ChevronUp({ size: 20 })}
                                </button>
                            </div>

                        </div>

                        <div class="app__taskMeta">
                            <span>${Calendar({ size: 16 })} Hoy</span>
                            <span>${Clock({ size: 16 })} 30 min</span>
                        </div>

                        <p class="app__taskDescription">
                            Desc: ${item.description}
                        </p>

                    </div>

                </div>
            `).join("")}
        </div>
    `;
}
