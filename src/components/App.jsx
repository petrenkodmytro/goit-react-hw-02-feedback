import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  // Стан застосунку
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  // метод класу збору статистики
  onLeaveFeedback = stateKey => {
    // console.log(stateKey); //знаходимо відповідну кнопку
    this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1, //збільшуємо відповідне значення
    }));
  };

  // onLeaveFeedback = evt => {
  //   const {
  //     target: { name },
  //   } = evt;
  //   console.log({ name });
  //   this.setState(prevState => {
  //     return { [name]: prevState[name] + 1 };
  //   });
  // };

  //метод класу загальної кількості зібраних відгуків з усіх категорій
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  //метод классу відсоток позитивних відгуків
  countPositiveFeedbackPercentage = ({ good }) => {
    const TotalFeedback = this.countTotalFeedback(this.state);
    return Math.round((good / TotalFeedback) * 100) || 0; //або 0, щоб не було помилки в консолі
  };

  render() {
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            stateKeys={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>

        <GlobalStyle />
      </Layout>
    );
  }
}
