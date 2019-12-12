import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather_container/weather';
import Form from './app_component/form_container/form.component';
import './App.css';

// //api call api api.openweathermap.org/data/2.5/weather?q=London,uk
// const API_key ="e890e5f43e3114ad60f6c64ccacbd4e3";

class App extends React.Component{
  constructor (props){
    super(props);
    this.state={
      clicked:false,
      city:null
    }
  }
  


handleLanguage = (e,lang,city) =>{
  e.preventDefault();
  let state = this.state.clicked;

  this.setState({clicked:true,city:city});
console.log(state,lang,city);

}



  render(){
    
    return(
<div className="App">
  <Form onSelectLanguage={this.handleLanguage} />
     <Weather check={this.state.clicked} name={this.state.city}/>  
    
    </div>

    );
  }
}




export default App;
