import { amount_validation } from "../utils/InputValidations";
import AmountAndCurrency from "./AmountAndCurrency";
import SavingsBucketInput from "./SavingsBucketInput";
import { savings_bucket_data } from "../utils/InputValidations";

export default function DataInputs() {
    return (
        <div className="grid gap-5 md:grid-cols-1">
            <AmountAndCurrency {...amount_validation} />
            <SavingsBucketInput {...savings_bucket_data} />
        </div>
    )
}