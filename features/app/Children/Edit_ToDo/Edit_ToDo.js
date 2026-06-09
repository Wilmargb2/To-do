import "./Hooks_Funcs/HideEditModal.js";
import "./Hooks_Funcs/ShowEditModal.js";
import "./Hooks_Funcs/SaveEditData.js";

export function Edit_ToDo() {
    return `
        <div class="app__editToDoContainer"
            id="Edit_ToDoId"
        >
            <div class="app__editToDoContent">
                <h1>Editar Tarea</h1>

                <div class="app__editToDoForm">
                    <label for="title">Título *</label>
                    <input type="text" placeholder="¿Qué necesitas hacer?"
                        id="title_editToDo" class="app__editToDoTitle"
                    />

                    <label for="description">Descripción</label>
                    <textarea placeholder="Agrega notas u observaciones"
                        id="description_editToDo"
                    ></textarea>

                    <label for="priority" class="app__editToDoPriorityLabel">
                        Prioridad
                    </label>
                    <div class="app__editToDoPriority">
                        <button id="app__editToDoPriorityLow" class="app__editToDoPriority--baja">Baja</button>
                        <button id="app__editToDoPriorityMedium" class="app__editToDoPriority--media app__editToDoPriorityActive">Media</button>
                        <button id="app__editToDoPriorityHigh" class="app__editToDoPriority--alta">Alta</button>
                    </div>

                    <label for="dueDate">Vencimiento</label>
                    <div class="app__editToDoDue">
                        <input type="date" id="dueDate_editToDo" class="app__editToDoDate" />
                        <input type="time" id="dueTime_editToDo" class="app__editToDoTime" />
                    </div>
                </div>

                <div class="app__editToDoButtons">
                    <button id="CloseEditToDo__button">Cancelar</button>
                    <button id="SaveEditToDo__button">Guardar</button>
                </div>
            </div>
        </div>
    `;
}
