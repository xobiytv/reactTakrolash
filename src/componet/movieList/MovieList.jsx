import React from 'react'
import './MovieList.css'
import MovieListItem from '../MovieListItem/MovieListItem'

export default function MovieList({data, onDelete}) {
   
    return (
        <div className='movie-list'>
            {
                data.map(item => (
                    <MovieListItem key={item.id} onDelete={() => onDelete(item.id)} {...item} />
                ))
            }



        </div>
    )
}
