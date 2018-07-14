import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyBe5s8YxNgzgue4g-mwxE9WB53vwgsGyA0';

//Create a new component.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take this component's generated html and put into page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));