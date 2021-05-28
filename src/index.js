import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
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
const Author = () => <h4>Margaret Wise Brown</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
