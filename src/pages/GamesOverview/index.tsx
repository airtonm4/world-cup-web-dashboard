import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import Games from "../../components/Games/Games.module.css"
import TableStyles from "../../components/GamesTable/TableStyles.module.css"
import { Header } from "../../components/Header"
import { PuntersTable } from "../../components/PuntersTable"
import { usePuntersContext } from "../../contexts/PuntersContext"
import api from "../../utils/api"

export const GameOverview = () => {

  const id = useParams().id

  const { punters, setPunters } = usePuntersContext()

  useEffect(() => {
    api.get(`/api/punter-by-game/${id}`).then(
      (res) => {
        setPunters(res.data)
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="app">
      <Header navigateUrl="add-punter/" addText="Cadastrar Apostadores" />
      <div>
        <Outlet />
      </div>
      <div>
        <div className={Games.box}>
          <h1>Ganhadores</h1>
          <table className={TableStyles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Palpite</th>
              </tr>
            </thead>
            <tbody>
              {punters.filter((punter) => {
                return punter.guess === punter.game.result
              }).map(
                (punter, index) => {
                  return (
                    <tr key={index}>
                      <td>{punter.name}</td>
                      <td>{punter.guess}</td>
                    </tr>
                  )
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {punters !== undefined &&
          <PuntersTable punters={punters} />
        }
      </div>
    </div>
  )
}