import { useState } from "react"
import api from "../../utils/api"

import headStyle from "./Header.module.css"

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
      <div className={headStyle.header} />
      <div className={headStyle.externa}>
        <button className={headStyle.general_button}>Adicionar Jogos</button>
      </div>
    </>
  )
}