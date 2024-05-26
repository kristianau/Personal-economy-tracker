import { Link, Outlet } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { useLocation } from 'react-router-dom'

export default function AddPage() {

    const [selectedPage, setSelectedPage] = useState(0);
    const location = useLocation();

    return (
        <div className="flex flex-row">
            <div className="flex flex-col pr-16 pl-28 pt-28 gap-16 bg-white content-center align-middle">

                <div className="flex flex-row gap-1 items-center">
                    <Link to="/add/income" onClick={() => setSelectedPage(1)} className={"py-3 px-16 w-48 border-solid border border-black text-center font-medium tracking-wider " + (selectedPage === 1 && location.pathname === "/add/income" ? "bg-gray-100" : "")}>Income</Link>
                    {selectedPage === 1 && location.pathname === "/add/income" ? <AiOutlineLeft className="size-10" /> : <></>}
                </div>

                <div className="flex flex-row gap-1 items-center">

                    <Link to="/add/savings" onClick={() => setSelectedPage(2)} className={"py-3 px-16 w-48 border-solid border border-black text-center font-medium tracking-wider " + (selectedPage === 2 && location.pathname === "/add/savings" ? "bg-gray-100" : "")}>Savings</Link>
                    {selectedPage === 2 && location.pathname === "/add/savings" ? <AiOutlineLeft className="size-10" /> : <></>}
                </div>

                <div className="flex flex-row gap-1 items-center">
                    <Link to="/add/expenses" onClick={() => setSelectedPage(3)} className={"py-3 px-16 w-48 border-solid border border-black text-center font-medium tracking-wider " + (selectedPage === 3 && location.pathname === "/add/expenses" ? "bg-gray-100" : "")}>Expenses</Link>
                    {selectedPage === 3 && location.pathname === "/add/expenses" ? <AiOutlineLeft className="size-10" /> : <></>}
                </div>
            </div>
            <Outlet className="mt-3 mx-4"></Outlet>
        </div>
    );
};