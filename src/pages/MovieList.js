
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components"

export const MovieList = ({apiPath, title}) => {

  const {data: movies} = useFetch(apiPath);
  useTitle(title);
  
  return (
    <main>
      <section className="max-w-7px mx-auto py-7">
        <div className="flex justify-start flex-wrep max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 other:justify-evenly">
          {movies.map((movie) =>(
            <Card key={movie.id} movie={movie} />
          ))}
          
        </div>
      </section>
    </main>
  )
}
