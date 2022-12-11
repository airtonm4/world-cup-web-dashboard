import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Game } from "./components/Games"
import { Punter } from "./components/Punter"
import { GameProvider } from "./contexts/GameContext"
import { PuntersProvider } from "./contexts/PuntersContext"
import { GamesPage } from "./pages/Games"
import { GameOverview } from "./pages/GamesOverview"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<GamesPage />} >
          <Route path="add-game/" element={<GameProvider><Game /></GameProvider>} />

        </Route>
        <Route path="game/:id" element={<PuntersProvider><GameOverview /></PuntersProvider>}>
          <Route path="add-punter/" element={<Punter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}