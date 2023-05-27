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
  obstacles: any[]
}

const ObstacleContext = React.createContext<IObstacleContext>({
  obstacleHeight: 0,
  obstaclePosition: 0,
  restartObstacle: () => { },
  newObstacle: () => { },
  obstacleBottomHeight: 0,
  obstacles: []
})

interface IObstacleProvider extends IChildren {
  startPosition: number
}

export const ObstacleProvider = ({ children, startPosition }: IObstacleProvider) => {
  const [obstacleHeight, setObstacleHeight] = React.useState<number>(0)
  const [obstacleBottomHeight, setObstacleBottomHeight] = React.useState<number>(0)


  const [obstacles, setObstacles] = React.useState<number[]>([]);

  const [obstaclePosition, setObstaclePosition] = React.useState<number>(0)

  const { gameHasStarted, restartGame } = useGameSystem()
  const { incrementScore, restartScore } = useScore()
  const { birdPosition, restartBird } = useBird()


  function height() {
    return Math.random() * (GAME_HEIGHT - OBSTACLE_GAP)
  }
  function newObstacle() {
    let newHeight = height()
    if (newHeight < GAME_HEIGHT - OBSTACLE_GAP - 100 && newHeight > 100) {
      setObstacles(prev => [...prev, newHeight])
      setObstacleHeight(newHeight)
      setObstacleBottomHeight(GAME_HEIGHT - newHeight - OBSTACLE_GAP)
    } else {
      newObstacle()
    }
    setObstaclePosition(GAME_WIDTH + startPosition)
    if (gameHasStarted) {
      incrementScore()
    }
  }

  function restartObstacle() {
    setObstacleHeight(0)
  }


  React.useEffect(() => {
    let obstacleID: number;
    if (gameHasStarted && obstaclePosition >= -OBSTACLE_WIDTH / 4) {
      obstacleID = setInterval(() => {
        setObstaclePosition(prev => prev -= UNIT * 3)
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


  return <ObstacleContext.Provider value={{ obstacles, obstacleHeight, obstaclePosition, restartObstacle, newObstacle, obstacleBottomHeight }}>
    {children}
  </ObstacleContext.Provider>
}


export const useObstacle = () => React.useContext(ObstacleContext)








