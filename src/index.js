import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">hello</h1>
  );
};