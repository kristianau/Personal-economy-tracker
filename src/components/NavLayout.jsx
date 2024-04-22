import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav className="bg-teal-900">
                <div className="flex flex-row justify-center py-10 gap-60">   
                    <Link to="/" className="py-7 px-10 min-w-32 border-solid border-2 border-green-950 rounded text-center bg-teal-950 hover:bg-zinc-600">
                        Home
                    </Link>  
                    <Link to="/add" className="py-7 px-10 min-w-32 border-solid border-2 border-green-950 rounded text-center bg-teal-950 hover:bg-zinc-600">  
                        Add
                    </Link>      
                </div>
            </nav>
            <Outlet />
        </div>
    );
};