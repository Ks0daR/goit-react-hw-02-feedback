import React, { Component } from 'react';
import Layout from './Layout';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncement = ({ target }) => {
    this.setState(prevState => {
      return {
        [target.name]: prevState[target.name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total =>
    Math.round((this.state.good / total) * 100);

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      totalFeedback,
    );
    const message = <div>No feedback given</div>;
    const { good, neutral, bad } = this.state;
    console.log(this.state)
    return (
      <Layout>
        <Section title="Statistic">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          ) : (
            message
          )}
        </Section>

        <Section title="Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncement}
          />
        </Section>
      </Layout>
    );
  }
}
