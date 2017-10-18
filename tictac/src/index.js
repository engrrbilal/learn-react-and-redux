import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './tictac/TicTac';
import SimpleTictac from './tictac/Simple-TicTac';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game/>,
   document.getElementById('root'));
// ReactDOM.render(<SimpleTictac/>,
//     document.getElementById('root'));

registerServiceWorker();
