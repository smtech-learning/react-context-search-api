import React, { Component } from 'react';
import DisplayTemplate from './DisplayTemplate';

export default class Apicomponent extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        data: []
    }

    logthis = async (e) => {
        e.preventDefault();
        const enteredValue = e.target.elements.inputEmployee.value;
        console.log(enteredValue);

        const api_key = '846fc3aa81ed05e3047413d37975295d';
        const CORS = 'https://cors-anywhere.herokuapp.com/';
        const api_endpoint = `${CORS}https://www.food2fork.com/api/search?key=${api_key}&q=${enteredValue}%20breast&page=2`;
        fetch(api_endpoint).then(res => res.json()).then((data) => {
            this.setState({ data: data.recipes })
        })
    }

  render() {
      return (
          <div style={{ padding: 10+'px'}}> 
              <div>
              <form onSubmit={this.logthis}> 
              <input className = "form__input" type="text" placeholder='first name' name="inputEmployee"/>
              <button> Clcik for Recipes</button>
               </form>
              </div>
              <DisplayTemplate val={this.state.data} />
          
        
        </div>

    )
  }
}
