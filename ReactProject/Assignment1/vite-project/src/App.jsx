import { useState } from 'react'
import './StyleSheet/App.css'
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import list from './Movie.json'

/*list is the json containing the movie list and image were add in base64 so the image
 can be stored in the file. here is what the data looks like without the encoded imaging
{
  "Movies" : [{"name": "The Grand Budapest Hotel", "year": "2014", "rating": "5/5", "poster":"image"},
              {"name": "Fantastic Mr. Fox", "year": "2009", "rating": "3/5", "poster":"image"},
              {"name": "Asteroid City", "year": "2023", "rating": "4/5", "poster":"image"},
              {"name": "Isle of Dogs", "year": "2018", "rating": "4/5", "poster":"image"},
              {"name": "The Phoenician", "year": "2025", "rating": "5/5", "poster":"image"},
              {"name": "Bottle Rocket", "year": "1996", "rating": "3/5", "poster":"image"}
              ]
}
 
 
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <MovieList data={list.Movies}/>
    </>
  )
}

export default App
