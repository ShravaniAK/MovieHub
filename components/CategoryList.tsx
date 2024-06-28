import { Movie } from '@lib/types';
import React from 'react';
import MovieCard from './MovieCard';
interface Props{
    title:String,
    movies:Movie[]
}

const CategoryList = ({title,movies}:Props) => {
  return (
   <div className="category">
    <h1 className='category-title'>{title}</h1>
    <div className='movie-list'>
{movies.map((movie)=>(
    <MovieCard key={movie.id} movie={movie}/>
))}
    </div>
   </div>
  )
}

export default CategoryList