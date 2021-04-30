import React, { useState }from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("metric");

        function convertFahrenheit(event){
            event.preventDefault();
            setUnit("imperial");
        }

        function convertCelsius(event){
            event.preventDefault();
            setUnit("metric");
        }

    if (unit === "metric"){

        return(
            <div className="TempConvert">
                <span className="unitCelsius">
                    <strong>{Math.round(props.tempCelsius)}</strong></span>
                    <span className="units">ºC{" "}| {" "}<a href="/" onClick={convertFahrenheit}>ºF</a></span>
            </div>
        );
    } else{
        let tempFahrenheit = (props.tempCelsius*9)/5+32;
            return(
                <div className="TempConvert">
                <span className="unitCelsius">
                    <strong>{Math.round(tempFahrenheit)}</strong></span>
                    <span className="units">ºC{" "}| {" "}<a href="/" onClick={convertCelsius}>ºF</a></span>
            </div>
            );
    }
}
