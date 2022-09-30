
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import styled from 'styled-components'
import { useState } from 'react';

const App = () => {
  
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0);
const [neutral, setNeutral] = useState(0);

const options = {
  good: "good",
  neutral: "neutral",
  bad: "bad",
}

  const onLeaveFeedback = option => {
   if(option === "good") {
    setGood(good + 1);
   }
   if(option === "neutral") {
    setNeutral(neutral + 1);
   }
   if(option === "bad") {
    setBad(bad + 1);
   }
  };
 

  const countTotalFeedback = (a, b, c) => {
    const totalFeedbackAmount = a + b +c;
    return totalFeedbackAmount;
  };

  const countPositiveFeedbackPercentage = (good, bad, neutral) => {
    const positiveFeedbackPercentage = Math.round(((good * 100) / (good + neutral + bad)));
    return positiveFeedbackPercentage;
  };
    
  

    return (
      <Wrapper>
        <section>
          <Heading>Please Leave feedback</Heading>
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </section>

        <section>
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
        </section>
          
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
  margin-left: auto;
      margin-right: auto;
    width: 400px;
    height: 100vh;
    padding: 10px;
    color: #010101;
    section {
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
`
const Heading = styled.h1`
  font-size: 22px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default App;
