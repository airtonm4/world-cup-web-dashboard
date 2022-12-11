import { createContext, ReactNode, useState } from "react";
import { GameProps } from "./GameContext";

export interface PunterProps {
  id: number | null,
  game_id: GameProps,
  name: string,
  guess: string,
  paid: boolean | null
}

interface PunterContextProps {
  punters: Array<PunterProps>,
  setPunters: (games: Array<PunterProps>) => void
}

export const PunterContext = createContext({} as PunterContextProps)

export const PunterProvider = ({ children }: { children: ReactNode }) => {
  const [punters, setPunters] = useState<Array<PunterProps>>([])

  return (
    <PunterContext.Provider
      value={{
        punters: punters,
        setPunters: (punters: Array<PunterProps>) => {
          setPunters([...punters])
        }
      }}
    >
      {children}
    </PunterContext.Provider>
  )
}