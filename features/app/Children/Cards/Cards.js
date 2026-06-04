import { Cards_conts } from "./Cards_conts.js";
export function Cards() {
    return `
        <div class="Cards__ArrayList">
            ${Cards_conts.map((item) => {
                return `
                    <div class="Cards__ArrayListItem">
                        <p>${item.label}</p>
                        <p>${item.value}</p>
                    </div>
                `;
            }).join('')}
        </div>
    `
}