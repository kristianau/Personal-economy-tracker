import ExpensesForm from "../components/Forms/ExpensesForm";

export default function ExpensesPage() {
    return (
        <div className="flex flex-col gap-6 mt-14 mx-52 px-44">
            <h1 className="text-5xl text-center text-pretty underline">Expenses</h1>
            <ExpensesForm />
        </div>
    );
};