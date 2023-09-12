import http from "http"
import fs from "fs"
import path from "path";

const Port:number = 2088 
const Dataset = [
    {
        id:"1",
        name:"Daniel Okwudili",
        stack: "Half stack",
    },
    {
        id:"2",
        name:"Jemima Udoka",
        stack: "Entry Level",
    },
    {
        id:"3",
        name:"Sean Etang",
        stack: "Full stack",
    },
];

const server = http .createServer((req: IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    // res.writeHead(200);

    if (req.url ==="/" && req.method === "GET"&& res.statusCode === 200){
        res.setHeader("Content-Type", "application/json"); res.write(JSON.stringfy(Dataset));
        res.end();
    }
    res.end();
})
server.listen(Port, () => {
    console.log("port is up and listening")
})