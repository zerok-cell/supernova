import Input from "../components/ChatBlockComponents/Input/Input.tsx";
import Block from "../components/ChatBlockComponents/Block.tsx";
import { motion } from "motion/react";
import "../components/ChatBlockComponents/response.scss"
import ResponseToAi from "../components/ChatBlockComponents/ResponseToAi.tsx";

export default function ChatBlock(){
    return (
        <Block>
            <motion.div className="resp">
                <ResponseToAi  text={'Что такое react ts'} header={'ReactTs'}/>
                <ResponseToAi text={"Django это фреймворк или либа?"} header={"Djano это?"}/>
                <ResponseToAi text={"Django это фреймворк или либа?"} header={"Djano это?"}/>
            </motion.div>
            <Input/>
        </Block>)
}

