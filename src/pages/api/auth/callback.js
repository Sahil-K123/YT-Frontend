import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
      async jwt(token, user) {
        console.log("google client id", process.env.GOOGLE_CLIENT_ID)
        console.log("google client secret", process.env.GOOGLE_CLIENT_SECRET)
      if (user) {
        token.id = user.id
        token.email = user.email
        console.log("token id", token.id); 
        console.log("token emial", token.email); 
    }
      return token
    },
  },
})



