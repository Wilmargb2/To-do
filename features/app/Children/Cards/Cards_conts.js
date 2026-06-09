export let Cards_conts = [
    {
        label: "Pendientes",
        value: 0,
        modifier: "pending"
    },
    {
        label: "Completadas",
        value: 0,
        modifier: "completed"
    },
    {
        label: "Vencidas",
        value: 0,
        modifier: "overdue"
    },
    {
        label: "Cerradas",
        value: 0,
        modifier: "closed"
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
        } else if (transFormData[i].state == "Cerrada") {
            Cards_conts[3].value++;
        }
    }
}
