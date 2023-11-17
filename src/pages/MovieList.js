import { useEffect, useState } from "react"
import { Card } from "../components"
export const MovieList = () => {

  const[movies, setMovies]=useState([]);

  useEffect(()=>{
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9d06d23d63ce5bd4f5f4b9407b928fd3");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  
  return (
    <main>
      <section className="max-w-7px mx-auto py-7">
        <div className="flex justify-start flex-wrep max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {movies.map((movie) =>(
            // console.log(movie.id);
            <Card key={movie.id} movie={movie} />
          ))}
          
        </div>
      </section>
    </main>
  )
}
