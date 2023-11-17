import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between p-4">
        <span className="text-sm text-gray-500 sm:text-center dark:text-white dark:text-opacity-60">
          © 2023 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/inspired_by_backbanchers/" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rahul-kumar-900b3217b/" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="https://bitbucket.org/rk-grad-course/workspace/overview/" target="_blank" className="hover:underline me-4 md:me-6">Bitbucket</a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
