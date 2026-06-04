import { Map_Tasks } from "../../app/Children/Map_Tasks/Map_Tasks.js";
export function Re_Render_Map_Tasks() {
    document.getElementById("re_render_mapTasks_appID").innerHTML = Map_Tasks();
}