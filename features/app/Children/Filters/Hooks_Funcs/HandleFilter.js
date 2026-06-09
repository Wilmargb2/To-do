import { setFilter } from "../../../../shared/FilterState.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

document.addEventListener("click", (event) => {
    const btn = event.target.closest(".Filters__button--state");
    if (btn) {
        const filter = btn.dataset.filter;
        if (!filter) return;

        setFilter(filter);

        document.querySelectorAll(".Filters__button--state").forEach(b => {
            b.classList.remove("Filters__button--active");
        });
        btn.classList.add("Filters__button--active");

        Re_Render_Map_Tasks();
        return;
    }

    const badge = event.target.closest(".app__taskBadge");
    if (badge) {
        const stateText = badge.textContent.trim().toLowerCase();
        const stateMap = {
            pendiente: "pendiente",
            completada: "completada",
            vencida: "vencida",
            cerrada: "cerrada"
        };
        const filter = stateMap[stateText];
        if (!filter) return;

        setFilter(filter);

        document.querySelectorAll(".Filters__button--state").forEach(b => {
            b.classList.remove("Filters__button--active");
            if (b.dataset.filter === filter) {
                b.classList.add("Filters__button--active");
            }
        });

        Re_Render_Map_Tasks();
    }
});
