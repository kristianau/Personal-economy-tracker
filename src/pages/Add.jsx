import { Outlet, Link } from "react-router-dom";

export default function AddPage() {
    return (
     <div className="flex flex-row">
        <div className="flex flex-col mt-20 ml-48 gap-32">
            <Link to="/add/expenses" className="py-4 px-9 min-w-32 border-solid border-2 border-green-950 rounded text-center bg-teal-950 hover:bg-zinc-600">Expenses</Link>
        
            <Link to="/add/income" className="py-4 px-9 min-w-32 border-solid border-2 border-green-950 rounded text-center bg-teal-950 hover:bg-zinc-600">Income</Link>    
        
            <Link to="/add/savings" className="py-4 px-9 min-w-32 border-solid border-2 border-green-950 rounded text-center bg-teal-950 hover:bg-zinc-600">Savings</Link>    
        </div>
        <div className="mt-5 mx-20">
            <Outlet />
        </div>
     </div>
               
    );
};