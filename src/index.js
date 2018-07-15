import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//youtube api key
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos : []
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//this.setState({videos:videos}) when prop and key are same variable name
		});
	}
	render() {
		
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));