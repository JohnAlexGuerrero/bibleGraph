import React from 'react'

const ListBooks = ({list}) => {
  return (
    <ul>
        {
            list.map(item =>(
                <li key={item.id}>
                    {item.name}
                </li>
            ))
        }
    </ul>
  )
}

export default ListBooks