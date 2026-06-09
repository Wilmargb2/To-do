export function Clock({
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
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4-2"/>
        </svg>
    `;
}