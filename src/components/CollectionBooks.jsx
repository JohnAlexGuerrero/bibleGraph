import React, { useState } from 'react'
import Button from './Button'
import ListBooks from './ListBooks'

import collections from '../data/collections'

const CollectionBooks = () => {
    const [list, setList] = useState([])
    const [collection, setCollection] = useState('')

    const handleSelectCollection = (IdCollection)=>{
        let result = collections.filter(item => item.id === IdCollection)
        setList(result[0].books)
        setCollection(result[0].slug)
    }

  return (
    <div>
        {
            collections.map(btn =>(
                <Button key={btn.id} slug={btn.slug} text={btn.name} onClick={id =>handleSelectCollection(btn.id)} />
            ))
        }

        <ListBooks collection={collection} list={list} />

    </div>
  )
}

export default CollectionBooks