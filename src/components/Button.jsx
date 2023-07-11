import {Link} from "react-router-dom"

const Button = ({slug, text, onClick}) => {
    
  return (
    <Link to={`/books/${slug}`} onClick={onClick}>
      {text}
    </Link>
  )
}

export default Button