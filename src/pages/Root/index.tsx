import { useCallback, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Tables } from "../../components/GamesTable"
import { Header } from "../../components/Header"
import { GameProps } from "../../contexts/GameContext"
import api from "../../utils/api"


export const Root = () => {
  const [games, setGames] = useState<Array<GameProps>>()
  const [punters, setPunters] = useState<Array<any>>()

  const handleClick = useCallback(() => {
    setTimeout(() => {
      loadGames()
    }, 100)
  }, [])

  const loadGames = () => {
    api.get("/api/games").then(
      (res) => {
        setGames(res.data)
      }
    )
  }
  const loadPunters = (gameId: number) => {
    api.get(`/api/punter-by-game/${gameId}`).then(
      (res) => {
        console.log(res.data)
        setPunters(res.data)
      }
    )
  }

  useEffect(() => {
    loadGames()
  }, [])

  useEffect(() => {
    window.addEventListener("click", handleClick)
  }, [handleClick])

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