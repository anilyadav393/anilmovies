import React, {useEffect, useState} from 'react'

const MovieCard = ({movie}) => {
  const [dogImage, setDogImage] = useState('')

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDogImage(data.message)
    }

    fetchDogImage()
  }, [])

  return (
    <div className="movie-card">
      <img src={dogImage} alt="Random Dog" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-details">Author: {movie.author_name?.[0]}</p>
        <p className="movie-card-details">Year: {movie.first_publish_year}</p>
      </div>
    </div>
  )
}

export default MovieCard
