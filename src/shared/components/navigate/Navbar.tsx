import Image from "next/image"
import Logout from "./Logout"
import { auth } from "@/auth"
import { ReactNode } from "react"

export default async function Navbar({ leading }: { leading: ReactNode }) {
  const session = await auth()

  return (
    <>
      <div className="navbar bg-base-100">
        {leading ? (
          <>
            <div className="navbar-start lg:hidden">{leading}</div>
          </>
        ) : null}
        <div className="navbar-center lg:navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src={session?.user?.image as string}
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
