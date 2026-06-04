export const ShowCTModal = (element) => {
    element.style.display = "flex";
}

document.addEventListener("click", (event) => {
    if (event.target.id == "OpenCreateToDo") {
        const modal =
            document.getElementById("Create_ToDoId");
        ShowCTModal(modal);
    }
});
