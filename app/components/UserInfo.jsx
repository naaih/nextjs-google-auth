/* eslint-disable jsx-a11y/alt-text */
"use client";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="p-8 flex flex-col gap-3">
        <h4 className="font-bold">You are logged in with Google</h4>
        <br/>
        <Image className="rounded-full" src={session?.user?.image} width={60} height={60} />
        <div>Name:  <span className="font-bold">{session?.user?.name}</span></div>
        <div>Email: <span className="font-bold">{session?.user?.email}</span></div>
      </div>
    );
  } else {
    return <SignInButton />;
  }
}
