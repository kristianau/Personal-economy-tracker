import { Outlet, Link } from "react-router-dom";

export default function AddPage() {
    return (
     <div className="flex flex-row flex-1">
        <div className="flex flex-col pt-32 md:pl-72 sm:pl-28 pr-32 gap-32 bg-gray-300">
            <Link to="/add/income" className="py-4 px-9 min-w-32 border-solid border border-cyan-700 rounded text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-500">Income</Link>    
        
            <Link to="/add/savings" className="py-4 px-9 min-w-32 border-solid border border-cyan-700 rounded text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-500">Savings</Link>    
            
            <Link to="/add/expenses" className="py-4 px-9 min-w-32 border-solid border border-cyan-700 rounded text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-500">Expenses</Link>
        </div>
        <div className="mt-3 mx-4">
            <Outlet />
        </div>
     </div>
               
    );
};