import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session?.user?.email });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const imgUrl = profile?.picture;
      console.log("img", imgUrl);

      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: imgUrl,
          });
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error?.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
