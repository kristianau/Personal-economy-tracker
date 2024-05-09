import IncomeForm from "../components/Forms/IncomeForm";

export default function IncomePage() {
    return (
        <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-5xl text-center text-pretty underline">Income</h1>
            <IncomeForm />
        </div>
    );
};