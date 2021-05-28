import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars
const author = 'Margaret Wise Brown'
const title = 'Good Night Moon'
const img = 'https://m.media-amazon.com/images/I/81AQ8xjnNPL._AC_UY218_.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
