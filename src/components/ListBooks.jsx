import React from 'react'
import {Link} from 'react-router-dom'

const ListBooks = ({collection, list}) => {
  return (
    <ul>
        {
            list.map(item =>(
              <li key={item.id}>
                <Link to={`/${collection}/${item.name.toLowerCase()}/stories`}>
                  {item.name}
                </Link>
              </li>

            ))
        }
    </ul>
  )
}

export default ListBooks