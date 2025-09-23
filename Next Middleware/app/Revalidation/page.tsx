import revalidate from "../lib/actions/action1"

export default async function Page(){
  
  // const res = await fetch('http://sum-server.100xdevs.com/todos',{
  //   next:{
  //     revalidate:10 //After 10 sec the page will again rebuild    
  //   }
  // })

  // const data = await res.json()
  // console.log(JSON.stringify(data));

  const response = await fetch('https://sum-server.100xdevs.com/todos',{next:{tags:['todos']}}) //Endpoint Name
  const data = await response.json()
  revalidate() //On Every Reload the new todos that were added will be shown there
  return <div>
      {
        data.map(({todo}:any)=>(
         <div key={Math.random()}>
           {todo.title}
           {todo.description}
         </div>
        ))
      }
  </div>
}