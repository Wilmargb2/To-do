//--> Funcion para ocultar el modal
import { HideCTModal } from "./HideCTModal.js";
import { UpdateCardsConts } from "../../../../shared/Re_Renders/UpdateCardsConts.js";
import { Re_Render_Cards } from "../../../../shared/Re_Renders/Re_Render_Cards.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

let title = "";
let description = "";
let priority = "Media";
let state = "Pendiente";

document.addEventListener("input", (event) => {
    if (event.target.id == "title_createToDo") {
        title = event.target.value;
    }

    if (event.target.id == "description_createToDo") {
        description = event.target.value;
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

        const id = Date.now() + "-" + Math.random().toString(36).substring(2, 9);

        //--> Obtenemos data previa si existia.
        const prevData = localStorage.getItem("data");
        if (prevData && prevData.length > 0) {
            const NewData = [
                ...JSON.parse(prevData),
                {
                    id: id,
                    title: title,
                    description: description,
                    priority: priority,
                    state: state
                }
            ];
            localStorage.setItem("data", JSON.stringify(NewData));

            //-->Funciones que re renderiza el componente para tener los valores actualizados
            UpdateCardsConts();
            Re_Render_Cards();
            Re_Render_Map_Tasks();

            //--> Ocultamos el modal
            const modal = document.getElementById("Create_ToDoId");
            HideCTModal(modal);
            return;
        }

        //--> Creamos el data
        const data = [
            {
                id: id,
                title: title,
                description: description,
                priority: priority,
                state: state
            }
        ];

        //--> Guardamos en el localStorage
        localStorage.setItem("data", JSON.stringify(data));

        UpdateCardsConts();
        Re_Render_Cards();
        Re_Render_Map_Tasks();

        //--> Ocultamos el modal
        const modal = document.getElementById("Create_ToDoId");
        HideCTModal(modal);
    }
});