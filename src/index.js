import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81AQ8xjnNPL._AC_UY218_.jpg',
  title: 'Good Night Moon',
  author: 'Margaret Wise Brown'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/91UvdebBM-L._AC_UL320_.jpg',
  title: 'Chicka Chicka Boom Boom',
  author: 'John Archambault'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
