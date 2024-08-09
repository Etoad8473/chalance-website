import React from "react"

export const Home = ({set})=>{
    return(
    <div className="page home">  

      <div>
        <h1>Chalance!</h1>
      </div>      
      {/* <iframe 
        width="400" 
        height="300" 
        src="https://www.youtube.com/embed/UF8m3vNDezY?si=9yK0ieN6xwdXoxXc" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe> */}
      <div>
        <button className="start-btn" onClick={()=>{set(true)}}>Begin test</button>
      </div>
     
    </div>
    )
}