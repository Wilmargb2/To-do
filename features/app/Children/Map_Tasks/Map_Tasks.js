import { GetData } from "./Hooks_Funcs/GetData.js";

export function Map_Tasks() {
    const Data = GetData();

    return `
        <div class="app__mapTasksContainer">
            ${Data.map((item) => `
                <div class="app__taskCard">

                    <div class="app__taskLeft">
                        <input
                            type="checkbox"
                            class="app__taskCheckbox"
                        />
                    </div>

                    <div class="app__taskContent">

                        <div class="app__taskHeader">

                            <div class="app__taskTitleSection">
                                <h3>${item.title}</h3>

                                <span class="app__taskPriority app__taskPriority--${item.priority.toLowerCase()}">
                                    ${item.priority}
                                </span>
                            </div>

                            <button class="app__taskExpand">
                                ⌃
                            </button>

                        </div>

                        <div class="app__taskMeta">
                            <span>📅 Hoy</span>
                            <span>⏱ 30 min</span>
                        </div>

                        <p class="app__taskDescription">
                            ${item.description}
                        </p>

                    </div>

                </div>
            `).join("")}
        </div>
    `;
}