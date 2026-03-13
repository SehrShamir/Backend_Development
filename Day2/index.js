let http = require("http")

let server = http.createServer((req, res) => {
    if (req.url == "/news") {
        let obj = {
            status: 1,
            data: [{
                newsTitle: 'ws',
                newsDes: 'ws Hello'
            },
            {
                newsTitle: 'IIP',
                newsDes: 'IIP Hello'
            }
            ]
        }
        res.end(JSON.stringify(obj))
    }
    if (req.url == "/about") {

    }
    if (req.url == "/") {

        res.end("Welcome to Ws")
    }

})

server.listen("8000") 