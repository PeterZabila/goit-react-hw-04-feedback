import styled from 'styled-components'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  console.log(options);
    return (
     
        <BtnSection>
          {(Object.keys(options)).map(key => (
        <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </button>
      ))}

        </BtnSection>
      )
};

export default FeedbackOptions;

const BtnSection = styled.div`
  
        background-color: slategrey;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    `

    FeedbackOptions.propTypes = {
      onLeaveFeedback: PropTypes.func,
      options: PropTypes.shape({
        key: PropTypes.string,
      })
  }