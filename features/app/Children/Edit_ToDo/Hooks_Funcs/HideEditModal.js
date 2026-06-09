export const HideEditModal = (element) => {
    element.style.display = "none";
}

document.addEventListener("click", (event) => {
    if (event.target.id == "Edit_ToDoId") {
        const modal = document.getElementById("Edit_ToDoId");
        HideEditModal(modal);
    }

    if (event.target.id == "CloseEditToDo__button") {
        const modal = document.getElementById("Edit_ToDoId");
        HideEditModal(modal);
    }
});
