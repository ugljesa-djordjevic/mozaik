import { Link } from 'react-router-dom';
import copySvg from "../../img/copy.svg";
import instaLogo from "../../img/insta-logo.png";
import tikTokLogo from "../../img/tiktok-logo.png";
import skSvg from "../../img/sk.svg";

const Contact = () => {
    return (
        <>
      {/* <Contact section start */}
      <section id="contact" className="contact-container black-background">
        <div className="contact-form d-flex align-items-center justify-content-around">
          <div className="contact-left">
            <div className="top-block">
              <h4>Imate pitanje za nas?</h4>
              <hr/>
              <div>
                <h1>Pošaljite <br /><span style={{ color: '#ececec' }}>nam</span> poruku!</h1>
              </div>
            </div>
            <div className="bottom-block">
              <div className="to-copy-email">
                <a href="mailto:edukacijamozaik@gmail.com" className="contact-email">edukacijamozaik@gmail.com</a>
                <b className="copyme-wrap">
                  <img src={copySvg} alt="" data-text="hello@phenomenon-studio.com" className="email_to_copy"/>
                </b>
              </div>
              <div className="social-links">
                <Link to="https://www.instagram.com/braverypodcast/" className="social-icon">
                  <img src={instaLogo} alt="Instagram logo" width="20" height="20" loading="lazy"/>
                  <span>Instagram</span>
                </Link>
                <Link to="https://www.tiktok.com/@braverypod?_t=8hAm4O2zio1&_r=1" className="social-icon">
                  <img src={tikTokLogo} alt="Instagram logo" width="20" height="20" loading="lazy"/>
                  <span>TikTok</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-right">
                <form action="https://mozaik.com/thank-you" method="post" autoComplete="off" className="contact-form" noValidate={false}>
              <div className="inputs-wrap">
                <label className="input-wrap" htmlFor="inpname">
                  <input type="text" id="inpname" placeholder=" " name="your-name" required autoComplete="on" data-max-length="40" data-patern="[A-Za-z]"/>
                  <span>Vase Ime <sup>*</sup></span>
                </label>
                <label className="input-wrap" htmlFor="inpemail">
                  <input type="email" id="inpemail" placeholder=" " name="your-email" required autoComplete="on" data-max-length="40" data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                  <span>Vas Email <sup>*</sup></span>
                </label>
              </div>
              <label className="input-wrap" htmlFor="inptext">
                <textarea placeholder=" " id="inptext" name="your-text" data-max-length="1000"></textarea>
                <span>Napisite sta nam zelite reci</span>
                <span className="counter" data-max="250">
                  <b>0</b>
                  /1000
                </span>
              </label>
              <div className="attach-wrap">
                <label htmlFor="attach">
                  <input type="file" id="attach" name="your-files" multiple/>
                  <img src={skSvg} alt=""/>
                  Attach file
                </label>
              </div>
              <div className="terms-label-wrap">
                <label htmlFor="input-terms">
                  <input type="checkbox" id="input-terms" name="terms" required/>
                  <span>
                    Slazem se sa vasim 
                    <Link to="https://phenomenonstudio.com/cookies-policy" target="_blank"> uslovima koriscenja</Link>
                  </span>
                </label>
              </div>
              <button className="contact-button">
                <span>Posalji</span>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
          
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Contact section end */}
        </>
    );
};
  
export default Contact;