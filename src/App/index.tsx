import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from '../blocks/Greeting/Greeting';
import Counter from '../blocks/Counter/Counter';

const App = () => (
  <>
    <Greeting name="user" />
    <Counter />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
