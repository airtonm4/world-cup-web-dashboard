import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GameProps } from "../../contexts/GameContext"
import { PunterProps, usePunterContext } from "../../contexts/PunterContext"
import { usePuntersContext } from "../../contexts/PuntersContext"
import api from "../../utils/api"
import Games from "../Games/Games.module.css"

export const Punter = () => {

  const id = useParams().id

  const { punter, setPunter } = usePunterContext()
  const { punters, setPunters } = usePuntersContext()
  const [game, setGame] = useState<GameProps>()

  useEffect(() => {
    api.get(`/api/game/${id}`).then(
      (res) => {
        setGame(res.data)
      }
    )
  }, [])

  const savePunter = () => {
    if (game === undefined) {
      return "null"
    }

    const data: PunterProps = {
      id: punter.id,
      name: punter.name,
      guess: punter.guess,
      paid: punter.paid,
      game: game
    }
    api.post(`/api/punter/${id}`, data).then(
      (res) => {
        punters.push(data)
        console.log(punters)
        setPunters(punters)
      }
    )
  }

  return (
    <div className={Games.box}>
      <div className={Games.times}>
        <input
          type='text'
          placeholder='Nome Apostador'
          onChange={(e) => setPunter((punter) => { punter.name = e.target.value })}
        />
      </div>

      <div className={Games.times}>
        <input
          type='text'
          placeholder='Palpite'
          onChange={(e) => setPunter((punter) => { punter.guess = e.target.value })}
        />
      </div>

      <div>
        <label>Pago&nbsp;</label>
        <input
          type='checkbox'
          onChange={e => setPunter(punter => { punter.paid = !punter.paid })}
          checked={punter.paid}
        />
      </div>

      <button className={Games.button} onClick={() => savePunter()}>Salvar</button>
    </div>
  )
}