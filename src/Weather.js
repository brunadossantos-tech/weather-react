import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";

export default function Weather(props){
    return(
        <div className="Weather">
        <h2 className="currentCity">
            <strong>
            <i className="fas fa-map-marker-alt"></i>
            <span className="city">
            {props.data.city}
            </span>
            </strong>
            <span className="currentTime">
                <br />
                <Date date={props.data.date} />
            </span>
        </h2>
        <p className= "specifications">
            <span className="simbol">
            <img src={props.data.icon} alt={props.data.description}/>
            </span>
            <span className="temperature">{props.data.temp}</span>
            <Temperature units={props.data.temp} />
            
            <div className="sky">{props.data.description}</div>
        </p>
        <div className="main-card-tex">
            <div className="description">
            <div className="row">
                <div className="col-6">
                    <br />
        
                    Feels:<span>{Math.round(props.data.feelslike)}</span>ºC{" "}
                 </div>   
                <div className="col-6">
                    <br />
                    Humidity: <span>{Math.round(props.data.humidity)}</span>%{" "}
                    <br />
                    Wind: <span id="wind">{Math.round(props.data.wind)}</span>km/h{" "}
                </div>
          </div>
        </div>
        </div> 
    </div>
    );
}
        