import { Outlet, Link } from "react-router-dom";

export default function AddPage() {
    return (
     <>
        <ul>
            <li>
                <Link to="/add/expenses">Expenses</Link>
            </li>
            <li>
                <Link to="/add/income">Income</Link>    
            </li>                    
            <li>
                <Link to="/add/savings">Savings</Link>    
            </li>                    
        </ul>
        <Outlet />
     </>
               
    );
};