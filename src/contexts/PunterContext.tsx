import { createContext, ReactNode, useContext } from "react";
import { Updater, useImmer } from "use-immer"
import { GameProps } from "./GameContext";

export interface PunterProps {
  id: number | null,
  game: GameProps,
  name: string,
  guess: string,
  paid: boolean | null
}

interface PunterContextProps {
  punter: PunterProps,
  setPunter: Updater<PunterProps>
}

export const PunterContext = createContext({} as PunterContextProps)

export const PunterProvider = ({ children }: { children: ReactNode }) => {
  const [punter, setPunter] = useImmer<PunterProps>({
    id: null,
    game: {
      id: null,
      firstTeam: "",
      secondTeam: "",
      result: null
    },
    name: "",
    guess: "",
    paid: null
  })

  return (
    <PunterContext.Provider
      value={{
        punter: punter,
        setPunter: setPunter
      }}
    >
      {children}
    </PunterContext.Provider>
  )
}

export const usePunterContext = () => {
  return useContext(PunterContext)
}