import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component.

const App = () => <div>Hi</div>;

//Take this component's generated html and put into page(DOM)

ReactDOM.render(<App />, document.querySelector('.container'));