import { useState } from 'react';
import prezentacija1 from '../img/SPA_DL_Refactoring_Adjustment.pptx';
import prezentacija1Cover from '../img/prezentacija1.png';

const Prezentacije = () => {
  const [hover, setHover] = useState(null);

  return (
    <>
      <section className="newsletter-hero">
        <div className="episode-content animate__animated animate__zoomIn">
          <h1>Naše Prezentacije</h1>
          <h3>Pogledajte blize prezentacije koje smo koristili na nasim predavanjima</h3>
        </div>
      </section>

      <div className="black-background" style={{width: "100%", backgroundColor: "#313131", color: "#fff", borderBottom: "2px solid #000" }}>
        <div className="container d-flex justify-content-center align-items-center flex-wrap" style={{ padding: "5rem 0" }}>
          {[...Array(4)].map((el, i) => {
            const presIndex = i + 1;
            return (
              <a href={prezentacija1} key={presIndex} style={{position: "relative"}} onMouseEnter={() => setHover(presIndex)} onMouseLeave={() => setHover(null)}>
                <input type="image" style={{ margin: "0 2rem 2rem 0" }} src={prezentacija1Cover} alt="Prezentacija Backi Petrovac" width="500" />
                <div className={`download-overlay ${hover !== presIndex ? 'd-none': ''}`}>
                <span className="material-symbols-outlined" style={{ fontSize: "5rem" }}>
                  download
                </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <section className="newsletter-hero">
        <div className="episode-content animate__animated animate__zoomIn">
            <h1>Nas newsletter</h1>
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
      
    </>
    )
  };
  
  export default Prezentacije;