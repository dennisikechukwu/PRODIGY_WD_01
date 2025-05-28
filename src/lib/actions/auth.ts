"use server";

import { signIn,signOut } from "next-auth/react";

export const login = async () => {
  await signIn("Google", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};