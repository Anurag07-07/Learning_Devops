import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH = {
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

      // Write the backend Logic There for validation

      return {
        id:'user1',
        name:"Anurag raj",
        email:"anuragraj@gmail.com"
      }  
    }
  })
],
//Add Next Auth Secret which is same as JWT_SECRET
secret:process.env.NEXTAUTH_SECRET,
callbacks:{
  signIn:({user})=>{
    if (user.name==='Something') {
      return false
    }
    return true
  },
  jwt:({token,user})=>{
    //Now After creating token if i want to change something in token i can do it
    console.log(token);
    token.email = "dsadjas"
    token.type = 'admin'
    //Sub is the id here we can change it
    return token
  },
  session:({session,user,token}:any)=>{
    //Session is used when we have to show something extra on the screen
    if (session && session.user) {
      //We can see userid in clientSide Render Component
      session.user.id = token.sub
    }
    return session
  }
}
}