import React,{Component} from 'react';
import ReactDom from 'react-dom';


const LocationDisplay=(props)=>
{
	console.log('location rendering');

	if(!props.location)
	{
		console.log('props location','null');
		return(
			<div className='col-xs-12 head'>
			  
              <h1>NO LOCATIONS MATCHED</h1>
			</div>
			);
	}
	else
	{
		console.log('props location',props.location.formatted_address);
		return(
			<div className='col-xs-12 head'>

			   <h1><img src='./svg/location.svg' /> {props.location.formatted_address}</h1>
			</div>
			);
	}
}

export default LocationDisplay;