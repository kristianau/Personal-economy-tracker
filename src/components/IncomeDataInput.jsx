import InputField from "./InputField";
import { income_validation, amount_validation, date_validation } from "../utils/InputValidations";
import DateInput from "./DateInput";

export default function DataInputs(){
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <InputField {...income_validation} />
            <InputField {...amount_validation} />
            <DateInput {...date_validation} />
        </div>
    )
}