export function ChevronUp({
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
            <path d="m18 15-6-6-6 6"/>
        </svg>
    `;
}