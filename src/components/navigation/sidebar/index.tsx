import React from "react";
import NavbarItems from "../sections";

const Sidebar = () => {
  return (
    <aside className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <NavbarItems />
      </ul>
    </aside>
  );
};

export default Sidebar;
