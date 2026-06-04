export function GetData() {
    return JSON.parse(localStorage.getItem("data")) || [];
}