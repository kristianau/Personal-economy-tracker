import SavingsForm from "../components/Forms/SavingsForm";

export default function SavingsPage() {
    return (
        <div className="flex flex-col gap-6 mt-14 mx-52 px-44">
            <h1 className="text-5xl text-center text-pretty underline">Savings</h1>
            <SavingsForm />
        </div>
    );
};