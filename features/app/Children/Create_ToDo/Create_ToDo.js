//--> Functions and Hooks
import "./Hooks_Funcs/HideCTModal.js";
import "./Hooks_Funcs/Save_FormData.js";

export function Create_ToDo() {
    return `
        <div class="app__createToDoContainer"
            id="Create_ToDoId"
        > 
            <div class="app__createToDoContent">
                <h1>Nueva Tarea</h1>

                <div class="app__createToDoForm">
                    <label for="title">Título *</label>
                    <input type="text" placeholder="¿Qué necesitas hacer?" 
                        id="title_createToDo" class="app__createToDoTitle"
                    />

                    <label for="description">Descripción </label>
                    <textarea placeholder="Agrega notas u observaciones" 
                        id="description_createToDo"
                    ></textarea>

                    <label for="priority" class="app__createToDoPriorityLabel">
                        Prioridad
                    </label> 
                    <div class="app__createToDoPriority">
                        <button id="app__createToDoPriorityLow" class="app__createToDoPriority--baja">Baja</button>
                        <button id="app__createToDoPriorityMedium" class="app__createToDoPriority--media app__createToDoPriorityActive">Media</button>
                        <button id="app__createToDoPriorityHigh" class="app__createToDoPriority--alta">Alta</button>
                    </div>
                </div>

                <div class="app__createToDoButtons">
                    <button id="CloseCreateToDo__button">Cancelar</button>
                    <button id="SaveCreateToDo__button">Guardar</button>
                </div>
            </div>
        </div>
    `;
}