import { Outlet, NavLink } from "react-router-dom";

export default function HeaderNavigation() {
    return (
        <div className="h-screen flex flex-col">
            <nav className="bg-gray-400">
                <div className="flex flex-row justify-center py-10 gap-60">
                    <NavLink to="/" className="py-7 px-10 min-w-32 border-solid border border-cyan-700 rounded text-center font-semibold tracking-widest bg-cyan-600 hover:bg-cyan-500">
                        HOME
                    </NavLink>
                    <NavLink to="/add" className="py-7 px-10 min-w-32 border-solid border border-cyan-700 rounded text-center font-semibold tracking-widest bg-cyan-600 hover:bg-cyan-500">
                        ADD
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};