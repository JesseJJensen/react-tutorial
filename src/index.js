import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/81AQ8xjnNPL._AC_UY218_.jpg'
    alt=''
  />
)

const Title = () => <h1>GOODNIGHT MOON</h1>
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Margaret Wise Brown
  </h4>
)

ReactDom.render(<BookList />, document.getElementById('root'))
