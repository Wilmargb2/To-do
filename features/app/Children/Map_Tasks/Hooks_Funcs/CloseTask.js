import { UpdateCardsConts } from "../../../../shared/Re_Renders/UpdateCardsConts.js";
import { Re_Render_Cards } from "../../../../shared/Re_Renders/Re_Render_Cards.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

document.addEventListener("click", (event) => {
    const closeBtn = event.target.closest(".app__taskAction--close");
    if (!closeBtn) return;

    const taskId = closeBtn.dataset.taskId;
    if (!taskId) return;

    const data = JSON.parse(localStorage.getItem("data")) || [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == taskId) {
            data[i].state = "Cerrada";
            break;
        }
    }

    localStorage.setItem("data", JSON.stringify(data));
    UpdateCardsConts();
    Re_Render_Cards();
    Re_Render_Map_Tasks();
});
