import { useNavigate } from "react-router-dom"
import headStyle from "./Header.module.css"

export const Header = ({ navigateUrl, addText }: { navigateUrl: string, addText: string }) => {

  const navigate = useNavigate()

  return (
    <>
      <div className={headStyle.header} />
      <div className={headStyle.externa}>
        <button className={headStyle.general_button} onClick={() => { navigate(navigateUrl) }}>{addText}</button>
      </div>
    </>
  )
}