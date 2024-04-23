import { Outlet, Link } from "react-router-dom";

export default function AddPage() {
    return (
     <div className="flex flex-row flex-1">
        <div className="flex flex-col pt-32 pl-80 pr-32 gap-32 bg-gray-300">
            <Link to="/add/expenses" className="py-4 px-9 min-w-32 border-solid border border-cyan-700 rounded text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-500">Expenses</Link>
        
            <Link to="/add/income" className="py-4 px-9 min-w-32 border-solid border border-cyan-700 rounded text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-500">Income</Link>    
        
            <Link to="/add/savings" className="py-4 px-9 min-w-32 border-solid border border-cyan-700 rounded text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-500">Savings</Link>    
        </div>
        <div className="mt-5 mx-20">
            <Outlet />
        </div>
     </div>
               
    );
};