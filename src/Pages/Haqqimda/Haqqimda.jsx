import React from 'react'
import "./Haqqimda.css"
import { TiTickOutline } from 'react-icons/ti';
import { motion } from "framer-motion"


const containerabout = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const itemabout = {
    hidden: {
        opacity: 0,
        translateY: 20
    },
    visible: {
        opacity: 1,
        translateY: 0
    }
}


function Haqqimda() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='about'>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerabout}
                className="containerAbout">
                <motion.div
                    variants={itemabout}
                    className="haqqimda">
                    <h1>Haqqımda</h1>
                    <p>Mən Frontend Developerəm. Kodlarla işləməyi sevirəm. Yeni layihələr və ya bitmiş layihə üzərində işləyə bilirəm. Qrupla işləməyə üstünlük verirəm. Hazırda mən frontend bacarıqlarımı daha da təkmilləşdirirəm.</p>
                    <hr style={{margin:"0px"}} />
                </motion.div>
                <div className='education'>
                    <motion.div
                        variants={itemabout}
                        className="tehsilim">
                        <h1>Təhsilim</h1>
                        <p> Azərbaycan Memarlıq və İnşaat Universiteti </p>
                        <p><i>İnformasiya Texnologiyaları  </i> </p>
                        <p>2021-2025</p>
                    </motion.div>
                    <motion.div
                        variants={itemabout}
                        className='div'>
                        <h3>Div academy</h3>
                        <p><i>Front-end Developer</i></p>
                        <p>16.03.2023-16.09.2023</p>
                    </motion.div>
                </div>
                <motion.div
                    variants={itemabout}
                    className="bacariqlar">
                <hr />
                    <h1>Bacarıqlarım</h1>
                    <div className="grid">
                        <div className='bac'><TiTickOutline style={{ color: "blue" }} /><p> HTML & CSS</p></div>
                        <div className='bac'><TiTickOutline style={{ color: "blue" }} /><p>Javascript</p></div>
                        <div className='bac'><TiTickOutline style={{ color: "blue" }} /><p>React</p></div>
                        <div className='bac'><TiTickOutline style={{ color: "blue" }} /><p>jQuery</p></div>
                        <div className='bac'><TiTickOutline style={{ color: "blue" }} /><p>Bootstrap</p></div>
                        <div className='bac'><TiTickOutline style={{ color: "blue" }} /><p>Frameworks and Libraries</p></div>
                    </div>
                    <hr />
                </motion.div>
                <div className="diller">
                    <h1>Dillər</h1>
                    <div>
                        <ul>
                            <li><p>Azərbaycan  <span style={{ color: "blue" }}>(</span><span style={{ color: "black" }}>Ana dili</span><span style={{ color: "blue" }}>)</span></p></li>
                            <li> <p>İngilis  <span style={{ color: "blue" }}>(</span><span style={{ color: "black" }}>Texniki</span><span style={{ color: "blue" }}>)</span></p></li>
                        </ul>

                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Haqqimda