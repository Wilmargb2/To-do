import { UpdateCardsConts } from "../../../../shared/Re_Renders/UpdateCardsConts.js";
import { Re_Render_Cards } from "../../../../shared/Re_Renders/Re_Render_Cards.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

document.addEventListener("change", (event) => {
    const checkbox = event.target.closest(".app__taskCheckbox");
    if (!checkbox) return;

    const taskId = checkbox.dataset.taskId;
    if (!taskId) return;

    const data = JSON.parse(localStorage.getItem("data")) || [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == taskId) {
            data[i].state = checkbox.checked ? "Completada" : "Pendiente";
            break;
        }
    }

    localStorage.setItem("data", JSON.stringify(data));
    UpdateCardsConts();
    Re_Render_Cards();
    Re_Render_Map_Tasks();
});
