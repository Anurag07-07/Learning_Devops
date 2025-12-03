import { startLogger } from "./logger.js"
import { gameManager } from "./store.js"

startLogger()

setInterval(()=>{
  gameManager.addGame(Math.random().toString())
},5000)