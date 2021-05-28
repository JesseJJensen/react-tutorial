import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81AQ8xjnNPL._AC_UY218_.jpg',
    title: 'Good Night Moon',
    author: 'Margaret Wise Brown',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/91UvdebBM-L._AC_UL320_.jpg',
    title: 'Chicka Chicka Boom Boom',
    author: 'John Archambault',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71XjIc94zgL._AC_UL320_.jpg',
    title: 'Bug Soup',
    author: 'Vince Cleghorne',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
