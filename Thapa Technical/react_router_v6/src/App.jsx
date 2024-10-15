import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Movie } from "./pages/Movie"
import { Contact } from "./pages/Contact"
import AppLayout from "./components/layout/AppLayout"
import "./App.css"
import { ErrorPage } from "./pages/ErrorPage"
import { getMoviesData } from "./api/GetAPIData"

const App = () => {

  const router = createBrowserRouter([


    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData
        },
        {
          path: "/contact",
          element: <Contact />
        },
        // {
        //   path: "*",
        //   element: <ErrorPage />
        // }
      ]
    },
  ])

  // Or this way (the old way)
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element= {<Home />} />
  //       <Route path="/about" element= {<About />} />
  //       <Route path="/contact" element= {<Contact />} />
  //       <Route path="/movie" element= {<Movie />} />
  //     </Route>
  //   )
  // )

  return <RouterProvider router={router} />
}

export default App