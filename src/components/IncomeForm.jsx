import { FormProvider, useForm } from "react-hook-form";
import InputField from "./InputField";
import { name_validation, num_validation } from "../utils/InputValidations";
import { useState } from "react";
import { BsFillCheckSquareFill } from 'react-icons/bs'

export default function IncomeForm() {
    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
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
                <div className="grid gap-5 md:grid-cols-2">
                    <InputField {...name_validation} />
                    <InputField {...num_validation} />
                </div>
                <div className="mt-5">
                {success && (
                    <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
                        <BsFillCheckSquareFill /> Form has been submitted successfully
                    </p>
                )}
                    <button
                        onClick={onSubmit}
                        className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
                    >
                        Submit Form
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}