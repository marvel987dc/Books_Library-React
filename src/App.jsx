import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCard from './components/BookCard'
import Header from './components/Header'
import Library from './components/Library'
import books from './books'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header title="My book library"/>
    <Library books={books}/>
    <Footer footer={Footer} />
    </>
  )
}

export default App;
