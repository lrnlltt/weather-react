import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday",
        "Saturday"
    ];
    let day = days[props.date.getDay()];
    let wholeHours = props.date.getHours();
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes(); 
    if (minutes < 10) {
        minutes = `0${minutes}`
    };
    if (hour < 10) {
        hour = `0${hour}`
    };

    let mid = "pm";
    if (wholeHours < 12) {
        mid = "am";
    }

    if(hour > 12) {
        hour =  hour - 12;
    }
    if(hour === 0) {
        hour = 12;
    }

    return ( `${day} ${hour}:${minutes} ${mid}` );
}