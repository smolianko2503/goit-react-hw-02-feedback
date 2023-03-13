import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    switch (event) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;

      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;

      default:
        return;
    }
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Feedback>
        <SectionTitle title={'Please lieve feedback'}>
          <FeedbackOptions
            optionButtons={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
        <GlobalStyle />
      </Feedback>
    );
  }
}
