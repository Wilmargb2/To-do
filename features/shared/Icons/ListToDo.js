export function ListToDo({
    size = 24,
    className = "",
    strokeWidth = 2
} = {}) {
    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${size}"
            height="${size}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="${className}"
        >
            <path d="M13 5h8"/>
            <path d="M13 12h8"/>
            <path d="M13 19h8"/>
            <path d="m3 17 2 2 4-4"/>
            <rect x="3" y="4" width="6" height="6" rx="1"/>
        </svg>
    `;
}