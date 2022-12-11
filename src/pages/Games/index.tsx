import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Tables } from "../../components/GamesTable"
import { Header } from "../../components/Header"
import { useGlobalContext } from "../../contexts/GlobalGameContext"
import api from "../../utils/api"


export const GamesPage = () => {
  // const [games, setGames] = useState<Array<GameProps>>()
  const { games, setGames } = useGlobalContext()
  const [punters, setPunters] = useState<Array<any>>()

  const loadPunters = (gameId: number) => {
    api.get(`/api/punter-by-game/${gameId}`).then(
      (res) => {
        console.log(res.data)
        setPunters(res.data)
      }
    )
  }

  useEffect(() => {
    api.get("/api/games").then(
      (res) => {
        setGames(res.data)
      }
    )
  }, [])

  return (
    <div className="app">
      <Header />
      <div>
        <Outlet />
      </div>
      <div>
        {games !== undefined &&
          <Tables games={games} />
        }
      </div>
    </div>
  )
}