import { PunterProps } from "../../contexts/PunterContext"
import { usePuntersContext } from "../../contexts/PuntersContext"
import api from "../../utils/api"
import Games from "../Games/Games.module.css"
import TableStyles from "../GamesTable/TableStyles.module.css"

export const PuntersTable = ({ punters }: { punters: Array<PunterProps> }) => {

  const { setPunters } = usePuntersContext()

  const attPaid = (punter: PunterProps, index: number) => {
    api.put(`/api/punter/${punter.id}`, punter).then(
      (res) => {
        punters.splice(index, 1, res.data)
        setPunters(punters)
      }
    )
  }

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
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => {
                        punter.paid = !punter.paid
                        attPaid(punter, index)
                      }}
                      checked={punter.paid}
                    />
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}