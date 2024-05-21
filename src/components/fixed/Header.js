import Menu from "./Menu";
import mainLogo from '../../img/Mozaik.png';
import serbianFlag from '../../img/serb-lang.png';

const Header = () => {
    return (
        <header className="menu-header">
          <nav
            className="page-menu navbar justify-content-around align-items-center navbar-dark"
          >
            <div className="page-logo mt-2">
              <a href="/"
                ><img
                  src={mainLogo}
                  alt="Mozaik logo"
                  width="200px"
                  height="100px"
              /></a>
            </div>
            <Menu />
            <span className="language-selector d-flex align-items-center">
              <img
                src={serbianFlag}
                alt="Language flag"
                width="40px"
                height="20px"
                className="material-symbols-outlined"
              />
              <span className="material-symbols-outlined">expand_more</span>
              <span className="d-none material-symbols-outlined">expand_less</span>
            </span>
          </nav>
        </header>
    )
};
  
export default Header;
