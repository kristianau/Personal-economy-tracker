import IncomeForm from "../components/Forms/IncomeForm";

export default function IncomePage() {
    return (
        <div className="flex flex-col gap-6 justify-center mt-3 mx-72 px-40 pt-10">
            <h1 className="text-5xl text-center text-pretty underline">Income</h1>
            <IncomeForm />
        </div>
    );
};