import React from "react";
import "./MainPage.css";

function MainPage(){
  return(
      <main id ={"HomeContainer"}>
            <div className = 'container'>
                <span className ="neon">SWYB</span>
                <h6 className = "flux">Speak with your body</h6>
                <div className="button-group">
                  <a href="/game-start">START</a>
                  <a href="/how-to-use">HOW TO USE</a>
                </div>
            </div>
      </main>
  );
}
export default MainPage;