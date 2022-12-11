import { createContext, ReactNode, useContext, useState } from "react";
import { PunterProps } from "./AddPunterContext";

interface PuntersContextProps {
  punters: Array<PunterProps>,
  setPunters: (games: Array<PunterProps>) => void
}

export const PuntersContext = createContext({} as PuntersContextProps)

export const PuntersProvider = ({ children }: { children: ReactNode }) => {
  const [punters, setPunters] = useState<Array<PunterProps>>([])

  return (
    <PuntersContext.Provider
      value={{
        punters: punters,
        setPunters: (punters: Array<PunterProps>) => {
          setPunters([...punters])
        }
      }}
    >
      {children}
    </PuntersContext.Provider>
  )
}

export const usePuntersContext = () => {
  return useContext(PuntersContext)
}