import styled from 'styled-components'
import db from "../db.json"
import Widget from '../src/components/Widgets/index.js'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuizContainer = styled.div `

  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

`

export default function Home() {
  return (

    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Teste de CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Tens o que é nescessário?</p>
          </Widget.Content>
        </Widget>
        
        <Widget>
          <Widget.Content>
            <h4>Vamos ver o trabalho dos coleguinhas?</h4>
            <hr></hr>
          </Widget.Content>
        </Widget>
        <Footer/>
        <GitHubCorner/>
      </QuizContainer>
    </QuizBackground>

  )
}
