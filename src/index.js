import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

import {data} from './books'
import Book from './Book'

//setup vars


function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
