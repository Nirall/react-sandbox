import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from '../blocks/Greeting/Greeting';
import CommonForm from '../blocks/CommonForm/CommonForm';

const App = () => (
  <>
    <Greeting name="user" />
    <CommonForm />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
