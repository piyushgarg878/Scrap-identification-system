// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    session: {
      strategy: "jwt", // ✅ required
    },
    secret: process.env.NEXTAUTH_SECRET, // ✅ must be set
  };
  
  const handler = NextAuth(authOptions);
  export { handler as GET, handler as POST };