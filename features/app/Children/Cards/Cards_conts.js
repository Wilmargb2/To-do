export let Cards_conts = [
    {
        label: "Pendientes",
        value: 0
    },
    {
        label: "Completadas",
        value: 0
    },
    {
        label: "Vencidas",
        value: 0
    }
]

const data = localStorage.getItem("data")
if (data && data.length > 0) {
    let transFormData = JSON.parse(data);
    for (let i = 0; i < transFormData.length; i++) {
        if (transFormData[i].state == "Pendiente") {
            Cards_conts[0].value++;
        } else if (transFormData[i].state == "Completada") {
            Cards_conts[1].value++;
        } else if (transFormData[i].state == "Vencida") {
            Cards_conts[2].value++;
        }
    }
}