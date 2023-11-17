import { Card } from "../components"
export const MovieList = () => {
  return (
    <main>
      <section className="max-w-7px mx-auto py-7">
        <div className="flex justify-start flex-wrep max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </section>
    </main>
  )
}
