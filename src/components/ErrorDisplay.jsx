import { MdError } from "react-icons/md"
import { motion } from "framer-motion"

export const InputError = ({ message }) => {
    return (
        <motion.p 
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
};

export const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y:10 },
    transition: { duration: 0.2 },
};