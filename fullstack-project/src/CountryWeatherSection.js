import axios from 'axios';
import React, {useState} from 'react';


const CountryWeatherSection = () => {
    const [city, setCity] = useState("");
    const [localTime, setLocalTime] = useState("");
    const [temperature, setTemperature] = useState("");
    const [timeZone, setTimeZone] = useState("");
    
    const getWeatherData = (city) => {
        console.log(city);
        setCity(city);
        axios({
            method: "GET",
            url: `http://api.weatherapi.com/v1/current.json?key=24a79b5245f342c1a2b73037213006&q=${city}&aqi=no`
            })
            .then((response) => {
                setTemperature(response.data.current["temp_c"]);
                const date = new Date(response.data.location["localtime_epoch"]*1000);
                setLocalTime(date.toLocaleTimeString());
                setTimeZone(response.data.location["tz_id"]);
            })
            .catch((error) => {
                console.log(error);
            });
    
    }
    
    return(
        <div className="container-fluid pr-5 pl-5 pt-5 pb-5">
            <div className="row">
                <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                    <div className="card grid-card is-card-dark hline">
                        <div className="card-heading">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Clima
                                <div className="text-x-large text-position">
                                    {temperature} °C
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                    <div className="card grid-card is-card-dark hline">
                        <div className="card-heading">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Ciudad Seleccionada
                                <div className="text-x-large text-position-b">
                                    {city}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 is-light-text mb-4">
                    <div className="card grid-card is-card-dark hline">
                        <div className="card-heading">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Ciudades Disponibles 
                                <ol>
                                     <li><button className="button-a is-dark-text-light" onClick={() =>{getWeatherData("London");}}>London</button></li>
                                   <li><button className="button-a is-dark-text-light" onClick={() =>{getWeatherData("Paris");}}>Paris</button></li>
                                    <li><button className="button-a is-dark-text-light" onClick={() =>{getWeatherData("Brazil");}}>Brazil</button></li>
                                </ol>                             
                            </div>
                        </div>
                    </div>
                </div>       
            </div>

            <div className="row">
                <div className="col-md-4 col-lg-3 is-light-text mb-4">
                    <div className="card grid-card is-card-dark">
                        <div className="card-heading mb-3">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Tareas Pendientes
                                <ol>
                                    <li>Ir al banco</li>
                                    <li>Revisar balance general</li>
                                    <li>Ajustar métricas de diseño</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-3 is-light-text mb-4">
                    <div className="card grid-card is-card-dark">
                        <div className="card-heading mb-3">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Hora
                                <div className="text-x-large">
                                    {localTime}
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>       
            </div>

            <div className="row">
                <div className="col-md-4 col-lg-3 is-light-text mb-4">
                    <div className="card grid-card is-card-dark">
                        <div className="card-heading mb-3">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Tareas Completadas
                                <div className="text-position-b">
                                    <ol>
                                        <li>Terminar la prueba</li>
                                        <li>Debuggear código</li>
                                        <li>Realizar pruebas unitarias</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-3 is-light-text mb-4">
                    <div className="card grid-card is-card-dark">
                        <div className="card-heading mb-3">
                            <div className="is-dark-text-light letter-spacing text-medium text-position">
                                Zona Horaria
                                <div className="text-x-medium text-position-b">
                                    {timeZone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    );
}

export default CountryWeatherSection;