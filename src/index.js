import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import MenuExampleInvertedSecondary from './page'
import registerServiceWorker from './registerServiceWorker';
import {MapContainer} from "./App";


ReactDOM.render(<MenuExampleInvertedSecondary />, document.getElementById('menu'));
ReactDOM.render(<MapContainer />, document.getElementById('map'));
registerServiceWorker();
