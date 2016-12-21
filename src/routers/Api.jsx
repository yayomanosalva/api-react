import React from 'react'

class Api extends React.Component {
   /*
   constructor() {
        super()
    }
   */
    
   render() {
      return (
         <div>
            <h1>Api...</h1>
         </div>
      )
   }
}

export default Api;

//import axios from 'axios'
/*
class Api extends React.Component {
    constructor() {
        super()
        this.states = {
            seasons: []
        }
    }
    
    _fetchData() {
        var instance = axios.create({
            baseURL:'http://api.football-data.org/v1/fixtures?timeFrame=n1',
            timeout: 1000,
            headers: {'X-Auth-Token': 'be8cba0f4fae4446b2a06dc161e6c30a'}
        });

        instance.get('/soccerseasons?season=2015').then((seasons) => {
            this.setState({
                seasons: seasons.data
            },
            (error) => {
                console.log(error);
            })
        })
    }

    ComponentDidMount() {
        this._fetchData()
    }

    render() {
      return (
         <ul>
            {this.state.seasons.map(function(season){
                return  <li key={season.id + season.caption}>
                            {season.caption}
                </li>
            })}
        </ul>
      )
   }
}

export default Api;*/