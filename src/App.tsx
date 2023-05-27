import { Scene, Score, Obstacle, Bird } from "./Game/Components"
import { Container } from "./Game/Components/Container"
import './style.css'
function App() {


  return (
    <Container>
      <Scene>
        <Score />
        <Obstacle />
        <Bird />
      </Scene>

    </Container>
  )
}

export default App
