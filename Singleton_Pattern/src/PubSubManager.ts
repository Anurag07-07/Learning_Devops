import { createClient, type RedisClientType } from "redis";

export class PubSubManager{
  private static instance:PubSubManager
  private redisClient:RedisClientType
  private subscriptions:Map<string,string[]>

  constructor(){
    //Create a client and connect the redis
    this.redisClient = createClient()
    this.redisClient.connect()
    //Create a empty subscription map
    this.subscriptions = new Map()
  }

  //Create a singleton 
   public static getInstance():PubSubManager{
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager()
      return PubSubManager.instance
    }
    return PubSubManager.instance
  }

  //If User Subscribe the stock i want to add them
  public userSubscribe(userId:string,stock:string){
    //If that stock already present or not 
    if (!this.subscriptions.has(stock)) {
        this.subscriptions.set(stock,[])
    }
    this.subscriptions.get(stock)?.push(userId)

    //Now subscribe to the the stock
    //Stock length is one the first user is added so subscribe the stock
    if (this.subscriptions.get(stock)?.length===1) {
      this.redisClient.subscribe(stock,(message)=>{
        this.handleMessage(stock,message)
      })
    }
  }

  public unsubscribe(userId:string,stock:string){
    this.subscriptions.set(stock,this.subscriptions.get(stock)?.filter((sub)=>sub!==userId) || [] )
    if (this.subscriptions.get(stock)?.length===0) {
      this.redisClient.unsubscribe(stock)
    }
  }

  private handleMessage(stock:string,message:string){
    console.log(`Message recieved on channel ${stock} : ${message}`);
    this.subscriptions.get(stock)?.forEach((sub)=>{
      console.log(`Sending message to user ${sub}`);
    })
  }

  public async disconnect(){
    await this.redisClient.quit()
  }
}