import { GetData } from "../../Map_Tasks/Hooks_Funcs/GetData.js";

export let editingTaskId = null;

document.addEventListener("click", (event) => {
    const editBtn = event.target.closest(".app__taskAction--edit");
    if (!editBtn) return;

    const taskId = editBtn.dataset.taskId;
    if (!taskId) return;

    editingTaskId = taskId;

    const data = GetData();
    const task = data.find(item => item.id == taskId);
    if (!task) return;

    const titleInput = document.getElementById("title_editToDo");
    const descInput = document.getElementById("description_editToDo");
    const dateInput = document.getElementById("dueDate_editToDo");
    const timeInput = document.getElementById("dueTime_editToDo");

    if (titleInput) titleInput.value = task.title || "";
    if (descInput) descInput.value = task.description || "";
    if (dateInput) dateInput.value = task.dueDate || "";
    if (timeInput) timeInput.value = task.dueTime || "";

    document.querySelectorAll("#Edit_ToDoId .app__editToDoPriorityActive")
        .forEach(btn => btn.classList.remove("app__editToDoPriorityActive"));

    const priorityMap = {
        Baja: "app__editToDoPriorityLow",
        Media: "app__editToDoPriorityMedium",
        Alta: "app__editToDoPriorityHigh"
    };

    const priorityId = priorityMap[task.priority];
    if (priorityId) {
        const btn = document.getElementById(priorityId);
        if (btn) btn.classList.add("app__editToDoPriorityActive");
    }

    const modal = document.getElementById("Edit_ToDoId");
    if (modal) modal.style.display = "flex";
});
