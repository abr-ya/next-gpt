"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface IAuthProvider {
  session?: Session;
}

const AuthProvider: FC<PropsWithChildren<IAuthProvider>> = ({ session, children }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default AuthProvider;
