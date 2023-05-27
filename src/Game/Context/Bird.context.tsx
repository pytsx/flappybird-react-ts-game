import React from "react"
import { IChildren } from "../Types/utils"
import { BIRD_SIZE, GAME_HEIGHT, GAME_WIDTH, GRAVITY, JUMP_SIZE } from "../Global"
import { useGameSystem } from "./GameSystem.context"
import { useScore } from "./Score.context"


interface IBirdContext {
  birdPosition: number
  restartBird: () => void
  jump: () => void
  birdAngle: number
  stop: () => void
}

const BirdContext = React.createContext<IBirdContext>({
  birdPosition: GAME_HEIGHT / 2,
  restartBird: () => { },
  jump: () => { },
  birdAngle: 0,
  stop: () => { }
})

export const BirdProvider = ({ children }: IChildren) => {
  const [birdPosition, setBirdPosition] = React.useState<number>(GAME_HEIGHT / 2)
  const [fator, setFator] = React.useState<number>(0)
  const { gameHasStarted, restartGame, startGame } = useGameSystem()
  const [birdAngle, setBirdAngle] = React.useState<number>(0)
  const [isJumping, setIsJumping] = React.useState<boolean>(false)
  const [prevBirdPosition, setPrevBirdPosition] = React.useState<number>(GAME_HEIGHT / 2);

  const { restartScore } = useScore()

  function stop() {
    setBirdPosition(GAME_HEIGHT * 2)
  }

  React.useEffect(() => {
    let intervalID: number | undefined;
    if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
      intervalID = setInterval(() => {
        if (GAME_WIDTH / birdPosition < 3.5 && birdPosition > prevBirdPosition) {
          setFator(1) // passaro está subindo
          setIsJumping(false)
        } else if (birdPosition < prevBirdPosition) {
          if (!isJumping) {
            setFator(1) // Pássaro está descendo, ângulo de -45 graus
          } else {
            setFator(-1)
          }
        }
        // if (GAME_WIDTH / birdPosition > 3.5 || isJumping) {
        //   setIsJumping(false)
        //   setFator(-1)
        // } else {
        //   setFator(1)
        // }
        setBirdPosition(prev => {
          setPrevBirdPosition(prev)
          return prev + GRAVITY
        })
      }, 24)
    } else {
      restartGame()
      restartBird()
      restartScore()
    }
    return () => {
      clearInterval(intervalID)
    }
  }, [birdPosition, gameHasStarted, fator])

  function restartBird() {
    setBirdPosition(GAME_HEIGHT / 2)
    setBirdAngle(0)
  }

  React.useEffect(() => {

    if (fator == 1) {
      setBirdAngle(45)
    } else {
      setBirdAngle(-45)
    }
  }, [fator])
  // React.useEffect(() => {
  //   if (birdPosition > prevBirdPosition) {
  //     setBirdAngle(45); // Pássaro está subindo, ângulo de 45 graus
  //   } else if (birdPosition < prevBirdPosition) {
  //     setBirdAngle(-45); // Pássaro está descendo, ângulo de -45 graus
  //   }
  // }, [birdPosition, prevBirdPosition]);

  function jump() {
    setIsJumping(true)
    let newBirdPosition = birdPosition - JUMP_SIZE
    if (!gameHasStarted) {
      startGame()
    }
    if (newBirdPosition + BIRD_SIZE < 0) {
      setBirdPosition(0)
    } else {
      setBirdPosition(newBirdPosition)
    }
  }

  return <BirdContext.Provider value={{ stop, birdPosition, restartBird, jump, birdAngle }}>
    {children}
  </BirdContext.Provider>
}


export const useBird = () => React.useContext(BirdContext)