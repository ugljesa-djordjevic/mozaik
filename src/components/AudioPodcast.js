import episode1 from '../img/epizoda-1.jpg';
import episode2 from '../img/epizoda-2.jpg';
import episode3 from '../img/epizoda-3.jpg';
import { Link } from 'react-router-dom';

const AudioPodcast = () => {
    return (
        <>
        <section className="newsletter-hero">
        <div className="episode-content animate__animated animate__zoomIn">
            <h1>Slušajte naše audio podkast epizode</h1>
            <h3>Prijavite se da dobijate naše nove epizode svakog petka u vaš e-mail inbox!</h3>
            <img style={{ position: "absolute", height: "100px", left: "-30px", top: "90px"}} src="/assets/img/5df41a8975e33646a26d0e3c_arrow 01.png" alt=""/>
        </div>
        <div className="newsletter-block">
          <form action="https://mozaik.com/thank-you" method="post" autoComplete="off" className="newsletter-form" noValidate={false}>
            <div className="newsletter-block-label">
              <label htmlFor="inpname" className="input-wrap">
                <input type="text" id="inpname" placeholder=" " name="your-name" required autoComplete="on" data-max-length="40" data-patern="[A-Za-z]"/>
                <span>Vase Ime</span>
              </label>
              <label htmlFor="inplname" className="input-wrap">
                <input type="text" id="inplname" placeholder=" " name="your-name" required autoComplete="on" data-max-length="40" data-patern="[A-Za-z]"/>
                <span>Vase Prezime</span>
              </label>
              <label htmlFor="inpemail" className="input-wrap">
                <input type="email" id="inpemail" placeholder=" " name="your-email" required autoComplete="on" data-max-length="40" data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                <span>Vas Email <sup>*</sup></span>
              </label>
              <button className="contact-button">
                <span>Posalji</span>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </form>
        </div>
        </section>
        <section className="audio-podcast-content white-background">
        
        <div className="content-container">

          <Link to="/audio-episode-1">
            <div className="item-wrap">
              <div className="item-picture">
                <img src={episode3} alt="Bravery logo" />
                <span className="material-symbols-outlined play-icon">play_circle</span>
              </div>
              <div className="item-description">
                <div className="item-meta-data">
                  <span><span className="material-symbols-outlined">calendar_month</span>February 15, 2024</span>
                  <span><span className="material-symbols-outlined">format_list_numbered</span>230</span>
                  <span><span className="material-symbols-outlined">timer</span>01:04:13</span>
                </div>
                <h3 className="item-title">Ti me ne spašavaš, ti me voliš | Bravery Pod</h3>
                <p>
                  U današnjoj epizodi slušamo o bipolarnom poremećaju, partnerskim odnosima, i TW suicidu                
                </p>
              </div>
            </div>
          </Link>

          <Link to="/audio-episode-1">
            <div className="item-wrap">
              <div className="item-picture">
                <img src={episode2} alt="Bravery logo" />
                <span className="material-symbols-outlined play-icon">play_circle</span>
              </div>
              <div className="item-description">
                <div className="item-meta-data">
                  <span><span className="material-symbols-outlined">calendar_month</span>February 01, 2024</span>
                  <span><span className="material-symbols-outlined">format_list_numbered</span>229</span>
                  <span><span className="material-symbols-outlined">timer</span>00:37:03</span>
                </div>
                <h3 className="item-title">Ishrana i kontrola- Gde je granica? | Bravery Pod</h3>
                <p>
                  Danas smo ugostili Lorjanu Bosin. Ona je personalni trener, savetnik za emotivno prejedanje. Slušaćemo o njenom iskustvu, sportskoj istoriji i izazovima moderne fitnes industrije, kao i o tome kako da izadjemo iz začaranog kruga kontrole.             
                </p>
              </div>
            </div>
          </Link>

          <Link to="/audio-episode-1">
            <div className="item-wrap">
              <div className="item-picture">
                <img src={episode1} alt="Bravery logo" />
                <span className="material-symbols-outlined play-icon">play_circle</span>
              </div>
              <div className="item-description">
                <div className="item-meta-data">
                  <span><span className="material-symbols-outlined">calendar_month</span>January 29, 2024</span>
                  <span><span className="material-symbols-outlined">format_list_numbered</span>228</span>
                  <span><span className="material-symbols-outlined">timer</span>00:40:39</span>
                </div>
                <h3 className="item-title">Izaberi da budeš Drugačiji | Bravery Pod</h3>
                <p>
                  Danas smo ugostili Anju, mladu studentkinju i aktivistkinju za mentalno zdravlje. Pridružite nam se u razgovoru koji će vas inspirisati i pokazati vam da kakva god situacija bila,uvek izaberete sebe...
                </p>
              </div>
            </div>
          </Link>

        </div>
        </section>
        </>
    )
};
  
export default AudioPodcast;