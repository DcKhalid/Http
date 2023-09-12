import fs from "fs";
import path from "path";

setInterval (() => {
  const newMg2: string [] = [
                 "\nBuy snacks from Joan",
                 "\nHelp me to code",
                 "\nHelp me to flog them",
                 "\nHelp me to cook",
                 "\nEat your food",
                 "\nBook of life",
                 "\nNoun is a name of a person"
  ]
  let rand = Math.floor(Math.random() * newMg2.length)
  let u = 0;
  let quote = newMg2[rand]
  fs.appendFile(path.join(__dirname, "NewClass", "OldFile.txt"),quote,
  (error):void => {
      if(error){
          console.log("an error in appending file", error);
      }else{
          console.log("new file Appended");
          
      }
  }
  )
  console.log(quote)
}, 5000)