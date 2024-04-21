import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
};