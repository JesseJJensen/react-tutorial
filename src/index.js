import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81AQ8xjnNPL._AC_UY218_.jpg',
  title: 'Good Night Moon',
  author: 'Margaret Wise Brown',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/91UvdebBM-L._AC_UL320_.jpg',
  title: 'Chicka Chicka Boom Boom',
  author: 'John Archambault',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          consectetur ducimus quia inventore voluptates assumenda laboriosam
          nisi autem qui facere, similique eligendi mollitia eius, corrupti
          incidunt officia a eaque? Hic.
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props //add props above to use this
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {props.children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
