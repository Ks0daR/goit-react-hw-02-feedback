import React from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <span>Good: {good}</span>
      <br />
      <span>Neutral: {neutral}</span>
      <br />
      <span>Bad: {bad}</span>
      <br />
      <span>Total feedback: {total}</span>
      <br />
      <span>Positive feedback: {positivePercentage}</span>
    </div>
  );
}
