//--> Funcion para ocultar el modal
import { HideCTModal } from "./HideCTModal.js";
import { Cards_conts } from "../../Cards/Cards_conts.js";
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

        //--> Obtenemos data previa si existia.
        const prevData = localStorage.getItem("data");
        if (prevData && prevData.length > 0) {
            const NewData = [
                ...JSON.parse(prevData),
                {
                    title: title,
                    description: description,
                    priority: priority,
                    state: state
                }
            ];
            localStorage.setItem("data", JSON.stringify(NewData));

            //-->Actualizamos la informacion de las cards
            for (let i = 0; i < Cards_conts.length; i++) {
                if (Cards_conts[i].label == "Pendientes") {
                    Cards_conts[i].value++;
                }
            }

            //-->Funciones que re renderiza el componente para tener los valores actualizados
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
                title: title,
                description: description,
                priority: priority,
                state: state
            }
        ];

        //--> Guardamos en el localStorage
        localStorage.setItem("data", JSON.stringify(data));

        //--> Ocultamos el modal
        const modal = document.getElementById("Create_ToDoId");
        HideCTModal(modal);
    }
});