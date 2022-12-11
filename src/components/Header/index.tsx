import headStyle from "./Header.module.css"

export const Header = () => {
  return (
    <>
      <div className={headStyle.header} />
      <div className={headStyle.externa}>
        <button className={headStyle.general_button}>Adicionar Jogos</button>
      </div>
    </>
  )
}