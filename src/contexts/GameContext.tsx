import { createContext, ReactNode, useContext } from "react"
import { useImmer, Updater } from "use-immer"

export interface GameProps {
  id: number | null,
  firstTeam: string,
  secondTeam: string,
  result: string | null
}
export interface GameContextProps {
  game: GameProps,
  setGame: Updater<GameProps>
}

export const GameContext = createContext({} as GameContextProps)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useImmer<GameProps>({
    id: null,
    firstTeam: "",
    secondTeam: "",
    result: null
  } as GameProps)

  return (
    <GameContext.Provider value={
      {
        game: game,
        setGame: setGame
      }
    }>
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  return useContext(GameContext)
}