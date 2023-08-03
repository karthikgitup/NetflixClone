import React from 'react'
import Nav from '../../components/nav/nav';
import './Homepg.css';
import Banner from "../../components/banner/Banner";
import Row from '../../components/row/Row';
import requests from '../../helpers/requests';

const Homepg = () => {
  return (
    <div className='homepg'>
        <div className='homepg-container'>
            <Nav />
            <Banner />
            <Row title="Trending Now" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>

        </div>
    </div>
  )
}

export default Homepg