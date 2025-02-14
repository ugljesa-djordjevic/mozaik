import { Link } from 'react-router-dom';
import epizoda1 from "../img/video-epizoda-1.webp";
import epizoda2 from "../img/video-epizoda-2.webp";
import epizoda3 from "../img/video-epizoda-3.webp";
import video1 from "../img/bravery_pod_episode_2.mp4";
import { useState, useEffect } from 'react';

const VideoPodcast = () => {
    const [ hover, setHover ] = useState(false);

    function startPreview() {
        const video = document.querySelector("video");
        setHover(true); 
        video.muted = true;
        video.currentTime = 1;
        video.playbackRate = 0.5;
        video.play();
        // setTimeout(() => stopPreview(), 5000);
    }

    function stopPreview() {
        const video = document.querySelector("video");
        setHover(false);
        video.currentTime = 0;
        video.playbackRate = 1;
        video.pause();
    }


    return (
        <>
            <section className="newsletter-hero">
                <div className="episode-content animate__animated animate__zoomIn">
                    <h1>Gledajte naše video podkast epizode</h1>
                    <h3>Subscribe se na nas Youtube kanal!</h3>
                    <img style={{ position: "absolute", height: "100px", left: "-30px", top: "90px"}} src="/assets/img/5df41a8975e33646a26d0e3c_arrow 01.png" alt=""/>
                </div>
            </section>
            <section className="audio-podcast-content white-background">
                <div className="content-container d-flex justify-content-center gap-5 flex-wrap">

                    <Link to="/video-episode-1" onMouseEnter={() => startPreview()} onMouseLeave={() => stopPreview()}>
                        <div className="video-item-wrap">
                            <img style={{ display: hover ? 'none' : 'block'}} src={epizoda1} alt="Video podcast number 1" />
                            <video style={{ display: hover ? 'block' : 'none'}}>
                                <source src={video1} />
                            </video>
                        </div>
                    </Link>

                    
                        
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda2} alt="Video podcast number 2" />
                        </div>
                    </Link>
                        
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda3} alt="Video podcast number 3" />
                        </div>
                    </Link>

                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda1} alt="Video podcast number 1" />
                        </div>
                    </Link>
                        
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda2} alt="Video podcast number 2" />
                        </div>
                    </Link>
                        
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda3} alt="Video podcast number 3" />
                        </div>
                    </Link>

                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda2} alt="Video podcast number 2" />
                        </div>
                    </Link>
                        
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda3} alt="Video podcast number 3" />
                        </div>
                    </Link>
                    
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda2} alt="Video podcast number 2" />
                        </div>
                    </Link>
                        
                    <Link to="/video-episode-1">
                        <div className="video-item-wrap">
                            <img src={epizoda3} alt="Video podcast number 3" />
                        </div>
                    </Link>
                    
                </div>
            </section>
        </>
    );
};
  
export default VideoPodcast;