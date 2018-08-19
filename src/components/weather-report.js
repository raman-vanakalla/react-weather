import React, {Component} from 'react';
import ReactDom from 'react-dom';
import WeatherItem from './weather-item';
const WeatherReport=(props)=>
	{		
		//console.log(props);
		//array properties val,heading,svg
		var array1=[['temperature','Temperature','temperature'],['apparentTemperature','Feels Like','temperature'],['humidity','Humidity','humidity'],['pressure','Pressure','pressure']];
		const items1=array1.map((item)=>
	                {
                        return(<WeatherItem val={props.weatherObject[`${item[0]}`]} heading={item[1]} svg={item[2]} /> );
	                });

		var array2=[['cloudCover','Cloud Cover','cloud'],['precipIntensity','precipitation','precipitation'],['visibility','Visibility','visibility'],['windSpeed','Wind Speed','wind']];
		const items2=array2.map((item)=>
	                {
                        return(<WeatherItem val={props.weatherObject[`${item[0]}`]} heading={item[1]} svg={item[2]} /> );
	                });
		return (
			<div>
			    <div className='col-xs-12 mar'>     
	              <div className='col-xs-2' />
	              <div className='col-xs-8 report'>
	                <h3>Current Situation:</h3>{props.weatherObject.summary}
	              </div>
	              <div className='col-xs-2' />
		        </div>
	            <div className='col-xs-12 weatherReport'>
	                <div className='col-xs-1' />
		            <div className='col-xs-10'>
		              {items1}
		            </div>
		            <div className='col-xs-1' />
	            </div>

	            <div className='col-xs-12 weatherReport'>
	                <div className='col-xs-1' />
		            <div className='col-xs-10'>
		              {items2}
		            </div>
		            <div className='col-xs-1' />
	            </div>
			</div>
			);
	}


export default WeatherReport;