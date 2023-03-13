import React from 'react';
import { Button, ButtonsSection } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ optionButtons, onLeaveFeedback }) => {
  return (
    <ButtonsSection>
      {optionButtons.map(optionButton => (
        <Button
          key={optionButton}
          type="button"
          onClick={() => onLeaveFeedback(optionButton)}
        >
          {optionButton}
        </Button>
      ))}
    </ButtonsSection>
  );
};

FeedbackOptions.propTypes = {
  optionButtons: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
