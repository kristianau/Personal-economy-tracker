import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function HeaderNavigation() {

    const [home, setHome] = useState(true);
    const location = useLocation();

    return (
        <div className="h-screen flex flex-col">
            <nav className="bg-white border-b-2 border-b-gray-200">
                <div className="flex flex-row justify-center py-4 gap-5">
                    <NavLink to="/" onClick={() => setHome(true)} className={"py-7 min-w-32 text-center font-semibold tracking-widest hover:underline decoration-2 " + (home && location.pathname === "/" ? "underline decoration-2" : "")}>
                        HOME
                    </NavLink>
                    <NavLink to="/add" onClick={() => setHome(false)} className={"py-7 min-w-32 text-center font-semibold tracking-widest hover:underline decoration-2 " + (home && location.pathname === "/" ? "" : "underline decoration-2")}>
                        ADD
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};