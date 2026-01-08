import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="m-10 flex h-5 items-center space-x-4 text-sm">
        <Link href={"/"}>Home</Link>
        <Separator orientation="vertical" />
        <Link href={"/login"}>Login</Link>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-6 mx-auto">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="Nodebase" width={30} height={30} />
          Nodebase
        </Link>
        {children}
      </div>
    </>
  );
}
