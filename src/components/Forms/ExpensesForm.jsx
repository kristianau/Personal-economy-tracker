import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import DataInputs from "../DataInputs/ExpensesDataInputs";
import SuccessMessage from "../Messages/SuccessMessage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ExpensesForm() {
    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const expensesCollection = collection(db, "expenses")

    const onSubmit = methods.handleSubmit(async data => {

        let savingsCategory = ""
        if (data.takenFromSavings)
            savingsCategory = data.savingsCategory


        try {
            await addDoc(expensesCollection, {
                amount: data.num,
                categories: data.categories,
                currency: data.currency,
                date: data.date,
                expenses: data.expenses,
                savingsCategory: savingsCategory,
                takenFromSavings: data.takenFromSavings,
            });
        }
        catch (err) {
            console.log(err)
        }
        methods.reset();
        setSuccess(true);

    })

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                className="container"
            >
                <DataInputs />

                <div className="flex flex-col items-center mt-5">

                    <SuccessMessage success={success} />

                    <button
                        onClick={onSubmit}
                        className="flex items-center gap-1 p-3 px-8 font-semibold rounded text-white bg-blue-400 hover:bg-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}