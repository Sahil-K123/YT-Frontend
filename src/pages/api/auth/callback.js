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



// authRouter.get("/auth/google", (req,res) =>
//   res.status(200).send({
//     redirectUrl: `https://accounts.google.com/o/oauth2/auth?response_type=code&scope=openid%20profile%20email&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.HOST}/api/v1/auth/google/callback`,
//   })
// );

// authRouter.get("/auth/google/callback", async (req, res) => {
//   const code = req.query.code;
//   const redirectUri = `${process.env.HOST}/api/v1/auth/google/callback`;

//   try {
//     const response = await axios.post(
//       "https://oauth2.googleapis.com/token",
//       null,
//       {
//         params: {
//           code,
//           client_id: process.env.GOOGLE_CLIENT_ID,
//           client_secret: process.env.GOOGLE_CLIENT_SECRET,
//           redirect_uri: redirectUri,
//           grant_type: "authorization_code",
//         },
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );

//     const accessToken = response.data.access_token;

//     console.log("access token -> ", accessToken);
//     res.status(200).json({ accessToken: accessToken });
//   } catch (error) {
//     console.error(error);
//     res.json({ error: error });
//   }
// });
