import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatWrap, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <StatWrap>
      <Text>
        Good: <span>{good}</span>
      </Text>
      <Text>
        Neutral: <span>{neutral}</span>
      </Text>
      <Text>
        Bad: <span>{bad}</span>
      </Text>
      <Text>
        Total: <span>{total}</span>
      </Text>
      <Text>
        Positive feedback: <span>{positivePercentage}%</span>
      </Text>
    </StatWrap>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
