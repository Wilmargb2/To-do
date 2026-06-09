import { UpdateCardsConts } from "../../../../shared/Re_Renders/UpdateCardsConts.js";
import { Re_Render_Cards } from "../../../../shared/Re_Renders/Re_Render_Cards.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

document.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".app__taskAction--delete");
    if (!deleteBtn) return;

    const taskId = deleteBtn.dataset.taskId;
    if (!taskId) return;

    const data = JSON.parse(localStorage.getItem("data")) || [];
    const filtered = data.filter(item => item.id != taskId);

    localStorage.setItem("data", JSON.stringify(filtered));
    UpdateCardsConts();
    Re_Render_Cards();
    Re_Render_Map_Tasks();
});
