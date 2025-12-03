import { startLogger } from "./logger.js"
import { GameManager } from "./store.js"

export const gameManager = new GameManager()

startLogger()

setInterval(()=>{
  gameManager.addGame(Math.random().toString())
},5000)