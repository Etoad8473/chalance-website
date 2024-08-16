import React from "react";
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { useNavigate } from "react-router-dom";

export const Home = ()=>{

  const navigateTo = useNavigate();

    return(
    <div className="page home">  
      <Header/>
      <div>
        <h1>CHALANCE!</h1>
        <p>It's everything I ever could've imagined</p>
      </div>      
      <div>
        <button className="start-btn" onClick={()=>{navigateTo('/test')}}>Begin test</button>
      </div>
      <Footer/>
    </div>
    )
}