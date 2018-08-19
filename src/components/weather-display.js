import React,{Component} from 'react';
import ReactDom from 'react-dom';
import WeatherReport from './weather-report';
class WeatherDisplay extends Component
{
	constructor(props)
	{
		super(props);
		console.log('check',props);
		this.state=
		{
			hour:-1
		}
	}
	render()
	{
       
        if(!this.props.weather)
        	return null;
        const weatherDataToBeDisplayed=this.weatherToBeSent();
         console.log(this.props.weather.currently);
		return(
            <div>
	              <div className='col-xs-12'>
	                <div className='col-xs-5' />
		            <div className='col-xs-4'>
                       <h2 >{this.getDate(weatherDataToBeDisplayed.time *1000)}</h2>
                       <a onClick={()=>{if(this.state.hour>=0){this.setState({hour:this.state.hour-1});}else{alert('we dont have hourly data before that');}}} className="previous round">&#8249;</a>
		               <h3 className='noNext'>{this.getTime(weatherDataToBeDisplayed.time *1000)}</h3>    
		               <a onClick={()=>{if(this.state.hour<this.props.weather.hourly.data.length-1){this.setState({hour:this.state.hour+1})}}} className="next round">&#8250;</a> 
		            </div>
		            <div className='col-xs-4' />
	              </div>
	               
	            
	              <div className='col-xs-12 mar'>
	                 
	                 <div className='col-xs-6 report'>
	                   <h3>Weakly summary:</h3>{this.props.weather.daily.summary}
	                 </div>
	                 <div className='col-xs-6 report'>
	                   <h3>Todays summary:</h3>{this.props.weather.hourly.summary}
	                 </div>
	               
	              </div>
	              
	              
	              <WeatherReport weatherObject={weatherDataToBeDisplayed} />
	        </div>

			);
	}
	getDate(number)
	{
		const d=new Date(number);
		return (d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()  );
	}
	getTime(number)
	{
		const d=new Date(number);
		return (d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()  );
	}
	weatherToBeSent()
	{
		if(this.state.hour==-1)
		{
			return (this.props.weather.currently);
		}
		else
		{
			return (this.props.weather.hourly.data[`${this.state.hour}`]);
		}
	}
}

export default WeatherDisplay;