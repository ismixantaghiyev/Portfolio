import React from 'react'
import "./Elaqe.css"
import wp from "../../Images/wp2.webp"
import gmail from "../../Images/gmail.png"
import tg from "../../Images/tel.png"
import { motion } from "framer-motion"

const containerelaqe = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const itemelaqe = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}


function Elaqe() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='elaqe'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerelaqe}
                className="elaqeContainer">
                <motion.div
                variants={itemelaqe}
                className="elaqeItem">
                    <div className="elaqeName">
                        <a target='_blank' href="https://wa.me/+994555160406?text=Salam"><h2>WhatsApp </h2></a>
                    </div>
                    <div className="elaqeImg">
                        <img src={wp} alt="wp" />
                    </div>
                </motion.div>
                <motion.div
                variants={itemelaqe}
                className="elaqeItem">
                    <div className="elaqeName">
                        <a target='_blank' href="mailto:ismikhan@div.edu.az"><h2>Email</h2></a>
                    </div>
                    <div className="elaqeImg">
                        <img src={gmail} alt="wp" />
                    </div>
                </motion.div>              
                <motion.div
                variants={itemelaqe}
                className="elaqeItem">
                    <div className="elaqeName">
                        <a target='_blank' href=""><h2>Telegram </h2></a>
                    </div>
                    <div className="elaqeImg">
                        <img src={tg} alt="wp" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Elaqe