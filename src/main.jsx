import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBar } from './components/nav-bar/nav-bar'
import { Article } from './components/article/article'
import { FooterBar } from './components/footer/footer-bar'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Article />
    <FooterBar />
  </React.StrictMode>,
)
