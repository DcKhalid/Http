import Event from "events"
import welcomeEvent from "./index"

// console.log(Event)

const emitter = new Event

emitter.on("Money", () => {
    console.log(welcomeEvent())
})

setInterval(() => {
   emitter.emit("Money" , "Please get me rice 300 naira") 
},5000)