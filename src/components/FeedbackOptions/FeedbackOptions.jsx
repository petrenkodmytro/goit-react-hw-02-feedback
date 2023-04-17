import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { FeedbackWrap, FeedbackBtn } from './FeedbackOptions.styled';
import {Icons} from './Icons'

export const FeedbackOptions = ({ stateKeys, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {stateKeys.map(stateKey => {
        return (
          <FeedbackBtn
            key={stateKey}
            name={stateKey}
            onClick={() => onLeaveFeedback(stateKey)}
          >
            {Icons[stateKey]}
            {stateKey}
          </FeedbackBtn>
        );
      })}
    </FeedbackWrap>
  );
};

FeedbackOptions.propTypes = {
  stateKeys: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
