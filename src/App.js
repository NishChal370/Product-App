import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import MainFrame from './Component/MainFrame';


class App extends Component {
  state={
    data:[]
  }
 
  componentDidMount(){
    this.handleDataFetch();
  }

  handleDataFetch(){
     // Make a request for a user with a given ID
    axios.get('https://fakestoreapi.com/products')
      .then((response) =>{
        // handle success
        if(response.status.toString() === '200'){
          this.setState({data : response.data});
        }
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MainFrame
          key = '0MF'
          stateData = {this.state}  
        />
      </div>
    )
  }
}


export default App;
