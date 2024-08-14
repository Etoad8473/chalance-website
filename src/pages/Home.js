import React from "react";
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

export const Home = ({set})=>{
    return(
    <div className="page home">  
      <Header/>
      <div>
        <h1>CHALANCE!</h1>
        <p>It's everything I ever could've imagined</p>
      </div>      
      <div>
        <button className="start-btn" onClick={()=>{set(true)}}>Begin test</button>
      </div>
      <Footer/>
    </div>
    )
}