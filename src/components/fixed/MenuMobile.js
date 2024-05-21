import { Link } from "react-router-dom";

const MenuMobile = () => {
    return (
        <>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                      >Mozaik Prodavnica</Link>
                  </li>
                </ul>
            </div>
            <span>
                <img
                src="/assets/img/serb-lang.png"
                alt="Language"
                width="32px"
                height="32px"
                />
            </span>
        </>
    )
};
  
export default MenuMobile;