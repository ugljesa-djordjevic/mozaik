
const AudioPodcast = () => {
    return (
        <section className="episode-hero">
            <section className="newsletter-hero">
                <div className="episode-content animate__animated animate__zoomIn">
                    <h1>Gledajte naše video podkast epizode</h1>
                    <h3>Subscribe se na nas Youtube kanal!</h3>
                </div>
            </section>
            <section className="episode-wrap">
                <iframe width="840" height="472" src="https://www.youtube.com/embed/iw3T4NW8OzU?si=p4veSrymLAGkBJGp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
        </section>
    )
};
  
export default AudioPodcast;