import { Cards_conts } from "../../app/Children/Cards/Cards_conts.js";
import { GetData } from "../../app/Children/Map_Tasks/Hooks_Funcs/GetData.js";

export function UpdateCardsConts() {
    const data = GetData();

    Cards_conts.forEach(item => item.value = 0);

    for (let i = 0; i < data.length; i++) {
        if (data[i].state === "Pendiente") {
            Cards_conts[0].value++;
        } else if (data[i].state === "Completada") {
            Cards_conts[1].value++;
        } else if (data[i].state === "Vencida") {
            Cards_conts[2].value++;
        } else if (data[i].state === "Cerrada") {
            Cards_conts[3].value++;
        }
    }
}
