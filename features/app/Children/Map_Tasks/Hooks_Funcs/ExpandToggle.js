document.addEventListener("click", (event) => {
    const expandBtn = event.target.closest(".app__taskExpand");
    if (!expandBtn) return;

    const taskCard = expandBtn.closest(".app__taskCard");
    if (!taskCard) return;

    const description = taskCard.querySelector(".app__taskDescription");
    if (!description) return;

    description.classList.toggle("app__taskDescription--visible");
    expandBtn.classList.toggle("app__taskExpand--rotated");
});
