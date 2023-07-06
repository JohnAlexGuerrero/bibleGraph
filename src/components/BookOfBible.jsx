import React from 'react'
import CollectionBooks from './CollectionBooks'

const BookOfBible = (props) => {
    const {name, testament, chapters, collection,summary } = props.book

    const numberChapters = ()=> chapters.length

  return (
    <div>
      <CollectionBooks />
    </div>
  )
}

export default BookOfBible