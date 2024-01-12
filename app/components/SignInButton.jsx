"use client"

import { signIn } from "next-auth/react"

export default function SignInButton() {
    return (
        <button onClick={() => signIn('google')} className="bg-blue-500 text-white rounded px-4 py-3">
            Sign in with Google
        </button>
    )
}