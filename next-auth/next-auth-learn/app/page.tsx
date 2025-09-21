import { getServerSession } from "next-auth";
import Appbar from "./Components/Appbar";
import { NEXT_AUTH } from "./lib/auth";

//How to see Details Through Server Side
//Using Get Server session Hook
//Next Auth not send id... for that we have to use callback 
//For restrciting the user or add some more logic we use callback
export default async function Home() {
  const session = await getServerSession(NEXT_AUTH)
  return <div>
    <Appbar></Appbar>
    {JSON.stringify(session)}
  </div>
}