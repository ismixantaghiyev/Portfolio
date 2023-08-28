import React from 'react'
import "./ImgAndAbout.css"
import Logo from "../../Images/me2.jpg"
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import cv from "../../files/Ismikhan-Taghiyev.pdf"


function ImgAndAbout() {
    return (
        <div className='imgAndAbout'>
            {/* <div className='imgMe'>
                <img src={Logo} />
            </div> */}
            <div class="card card0">
                <div class="border">
                    <h2>Ismixan Tağıyev</h2>
                    <div class="icons">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        {/* <i class="fa fa-facebook" aria-hidden="true"></i> */}
                    </div>
                </div>
            </div>
            <div className='about'>
                {/* <h1>Ismixan Taghiyev</h1> */}
                <h2>Front-end Developer</h2>
            </div>
            {/* <div className="icons">
                <a href="https://www.instagram.com/tagiyevis/"><AiOutlineInstagram style={{fontSize:"30px"}}/></a>
                <a href="https://wa.me/+994555160406?text=Salam"><BsWhatsapp style={{fontSize:"23px"}}/></a>
                <a href="https://github.com/ismixantaghiyev"><BsGithub style={{fontSize:"23px"}}/></a>
                <a href="/"><AiFillLinkedin style={{fontSize:"27px"}}/></a>
            </div> */}
            <div className="cv">
                <a href={cv} download>Mənim CV-im</a>
            </div>
        </div>
    )
}

export default ImgAndAbout