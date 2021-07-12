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

  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState((prevSt) => ({
      neutral: prevSt.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState((prevStat) => ({
      bad: prevStat.bad + 1,
    }));
  };

  handleIncrementTotal = () =>
    (this.total = this.state.good + this.state.bad + this.state.neutral);

  handleIncrementPositive = () =>
    (this.positive = (this.state.good / this.total) * 100);

  render() {
    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            handleGood={this.handleIncrementGood}
            handleBad={this.handleIncrementBad}
            handleNeutral={this.handleIncrementNeutral}
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
