export const SideNav = () => {
  return (
    <div className="drawer lg:drawer-open w-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* EMPTY CONTENT (required by drawer) */}
      <div className="drawer-content lg:hidden">
        <label 
          htmlFor="my-drawer-3" 
          className="btn btn-primary drawer-button m-4 shadow-lg"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
          Open Menu
        </label>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        <aside className="w-64 min-h-full g-(--bg-sidebar)shadow-xl">
          {/* HEADER */}
          <div className="p-6 border-b border-base-300 bg-gradient-to-br from-base-100 to-base-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                📚
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Library User</h1>
                <p className="text-xs text-gray-500 mt-0.5">Management Panel</p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <ul className="menu p-4 gap-1.5">
            <li>
              <a className="active text-base font-medium rounded-lg py-3 transition-all duration-200 hover:scale-[1.02]">
                <span className="text-xl">📊</span>
                <span>Dashboard</span>
              </a>
            </li>

            {/* Books Section */}
            <li className="menu-title mt-6 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider opacity-60">
                Books Management
              </span>
            </li>

            <li>
              <a className="text-base rounded-lg py-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                <span className="text-xl">📚</span>
                <span>All Books</span>
              </a>
            </li>

            <li>
              <a className="text-base rounded-lg py-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                <span className="text-xl">📖</span>
                <span>Borrowed Books</span>
              </a>
            </li>

            <li>
              <a className="text-base rounded-lg py-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                <span className="text-xl">📦</span>
                <span>Returned Books</span>
              </a>
            </li>

            {/* System Section */}
            <li className="menu-title mt-6 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider opacity-60">
                System
              </span>
            </li>

            <li className="mt-auto">
              <a className="text-red-500 text-base rounded-lg py-3 transition-all duration-200 hover:bg-red-50 hover:scale-[1.02] hover:shadow-md font-medium">
                <span className="text-xl">🚪</span>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};