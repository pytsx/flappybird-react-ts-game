import styled from "@emotion/styled"
import { useScore } from "../Context/Score.context"

const Score = () => {
  const { score } = useScore()
  return (
    <ScoreElement>
      {score}
    </ScoreElement>
  )
}

export default Score


const ScoreElement = styled.text`
  font-size: 40px;
  font-weight: 800;
  width: 100%;
  display: flex;
  padding: 2.4rem 0;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #fafafa;
`