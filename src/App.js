import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovies = async query => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`,
      )
      const data = await response.json()
      setMovies(data.docs)
    } catch (err) {
      setError('Failed to fetch movies')
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <h1 className="head">Movie Search App</h1>
      <SearchBar onSearch={fetchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  )
}

export default App
