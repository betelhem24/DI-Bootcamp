function myMove() {
    const box = document.getElementById("animate");
    const container = document.getElementById("container");
    let pos = 0;
    const maxPos = container.offsetWidth - box.offsetWidth;

    const id = setInterval(() => {
        if (pos >= maxPos) {
            clearInterval(id);
        } else {
            pos++;
            box.style.left = pos + "px";
        }
    }, 1); // 1 millisecond for smooth animation
}
