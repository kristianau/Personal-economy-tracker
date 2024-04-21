import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/Home";
import ExpensesPage from "../pages/Expenses";
import IncomePage from "../pages/Income";
import SavingsPage from "../pages/Savings";
import NoPage from "../pages/NoPage";

export default function NavBar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="add">
                        <Route path="expenses" element={<ExpensesPage />} />
                        <Route path="income" element={<IncomePage />} />
                        <Route path="savings" element={<SavingsPage />} />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};