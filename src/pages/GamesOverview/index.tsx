import { useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { PuntersTable } from "../../components/PuntersTable"
import { usePuntersContext } from "../../contexts/PuntersContext"
import api from "../../utils/api"

export const GameOverview = () => {

  const id = useParams().id

  const { punters, setPunters } = usePuntersContext()

  useEffect(() => {
    console.log(id)
    api.get(`/api/punter-by-game/${id}`).then(
      (res) => {
        console.log(res.data)
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
        {punters !== undefined &&
          <PuntersTable punters={punters} />
        }
      </div>
    </div>
  )
}