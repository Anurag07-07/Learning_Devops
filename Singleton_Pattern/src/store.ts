interface IGame{
  id:string
  whiteplayerName:string
  blackplayerName:string
  moves:string[]
}


// export const games:IGame[] = [];


//Classes 

export class GameManager{
  games:IGame[]= []
  private static instance:GameManager;
   private constructor(){
    this.games = []
  }

  static getInstance(){
    // Static attribute => that is associated with the class not with the object 
    if (GameManager.instance) {
      return GameManager.instance
    }
    GameManager.instance = new GameManager()
    return GameManager.instance
  }

  // or 

  // static getInstance1(){
  //   // Static attribute => that is associated with the class not with the object 
  //   if (this.instance) {
  //     return this.instance
  //   }
  //   this.instance = new GameManager()
  //   return this.instance
  // }

  addMove(gameID:string,move:string){
    console.log(`Adding moves to ${move} to game ${gameID}`);
    //Find the game on basis of game id
    let game = this.games.find((g)=> g.id === gameID)
    //Push the  move to game
    game?.moves.push(move)
  }

  addGame(gameId:string){
    const game:IGame = {
      id:gameId,
      whiteplayerName:"Alex",
      blackplayerName:"John",
      moves:["ec237","ec456"]
    }

    this.games.push(game)
  }

  log(){
    console.log(this.games);
  }
}

export const gameManager = GameManager.getInstance()