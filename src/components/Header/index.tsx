import { useNavigate } from "react-router-dom"
import headStyle from "./Header.module.css"

export const Header = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className={headStyle.header} />
      <div className={headStyle.externa}>
        <button className={headStyle.general_button} onClick={() => { navigate("add-game") }}>Adicionar Jogos</button>
      </div>
    </>
  )
}