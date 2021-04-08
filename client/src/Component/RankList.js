import React from "react";

const axios = require('axios')


class RankList extends React.Component {
  render() {
    const score = async () => {
      try {
          return await axios.get('http://localhost:5000/score')
      }catch(err){
          console.log(err);
      }
   }

    const score_list = score()

    console.log(score_list)
  
  }
}


export default RankList;