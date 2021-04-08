import React, { useEffect, useState } from "react";

const axios = require('axios')

class InputScore extends React.Component {
  render() {
    const score = async () => {
      try{

        params = {          
          name: 'Blair',
          score: 200
        }

        await axios.post('http://localhost:5000/score', params)
                  .then((res)=>{
                    console.log(res)
                  });


      }catch(err){
          console.log(err);
      }
   }


  
  }
}


export default InputScore;