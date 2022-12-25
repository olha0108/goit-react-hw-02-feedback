import { Component } from 'react';

const FeedbackMap = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const positive = (good * 100) / total;
    return Math.round(positive);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          {FeedbackMap.map(feedback => (
            <li
              style={{
                listStyle: 'none',
              }}
              key={feedback.id}
            >
              <button
                name={feedback.id}
                type="button"
                onClick={this.handleClick}
                style={{ minWidth: 150 }}
              >
                {feedback.title}
              </button>
            </li>
          ))}
        </ul>{' '}
        <h3>Statistics</h3>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          {FeedbackMap.map(feedback => (
            <li key={feedback.id}>
              <p>
                {feedback.title}: <span>{this.state[feedback.id]}</span>
              </p>
            </li>
          ))}
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
        </ul>
      </>
    );
  }
}

