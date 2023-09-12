import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from "fs"
import path from "path";

const port: number = 4200

const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
   res.writeHead(200);

   let connect: string = "site/";

   switch (req.url) {
    case "/":
        connect += "home.html";
        res.statusCode = 200;
        break;
        case "/about":
            connect += "about.html";
            res.statusCode = 200;
            break;
            case "/contact":
            connect += "contact.html";
            res.statusCode = 200;
            break;
   }
   fs.readFile(path.join(__dirname, connect), (error,data) => {
    if (error) {
        console.log("an error occured", error);
        res.end()
    }else{
        res.write(data);
        res.end();
    }
   })
})
server.listen(port , () => {
    console.log("port is up and listening");
})