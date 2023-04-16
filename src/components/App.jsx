import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  // Стан застосунку
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // метод класу збору статистики
  onLeaveFeedback = e => {
    console.log(e);
  };
  //метод класу загальної кількості зібраних відгуків з усіх категорій
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  //метод классу відсоток позитивних відгуків
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const TotalFeedback = this.countTotalFeedback(this.state);
    return Math.round((good / TotalFeedback) * 100);
  };

  render() {
    return (
      <Layout>
        <h2>Please leave feedback</h2>
        <div>
          <button name='good' onClick={this.onLeaveFeedback}>good</button>
          <button>neutral</button>
          <button>bad</button>
        </div>

        <h2>Statistics</h2>
        <div>
          <p>good</p>
          <p>neutral</p>
          <p>bad</p>
          <p>Total</p>
          <p>Positive feedback</p>
          <p>There is no feedback</p>
        </div>

        <GlobalStyle />
      </Layout>
    );
  }
}
