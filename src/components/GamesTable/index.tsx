import { useNavigate } from "react-router-dom"
import { GameProps } from "../../contexts/GameContext"
import { useGlobalContext } from "../../contexts/GlobalGameContext"
import api from "../../utils/api"
import Games from "../Games/Games.module.css"
import TableStyles from "./TableStyles.module.css"

export const GamesTable = ({ games }: { games: Array<GameProps> }) => {

  const navigate = useNavigate()

  const { setGames } = useGlobalContext()

  const attGame = (game: GameProps, index: number) => {
    api.put(`/api/game/${game.id}`, game).then(
      (res) => {
        games.splice(index, 1, res.data)
        setGames(games)
      }
    )
  }

  return (
    <div className={Games.box}>

      <table className={TableStyles.table}>
        <thead>
          <tr>
            <th>Primeiro Time</th>
            <th>Segundo Time</th>
            <th>Resultado</th>
          </tr>
        </thead>

        <tbody>
          {games?.map((game, index) => {
            return (
              <tr key={index}>
                <td onClick={() => navigate(`game/${game.id}`)}>{game.firstTeam}</td>
                <td onClick={() => navigate(`game/${game.id}`)}>{game.secondTeam}</td>
                <td>
                  <input
                    onChange={(e) => {
                      game.result = e.target.value
                      attGame(game, index)
                    }}
                    value={game.result !== null ? game.result : ""}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}