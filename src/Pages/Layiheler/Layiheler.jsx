import React from 'react'
import "./Layiheler.css"
import Logo from "../../Images/salinaka.png"
import LogoShop from "../../Images/myshopping.png"
import Todolist from "../../Images/todolist.jpg"
import Turbo from "../../Images/turbo1.webp"
import country from "../../Images/counry.avif"

import { motion } from "framer-motion"


const container = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}


function Layiheler() {
    return (
        <>
            <h1 className='alala' style={{ textAlign: "center", fontWeight: "600" }}>Layihələr</h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='layihe'>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="layiheCenter">
                    <motion.div
                        variants={item}
                        className="layiheCart">
                        <a target='_blank' href="https://salinaka.netlify.app/">
                            <div className="layiheImg">
                                <img src={Logo} />
                            </div>
                            <div className='layiheText'><p>Salinaka</p></div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="layiheCart">
                        <a target='_blank' href="https://myshoppingisi.netlify.app">
                            <div className=" layiheImg layiheImgmy">
                                <img src={LogoShop} />
                            </div>
                            <div className='layiheText'><p>Myshopping</p></div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="layiheCart">
                        <a target='_blank' href="https://todolistisi.netlify.app">
                            <div className="layiheImg">
                                <img src={Todolist} />
                            </div>
                            <div className='layiheText'><p>Todo list</p></div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="layiheCart">
                        <a target='_blank' href="https://turboazisi.netlify.app">
                            <div className="layiheImg turbo">
                                <img src={Turbo} />
                            </div>
                            <div className='layiheText'><p>Turbo.az</p></div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="layiheCart">
                        <a target='_blank' href="https://countryisi.netlify.app/">
                            <div className="layiheImg turbo">
                                <img src={country} />
                            </div>
                            <div className='layiheText'><p>Countries</p></div>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Layiheler