import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Index from './client/index';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<Route path="/" component={Home} />
	</Router>, 
	document.getElementById('root')
);
serviceWorker.unregister();
