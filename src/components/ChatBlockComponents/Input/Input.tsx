import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import './input_style.scss'
import {motion} from "framer-motion";
import {useAnimate} from 'framer-motion';
import {useEffect} from "react";



const LeftIcons = () => {
    return (
        <motion.div className={'lefticons'}>
            <AttachmentRoundedIcon className={"skrepka"}/>
            <AlternateEmailRoundedIcon className={"maildog"}/>
        </motion.div>
    )
}

const ButtonSend = ()=>{
    const [scope,animate] = useAnimate()

    useEffect(()=>{
            animate(scope.current, {scale:2})
            setTimeout(()=>{
                animate(scope.current, {scale:1})
            },1000)
    }, [animate, scope])

    return (
        <motion.button  ref={scope}>
            <SendRoundedIcon className='icon-send'/>
        </motion.button>
    )
}


export default function Input() {
    return (
        <motion.div initial={{width: 0}} animate={{width: '60%'}} className="inputAi">
            <LeftIcons/>
            <motion.input placeholder={"Введите свой запрос"}  initial={{width: 0}} animate={{width: '75%'}}/>

            <ButtonSend/>
        </motion.div>

)
}