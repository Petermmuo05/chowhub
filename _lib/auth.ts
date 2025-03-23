import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createAppUser } from "./actions";
import { getSingleAppUser } from "./data-service";
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Fetch the user's ID from Supabase
        const supabaseUser = await getSingleAppUser(user.email);
        token.id = supabaseUser.id; // Store user ID in the token
        token.role = supabaseUser.role; // Store role in the token (optional)
        console.log(token, user, "The token")
        if (supabaseUser.role === "admin") {
          token.admin_id = supabaseUser.admin_id;
        }
      }
      return token;
    },

    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getSingleAppUser(user.email);
        // console.log(user, account, profile);
        if (!existingGuest) {
          await createAppUser({ email: user.email, full_name: user.name });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      if (token.role === "admin") {
        session.user.admin_id = token.admin_id;
      } // console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
