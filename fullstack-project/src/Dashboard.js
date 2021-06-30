import React from 'react';
import Header from './Header';
import CountryWeatherSection from './CountryWeatherSection';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const Dashboard = () => {
    return(
        <div className="page">
            <Header/>
            <CountryWeatherSection/>
        </div>
    );
}

export default Dashboard;