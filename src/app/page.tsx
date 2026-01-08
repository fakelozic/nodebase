import { LogoutButton } from "@/features/auth/components/logout-button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

export default async function Home() {
  await requireAuth();
  const data = await caller.getUsers();
  return (
    <>
      <div className="m-10">{JSON.stringify(data, null, 2)}</div>
      {data && <LogoutButton />}
    </>
  );
}
