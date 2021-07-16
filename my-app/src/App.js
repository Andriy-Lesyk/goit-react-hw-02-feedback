import React, { Component } from "react";
import "./App.css";
import { Container } from "./components/App/App.styled";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (event) => {
    const feedback = event.currentTarget.name;
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  handleIncrementTotal = () =>
    (this.total = this.state.good + this.state.bad + this.state.neutral);

  handleIncrementPositive = () =>
    (this.positive = Math.round((this.state.good / this.total) * 100));

  render() {
    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            handleFeedback={this.handleIncrement}
            options={this.state}
          ></FeedbackOptions>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.handleIncrementTotal()}
            positivePercentage={this.handleIncrementPositive()}
            message={"No feedback given"}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}
