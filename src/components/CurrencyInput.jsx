import { Controller, useFormContext } from "react-hook-form";
import CurrencyDropdown from "./CurrencyDropdown";

export default function CurrencyInput({ id, placeholder }) {

    const { control } = useFormContext();

    return (
        <div>
            <Controller
                name="currencyController"
                control={control}
                rules={{
                    required: 'required'
                }}
                render={({ field }) => (

                    <CurrencyDropdown placeholder={placeholder} field={field} id={id} />

                )}
            />
        </div>
    )
}