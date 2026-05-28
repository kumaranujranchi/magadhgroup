import React from "react";
import videoFile from "../../../../assets/video/homepage-video-1.mp4";

const Video = () => {
    return (
        <div className="video__area-direct">
            <video 
                src={videoFile} 
                loop
                muted
                autoPlay
                playsInline
                className="video-direct-player"
            />
            <div className="video__area-overlay"></div>
            <div className="container video__area-content-container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="video__area-content">
                            <span className="subtitle">BUILDING THE FUTURE</span>
                            <h2>We Deliver Quality Construction Materials & Services</h2>
                            <p>Magadh Group represents three decades of trust, excellence, and premium distribution across Eastern India.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Video;