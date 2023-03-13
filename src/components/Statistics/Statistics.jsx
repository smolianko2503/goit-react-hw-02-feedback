import React from 'react';
import propTypes from 'prop-types';
import { Stat } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) =>
  total === 0 ? (
    <Notification message="No feedback given"></Notification>
  ) : (
    <div>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral}</Stat>
      <Stat>Bad: {bad}</Stat>
      <Stat>Total: {total}</Stat>
      <Stat>Positive feedback: {positiveFeedback}%</Stat>
    </div>
  );

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number,
};
