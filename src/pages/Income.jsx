import IncomeForm from "../components/Forms/IncomeForm";

export default function IncomePage() {
    return (
        <div className="flex flex-col gap-6 mt-14 mx-52 px-44">
            <h1 className="text-5xl text-center text-pretty underline">Income</h1>
            <IncomeForm />
        </div>
    );
};