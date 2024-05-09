
import CurrencyInput from "./CurrencyInput"
import { Controller, useFormContext } from "react-hook-form"
import ErrorMessage from "./ErrorMessage";
import { findInputError } from "../utils/FindInputError";

// Validating amount input and currency dropdown with 1 controller

export default function AmountAndCurrency({ amountLabel, amountType, amountId, amountPlaceholder, currencyId, currencyPlaceholder, name, validation }) {

    // fetch form context information
    // register and formState: {errors} for <input> field validation (tbh i validate this field sepearately from the controller)
    // control for the controller which is used to validate currency dropdown menu
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    // to check if <input> field has any errors
    const inputError = findInputError(errors, name);

    return (

        <Controller
            name="amountAndCurrencyController"
            control={control}
            rules={{
                required: 'required',
            }}
            render={({ field, fieldState: { error } }) => (

                <div className="flex flex-col w-full gap-2">

                    <div className="flex flex-row justify-between">
                        <label htmlFor={amountId} className="font-semibold capitalize">
                            {amountLabel}
                        </label>
                        {inputError.error ? <ErrorMessage error={inputError.error} /> : error ? <ErrorMessage error={error} /> : <ErrorMessage error={false} />}
                    </div>

                    <div className="flex flex-row gap-2 items-end">
                        <input
                            id={amountId}
                            type={amountType}
                            className=" p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                            placeholder={amountPlaceholder}
                            {...register(name, validation)}
                        />
                        <CurrencyInput placeholder={currencyPlaceholder} field={field} id={currencyId} />
                    </div>

                </div>

            )} />
    );
}