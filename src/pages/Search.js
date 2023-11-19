import { useSearchParams } from "react-router-dom";
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";


export const Search = ({ apiPath }) => {
  const[searchParams]=useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`); 

 

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7px mx-auto py-7">
        <div className="flex justify-start flex-wrep max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
