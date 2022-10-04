import {BtnSection} from './FeedbackOptions.styled.js'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
     
        <BtnSection>
          {options.map(key => (
            <button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
            </button>
         ))}

        </BtnSection>
      )
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
}