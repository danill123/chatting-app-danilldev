const express = require('express')
const app = express()
const path = require('path')
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.render('index')
})

// var array = 0
io.on('connection', (socket) => {
    // codingan percobaan / testing
    // socket.on("message", () => {
    //     array++
    //     if(array%2 == 0) {
    //         message = "this is even"
    //     } else {
    //         message = "this is odd"
    //     }
    //     socket.emit('message', `increme ${message}`)
    // })
                
    // ---------------------- eventnnya di kelola disini ------------------------//
    socket.emit("message", "welcome in danilldev chat") // welcome message

    socket.on('message', (data) => {
        socket.emit("message", data)
    })

    socket.on('join', () => {
        socket.emit("message", "A user was Join")
    })

    socket.on('disconnect', () => {
        socket.emit("message", "A user was Left this Chat")
    })

})

http.listen(3000, () => {
    console.log("Server listen on 3000")
})