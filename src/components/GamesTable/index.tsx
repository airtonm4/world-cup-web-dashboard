import TableStyles from "./TableStyles.module.css"
import Games from "../Games/Games.module.css"
import { GameProps } from "../../contexts/GameContext"
import { useNavigate } from "react-router-dom"

export const Tables = ({ games }: { games: Array<GameProps> | null }) => {

  const navigate = useNavigate()

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
              <tr key={index} onClick={() => navigate(`games/${game.id}`)}>
                <td>{game.firstTeam}</td>
                <td>{game.secondTeam}</td>
                <td>{game.result}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}