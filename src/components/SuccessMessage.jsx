import { motion } from "framer-motion"
import { BsFillCheckSquareFill } from 'react-icons/bs'

export default function SuccessMessage({success}){
    return (
        <>
            {success && (
                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1 mb-5 font-semibold text-green-500"
                >
                    <BsFillCheckSquareFill /> Form has been submitted successfully
                </motion.div>
            )}
        </>
    )
}