import { useGameContext } from "../../contexts/GameContext"
import { useGlobalContext } from "../../contexts/GlobalGameContext"
import api from "../../utils/api"
import Games from "./Games.module.css"

export const Game = () => {

  const { game, setGame } = useGameContext()
  const { games, setGames } = useGlobalContext()

  const saveGame = () => {
    api.post("/api/game", game).then(
      (res) => {
        games.push(res.data)
        setGames(games)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  return (
    <div className={Games.box}>
      <div className={Games.times}>
        <input
          type="text"
          placeholder="Time A"
          onChange={(e) => setGame((game) => { game.firstTeam = e.target.value })}
        />
      </div>

      <div className={Games.times}>
        <input
          type="text"
          placeholder="Time B"
          onChange={(e) => setGame((game) => { game.secondTeam = e.target.value })}
        />
      </div>

      <button className={Games.button} onClick={() => saveGame()}>Salvar</button>
    </div>
  )
}