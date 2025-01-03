import Navbar from "@/shared/components/navigate/Navbar"

export default function WalletLayout() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Navbar
            leading={
              <>
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-ghost drawer-button lg:hidden"
                >
                  <i className="bx bx-menu-alt-left"></i>
                </label>
              </>
            }
          />
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
