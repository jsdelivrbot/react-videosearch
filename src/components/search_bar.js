import React, {Component} from 'react';
//This component has an input for searching a video.

//class SearchBar extends React.Component
export default class SearchBar extends Component {
	render() {
		return <input onChange={event => console.log(event.target.value) }/>;
	}

}
