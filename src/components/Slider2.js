import React, {useEffect} from 'react';
import $ from "jquery";
import "../styles/slider2.scss";

export default function Slider2(props) {

    function slideNext2() {
        var inWrap = $(".inner-wrapper2");
        inWrap.animate({ left: "-200%" }, 900, function () {
          inWrap.css("left", "-100%");
          $(".slide2").last().after($(".slide2").first());
        });
    }
    useEffect(() => {
        
        const interval2 =  setInterval(() => {
            slideNext2();
          }, 5000)
        
        return () => clearInterval(interval2);
    }, []);
    return (
        <div className='carousel2'>
            <div className="slider-wrapper2">
                <div className="inner-wrapper2">
                    <div className="slide2">
                        <div className="image2">
                            <img src={props.image1} alt="img"/>
                            <div className="cc-text">Photo by {props.artist1}</div>
                        </div>
                        <div className="image2">
                            <img src={props.image2} alt="img" />
                            <div className="cc-text">Photo by {props.artist2}</div>
                        </div>
                    </div>
                    <div className="slide2">
                        <div className="image2">
                            <img src={props.image3} alt="img" />
                            <div className="cc-text">Photo by {props.artist3}</div>
                        </div>
                        <div className="image2">
                            <img src={props.image4} alt="img" />
                            <div className="cc-text">Photo by {props.artist4}</div>
                        </div>
                    </div>
                    <div className="slide2">
                        <div className="image2">
                            <img src={props.image1} alt="img" />
                            <div className="cc-text">Photo by {props.artist1}</div>
                        </div>
                        <div className="image2">
                            <img src={props.image2} alt="img" />
                            <div className="cc-text">Photo by {props.artist2}</div>
                        </div>
                    </div>
                    <div className="slide2">
                        <div className="image2">
                            <img src={props.image3} alt="img" />
                            <div className="cc-text">Photo by {props.artist3}</div>
                        </div>
                        <div className="image2">
                            <img src={props.image4} alt="img" />
                            <div className="cc-text">Photo by {props.artist4}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
