import { PunterProps } from "../../contexts/PunterContext"
import Games from "../Games/Games.module.css"
import TableStyles from "../GamesTable/TableStyles.module.css"

export const PuntersTable = ({ punters }: { punters: Array<PunterProps> }) => {
  return (
    <div className={Games.box}>
      <table className={TableStyles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Palpite</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>
          {punters.map(
            (punter, index) => {
              return (
                <tr key={index}>
                  <td>{punter.name}</td>
                  <td>{punter.guess}</td>
                  <td>{punter.paid}</td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}