import Games from "./Games.module.css"

export const Game = () => {
  return (
    <div className={Games.box}>
      <div className={Games.info}>
        <input type="date" ></input>
        <input type="text" placeholder="Inserir Hora"></input>
      </div>

      <div className={Games.times}>
        <input type="text" placeholder="Time A"></input>
      </div>

      <div className={Games.times}>
        <input type="text" placeholder="Time B"></input>
      </div>

      <button className={Games.button}>Salvar</button>
    </div>
  )
}