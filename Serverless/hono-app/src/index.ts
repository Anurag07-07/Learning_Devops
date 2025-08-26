import {Context,Hono, Next } from 'hono'

const app = new Hono()

//Create a middleware in Hono js

async function AuthMiddleware(c:Context,next:Next){
  if (c.req.header('Authorization')) {
    await next()
  }else{
    return c.json({
      message:"Invalid Token"
    })
  }
}


app.use(AuthMiddleware)


//Create A route in Hono JS
app.get('/', async(c) => {
  
  //body, headers,query parameters ,middlewares, connecting to a database
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
        
  // return c.text('Hello Hono!') //To get Text data
  return c.json({
    message:`Hello We are using Hono`
  }) // to get json data
})

export default app