import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-screen flex flex-col">
            <nav className="bg-white border-b-2 border-b-gray-200">
                <div className="flex flex-row justify-center py-4 gap-5">
                    <Link to="/" className="py-7 min-w-32 text-center font-semibold tracking-widest hover:underline decoration-2">
                        HOME
                    </Link>
                    <Link to="/add" className="py-7 min-w-32 text-center font-semibold tracking-widest hover:underline decoration-2">
                        ADD
                    </Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};