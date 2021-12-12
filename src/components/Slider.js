import React, {useEffect} from 'react';
import $ from "jquery";

export default function Slider(props) {

    function slideNext() {
        var inWrap = $(".inner-wrapper");
        inWrap.animate({ left: "-200%" }, 900, function () {
          inWrap.css("left", "-100%");
          $(".slide").last().after($(".slide").first());
        });
    }
    useEffect(() => {
        
        const interval =  setInterval(() => {
            slideNext();
          }, 5000)
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='carousel'>
            <div className="slider-wrapper">
                <div className="inner-wrapper">
                    <div className="slide">
                        <div className="image">
                            <img src={props.image1} alt="img" />
                            <div className="cc-text">Photo by {props.artist1}</div>
                        </div>
                        <div className="image">
                            <img src={props.image2} alt="img" />
                            <div className="cc-text">Photo by {props.artist2}</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image">
                            <img src={props.image3} alt="img" />
                            <div className="cc-text">Photo by {props.artist3}</div>
                        </div>
                        <div className="image">
                            <img src={props.image4} alt="img" />
                            <div className="cc-text">Photo by {props.artist4}</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image">
                            <img src={props.image1} alt="img" />
                            <div className="cc-text">Photo by {props.artist1}</div>
                        </div>
                        <div className="image">
                            <img src={props.image2} alt="img" />
                            <div className="cc-text">Photo by {props.artist2}</div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image">
                            <img src={props.image3} alt="img" />
                            <div className="cc-text">Photo by {props.artist3}</div>
                        </div>
                        <div className="image">
                            <img src={props.image4} alt="img" />
                            <div className="cc-text">Photo by {props.artist4}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
