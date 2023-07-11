import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import BookOfBible from "./components/BookOfBible";
import Histories from './components/Histories';

import bibleStory from './data/biblieStory';

function App() {
  return (
    <Router>
      <div>
        <Link to={"/"}>home</Link>
        <Link to={"/collections"}>collections</Link>
      </div>
      <Routes>
        <Route path='/' element={ <h1>home of app</h1>}></Route>
        <Route path='/collections' element={ <></> }></Route>

        {
          bibleStory.map(item =>(
            <Route key={item.id} path={`/${item.collection}/${item.bookName}/stories`} element={ <Histories title={item.bookName} list={item.histories} /> }></Route>
          ))
        }
        
      </Routes>
      
      <BookOfBible book={{}}/>


    </Router>
  );
}

export default App;
