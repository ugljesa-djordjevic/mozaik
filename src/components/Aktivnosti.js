import { Link } from "react-router-dom";
import bg1 from '../img/becej-aktivnosti.JPG';
import bg2 from '../img/sela-aktivnosti-post1.jpg';
import bg3 from '../img/sela-aktivnosti-post2.jpg';

const Aktivnosti = () => {
  return (
    <>
      <section className="newsletter-hero">
        <div className="episode-content animate__animated animate__zoomIn">
          <h1>Naše Aktivnosti</h1>
          <h3>Saznajte više o tome šta mi radimo i čime se bavimo</h3>
        </div>
      </section>

      <div className="searchbar black-background">
        <label htmlFor="search">
          <input type="text" id="search" placeholder="Search..." />
          <span className="material-symbols-outlined">
            search
          </span>
        </label>
      </div>

      <div className="black-background" style={{width: "100%", backgroundColor: "#313131", color: "#fff", borderBottom: "2px solid #000" }}>
        <div className="container blog-container" style={{ padding: "15rem 2rem", width: "100%" }}>

          <Link to="/aktivnosti" style={{ position: "relative", width: "30%", height: "500px", color:"#000", marginBottom: "2rem" }}>
            <div>
              <div style={{ padding: "1rem 2.5rem", position: "absolute", left: "0", top: "230px", zIndex: "3", width: "100%", backgroundColor: "#FEEECD", borderRadius: "10px" }}>
                <p className="blog-category" style={{letterSpacing: "1px", fontSize: "1.25rem", fontWeight: "900"}}>Panel diskusija</p>
                <p className="blog-title" style={{fontSize: ".75rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <p className="blog-timestamp" style={{fontSize: ".75rem"}}>29. oktobar, 2023.</p>
              </div>
              <img className="blog-image" src={bg1} alt='' style={{width: "100%", height: "250px", position: "absolute", left:"0", top: "0", borderRadius: "10px"}}/>
              <div className="shapedividers_com-1"></div>
            </div>
          </Link>

          <Link to="/aktivnosti" style={{ position: "relative", width: "30%", height: "500px", color:"#000", marginBottom: "2rem" }}>
            <div>
              <div style={{ padding: "1rem 2.5rem", position: "absolute", left: "0", top: "230px", zIndex: "3", width: "100%", backgroundColor: "#FEEECD", borderRadius: "10px" }}>
                <p className="blog-category" style={{letterSpacing: "1px", fontSize: "1.25rem", fontWeight: "900"}}>Skolske radionice</p>
                <p className="blog-title" style={{fontSize: ".75rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <p className="blog-timestamp" style={{fontSize: ".75rem"}}>23. april, 2024.</p>
              </div>
              <img className="blog-image" src={bg2} alt='' style={{width: "100%", height: "250px", position: "absolute", left:"0", top: "0", borderRadius: "10px"}}/>
              <div className="shapedividers_com-1"></div>
            </div>
          </Link>
          
          <Link to="/aktivnosti" style={{ position: "relative", width: "30%", height: "500px", color:"#000", marginBottom: "2rem" }}>
            <div>
              <div style={{ padding: "1rem 2.5rem", position: "absolute", left: "0", top: "230px", zIndex: "3", width: "100%", backgroundColor: "#FEEECD", borderRadius: "10px" }}>
                <p className="blog-category" style={{letterSpacing: "1px", fontSize: "1.25rem", fontWeight: "900"}}>Predavanja</p>
                <p className="blog-title" style={{fontSize: ".75rem"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <p className="blog-timestamp" style={{fontSize: ".75rem"}}>12. maj, 2024.</p>
              </div>
              <img className="blog-image" src={bg3} alt='' style={{width: "100%", height: "250px", position: "absolute", left:"0", top: "0", borderRadius: "10px"}}/>
              <div className="shapedividers_com-1"></div>
            </div>
          </Link>


          <Link to="/aktivnosti">
            <button className="contact-button">
              <span>Klikni za jos blogova</span>
              <span className="material-symbols-outlined mt-1">
                arrow_selector_tool
              </span>
            </button>
          </Link>
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
  
  export default Aktivnosti;