import { findInputError } from "../../utils/FindInputError"
import { useFormContext } from "react-hook-form"
import ErrorMessage from "../Messages/ErrorMessage";

export default function InputField({ label, type, id, placeholder, validation, name }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const inputError = findInputError(errors, name);

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">
                    {label}
                </label>
                <ErrorMessage error={inputError.error} />
            </div>
            <input
                id={id}
                type={type}
                className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                placeholder={placeholder}
                {...register(name, validation)}
            />
        </div>
    );
};