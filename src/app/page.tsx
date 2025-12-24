import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <pre>{JSON.stringify(users)}</pre>
      <Button>click me</Button>
    </div>
  );
}
