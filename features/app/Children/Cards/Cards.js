import { Cards_conts } from "./Cards_conts.js";

function PendingIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Cards__icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
}

function CompletedIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Cards__icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
}

function OverdueIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Cards__icon"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
}

function ClosedIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Cards__icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
}

const icons = {
    pending: PendingIcon,
    completed: CompletedIcon,
    overdue: OverdueIcon,
    closed: ClosedIcon
};

export function Cards() {
    return `
        <div class="Cards__ArrayList">
            ${Cards_conts.map((item) => {
                const iconFn = icons[item.modifier] || icons.pending;
                return `
                    <div class="Cards__ArrayListItem Cards__ArrayListItem--${item.modifier}">
                        ${iconFn()}
                        <p>${item.label}</p>
                        <p>${item.value}</p>
                    </div>
                `;
            }).join('')}
        </div>
    `
}
