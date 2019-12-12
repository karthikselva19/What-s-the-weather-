import React from 'react';
import axios from 'axios';
import WeatherComponent from './weather_component';

class Weather extends React.Component{

  state={
    posts:[],temp:[],desc:[],id:null,
    weathericon:undefined,
    error:false,
    check:false,
    visible:false,
    city:''
  };

  
    
    componentDidUpdate(){
      if(this.props.name === ''){
        alert("Please enter the city name");
      }else{
        if(this.props.check !== this.state.check || this.props.name !== this.state.city){
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+(this.props.name)+'&APPID=e890e5f43e3114ad60f6c64ccacbd4e3')
        .then(response => {
            const posts = response.data;
            const temp = response.data.main;
            const desc =  response.data.weather[0];
            console.log(response.data);
            this.setState({posts:posts, temp: temp, desc: desc,check:true,city:this.props.name,error:false,visible:true});
            this.get_weather(desc.id);
        })
        .catch(error => {
          this.setState({error:true,check:true,city:this.props.name,visible:false})
        })
        }
      }
}



    
    
    get_weather =(rangeid)=>{
      console.log(rangeid);
      if(rangeid >= 200 && rangeid <= 232){
        this.setState({weathericon:this.weathericon.Thunderstorm});
      }
      else if(rangeid >=300 && rangeid <=321){
      this.setState({weathericon:this.weathericon.Drizzle});
      }
      else if(rangeid >=500 && rangeid <=531){
        this.setState({weathericon:this.weathericon.Rain});
        }
        else if(rangeid >=600 && rangeid <=622){
          this.setState({weathericon:this.weathericon.Snow});
          }
          else if(rangeid >=701 && rangeid <=781){
            this.setState({weathericon:this.weathericon.Atmosphere});
            }
            else if(rangeid === 800){
              this.setState({weathericon:this.weathericon.Clear});
              }
            else if(rangeid >=801 && rangeid <=804){
              this.setState({weathericon:this.weathericon.Clouds});
              }
    
    }
    
      weathericon = {
        Thunderstorm : "wi wi-thunderstorm display-1",
        Drizzle:'wi wi-sleet display-1',
        Rain:'wi wi-storm-showers display-1',
        Snow:'wi wi-snow display-1',
        Atmosphere:'wi wi-fog display-1',
        Clear:'wi wi-day-sunny display-1',
        Clouds:'wi wi-day-fog display-1'
      };
    

    calCelsius(temp){
      let cell = Math.floor(temp-273.15);
      return cell;
    }
    render(){
      let isChecked = this.state.visible;
      
        return(
            <div className="weather-main">
              {
                this.state.error ? (<p style={{color:'white'}}> Please enter the valid city name</p>) : null}
              {
                isChecked ? (<WeatherComponent name={this.state.posts.name} temp={this.calCelsius(this.state.temp.temp)}
                min={this.calCelsius(this.state.temp.temp_min)} max={this.calCelsius(this.state.temp.temp_max)}
                desc={this.state.desc.main} className={this.state.weathericon} /> ) : null
              }
            
            </div>
        )
    }
}


export default Weather;