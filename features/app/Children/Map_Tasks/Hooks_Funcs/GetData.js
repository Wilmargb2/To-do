export function GetData() {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    let changed = false;

    const now = new Date();

    for (let i = 0; i < data.length; i++) {
        if (data[i].state !== "Pendiente") continue;
        if (!data[i].dueDate) continue;

        const due = new Date(data[i].dueDate + "T" + (data[i].dueTime || "23:59") + ":00");

        if (due < now) {
            data[i].state = "Vencida";
            changed = true;
        }
    }

    if (changed) {
        localStorage.setItem("data", JSON.stringify(data));
    }

    return data;
}