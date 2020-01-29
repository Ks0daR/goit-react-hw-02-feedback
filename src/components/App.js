import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Layout from './Layout';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
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
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        
        
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncement}
          />
       
      </Layout>
    );
  }
}
