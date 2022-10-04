
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Wrapper, Heading } from './App.styled';

import { useState } from 'react';

const App = () => {
  
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

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
 
  const totalFeedback = good + bad + neutral;
  const positiveFeedbackPercentage = Math.round(((good * 100) / (good + neutral + bad)));
    
    return (
      <Wrapper>
        <section>
          <Heading>Please Leave feedback</Heading>
          <FeedbackOptions options={['good', 'bad', 'neutral']} onLeaveFeedback={onLeaveFeedback} />
        </section>

        <section>
          {
          totalFeedback < 1 ? (<Notification message={"No votes yet"}/>)
                         : (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage} />) }
        </section>
      </Wrapper>
    );
  }
  
export default App;
