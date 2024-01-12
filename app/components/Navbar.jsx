"use client";

import Link from "next/link";
import {signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

  return (
    <div className="flex p-4 items-center justify-between">
      <Link className="font-bold text-lg" href={"/"}>
        Nextjs Google Auth
      </Link>
      {status === "authenticated" ? (
        <button onClick={() => signOut()} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700">
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn('google')} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700">
          Sign In
        </button>
      )}
    </div>
  );
}
