import { error } from "console"
import fs from "fs"
import path from "path"
let date = new Date
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " Date: " + date.getDate()
// console.log(time);s

setInterval(()=>{
    let rand = Math.floor(Math.random() * (2000 + 1000 - 1)) + 1000
    let info = `\nWecome to Codelab, you got in on ${time}, and your registration number is ${rand}`
    fs.appendFile(path.join(__dirname, "./NewClass", "OldFile.txt"), info, (error)=>{
        if(error){console.log("Failed", error)}
        else{
            console.log("done");
            
        }
        
    })
}, 2000)