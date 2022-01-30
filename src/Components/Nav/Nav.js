import "./Nav.css";
import netflixlogo from '../../images/netflix-logo.png';
import netflixavatar from '../../images/netflix-avatar.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();
    const [shownav, setShownav] = useState(false);
    const animateNav = () => {
        if (window.scrollY > 100) {
            setShownav(true);
        } else {
            setShownav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', animateNav);
        return () => {
            window.removeEventListener('scroll', animateNav);
        }
    }, [])

    const routeToHome = () => {
        navigate("/",{replace : false})
    }

    const routeToProfile = () => {
        navigate('/profile',{replace: false});
    }
    return (
        <div className={`nav ${shownav && 'nav-black'}`}>
            <div className="nav-content">
                <img src={netflixlogo} alt="netflixlogo" className="nav-logo" onClick={routeToHome} />
                <img src={netflixavatar} alt="avatar" className="nav-avatar" onClick={routeToProfile} />
            </div>
        </div>
    )
}

export default Nav
