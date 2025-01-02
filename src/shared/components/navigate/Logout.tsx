"use client"

import { signOut } from "next-auth/react"

export default function Logout() {
  return <a onClick={() => signOut()} className=" text-white bg-red-500">Logout</a>
}
