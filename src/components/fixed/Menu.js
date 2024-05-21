import { Link } from "react-router-dom";

const Menu = () => {
    return (
      <>
        <ul className="nav navbar-nav flex-row justify-content-around mr-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Početna</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audio_podcast">Audio-Podkast</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/video_podcast">Video-Podkast</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aktivnosti">Aktivnosti</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prezentacije">Prezentacije</Link>
              </li>
              <li className="nav-item disabled">
                <Link className="nav-link disabled" to="/prodavnica">Mozaik Prodavnica</Link>
              </li>
            </ul>
      </>
    )
};
  
export default Menu;