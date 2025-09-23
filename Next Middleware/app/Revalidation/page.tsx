export default async function Page(){
  
  const res = await fetch('http://sum-server.100xdevs.com/todos',{
    next:{
      revalidate:10 //After 10 sec the page will again rebuild    
    }
  })

  const data = await res.json()
  console.log(JSON.stringify(data));
  return <div>
      {
        data.map(({todos})=>(
         <div key={Math.random()}>
           {todos.title}
           {todos.description}
         </div>
        ))
      }
  </div>
}