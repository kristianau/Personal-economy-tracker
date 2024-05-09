import SavingsForm from "../components/SavingsForm";

export default function SavingsPage() {
    return (
        <div className="flex flex-col gap-6 justify-center mt-3 mx-72 px-40 pt-10">
            <h1 className="text-5xl text-center text-pretty underline">Savings</h1>
            <SavingsForm />
        </div>
    );
};