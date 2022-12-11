import TableStyles from "./TableStyles.module.css"
import Games from "../Games/Games.module.css"

export interface GameProps {
  id: number,
  firstTeam: string,
  secondTeam: string,
  result: string | null
}

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

        {games?.map((game) => {
          return (
            <tr>
              <td>{game.firstTeam}</td>
              <td>{game.secondTeam}</td>
              <td>{game.result}</td>
            </tr>
          )
        })}
      </table>

    </div>
  )
}