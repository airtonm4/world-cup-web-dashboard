import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { PuntersTable } from "../../components/PuntersTable"
import { PunterProps } from "../../contexts/PunterContext"
import { usePuntersContext } from "../../contexts/PuntersContext"
import api from "../../utils/api"

export const GameOverview = () => {

  const id = useParams().id

  // const [punters, setPunters] = useState<Array<PunterProps>>()
  const { punters, setPunters } = usePuntersContext()

  // const loadPunters = (gameId: number) => {
  //   api.get(`/api/punter-by-game/${gameId}`).then(
  //     (res) => {
  //       console.log(res.data)
  //       setPunters(res.data)
  //     }
  //   )
  // }

  useEffect(() => {
    console.log(id)
    api.get(`/api/punter-by-game/${id}`).then(
      (res) => {
        console.log(res.data)
        setPunters(res.data)
      }
    )
  }, [])


  return (
    <div className="app">
      <Header navigateUrl="add-punter/" addText="Cadastrar Apostadores" />
      <div>
        <Outlet />
      </div>
      <div>
        {punters !== undefined &&
          <PuntersTable punters={punters} />
        }
      </div>
    </div>
  )
}