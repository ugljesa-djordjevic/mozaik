import { Link } from "react-router-dom";
import bgIllustration from "../../img/contact-illustration.svg";
import instaLogo from "../../img/insta-logo.png";
import tikTokLogo from "../../img/tiktok-logo.png";
import facebookLogo from "../../img/facebook-logo.svg";

const Footer = () => {
    return (
      <footer className="footer-wrap white-background" style={{ height: '300px' }}>
        <img className="footer-bg" src={bgIllustration} alt="Footer image" width="500" height="auto"/>
        <div className="footer">
          <div className="footer-item-wrap">
            <div className="footer-top">
                <div>
                <h4>Lokacija</h4>
                <div className="locations">
                  <div className="col">
                    <div className="address">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      <div className="location">
                        <span>Srbija / Beograd</span>
                        <p>Udruženje građanja za mentalnu edukaciju "Mozaik"</p>
                        <p>Breza 3, Čukarica</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4>Zapratite nas na društvenim mrežama</h4>
                <div className="socs-wrap">
                  <div className="socs">
                    <Link className="instagram" to="https://www.instagram.com/braverypodcast/" target="_blank" rel="noopener noreferrer">
                      <img src={instaLogo} alt="Instagram logo" width="20" height="20" loading="lazy"/>
                    </Link>
                    <Link className="tiktok" to="https://www.instagram.com/braverypodcast/" target="_blank" rel="noopener noreferrer">
                      <img src={tikTokLogo} alt="Instagram logo" width="20" height="20" loading="lazy"/>
                    </Link>
                    <Link className="facebook" to="https://www.instagram.com/braverypodcast/" target="_blank" rel="noopener noreferrer">
                      <img src={facebookLogo} alt="Instagram logo" width="20" height="20" loading="lazy"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-item-wrap">
            <div className="footer-bottom">
              <p>Mozaik &copy; 2023 Sva prava zadržana</p>
            </div>
          </div>
        </div>
      </footer>
    )
};
  
export default Footer;