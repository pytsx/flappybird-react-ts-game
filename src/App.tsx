import { Scene, Score, Obstacle, Bird } from "./Game/Components"
import { Container } from "./Game/Components/Container"
import createObstacle from "./Game/Components/Obstacle/createObstacle"
import { ObstacleProvider } from "./Game/Context"
import './style.css'
function App() {

  let increment = 500

  const Obstacle1 = createObstacle({ increment: increment })
  const Obstacle2 = createObstacle({ increment: increment * 2 })
  const Obstacle3 = createObstacle({ increment: increment * 3.5 })
  const Obstacle4 = createObstacle({ increment: increment * 3 })


  const obstacles = [Obstacle1, Obstacle2, Obstacle3]

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
