// lib/auth-guards.ts
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { auth } from "./auth";

// Use 'cache' so if you call this in Layout AND Page, it only fetches once
export const getSession = cache(async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
});

export async function requireAuth() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return session;
}

export async function requireNoAuth() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return session;
}
