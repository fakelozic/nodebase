"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LogoutButton() {
  const router = useRouter();

  async function onSubmit() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
        onError: (ctx) => {
          toast(ctx.error.message);
        },
      },
    });
  }

  return <Button onClick={onSubmit}>Logout</Button>;
}
