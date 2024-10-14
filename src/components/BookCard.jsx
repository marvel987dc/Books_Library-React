import React from 'react'

const BookCard = (props) => {
  return (
    <div className='book_card'>
        <p className='title'>{props.title}</p>
        <img src={props.image} className='img'/>
        <p className='author'>{props.author}</p>
    </div>
  )
}

export default BookCard;
 