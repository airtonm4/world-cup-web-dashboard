/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { GamesTable } from "../../components/GamesTable"
import { Header } from "../../components/Header"
import { useGlobalContext } from "../../contexts/GlobalGameContext"
import api from "../../utils/api"


export const GamesPage = () => {
  const { games, setGames } = useGlobalContext()

  useEffect(() => {
    api.get("/api/games").then(
      (res) => {
        setGames(res.data)
      }
    )
  }, [])

  return (
    <div className="app">
      <Header navigateUrl="add-game" addText="Adicionar Jogos" />
      <div>
        <Outlet />
      </div>
      <div>
        {games !== undefined &&
          <GamesTable games={games} />
        }
      </div>
    </div>
  )
}