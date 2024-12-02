import ResponseToAi from "./ResponseToAi.tsx";
import './block.scss'
import {motion} from 'framer-motion'
import {ReactNode} from "react";


export default function Block({children}:{children:ReactNode}) {

    return (
        <motion.div initial={{height:0}} animate={{height:"85vh"}} id="size-block" className="gridblock">

            {children}
        </motion.div>

    )

}