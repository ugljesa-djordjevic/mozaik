import { Link, useLocation } from "react-router-dom";

const Menu = () => {

  const location = useLocation();
  const { pathname } = location;
    return (
      <>
        <ul className="nav navbar-nav flex-row justify-content-around mr-auto">
              <li className="nav-item">
            <Link className={ "nav-link " + (pathname === '/' ? "active" : "") } to="/">Početna</Link>
              </li>
              <li className="nav-item">
                <Link className={ "nav-link " + (pathname === '/audio-podcast' ? "active" : "") } to="/audio-podcast">Audio-Podkast</Link>
              </li>
              <li className="nav-item">
                <Link className={ "nav-link " + (pathname === '/video-podcast' ? "active" : "") } to="/video-podcast">Video-Podkast</Link>
              </li>
              <li className="nav-item">
                <Link className={ "nav-link " + (pathname === '/aktivnosti' ? "active" : "") } to="/aktivnosti">Aktivnosti</Link>
              </li>
              <li className="nav-item">
                <Link className={ "nav-link " + (pathname === '/prezentacije' ? "active" : "") } to="/prezentacije">Prezentacije</Link>
              </li>
              <li className="nav-item disabled">
                <Link className="nav-link disabled" to="/prodavnica">Mozaik Prodavnica</Link>
              </li>
            </ul>
      </>
    )
};
  
export default Menu;