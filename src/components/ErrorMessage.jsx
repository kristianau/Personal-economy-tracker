import { AnimatePresence } from "framer-motion"
import { InputError } from "./ErrorDisplay";

export default function ErrorMessage({ error }){
    return (
        <AnimatePresence mode="wait" initial={false}>
            {error && (
                <InputError
                    message={error.message}
                    key={error.message} 
                />
            )}
        </AnimatePresence>
    );
}