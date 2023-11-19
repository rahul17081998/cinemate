import PageNotFoundImage from "../assets/images/pagenotfound.png";
import {Link} from "react-router-dom";
import { Button } from "../components";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {

  const pageTitle = useTitle(`Page Not Found`);
  

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found"/>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            {/* <button className="w-64 text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">Back To Home</button> */}
            {/* <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back To Home</button> */}
            <Button children="Back To Home" />
          </Link>
        </div>
      </section>
    </main>
  )
}
