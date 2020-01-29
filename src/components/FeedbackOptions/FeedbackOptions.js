import React from 'react';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <>
      <button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
}
