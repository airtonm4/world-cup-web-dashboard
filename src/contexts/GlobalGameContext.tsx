import { createContext, ReactNode, useContext, useState } from "react";
import { GameProps } from "./GameContext";

interface GlobalProps {
  games: Array<GameProps>,
  setGames: (games: Array<GameProps>) => void
}

export const GlobalContext = createContext({} as GlobalProps)

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Array<GameProps>>([])

  return (
    <GlobalContext.Provider
      value={{
        games: games,
        setGames: (games: Array<GameProps>) => {
          setGames([...games])
        }
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(GlobalContext)
}