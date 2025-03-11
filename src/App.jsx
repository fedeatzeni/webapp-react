import DefaultLayout from "./layouts/DefaultLayout"

// pages
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies/:id" element={<MoviePage />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
