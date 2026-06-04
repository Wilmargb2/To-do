export const HideCTModal = (element) => {
    element.style.display = "none";
}

document.addEventListener("click", (event) => {

    //--> Al clickearse a si mismo se cierra el modal.
    if (event.target.id == "Create_ToDoId") {
        const modal =
            document.getElementById("Create_ToDoId");
        HideCTModal(modal);
    }

    //--> Boton de cancelar del mismo modal.
    if (event.target.id == "CloseCreateToDo__button") {
        const modal =
            document.getElementById("Create_ToDoId");
        HideCTModal(modal);
    }
});
