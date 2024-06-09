import { useState } from "react"
import TakeFromSavingsDropdown from "./TakeFromSavingsDropdown";
import { spend_saved_money } from "../../utils/InputValidations";
import { useFormContext } from "react-hook-form"


export default function ConditionalSavingsInput() {


    const [isChecked, setIsChecked] = useState(false);

    const { register } = useFormContext();

    return (
        <div className="felx flex-col">
            <label className="flex flex-row gap-2 mb-2">
                <input
                    {...register("takenFromSavings")}
                    value={isChecked}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                Money taken from savings
            </label>
            {isChecked && (
                <TakeFromSavingsDropdown {...spend_saved_money} />
            )}
        </div>
    )
}