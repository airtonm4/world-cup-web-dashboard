import { useState } from "react"
import { Header } from "../../components/Header"
import api from "../../utils/api"



export const Root = () => {
  const [games, setGames] = useState<Array<any>>()
  const [punters, setPunters] = useState<Array<any>>()

  const loadGames = () => {
    api.get("/api/games").then(
      (res) => {
        console.log(res.data)
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

  return (
    <>
      <Header />
    </>
  )
}