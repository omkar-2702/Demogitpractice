const table = document.querySelector("table");
const rows = table.querySelectorAll("tr");

rows.forEach((row) => {
    row.addEventListener("click", () => {
        const cells = row.querySelectorAll("td");
        const data = Array.from(cells).map((cell) => cell.textContent);
        console.log("Row data:", data);
    });
});