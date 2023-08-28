import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./Scroll.css"
import Haqqimda from '../../Pages/Haqqimda/Haqqimda'
import Layiheler from '../../Pages/Layiheler/Layiheler'
import Elaqe from '../../Pages/Elaqe/Elaqe'

function Scroll() {
    return (
        <div className='scroll'>
            <Routes>
                <Route path="/" element={<Haqqimda />} />
                <Route path="Layiheler" element={<Layiheler />} />
                <Route path="Elaqe" element={<Elaqe />} />
            </Routes>
        </div>
    )
}

export default Scroll