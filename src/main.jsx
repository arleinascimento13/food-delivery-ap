import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/nav-bar/nav-bar.jsx'
import { Article } from './components/article/article'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Article />
  </React.StrictMode>,
)
