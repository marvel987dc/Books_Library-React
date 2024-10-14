import React from 'react'
import BookCard from './BookCard'

const Library = (props) => {
    
  return (
    <>
    <div className='library'>
    {props.books.map(book => {
        return(
         <BookCard key={book.title} title ={book.title} author = {book.author} image = {book.image}/>
        )
    })}
    </div>
    </>
  )
}

export default Library
