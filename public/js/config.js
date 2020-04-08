const socket = io();

socket.on("message", (data) => {
    let mess = document.getElementById("mes-parent")
    mess.insertAdjacentHTML("afterend", `<p> - (message): ${data} <p>`)
})

document.getElementById("button").addEventListener("click", () => {
    const text = document.getElementById("name").value
    socket.emit("message", text)
})