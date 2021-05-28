import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81AQ8xjnNPL._AC_UY218_.jpg',
    title: 'Good Night Moon',
    author: 'Margaret Wise Brown',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91UvdebBM-L._AC_UL320_.jpg',
    title: 'Chicka Chicka Boom Boom',
    author: 'John Archambault',
  },
]

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames)
function BookList() {
  return <section className='booklist'>{newNames}</section>}

const Book = (props) => {
  const { img, title, author } = props //add props above to use this

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
