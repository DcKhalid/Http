import fs from "fs"

function *readMyFile(){
    const.readfile = fs.createReadStream("./streamFile.txt", "utf-8");

    readfile.on("error", function error(){
        console.log(`An error occured`, error);
    });
    readfile.on ("data", (buffer) => {
        console.log("Reading data from my file", buffer);
    });
}

readMyFile();