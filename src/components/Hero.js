import React from 'react';
import "../styles/hero.scss";
import pentagon from "../assets/pentagon.png";
import conor from "../assets/conor.jpg";
import nizar from "../assets/nizar.jpg";
import mak from "../assets/mak.jpg";
import saffu from "../assets/saffu.jpg";

const Hero = () => {
    const handleSubmit=()=>{

    }
    return (
        <div className='hero-main'>
            <div className="container">
            <div className="hero-body">
                <div className="title head">photogprahy</div>
                <div className="title2 head">Photographer</div>
                <div className="text head">My beautiful collection</div>
                <i className="fas fa-chevron-down icon head"></i>
                <div className="images">
                    <img src={conor} alt="img" />
                    <img src={nizar} alt="img" />
                </div>
                <div className="center">
                    <div className="title">photogprahy</div>
                    <div className="title2">Leidenschaft</div>
                    <div className="text">My beautiful collection</div>
                </div>
                <div className="images">
                    <img src={saffu} alt="img" />
                    <img src={mak} alt="img" />
                </div>
                
            </div>
            <div className="back-center">
                <div className="center">
                        <div className="title">photogprahy</div>
                        <div className="title2">Contact</div>
                        <form onSubmit={handleSubmit} action="https://formsubmit.co/cagri.genc@yandex.com" method='POST'>
                            <div className="envelop">
                                <i className="far fa-envelope"></i>
                            </div>
                            <input type="text" name="name" placeholder='Name (required)' required/>
                            <input type="text" name="email" placeholder="Return address (required)" required/>
                            <input type="text" name="topic" placeholder="Topic (required)" required/>
                            <textarea placeholder="Subject (required)" name="text" required></textarea>
                            <button className='button' type='submit'>Send</button>
                        </form>
                </div>
            </div>
            <div className="hero-body">
                <div className="center">
                    <div className="socials">
                        <div className="text text-footer">My Socials</div>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.usplash.com"><i className="fab fa-unsplash"></i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <div className="text email">created for portfolio i.cagrigenc@gmail.com</div>
                    
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Hero;