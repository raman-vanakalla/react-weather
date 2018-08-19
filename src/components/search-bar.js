import React,{Component} from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component
{
	constructor(props)
	{
		console.log('SearchBar','constructor');
		super(props);
		this.state={
			term:''
		}
	}
	render()
	{
		console.log('SearchBar','render');
		return(
            <div className='col-xs-12'>
                <div className='col-xs-2' />
                <div className='col-xs-8'>
                  <input type='text' value={this.state.term} onChange={(e)=>{this.inputChanged(e);}} className='form-control' placeholder='search for locations....' />
                </div>
                <div className='col-xs-2' />
            </div>
			)
	}
	inputChanged(e)
	{
		console.log('SearchBar','inputChanged');
		this.setState({term:e.target.value});
		this.props.updateTerm(e.target.value);
	}
}

export default SearchBar;