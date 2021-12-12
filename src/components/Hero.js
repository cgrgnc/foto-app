import React from 'react';
import "../styles/hero.scss";
import { Link as Linkt } from "react-scroll";
import cameraicon from "../assets/camera.png";
import Slider from './Slider';
import Slider2 from './Slider2';
import image1 from "../assets/1-guillermo-mota.jpeg";
import image2 from "../assets/2-pawel-czerwinski.jpeg";
import image3 from "../assets/3-xavier-coiffic.jpeg";
import image4 from "../assets/4-mike-van-den-bos.jpeg";
import image5 from "../assets/5-michael-mouritz.jpeg";
import image6 from "../assets/6-matt-seymour.jpeg";
import image7 from "../assets/7-paul-gaudriault.jpeg";
import image8 from "../assets/8-rodion-kutsaev.jpeg";





const Hero = (props) => {
    const artists = [
        {
        name: "Guillermo Mota",
        },
        {
            name: "Pawel Czerwinski",
        },
        {
            name: "Xavier Coiffic",
        },
        {
            name: "Mike van den Bos",
        },
        {
            name: "Micheal Mouritz",
        },
        {
            name: "Matt Seymour",
        },
        {
            name: "Paul Gaudriault",
        },
        {
            name: "Rodion Kutsaev",
        }
    
    ]

    const handleSubmit=()=>{

    }
    

    return (
        <div className='hero-main' id="hero-main">
            <div className="container">
            <div className="hero-body">
                <div className="header">
                    <Linkt to="hero-main" smooth={true} duration={1000} className='header-cat'>Home</Linkt>
                    <Linkt to="back-center" smooth={true} duration={1000} className='header-cat'>Contact</Linkt>
                    <Linkt to="socials" smooth={true} duration={1000} className='header-cat'>Socials</Linkt>
                </div>
                <div className="title head">xyz photogprahy</div>
                <div className="title2 head">Photographer</div>
                <div className="text head">My beautiful collection</div>
                <img src={cameraicon} alt="ico" className='cameraicon' />
                <Slider image1={image1} artist1={artists[0].name} image2={image2} artist2={artists[1].name} image3={image3} artist3={artists[2].name} image4={image4} artist4={artists[3].name}/>
                
                <div className="center">
                    <div className="title">photogprahy</div>
                    <div className="title2">Leidenschaft</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <Slider2 image1={image5} artist1={artists[4].name}  image2={image6} artist2={artists[5].name}  image3={image7} artist3={artists[6].name}  image4={image8} artist4={artists[7].name} />

            </div>
            <div className="back-center" id="back-center">
                <div className="center">
                        {/* <div className="title">photogprahy</div> */}
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
                    <div className="socials" id="socials">
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