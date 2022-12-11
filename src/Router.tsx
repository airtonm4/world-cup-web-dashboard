import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Game } from "./components/Games"
import { GameProvider } from "./contexts/GameContext"
import { Root } from "./pages/Root"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Root />} >
          <Route path="add-game" element={<GameProvider><Game /></GameProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}