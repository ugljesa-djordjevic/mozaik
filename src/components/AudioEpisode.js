
const AudioEpisode = () => {
    return (
        <section className="episode-hero">
            <section className="newsletter-hero">
                <div className="episode-content animate__animated animate__zoomIn">
                    <h1>Slušajte naše audio podkast epizode</h1>
                    <h3>Prijavite se da dobijate naše nove epizode svakog petka u vaš e-mail inbox!</h3>
                </div>
            </section>
            <section className="episode-wrap">
            <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/episode/44nYXV3LOway5W3f0jCkyV?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </section>
        </section>
    )
};
  
export default AudioEpisode;