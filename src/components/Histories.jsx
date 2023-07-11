import React from 'react'

const Histories = (props) => {
    
  return (
    <div>
        <h1>{props.title}</h1>
        <ul>
            {
                props.list.map(story =>(
                    <li key={story.id}>{story.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Histories