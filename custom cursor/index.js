let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (e) => {
    cursor.style.top = e.y + "px";
    cursor.style.left = e.x + "px";
});
