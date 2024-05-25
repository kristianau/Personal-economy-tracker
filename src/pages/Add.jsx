import { Link, Outlet } from "react-router-dom";

export default function AddPage() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col pr-16 pl-28 pt-28 gap-16 bg-white content-center align-middle">
                <Link to="/add/income" className="py-3 px-16 min-w-32 border-solid border border-black text-center font-medium tracking-wider">Income</Link>

                <Link to="/add/savings" className="py-3 px-16 min-w-32 border-solid border border-black text-center font-medium tracking-wider">Savings</Link>

                <Link to="/add/expenses" className="py-3 px-16 min-w-32 border-solid border border-black text-center font-medium tracking-wider">Expenses</Link>
            </div>
            <Outlet className="mt-3 mx-4"></Outlet>
        </div>
    );
};