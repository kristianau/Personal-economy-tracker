import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function Layout() {

    const [home, setHome] = useState(true);
    const location = useLocation();

    return (
        <div className="h-screen flex flex-col">
            <nav className="bg-white border-b-2 border-b-gray-200">
                <div className="flex flex-row justify-center py-4 gap-5">
                    <Link to="/" onClick={() => setHome(true)} className={"py-7 min-w-32 text-center font-semibold tracking-widest hover:underline decoration-2 " + (home && location.pathname === "/" ? "underline decoration-2" : "")}>
                        HOME
                    </Link>
                    <Link to="/add" onClick={() => setHome(false)} className={"py-7 min-w-32 text-center font-semibold tracking-widest hover:underline decoration-2 " + (home && location.pathname === "/" ? "" : "underline decoration-2")}>
                        ADD
                    </Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};