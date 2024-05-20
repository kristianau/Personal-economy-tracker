import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Routing from './components/Navigation/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return (
    <div>
      <Routing />
    </div>
  );
};