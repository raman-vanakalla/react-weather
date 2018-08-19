import React,{Component} from 'react';

const WeatherItem=(props)=>
	{
		return(
                <div>
	                 <div className='col-xs-2'>
		                 <div className='col-xs-12 cardHead'>
		                    <div className='heading'>
		                      <img src={`./svg/${props.svg}.svg`} /><b>{props.heading}</b>
		                    </div>
			             </div>
			             <div className='col-xs-12 cardBody'>
		                    <div className='valDisp'>
		                      {props.val}
		                    </div>
			             </div>
		            </div>
		            <div className='col-xs-1' />

                </div>
			);
	}

export default WeatherItem;