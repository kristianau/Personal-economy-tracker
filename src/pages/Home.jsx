import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function HomePage() {

    const handleSignOut = () => {
        signOut(auth).then(() => console.log("sign out")).catch((error) => console.log(error))
    }
    return (
        <section>
            <h1 className="capitalize underline font-semibold text-lg">home/overview</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </section>
    );
};