import React from "react"
import { IChildren } from "../Types/utils"
import { GAME_HEIGHT, OBSTACLE_GAP, GAME_WIDTH, OBSTACLE_WIDTH, UNIT, BIRD_SIZE } from "../Global"
import { useGameSystem } from "./GameSystem.context"
import { useScore } from "./Score.context"
import { useBird } from "./Bird.context"


interface IObstacleContext {
  obstacleHeight: number
  obstaclePosition: number
  restartObstacle: () => void
  newObstacle: () => void
  obstacleBottomHeight: number
}

const ObstacleContext = React.createContext<IObstacleContext>({
  obstacleHeight: 0,
  obstaclePosition: 0,
  restartObstacle: () => { },
  newObstacle: () => { },
  obstacleBottomHeight: 0
})

export const ObstacleProvider = ({ children }: IChildren) => {
  const [obstacleHeight, setObstacleHeight] = React.useState<number>(0)
  const [obstaclePosition, setObstaclePosition] = React.useState<number>(0)
  const { gameHasStarted, restartGame } = useGameSystem()
  const { incrementScore, restartScore } = useScore()
  const { birdPosition, restartBird } = useBird()

  let obstacleBottomHeight = GAME_HEIGHT - obstacleHeight - OBSTACLE_GAP

  function height() {
    return Math.random() * (GAME_HEIGHT - OBSTACLE_GAP)
  }
  function newObstacle() {
    let newHeight = height()
    if (newHeight < 615 && newHeight > 330) {
      setObstacleHeight(newHeight)
    } else {
      newObstacle()
    }
    setObstaclePosition(GAME_WIDTH)
    if (gameHasStarted) {
      incrementScore()
    }
  }

  function restartObstacle() {
    setObstacleHeight(0)
  }


  React.useEffect(() => {
    let obstacleID: number;
    if (gameHasStarted && obstaclePosition >= -OBSTACLE_WIDTH * 1.5) {
      obstacleID = setInterval(() => {
        setObstaclePosition(prev => prev -= UNIT)
      }, 24)

      return () => clearInterval(obstacleID)
    } else {
      newObstacle()
    }
  }, [gameHasStarted, obstaclePosition])


  React.useEffect(() => {
    let hasCollideWithTopObstacle = birdPosition >= 0 && birdPosition < obstacleHeight + BIRD_SIZE / 1.5
    let hasCollideWithBottomObstacle = birdPosition <= GAME_HEIGHT && birdPosition >= GAME_HEIGHT - obstacleBottomHeight - BIRD_SIZE / 1.5
    let birdDistanteToLeft = (GAME_WIDTH / 2)
    if (
      obstaclePosition <= birdDistanteToLeft
      && obstaclePosition >= GAME_WIDTH / 2 - OBSTACLE_WIDTH
    ) {
      if ((hasCollideWithTopObstacle || hasCollideWithBottomObstacle)) {
        restartScore()
        restartGame()
        restartBird()
      }
    }
  }, [birdPosition])

  React.useEffect(() => {
    let birdDistanteToLeft = (GAME_WIDTH / 2)

    if (
      obstaclePosition <= birdDistanteToLeft
      && obstaclePosition >= GAME_WIDTH / 2 - OBSTACLE_WIDTH
    ) {
      // incrementScore()
    }

  }, [])



  return <ObstacleContext.Provider value={{ obstacleHeight, obstaclePosition, restartObstacle, newObstacle, obstacleBottomHeight }}>
    {children}
  </ObstacleContext.Provider>
}


export const useObstacle = () => React.useContext(ObstacleContext)