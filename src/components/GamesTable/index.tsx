import TableStyles from "./TableStyles.module.css"
import Games from "../Games/Games.module.css"
import { GameProps } from "../../contexts/GameContext"

export const Tables = ({ games }: { games: Array<GameProps> | null }) => {
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