import { startLogger } from "./logger.js"
import { games } from "./store.js"

startLogger()

setInterval(()=>{
  games.push({
    id:Math.random().toString(),
    whiteplayerName:"Alex",
    blackplayerName:"John",
    moves:["ec23","ec47"]
  })
},5000)