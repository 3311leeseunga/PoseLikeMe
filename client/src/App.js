import  { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import  RankList  from './Component/RankList';
const axios = require('axios')


class App extends Component {
    render() {
      const score = async () => {
        try{
  
          let params = {
            
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
        return({
          
        })
     }

    const score_list = score()

  
  }
}

export default App;