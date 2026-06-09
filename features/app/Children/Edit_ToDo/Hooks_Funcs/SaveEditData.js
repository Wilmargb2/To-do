import { HideEditModal } from "./HideEditModal.js";
import { editingTaskId } from "./ShowEditModal.js";
import { UpdateCardsConts } from "../../../../shared/Re_Renders/UpdateCardsConts.js";
import { Re_Render_Cards } from "../../../../shared/Re_Renders/Re_Render_Cards.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

const priorities = {
    app__editToDoPriorityLow: "Baja",
    app__editToDoPriorityMedium: "Media",
    app__editToDoPriorityHigh: "Alta"
};

document.addEventListener("click", (event) => {
    if (priorities[event.target.id]) {
        const priority = priorities[event.target.id];
        document.querySelectorAll("#Edit_ToDoId .app__editToDoPriorityActive")
            .forEach(btn => btn.classList.remove("app__editToDoPriorityActive"));
        event.target.classList.add("app__editToDoPriorityActive");
    }

    if (event.target.id == "SaveEditToDo__button") {
        if (!editingTaskId) return;

        const titleInput = document.getElementById("title_editToDo");
        const title = titleInput ? titleInput.value.trim() : "";

        if (!title) {
            if (titleInput) {
                titleInput.classList.add("app__editToDoTitle--error");
                titleInput.focus();
            }
            return;
        }

        const description = document.getElementById("description_editToDo")?.value || "";
        const dueDate = document.getElementById("dueDate_editToDo")?.value || "";
        const dueTime = document.getElementById("dueTime_editToDo")?.value || "";

        const activePriorityBtn = document.querySelector("#Edit_ToDoId .app__editToDoPriorityActive");
        let priority = "Media";
        if (activePriorityBtn) {
            const map = {
                app__editToDoPriorityLow: "Baja",
                app__editToDoPriorityMedium: "Media",
                app__editToDoPriorityHigh: "Alta"
            };
            priority = map[activePriorityBtn.id] || "Media";
        }

        const data = JSON.parse(localStorage.getItem("data")) || [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == editingTaskId) {
                data[i].title = title;
                data[i].description = description;
                data[i].priority = priority;
                data[i].dueDate = dueDate;
                data[i].dueTime = dueTime;
                break;
            }
        }

        localStorage.setItem("data", JSON.stringify(data));

        UpdateCardsConts();
        Re_Render_Cards();
        Re_Render_Map_Tasks();

        const modal = document.getElementById("Edit_ToDoId");
        HideEditModal(modal);
    }
});

document.addEventListener("input", (event) => {
    if (event.target.id == "title_editToDo") {
        event.target.classList.remove("app__editToDoTitle--error");
    }
});
