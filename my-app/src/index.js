// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from "./App.jsx"


// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// <App/>
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx'; // Ensure the correct path

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App.jsx';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(<App />);


