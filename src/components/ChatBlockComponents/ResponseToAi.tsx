import {motion} from 'framer-motion';
import "./response.scss"

export default function  ResponseToAi({text,header}: {text: string, header: string}) {
    return (
        <motion.div id="response-ai" className="transition ease-in delay-500" initial={{margin:1000}} animate={{margin:10}}>
            <motion.h3>{header}</motion.h3>
            <motion.p>{text}</motion.p>
        </motion.div>
    )
}