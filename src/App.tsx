import { Scene, Score, Obstacle, Bird } from "./Game/Components"
import { Container } from "./Game/Components/Container"
import createObstacle from "./Game/Components/Obstacle/createObstacle"
import { ObstacleProvider, useGameSystem } from "./Game/Context"
import { GAME_WIDTH } from "./Game/Global"
import './style.css'
function App() {

  const { gameHasStarted } = useGameSystem()

  let increment = GAME_WIDTH / 2

  const Obstacle1 = createObstacle({ increment: increment / 2 })
  const Obstacle2 = createObstacle({ increment: increment * 2 })
  const Obstacle3 = createObstacle({ increment: increment * 2 })


  const obstacles = [Obstacle1, Obstacle2]

  return (
    <Container>
      <Scene>
        <Score />
        {obstacles.map((Item, index) => (
          <Item key={index} />
        ))}

        <Bird />
      </Scene>

    </Container>
  )
}

export default App
