import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import HomePage from "../../pages/Home";
import AddPage from "../../pages/Add";
import ExpensesPage from "../../pages/Expenses";
import IncomePage from "../../pages/Income";
import SavingsPage from "../../pages/Savings";
import NoPage from "../../pages/NoPage";
import { Authentication } from "../../pages/Authentication";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { auth } from "../../firebase";

export default function Routing() {

    const [user, setUser] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsFetching(false);
                return;
            }
            setUser(null);
            setIsFetching(false);
        })
        return () => unsubscribe();
    }, [])

    if (isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth" element={<Authentication user={user} />} />
                <Route path="/" element={<HeaderNavigation />}>
                    <Route index element={<ProtectedRoute user={user}><HomePage /></ProtectedRoute>} />
                    <Route path="add" element={<ProtectedRoute user={user}><AddPage /></ProtectedRoute>}>
                        <Route path="expenses" element={<ProtectedRoute user={user}><ExpensesPage /></ProtectedRoute>} />
                        <Route path="income" element={<ProtectedRoute user={user}><IncomePage /></ProtectedRoute>} />
                        <Route path="savings" element={<ProtectedRoute user={user}><SavingsPage /></ProtectedRoute>} />
                    </Route>
                </Route>
                <Route path="/*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
};