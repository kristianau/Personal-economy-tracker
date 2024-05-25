import { Link, Outlet } from "react-router-dom";

export default function AddPage() {
    return (
        <div className="flex flex-row flex-1">
            <div className="flex flex-col gap-10 bg-white items-end content-center">
                <Link to="/add/income" className="py-3 w-20 border-solid border border-black text-center font-medium tracking-wider">Income</Link>

                <Link to="/add/savings" className="py-3 w-1/5 border-solid border border-black text-center font-medium tracking-wider">Savings</Link>

                <Link to="/add/expenses" className="py-3 w-1/5 border-solid border border-black text-center font-medium tracking-wider">Expenses</Link>
            </div>
            <Outlet className="mt-3 mx-4"></Outlet>
        </div>
    );
};