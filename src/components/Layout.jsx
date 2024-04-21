import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
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
                    
                </ul>
            </nav>
            <Outlet />
        </>
    );
};