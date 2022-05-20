import React from 'react';
import { render } from '@testing-library/react'; 
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />); //destructuring is used to get the function getByText. 
//The render function actually returns an object containing a number of functions that let you inspect the virtual DOM nodes rendered by React.
  const linkElement = getByText(/learn react/i);
 //used to check if the text “learn react” is contained anywhere in the virtual DOM rendered by the <App /> component.
  expect(linkElement).toBeInTheDocument();
  //the expect function provided by Jest is used to make an assertion about this text being in the document.
});
