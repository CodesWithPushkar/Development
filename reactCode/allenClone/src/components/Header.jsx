import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
function Header(){
    return <div>
        <nav>
            <div className="nav-group">
                    <Link to={"/classoom"} className="nav-Link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/1280px-ALLEN_Career_Institute_logo.svg.png?20230622120943" alt="logo" className="nav-logo"/>
                    </Link>
                    <Link to={"/classoom"} className="nav-Link">Classoom Courses</Link>
                    <Link to={"/classoom"} className="nav-Link">Online Courses</Link>
                    <Link to={"/classoom"} className="nav-Link">Test Series</Link>
                    <Link to={"/classoom"} className="nav-Link">Result</Link>
                    <Link to={"/classoom"} className="nav-Link">Study Material</Link>
                    <Link to={"/classoom"} className="nav-Link">Scolarships</Link>
                    <Link to={"/classoom"} className="nav-Link">ALLEN E-Store</Link>
                    <Link to={"/classoom"} className="nav-Link">More</Link>
            </div>
            
            <div className="nav-group">
                    <Link to={"/classoom"} className="nav-Link">
                        <div className="nav-phone-logo-background">
                            <FontAwesomeIcon icon={faPhone} className="nav-logo-phone"/>
                        </div>
                        
                    </Link>
                    <Link to={"/classoom"} className="nav-Link nav-login">Login</Link> 
            </div>
                
                
            
        </nav>
    </div>
}

export default Header;