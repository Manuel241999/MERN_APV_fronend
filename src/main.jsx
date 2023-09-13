import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//Esto sucede porque en react en la ultima versión esta usando el modo estricto por eso renderiza dos veces el componente pero tranquilo esto sucede solo en desarrollo porque en producción funcionaria normalmente
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
   <App />
 );
