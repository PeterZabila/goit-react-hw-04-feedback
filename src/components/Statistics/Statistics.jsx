import {StatisticsSection} from './Statistics.styled'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <StatisticsSection>
                <div>Good:{good}</div>
                <div>Neutral: {neutral}</div>
                <div>Bad: {bad}</div>
                <div>Total: {total}</div>
                <div>Positive feedback: {positivePercentage}</div>
            </StatisticsSection>
        </>
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
