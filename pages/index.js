import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widgets';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`

  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={function (event) {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Digite seu Nome :)"
              />
              <button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar com &nbsp;
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h4>Vamos ver o trabalho dos coleguinhas?</h4>
            <hr />
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner />
      </QuizContainer>
    </QuizBackground>

  );
}
