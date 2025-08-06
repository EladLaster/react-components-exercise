import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    const spams = []
    for(let i = 0 ;i<500;i++)
        spams.push(<Spam key={i} />);
    return spams;
}

export default Spamalot

