import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
      super(props)
        
      this.state = {
        countryName : null,
        isnavigate : false, 
        result : []
      }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        const name = e.target.value
        this.setState({
            countryName : name
        })
    }

    handleResult = async(e)=>{
        e.preventDefault();  
        
            try {

                const url = `https://restcountries.com/v2/name/${this.state.countryName}?fullText=true`     
                const getCountryName = await axios.get(url) 
                this.setState({
                    result : getCountryName.data,
                    isnavigate : true
                }) 
            } catch (error) {
               console.log(error);
               alert("Something went wrong happened !!!") 
            }
    
    }

  render() {
    return (
      <>
        <div>&nbsp;</div>

        <div className="container-fluid">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Enter Country
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name of country"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="container-fluid">
            <button type="button" className="btn btn-success" onClick={this.handleResult}>
            Submit
            </button>
        </div>

        <div>
           {
            this.state.isnavigate && <Navigate to="/Countrydetails" state={{result : this.state.result}}  />
           } 
        </div>
      </>
    );
  }
}


