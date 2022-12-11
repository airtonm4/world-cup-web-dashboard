import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Game } from "./components/Games"
import { Root } from "./pages/Root"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Root />} >
          <Route path="add-game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}