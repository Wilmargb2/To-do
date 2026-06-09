import { setSort } from "../../../../shared/FilterState.js";
import { Re_Render_Map_Tasks } from "../../../../shared/Re_Renders/Re_Render_Map_Tasks.js";

document.addEventListener("click", (event) => {
    const btn = event.target.closest(".Filters__button--sort");
    if (!btn) return;

    const sort = btn.dataset.sort;
    if (!sort) return;

    setSort(sort);

    document.querySelectorAll(".Filters__button--sort").forEach(b => {
        b.classList.remove("Filters__button--active");
    });
    btn.classList.add("Filters__button--active");

    Re_Render_Map_Tasks();
});
