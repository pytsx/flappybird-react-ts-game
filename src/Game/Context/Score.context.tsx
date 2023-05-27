import React from "react"
import { IChildren } from "../Types/utils"


interface IScoreContext {
  score: number
  incrementScore: () => void
  restartScore: () => void
}

const ScoreContext = React.createContext<IScoreContext>({
  score: 0,
  incrementScore: () => { },
  restartScore: () => { }
})

export const ScoreProvider = ({ children }: IChildren) => {
  const [score, setScore] = React.useState<number>(0)

  function incrementScore() {
    setScore(prev => prev += 1)
  }

  function restartScore() {
    setScore(0)
  }
  return <ScoreContext.Provider value={{ score, incrementScore, restartScore }}>
    {children}
  </ScoreContext.Provider>
}

export const useScore = () => React.useContext(ScoreContext)