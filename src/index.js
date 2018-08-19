import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import LocationDisplay from './components/location-display';
import WeatherDisplay from './components/weather-display';

const axios=require('axios');

class App extends Component
{
	constructor(props)
	{
		console.log('app','constructor')
		super(props);
		this.load_data('bhongir');
		this.state=
		{
			term:null,
			location:null,
			weather:null
		}
	}
    render()
    {
    	console.log('app','rendering');
    	return(
               <div>
                 <SearchBar updateTerm={(term)=>{this.load_data(term);}} />
                 <LocationDisplay location={this.state.location} />
                 {this.load_weather_display()}
                 <div className='col-xs-12 footer' />
               </div>
    		);
    }
    load_weather_display()
    {
    	if(this.state.weather)
    		return (<WeatherDisplay weather={this.state.weather} />);
    	else
    		return null;
    }
    load_data(term)
    {
    	console.log('app','load_data');
    	var encodedLocation=encodeURIComponent(term);
    	const response_prom=axios.get(`https://fathomless-lowlands-81780.herokuapp.com/${encodedLocation}`);
    	response_prom.then((response)=>
	    	{
	    		console.log(response.data);
	    		if(response.data.code)
	    		{
	    			this.setState(
		    				{
		    					location:null,
		    					weather:null
		    				});
	    			return;
	    		}
                this.setState(
                           {
                           	 term:term,
                           	 location:response.data.location,
                           	 weather:response.data.weather
                           });
	    	})
    }
}

ReactDOM.render(<App/>  , document.querySelector('.cont'));
