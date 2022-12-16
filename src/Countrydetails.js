import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from './Helper'

const imgCss = {
    width : "200px"
}

class Countrydetails extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        capitalName : null,
        result : null
      }
    }
    
   showData = async() =>{
       const location = this.props.router.location.state.result[0]
       const capitalName = location.capital
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalName}&appid=098a09015241f04cadb509bb98f67aa4&units=metri`
       const getCapitalWeather  = await axios.get(url)
    //    console.log(getCapitalWeather.data.weather[0]);
       this.setState({
        result : getCapitalWeather.data.weather[0]
       })
   }
    render() {
        const location = this.props.router.location
        const showData = location.state.result[0];
        // console.log(showData);
        return (
            <>
            <div className='container-fluid'>
                <ol>
                    <li>{showData.capital}</li>
                    <li>{showData.population}</li>
                    <li>{showData.latlng}</li>
                    <li>{<img src={showData.flags.svg} className = "img-thumbnail" style = {imgCss} alt="NA"></img>}</li>
                </ol>
            </div>
            
            <div className='container-fluid'>
            <button type="button" className="btn btn-outline-primary" onClick={this.showData}>Show Capital Data</button>
            </div>

                {
                     this.state.result && 
                    <div className='container'>
                        <ul className ="list-group">
                            <li >{this.state.result.description}</li>
                            <li >{this.state.result.id}</li>
                            <li >{this.state.result.main}</li>
                            <li >{this.state.result.icon}</li>
                        </ul>
                         
                    </div>
                }
            
                                  


            </>            
    )
  }
}

export default withRouter(Countrydetails);
