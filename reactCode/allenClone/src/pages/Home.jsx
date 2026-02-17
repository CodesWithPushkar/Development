import Header from '../components/Header';
import Card from '../components/Card';
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

function Home(props){
    return(
    <div>
      <BrowserRouter>
        <Header />
            <main>
                <div className="main-intro">
                    <div className="main-intro-content">
                        <p className="main-intro-heading">ALLEN Classroom Program</p>
                        <p className="main-intro-about">All India presence, 285+ classroom campuses</p>
                        <div className="main-into-input">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type="text" placeholder="Search by city name" /></div>
                    </div>
                </div>
                <div className="centers-cards">
                    <div className="all-centers">
                        <h2>All centers: {props.centers}</h2>
                    </div>
                    
                </div>
            </main>
      </BrowserRouter>
    </div>
  )
}

export default Home;