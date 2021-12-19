import React, { useEffect, useState } from 'react';
import "../styles/hero.scss";
import { Link as Linkt } from "react-scroll";
import cameraicon from "../assets/camera.png";
import Slider from './Slider';
import Slider2 from './Slider2';
import axios from "axios";

const Hero = (props) => {

    const handleSubmit=(e)=>{
       
    }
    const id = process.env.REACT_APP_API_KEY;

    const [imgurls, setImgurls] = useState([]);
    const [authors, setAuthors] = useState([]);

    
    useEffect(()=>{
        axios.get(`https://api.unsplash.com/collections/dddGXhnfvTo/photos/?query=''&client_id=${id}`).then(res=>{
            console.log(res.data);
            res.data.map(item=>{
                setImgurls(imgurls => [...imgurls, item.urls.regular]);
                setAuthors(authors => [...authors, item.user.name]);
            })
        
        })
    },[])
    

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
                {(()=>{
                    if(imgurls.length > 0){
                        return(<Slider image1={imgurls[0]} artist1={authors[0]} image2={imgurls[1]} artist2={authors[1]} image3={imgurls[2]} artist3={authors[2]} image4={imgurls[3]} artist4={authors[3]}/>)
                    }
                })()}
                <div className="center">
                    <div className="title">photogprahy</div>
                    <div className="title2">Leidenschaft</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                {(()=>{
                    if(imgurls.length > 0){
                        return(<Slider2 image1={imgurls[4]} artist1={authors[4]}  image2={imgurls[5]} artist2={authors[5]}  image3={imgurls[6]} artist3={authors[6]}  image4={imgurls[7]} artist4={authors[7]} />)
                    }
                })()}
                

            </div>
            <div className="back-center" id="back-center">
                <div className="center">
                        <div className="title2">Contact</div>
                        <form onSubmit={handleSubmit} action="https://formspree.io/f/xbjwjbok" method='POST'>
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