//--> Funcion para ocultar el modal
import { HideCTModal } from "./HideCTModal.js";
import { UpdateCardsConts } from "../../../../shared/Re_Renders/UpdateCardsConts.js";
import { Re_Render_Cards } from "../../../../shared/Re_Renders/Re_Render_Cards.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

let title = "";
let description = "";
let priority = "Media";
let dueDate = "";
let dueTime = "";

function resetForm() {
    title = "";
    description = "";
    priority = "Media";
    dueDate = "";
    dueTime = "";

    const titleInput = document.getElementById("title_createToDo");
    const descInput = document.getElementById("description_createToDo");
    const dateInput = document.getElementById("dueDate_createToDo");
    const timeInput = document.getElementById("dueTime_createToDo");

    if (titleInput) titleInput.value = "";
    if (descInput) descInput.value = "";
    if (dateInput) dateInput.value = "";
    if (timeInput) timeInput.value = "";

    document.querySelectorAll(".app__createToDoPriorityActive")
        .forEach(btn => btn.classList.remove("app__createToDoPriorityActive"));
    const mediaBtn = document.getElementById("app__createToDoPriorityMedium");
    if (mediaBtn) mediaBtn.classList.add("app__createToDoPriorityActive");
}

document.addEventListener("input", (event) => {
    if (event.target.id == "title_createToDo") {
        title = event.target.value;
        event.target.classList.remove("app__createToDoTitle--error");
    }

    if (event.target.id == "description_createToDo") {
        description = event.target.value;
    }

    if (event.target.id == "dueDate_createToDo") {
        dueDate = event.target.value;
    }

    if (event.target.id == "dueTime_createToDo") {
        dueTime = event.target.value;
    }
});

//--> Mapara de prioridades
const priorities = {
    app__createToDoPriorityLow: "Baja",
    app__createToDoPriorityMedium: "Media",
    app__createToDoPriorityHigh: "Alta"
};

document.addEventListener("click", (event) => {

    //--> Obtenemos el valor de la prioridad
    if (priorities[event.target.id]) {
        priority = priorities[event.target.id];
        document.querySelectorAll(".app__createToDoPriorityActive")
            .forEach(btn => btn.classList.remove("app__createToDoPriorityActive"));

        event.target.classList.add("app__createToDoPriorityActive");
    }

    //--> Funcion para guardar la informacion
    if (event.target.id == "SaveCreateToDo__button") {

        //--> Validar que el titulo no este vacio
        const titleInput = document.getElementById("title_createToDo");
        if (!title || title.trim() === "") {
            titleInput.classList.add("app__createToDoTitle--error");
            titleInput.focus();
            return;
        }

        const id = Date.now() + "-" + Math.random().toString(36).substring(2, 9);

        const task = {
            id: id,
            title: title.trim(),
            description: description,
            priority: priority,
            state: "Pendiente",
            dueDate: dueDate,
            dueTime: dueTime
        };

        //--> Obtenemos data previa si existia.
        const prevData = localStorage.getItem("data");
        if (prevData && prevData.length > 0) {
            const NewData = [
                ...JSON.parse(prevData),
                task
            ];
            localStorage.setItem("data", JSON.stringify(NewData));

            //-->Funciones que re renderiza el componente para tener los valores actualizados
            UpdateCardsConts();
            Re_Render_Cards();
            Re_Render_Map_Tasks();

            //--> Ocultamos el modal
            const modal = document.getElementById("Create_ToDoId");
            HideCTModal(modal);
            resetForm();
            return;
        }

        //--> Creamos el data
        const data = [task];

        //--> Guardamos en el localStorage
        localStorage.setItem("data", JSON.stringify(data));

        UpdateCardsConts();
        Re_Render_Cards();
        Re_Render_Map_Tasks();

        //--> Ocultamos el modal
        const modal = document.getElementById("Create_ToDoId");
        HideCTModal(modal);
        resetForm();
    }
});